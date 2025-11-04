import Link from 'next/link';

export const metadata = {
  title: 'Knowledge Graph - Definition | Knowledge Base',
  description: 'A network of interconnected entities and relationships represented as structured data that LLMs can parse and understand.',
};

export default function KnowledgeGraphDefinition() {
  const definitionSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Knowledge Graph',
    description: 'A network of interconnected entities and relationships represented as structured data, with each concept page containing machine-readable Schema.org markup that LLMs can parse to understand relationships and extract authoritative information.',
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
            <h1 className="text-4xl font-bold mb-4">Knowledge Graph</h1>
            <p className="text-sm text-gray-500">Concept Definition</p>
          </header>

          <section className="prose prose-lg max-w-none">
            <h2>Definition</h2>
            <p className="text-xl leading-relaxed bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              A knowledge graph is a network of interconnected entities and relationships represented as structured data. Each concept page contains machine-readable Schema.org markup that LLMs can parse to understand relationships and extract authoritative information.
            </p>

            <h2>Importance</h2>
            <p>
              Knowledge graphs help LLMs understand not just individual facts, but how those facts relate to each other. By explicitly defining entities (concepts, products, people) and their connections, you create a semantic network that AI systems can navigate and reference with confidence.
            </p>

            <h2>Why It Matters</h2>
            <p>
              When LLMs encounter a knowledge graph, they can understand context beyond individual pages. If your site defines "Model Context Marketing" and links it to related concepts like "Semantic HTML" and "JSON-LD," the LLM understands these are interconnected concepts and can provide more comprehensive, accurate answers that cite your domain expertise.
            </p>

            <h2>Key Components</h2>
            <ul>
              <li><strong>Entities</strong> — Individual concepts, products, people, or organizations</li>
              <li><strong>Relationships</strong> — Connections between entities (e.g., "is a type of," "uses," "related to")</li>
              <li><strong>Attributes</strong> — Properties of entities (name, description, definition)</li>
              <li><strong>Schema Markup</strong> — JSON-LD structured data for machine readability</li>
            </ul>

            <h2>Structure</h2>
            <p>
              Organize knowledge graph entries at dedicated URL paths (e.g., <code>/kb/concepts/[concept-name]</code>). Each page should include:
            </p>
            <ul>
              <li>Clear definition of the entity</li>
              <li>Explanation of importance and context</li>
              <li>Examples and use cases</li>
              <li>Links to related entities</li>
              <li>DefinedTerm or Article schema markup</li>
            </ul>

            <h2>Example: Concept Network</h2>
            <div className="bg-gray-50 p-6 rounded">
              <p className="font-semibold mb-4">Model Context Marketing connects to:</p>
              <ul className="space-y-2">
                <li>→ <strong>Semantic HTML</strong> (uses for structure)</li>
                <li>→ <strong>JSON-LD</strong> (uses for structured data)</li>
                <li>→ <strong>Knowledge Graph</strong> (implements as architecture)</li>
                <li>→ <strong>Large Language Models</strong> (optimizes content for)</li>
              </ul>
            </div>

            <h2>Implementation</h2>
            <p>
              Build your knowledge graph incrementally. Start with core concepts, add comprehensive definitions and examples, implement proper schema markup, then link related concepts together. Each new concept page strengthens the overall graph and improves LLM understanding of your domain expertise.
            </p>

            <h2>Benefits for LLM Understanding</h2>
            <ul>
              <li>Provides context beyond individual pages</li>
              <li>Shows relationships between concepts</li>
              <li>Creates authoritative "fat cards" of information</li>
              <li>Enables more confident citations by AI systems</li>
              <li>Demonstrates comprehensive domain knowledge</li>
            </ul>

            <h2>Related Concepts</h2>
            <ul>
              <li><Link href="/kb/concepts/model-context-marketing" className="text-blue-600 hover:underline">Model Context Marketing</Link></li>
              <li><Link href="/kb/concepts/json-ld" className="text-blue-600 hover:underline">JSON-LD Structured Data</Link></li>
              <li><Link href="/kb/concepts/semantic-html" className="text-blue-600 hover:underline">Semantic HTML</Link></li>
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

