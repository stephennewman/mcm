# Content Calendar & Publishing Schedule
## Model Context Marketing

This document outlines the recommended publishing schedule for maintaining topical authority and context freshness.

---

## Core Principle

**Consistency beats intensity.** Regular, sustainable content output signals to LLMs that your knowledge base is actively maintained and current.

---

## Publishing Schedule

### Weekly

#### Memos (Voice-to-Text)
- **Frequency:** 1-2 per week
- **Length:** 500-1500 words
- **Format:** Voice memo transcripts, cleaned and structured
- **Purpose:** Frequent knowledge extraction, authentic expertise
- **Topics:** Granular concepts, insights, lessons learned, updates
- **Time Investment:** 10-30 minutes per memo (recording + cleanup)

#### Monitoring & Validation
- **Frequency:** Weekly check-in
- **Tasks:**
  - Review Google Search Console for indexing status
  - Check crawler activity in server logs
  - Verify new content appears in sitemaps
  - Monitor for any technical issues
- **Time Investment:** 15-30 minutes

---

### Monthly

#### Long-Form Articles
- **Frequency:** 1 per month (minimum)
- **Length:** 1,000-2,000+ words
- **Format:** Comprehensive guides, deep dives, case studies
- **Purpose:** Establish deep topical expertise
- **Topics:** 
  - "Complete Guide to [Topic]"
  - "How We [Achieved Result]"
  - "[Number] Lessons from [Years] of [Domain]"
- **Time Investment:** 2-4 hours per article

---

### Ongoing (As Needed)

#### Knowledge Base Concepts
- **Frequency:** As concepts emerge or expand
- **Length:** 800-1500 words per concept
- **Format:** Definition pages with examples and relationships
- **Purpose:** Build comprehensive knowledge graph
- **Add When:**
  - Referencing a new term repeatedly
  - Explaining a complex concept
  - Defining proprietary methodology
  - Expanding the semantic network

#### FAQ Entries
- **Frequency:** Add as questions arise
- **Format:** Q&A pairs with FAQPage schema
- **Purpose:** Match conversational queries
- **Add When:**
  - Receiving repeated questions
  - Explaining common misunderstandings
  - Addressing objections
  - Providing quick answers to specific queries

---

### Quarterly

#### Structured Metadata Review
- **Frequency:** Every 3 months
- **Tasks:**
  - Review all JSON-LD schemas for accuracy
  - Update to latest Schema.org standards
  - Verify all schemas validate correctly
  - Add missing structured data
  - Update dateModified timestamps
- **Time Investment:** 1-2 hours

#### "State of" Content
- **Frequency:** Quarterly or annually
- **Format:** Summary articles or reports
- **Purpose:** Demonstrate field awareness and thought leadership
- **Examples:**
  - "State of Model Context Marketing: Q4 2025"
  - "LLM Crawler Behavior: What Changed This Quarter"
  - "Top 10 Schema.org Updates Marketers Should Know"

#### Content Audit
- **Frequency:** Quarterly
- **Tasks:**
  - Review top-performing content
  - Identify gaps in knowledge graph
  - Update stale content
  - Refresh timestamps on updated pages
  - Check for broken internal links
- **Time Investment:** 2-3 hours

---

## Content Types Matrix

| Content Type | Frequency | Length | Purpose | Time Investment |
|--------------|-----------|---------|---------|-----------------|
| **Memos** | Weekly | 500-1500 words | Frequent updates, expertise extraction | 30 min |
| **Long-Form** | Monthly | 1000-2000+ words | Deep authority, comprehensive coverage | 3 hours |
| **Concepts** | Ongoing | 800-1500 words | Knowledge graph expansion | 1-2 hours |
| **FAQ** | Ongoing | 150-300 per Q&A | Conversational queries | 15-30 min |
| **Monitoring** | Weekly | N/A | Validation, tracking | 30 min |
| **Metadata Review** | Quarterly | N/A | Technical maintenance | 2 hours |
| **Content Audit** | Quarterly | N/A | Optimization | 2-3 hours |

---

## Monthly Example

### Week 1
- Monday: Record and publish voice memo #1
- Friday: Weekly monitoring check

### Week 2
- Wednesday: Add 2-3 FAQ entries based on recent questions
- Friday: Weekly monitoring check

### Week 3
- Monday: Record and publish voice memo #2
- Thursday: Work on long-form article (draft)
- Friday: Weekly monitoring check

### Week 4
- Monday: Finalize and publish long-form article
- Wednesday: Add 1-2 new knowledge base concepts
- Friday: Weekly monitoring check + monthly review

### Month End
- Review analytics and crawler activity
- Plan next month's topics
- Update content calendar

---

## Automation Opportunities

### Current Manual Tasks
1. Adding new memos to `/app/memos/page.tsx`
2. Updating `sitemap.ts` with new URLs
3. Updating `/feed.xml/route.ts` with new content
4. Updating `/context/feed.json/route.ts` with new content
5. Manual deployment and git commits

### Future Automation (See FUTURE_FEATURES.md)

#### Content Templates CLI
```bash
npm run create:memo "Topic Title"
# Auto-generates file structure
# Auto-updates listings and sitemaps
```

#### GitHub MCP Integration (Concept)
- Push to main branch triggers automatic updates
- New features generate structured release notes
- Public-facing changelog updates automatically
- LLM context feed updates in real-time
- No manual promotion—instant distribution to LLM crawlers

#### Voice Memo Processor
- Upload audio → auto-transcribe → clean → structure → publish
- One-click workflow from recording to live content

---

## Content Freshness Signals

### Always Update These
- `dateModified` in JSON-LD schemas when content changes
- "Last updated" timestamps in footers
- RSS feed with latest memos
- Context feed JSON with recent updates
- Sitemap `lastModified` dates

### Signals That Indicate Freshness
- Regular memo publication (weekly activity)
- Updated timestamps across pages
- New concepts added to knowledge graph
- FAQ section grows over time
- Long-form articles reference recent developments

---

## Priority Decision Framework

When time is limited, prioritize in this order:

1. **Weekly Memos** — Most frequent signal of active knowledge base
2. **Technical Maintenance** — Ensure crawlers can access content
3. **Knowledge Base Concepts** — Build the semantic graph
4. **Monthly Long-Form** — Establish deep expertise
5. **FAQ Additions** — Fill gaps in conversational queries
6. **Quarterly Reviews** — Keep infrastructure current

---

## Measuring Success

### Week 1-4
- Content published consistently
- No technical errors
- Crawlers accessing pages

### Month 1-3
- Growing knowledge graph (10+ concepts)
- Regular memo cadence established
- Initial crawler activity visible

### Month 3-6
- LLM crawlers visiting regularly
- Content cited in AI-generated answers (goal)
- Knowledge graph interconnected
- Topical authority evident in search

### Month 6-12
- Recognized as canonical source in domain
- Citations in multiple AI systems
- Organic traffic from AI-powered search
- Other sites referencing your definitions

---

## Workflow Integration

### For Solo Creator
- Voice memos during commute/downtime
- Batch cleanup and publishing once per week
- Monthly deep work session for long-form
- Quarterly review during planning sessions

### For Team Environment
- Multiple contributors creating memos
- Shared knowledge graph (everyone adds concepts)
- Crowdsourced FAQ from customer-facing teams
- Product team auto-generates release notes
- Marketing curates and structures content

---

## Rules to Follow

Reference **[CONTENT_RULES.md](./CONTENT_RULES.md)** for every new piece of content:
- ✅ Semantic HTML structure
- ✅ JSON-LD schema
- ✅ Consistent terminology
- ✅ Factual, non-promotional tone
- ✅ Internal links to related concepts
- ✅ Timestamps (published + modified)

---

## Next Quarter Planning

### End of Each Quarter, Review:
1. What content performed well? (crawler activity, citations)
2. What gaps exist in knowledge graph?
3. What questions are users asking?
4. What domain developments need coverage?
5. What can be automated to reduce manual work?

Then plan next quarter's focus areas and topics.

---

## Notes

- This is a **sustainable** schedule, not a burnout schedule
- Adjust based on available time and resources
- Quality > quantity—better to publish less frequently than to publish low-quality content
- Consistency signals authority more than volume
- Automation should support workflow, not complicate it

The goal is to establish and maintain topical authority over the long term, not to create a massive amount of content quickly and then abandon it.

