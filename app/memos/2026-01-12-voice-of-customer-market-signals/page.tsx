export default function MemoPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Voice of Customer: Extracting Market Signals for AI Search',
    description: 'The key to driving results in AI-powered search is extracting raw, authentic market signals—queries, form fills, and customer needs—to inform content that demonstrates relevance, timeliness, and true market understanding.',
    datePublished: '2026-01-12',
    dateModified: '2026-01-12',
    author: {
      '@type': 'Person',
      name: 'Stephen Newman',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Model Context Marketing',
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen max-w-3xl mx-auto px-6 py-16">
        <article>
          <header className="mb-12">
            <time className="text-sm text-gray-500 font-medium">January 12, 2026</time>
            <h1 className="text-5xl font-bold mt-2 mb-6 leading-tight">
              Voice of Customer: Extracting Market Signals for AI Search
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              The key to driving results in AI-powered search is having the infrastructure to capture raw, authentic market signals—and turning those into well-curated content that demonstrates relevance, timeliness, and genuine customer understanding.
            </p>
          </header>

          <section className="prose prose-lg max-w-none space-y-6 text-gray-800 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Signal Extraction Imperative</h2>
            <p>
              The key to really driving results in AI-powered search—and search in general—is to have an area of your site and parts of your customer experience that are able to <strong>extract raw, authentic pulses of the market</strong>.
            </p>
            <p>
              What does this look like in practice? It means capturing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Queries</strong> — What are people actually searching for? What questions are they asking?</li>
              <li><strong>Form fills</strong> — What information do prospects volunteer about their needs and situations?</li>
              <li><strong>Contextual information</strong> — The current status, pain points, and clustering of market needs</li>
            </ul>
            <p>
              This data isn't just for sales qualification or lead scoring. It's <em>market intelligence gold</em> for content strategy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">From Signals to Content</h2>
            <p>
              When you have infrastructure to capture these authentic market signals, you can use them to inform:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>New content creation</strong> — Topics, angles, and formats based on real questions being asked</li>
              <li><strong>New site sections</strong> — Building resources that directly address identified market clusters</li>
              <li><strong>More nuanced storytelling</strong> — Narratives that speak to the actual, current needs of the market—not assumptions from six months ago</li>
            </ul>
            <p>
              The goal is to tell a more <strong>curated, relevant story</strong> about what the market actually needs right now.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why This Matters for AI Search</h2>
            <p>
              Being able to understand market signals and turn them into well-curated content is <em>critical</em> for AI search because it demonstrates three things that LLMs are increasingly weighting:
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Relevance</h3>
              <p className="text-gray-800 mb-0">
                Content that addresses actual market questions—not guessed topics—is inherently more relevant. LLMs can detect when content matches the real language and concerns of users.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Timeliness</h3>
              <p className="text-gray-800 mb-0">
                Fresh content that reflects current market conditions signals that you're actively engaged with your domain. Publication dates, updates, and topical freshness all matter.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Customer Understanding</h3>
              <p className="text-gray-800 mb-0">
                When your content demonstrates a deep understanding of customer pain points and market dynamics, LLMs recognize this authority. You're not just publishing—you're demonstrating expertise.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Feedback Loop</h2>
            <p>
              Here's where it gets powerful: This content, informed by real market signals, gets indexed by search engines. Those search engines then get picked up by language models during their training and retrieval processes.
            </p>
            <p>
              You're essentially <strong>feeding validated market intelligence back through the discovery ecosystem</strong>.
            </p>
            <p>
              The loop looks like this:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Capture authentic market signals from your customer touchpoints</li>
              <li>Transform those signals into curated, relevant content</li>
              <li>Content gets indexed by search engines</li>
              <li>LLMs incorporate this content into their knowledge and retrieval</li>
              <li>Your content becomes part of AI-powered answers</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real-Time Search and AI Chat Convergence</h2>
            <p>
              As real-time search gets incorporated more into AI-powered contextual chat searches, this becomes <em>even more valuable</em>.
            </p>
            <p>
              We're already seeing models that pull live data, cite recent publications, and prioritize fresh sources. The trend is clear: <strong>AI search is becoming increasingly real-time</strong>.
            </p>
            <p>
              This means:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Content velocity matters more than ever</li>
              <li>Fresh market signals translated into fresh content gets weighted higher</li>
              <li>Companies with active signal extraction pipelines will have a compounding advantage</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Voice of Customer: More Critical Than Ever</h2>
            <p>
              The bottom line: <strong>Voice of customer has never been more important</strong>.
            </p>
            <p>
              It's not just a research methodology or a CX initiative anymore. It's a content strategy imperative. It's a search optimization lever. It's a competitive moat.
            </p>
            <p>
              Companies that build the infrastructure to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Capture market signals at scale</li>
              <li>Quickly transform those signals into curated content</li>
              <li>Publish with relevance, timeliness, and demonstrated understanding</li>
            </ul>
            <p>
              ...will be the ones that win in AI-powered discovery.
            </p>

            <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaway</h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-0">
                Build infrastructure to extract authentic market signals from queries, form fills, and customer interactions. Use that intelligence to create curated, timely content that demonstrates genuine market understanding. This is the new competitive advantage in AI-powered search.
              </p>
            </div>
          </section>

          <footer className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Published January 20, 2026 by Stephen Newman
            </p>
            <nav className="mt-6">
              <a 
                href="/memos" 
                className="text-blue-600 hover:underline font-medium"
              >
                ← Back to all memos
              </a>
            </nav>
          </footer>
        </article>
      </main>
    </>
  );
}
