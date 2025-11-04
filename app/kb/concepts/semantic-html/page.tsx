import Link from 'next/link';

export const metadata = {
  title: 'Semantic HTML - Definition | Knowledge Base',
  description: 'HTML tags that provide meaning about content structure, helping both browsers and AI systems understand the role each piece of content plays.',
};

export default function SemanticHTMLDefinition() {
  const definitionSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Semantic HTML',
    description: 'HTML tags that provide meaning about content structure (header, main, article, section, nav, footer) helping both browsers and AI systems understand the role each piece of content plays.',
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
            <h1 className="text-4xl font-bold mb-4">Semantic HTML</h1>
            <p className="text-sm text-gray-500">Concept Definition</p>
          </header>

          <section className="prose prose-lg max-w-none">
            <h2>Definition</h2>
            <p className="text-xl leading-relaxed bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              Semantic HTML uses tags that provide meaning about content structure—such as <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;footer&gt;</code>—helping both browsers and AI systems understand the role each piece of content plays.
            </p>

            <h2>Importance</h2>
            <p>
              Semantic HTML provides structural meaning that LLMs use to understand content hierarchy and relationships. Instead of generic <code>&lt;div&gt;</code> containers, semantic tags explicitly declare what each content block represents, making it easier for AI to parse and comprehend your site's information architecture.
            </p>

            <h2>Key Semantic Tags</h2>
            <ul>
              <li><code>&lt;header&gt;</code> — Page or section header content</li>
              <li><code>&lt;main&gt;</code> — Primary content of the page</li>
              <li><code>&lt;article&gt;</code> — Self-contained, independently distributable content</li>
              <li><code>&lt;section&gt;</code> — Thematic groupings within content</li>
              <li><code>&lt;nav&gt;</code> — Navigation links</li>
              <li><code>&lt;footer&gt;</code> — Footer information</li>
              <li><code>&lt;aside&gt;</code> — Tangentially related content</li>
              <li><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> — Images with captions</li>
            </ul>

            <h2>Heading Hierarchy</h2>
            <p>
              Proper heading structure (H1 → H2 → H3) is crucial. Use only one H1 per page for the main title, H2 for major sections, H3 for subsections within those sections. This hierarchy helps LLMs understand topic relationships and extract information in context.
            </p>

            <h2>Example</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<article>
  <header>
    <h1>Model Context Marketing</h1>
  </header>
  
  <section>
    <h2>Definition</h2>
    <p>Content here...</p>
  </section>
  
  <section>
    <h2>Why It Matters</h2>
    <p>Content here...</p>
  </section>
  
  <footer>
    <p>Last updated: 2025-11-04</p>
  </footer>
</article>`}
            </pre>

            <h2>Related Concepts</h2>
            <ul>
              <li><Link href="/kb/concepts/model-context-marketing" className="text-blue-600 hover:underline">Model Context Marketing</Link></li>
              <li><Link href="/kb/concepts/json-ld" className="text-blue-600 hover:underline">JSON-LD Structured Data</Link></li>
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

