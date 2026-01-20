import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://modelcontextmarketing.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/kb/concepts`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/kb/concepts/model-context-marketing`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kb/concepts/semantic-html`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/kb/concepts/json-ld`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/kb/concepts/knowledge-graph`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/memos`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/memos/2026-01-20-voice-of-customer-market-signals`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/memos/2026-01-06-mcm-evolution`,
      lastModified: new Date('2026-01-06'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/memos/2025-12-16-ai-channel-paradigm-shift`,
      lastModified: new Date('2025-12-16'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/memos/2025-12-09-mcm-framework`,
      lastModified: new Date('2025-12-09'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/memos/2025-12-02-json-ld-schema-types`,
      lastModified: new Date('2025-12-02'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memos/2025-11-25-topical-authority`,
      lastModified: new Date('2025-11-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memos/2025-11-18-reinforcement-signals`,
      lastModified: new Date('2025-11-18'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memos/2025-11-11-content-strategy`,
      lastModified: new Date('2025-11-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memos/2025-11-04-foundation`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}

