import Link from 'next/link';

export const metadata = {
  title: 'Website Fatigue | Model Context Marketing',
  description: 'Why users are exhausted by traditional websites. People don\'t need 900 pages and complex navigation—they just want to know: What do you have? How much? Can I use it?',
};

export default function WebsiteFatiguePage() {
  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Website Fatigue',
    description: 'The exhaustion and frustration users experience with bloated, complex traditional websites. Users want instant answers to three questions: What do you have? How much does it cost? Can I use it? They do not want to scroll through hundreds of pages, navigate complex menus, or download content to educate themselves.',
    inDefinedTermSet: 'Model Context Marketing',
    termCode: 'website-fatigue',
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
            <h1 className="text-5xl font-bold mb-4">Website Fatigue</h1>
            <p className="text-xl text-gray-600">
              The exhaustion users experience with bloated, complex traditional websites that make them work too hard for basic information.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Definition</h2>
            <p className="text-lg leading-relaxed">
              <strong>Website Fatigue</strong> is the user exhaustion and frustration caused by traditional websites that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Have 500-900 pages of content</li>
              <li>Force users through complex navigation structures</li>
              <li>Require downloading whitepapers or ebooks to learn basic information</li>
              <li>Make users complete traditional buyer journeys</li>
              <li>Hide pricing, features, or key details behind walls</li>
            </ul>
          </section>

          <section className="mb-12 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold mb-4">The Three Questions Users Actually Want Answered</h2>
            <ol className="list-decimal pl-6 space-y-3 text-xl font-semibold">
              <li>What do you have?</li>
              <li>How much does it cost?</li>
              <li>Can I use it?</li>
            </ol>
            <p className="text-lg mt-6">
              That's it. Users don't need elaborate storytelling, extensive case studies, or multi-page product tours before getting these basic answers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The Instant Gratification Era</h2>
            <p className="text-lg leading-relaxed mb-4">
              We live in an <strong>instant gratification world</strong>. Users expect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Answers in seconds, not minutes</li>
              <li>Direct information, not marketing fluff</li>
              <li>Transparency upfront, not gated content</li>
              <li>Simple navigation, not complex site hierarchies</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded mt-6">
              <p className="text-lg">
                <strong>The New Reality:</strong> I don't need to scroll through 500 pages. I don't need to go through the traditional buyer journey. I don't need to download a piece of content and educate myself.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Websites Got So Bloated</h2>
            <p className="text-lg leading-relaxed mb-4">
              Traditional marketing wisdom said:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><strong>More content = better SEO</strong> (thousands of blog posts)</li>
              <li><strong>Complex buyer journeys</strong> (awareness → consideration → decision)</li>
              <li><strong>Gated content</strong> (capture leads before providing value)</li>
              <li><strong>Feature showcases</strong> (dozens of pages explaining every feature)</li>
              <li><strong>Social proof overload</strong> (endless testimonials and case studies)</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              This worked in the 2010s. It doesn't work in the 2020s.
            </p>
          </section>

          <section className="mb-12 bg-red-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">The Problem with Traditional Websites</h2>
            <div className="space-y-4 text-lg">
              <p>
                <strong>Navigation Overload:</strong> 7 top-level menu items, each with 5-10 sub-items. Users don't know where to start.
              </p>
              <p>
                <strong>Information Hiding:</strong> Pricing hidden behind "Contact Sales." Features buried in PDFs. Specifications scattered across dozens of pages.
              </p>
              <p>
                <strong>Mandatory Marketing:</strong> Can't access the product without watching the demo video, reading the case study, and subscribing to the newsletter.
              </p>
              <p>
                <strong>Slow Load Times:</strong> Heavy images, tracking scripts, pop-ups, chat widgets, cookie banners—all slowing down the experience.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Symptoms of Website Fatigue</h2>
            <p className="text-lg mb-4">Users experiencing website fatigue will:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><strong>Bounce quickly</strong> — Leave if they can't find info in 10-15 seconds</li>
              <li><strong>Ask AI instead</strong> — Go to ChatGPT and ask "What does [Company] do?"</li>
              <li><strong>Skip to competitors</strong> — Look for simpler, clearer alternatives</li>
              <li><strong>Distrust the brand</strong> — If you hide pricing, what else are you hiding?</li>
            </ul>
          </section>

          <section className="mb-12 bg-green-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">The Solution: Tight Websites</h2>
            <p className="text-lg leading-relaxed mb-4">
              Your websites should be <strong>tight</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><strong>Minimal pages</strong> — 10-20 core pages, not 900</li>
              <li><strong>Clear navigation</strong> — 3-5 top-level items max</li>
              <li><strong>Transparent pricing</strong> — Show it upfront or explain why you can't</li>
              <li><strong>Fast answers</strong> — Answer "What? How much? Can I?" in the hero section</li>
              <li><strong>No gates</strong> — Provide value freely; capture leads through value, not barriers</li>
            </ul>
            <p className="text-lg mt-4 font-semibold">
              I just need to know: Can you do the job or not? Can you provide the information or not?
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Website Fatigue in the AI Era</h2>
            <p className="text-lg leading-relaxed mb-4">
              AI accelerates website fatigue because <strong>users can now bypass your website entirely</strong>:
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <p className="font-semibold mb-2">Traditional Path:</p>
              <p>User → Google Search → Your Website → Navigate pages → Find answer (maybe)</p>
              <p className="font-semibold mt-4 mb-2">AI Path:</p>
              <p>User → Ask ChatGPT → Get answer (with or without your brand mentioned)</p>
            </div>
            <p className="text-lg leading-relaxed mt-6">
              If your website is bloated and hard to navigate, AI models will either:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-lg">
              <li><strong>Struggle to extract accurate info</strong> (leading to hallucinations)</li>
              <li><strong>Skip you entirely</strong> (recommend competitors instead)</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Combat Website Fatigue</h2>
            <ol className="list-decimal pl-6 space-y-3 text-lg">
              <li>
                <strong>Audit ruthlessly</strong> — Delete 80% of your pages if they don't serve the core questions
              </li>
              <li>
                <strong>Structure for scanning</strong> — Use headings, bullet points, tables—not paragraphs
              </li>
              <li>
                <strong>Front-load information</strong> — Put key facts in the first 100 words
              </li>
              <li>
                <strong>Optimize for AI extraction</strong> — Use semantic HTML and structured data
              </li>
              <li>
                <strong>Test with real users</strong> — Can they answer the 3 questions in 30 seconds?
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Concepts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/kb/concepts/search-engine-decay"
                className="border border-gray-200 p-4 rounded hover:border-blue-600 transition-colors"
              >
                <h3 className="font-semibold mb-1">Search Engine Decay</h3>
                <p className="text-sm text-gray-600">Why traditional search engines are becoming obsolete</p>
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

