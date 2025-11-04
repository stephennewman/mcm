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

