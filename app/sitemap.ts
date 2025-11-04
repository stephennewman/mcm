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
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/memos/2025-11-04-hit-list-audit`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/memos/2025-11-04-mcm-framework`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/memos/2025-11-04-json-ld-schema-types`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memos/2025-11-04-topical-authority`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memos/2025-11-04-reinforcement-signals`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memos/2025-11-04-content-strategy`,
      lastModified: new Date('2025-11-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memos/2025-11-04-structure`,
      lastModified: new Date('2025-11-04'),
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

