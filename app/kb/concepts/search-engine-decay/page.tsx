import Link from 'next/link';

export const metadata = {
  title: 'Search Engine Decay | Model Context Marketing',
  description: 'Why traditional search engines are becoming obsolete in the age of AI. Search engines have too much friction, too many clicks, and were built on outdated infrastructure.',
};

export default function SearchEngineDecayPage() {
  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Search Engine Decay',
    description: 'The process by which traditional search engines become obsolete due to excessive friction, outdated infrastructure, and the rise of AI-powered conversational interfaces that provide instant answers without requiring multiple clicks and page navigations.',
    inDefinedTermSet: 'Model Context Marketing',
    termCode: 'search-engine-decay',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
        <nav className="mb-8">
          <Link href="/kb/concepts" className="text-blue-600 hover:underline">
            ← Back to Concepts
          </Link>
        </nav>

        <article className="prose prose-lg max-w-none">
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Search Engine Decay</h1>
            <p className="text-xl text-gray-600">
              The process by which traditional search engines become obsolete due to excessive friction, outdated infrastructure, and the rise of AI-powered conversational interfaces.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Definition</h2>
            <p className="text-lg leading-relaxed">
              <strong>Search Engine Decay</strong> refers to the gradual obsolescence of traditional search engines (like Google, Bing) as the primary method for information discovery. This decay is driven by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><strong>Too much friction</strong> — Too many clicks, too much consumption, too much time required</li>
              <li><strong>Outdated infrastructure</strong> — Built on technology paradigms from the 1990s-2000s</li>
              <li><strong>Maximized monetization</strong> — Every conceivable angle has been exploited for revenue</li>
              <li><strong>Value extraction complete</strong> — All possible value has been extracted from the model</li>
            </ul>
          </section>

          <section className="mb-12 bg-red-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">The Core Problem: Too Much Friction</h2>
            <p className="text-lg">
              Society doesn't have time for the traditional search process anymore:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-lg mt-4">
              <li>Type query into search box</li>
              <li>Scan through 10 blue links and ads</li>
              <li>Click on first result</li>
              <li>Scan page for relevant information</li>
              <li>Click back if not satisfied</li>
              <li>Try second or third result</li>
              <li>Repeat until answer found</li>
            </ol>
            <p className="text-lg mt-4 font-semibold">
              This multi-click, multi-page process is being replaced by single conversational queries that provide direct answers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Why It Matters</h2>
            <p className="text-lg leading-relaxed mb-4">
              If search engines are dying, then the entire SEO industry built on ranking for keywords is also becoming less relevant. This doesn't mean SEO is dead—it means <strong>SEO is evolving into MCO</strong> (Model Context Optimization).
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <p className="font-semibold mb-2">The Shift:</p>
              <p><strong>Old Model:</strong> Optimize for search engine ranking algorithms (PageRank, backlinks, keywords)</p>
              <p className="mt-2"><strong>New Model:</strong> Optimize for AI model understanding and trust (structured data, factual accuracy, domain expertise)</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The 10-Year Prediction</h2>
            <p className="text-lg leading-relaxed">
              The bold claim: <strong>Within 10 years, search engines will be largely obsolete as the primary channel for information discovery.</strong>
            </p>
            <p className="text-lg leading-relaxed mt-4">
              While not yet proven unequivocally, the trajectory is clear:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>ChatGPT reached 1 billion users in 36 months</li>
              <li>AI models provide instant, conversational answers</li>
              <li>Users increasingly prefer "ask AI" over "search Google"</li>
              <li>Younger demographics already skipping search engines entirely</li>
            </ul>
          </section>

          <section className="mb-12 bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">The Yellow Pages Analogy</h2>
            <p className="text-lg leading-relaxed">
              You don't look up a plumber in the Yellow Pages anymore. That's an outdated channel. You might verify information there (trust but verify), but it's not where you <em>find</em> information in the first place.
            </p>
            <p className="text-lg leading-relaxed mt-4 font-semibold">
              Search engines are becoming the new Yellow Pages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">What This Means for Marketers</h2>
            <p className="text-lg leading-relaxed mb-4">
              Marketers face a critical decision: Do you continue investing heavily in traditional SEO (a decaying channel), or do you start investing in AI optimization (an emerging channel)?
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
              <p className="font-semibold mb-2">The Bet You Must Make:</p>
              <p>Invest in traditional channels (search, social) OR invest in emerging channels (AI models, conversational interfaces).</p>
              <p className="mt-3">The smart bet: <strong>Hedge by doing both, but lean heavily into AI-first content.</strong></p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Adapt</h2>
            <ol className="list-decimal pl-6 space-y-3 text-lg">
              <li>
                <strong>Create AI-ready content</strong> — Use structured data, semantic HTML, and clear hierarchies
              </li>
              <li>
                <strong>Build trust signals</strong> — Establish domain expertise through factual, research-based content
              </li>
              <li>
                <strong>Reduce friction</strong> — Make it easy for AI to extract and cite your information
              </li>
              <li>
                <strong>Embrace conversational queries</strong> — Optimize for how people ask AI questions, not how they type keywords
              </li>
              <li>
                <strong>Monitor AI crawler activity</strong> — Track which AI bots are crawling your content
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Concepts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/kb/concepts/website-fatigue"
                className="border border-gray-200 p-4 rounded hover:border-blue-600 transition-colors"
              >
                <h3 className="font-semibold mb-1">Website Fatigue</h3>
                <p className="text-sm text-gray-600">Users exhausted by complex, bloated websites</p>
              </Link>
              <Link 
                href="/kb/concepts/model-context-marketing"
                className="border border-gray-200 p-4 rounded hover:border-blue-600 transition-colors"
              >
                <h3 className="font-semibold mb-1">Model Context Marketing</h3>
                <p className="text-sm text-gray-600">Framework for AI-optimized content</p>
              </Link>
            </div>
          </section>

          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Learn More</h2>
            <p className="mb-4">
              Read the full memo on this paradigm shift:
            </p>
            <Link 
              href="/memos/2025-11-04-ai-channel-paradigm-shift"
              className="text-blue-600 hover:underline font-semibold text-lg"
            >
              AI as a Marketing Channel: The Search Engine Sunset →
            </Link>
          </section>
        </article>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/kb/concepts" className="text-blue-600 hover:underline">
            ← Back to Concepts
          </Link>
        </footer>
      </main>
    </>
  );
}

