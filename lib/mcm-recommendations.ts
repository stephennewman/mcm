import OpenAI from 'openai';
import { ExtractedContent } from './content-extractor';

const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

export interface MCMRecommendation {
  category: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  title: string;
  problem: string;
  solution: string;
  implementation: string;
  impact: string;
  schemaExample?: string;
  llmBenefit: string;
}

export async function generateMCMRecommendations(
  content: ExtractedContent,
  modelInsights: Array<{ name: string; insight: string; score: number }>
): Promise<MCMRecommendation[]> {
  if (!openai) {
    throw new Error('OpenAI API key not configured');
  }

  const businessInfo = content.businessInfo;
  const avgScore = modelInsights.reduce((sum, m) => sum + m.score, 0) / modelInsights.length;
  
  const allInsights = modelInsights
    .sort((a, b) => a.score - b.score)
    .map(m => `${m.name} (${m.score}/100): ${m.insight}`)
    .join('\n');

  const prompt = `You are an expert in Model Context Marketing (MCM) - optimizing content for LLM recommendations.

ANALYZED SITE:
- Name: ${businessInfo.siteName}
- Category: ${businessInfo.category}
- Products: ${businessInfo.products.join(', ')}
- Average MCM Score: ${Math.round(avgScore)}/100

CURRENT STATE:
- Word Count: ${content.wordCount}
- Schemas Detected: ${content.schemas.length} (${content.schemas.map(s => s['@type']).join(', ')})
- Has Author: ${content.hasAuthor ? 'Yes' : 'No'}
- Has Dates: ${content.hasDates ? 'Yes' : 'No'}
- Semantic HTML: ${Object.entries(content.semanticTags).filter(([_, count]) => count > 0).map(([tag]) => tag).join(', ') || 'None'}

AI MODEL FEEDBACK:
${allInsights}

Generate 5-7 specific MCM recommendations to help this site get recommended by LLMs (ChatGPT, Claude, Perplexity, etc.).

FOCUS ON:
1. Schema markup gaps (JSON-LD)
2. Content structure issues (semantic HTML, headings)
3. Authority signals (author, credentials, dates)
4. Factual/research-based content needs
5. LLM crawler optimization (robots.txt, sitemap)
6. Entity definition and relationships
7. Citation-worthy content creation

AVOID:
- Generic SEO advice
- Traditional marketing tactics
- Vague recommendations
- Anything about paid ads or social media

Return ONLY valid JSON (no markdown):
{
  "recommendations": [
    {
      "category": "Schema Markup|Content Structure|Authority Signals|Factual Content|Technical Optimization",
      "priority": "Critical|High|Medium|Low",
      "title": "Brief, actionable title (40 chars max)",
      "problem": "What's missing or wrong (1 sentence)",
      "solution": "What to do about it (1 sentence)",
      "implementation": "Specific steps to implement (60 words max)",
      "impact": "Why this helps LLM recommendations (30 words max)",
      "schemaExample": "JSON-LD code snippet if applicable, or empty string",
      "llmBenefit": "Which LLMs benefit most: ChatGPT, Claude, Perplexity, or All"
    }
  ]
}`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.3,
      max_tokens: 2500
    });

    const result = JSON.parse(response.choices[0].message.content || '{"recommendations":[]}');
    return result.recommendations || [];
  } catch (error) {
    console.error('MCM recommendations error:', error);
    return [];
  }
}

