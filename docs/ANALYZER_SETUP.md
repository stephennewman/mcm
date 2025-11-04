# MCM Analyzer - Setup & Usage Guide

## Overview

The MCM Analyzer is a production-ready tool that analyzes websites using **9 real AI models** (GPT-4, Claude, Gemini, Perplexity, Mistral, Groq, Grok, DeepSeek, and Fireworks AI) to provide comprehensive Model Context Marketing scores and recommendations.

## Features

### ✅ Implemented
- Real-time analysis with 9 AI models running in parallel
- Server-Sent Events (SSE) streaming for live score updates
- Content extraction (HTML parsing, schema detection, semantic analysis)
- Heuristic fallback scoring when API keys unavailable
- Rate limiting (10 requests/hour per IP)
- Loading states with animated skeletons
- Error handling with retry options
- Visual indicators for fallback vs. real AI scores

### 🎯 What It Analyzes
1. **Content Quality** - Word count, tone, depth, examples
2. **Structure & Logic** - Semantic HTML, heading hierarchy
3. **Authority Signals** - Author credentials, E-E-A-T markers, dates
4. **LLM Optimization** - Schema markup, metadata, crawlability
5. **Citation Potential** - Backlink quality, reference-ability
6. **Technical Depth** - Code examples, specifications
7. **Social Signals** - Shareability, viral potential
8. **Speed Analysis** - Parsing efficiency
9. **Developer Content** - API docs, integration guides

## Setup Instructions

### 1. Verify Installation

Dependencies were already installed:
```bash
✅ openai
✅ @anthropic-ai/sdk
✅ @google/generative-ai
✅ groq-sdk
✅ cheerio
```

### 2. Configure API Keys

Create/update `.env.local` in the project root with your API keys:

```bash
# OpenAI (GPT-4)
OPENAI_API_KEY=sk-...

# Anthropic (Claude)
ANTHROPIC_API_KEY=sk-ant-...

# Google (Gemini)
GOOGLE_API_KEY=AI...

# Perplexity
PERPLEXITY_API_KEY=pplx-...

# Mistral
MISTRAL_API_KEY=...

# Groq
GROQ_API_KEY=gsk_...

# Grok (X.AI)
GROK_API_KEY=xai-...

# DeepSeek
DEEPSEEK_API_KEY=sk-...

# Fireworks AI
FIREWORKS_API_KEY=fw_...
```

**Note:** Missing API keys are OK! The analyzer will automatically fall back to heuristic scoring for models without keys.

### 3. Start the Development Server

```bash
npm run dev
```

Server runs at: http://localhost:3000

### 4. Access the Analyzer

Navigate to: http://localhost:3000/analyzer

## Usage

1. **Enter a URL** - Type any website URL (https:// is optional)
2. **Click Analyze** - Redirects to results page
3. **Watch Real-Time Results** - Scores appear as each AI model completes (4-8 seconds)
4. **Review Insights** - Each model provides specific recommendations

### Example URLs to Test
- `https://modelcontextmarketing.com`
- `https://stripe.com/docs`
- `https://vercel.com`
- `https://anthropic.com`

## How It Works

### Architecture

```
User enters URL
     ↓
[/analyzer] Input form validates URL
     ↓
POST to /api/analyze
     ↓
[Backend]
  1. Fetch HTML from URL
  2. Extract content (cheerio)
  3. Call 9 AI models in parallel
  4. Stream results via SSE
     ↓
[/analyzer/results] Real-time updates
  - Loading skeletons
  - Scores appear as completed
  - Overall score calculated dynamically
```

### API Endpoint: `/api/analyze`

**Method:** POST  
**Body:** `{ "url": "https://example.com" }`  
**Response:** Server-Sent Events stream  

**Event Types:**
- `status` - Progress updates
- `model_result` - Individual model score
- `complete` - Analysis finished

### Rate Limiting

- **Limit:** 10 requests per hour per IP
- **Reset:** Rolling 1-hour window
- **Response Headers:**
  - `X-RateLimit-Limit: 10`
  - `X-RateLimit-Remaining: 9`
  - `X-RateLimit-Reset: 1699564800`

## Cost Breakdown

### Per Analysis (with all 9 models):
| Model | Cost | Speed |
|-------|------|-------|
| GPT-4o | ~$0.01 | 2-3s |
| Claude 3.5 | ~$0.012 | 2-3s |
| Gemini 1.5 | ~$0.005 | 1-2s |
| Perplexity | ~$0.004 | 2-4s |
| Mistral Large | ~$0.008 | 2-3s |
| Groq | ~$0.001 | <1s |
| Grok | ~$0.02 | 2-4s |
| DeepSeek | ~$0.001 | 1-2s |
| Fireworks AI | ~$0.0008 | 1-2s |
| **Total** | **~$0.06-0.10** | **4-8s** |

### Monthly Estimates
- 100 analyses: $6-10
- 500 analyses: $30-50
- 1,000 analyses: $60-100

## Troubleshooting

### Missing API Keys
**Symptom:** Some models show 📊 icon  
**Cause:** API key not configured  
**Solution:** Add key to `.env.local` or accept heuristic scores

### Rate Limit Exceeded
**Symptom:** 429 error  
**Cause:** More than 10 requests in 1 hour  
**Solution:** Wait for reset time (shown in error)

### Analysis Fails
**Symptom:** Error page displayed  
**Cause:** Invalid URL or network issue  
**Solution:** Check URL and try again

### Slow Loading
**Symptom:** Takes longer than 10 seconds  
**Cause:** Some AI APIs may be slow  
**Solution:** Results stream progressively, wait for all models

## File Structure

```
/app
  /analyzer
    page.tsx               # Input form
    /results
      page.tsx             # Real-time results display
  /api
    /analyze
      route.ts             # SSE streaming endpoint

/lib
  content-extractor.ts     # HTML parsing & content extraction
  heuristic-scoring.ts     # Fallback scoring algorithms
  rate-limiter.ts          # IP-based rate limiting
  validate-env.ts          # API key validation
```

## Model-Specific Analysis

### GPT-4o (OpenAI)
**Focus:** Content quality, tone, depth  
**Checks:** Word count, promotional vs educational language, examples  
**Score Range:** 0-100

### Claude 3.5 (Anthropic)
**Focus:** Structure & logic  
**Checks:** Semantic HTML, heading hierarchy, content flow  
**Score Range:** 0-100

### Gemini 1.5 (Google)
**Focus:** E-E-A-T signals  
**Checks:** Author credentials, expertise markers, trustworthiness  
**Score Range:** 0-100

### Perplexity
**Focus:** Citation authority  
**Checks:** Backlink potential, reference quality, citability  
**Score Range:** 0-100

### Mistral Large
**Focus:** International SEO  
**Checks:** Multilingual signals, content structure  
**Score Range:** 0-100

### Groq
**Focus:** Speed & parsing  
**Checks:** Semantic HTML, technical optimization  
**Score Range:** 0-100

### Grok (X.AI)
**Focus:** Social signals  
**Checks:** Shareability, X/Twitter presence  
**Score Range:** 0-100

### DeepSeek
**Focus:** Technical depth  
**Checks:** Code examples, specifications, technical detail  
**Score Range:** 0-100

### Fireworks AI
**Focus:** Developer content  
**Checks:** API documentation, integration guides  
**Score Range:** 0-100

## Next Steps

### Ready to Deploy
```bash
npm run build    # Build for production
npm start        # Start production server
```

### Deploy to Vercel
```bash
vercel           # Follow prompts
```

**Important:** Add all API keys as environment variables in Vercel dashboard.

## Support

For issues or questions:
1. Check `docs/AI_Onboarding.md` for project overview
2. Review `docs/ANALYZER_REPORT_FEATURES.md` for planned features
3. Check logs in terminal for API errors

## Development

### Add New AI Model
1. Add API client in `/app/api/analyze/route.ts`
2. Create `analyzeWith[ModelName]()` function
3. Add to `Promise.allSettled()` array
4. Update heuristic scoring in `/lib/heuristic-scoring.ts`

### Modify Scoring Logic
Edit `/lib/heuristic-scoring.ts` - each model has dedicated scoring function

### Adjust Rate Limits
Edit `/lib/rate-limiter.ts` - change `RATE_LIMIT` and `WINDOW_MS` constants

## Production Considerations

✅ **Implemented:**
- Rate limiting
- Error handling
- Graceful degradation
- Loading states
- Responsive design

🚧 **Recommended for Production:**
- Add authentication
- Implement caching (Redis)
- Add webhook notifications
- Store results in database
- Add export to PDF
- Implement competitor comparison

## Status

**Build:** ✅ Successful  
**Dev Server:** ✅ Running on http://localhost:3000  
**API Endpoint:** ✅ Functional at http://localhost:3000/api/analyze  
**Real AI Integration:** ✅ All 9 models configured  
**Fallback Scoring:** ✅ Active for missing API keys  

**Ready for testing!** 🎉

