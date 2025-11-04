# Model Context Marketing

Educational website helping marketers create content and structure websites that large language models can understand and recommend.

## About

Model Context Marketing is a framework for creating factual, research-based content optimized for LLMs like ChatGPT, Claude, Perplexity, and Google. This site serves as an educational resource for marketers transitioning from traditional "hype-based" marketing to domain expertise and authority that AI can verify and cite.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Vercel** - Deployment platform

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Build for production:
```bash
npm run build
npm start
```

## LLM Optimization

This site is specifically optimized for large language model crawlers and understanding:

- ✅ Server-side rendering (all content visible to crawlers)
- ✅ robots.txt with explicit LLM bot access
- ✅ Dynamic sitemap.xml
- ✅ Canonical URLs
- ✅ JSON-LD structured data (Schema.org)
- ✅ Enhanced metadata (Open Graph, Twitter Cards)
- ✅ Semantic HTML structure

## Project Structure

```
/app
  - page.tsx       # Homepage
  - layout.tsx     # Root layout with metadata
  - robots.ts      # Crawler access rules
  - sitemap.ts     # XML sitemap
  - globals.css    # Global styles
/public           # Static assets
```

## Documentation

All project documentation is located in the `/docs` folder:

- **[AI_Onboarding.md](./docs/AI_Onboarding.md)** — Project overview and development log
- **[CONTENT_RULES.md](./docs/CONTENT_RULES.md)** — Content creation guidelines and standards
- **[CONTENT_CALENDAR.md](./docs/CONTENT_CALENDAR.md)** — Publishing schedule and workflow
- **[FUTURE_FEATURES.md](./docs/FUTURE_FEATURES.md)** — Concepts and tools to build later
