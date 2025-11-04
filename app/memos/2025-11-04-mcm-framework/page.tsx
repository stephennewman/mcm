import Link from 'next/link';

export const metadata = {
  title: 'The Model Context Marketing Framework: CMO and The Pillars | Model Context Marketing',
  description: 'Complete framework for Model Context Marketing: Connect, Measure, Optimize (CMO) and the seven MCM pillars - Truth, Structure, Freshness, Authority, Depth, Velocity, Authenticity.',
};

export default function MCMFrameworkMemo() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Model Context Marketing Framework: CMO and The Pillars',
    datePublished: '2025-11-04T16:00:00-05:00',
    dateModified: '2025-11-04T17:00:00-05:00',
    author: {
      '@type': 'Person',
      name: 'Stephen Newman',
    },
    description: 'Complete framework for Model Context Marketing: Connect, Measure, Optimize (CMO) and the seven MCM pillars - Truth, Structure, Freshness, Authority, Depth, Velocity, Authenticity.',
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
            <p className="text-sm text-gray-500 mb-2">November 4, 2025 at 4:00 PM (Updated 5:00 PM)</p>
            <h1 className="text-4xl font-bold mb-4">The Model Context Marketing Framework</h1>
            <p className="text-xl text-gray-600">CMO and The MCM Pillars</p>
          </header>

          <section className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              Model Context Marketing is a discipline about connecting your brand entity with AI models so that you show up when buyers and users are looking for solutions. This memo outlines the complete framework: CMO (the process) and the seven MCM Pillars (the foundation).
            </p>

            <h2>What Is Model Context Marketing?</h2>

            <p>
              Model Context Marketing helps AI better understand you and your brand, enabling you to be found by buyers and users through conversational AI interfaces. It's about connecting your entity with large language models so that when someone asks about problems you solve, you show up in the response.
            </p>

            <h3>It's Not SEO</h3>
            <p>
              Traditional SEO focused on ranking for keywords in search results. Model Context Marketing is fundamentally different—it's about being cited and recommended by AI systems. You can't control it the same way you could with Google Search. It's more of a black box, and we're all trying to figure it out together.
            </p>

            <p>
              But the principles are becoming clear: expose structured facts about your company, brand, and products so AI systems can understand, remember, and accurately cite you.
            </p>

            <h2>The Problems Marketers Face</h2>

            <h3>1. Brands Aren't Showing Up</h3>
            <p>
              When users ask AI assistants for recommendations, many brands simply don't get mentioned. LLMs favor entities that have stronger presence and authority. If your brand isn't well-represented in the data these models were trained on, you're invisible.
            </p>

            <h3>2. Showing Up Incorrectly (Hallucinations)</h3>
            <p>
              Even if you are showing up, the information might be wrong. LLMs hallucinate—they generate plausible-sounding but inaccurate information. Your product features, pricing, or capabilities might be misrepresented because the model doesn't have clear, structured facts to draw from.
            </p>

            <h3>3. Can't Track AI Crawler Activity</h3>
            <p>
              You don't know when AI crawlers are hitting your site or what pages they're accessing. This information lives in server logs, not Google Analytics. You can see when someone clicks a link (with UTM tags), but you can't easily measure whether you're positioning yourself better with the models.
            </p>

            <h3>4. Long Time for Changes to Show Up</h3>
            <p>
              Unlike traditional SEO where you might see ranking changes in days or weeks, changes to how LLMs understand you can take much longer. Models are periodically retrained, and your updates need to be crawled, ingested, and incorporated into the next training cycle.
            </p>

            <h2>The CMO Framework</h2>

            <p>
              Model Context Marketing follows a three-step framework: <strong>CMO</strong>.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-8">
              <h3 className="text-2xl font-bold mb-4">CMO</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>C</strong>onnect</li>
                <li><strong>M</strong>easure</li>
                <li><strong>O</strong>ptimize</li>
              </ul>
            </div>

            <h3>Connect</h3>
            <p>
              Publish model-ready content that AI systems can crawl and understand. This means:
            </p>
            <ul>
              <li><strong>Authentic content</strong> — Real expertise, not AI-generated fluff</li>
              <li><strong>Curated information</strong> — Structured, organized knowledge</li>
              <li><strong>Machine-readable formats</strong> — JSON-LD, semantic HTML, proper schemas</li>
              <li><strong>Crawlable structure</strong> — robots.txt allows LLM bots, sitemap includes all pages</li>
            </ul>

            <h3>Measure</h3>
            <p>
              Track AI crawler traffic and understand accuracy of how you're represented. This includes:
            </p>
            <ul>
              <li><strong>Server log analysis</strong> — Identify ChatGPT-User, Claude-Web, PerplexityBot activity</li>
              <li><strong>Frequency tracking</strong> — How often are crawlers accessing your content?</li>
              <li><strong>Page analysis</strong> — Which pages get the most crawler attention?</li>
              <li><strong>Test prompts</strong> — Run queries to see how AI systems respond about your brand</li>
            </ul>

            <h3>Optimize</h3>
            <p>
              Improve responses based on what you measure. Strategies include:
            </p>
            <ul>
              <li><strong>Test prompts over time</strong> — "What is [your company]?" → Monitor consistency</li>
              <li><strong>Identify gaps</strong> — What information is missing or wrong?</li>
              <li><strong>Refine content</strong> — Add missing facts, clarify ambiguous statements</li>
              <li><strong>Strengthen signals</strong> — Improve Truth, Structure, Freshness, Authority (see TSFA below)</li>
            </ul>

            <h2>The MCM Pillars</h2>

            <p>
              To execute CMO effectively, your content must stand on seven foundational pillars that LLMs recognize and trust.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 my-8">
              <h3 className="text-2xl font-bold mb-4">The Seven MCM Pillars</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Truth</strong> — Speak the truth</li>
                <li><strong>Structure</strong> — Structure content the right way</li>
                <li><strong>Freshness</strong> — Create fresh content consistently</li>
                <li><strong>Authority</strong> — Build authority</li>
                <li><strong>Depth</strong> — Go deep</li>
                <li><strong>Velocity</strong> — Move quickly</li>
                <li><strong>Authenticity</strong> — Be authentic</li>
              </ul>
            </div>

            <h3>1. Truth: Speak the Truth</h3>
            <p>
              LLMs prioritize factual, verifiable information. Provide concise, unambiguous facts:
            </p>
            <ul>
              <li><strong>Entities</strong> — Clear identification of what things are (companies, products, people)</li>
              <li><strong>Prices</strong> — Specific pricing information, not "contact us"</li>
              <li><strong>Locations</strong> — Physical addresses, service areas, regions</li>
              <li><strong>SKUs</strong> — Product identifiers, version numbers, specifications</li>
              <li><strong>Claims</strong> — Statements that can be verified</li>
              <li><strong>Sources</strong> — Citations, references, evidence</li>
            </ul>

            <p><strong>Example of Truth:</strong></p>
            <div className="bg-green-50 p-4 rounded">
              <p className="mb-0">
                "Our platform processes 10 million API requests per day with 99.9% uptime, serving 500+ enterprise customers across North America and Europe. Pricing starts at $99/month for the Starter plan."
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-2">✅ Specific, verifiable, factual</p>

            <div className="bg-red-50 p-4 rounded mt-4">
              <p className="mb-0">
                "We're the leading innovative solution provider transforming how businesses operate with cutting-edge AI technology."
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-2">❌ Vague, promotional, unverifiable</p>

            <h3>2. Structure: Structure Content the Right Way</h3>
            <p>
              Make your content parseable by AI systems. Use machine-readable metadata and relationships:
            </p>
            <ul>
              <li><strong>JSON-LD schemas</strong> — Structured data using Schema.org vocabulary</li>
              <li><strong>Semantic HTML</strong> — Proper tags (article, section, header) not just divs</li>
              <li><strong>IDs and relationships</strong> — Link concepts together in knowledge graph</li>
              <li><strong>Consistent tags</strong> — Use same terminology across all content</li>
            </ul>

            <p><strong>Key insight:</strong> Structure tells LLMs what your content <em>means</em>, not just what it <em>says</em>.</p>

            <h3>3. Freshness: Create Fresh Content Consistently</h3>
            <p>
              Signal that your content is current and maintained with explicit update markers:
            </p>
            <ul>
              <li><strong>Timestamps</strong> — Include <code>datePublished</code> and <code>dateModified</code> in JSON-LD</li>
              <li><strong>Update markers</strong> — "Last updated: November 4, 2025"</li>
              <li><strong>Change history</strong> — Document what changed and when</li>
              <li><strong>Release notes</strong> — For product updates and new features</li>
              <li><strong>Regular cadence</strong> — Weekly memos, monthly articles signal active maintenance</li>
            </ul>

            <h3>4. Authority: Build Authority</h3>
            <p>
              Establish yourself as the authoritative source through verified ownership and consistent cross-site signals:
            </p>
            <ul>
              <li><strong>Verified ownership</strong> — Domain verification, official channels</li>
              <li><strong>Cross-site consistency</strong> — Same information on LinkedIn, Crunchbase, GitHub</li>
              <li><strong>Backlinks from credible sources</strong> — Other authorities cite you</li>
              <li><strong>Author attribution</strong> — Real people with real credentials</li>
              <li><strong>Years of experience</strong> — Demonstrated expertise over time (e.g., "15+ years")</li>
            </ul>

            <p>
              Cross-site signals are huge. When your company name, products, and key information appear consistently across multiple authoritative platforms, LLMs gain confidence that the information is accurate.
            </p>

            <h3>5. Depth: Go Deep</h3>
            <p>
              Share comprehensive knowledge from both personal expertise and organizational experience:
            </p>
            <ul>
              <li><strong>Personal domain expertise</strong> — Your 15+ years of experience</li>
              <li><strong>Organizational knowledge</strong> — Team insights, case studies, lessons learned</li>
              <li><strong>Comprehensive coverage</strong> — Don't just skim the surface—provide deep explanations</li>
              <li><strong>Technical details</strong> — Specifics that demonstrate true understanding</li>
              <li><strong>Real examples</strong> — Actual implementations, not theoretical concepts</li>
            </ul>
            <p>
              Depth signals expertise. Anyone can write a 500-word overview. Going deep—providing 2,000+ words with specific examples, edge cases, and nuanced understanding—shows you actually know what you're talking about.
            </p>

            <h3>6. Velocity: Move Quickly</h3>
            <p>
              Publish frequently and get knowledge out there while it's relevant:
            </p>
            <ul>
              <li><strong>Weekly cadence</strong> — Regular memo publication shows active knowledge extraction</li>
              <li><strong>Quick documentation</strong> — Capture insights when they're fresh</li>
              <li><strong>Rapid response</strong> — Document changes, updates, and new features immediately</li>
              <li><strong>Don't over-polish</strong> — Good enough today beats perfect next month</li>
            </ul>
            <p>
              Velocity matters because LLMs are periodically retrained. The faster you publish, the sooner you can be included in the next training cycle or crawl. Speed also signals that you're active and current.
            </p>

            <h3>7. Authenticity: Be Authentic</h3>
            <p>
              Don't just regurgitate AI-generated content—share real expertise and genuine insights:
            </p>
            <ul>
              <li><strong>Voice-to-text memos</strong> — Authentic expertise in your own words</li>
              <li><strong>Real experiences</strong> — Actual problems you've solved, not theoretical scenarios</li>
              <li><strong>Unique perspectives</strong> — Your take on industry issues</li>
              <li><strong>Genuine insights</strong> — Original thinking, not rehashed common knowledge</li>
              <li><strong>Human voice</strong> — Let your personality and expertise come through</li>
            </ul>
            <p>
              Authenticity is what separates you from the flood of AI-generated content. LLMs are trained on diverse sources—your unique voice and genuine expertise make you citable in ways that generic content cannot.
            </p>

            <h2>Good Outcomes from MCM</h2>

            <p>
              When you implement Model Context Marketing correctly, you achieve:
            </p>

            <h3>Better Visibility</h3>
            <p>
              Your brand shows up in AI-generated responses when relevant. Users discover you through conversational queries, not just keyword searches.
            </p>

            <h3>Better Accuracy</h3>
            <p>
              Less inaccurate information about your brand. LLMs cite correct facts, pricing, features, and capabilities because you've provided structured, authoritative data.
            </p>

            <h3>Faster Model Inclusion</h3>
            <p>
              Updates get ingested more quickly. When you launch a new feature or change pricing, properly structured content helps models learn about it faster.
            </p>

            <h3>Better Control</h3>
            <p>
              You govern what information is available to LLMs and how it's presented. While you can't control AI responses completely, you significantly influence what data is available for citation.
            </p>

            <h3>Bigger Impact</h3>
            <p>
              External behavioral change that drives business results. Not just "people visited our site"—actual customers who found solutions to their problems through AI recommendations.
            </p>

            <h3>True Customer Outcomes</h3>
            <p>
              Success means real users getting real value, not just metrics. When someone asks an AI "What's the best tool for X?" and your product legitimately solves that problem, you both win.
            </p>

            <h2>Implementation Summary</h2>

            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Framework</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Component</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2" rowSpan={3}><strong>CMO</strong><br/>(Process)</td>
                  <td className="border border-gray-300 px-4 py-2">Connect</td>
                  <td className="border border-gray-300 px-4 py-2">Publish model-ready, structured content</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Measure</td>
                  <td className="border border-gray-300 px-4 py-2">Track crawler activity and test prompts</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Optimize</td>
                  <td className="border border-gray-300 px-4 py-2">Refine based on accuracy and gaps</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2" rowSpan={7}><strong>MCM Pillars</strong><br/>(Foundation)</td>
                  <td className="border border-gray-300 px-4 py-2">Truth</td>
                  <td className="border border-gray-300 px-4 py-2">Speak the truth with factual, verifiable information</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Structure</td>
                  <td className="border border-gray-300 px-4 py-2">Structure content with JSON-LD, semantic HTML</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Freshness</td>
                  <td className="border border-gray-300 px-4 py-2">Create fresh content with timestamps, updates</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Authority</td>
                  <td className="border border-gray-300 px-4 py-2">Build authority through consistent cross-site signals</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Depth</td>
                  <td className="border border-gray-300 px-4 py-2">Go deep with comprehensive, detailed knowledge</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Velocity</td>
                  <td className="border border-gray-300 px-4 py-2">Move quickly with frequent, timely publishing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Authenticity</td>
                  <td className="border border-gray-300 px-4 py-2">Be authentic with genuine insights and real expertise</td>
                </tr>
              </tbody>
            </table>

            <h2>Why This Matters</h2>

            <p>
              Model Context Marketing is fundamentally different from traditional SEO. It's not about ranking for keywords—it's about being the source AI systems cite when users need solutions.
            </p>

            <p>
              Do this right, and you'll have:
            </p>
            <ul>
              <li>Better visibility in AI responses</li>
              <li>Better accuracy (less hallucinations about your brand)</li>
              <li>Faster inclusion when you make updates</li>
              <li>Better control over how you're represented</li>
              <li>Bigger impact on actual customer outcomes</li>
            </ul>

            <p>
              This is next-level marketing. The discipline is brand new—the domain was just registered—but the principles are becoming clear. Follow CMO as your process, stand on the seven MCM Pillars as your foundation, and position your brand to thrive in the age of AI-first discovery.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: November 4, 2025 at 5:00 PM
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}

