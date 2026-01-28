'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { BackButton } from '@/components/shared/BackButton';

function ChangeContent() {
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
    const emotionsParam = searchParams.get('emotions');
    if (emotionsParam) {
      setSelectedEmotions(emotionsParam.split(','));
    }
  }, [searchParams]);

  const handleYes = () => {
    const emotionsParam = searchParams.get('emotions') || '';
    router.push(`/pages/flowchart/changing-feelings${emotionsParam ? `?emotions=${encodeURIComponent(emotionsParam)}` : ''}`);
  };

  const handleBack = () => {
    router.push('/pages/flowchart/feelings');
  };

  const handleNo = () => {
    router.push('/pages/flowchart/sit-with-it');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          {/* I feel statement at top */}
          <div className="text-center mb-12">
            <p className="text-2xl font-medium text-gray-800">
              I feel {selectedEmotions.join(', ')}
            </p>
          </div>

          {/* Question and buttons */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-8 text-gray-800">
              Would you like to change that feeling?
            </h2>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleYes}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Yes
              </button>
              <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                onClick={handleNo}
                className="flex-1 px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                  No
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'flowchart-sit-with-it' });
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
              {activeTooltip === 'flowchart-sit-with-it' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Practice sitting with difficult emotions instead of avoiding them. Options include emotion exposure, self-validation, and self-compassion.</p>
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

            <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg mt-8 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Would you like to change that feeling?
                </h2>
                <p className="text-gray-700 mb-4">
                  This is a decision point. In DBT, sometimes the most effective response is to change an emotion (when it doesn't fit the facts or when changing it helps you act effectively). Other times, the most effective response is to sit with it (when it does fit the facts, when avoiding it makes things worse, or when you need to build tolerance).
                </p>
                <p className="text-gray-700 mb-4">
                  There's no "right" answer—it depends on your situation, your goals, and what will be most effective for you right now.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  If you choose "Yes" → Changing Your Feelings
                </h3>
                <p className="text-gray-700 mb-2">You'll go through:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-4">
                  <li><strong>Basics First</strong> — Check if you're hydrated, medicated, nourished, and rested (these are vulnerability factors that make emotions harder to regulate)</li>
                  <li><strong>Check the Facts</strong> — See if your emotion fits what actually happened</li>
                  <li><strong>Choose a skill</strong> — <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">Opposite Action</Link>, <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link>, or <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC PLEASE</Link></li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  If you choose "No" → Sit with It
                </h3>
                <p className="text-gray-700 mb-2">
                  You'll go to <Link href="/pages/flowchart/sit-with-it" className="text-blue-600 hover:text-blue-800 underline">/sit-with-it</Link>, where you can practice:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><Link href="/pages/emotional-regulation/mindful-emotions" className="text-blue-600 hover:text-blue-800 underline">Emotion Exposure</Link> — riding the wave of the emotion</li>
                  <li>Self-Validation — accepting that your emotion makes sense</li>
                  <li>Self-Compassion — treating yourself with kindness</li>
                  <li>Feeling it in your body — gentle body awareness practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}

export default function ChangePage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <ChangeContent />
    </Suspense>
  );
}

