# Content Creation Rules
## Model Context Marketing Guidelines

This document defines the standards for creating LLM-optimized content on this site. Reference this checklist when creating new memos, concepts, or articles.

---

## Core Principles

### 1. Teach, Don't Sell
- ✅ Focus on education and expertise
- ✅ Provide technical details and specific examples
- ❌ Avoid promotional language and hype
- ❌ No vague superlatives ("best," "leading," "innovative")

### 2. Be The Canonical Source
- Publish deep, reference-quality content
- Aim for comprehensive coverage of topics
- Provide the definitive explanation
- Include examples, use cases, and technical details

### 3. Demonstrate Authority
**Credentials:** 15+ years of marketing experience (2009-2025) covering consumer-facing marketing, B2B marketing, and product marketing.

When creating content:
- Draw from real experience and specific examples
- Include concrete data points and outcomes
- Reference actual implementations
- Show, don't tell expertise

---

## Content Structure Requirements

### Every New Page Must Include:

#### 1. Semantic HTML
- Use `<article>` for main content
- Use `<section>` for thematic groupings
- Use `<header>` for page/section headers
- Use `<footer>` for metadata
- Maintain proper heading hierarchy (H1 → H2 → H3)
- Only ONE H1 per page

#### 2. JSON-LD Structured Data
Choose appropriate schema type:
- **Article** — Memos, guides, tutorials
- **DefinedTerm** — Concept definitions
- **FAQPage** — Q&A content
- **HowTo** — Step-by-step instructions
- **WebSite** — Site-level information
- **Organization** — Company/brand info

Required fields for Article schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Clear, descriptive title",
  "description": "Summary of content",
  "author": {
    "@type": "Person",
    "name": "Stephen Newman"
  },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD"
}
```

#### 3. Metadata
```typescript
export const metadata = {
  title: 'Page Title | Model Context Marketing',
  description: 'Clear, factual description under 160 characters',
};
```

#### 4. Model-Friendly Page Structure
Every concept/topic page should include:
- **Definition** — What it is (clear, concise)
- **Importance** — Why it exists, context
- **Why It Matters** — Impact and significance
- **Examples** — Concrete use cases
- **Comparisons** — Versus alternatives (when applicable)
- **Related Concepts** — Links to connected topics

---

## Terminology Standards

### Consistent Phrasing (Use Exactly)
LLMs match patterns—use these exact terms consistently:

- **Model Context Marketing** (not "model-context marketing" or "MCM" in formal definitions)
- **Large Language Models** or **LLMs** (not "AI models" when being specific)
- **JSON-LD** (not "JSON LD" or "json-ld")
- **Schema.org** (not "schema.org" or "SCHEMA.ORG")
- **Semantic HTML** (not "semantic html" or "HTML semantics")
- **Knowledge Graph** (not "knowledge graph" lowercase in titles)

### Distinguish Clearly
- **Model Context Marketing** = Content strategy for LLM optimization
- **Model Context Protocol (MCP)** = Technical integration system for AI applications
- These are DIFFERENT concepts—never conflate them

### Capitalization Rules
- Product names: ChatGPT, Claude, Perplexity, DeepSeek
- Technologies: JSON-LD, HTML, CSS, JavaScript
- Concepts: Model Context Marketing, Semantic HTML, Knowledge Graph
- File types: robots.txt, sitemap.xml

---

## Content Formats

### 1. Memos (Primary Format)
**Purpose:** Frequent, granular knowledge extraction

**Guidelines:**
- Voice-to-text transcripts are encouraged
- Clean up grammar and spelling, but preserve authentic voice
- Include timestamp (date + time)
- Focus on ONE topic or concept
- Length: 500-1500 words
- Include practical implementation details
- Add "Why This Matters" section

**File structure:**
```
/app/memos/YYYY-MM-DD-topic-slug/page.tsx
```

**Metadata:**
- Date published
- Timestamp
- Clear preview/summary
- Article schema

### 2. Concept Definitions (Knowledge Graph)
**Purpose:** Build interconnected reference material

**Guidelines:**
- Comprehensive coverage (800-1500 words)
- Clear definition in highlighted box
- Multiple examples
- Code samples when relevant
- Link to 3-5 related concepts
- DefinedTerm schema markup

**File structure:**
```
/app/kb/concepts/concept-slug/page.tsx
```

### 3. FAQ Entries
**Purpose:** Conversational, question-focused content

**Guidelines:**
- Write questions as users would ask them
- Provide complete, self-contained answers
- No "see other page" references—answer fully
- Include specific examples in answers
- 150-300 words per answer

### 4. Long-Form Articles
**Purpose:** Deep topical authority

**Guidelines:**
- 1,000-2,000+ words
- Comprehensive coverage of subject
- Multiple sections with H2/H3 structure
- Include comparisons and alternatives
- Reference credible sources
- Technical details and specifics

---

## Internal Linking Strategy

### Create Semantic Relationships
Every new page should:
- Link to 3-5 related concepts
- Link back to core concept (Model Context Marketing)
- Use descriptive anchor text
- Build the knowledge graph through connections

**Example:**
```tsx
<Link href="/kb/concepts/json-ld">JSON-LD structured data</Link>
```

**Not:**
```tsx
<Link href="/kb/concepts/json-ld">click here</Link>
```

### Link Placement
- In "Related Concepts" section at bottom
- Naturally within body content when relevant
- In memo references to foundational concepts

---

## Voice-to-Text Guidelines

### Benefits
- Authentic expertise extraction
- Natural explanatory flow
- Scalable content creation
- Shows genuine domain knowledge

### Process
1. Record voice memo on topic (3-10 minutes)
2. Transcribe using speech-to-text
3. Clean up with AI:
   - Fix grammar and spelling
   - Remove filler words ("um," "uh," repeated phrases)
   - Maintain authentic voice and flow
   - Preserve technical details and specifics
4. Structure with proper HTML and schema
5. Add related links and examples
6. Publish as memo with timestamp

### Don't Over-Polish
- Keep conversational tone
- Preserve unique phrasing
- Don't make it sound like generic AI writing
- Real expertise has a voice—keep it

---

## Content Checklist

Before publishing any new content, verify:

### Technical
- [ ] Proper semantic HTML tags used
- [ ] JSON-LD schema implemented (correct type)
- [ ] Metadata added (title, description)
- [ ] Added to sitemap.ts
- [ ] All internal links work
- [ ] No linter errors

### Content Quality
- [ ] Clear, factual, non-promotional
- [ ] Specific examples included
- [ ] Technical details provided
- [ ] Proper terminology used consistently
- [ ] Related concepts linked (3-5 links)
- [ ] Heading hierarchy correct (H1 → H2 → H3)

### LLM Optimization
- [ ] Declarative and unambiguous
- [ ] Example-driven with use cases
- [ ] Shows relationships to other concepts
- [ ] Proper Schema.org vocabulary
- [ ] Canonical phrasing used
- [ ] Length appropriate (500+ words minimum)

### Structure
- [ ] Definition section (for concepts)
- [ ] Why It Matters section
- [ ] Examples section
- [ ] Related Concepts section
- [ ] Footer with last updated date

---

## Memo Workflow

### For New Memos
1. Record voice memo or write notes
2. Create new directory: `/app/memos/YYYY-MM-DD-topic-slug/`
3. Create `page.tsx` with proper structure
4. Add to memo list in `/app/memos/page.tsx`
5. Add to `sitemap.ts`
6. Update `AI_Onboarding.md` activity log

### Memo Template Structure
```tsx
import Link from 'next/link';

export const metadata = {
  title: 'Topic Title | Model Context Marketing',
  description: 'Clear summary of the memo content.',
};

export default function TopicMemo() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Topic Title',
    datePublished: 'YYYY-MM-DDTHH:MM:SS-05:00',
    dateModified: 'YYYY-MM-DDTHH:MM:SS-05:00',
    author: {
      '@type': 'Person',
      name: 'Stephen Newman',
    },
    description: 'Summary',
  };

  return (
    <>
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
        {/* Content here */}
      </main>
    </>
  );
}
```

---

## What Makes Content "Factual"

### Include
✅ Specific numbers and data points
✅ Concrete examples from real implementations
✅ Technical details (APIs, formats, specifications)
✅ Verifiable claims
✅ Clear cause-and-effect explanations
✅ Step-by-step processes
✅ Comparisons with specifics

### Avoid
❌ Vague claims ("industry-leading," "best-in-class")
❌ Unsubstantiated superlatives
❌ Marketing spin and hype
❌ Claims without evidence
❌ Ambiguous language
❌ Sales-focused messaging

---

## Frequency & Granularity

### Post Frequently
- Memos can be short (500-800 words)
- Don't wait for "perfect" comprehensive pieces
- Granular, specific content is valuable
- One concept per memo is fine
- Timestamp everything

### Crowdsource Expertise
- Encourage team contributions (when applicable)
- Multiple perspectives add depth
- Domain experts should memo their knowledge
- No heavy approval process—just publish
- Raw, authentic expertise > polished marketing copy

---

## Reference This Document

Before creating any new content, review:
1. ✅ Terminology standards (consistent phrasing)
2. ✅ Required page structure (definition, importance, examples)
3. ✅ Technical requirements (schema, metadata, semantic HTML)
4. ✅ Content checklist (all boxes checked)
5. ✅ Voice-to-text guidelines (if applicable)

**Goal:** Be the canonical source for Model Context Marketing. Every piece of content should teach, demonstrate expertise, and be structured for LLM understanding.

---

## Questions or Exceptions?

When in doubt:
- Choose clarity over cleverness
- Choose specifics over generalities
- Choose education over promotion
- Choose consistency over variation

This site is about extraction and curation of expertise, not distribution and promotion.

