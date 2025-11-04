export interface EnvValidation {
  isValid: boolean;
  missing: string[];
  warnings: string[];
}

const REQUIRED_KEYS = [
  'OPENAI_API_KEY',
  'ANTHROPIC_API_KEY',
  'GOOGLE_API_KEY',
  'PERPLEXITY_API_KEY',
  'MISTRAL_API_KEY',
  'GROQ_API_KEY',
  'GROK_API_KEY',
  'DEEPSEEK_API_KEY',
  'FIREWORKS_API_KEY'
];

export function validateEnv(): EnvValidation {
  const missing: string[] = [];
  const warnings: string[] = [];
  
  for (const key of REQUIRED_KEYS) {
    if (!process.env[key]) {
      missing.push(key);
      warnings.push(`${key} is not set - will use fallback heuristic scoring`);
    }
  }
  
  return {
    isValid: missing.length === 0,
    missing,
    warnings
  };
}

export function getAvailableModels(): string[] {
  const available: string[] = [];
  
  if (process.env.OPENAI_API_KEY) available.push('GPT-4o');
  if (process.env.ANTHROPIC_API_KEY) available.push('Claude 3.5');
  if (process.env.GOOGLE_API_KEY) available.push('Gemini 1.5');
  if (process.env.PERPLEXITY_API_KEY) available.push('Perplexity');
  if (process.env.MISTRAL_API_KEY) available.push('Mistral Large');
  if (process.env.GROQ_API_KEY) available.push('Groq');
  if (process.env.GROK_API_KEY) available.push('Grok');
  if (process.env.DEEPSEEK_API_KEY) available.push('DeepSeek');
  if (process.env.FIREWORKS_API_KEY) available.push('Fireworks AI');
  
  return available;
}

