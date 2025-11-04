import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['ChatGPT-User', 'GPTBot', 'Claude-Web', 'CCBot', 'anthropic-ai', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: 'https://modelcontextmarketing.com/sitemap.xml',
  }
}

