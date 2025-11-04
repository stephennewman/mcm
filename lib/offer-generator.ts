import OpenAI from 'openai';
import { ExtractedContent } from './content-extractor';

const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

export interface GeneratedOffer {
  title: string;
  type: string;
  description: string;
  valueProposition: string;
  deliveryFormat: string;
  targetAudience: string;
  conversionHook: string;
  implementationSteps: string[];
  estimatedValue: string;
  uniquenessScore: number;
}

export async function generateUniqueOffers(
  content: ExtractedContent,
  modelInsights: Array<{ name: string; insight: string; score: number }>
): Promise<GeneratedOffer[]> {
  if (!openai) {
    throw new Error('OpenAI API key not configured');
  }

  const businessInfo = content.businessInfo;
  const lowestScores = modelInsights
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map(m => `${m.name}: ${m.insight}`)
    .join('\n');

  const prompt = `You are a creative marketing strategist. Based on this company's analysis, generate 3 WILDLY UNIQUE marketing offers that would be irresistible lead magnets.

COMPANY CONTEXT:
- Name: ${businessInfo.siteName}
- Category: ${businessInfo.category}
- Type: ${businessInfo.companyType}
- Description: ${businessInfo.description}
- Products: ${businessInfo.products.join(', ')}
- Key Features: ${businessInfo.features.join(', ')}
- Target Markets: ${businessInfo.markets.join(', ')}
- Differentiation: ${businessInfo.differentiation.join(', ')}

BIGGEST GAPS (from AI analysis):
${lowestScores}

RULES:
1. NO generic ebooks, whitepapers, or templates
2. Each offer must be UNCONVENTIONAL and specific to their business
3. Must provide immediate, tangible value
4. Should address their biggest content/marketing gaps
5. Must be deliverable without massive effort
6. High perceived value ($500-2000+ equivalent)

UNCONVENTIONAL OFFER TYPES TO CONSIDER:
- Interactive tools/calculators
- Micro-certifications (1-hour)
- Done-with-you sessions
- Exclusive slack/community access
- Live diagnostic workshops
- Custom implementation blueprints
- Video teardowns/audits
- Office hours access
- Challenge programs (5-7 days)
- Curated resource libraries
- Private podcast series
- Implementation checklists with video walkthroughs
- Competitive intelligence reports
- Industry benchmark comparisons

Return ONLY valid JSON (no markdown):
{
  "offers": [
    {
      "title": "Specific, compelling title",
      "type": "Interactive Calculator/Live Workshop/etc",
      "description": "2-3 sentence description of what it is",
      "valueProposition": "One sentence: why this is irresistible",
      "deliveryFormat": "How it's delivered (platform, timeline, format)",
      "targetAudience": "Specific role/persona this appeals to",
      "conversionHook": "One sentence: the hook that makes them want it NOW",
      "implementationSteps": ["Step 1", "Step 2", "Step 3"],
      "estimatedValue": "Perceived market value (e.g., '$1,500 value')",
      "uniquenessScore": 95
    }
  ]
}`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.9, // High creativity
      max_tokens: 2000
    });

    const result = JSON.parse(response.choices[0].message.content || '{"offers":[]}');
    return result.offers || [];
  } catch (error) {
    console.error('Offer generation error:', error);
    return [];
  }
}

