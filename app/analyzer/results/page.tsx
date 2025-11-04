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

interface ModelError {
  name: string;
  error: string;
}

interface BusinessInfo {
  siteName: string;
  description: string;
  category: string;
  features: string[];
  markets: string[];
  products: string[];
  differentiation: string[];
  companyType: string;
}

interface GeneratedOffer {
  title: string;
  type: string;
  description: string;
  valueProposition: string;
  deliveryFormat: string;
  targetAudience: string;
  conversionHook: string;
  implementationSteps: string[];
  estimatedValue: string;
  uniquenessScore: number;
}

function AnalysisResultsContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  
  const [modelScores, setModelScores] = useState<ModelScore[]>([]);
  const [modelErrors, setModelErrors] = useState<ModelError[]>([]);
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  const [offers, setOffers] = useState<GeneratedOffer[]>([]);
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
              } else if (data.type === 'business_info') {
                setBusinessInfo(data.data);
              } else if (data.type === 'model_result') {
                setModelScores(prev => {
                  const existing = prev.find(m => m.name === data.result.name);
                  if (existing) {
                    return prev.map(m => m.name === data.result.name ? data.result : m);
                  }
                  return [...prev, data.result];
                });
              } else if (data.type === 'model_error') {
                setModelErrors(prev => [...prev, { name: data.model, error: data.error }]);
              } else if (data.type === 'offers') {
                setOffers(data.data || []);
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
                {isAnalyzing ? `${modelScores.length + modelErrors.length}/9 models` : `${modelScores.length} models analyzed`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Business Information Section */}
        {businessInfo && (
          <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{businessInfo.siteName}</h2>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {businessInfo.category}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600 font-medium">{businessInfo.companyType}</span>
              </div>
              {businessInfo.description && (
                <p className="text-gray-700 leading-relaxed">{businessInfo.description}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessInfo.products.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Products/Services</h3>
                  <ul className="space-y-2">
                    {businessInfo.products.map((product, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-blue-600 mt-1">▪</span>
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {businessInfo.features.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {businessInfo.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {businessInfo.markets.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Target Markets</h3>
                  <ul className="space-y-2">
                    {businessInfo.markets.map((market, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-purple-600 mt-1">→</span>
                        <span>{market}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {businessInfo.differentiation.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Differentiation</h3>
                  <ul className="space-y-2">
                    {businessInfo.differentiation.map((diff, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-orange-600 mt-1">★</span>
                        <span>{diff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 italic">
                ✨ Information extracted directly from {domain} and displayed in real-time
              </p>
            </div>
          </div>
        )}
        
        {/* AI-Generated Marketing Offers - THE MAIN EVENT */}
        {offers.length > 0 && !isAnalyzing && (
          <div className="mb-12 bg-linear-to-br from-purple-600 to-blue-600 rounded-2xl p-8 shadow-2xl border-4 border-purple-400">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 font-black text-sm rounded-full mb-4 animate-pulse">
                🎁 AI-GENERATED FOR YOU
              </div>
              <h2 className="text-4xl font-black text-white mb-3">
                3 Wildly Unique Marketing Offers
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our AI analyzed your business and created these custom lead magnets you've never seen before.
                Pick one, build it, and watch your conversions explode. 🚀
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offers.map((offer, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-xl hover:scale-105 transition-transform cursor-pointer border-4 border-transparent hover:border-yellow-400"
                >
                  {/* Uniqueness Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full">
                      {offer.type}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500 text-lg">★</span>
                      <span className="text-sm font-bold text-gray-700">{offer.uniquenessScore}/100</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {offer.title}
                  </h3>

                  {/* Value Prop */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border-2 border-green-200">
                    <p className="text-sm font-semibold text-green-800">
                      💰 {offer.valueProposition}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Target Audience */}
                  <div className="mb-4 flex items-start gap-2">
                    <span className="text-blue-600 text-sm font-semibold shrink-0">🎯 For:</span>
                    <span className="text-sm text-gray-700">{offer.targetAudience}</span>
                  </div>

                  {/* Conversion Hook */}
                  <div className="mb-4 p-3 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                    <p className="text-xs font-bold text-yellow-900 uppercase mb-1">Hook:</p>
                    <p className="text-sm font-semibold text-gray-800 italic">
                      "{offer.conversionHook}"
                    </p>
                  </div>

                  {/* Delivery Format */}
                  <div className="mb-4 text-xs text-gray-600">
                    <strong>Delivery:</strong> {offer.deliveryFormat}
                  </div>

                  {/* Implementation Steps */}
                  <details className="mb-4">
                    <summary className="text-sm font-semibold text-blue-600 cursor-pointer hover:text-blue-800">
                      View Implementation Steps →
                    </summary>
                    <ol className="mt-3 space-y-2 ml-4">
                      {offer.implementationSteps.map((step, stepIdx) => (
                        <li key={stepIdx} className="text-xs text-gray-700 leading-relaxed">
                          <strong>{stepIdx + 1}.</strong> {step}
                        </li>
                      ))}
                    </ol>
                  </details>

                  {/* Estimated Value */}
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Perceived Value:</span>
                    <span className="text-lg font-black text-purple-600">{offer.estimatedValue}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-blue-100 text-sm mb-4">
                Want to download these as a PDF or get help implementing? 
              </p>
              <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-black text-lg rounded-xl hover:bg-yellow-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                Export Offers as PDF
              </button>
            </div>
          </div>
        )}
        
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
            {modelScores.length > 0 ? (
              <>✅ {modelScores.length} model{modelScores.length !== 1 ? 's' : ''} successfully analyzed your content</>
            ) : (
              'Analyzing with cutting-edge AI models...'
            )}
            {modelErrors.length > 0 && (
              <> • ⚠️ {modelErrors.length} model{modelErrors.length !== 1 ? 's' : ''} failed</>
            )}
          </p>
        </div>

        {/* Show error summary if there are any failures */}
        {modelErrors.length > 0 && !isAnalyzing && (
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <div className="flex">
              <div className="shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Some models failed to analyze</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p className="mb-2">The following models encountered errors:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {modelErrors.map((err) => (
                      <li key={err.name}><strong>{err.name}</strong>: {err.error}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-yellow-600">Your score is calculated from {modelScores.length} working model{modelScores.length !== 1 ? 's' : ''}.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Loading skeletons for pending models */}
          {isAnalyzing && (modelScores.length + modelErrors.length) < 9 && (
            <>
              {Array.from({ length: 9 - modelScores.length - modelErrors.length }).map((_, idx) => (
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
                </div>
              </div>
            </div>
          ))}
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
