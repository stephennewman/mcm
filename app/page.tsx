export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Model Context Marketing',
    description: 'Educational guide for marketers on creating content and structuring websites that large language models can understand and recommend.',
    url: 'https://modelcontextmarketing.com',
    inLanguage: 'en-US',
    datePublished: '2025-11-04',
    dateModified: '2025-11-04',
    author: {
      '@type': 'Person',
      name: 'Stephen Newman',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Model Context Marketing',
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Model Context Marketing',
    url: 'https://modelcontextmarketing.com',
    description: 'Educational resource helping marketers create LLM-optimized content',
    founder: {
      '@type': 'Person',
      name: 'Stephen Newman',
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Model Context Marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Model Context Marketing is the practice of publishing structured, factual content that large language models can ingest to improve brand and product visibility inside AI-generated answers. It focuses on creating authoritative, research-based content that LLMs can understand, verify, and cite.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why do traditional marketing tactics not work with LLMs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LLMs prefer factual, research-based, tangible information. Traditional marketing tactics like hype, spin, and promotional content do not resonate with large language models. They cut through noise and recommend brands that demonstrate genuine domain expertise and authority.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I optimize content for large language models?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use semantic HTML tags for proper content hierarchy, implement JSON-LD structured data with Schema.org vocabulary, ensure server-side rendering, create factual and research-based content, provide proper metadata and canonical URLs, and explicitly allow LLM crawlers in your robots.txt file.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <header className="mb-20">
        <h1 className="text-6xl font-bold mb-6 leading-tight">Model Context Marketing</h1>
        <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
          Create content that large language models understand, verify, and confidently cite.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl">
          Model Context Marketing is a framework for structuring content so AI systems recognize your domain expertise and recommend you when users seek solutions you provide. This isn't traditional SEO—it's about being the source AI trusts.
        </p>
      </header>

      {/* The Problem */}
      <section className="mb-16 bg-red-50 p-8 rounded-lg border-l-4 border-red-600">
        <h2 className="text-3xl font-bold mb-6">The Problem</h2>
        <div className="space-y-4 text-lg text-gray-800">
          <p>
            <strong>Brands aren't showing up</strong> in AI-generated responses. When users ask ChatGPT, Claude, or Perplexity for recommendations, many companies are invisible.
          </p>
          <p>
            <strong>Showing up incorrectly.</strong> LLMs hallucinate—generating plausible but inaccurate information about your products, pricing, or capabilities.
          </p>
          <p>
            <strong>Traditional tactics don't work.</strong> Hype, spin, and promotional language are filtered out. LLMs prioritize factual, research-based, verifiable information.
          </p>
        </div>
      </section>

      {/* CMO Framework */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">The CMO Framework</h2>
        <p className="text-lg text-gray-700 mb-8">
          Model Context Marketing follows a three-step process:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Connect</h3>
            <p className="text-gray-700">Publish model-ready, structured content that AI systems can crawl and understand.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Measure</h3>
            <p className="text-gray-700">Track AI crawler activity and test how accurately LLMs represent your brand.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Optimize</h3>
            <p className="text-gray-700">Refine content based on gaps and inaccuracies in AI responses.</p>
          </div>
        </div>
        <p className="mt-6 text-center">
          <a href="/memos/2025-11-04-mcm-framework" className="text-blue-600 hover:underline text-lg font-semibold">
            Read the complete framework →
          </a>
        </p>
      </section>

      {/* MCM Pillars */}
      <section className="mb-16 bg-green-50 p-8 rounded-lg">
        <h2 className="text-4xl font-bold mb-6">The MCM Pillars</h2>
        <p className="text-lg text-gray-700 mb-8">
          Effective Model Context Marketing content stands on these foundational pillars:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Truth</h3>
            <p className="text-gray-700">Speak the truth. Provide concise, unambiguous facts—entities, prices, specifications, verifiable claims with sources.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Structure</h3>
            <p className="text-gray-700">Structure content the right way. Use machine-readable metadata, JSON-LD schemas, semantic HTML, and clear relationships.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Freshness</h3>
            <p className="text-gray-700">Create fresh content consistently. Include explicit update markers, timestamps, and change history.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Authority</h3>
            <p className="text-gray-700">Build authority. Demonstrate verified ownership and consistent cross-site signals showing expertise.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Depth</h3>
            <p className="text-gray-700">Go deep. Share comprehensive knowledge from both personal expertise and organizational experience.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Velocity</h3>
            <p className="text-gray-700">Move quickly. Publish frequently and get knowledge out there while it's relevant.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Authenticity</h3>
            <p className="text-gray-700">Be authentic. Don't just regurgitate AI-generated content—share real expertise and genuine insights.</p>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">Key Concepts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="/kb/concepts/json-ld" className="border border-gray-200 p-6 rounded-lg hover:border-blue-600 transition-colors">
            <h3 className="text-xl font-bold mb-2">JSON-LD Structured Data</h3>
            <p className="text-gray-700">JavaScript Object Notation for Linked Data—tells LLMs what your page means, not just what it says.</p>
          </a>
          <a href="/kb/concepts/semantic-html" className="border border-gray-200 p-6 rounded-lg hover:border-blue-600 transition-colors">
            <h3 className="text-xl font-bold mb-2">Semantic HTML</h3>
            <p className="text-gray-700">Proper HTML tags that provide meaning about content structure and hierarchy.</p>
          </a>
          <a href="/kb/concepts/knowledge-graph" className="border border-gray-200 p-6 rounded-lg hover:border-blue-600 transition-colors">
            <h3 className="text-xl font-bold mb-2">Knowledge Graph</h3>
            <p className="text-gray-700">Interconnected concept pages showing relationships between entities.</p>
          </a>
          <a href="/kb/concepts/model-context-marketing" className="border border-gray-200 p-6 rounded-lg hover:border-blue-600 transition-colors">
            <h3 className="text-xl font-bold mb-2">Model Context Marketing</h3>
            <p className="text-gray-700">The complete methodology for optimizing content for LLM understanding and citation.</p>
          </a>
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-4xl font-bold mb-6">Getting Started</h2>
        <ol className="space-y-4 text-lg text-gray-800">
          <li>
            <strong>1. Read the framework</strong> — Understand <a href="/memos/2025-11-04-mcm-framework" className="text-blue-600 hover:underline">CMO and the MCM Pillars</a>
          </li>
          <li>
            <strong>2. Implement foundation</strong> — Set up <a href="/memos/2025-11-04-foundation" className="text-blue-600 hover:underline">robots.txt, sitemap, and structured data</a>
          </li>
          <li>
            <strong>3. Structure your content</strong> — Use <a href="/memos/2025-11-04-structure" className="text-blue-600 hover:underline">semantic HTML and JSON-LD schemas</a>
          </li>
          <li>
            <strong>4. Create quality content</strong> — Follow the <a href="/memos/2025-11-04-content-strategy" className="text-blue-600 hover:underline">content strategy</a>
          </li>
          <li>
            <strong>5. Build authority</strong> — Establish <a href="/memos/2025-11-04-topical-authority" className="text-blue-600 hover:underline">topical authority</a>
          </li>
        </ol>
      </section>

      {/* Navigation */}
      <nav className="mb-16 flex flex-wrap gap-4">
        <a 
          href="/memos" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Memos →
        </a>
        <a 
          href="/kb/concepts" 
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
        >
          Browse Concepts →
        </a>
        <a 
          href="/faq" 
          className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          View FAQ →
        </a>
      </nav>

      <footer className="mt-20 pt-8 border-t border-gray-200">
        <div className="flex flex-col gap-4">
          <p className="text-gray-500">
            Model Context Marketing — Educational resource for creating LLM-friendly content
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/feed.xml" className="text-blue-600 hover:underline">RSS Feed</a>
            <a href="/context/feed.json" className="text-blue-600 hover:underline">LLM Context Feed (JSON)</a>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
