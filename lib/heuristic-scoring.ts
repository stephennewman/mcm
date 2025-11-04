import { ExtractedContent } from './content-extractor';

export interface ModelScore {
  name: string;
  logo: string;
  score: number;
  color: string;
  bgGradient: string;
  insight: string;
  category: string;
  isFallback?: boolean;
}

function analyzeContentDepth(content: ExtractedContent): number {
  let score = 0;
  
  // Word count scoring
  if (content.wordCount > 2000) score += 30;
  else if (content.wordCount > 1000) score += 20;
  else if (content.wordCount > 500) score += 10;
  
  // Heading hierarchy
  const totalHeadings = Object.values(content.headings).flat().length;
  if (totalHeadings > 10) score += 20;
  else if (totalHeadings > 5) score += 15;
  else if (totalHeadings > 2) score += 10;
  
  // Content structure
  if (content.schemas.length > 0) score += 25;
  if (content.metaDescription.length > 100) score += 15;
  if (content.hasAuthor) score += 10;
  
  return Math.min(score, 100);
}

function analyzeTone(content: ExtractedContent): number {
  const text = content.mainContent.toLowerCase();
  
  // Promotional keywords (negative)
  const promotional = ['best', 'amazing', 'incredible', 'revolutionary', 'game-changing', 'world-class'];
  const promoCount = promotional.filter(word => text.includes(word)).length;
  
  // Educational keywords (positive)
  const educational = ['example', 'how to', 'guide', 'tutorial', 'learn', 'understand', 'explain'];
  const eduCount = educational.filter(word => text.includes(word)).length;
  
  let score = 50;
  score += eduCount * 10;
  score -= promoCount * 5;
  
  return Math.max(0, Math.min(score, 100));
}

function analyzeStructure(content: ExtractedContent): number {
  let score = 0;
  
  // Semantic HTML usage
  const tagCount = Object.values(content.semanticTags).reduce((a, b) => a + b, 0);
  if (tagCount > 5) score += 30;
  else if (tagCount > 2) score += 20;
  else if (tagCount > 0) score += 10;
  
  // Proper heading hierarchy
  if (content.headings.h1.length === 1) score += 15;
  if (content.headings.h2.length > 0) score += 15;
  if (content.headings.h3.length > 0) score += 10;
  
  // JSON-LD schemas
  if (content.schemas.length > 2) score += 30;
  else if (content.schemas.length > 0) score += 20;
  
  return Math.min(score, 100);
}

function analyzeAuthority(content: ExtractedContent): number {
  let score = 0;
  
  // Author attribution
  if (content.hasAuthor) score += 30;
  
  // Dates
  if (content.hasDates) score += 25;
  
  // Schema markup
  const hasArticleSchema = content.schemas.some(s => s['@type'] === 'Article');
  const hasAuthorSchema = content.schemas.some(s => s.author);
  if (hasArticleSchema) score += 20;
  if (hasAuthorSchema) score += 15;
  
  // Metadata
  if (content.metaDescription.length > 0) score += 10;
  
  return Math.min(score, 100);
}

export function generateFallbackScore(modelName: string, content: ExtractedContent): ModelScore {
  let score = 50;
  let insight = '';
  let category = '';
  
  switch (modelName) {
    case 'GPT-4o':
      score = Math.round((analyzeContentDepth(content) + analyzeTone(content)) / 2);
      insight = `Content is ${content.wordCount} words. ${content.wordCount < 1000 ? 'Consider expanding to 2000+ words for better depth.' : 'Good content depth detected.'}`;
      category = 'Content Quality';
      break;
      
    case 'Claude 3.5':
      score = analyzeStructure(content);
      insight = `${content.schemas.length} schemas detected. ${content.headings.h1.length === 1 ? 'Good heading hierarchy.' : 'Consider using single H1 tag.'}`;
      category = 'Structure & Logic';
      break;
      
    case 'Gemini 1.5':
      score = analyzeAuthority(content);
      insight = `${content.hasAuthor ? 'Author detected' : 'Missing author attribution'}. ${content.hasDates ? 'Dates present.' : 'Add publication dates.'}`;
      category = 'Google Signals';
      break;
      
    case 'Perplexity':
      score = Math.round(analyzeAuthority(content) * 0.7);
      insight = `${content.schemas.length > 0 ? 'Schema markup helps citability' : 'No structured data detected'}. Build authoritative backlinks for better citation.`;
      category = 'Citation Authority';
      break;
      
    case 'Mistral Large':
      score = Math.round((analyzeStructure(content) + analyzeContentDepth(content)) / 2);
      insight = `Content structure ${score > 70 ? 'is strong' : 'needs improvement'}. ${content.openGraph.title ? 'Good metadata detected.' : 'Add Open Graph tags.'}`;
      category = 'International';
      break;
      
    case 'Groq':
      score = analyzeStructure(content);
      insight = `Semantic HTML ${content.semanticTags.article > 0 || content.semanticTags.main > 0 ? 'detected and validated' : 'could be improved'}. Fast parsing confirmed.`;
      category = 'Speed Analysis';
      break;
      
    case 'Grok':
      score = 50;
      insight = `Social signals analysis unavailable. Increase X/Twitter presence for better visibility.`;
      category = 'Social Signals';
      break;
      
    case 'DeepSeek':
      score = analyzeContentDepth(content);
      insight = `Technical depth at ${content.wordCount} words. ${content.wordCount < 2000 ? 'Add code examples and specifications to reach 2000+ words.' : 'Good technical depth detected.'}`;
      category = 'Technical Depth';
      break;
      
    case 'Fireworks AI':
      score = Math.round((analyzeContentDepth(content) + analyzeStructure(content)) / 2);
      insight = `${score > 70 ? 'Good' : 'Limited'} developer-focused content detected. Consider adding API documentation examples.`;
      category = 'Developer Content';
      break;
  }
  
  const modelConfig = {
    'GPT-4o': { logo: '/openai.svg', color: '#10A37F', bgGradient: 'from-emerald-50 to-emerald-100' },
    'Claude 3.5': { logo: '/claude-logo-png_seeklogo-554534.png', color: '#D97757', bgGradient: 'from-orange-50 to-orange-100' },
    'Gemini 1.5': { logo: '/gemini-color.png', color: '#4285F4', bgGradient: 'from-blue-50 to-blue-100' },
    'Perplexity': { logo: '/perplexity-color (1).png', color: '#1FB8CD', bgGradient: 'from-cyan-50 to-cyan-100' },
    'Mistral Large': { logo: '/Mistral_AI_logo_(2025–).svg.png', color: '#F2A73B', bgGradient: 'from-amber-50 to-amber-100' },
    'Groq': { logo: '/GroqLogo_Black_1-icon.png', color: '#000000', bgGradient: 'from-gray-50 to-gray-100' },
    'Grok': { logo: '/grok.png', color: '#1DA1F2', bgGradient: 'from-sky-50 to-sky-100' },
    'DeepSeek': { logo: '/deepseek.png', color: '#5B8DEE', bgGradient: 'from-indigo-50 to-indigo-100' },
    'Fireworks AI': { logo: '/fireworks-color.png', color: '#FF6B35', bgGradient: 'from-orange-50 to-red-100' }
  };
  
  const config = modelConfig[modelName as keyof typeof modelConfig] || modelConfig['GPT-4o'];
  
  return {
    name: modelName,
    logo: config.logo,
    score,
    color: config.color,
    bgGradient: config.bgGradient,
    insight,
    category,
    isFallback: true
  };
}

