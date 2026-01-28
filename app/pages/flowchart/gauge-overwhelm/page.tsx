'use client';
import Link from 'next/link';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { BackButton } from '@/components/shared/BackButton';

function GaugeOverwhelmContent() {
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

  useEffect(() => {
    const emotionsParam = searchParams.get('emotions');
    if (emotionsParam) {
      setSelectedEmotions(emotionsParam.split(','));
    }
  }, [searchParams]);

  const handleYes = () => {
    router.push('/pages/distress-tolerance/distress-tolerance');
  };

  const handleNo = () => {
    router.push('/pages/flowchart/regulate');
  };

  const handleNotSure = () => {
    toggleTooltip({ tooltipId: 'flowchart-regulate-not-sure' });
  };

  const handleBack = () => {
    router.push('/pages/flowchart/changing-feelings');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Are you overwhelmed by feeling {selectedEmotions.length > 0 ? selectedEmotions.join(', ') : 'these emotions'}?
            </h1>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              What overwhelm feels like
            </h2>
            <p className="text-gray-700 mb-4">
              Overwhelm can feel like:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your emotions feel too big to handle right now</li>
              <li>You feel flooded, panicked, or unable to think clearly</li>
              <li>The intensity is so high that coping skills feel impossible</li>
              <li>You feel like you need immediate relief before you can do anything else</li>
              <li>Your body feels activated (racing heart, tense muscles, difficulty <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              If this sounds like what you're experiencing, Distress Tolerance skills can help you get through the moment safely.
            </p>
          </div>

          <div className="space-y-4">
            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
              onClick={handleYes}
              className="flex-1 w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
                  Yes
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'distress-tolerance-distress-tolerance' });
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
              {activeTooltip === 'distress-tolerance-distress-tolerance' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">
                    <strong>Crisis Survival Mode</strong> — Routes to your crisis skills like: <Link href="/pages/interpersonal-skills/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>, <Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIP/TIPP</Link>, <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros & Cons</Link>, <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link>, <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link>, <Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">IMPROVE</Link>, Urge Surfing, <Link href="/pages/interpersonal-skills/resistt" className="text-blue-600 hover:text-blue-800 underline">RESISTT</Link>. (These are classic crisis survival options.)
                  </p>
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
              className="flex-1 w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
                  No
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'flowchart-regulate' });
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
              {activeTooltip === 'flowchart-regulate' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">
                    <strong>Regulation Mode</strong> — Continue to triggers → <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">check the facts</Link> → <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">problem solve</Link>/<Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">opposite action</Link>.
                  </p>
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
              <button
                onClick={handleNotSure}
                className="w-full px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                I'm not sure
              </button>
              {activeTooltip === 'flowchart-regulate-not-sure' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700 mb-3">
                    If you're not sure whether you're overwhelmed, try one of these options:
                  </p>
                  <div className="space-y-2 mb-3">
                    <button
                      onClick={() => {
                        router.push('/pages/emotional-regulation/feel-in-body');
                        setActiveTooltip(null);
                      }}
                      className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                    >
                      Check in with Feel in Body
                    </button>
                    <button
                      onClick={() => {
                        router.push('/pages/flowchart/regulate');
                        setActiveTooltip(null);
                      }}
                      className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                    >
                      Move on to Regulate
                    </button>
                  </div>
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

export default function GaugeOverwhelmPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <GaugeOverwhelmContent />
    </Suspense>
  );
}

