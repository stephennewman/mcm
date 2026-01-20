export async function GET() {
  const baseUrl = 'https://modelcontextmarketing.com';
  
  const memos = [
    {
      title: 'Voice of Customer: Extracting Market Signals for AI Search',
      slug: '2026-01-12-voice-of-customer-market-signals',
      description: 'The key to driving results in AI-powered search is extracting raw, authentic market signals—queries, form fills, and customer needs—to inform content that demonstrates relevance, timeliness, and true market understanding.',
      date: '2026-01-12T10:00:00-05:00',
    },
    {
      title: 'The Evolution of Model Context Marketing: From Channel to Intelligence Layer',
      slug: '2026-01-06-mcm-evolution',
      description: 'Model Context Marketing evolves beyond optimizing for LLM citations. It\'s about using LLMs as both a market intelligence layer and distribution channel.',
      date: '2026-01-06T10:00:00-05:00',
    },
    {
      title: 'AI as a Marketing Channel: The Search Engine Sunset',
      slug: '2025-12-16-ai-channel-paradigm-shift',
      description: 'The fundamental shift from search engines and traditional websites to AI as the dominant marketing channel.',
      date: '2025-12-16T10:00:00-05:00',
    },
    {
      title: 'The MCM Framework: Connect, Measure, Optimize',
      slug: '2025-12-09-mcm-framework',
      description: 'Complete framework for Model Context Marketing: the three-step process (Connect, Measure, Optimize) and the seven foundational pillars (Truth, Structure, Freshness, Authority, Depth, Velocity, Authenticity).',
      date: '2025-12-09T10:00:00-05:00',
    },
    {
      title: 'JSON-LD and Common Schema Types',
      slug: '2025-12-02-json-ld-schema-types',
      description: 'What JSON-LD does for Model Context Marketing and the essential Schema.org types every marketer should implement.',
      date: '2025-12-02T10:00:00-05:00',
    },
    {
      title: 'Topical Authority: Be The Canonical Source',
      slug: '2025-11-25-topical-authority',
      description: 'How to establish yourself as the definitive, authoritative source on your domain expertise that LLMs trust and cite.',
      date: '2025-11-25T10:00:00-05:00',
    },
    {
      title: 'Reinforcement Signals & Distribution',
      slug: '2025-11-18-reinforcement-signals',
      description: 'How backlinks, citations, social presence, and continuous updates strengthen entity authority for LLMs.',
      date: '2025-11-18T10:00:00-05:00',
    },
    {
      title: 'Content Strategy: Training LLMs Through Structure',
      slug: '2025-11-11-content-strategy',
      description: 'Best practices for creating LLM-friendly content that is declarative, factual, example-driven, and properly structured for machine understanding.',
      date: '2025-11-11T10:00:00-05:00',
    },
    {
      title: 'Foundation: SEO & Crawler Infrastructure',
      slug: '2025-11-04-foundation',
      description: 'Setting up robots.txt, sitemap.xml, canonical URLs, and metadata to ensure content is visible and understandable to all LLM crawlers.',
      date: '2025-11-04T10:00:00-05:00',
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Model Context Marketing</title>
    <link>${baseUrl}</link>
    <description>Educational guide for creating content that large language models can understand and cite</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${memos
      .map(
        (memo) => `
    <item>
      <title>${memo.title}</title>
      <link>${baseUrl}/memos/${memo.slug}</link>
      <description>${memo.description}</description>
      <pubDate>${new Date(memo.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/memos/${memo.slug}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

