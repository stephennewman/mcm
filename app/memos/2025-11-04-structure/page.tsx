import Link from 'next/link';

export const metadata = {
  title: 'Structure: Semantic HTML & Schema Data | Model Context Marketing',
  description: 'Using semantic HTML tags and comprehensive JSON-LD structured data to help LLMs parse content hierarchically and understand key entities.',
};

export default function StructureMemo() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Structure: Semantic HTML & Schema Data',
    datePublished: '2025-11-04T12:42:00-05:00',
    dateModified: '2025-11-04T12:42:00-05:00',
    author: {
      '@type': 'Person',
      name: 'Stephen Newman',
    },
    description: 'Using semantic HTML tags and comprehensive JSON-LD structured data to help LLMs parse content hierarchically and understand key entities.',
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
            <p className="text-sm text-gray-500 mb-2">November 4, 2025 at 12:42 PM</p>
            <h1 className="text-4xl font-bold mb-4">Structure: Semantic HTML & Schema Data</h1>
          </header>

          <section className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              Semantic HTML and JSON-LD structured data allow large language model pipelines to parse meaning hierarchically. This memo covers how to structure content using semantic tags and Schema.org vocabulary to ensure LLMs can understand and cite your content.
            </p>

            <h2>Key Concepts</h2>

            <h3>Semantic HTML Tags</h3>
            <p>
              Semantic HTML provides meaning to your content structure. Instead of generic <code>&lt;div&gt;</code> tags, semantic tags tell both browsers and AI systems what role each piece of content plays. Proper heading hierarchy (H1 → H2 → H3) helps LLMs understand relationships between topics and subtopics.
            </p>
            <ul>
              <li><code>&lt;header&gt;</code> — Page or section headers</li>
              <li><code>&lt;main&gt;</code> — Primary content</li>
              <li><code>&lt;article&gt;</code> — Self-contained, distributable content</li>
              <li><code>&lt;section&gt;</code> — Thematic groupings</li>
              <li><code>&lt;nav&gt;</code> — Navigation links</li>
              <li><code>&lt;footer&gt;</code> — Footer information</li>
            </ul>

            <h3>JSON-LD Structured Data</h3>
            <p>
              JSON-LD (JavaScript Object Notation for Linked Data) is the recommended format for adding structured data to web pages. It uses Schema.org vocabulary to provide explicit context about your content.
            </p>

            <h3>Schema.org Types</h3>
            <p>Different content types use appropriate Schema.org markup:</p>
            <ul>
              <li><strong>Product</strong> — Products or services</li>
              <li><strong>Organization</strong> — Company information</li>
              <li><strong>FAQPage</strong> — Frequently asked questions</li>
              <li><strong>Article</strong> — Articles and memos</li>
              <li><strong>HowTo</strong> — Step-by-step tutorials</li>
              <li><strong>Review</strong> — Testimonials and reviews</li>
            </ul>

            <h2>Example: FAQ Schema</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Model Context Marketing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Model Context Marketing is the practice of 
      publishing structured, factual content that large 
      language models can ingest to improve brand and 
      product visibility inside AI-generated answers."
    }
  }]
}`}
            </pre>

            <h2>Why This Matters</h2>
            <p>
              Semantic HTML and structured data provide two layers of meaning for LLMs: <strong>structural meaning</strong> (how content is organized) and <strong>semantic meaning</strong> (what entities exist and their relationships).
            </p>
            <p>
              Together, these make your content significantly more understandable and citable by AI systems. When an LLM encounters properly structured content, it can confidently extract facts, understand relationships, and cite your content as an authoritative source.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: November 4, 2025 at 12:42 PM
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}

