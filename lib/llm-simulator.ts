import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';

const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;
const anthropic = process.env.ANTHROPIC_API_KEY ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY }) : null;
const google = process.env.GOOGLE_API_KEY ? new GoogleGenerativeAI(process.env.GOOGLE_API_KEY) : null;

export interface LLMResponse {
  model: string;
  response: string;
  hasInfo: boolean;
  hallucinations: string[];
  missing: string[];
  accuracy: 'accurate' | 'partial' | 'none' | 'hallucinated';
}

export async function simulateLLMResponses(
  companyName: string,
  actualInfo: {
    description: string;
    products: string[];
    category: string;
  }
): Promise<LLMResponse[]> {
  const query = `What can you tell me about ${companyName}?`;
  
  const results: LLMResponse[] = [];

  // Query ChatGPT
  if (openai) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          { 
            role: 'system', 
            content: 'You are a helpful assistant. Answer the question based only on your training data. Be concise (2-3 sentences). If you don\'t know, say so.' 
          },
          { role: 'user', content: query }
        ],
        temperature: 0.3,
        max_tokens: 200
      });

      const answer = response.choices[0].message.content || 'No response';
      const analysis = analyzeLLMResponse(answer, actualInfo);
      
      results.push({
        model: 'ChatGPT',
        response: answer,
        hasInfo: analysis.hasInfo,
        hallucinations: analysis.hallucinations,
        missing: analysis.missing,
        accuracy: analysis.accuracy
      });
    } catch (error) {
      console.error('ChatGPT simulation error:', error);
    }
  }

  // Query Claude
  if (anthropic) {
    try {
      const response = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 200,
        messages: [
          { 
            role: 'user', 
            content: `${query} Please answer based only on your training data. Be concise (2-3 sentences). If you don't know, say so.`
          }
        ]
      });

      const answer = response.content[0].type === 'text' ? response.content[0].text : 'No response';
      const analysis = analyzeLLMResponse(answer, actualInfo);
      
      results.push({
        model: 'Claude',
        response: answer,
        hasInfo: analysis.hasInfo,
        hallucinations: analysis.hallucinations,
        missing: analysis.missing,
        accuracy: analysis.accuracy
      });
    } catch (error) {
      console.error('Claude simulation error:', error);
    }
  }

  // Query Gemini
  if (google) {
    try {
      const model = google.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(`${query} Please answer based only on your training data. Be concise (2-3 sentences). If you don't know, say so.`);
      const answer = result.response.text();
      const analysis = analyzeLLMResponse(answer, actualInfo);
      
      results.push({
        model: 'Gemini',
        response: answer,
        hasInfo: analysis.hasInfo,
        hallucinations: analysis.hallucinations,
        missing: analysis.missing,
        accuracy: analysis.accuracy
      });
    } catch (error) {
      console.error('Gemini simulation error:', error);
    }
  }

  return results;
}

function analyzeLLMResponse(
  response: string,
  actualInfo: { description: string; products: string[]; category: string }
): {
  hasInfo: boolean;
  hallucinations: string[];
  missing: string[];
  accuracy: 'accurate' | 'partial' | 'none' | 'hallucinated';
} {
  const lowerResponse = response.toLowerCase();
  
  // Check if LLM has any info
  const noInfoPhrases = [
    "i don't have",
    "i don't know",
    "i cannot provide",
    "i'm not able",
    "no information",
    "not familiar",
    "cannot find",
    "don't have specific",
    "unable to provide"
  ];
  
  const hasNoInfo = noInfoPhrases.some(phrase => lowerResponse.includes(phrase));
  
  if (hasNoInfo) {
    return {
      hasInfo: false,
      hallucinations: [],
      missing: actualInfo.products,
      accuracy: 'none'
    };
  }

  // Check for mentions of actual info
  const mentionsCategory = lowerResponse.includes(actualInfo.category.toLowerCase());
  const mentionedProducts = actualInfo.products.filter(p => 
    lowerResponse.includes(p.toLowerCase().substring(0, Math.max(5, p.length - 5)))
  );
  
  const missingProducts = actualInfo.products.filter(p => !mentionedProducts.includes(p));

  // Determine accuracy
  let accuracy: 'accurate' | 'partial' | 'none' | 'hallucinated' = 'none';
  
  if (mentionsCategory || mentionedProducts.length > 0) {
    accuracy = mentionedProducts.length >= actualInfo.products.length / 2 ? 'accurate' : 'partial';
  }

  // Look for potential hallucinations (making specific claims)
  const hallucinations: string[] = [];
  const specificClaimPatterns = [
    /founded in \d{4}/i,
    /\$[\d,]+ (million|billion) in revenue/i,
    /\d+ employees/i,
    /headquartered in/i,
    /acquired by/i,
    /raised \$/i
  ];

  specificClaimPatterns.forEach(pattern => {
    const match = response.match(pattern);
    if (match) {
      hallucinations.push(match[0]);
    }
  });

  return {
    hasInfo: !hasNoInfo,
    hallucinations,
    missing: missingProducts.slice(0, 3), // Top 3 missing items
    accuracy
  };
}

