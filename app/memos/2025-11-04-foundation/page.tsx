import Link from 'next/link';

export const metadata = {
  title: 'Foundation: SEO & Crawler Infrastructure | Model Context Marketing',
  description: 'Setting up the foundational technical infrastructure to ensure content is visible and understandable to all LLM crawlers.',
};

export default function FoundationMemo() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Foundation: SEO & Crawler Infrastructure',
    datePublished: '2025-11-04T12:00:00-05:00',
    dateModified: '2025-11-04T12:00:00-05:00',
    author: {
      '@type': 'Person',
      name: 'Stephen Newman',
    },
    description: 'Setting up robots.txt, sitemap.xml, canonical URLs, and metadata to ensure content is visible and understandable to all LLM crawlers.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
        <Link href="/memos" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Memos
        </Link>
        
        <article>
          <header className="mb-8">
            <p className="text-sm text-gray-500 mb-2">November 4, 2025</p>
            <h1 className="text-4xl font-bold mb-4">Foundation: SEO & Crawler Infrastructure</h1>
          </header>

          <section className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              Content needs to be visible to all crawlers. Bots don't read JavaScript well, so server-side rendering is essential. This memo covers the foundational technical setup to ensure the site is properly structured for ChatGPT, Claude, Perplexity, DeepSeek, Google Extended, and other large language models.
            </p>

            <h2>Implementation</h2>
            
            <h3>robots.txt</h3>
            <p>
              Explicitly allows all crawlers with special attention to LLM-specific bots including ChatGPT-User, GPTBot, Claude-Web, CCBot, anthropic-ai, PerplexityBot, and Google-Extended.
            </p>

            <h3>Dynamic Sitemap</h3>
            <p>
              XML sitemap generation with last-modified dates, change frequency, and priority levels. Helps crawlers understand content importance and freshness.
            </p>

            <h3>Canonical URLs</h3>
            <p>
              Prevents duplicate content issues and ensures LLMs recognize the authoritative source for each page.
            </p>

            <h3>Enhanced Metadata</h3>
            <p>
              Comprehensive metadata including Open Graph tags, Twitter Card metadata, keywords targeting AI/LLM marketing, author and publisher attribution, and robot directives for optimal crawling.
            </p>

            <h3>JSON-LD Structured Data</h3>
            <p>
              Schema.org WebSite and Article markup provides machine-readable context about the site's purpose and content.
            </p>

            <h2>Why This Matters</h2>
            <p>
              LLMs must be able to crawl, parse, and understand your content. Without proper technical infrastructure, even the best content remains invisible. Server-side rendering ensures all text is in the HTML—not hidden behind JavaScript. Structured data helps LLMs understand what your content is about and how to categorize it.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: November 4, 2025 at 12:00 PM
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}

