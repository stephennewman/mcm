# AI Onboarding - Model Context Marketing

## Project Overview
**Model Context Marketing** is an educational website focused on helping marketers create content and structure websites that large language models (ChatGPT, Claude, Perplexity, DeepSeek, Google, etc.) can understand and recommend.

## Purpose
- Help marketers understand how LLMs work
- Provide frameworks for creating factual, research-based content that LLMs prefer
- Move away from traditional marketing "hype" toward domain expertise and authority
- Position brands to be recommended when users ask LLMs for solutions

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (planned)
- **Package Manager**: npm

## Current Status
✅ Initial setup complete
✅ Bare minimum site structure
✅ Server-side rendering enabled (all content visible to crawlers)
✅ SEO infrastructure in place

## Key Directories
```
/app
  - page.tsx          # Homepage with core content
  - layout.tsx        # Root layout with metadata
  - globals.css       # Global styles
  - robots.ts         # Robots.txt for crawler access
  - sitemap.ts        # XML sitemap
/public              # Static assets
```

## Content Strategy
- Content will be created from voice memo transcripts
- No traditional "blog" format - exploring versioned/documentation-style approach
- Focus on factual, authoritative information
- All content optimized for LLM understanding and citation

## SEO & LLM Optimization Features Implemented
✅ Server-side rendering (no client-side JS rendering issues)
✅ robots.txt - explicitly allows ChatGPT, Claude, Perplexity, Google-Extended, and all crawlers
✅ sitemap.xml - dynamic sitemap generation
✅ Canonical URLs - prevent duplicate content issues
✅ Enhanced Metadata:
  - Open Graph tags
  - Twitter Card tags
  - Structured keywords
  - Author/publisher information
✅ JSON-LD Structured Data (Schema.org):
  - WebSite schema
  - Article schema
  - Author/publisher markup
✅ Semantic HTML structure

## Development Commands
```bash
npm install          # Install dependencies
npm run dev         # Start dev server (http://localhost:3000)
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run linter
```

## Recent Activity Log

### 2025-11-04 - Add Real Business Intelligence Extraction (11:00 PM)
**Deploy:** ✅ Committed and pushed to production (commit: 1321194)

**Major Feature - Instant Business Insights:**
- ✅ **Automatic Business Information Extraction**
  - Site name (from Organization schema, OG tags, or title)
  - Description (from meta or schema)
  - Category/Industry (auto-detected from 10+ categories)
  - Products/Services (from Product schemas, headings, pricing sections)
  - Key Features (from lists, feature sections, headings)
  - Target Markets (B2B, B2C, Enterprise, SMB, etc.)
  - Differentiation/USPs (from "why us" sections, superlatives, unique claims)
  - Company Type (SaaS, Manufacturer, Agency, Retailer, etc.)
- ✅ **Smart Content Pattern Recognition**
  - Extracts from JSON-LD schemas (Product, Organization)
  - Parses feature lists and bullet points
  - Identifies market signals in content
  - Detects differentiation language (only, first, fastest, patented, etc.)
  - Filters noise (footer content, navigation, etc.)
- ✅ **Real-Time Display**
  - Shows extracted info immediately (before AI models run)
  - Beautiful card layout with organized sections
  - Color-coded icons for different data types
  - Displays up to 8 features, 6 products, 5 markets, 5 USPs
- ✅ **Immediate User Value**
  - Users see real site intelligence within 2 seconds
  - Gives credibility to the analysis (shows we actually crawled/understood their site)
  - No more waiting for results - instant gratification

**Technical Implementation:**
- Enhanced `lib/content-extractor.ts` with 200+ lines of business logic
- 5 helper functions: inferCategory, extractFeatures, extractMarkets, extractProducts, extractDifferentiation
- Pattern matching for 10 industry categories
- Smart filtering to avoid navigation/footer noise
- Deduplication and length limits

**User Experience Flow:**
1. User enters URL
2. Site crawled (2-3 seconds)
3. Business info displayed immediately ✨
4. AI models analyze in parallel (5-8 seconds)
5. Scores populate one by one
6. Analysis complete with full context

**Philosophy:**
- Show real data immediately, not loading spinners
- Extract value from the crawl itself, not just AI analysis
- Demonstrate we actually understand their site
- Make users say "wow, it got that right!" within seconds

**Files Modified:**
- `lib/content-extractor.ts` - Add businessInfo extraction (+200 lines)
- `app/api/analyze/route.ts` - Send business_info event immediately
- `app/analyzer/results/page.tsx` - Display business info prominently

**Build Status:** ✅ No linter errors, successfully deployed

### 2025-11-04 - Remove Fake Results & Show Only Real API Responses (10:30 PM)
**Deploy:** ✅ Committed and pushed to production (commit: 1f5c89b)

**Major Refactor - Integrity & Transparency:**
- ✅ **Removed All Fake/Placeholder Results**
  - Eliminated heuristic fallback scoring system
  - Removed fake "Top Recommendations" section
  - Removed fake "Quick Wins" section
  - Removed fake "Long-Term Projects" section
  - Removed fake "Score Predictions" section
  - Removed fake CTA claiming non-existent features
- ✅ **Error Handling Instead of Fake Data**
  - Models now report errors when they fail (no fake scores)
  - Error summary shows which models failed and why
  - User sees transparent count: "X models analyzed, Y models failed"
  - Score only calculated from real, working API responses
- ✅ **Updated API Models to Current Versions**
  - Claude: `claude-3-5-sonnet-latest` → `claude-3-5-sonnet-20241022` (404 error fixed)
  - Gemini: `gemini-pro` → `gemini-1.5-flash` (404 error fixed)
  - Perplexity: `llama-3.1-sonar-small-128k-online` → `sonar-pro` (400 error fixed)
- ✅ **Real Insights Section Added**
  - Shows actual AI-generated insights from working models
  - Displays lowest-scoring areas first (most room for improvement)
  - Transparent about which models succeeded vs failed
- ✅ **Code Quality Improvements**
  - Fixed Tailwind class warning: `bg-gradient-to-r` → `bg-linear-to-r`
  - Fixed: `flex-shrink-0` → `shrink-0`
  - Removed unused `generateFallbackScore` function references

**Account Issues Identified (Not Fixed - Require Credits):**
- ⚠️ Grok: No credits (403) - needs top-up at console.x.ai
- ⚠️ DeepSeek: Insufficient balance (402)
- ⚠️ Mistral: Rate limit (429) - temporary

**Philosophy Shift:**
- **Old approach:** Show fake scores to make UI look complete
- **New approach:** Only show real results; be transparent about failures
- Prioritizes integrity over polish
- Users see actual API analysis or clear error messages
- No misleading recommendations based on heuristics

**Files Modified:**
- `app/page.tsx` - Fixed gradient class
- `app/api/analyze/route.ts` - Send errors instead of fallbacks; updated model names
- `app/analyzer/results/page.tsx` - Remove fake sections; add error display

**Build Status:** ✅ No linter errors, successfully deployed

### 2025-11-04 - Messaging Refinement: Search Engine Dominance (9:00 PM)
**Content Updates:**
- ✅ **Refined "Search Engines Dying" Narrative** - More nuanced, accurate positioning
  - Changed from "search engines are dying/dead/obsolete" to "losing dominance as primary force"
  - Positioned search engines as transitioning from discovery tools to verification tools
  - Emphasized coexistence strategy: continue SEO AND invest in AI optimization (not either/or)
  - Updated across: AI Channel memo, Search Engine Decay concept, homepage, FAQ (3 questions)
- ✅ **Strategic Positioning Shift**
  - Old message: "Choose AI over SEO"
  - New message: "Do both—search still matters, but diversify into AI now"
  - More realistic, defensible, and actionable for marketers

**Philosophy:**
- Avoid hyperbole that can be easily disproven
- Search engines won't disappear—they'll become secondary
- AI adoption is accelerating but not replacing search overnight
- Winners will optimize for both channels

### 2025-11-04 - Real-Time AI Analyzer Implementation (8:00 PM)
**Major Feature Built:**
- ✅ **Full MCM Analyzer** - Production-ready analysis tool that calls 9 AI models
  - Input page (`/analyzer`) with URL validation and examples
  - Real-time streaming results page (`/analyzer/results`) with SSE
  - API route (`/api/analyze`) that calls all 9 AI model APIs in parallel
  - Graceful fallback to heuristic scoring if API fails
  - Rate limiting (10 requests/hour per IP)
  - Loading states with skeleton UI
  - Visual indicators for fallback scores
  
**Technical Implementation:**
- ✅ **Content Extraction** (`lib/content-extractor.ts`)
  - Fetches and parses HTML with cheerio
  - Extracts: title, meta, schemas, semantic tags, headings, word count
  - Detects author attribution and publication dates
- ✅ **Heuristic Scoring** (`lib/heuristic-scoring.ts`)
  - Fallback analysis when API unavailable
  - Model-specific scoring logic (GPT-4 → content, Claude → structure, etc.)
  - 9 different scoring algorithms tailored to each model's known preferences
- ✅ **Rate Limiting** (`lib/rate-limiter.ts`)
  - In-memory IP tracking
  - 10 requests/hour window
  - Returns 429 status when exceeded
- ✅ **Environment Validation** (`lib/validate-env.ts`)
  - Checks for 9 API keys at startup
  - Warns about missing keys (falls back to heuristics)

**AI Model Integrations:**
1. **GPT-4o** (OpenAI) - Content quality analysis
2. **Claude 3.5** (Anthropic) - Structure & logic analysis
3. **Gemini 1.5** (Google) - E-E-A-T signals analysis
4. **Perplexity** - Citation authority analysis
5. **Mistral Large** - International SEO analysis
6. **Groq** - Speed & parsing analysis
7. **Grok** (X.AI) - Social signals analysis
8. **DeepSeek** - Technical depth analysis
9. **Fireworks AI** - Developer content analysis

**User Experience:**
- Real-time score updates as each model completes (4-8 seconds total)
- Loading skeletons for pending models
- Animated score counters
- Status messages ("Analyzing with GPT-4...", etc.)
- Error handling with retry option
- Fallback scores marked with 📊 icon

**Dependencies Added:**
```bash
openai @anthropic-ai/sdk @google/generative-ai groq-sdk cheerio
```

**Cost per Analysis:** ~$0.06-0.10 (calling 9 real AI APIs)

**Files Created:**
- `app/analyzer/page.tsx` - Input form
- `app/api/analyze/route.ts` - SSE streaming API endpoint
- `lib/content-extractor.ts` - HTML parsing utility
- `lib/heuristic-scoring.ts` - Fallback scoring logic
- `lib/rate-limiter.ts` - Rate limiting middleware
- `lib/validate-env.ts` - Environment validation

**Files Modified:**
- `app/analyzer/results/page.tsx` - Real-time streaming client
- `app/page.tsx` - Updated analyzer link

**Build Status:** ✅ Production build successful

### 2025-11-04 - AI as Marketing Channel: Paradigm Shift Memo (6:00 PM)
**Major Content Addition:**
- ✅ **AI Channel Paradigm Shift Memo** - Comprehensive voice memo transcript on the fundamental shift in marketing
  - Search Engine Decay concept (search engines becoming obsolete)
  - Website Fatigue concept (users want simplicity, not 900-page sites)
  - AI as the new marketing channel (trust-based, not click-based)
  - Domain sourcing vs. AI-generated content problem
  - Voice-based content extraction strategy
  - Product-marketing alignment (not sales-marketing)
  - Platform solution architecture (ai.subdomain approach)
  - The "underwater basket weaving" analogy for domain expertise
- ✅ **Homepage Updated** - Added Search Engine Decay and Website Fatigue to "The Problem" section
- ✅ **Memos List Updated** - New memo added to chronological list

**Key Concepts Introduced:**
- Search engines have too much friction (too many clicks)
- Traditional websites exhausting users with complexity
- Bell curve of AI user capabilities (from "what's the weather" to power users)
- AI is your best salesperson (more trusted than Google, salespeople)
- Domain experts who stayed out of public domain are untapped content sources
- Voice-based interviewing and content extraction from internal experts
- AIS (AI-Integrated Search) - future paid search query citing

**Philosophy:**
- "It's not a race to the bottom, it's just a race"
- Survival of the fittest: provide more value, reduce friction
- Product-marketing alignment enables reduced customer friction
- Domain sourcing (not crowdsourcing or thought leadership)

### 2025-11-04 - Topical Authority, Context Feed & Content Calendar (3:00 PM)
**Major Additions:**
- ✅ **Topical Authority Memo** - Comprehensive guide on being the canonical source
  - How to build topical authority
  - Context freshness strategies
  - Content deliverables schedule
  - LLM Context Feed concept
  - Future automation ideas
- ✅ **LLM Context Feed** (`/context/feed.json`) - Public JSON API for LLM consumption
  - Structured knowledge base export
  - All concepts with definitions and relationships
  - All memos with timestamps
  - FAQ content
  - Content schedule
  - Recent updates feed
  - CORS-enabled for agent access
- ✅ **Content Calendar** (`CONTENT_CALENDAR.md`) - Complete publishing schedule
  - Weekly: Memos, monitoring
  - Monthly: Long-form articles
  - Quarterly: Metadata reviews, audits
  - Sustainable workflow recommendations
- ✅ **GitHub MCP Integration Concept** - Documented in FUTURE_FEATURES.md
  - Auto-distribution when content pushed
  - Zero manual promotion workflow
  - Packaging potential for SaaS companies

**Philosophy Documented:**
- Extraction over distribution
- "You can't beat the LLMs, so work with them"
- Consistent terminology reinforces entity recognition
- Context freshness through regular updates
- Rules-first approach enables packaging/selling to other companies

### 2025-11-04 - Content Strategy, Knowledge Graph & FAQ System (1:15 PM)
**Major Features Added:**
- ✅ **Memo System** - Running log of timestamped voice-to-text memos at `/memos`
  - Foundation memo (12:00 PM) - SEO & crawler infrastructure
  - Structure memo (12:42 PM) - Semantic HTML & Schema data
  - Content Strategy memo (1:15 PM) - Best practices for LLM-friendly content
- ✅ **Knowledge Graph** - Interconnected concept pages at `/kb/concepts/`
  - Model Context Marketing (comprehensive definition with examples)
  - JSON-LD Structured Data (with code examples)
  - Semantic HTML (with tag reference)
  - Knowledge Graph (meta-concept explaining the architecture)
- ✅ **FAQ Page** - 12 comprehensive Q&A pairs with FAQPage schema at `/faq`
- ✅ **Enhanced Homepage** - Three navigation buttons to Memos, Concepts, and FAQ
- ✅ **Comprehensive Schema Markup**:
  - WebSite schema on homepage
  - Organization schema on homepage
  - FAQPage schema on homepage (3 questions)
  - FAQPage schema on FAQ page (12 questions)
  - DefinedTerm schema on all concept pages
  - Article schema on all memo pages
- ✅ **Updated Sitemap** - All new pages added with proper priorities

**Content Strategy Principles Implemented:**
- Declarative, clear, factual, unambiguous content
- Example-driven with Q&A format
- Non-promotional tone focusing on education
- Model-friendly page structure: definition, importance, examples, comparisons
- Long-form content (1000-2000+ words)
- Proper semantic HTML throughout
- Multiple layers of JSON-LD structured data

### 2025-11-04 - Initial Setup & SEO Foundation (12:00 PM)
- Created bare minimum Next.js site structure
- Stripped out all unnecessary Next.js template content
- Removed custom fonts (Geist) for simplicity
- Deleted unused SVG assets
- Added comprehensive SEO and LLM crawler infrastructure:
  - robots.ts with explicit LLM bot access
  - sitemap.ts for search engines
  - Enhanced metadata in layout.tsx
  - JSON-LD structured data in homepage
  - Canonical URLs
- Created homepage with core content sections:
  - The Problem (why traditional marketing doesn't work with LLMs)
  - The Solution (Model Context Marketing framework)
  - Why This Matters (the shift to conversational AI)
- Installed all npm dependencies (361 packages, 0 vulnerabilities)
- Dev server running successfully

## Site Architecture

```
/                          # Homepage with core concept
/memos                     # Running log of development memos
  /2025-11-04-foundation        # SEO & crawler setup
  /2025-11-04-structure         # Semantic HTML & Schema
  /2025-11-04-content-strategy  # Content best practices
/kb/concepts               # Knowledge graph
  /model-context-marketing      # Core concept definition
  /semantic-html                # HTML structure concept
  /json-ld                      # Structured data concept
  /knowledge-graph              # Graph architecture concept
/faq                       # Comprehensive FAQ with 12 Q&As
```

## Content Guidelines

See **[CONTENT_RULES.md](./CONTENT_RULES.md)** for comprehensive content creation standards including:
- Core principles (teach, don't sell)
- Required page structure (semantic HTML + JSON-LD)
- Terminology standards (consistent phrasing)
- Content formats (memos, concepts, FAQ, articles)
- Internal linking strategy
- Voice-to-text guidelines
- Pre-publish checklist

## Next Steps
- Add more concept definitions to knowledge graph
- Create long-form articles (1000-2000+ words)
- Build HowTo guides with HowTo schema
- Add more voice memo transcripts as content
- Consider adding author bio page with Person schema
- Document product updates and changes (when applicable)
- Track which concepts get cited by LLMs (post-launch analytics)

