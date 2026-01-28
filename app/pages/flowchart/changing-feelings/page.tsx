'use client';
import Link from 'next/link';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { BackButton } from '@/components/shared/BackButton';

function ChangingFeelingsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.tooltip-container') && !target.closest('.tooltip-button')) {
        setActiveTooltip(null);
      }
    };

    if (activeTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeTooltip]);

  const toggleTooltip = ({ tooltipId }: { tooltipId: string }) => {
    if (activeTooltip === tooltipId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };

  useEffect(() => {
    const emotionsParam = searchParams?.get('emotions');
    if (emotionsParam) {
      setSelectedEmotions(emotionsParam.split(','));
    }
  }, [searchParams]);

  const handleYes = () => {
    const emotionsParam = searchParams?.get('emotions') || '';
    router.push(`/pages/flowchart/gauge-overwhelm${emotionsParam ? `?emotions=${encodeURIComponent(emotionsParam)}` : ''}`);
  };

  const handleNo = () => {
    router.push('/pages/timer');
  };

  const handleSelfCareGuide = () => {
    router.push('/pages/self-care');
  };

  const handleBack = () => {
    router.push('/pages/flowchart/change');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          {selectedEmotions.length > 0 && (
            <div className="text-center mb-8">
              <p className="text-2xl font-medium text-gray-800">
                I feel {selectedEmotions.join(', ')}
              </p>
            </div>
          )}

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Great, first step is making sure you are cared for.
            </h1>
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
              Are you adequately:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8 text-left max-w-md mx-auto">
              <li>Hydrated</li>
              <li>Medicated</li>
              <li>Nourished</li>
              <li>Rested</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleYes}
                  className="flex-1 w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'gauge-overwhelm' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is on this page?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {activeTooltip === 'gauge-overwhelm' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Assess whether you're feeling overwhelmed. This helps determine if you need distress tolerance skills or can move to emotion regulation.</p>
                  <button
                    onClick={() => {
                      setActiveTooltip(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleNo}
                  className="flex-1 w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  No, set a 5 minute timer to remind me to come back
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'timer' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is on this page?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {activeTooltip === 'timer' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Set a timer to remind yourself to come back and check in. Useful when you need a break before continuing with skills.</p>
                  <button
                    onClick={() => {
                      setActiveTooltip(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSelfCareGuide}
                  className="flex-1 w-full px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Can you walk me through some self-care tasks?
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'flowchart-self-care' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is on this page?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {activeTooltip === 'flowchart-self-care' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Check in with your basic needs (hydration, medication, nourishment, rest) and get guidance on <Link href="/pages/self-care" className="text-blue-600 hover:text-blue-800 underline">self-care</Link> tasks. Taking care of your body lowers emotional vulnerability.</p>
                  <button
                    onClick={() => {
                      setActiveTooltip(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}

export default function ChangingFeelingsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <ChangingFeelingsContent />
    </Suspense>
  );
}
