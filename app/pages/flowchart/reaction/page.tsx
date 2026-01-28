'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BackButton } from '@/components/shared/BackButton';

export default function ReactionPage() {
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

  const handleYes = () => {
    router.push('/pages/flowchart/emotion-driver');
  };

  const handleMaybeNot = () => {
    router.push('/pages/flowchart/check-facts');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Does your reaction fit the context?
            </h1>
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
                    toggleTooltip({ tooltipId: 'flowchart-emotion-driver' });
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
              {activeTooltip === 'flowchart-emotion-driver' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Assess whether you can change the current situation. Helps you decide between problem-solving (if changeable) or self-soothing (if not).</p>
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
              onClick={handleMaybeNot}
              className="flex-1 w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
                  Maybe not
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'flowchart-check-facts' });
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
              {activeTooltip === 'flowchart-check-facts' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Separate observable facts from interpretations and assumptions. Helps you determine if your emotion fits the facts and choose the next skill.</p>
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
                Does your reaction fit the context?
              </h2>
              <p className="text-gray-700 mb-4">
                This question helps you check whether your emotional response matches what actually happened. Sometimes reactions are proportional and helpful—other times they're bigger than the situation calls for (or smaller, if you're minimizing).
              </p>
              <p className="text-gray-700 mb-4">
                In DBT terms, you're checking if your emotion and its intensity fit the facts of the situation. If they do, you might need to <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">problem-solve</Link> or take action. If they don't, you might need to <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">check the facts</Link> or use <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">opposite action</Link>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                How to answer this question
              </h3>
              <p className="text-gray-700 mb-2">Ask yourself:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>What actually happened? (just the facts)</li>
                <li>What's my emotional reaction? (emotion + intensity)</li>
                <li>Does the intensity match what happened?</li>
                <li>Would most people react similarly in this situation?</li>
                <li>Is my reaction helping or hurting right now?</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Answer "Yes" if:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Your reaction matches the situation (e.g., sadness after a loss, anger at a boundary violation)</li>
                <li>The intensity is proportional (not too big, not too small)</li>
                <li>Your reaction is helping you respond effectively</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Answer "Maybe not" if:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Your reaction feels bigger than the situation (e.g., panic over a minor mistake)</li>
                <li>Your reaction feels smaller than the situation (e.g., numbness after a major loss)</li>
                <li>You're not sure if your interpretation is accurate</li>
                <li>Your reaction is making things worse instead of better</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                What happens next?
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Yes</strong> → Go to <Link href="/pages/flowchart/emotion-driver" className="text-blue-600 hover:text-blue-800 underline">What's driving this emotion most?</Link> to identify the main driver and choose the right DBT lane</li>
                <li><strong>Maybe not</strong> → Go to <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">/check-facts</Link> to separate facts from interpretations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}

