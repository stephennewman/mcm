import Link from 'next/link';

export const metadata = {
  title: 'Concepts | Knowledge Base',
  description: 'Core concepts and definitions related to Model Context Marketing and LLM-optimized content creation.',
};

interface Concept {
  slug: string;
  name: string;
  description: string;
}

const concepts: Concept[] = [
  {
    slug: 'model-context-marketing',
    name: 'Model Context Marketing',
    description: 'Marketing best practice for structuring content that large language models can understand and cite.',
  },
  {
    slug: 'json-ld',
    name: 'JSON-LD Structured Data',
    description: 'JavaScript Object Notation for Linked Data—the recommended format for adding Schema.org markup.',
  },
  {
    slug: 'semantic-html',
    name: 'Semantic HTML',
    description: 'HTML tags that provide meaning about content structure (header, article, section, nav).',
  },
  {
    slug: 'knowledge-graph',
    name: 'Knowledge Graph',
    description: 'Network of interconnected entities and relationships represented as structured data.',
  },
];

export default function ConceptsPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Model Context Marketing Concepts',
    description: 'Core concepts and definitions related to Model Context Marketing and LLM-optimized content creation.',
    url: 'https://modelcontextmarketing.com/kb/concepts',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Concepts</h1>
          <p className="text-xl text-gray-600">
            Core concepts and definitions related to Model Context Marketing
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {concepts.map((concept) => (
            <article key={concept.slug} className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <Link href={`/kb/concepts/${concept.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 text-gray-900 hover:text-blue-600">
                  {concept.name}
                </h2>
                <p className="text-gray-700">
                  {concept.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

