import Link from 'next/link';

export const metadata = {
  title: 'Hit List: Site Audit and Issues | Model Context Marketing',
  description: 'Quick audit identifying current site issues and prioritizing fixes for readability, structure, and user experience.',
};

export default function HitListAuditMemo() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hit List: Site Audit and Issues',
    datePublished: '2025-11-04T16:30:00-05:00',
    dateModified: '2025-11-04T16:30:00-05:00',
    author: {
      '@type': 'Person',
      name: 'Stephen Newman',
    },
    description: 'Quick audit identifying current site issues and prioritizing fixes for readability, structure, and user experience.',
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
            <p className="text-sm text-gray-500 mb-2">November 4, 2025 at 4:30 PM</p>
            <h1 className="text-4xl font-bold mb-4">Hit List: Site Audit and Issues</h1>
          </header>

          <section className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              A hit list is a quick audit process for identifying and documenting site issues. This memo captures problems found during evaluation and tracks their resolution.
            </p>

            <h2>Issues Identified</h2>

            <h3>1. Homepage Needs Expansion 🔴 HIGH PRIORITY</h3>
            <p><strong>Problem:</strong></p>
            <p>
              Homepage is too minimal. With all the comprehensive information created (7 memos, 4 concepts, 12 FAQs, complete frameworks), the homepage should better showcase this knowledge in a traditional landing page format.
            </p>
            <p><strong>Requirements:</strong></p>
            <ul>
              <li>Expand content using comprehensive information created</li>
              <li>Create distinct sections (Hero, Framework Overview, Key Concepts, Getting Started)</li>
              <li>Traditional landing page structure</li>
              <li>Minimal marketing fluff—stay factual</li>
              <li>Clear value proposition</li>
              <li>Showcase CMOGA and TSFA frameworks</li>
            </ul>
            <p><strong>Status:</strong> ⏳ Pending</p>

            <h3>2. Memo Formatting Too Crowded 🔴 HIGH PRIORITY</h3>
            <p><strong>Problem:</strong></p>
            <p>
              All memos appear as a "blob of text" with insufficient spacing and formatting. Difficult to scan and read.
            </p>
            <p><strong>Issues:</strong></p>
            <ul>
              <li>Missing vertical spacing between sections</li>
              <li>Headings (H2, H3) not visually distinct enough</li>
              <li>No bold or italic emphasis for key terms</li>
              <li>Paragraphs run together</li>
              <li>Lists could use better formatting</li>
              <li>Code blocks need better contrast</li>
            </ul>
            <p><strong>Applies to:</strong></p>
            <ul>
              <li>MCM Framework memo</li>
              <li>JSON-LD & Schema Types memo</li>
              <li>Topical Authority memo</li>
              <li>Reinforcement Signals memo</li>
              <li>Content Strategy memo</li>
              <li>Structure memo</li>
              <li>Foundation memo</li>
            </ul>
            <p><strong>Status:</strong> ⏳ Pending</p>

            <h3>3. Concept Pages Formatting 🟡 MEDIUM PRIORITY</h3>
            <p><strong>Problem:</strong></p>
            <p>
              Same formatting issues as memos—text too dense, lacking visual hierarchy.
            </p>
            <p><strong>Applies to:</strong></p>
            <ul>
              <li>Model Context Marketing concept</li>
              <li>JSON-LD concept</li>
              <li>Semantic HTML concept</li>
              <li>Knowledge Graph concept</li>
            </ul>
            <p><strong>Status:</strong> ⏳ Pending</p>

            <h3>4. Missing Internal Links 🟡 MEDIUM PRIORITY</h3>
            <p><strong>Problem:</strong></p>
            <p>
              When memos or concepts mention related topics, they don't link to those pages. Missing opportunity to create semantic relationships and help users navigate the knowledge graph.
            </p>
            <p><strong>Examples:</strong></p>
            <ul>
              <li>Memo mentions "JSON-LD" → Should link to JSON-LD concept page</li>
              <li>Concept mentions "topical authority" → Should link to Topical Authority memo</li>
              <li>Framework memo mentions all sub-concepts → Should link to each</li>
            </ul>
            <p><strong>Benefit:</strong></p>
            <p>
              Creates a self-feeding knowledge graph where users can continuously discover related content. Also helps LLMs understand relationships between concepts.
            </p>
            <p><strong>Status:</strong> ⏳ Pending</p>

            <h3>5. Mobile Responsiveness ✅ VERIFIED</h3>
            <p><strong>Status:</strong></p>
            <p>
              Tailwind CSS responsive classes are in place. Mobile-friendly by default with <code>max-w-4xl</code>, <code>px-6</code>, and responsive navigation.
            </p>
            <p><strong>Action:</strong> None needed</p>

            <h3>6. FAQ Page ✅ GOOD</h3>
            <p><strong>Status:</strong></p>
            <p>
              FAQ page has good formatting with clear question/answer structure. Use as reference for other page improvements.
            </p>
            <p><strong>Action:</strong> None needed—this is the model to follow</p>

            <h2>Implementation Plan</h2>

            <h3>Phase 1: Fix Formatting (Highest Impact)</h3>
            <ol>
              <li>
                <strong>Update global prose styles</strong>
                <ul>
                  <li>Increase spacing between sections</li>
                  <li>Make headings more visually distinct</li>
                  <li>Add emphasis to key terms</li>
                  <li>Improve paragraph spacing</li>
                </ul>
              </li>
              <li>
                <strong>Apply to all memos</strong>
                <ul>
                  <li>Add proper spacing and visual hierarchy</li>
                  <li>Bold key terms on first mention</li>
                  <li>Better formatted code blocks</li>
                </ul>
              </li>
              <li>
                <strong>Apply to concept pages</strong>
                <ul>
                  <li>Same formatting improvements</li>
                  <li>Maintain consistency with memos</li>
                </ul>
              </li>
            </ol>

            <h3>Phase 2: Add Internal Links</h3>
            <ol>
              <li>
                <strong>Identify mentions</strong>
                <ul>
                  <li>Scan all memos for concept mentions</li>
                  <li>Scan concepts for related memo topics</li>
                </ul>
              </li>
              <li>
                <strong>Add contextual links</strong>
                <ul>
                  <li>Link first mention of concepts</li>
                  <li>Add "Related Content" sections where helpful</li>
                  <li>Don't over-link—quality over quantity</li>
                </ul>
              </li>
            </ol>

            <h3>Phase 3: Expand Homepage</h3>
            <ol>
              <li>
                <strong>Design new structure</strong>
                <ul>
                  <li>Hero section with clear value prop</li>
                  <li>CMOGA framework overview</li>
                  <li>TSFA signals explanation</li>
                  <li>Key concepts showcase</li>
                  <li>Recent memos</li>
                  <li>Getting started CTA</li>
                </ul>
              </li>
              <li>
                <strong>Implement sections</strong>
                <ul>
                  <li>Use existing content from memos</li>
                  <li>Keep it factual, minimal fluff</li>
                  <li>Make it scannable</li>
                </ul>
              </li>
            </ol>

            <h2>Success Criteria</h2>

            <p><strong>Formatting Fixed When:</strong></p>
            <ul>
              <li>✅ Headings clearly distinguish sections</li>
              <li>✅ Adequate white space between elements</li>
              <li>✅ Key terms emphasized (bold/italic)</li>
              <li>✅ Easy to scan visually</li>
              <li>✅ Code blocks readable with good contrast</li>
            </ul>

            <p><strong>Internal Linking Complete When:</strong></p>
            <ul>
              <li>✅ All concept mentions in memos link to concept pages</li>
              <li>✅ Concepts link back to relevant memos</li>
              <li>✅ Users can navigate knowledge graph naturally</li>
            </ul>

            <p><strong>Homepage Improved When:</strong></p>
            <ul>
              <li>✅ Clearly explains what MCM is</li>
              <li>✅ Showcases CMOGA and TSFA frameworks</li>
              <li>✅ Highlights key concepts</li>
              <li>✅ Directs users to getting started resources</li>
              <li>✅ Maintains factual, educational tone</li>
            </ul>

            <h2>Why Hit Lists Matter</h2>

            <p>
              A hit list is a rapid assessment tool for identifying problems without over-analyzing. The goal is to:
            </p>
            <ul>
              <li><strong>Document issues as you find them</strong> — Don't rely on memory</li>
              <li><strong>Prioritize by impact</strong> — Fix high-impact items first</li>
              <li><strong>Track resolution</strong> — Mark items complete as you go</li>
              <li><strong>Iterate quickly</strong> — Small fixes compound</li>
            </ul>

            <p>
              This memo serves as both the issue tracker and the documentation of what was fixed. As items are resolved, they'll be marked complete with dates.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: November 4, 2025 at 4:30 PM
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}

