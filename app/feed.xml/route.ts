export async function GET() {
  const baseUrl = 'https://modelcontextmarketing.com';
  
  const memos = [
    {
      title: 'Hit List: Site Audit and Issues',
      slug: '2025-11-04-hit-list-audit',
      description: 'Quick audit identifying current site issues and prioritizing fixes for readability, structure, and user experience.',
      date: '2025-11-04T16:30:00-05:00',
    },
    {
      title: 'The Model Context Marketing Framework: CMO and The Pillars',
      slug: '2025-11-04-mcm-framework',
      description: 'Complete framework for Model Context Marketing: Connect, Measure, Optimize (CMO) and the seven MCM pillars - Truth, Structure, Freshness, Authority, Depth, Velocity, Authenticity.',
      date: '2025-11-04T17:00:00-05:00',
    },
    {
      title: 'JSON-LD and Common Schema Types',
      slug: '2025-11-04-json-ld-schema-types',
      description: 'What JSON-LD does for Model Context Marketing and the essential Schema.org types every marketer should implement.',
      date: '2025-11-04T15:30:00-05:00',
    },
    {
      title: 'Topical Authority: Be The Canonical Source',
      slug: '2025-11-04-topical-authority',
      description: 'How to establish yourself as the definitive, authoritative source on your domain expertise that LLMs trust and cite.',
      date: '2025-11-04T15:00:00-05:00',
    },
    {
      title: 'Reinforcement Signals & Distribution',
      slug: '2025-11-04-reinforcement-signals',
      description: 'How backlinks, citations, social presence, and continuous updates strengthen entity authority for LLMs.',
      date: '2025-11-04T14:30:00-05:00',
    },
    {
      title: 'Content Strategy: Training LLMs Through Structure',
      slug: '2025-11-04-content-strategy',
      description: 'Best practices for creating LLM-friendly content that is declarative, factual, example-driven, and properly structured for machine understanding.',
      date: '2025-11-04T13:15:00-05:00',
    },
    {
      title: 'Structure: Semantic HTML & Schema Data',
      slug: '2025-11-04-structure',
      description: 'Using semantic HTML tags and JSON-LD structured data to help LLMs parse content hierarchically and understand key entities.',
      date: '2025-11-04T12:42:00-05:00',
    },
    {
      title: 'Foundation: SEO & Crawler Infrastructure',
      slug: '2025-11-04-foundation',
      description: 'Setting up robots.txt, sitemap.xml, canonical URLs, and metadata to ensure content is visible and understandable to all LLM crawlers.',
      date: '2025-11-04T12:00:00-05:00',
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

