'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface ModelScore {
  name: string;
  logo: string;
  score: number;
  color: string;
  bgGradient: string;
  insight: string;
  category: string;
  isFallback?: boolean;
}

function AnalysisResultsContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  
  const [modelScores, setModelScores] = useState<ModelScore[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('Starting analysis...');
  
  const domain = url ? new URL(url).hostname : 'example.com';
  const analyzedAt = new Date().toLocaleDateString();
  
  useEffect(() => {
    if (!url) {
      setError('No URL provided');
      setIsAnalyzing(false);
      return;
    }
    
    async function startAnalysis() {
      try {
        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url })
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Analysis failed');
        }
        
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        
        if (!reader) {
          throw new Error('No response stream');
        }
        
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) break;
          
          const chunk = decoder.decode(value);
          const lines = chunk.split('\n').filter(line => line.trim().startsWith('data:'));
          
          for (const line of lines) {
            try {
              const data = JSON.parse(line.replace('data:', '').trim());
              
              if (data.type === 'status') {
                setStatusMessage(data.message);
              } else if (data.type === 'model_result') {
                setModelScores(prev => {
                  const existing = prev.find(m => m.name === data.result.name);
                  if (existing) {
                    return prev.map(m => m.name === data.result.name ? data.result : m);
                  }
                  return [...prev, data.result];
                });
              } else if (data.type === 'complete') {
                setIsAnalyzing(false);
                setStatusMessage('Analysis complete!');
              }
            } catch (e) {
              console.error('Error parsing SSE data:', e);
            }
          }
        }
      } catch (err) {
        console.error('Analysis error:', err);
        setError(err instanceof Error ? err.message : 'Failed to analyze website');
        setIsAnalyzing(false);
      }
    }
    
    startAnalysis();
  }, [url]);

  // Calculate dynamic scores
  const overallScore = modelScores.length > 0
    ? Math.round(modelScores.reduce((sum, m) => sum + m.score, 0) / modelScores.length)
    : 0;
    
  const categoryScores = {
    contentQuality: modelScores.find(m => m.category === 'Content Quality')?.score || 0,
    structure: modelScores.find(m => m.category === 'Structure & Logic')?.score || 0,
    authority: Math.round((modelScores.filter(m => ['Google Signals', 'Citation Authority'].includes(m.category)).reduce((sum, m) => sum + m.score, 0) / 2) || 0),
    llmOptimization: Math.round(modelScores.filter(m => !['Content Quality', 'Structure & Logic', 'Google Signals', 'Citation Authority'].includes(m.category)).reduce((sum, m) => sum + m.score, 0) / Math.max(1, modelScores.filter(m => !['Content Quality', 'Structure & Logic', 'Google Signals', 'Citation Authority'].includes(m.category)).length))
  };

  const topRecommendations = [
    {
      title: "Add author credentials",
      impact: "+15 points",
      models: ["Gemini", "Perplexity", "GPT-4"],
      description: "Authority signals are weak across multiple models. Add author bio, credentials, years of experience, and expertise markers."
    },
    {
      title: "Implement Article schema",
      impact: "+12 points",
      models: ["Gemini", "Claude", "Fireworks"],
      description: "JSON-LD structured data is missing. Add Article schema with datePublished, dateModified, author, and publisher fields."
    },
    {
      title: "Increase content depth",
      impact: "+10 points",
      models: ["GPT-4", "Claude", "DeepSeek"],
      description: "Content is 800 words. Aim for 2000+ words with technical examples, use cases, and comprehensive explanations."
    },
    {
      title: "Build citation network",
      impact: "+8 points",
      models: ["Perplexity", "Claude"],
      description: "No external authoritative citations detected. Reference academic papers, government sources, and industry research."
    },
    {
      title: "Create knowledge graph",
      impact: "+7 points",
      models: ["Claude", "Gemini", "Fireworks"],
      description: "Limited internal linking detected. Build interconnected concept pages with DefinedTerm schemas."
    }
  ];

  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-200">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Analysis Failed</h2>
            <p className="text-gray-700 mb-6">{error}</p>
            <Link
              href="/analyzer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/analyzer" className="text-blue-600 hover:underline text-sm mb-2 inline-block">
                ← Back to Analyzer
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">MCM Analysis Results</h1>
              <p className="text-gray-600 mt-1">{domain} • {analyzedAt}</p>
              {isAnalyzing && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                  <span className="text-sm text-blue-600 font-medium">{statusMessage}</span>
                </div>
              )}
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {overallScore || '—'}
              </div>
              <div className="text-sm text-gray-500 font-medium">MCM SCORE</div>
              <div className="text-xs text-gray-400 mt-1">
                {isAnalyzing ? `${modelScores.length}/9 models` : 'out of 100'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Summary Stats */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-500 font-medium mb-1">Content Quality</div>
            <div className="text-3xl font-bold text-gray-900">{categoryScores.contentQuality}</div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                style={{ width: `${categoryScores.contentQuality}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-500 font-medium mb-1">Structure & Logic</div>
            <div className="text-3xl font-bold text-gray-900">{categoryScores.structure}</div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${categoryScores.structure}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-500 font-medium mb-1">Authority Signals</div>
            <div className="text-3xl font-bold text-gray-900">{categoryScores.authority}</div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-orange-400 to-red-600 rounded-full transition-all duration-500"
                style={{ width: `${categoryScores.authority}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-500 font-medium mb-1">LLM Optimization</div>
            <div className="text-3xl font-bold text-gray-900">{categoryScores.llmOptimization}</div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${categoryScores.llmOptimization}%` }}
              />
            </div>
          </div>
        </div>

        {/* Model Analysis Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Analysis by AI Model
          </h2>
          <p className="text-gray-600">
            {modelScores.length} cutting-edge AI models analyzed your content for comprehensive insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Loading skeletons for pending models */}
          {isAnalyzing && modelScores.length < 9 && (
            <>
              {Array.from({ length: 9 - modelScores.length }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className="bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl p-6 border-2 border-gray-200 animate-pulse"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                      <div>
                        <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                        <div className="h-3 w-16 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="h-12 w-20 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="bg-gray-300 rounded-xl p-4">
                    <div className="h-3 bg-gray-400 rounded mb-2"></div>
                    <div className="h-3 bg-gray-400 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </>
          )}
          
          {modelScores.map((model) => (
            <div
              key={model.name}
              className={`bg-linear-to-br ${model.bgGradient} rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-xl hover:scale-105 cursor-pointer group`}
            >
              {/* Header with Logo */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={model.logo}
                      alt={`${model.name} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{model.name}</h3>
                    <p className="text-xs text-gray-600">{model.category}</p>
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="mb-4">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-bold text-gray-900">{model.score}</span>
                  <span className="text-2xl text-gray-500 mb-1">/100</span>
                </div>
                <div className="h-3 bg-white/50 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${model.score}%`,
                      backgroundColor: model.color
                    }}
                  />
                </div>
              </div>

              {/* Insight */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold" style={{ color: model.color }}>
                    AI Insight:
                  </span>{' '}
                  {model.insight}
                </p>
              </div>

              {/* Badge */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {model.score >= 80 ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      ✅ Excellent
                    </span>
                  ) : model.score >= 60 ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                      ⚠️ Good
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                      ❌ Needs Work
                    </span>
                  )}
                  {model.isFallback && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-200 text-gray-700" title="Fallback heuristic score">
                      📊
                    </span>
                  )}
                </div>
                <button className="text-xs text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Top Recommendations */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            🚀 Top Recommendations
          </h2>
          <p className="text-gray-600 mb-6">
            Prioritized by impact - implement these to see the biggest score improvements
          </p>

          <div className="space-y-4">
            {topRecommendations.map((rec, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-linear-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-100 hover:border-blue-200 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-bold text-gray-900 text-lg">{rec.title}</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                      {rec.impact}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{rec.description}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-gray-500 font-medium">Affects:</span>
                    {rec.models.map((model) => (
                      <span
                        key={model}
                        className="px-2 py-1 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Wins vs Long-Term */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Quick Wins */}
          <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">⚡</span>
              <h2 className="text-2xl font-bold text-gray-900">Quick Wins</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Get +25 points in under 1 hour with these simple fixes
            </p>
            <div className="space-y-4">
              {[
                { task: "Add author bio", time: "15 min", points: "+12" },
                { task: "Add datePublished schema", time: "10 min", points: "+8" },
                { task: "Fix heading hierarchy", time: "20 min", points: "+5" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.task}</div>
                      <div className="text-sm text-gray-500">⏱️ {item.time}</div>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-green-600">{item.points}</span>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-green-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Total Impact:</span>
                  <span className="text-2xl font-bold text-green-600">+25 points</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">New score: 98/100</div>
              </div>
            </div>
          </div>

          {/* Long-Term Projects */}
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🏗️</span>
              <h2 className="text-2xl font-bold text-gray-900">Long-Term Projects</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Bigger impact, more time investment (1-4 weeks)
            </p>
            <div className="space-y-4">
              {[
                { task: "Write 10 knowledge base articles", time: "2 weeks", points: "+15" },
                { task: "Build 20 quality backlinks", time: "4 weeks", points: "+10" },
                { task: "Create internal knowledge graph", time: "1 week", points: "+8" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.task}</div>
                      <div className="text-sm text-gray-500">⏱️ {item.time}</div>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-blue-600">{item.points}</span>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-blue-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Total Impact:</span>
                  <span className="text-2xl font-bold text-blue-600">+33 points</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">New score: 100/100 (capped)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Score Prediction */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            🔮 Score Prediction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-linear-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200">
              <div className="text-sm text-gray-600 mb-2">If you implement Quick Wins</div>
              <div className="text-5xl font-bold text-green-600 mb-2">98</div>
              <div className="text-sm text-gray-500">+25 points</div>
              <div className="mt-4 text-xs text-gray-600">⏱️ Time: 45 minutes</div>
            </div>
            <div className="text-center p-6 bg-linear-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200">
              <div className="text-sm text-gray-600 mb-2">30-Day Target</div>
              <div className="text-5xl font-bold text-blue-600 mb-2">85</div>
              <div className="text-sm text-gray-500">+12 points</div>
              <div className="mt-4 text-xs text-gray-600">⏱️ Time: 15-20 hours</div>
            </div>
            <div className="text-center p-6 bg-linear-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200">
              <div className="text-sm text-gray-600 mb-2">90-Day Target</div>
              <div className="text-5xl font-bold text-purple-600 mb-2">92</div>
              <div className="text-sm text-gray-500">+19 points</div>
              <div className="mt-4 text-xs text-gray-600">⏱️ Time: 40-50 hours</div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700">
              <strong>Realistic Goal:</strong> Focus on Quick Wins this week, then tackle 2-3 long-term projects per month. 
              Most sites reach 85+ within 60 days.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Unlock Full Report</h2>
          <p className="text-xl mb-2 text-blue-100">
            Get 25-point action plan, competitor comparison, and 30-day tracking
          </p>
          <p className="text-sm mb-8 text-blue-200">
            Plus PDF export, API access, and priority support
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              Upgrade for $49
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors">
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function AnalysisResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-16 w-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium">Loading analyzer...</p>
        </div>
      </div>
    }>
      <AnalysisResultsContent />
    </Suspense>
  );
}
