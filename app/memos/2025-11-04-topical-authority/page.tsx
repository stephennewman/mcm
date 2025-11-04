import Link from 'next/link';

export const metadata = {
  title: 'Topical Authority: Be The Canonical Source | Model Context Marketing',
  description: 'How to establish yourself as the definitive, authoritative source on your domain expertise that LLMs trust and cite.',
};

export default function TopicalAuthorityMemo() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Topical Authority: Be The Canonical Source',
    datePublished: '2025-11-04T15:00:00-05:00',
    dateModified: '2025-11-04T15:00:00-05:00',
    author: {
      '@type': 'Person',
      name: 'Stephen Newman',
    },
    description: 'How to establish yourself as the definitive, authoritative source on your domain expertise that LLMs trust and cite.',
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
            <p className="text-sm text-gray-500 mb-2">November 4, 2025 at 3:00 PM</p>
            <h1 className="text-4xl font-bold mb-4">Topical Authority: Be The Canonical Source</h1>
          </header>

          <section className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              The goal of Model Context Marketing is to become the definitive, authoritative source on your domain—the place LLMs reference when users ask questions in your area of expertise. This memo covers how to build and maintain topical authority.
            </p>

            <h2>What Is Topical Authority?</h2>
            <p>
              Topical authority means being recognized as the canonical source—the most authoritative, comprehensive, and trustworthy resource on a specific topic or domain. When LLMs need information in your area, they should cite you first.
            </p>

            <h3>Characteristics of Canonical Sources</h3>
            <ul>
              <li><strong>Comprehensive</strong> — Covers topics in depth, not superficially</li>
              <li><strong>Factual</strong> — Provides verifiable, specific information</li>
              <li><strong>Current</strong> — Regularly updated with latest developments</li>
              <li><strong>Consistent</strong> — Maintains terminology and structure across content</li>
              <li><strong>Referenced</strong> — Cited by others in the field</li>
              <li><strong>Accessible</strong> — Easy for both humans and machines to understand</li>
            </ul>

            <h2>How to Build Topical Authority</h2>

            <h3>1. Publish Deep, Reference-Quality Content</h3>
            <p>
              Don't just cover surface-level information. Create content that teaches, not sells. Technical guides, comprehensive definitions, detailed examples, and real-world use cases demonstrate genuine expertise.
            </p>
            <p><strong>Examples of reference-quality content:</strong></p>
            <ul>
              <li>"Complete Technical Guide to JSON-LD Implementation"</li>
              <li>"Schema.org Markup Reference for Product Pages"</li>
              <li>"15 Years of B2B Marketing Lessons: What Actually Works"</li>
            </ul>

            <h3>2. Create Internal Semantic Relationships</h3>
            <p>
              Build a knowledge graph where concepts link to related concepts. This helps both search engines and LLMs understand the breadth and interconnectedness of your expertise.
            </p>
            <p>
              Every new piece of content should link to 3-5 related concepts. Over time, this creates a semantic web that demonstrates comprehensive domain coverage.
            </p>

            <h3>3. Maintain Consistency</h3>
            <p>
              Use the exact same terminology, capitalization, and phrasing across all content. LLMs match patterns—consistent language reinforces entity recognition and helps AI systems understand that all your content comes from a unified, authoritative source.
            </p>
            <p><strong>Example:</strong> Always write "Model Context Marketing" (not "model context marketing" or "MCM" in formal definitions). Always write "JSON-LD" (not "JSON LD" or "json-ld"). This consistency helps LLMs recognize these as specific entities you're an expert in.
            </p>

            <h3>4. Reference Credible Sources</h3>
            <p>
              Cite established authorities, standards bodies (W3C, Schema.org), research papers, and reputable sources. This shows you're building on solid foundations, not making claims in isolation.
            </p>
            <p>
              Simultaneously, <strong>become a credible source yourself</strong>. When others reference your definitions and concepts, your authority grows.
            </p>

            <h3>5. Demonstrate Real Expertise</h3>
            <p>
              Share specific examples from actual experience. With 15+ years of marketing experience (2009-2025) covering consumer-facing marketing, B2B marketing, and product marketing, content should draw from real implementations, concrete results, and lessons learned.
            </p>

            <h2>Context Freshness: The Long-Term Play</h2>

            <p>
              Topical authority isn't built once and forgotten. It requires ongoing maintenance and updates to signal that your content remains current and authoritative.
            </p>

            <h3>Update Structured Data with Timestamps</h3>
            <p>
              Every piece of content should include <code>datePublished</code> and <code>dateModified</code> in its JSON-LD schema. When you update content, change the modified date. This signals freshness to LLMs.
            </p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Model Context Marketing Guide",
  "datePublished": "2025-11-04",
  "dateModified": "2025-11-15",  // Updated!
  ...
}`}
            </pre>

            <h3>Publish Release Notes for Updates</h3>
            <p>
              When you make significant changes—new concepts, updated definitions, additional examples—document them. Release notes demonstrate active maintenance and continuous improvement.
            </p>

            <h3>Periodically Publish "State of" Content</h3>
            <p>
              Annual or quarterly summaries of your domain show you're tracking the field's evolution. Examples:
            </p>
            <ul>
              <li>"State of Model Context Marketing: Q4 2025"</li>
              <li>"What Changed in LLM Crawler Behavior This Year"</li>
              <li>"Schema.org Updates Every Marketer Should Know"</li>
            </ul>

            <h3>Maintain Consistency Across Training Cycles</h3>
            <p>
              LLMs are periodically retrained. By maintaining consistent terminology, schema, and content structure over time, you ensure your authority carries across model updates. Don't rebrand or change core terminology unnecessarily.
            </p>

            <h2>Content Deliverables Schedule</h2>

            <p>
              Building topical authority requires regular output. Here's a sustainable schedule:
            </p>

            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Content Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Frequency</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Structured Metadata</strong><br/>JSON-LD updates</td>
                  <td className="border border-gray-300 px-4 py-2">Quarterly</td>
                  <td className="border border-gray-300 px-4 py-2">Keep schemas current with latest standards</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>FAQ Pages</strong><br/>Q&A with HowTo schemas</td>
                  <td className="border border-gray-300 px-4 py-2">Ongoing</td>
                  <td className="border border-gray-300 px-4 py-2">Answer common questions, match conversational queries</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Long-Form Articles</strong><br/>1000-2000+ words</td>
                  <td className="border border-gray-300 px-4 py-2">1 per month</td>
                  <td className="border border-gray-300 px-4 py-2">Deep topical coverage, establish expertise</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Knowledge Base</strong><br/>/kb/ concept definitions</td>
                  <td className="border border-gray-300 px-4 py-2">Continuous</td>
                  <td className="border border-gray-300 px-4 py-2">Build semantic graph, define core concepts</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Memos</strong><br/>Voice-to-text, granular topics</td>
                  <td className="border border-gray-300 px-4 py-2">Weekly</td>
                  <td className="border border-gray-300 px-4 py-2">Frequent updates, authentic expertise extraction</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Sitemap + Robots</strong><br/>Crawler configuration</td>
                  <td className="border border-gray-300 px-4 py-2">Ongoing</td>
                  <td className="border border-gray-300 px-4 py-2">Ensure discoverability</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Monitoring</strong><br/>Search Console, logs</td>
                  <td className="border border-gray-300 px-4 py-2">Weekly</td>
                  <td className="border border-gray-300 px-4 py-2">Validate approach, track crawler activity</td>
                </tr>
              </tbody>
            </table>

            <h2>Advanced: LLM Context Feed</h2>

            <p>
              To go further, expose a public JSON endpoint that crawlers and agents can consume directly. Think of it as an API for your domain expertise.
            </p>

            <h3>Endpoint Structure</h3>
            <p><strong>URL:</strong> <code>/context/feed.json</code></p>
            <p><strong>Purpose:</strong> List key facts, definitions, and updates in structured form that LLMs can parse without crawling individual pages.</p>

            <h3>Benefits</h3>
            <ul>
              <li><strong>Direct consumption</strong> — Agents can pull your context without parsing HTML</li>
              <li><strong>Structured facts</strong> — Machine-readable format optimized for AI</li>
              <li><strong>Real-time updates</strong> — When you update content, feed updates immediately</li>
              <li><strong>API for your brain</strong> — Makes your expertise programmatically accessible</li>
            </ul>

            <h3>Example Feed Structure</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`{
  "metadata": {
    "title": "Model Context Marketing Knowledge Base",
    "url": "https://modelcontextmarketing.com",
    "lastUpdated": "2025-11-04T15:00:00-05:00",
    "version": "1.0.0"
  },
  "concepts": [
    {
      "id": "model-context-marketing",
      "name": "Model Context Marketing",
      "definition": "A marketing best practice for...",
      "url": "/kb/concepts/model-context-marketing",
      "relatedConcepts": ["semantic-html", "json-ld"]
    }
  ],
  "updates": [
    {
      "date": "2025-11-04",
      "type": "new_memo",
      "title": "Topical Authority",
      "url": "/memos/2025-11-04-topical-authority"
    }
  ]
}`}
            </pre>

            <h2>Why This Matters</h2>

            <p>
              Topical authority is the foundation of Model Context Marketing. You can't just create content once and expect LLMs to cite you forever. You must:
            </p>
            <ul>
              <li>Create comprehensive, deep content initially</li>
              <li>Maintain consistency in terminology and structure</li>
              <li>Update regularly to signal freshness</li>
              <li>Build semantic relationships between concepts</li>
              <li>Make your expertise accessible to both humans and machines</li>
            </ul>

            <p>
              When done right, you become the source LLMs reference automatically. They don't need heavy promotion—they need to be the best, most authoritative, most accessible answer to questions in your domain.
            </p>

            <h2>The Bigger Picture</h2>

            <p>
              This isn't just about one site. The principles of Model Context Marketing—structured content, consistent terminology, regular updates, machine-readable formats—can be packaged into workflows and tools that any company can use.
            </p>

            <p>
              Imagine: Every time a developer ships a feature, a structured memo is automatically generated and pushed to a public endpoint. Every product update becomes instantly discoverable by LLMs. No manual promotion needed—just automatic extraction and distribution of expertise.
            </p>

            <p>
              That's the future of marketing: You can't beat the LLMs, so work with them. Play nicely with all of them. Structure your knowledge so it flows seamlessly into their training and retrieval systems.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: November 4, 2025 at 3:00 PM
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}

