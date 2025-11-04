import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Groq from 'groq-sdk';
import { extractContent } from '@/lib/content-extractor';
import { generateFallbackScore, ModelScore } from '@/lib/heuristic-scoring';
import { checkRateLimit, getRateLimitHeaders } from '@/lib/rate-limiter';

// Initialize AI clients
const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;
const anthropic = process.env.ANTHROPIC_API_KEY ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY }) : null;
const google = process.env.GOOGLE_API_KEY ? new GoogleGenerativeAI(process.env.GOOGLE_API_KEY) : null;
const groq = process.env.GROQ_API_KEY ? new Groq({ apiKey: process.env.GROQ_API_KEY }) : null;

// OpenAI-compatible endpoints
const perplexity = process.env.PERPLEXITY_API_KEY ? new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: 'https://api.perplexity.ai'
}) : null;

const grok = process.env.GROK_API_KEY ? new OpenAI({
  apiKey: process.env.GROK_API_KEY,
  baseURL: 'https://api.x.ai/v1'
}) : null;

const deepseek = process.env.DEEPSEEK_API_KEY ? new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com'
}) : null;

const fireworks = process.env.FIREWORKS_API_KEY ? new OpenAI({
  apiKey: process.env.FIREWORKS_API_KEY,
  baseURL: 'https://api.fireworks.ai/inference/v1'
}) : null;

const mistral = process.env.MISTRAL_API_KEY ? new OpenAI({
  apiKey: process.env.MISTRAL_API_KEY,
  baseURL: 'https://api.mistral.ai/v1'
}) : null;

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }
    
    // Rate limiting
    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const rateLimit = checkRateLimit(clientIp);
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Try again later.' },
        { 
          status: 429,
          headers: getRateLimitHeaders(rateLimit.remaining, rateLimit.resetTime)
        }
      );
    }
    
    // Extract content from URL
    const content = await extractContent(url);
    
    // Create SSE stream
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const sendUpdate = (data: any) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
        };
        
        // Send initial status
        sendUpdate({ type: 'status', message: 'Analysis started', progress: 0 });
        
        // Send business info immediately
        sendUpdate({ type: 'business_info', data: content.businessInfo });
        
        // Analyze with all models in parallel
        const modelPromises = [
          analyzeWithGPT4(content, sendUpdate),
          analyzeWithClaude(content, sendUpdate),
          analyzeWithGemini(content, sendUpdate),
          analyzeWithPerplexity(content, sendUpdate),
          analyzeWithMistral(content, sendUpdate),
          analyzeWithGroq(content, sendUpdate),
          analyzeWithGrok(content, sendUpdate),
          analyzeWithDeepSeek(content, sendUpdate),
          analyzeWithFireworks(content, sendUpdate)
        ];
        
        // Wait for all to complete
        await Promise.allSettled(modelPromises);
        
        // Send completion
        sendUpdate({ type: 'complete' });
        controller.close();
      }
    });
    
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        ...getRateLimitHeaders(rateLimit.remaining, rateLimit.resetTime)
      }
    });
    
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to analyze website' },
      { status: 500 }
    );
  }
}

// Individual model analysis functions
async function analyzeWithGPT4(content: any, sendUpdate: (data: any) => void) {
  const modelName = 'GPT-4o';
  try {
    if (!openai) {
      throw new Error('API key not configured');
    }
    
    const prompt = createPrompt(modelName, content);
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.3,
      max_tokens: 500
    });
    
    // Remove markdown code blocks if present
    const messageContent = response.choices[0].message.content || '{}';
    const cleanContent = messageContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const result = JSON.parse(cleanContent);
    const modelScore: ModelScore = {
      name: modelName,
      logo: '/openai.svg',
      score: result.score || 50,
      color: '#10A37F',
      bgGradient: 'from-emerald-50 to-emerald-100',
      insight: result.insight || 'Analysis completed',
      category: 'Content Quality',
      isFallback: false
    };
    
    sendUpdate({ type: 'model_result', model: modelName, result: modelScore });
    return modelScore;
  } catch (error) {
    console.error(`${modelName} error:`, error);
    // Send error instead of fallback
    sendUpdate({ 
      type: 'model_error', 
      model: modelName, 
      error: error instanceof Error ? error.message : 'Analysis failed'
    });
    throw error;
  }
}

async function analyzeWithClaude(content: any, sendUpdate: (data: any) => void) {
  const modelName = 'Claude 3.5';
  try {
    if (!anthropic) {
      throw new Error('API key not configured');
    }
    
    const prompt = createPrompt(modelName, content);
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }]
    });
    
    const text = response.content[0].type === 'text' ? response.content[0].text : '{}';
    // Remove markdown code blocks if present
    const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const result = JSON.parse(cleanText);
    
    const modelScore: ModelScore = {
      name: modelName,
      logo: '/claude-logo-png_seeklogo-554534.png',
      score: result.score || 50,
      color: '#D97757',
      bgGradient: 'from-orange-50 to-orange-100',
      insight: result.insight || 'Analysis completed',
      category: 'Structure & Logic',
      isFallback: false
    };
    
    sendUpdate({ type: 'model_result', model: modelName, result: modelScore });
    return modelScore;
  } catch (error) {
    console.error(`${modelName} error:`, error);
    sendUpdate({ 
      type: 'model_error', 
      model: modelName, 
      error: error instanceof Error ? error.message : 'Analysis failed'
    });
    throw error;
  }
}

async function analyzeWithGemini(content: any, sendUpdate: (data: any) => void) {
  const modelName = 'Gemini 1.5';
  try {
    if (!google) {
      throw new Error('API key not configured');
    }
    
    const model = google.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = createPrompt(modelName, content);
    
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    // Remove markdown code blocks if present
    const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const parsed = JSON.parse(cleanText);
    
    const modelScore: ModelScore = {
      name: modelName,
      logo: '/gemini-color.png',
      score: parsed.score || 50,
      color: '#4285F4',
      bgGradient: 'from-blue-50 to-blue-100',
      insight: parsed.insight || 'Analysis completed',
      category: 'Google Signals',
      isFallback: false
    };
    
    sendUpdate({ type: 'model_result', model: modelName, result: modelScore });
    return modelScore;
  } catch (error) {
    console.error(`${modelName} error:`, error);
    sendUpdate({ 
      type: 'model_error', 
      model: modelName, 
      error: error instanceof Error ? error.message : 'Analysis failed'
    });
    throw error;
  }
}

async function analyzeWithPerplexity(content: any, sendUpdate: (data: any) => void) {
  const modelName = 'Perplexity';
  try {
    if (!perplexity) {
      throw new Error('API key not configured');
    }
    
    const prompt = createPrompt(modelName, content);
    const response = await perplexity.chat.completions.create({
      model: 'sonar-pro',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 500
    });
    
    // Remove markdown code blocks if present
    const messageContent = response.choices[0].message.content || '{}';
    const cleanContent = messageContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const result = JSON.parse(cleanContent);
    const modelScore: ModelScore = {
      name: modelName,
      logo: '/perplexity-color (1).png',
      score: result.score || 50,
      color: '#1FB8CD',
      bgGradient: 'from-cyan-50 to-cyan-100',
      insight: result.insight || 'Analysis completed',
      category: 'Citation Authority',
      isFallback: false
    };
    
    sendUpdate({ type: 'model_result', model: modelName, result: modelScore });
    return modelScore;
  } catch (error) {
    console.error(`${modelName} error:`, error);
    sendUpdate({ 
      type: 'model_error', 
      model: modelName, 
      error: error instanceof Error ? error.message : 'Analysis failed'
    });
    throw error;
  }
}

async function analyzeWithMistral(content: any, sendUpdate: (data: any) => void) {
  const modelName = 'Mistral Large';
  try {
    if (!mistral) {
      throw new Error('API key not configured');
    }
    
    const prompt = createPrompt(modelName, content);
    const response = await mistral.chat.completions.create({
      model: 'mistral-large-latest',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 500
    });
    
    // Remove markdown code blocks if present
    const messageContent = response.choices[0].message.content || '{}';
    const cleanContent = messageContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const result = JSON.parse(cleanContent);
    const modelScore: ModelScore = {
      name: modelName,
      logo: '/Mistral_AI_logo_(2025–).svg.png',
      score: result.score || 50,
      color: '#F2A73B',
      bgGradient: 'from-amber-50 to-amber-100',
      insight: result.insight || 'Analysis completed',
      category: 'International',
      isFallback: false
    };
    
    sendUpdate({ type: 'model_result', model: modelName, result: modelScore });
    return modelScore;
  } catch (error) {
    console.error(`${modelName} error:`, error);
    sendUpdate({ 
      type: 'model_error', 
      model: modelName, 
      error: error instanceof Error ? error.message : 'Analysis failed'
    });
    throw error;
  }
}

async function analyzeWithGroq(content: any, sendUpdate: (data: any) => void) {
  const modelName = 'Groq';
  try {
    if (!groq) {
      throw new Error('API key not configured');
    }
    
    const prompt = createPrompt(modelName, content);
    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 500
    });
    
    // Remove markdown code blocks if present
    const messageContent = response.choices[0].message.content || '{}';
    const cleanContent = messageContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const result = JSON.parse(cleanContent);
    const modelScore: ModelScore = {
      name: modelName,
      logo: '/GroqLogo_Black_1-icon.png',
      score: result.score || 50,
      color: '#000000',
      bgGradient: 'from-gray-50 to-gray-100',
      insight: result.insight || 'Analysis completed',
      category: 'Speed Analysis',
      isFallback: false
    };
    
    sendUpdate({ type: 'model_result', model: modelName, result: modelScore });
    return modelScore;
  } catch (error) {
    console.error(`${modelName} error:`, error);
    sendUpdate({ 
      type: 'model_error', 
      model: modelName, 
      error: error instanceof Error ? error.message : 'Analysis failed'
    });
    throw error;
  }
}

async function analyzeWithGrok(content: any, sendUpdate: (data: any) => void) {
  const modelName = 'Grok';
  try {
    if (!grok) {
      throw new Error('API key not configured');
    }
    
    const prompt = createPrompt(modelName, content);
    const response = await grok.chat.completions.create({
      model: 'grok-beta',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 500
    });
    
    // Remove markdown code blocks if present
    const messageContent = response.choices[0].message.content || '{}';
    const cleanContent = messageContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const result = JSON.parse(cleanContent);
    const modelScore: ModelScore = {
      name: modelName,
      logo: '/grok.png',
      score: result.score || 50,
      color: '#1DA1F2',
      bgGradient: 'from-sky-50 to-sky-100',
      insight: result.insight || 'Analysis completed',
      category: 'Social Signals',
      isFallback: false
    };
    
    sendUpdate({ type: 'model_result', model: modelName, result: modelScore });
    return modelScore;
  } catch (error) {
    console.error(`${modelName} error:`, error);
    sendUpdate({ 
      type: 'model_error', 
      model: modelName, 
      error: error instanceof Error ? error.message : 'Analysis failed'
    });
    throw error;
  }
}

async function analyzeWithDeepSeek(content: any, sendUpdate: (data: any) => void) {
  const modelName = 'DeepSeek';
  try {
    if (!deepseek) {
      throw new Error('API key not configured');
    }
    
    const prompt = createPrompt(modelName, content);
    const response = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 500
    });
    
    // Remove markdown code blocks if present
    const messageContent = response.choices[0].message.content || '{}';
    const cleanContent = messageContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const result = JSON.parse(cleanContent);
    const modelScore: ModelScore = {
      name: modelName,
      logo: '/deepseek.png',
      score: result.score || 50,
      color: '#5B8DEE',
      bgGradient: 'from-indigo-50 to-indigo-100',
      insight: result.insight || 'Analysis completed',
      category: 'Technical Depth',
      isFallback: false
    };
    
    sendUpdate({ type: 'model_result', model: modelName, result: modelScore });
    return modelScore;
  } catch (error) {
    console.error(`${modelName} error:`, error);
    sendUpdate({ 
      type: 'model_error', 
      model: modelName, 
      error: error instanceof Error ? error.message : 'Analysis failed'
    });
    throw error;
  }
}

async function analyzeWithFireworks(content: any, sendUpdate: (data: any) => void) {
  const modelName = 'Fireworks AI';
  try {
    if (!fireworks) {
      throw new Error('API key not configured');
    }
    
    const prompt = createPrompt(modelName, content);
    const response = await fireworks.chat.completions.create({
      model: 'accounts/fireworks/models/llama-v3p3-70b-instruct',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 500
    });
    
    // Remove markdown code blocks if present
    const messageContent = response.choices[0].message.content || '{}';
    const cleanContent = messageContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const result = JSON.parse(cleanContent);
    const modelScore: ModelScore = {
      name: modelName,
      logo: '/fireworks-color.png',
      score: result.score || 50,
      color: '#FF6B35',
      bgGradient: 'from-orange-50 to-red-100',
      insight: result.insight || 'Analysis completed',
      category: 'Developer Content',
      isFallback: false
    };
    
    sendUpdate({ type: 'model_result', model: modelName, result: modelScore });
    return modelScore;
  } catch (error) {
    console.error(`${modelName} error:`, error);
    sendUpdate({ 
      type: 'model_error', 
      model: modelName, 
      error: error instanceof Error ? error.message : 'Analysis failed'
    });
    throw error;
  }
}

function createPrompt(modelName: string, content: any): string {
  const focus = {
    'GPT-4o': 'content quality, tone (educational vs promotional), examples, and depth',
    'Claude 3.5': 'logical structure, semantic HTML, heading hierarchy, and reasoning flow',
    'Gemini 1.5': 'E-E-A-T signals, author credentials, expertise markers, and trustworthiness',
    'Perplexity': 'citation authority, backlink potential, and reference quality',
    'Mistral Large': 'content structure and international SEO readiness',
    'Groq': 'parsing speed, semantic HTML structure, and technical optimization',
    'Grok': 'social signals, shareability, and viral potential',
    'DeepSeek': 'technical depth, code examples, and specifications',
    'Fireworks AI': 'developer-focused content and API documentation quality'
  }[modelName] || 'general SEO quality';
  
  return `You are an SEO expert analyzing website content for LLM optimization.

Analyze this content focusing on: ${focus}

Website Data:
- Title: ${content.title}
- Meta Description: ${content.metaDescription}
- Word Count: ${content.wordCount}
- Headings: ${Object.entries(content.headings).map(([level, arr]) => `${level}: ${(arr as string[]).length}`).join(', ')}
- Has Author: ${content.hasAuthor}
- Has Dates: ${content.hasDates}
- Schemas: ${content.schemas.length} detected
- Semantic Tags: ${Object.entries(content.semanticTags).map(([tag, count]) => `${tag}: ${count}`).join(', ')}

Content Sample: ${content.mainContent.slice(0, 1500)}

Provide a score from 0-100 and a brief insight (1-2 sentences maximum) about what could be improved.

Respond ONLY in JSON format:
{
  "score": 75,
  "insight": "Brief actionable insight here"
}`;
}

