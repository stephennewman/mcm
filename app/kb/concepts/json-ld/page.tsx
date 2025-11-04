import Link from 'next/link';

export const metadata = {
  title: 'JSON-LD Structured Data - Definition | Knowledge Base',
  description: 'JavaScript Object Notation for Linked Data—the recommended format for adding Schema.org markup to make content machine-readable.',
};

export default function JSONLDDefinition() {
  const definitionSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'JSON-LD',
    alternateName: 'JavaScript Object Notation for Linked Data',
    description: 'The recommended format for adding structured data to web pages using Schema.org vocabulary to provide explicit, machine-readable context about content.',
    inDefinedTermSet: 'https://modelcontextmarketing.com/kb/concepts',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definitionSchema) }}
      />
      <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
        <Link href="/kb/concepts" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Concepts
        </Link>
        
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">JSON-LD Structured Data</h1>
            <p className="text-sm text-gray-500">Concept Definition</p>
          </header>

          <section className="prose prose-lg max-w-none">
            <h2>Definition</h2>
            <p className="text-xl leading-relaxed bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              JSON-LD (JavaScript Object Notation for Linked Data) is the recommended format for adding structured data to web pages. It uses Schema.org vocabulary to provide explicit, machine-readable context about your content that LLMs can parse and understand.
            </p>

            <h2>Importance</h2>
            <p>
              JSON-LD bridges the gap between human-readable content and machine understanding. It provides explicit metadata about entities, relationships, and facts on your page, allowing LLMs to confidently extract and cite information without ambiguity.
            </p>

            <h2>Why It Matters</h2>
            <p>
              Large language models need structured context to understand what information is authoritative and how it relates to other entities. JSON-LD provides this context in a standardized format that all major AI systems can parse, increasing the likelihood your content will be cited in AI-generated answers.
            </p>

            <h2>Common Schema Types</h2>
            <ul>
              <li><strong>Article</strong> — Blog posts, articles, and written content</li>
              <li><strong>FAQPage</strong> — Pages with question-and-answer pairs</li>
              <li><strong>HowTo</strong> — Step-by-step instructions and tutorials</li>
              <li><strong>Product</strong> — Products and services</li>
              <li><strong>Organization</strong> — Company and brand information</li>
              <li><strong>Person</strong> — Individual people and authors</li>
              <li><strong>WebSite</strong> — Overall website information</li>
              <li><strong>DefinedTerm</strong> — Glossary entries and definitions</li>
            </ul>

            <h2>Example: Article Schema</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Model Context Marketing Guide",
  "description": "Complete guide to optimizing content for LLMs",
  "author": {
    "@type": "Person",
    "name": "Stephen Newman"
  },
  "datePublished": "2025-11-04",
  "dateModified": "2025-11-04"
}
</script>`}
            </pre>

            <h2>Example: FAQ Schema</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Model Context Marketing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Model Context Marketing is the practice of 
      creating structured, factual content that LLMs 
      can understand and cite."
    }
  }]
}
</script>`}
            </pre>

            <h2>Implementation</h2>
            <p>
              Add JSON-LD scripts to the <code>&lt;head&gt;</code> or top of the <code>&lt;body&gt;</code> of your pages. Use multiple schemas when appropriate—a page can have both Article and FAQPage schemas if it contains both article content and Q&A sections.
            </p>

            <h2>Related Concepts</h2>
            <ul>
              <li><Link href="/kb/concepts/model-context-marketing" className="text-blue-600 hover:underline">Model Context Marketing</Link></li>
              <li><Link href="/kb/concepts/semantic-html" className="text-blue-600 hover:underline">Semantic HTML</Link></li>
              <li><Link href="/kb/concepts/knowledge-graph" className="text-blue-600 hover:underline">Knowledge Graph</Link></li>
            </ul>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: November 4, 2025
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}

