'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BackButton } from '@/components/shared/BackButton';

export default function EmotionDriverPage() {
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

  const handleProblemSolve = () => {
    router.push('/pages/flowchart/problem-solve');
  };

  const handleInterpersonalHub = () => {
    router.push('/pages/flowchart/interpersonal-hub');
  };

  const handleRealityAcceptanceHub = () => {
    router.push('/pages/flowchart/reality-acceptance-hub');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              What's driving this emotion most?
            </h1>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg mb-8">
            <p className="text-gray-700 mb-4">
              Emotions usually have a main engine behind them. Figuring out that engine helps you choose the right DBT lane—solve, communicate, or accept—instead of throwing random skills at the problem.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleProblemSolve}
                  className="flex-1 w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  A) A situation/problem to solve
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'problem-solve' });
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
              {activeTooltip === 'problem-solve' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700 mb-3">A structured approach to solving problems when your emotion fits the facts. Includes brainstorming solutions and taking action steps.</p>
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
                  onClick={handleInterpersonalHub}
                  className="flex-1 w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  B) A relationship conflict/request/boundary
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'interpersonal-hub' });
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
              {activeTooltip === 'interpersonal-hub' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700 mb-3">Skills for navigating relationship conflicts, making requests, and setting boundaries. Includes DEAR MAN, GIVE, FAST, and other interpersonal effectiveness skills.</p>
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
                  onClick={handleRealityAcceptanceHub}
                  className="flex-1 w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  C) Something I can't change (loss, injustice, chronic reality)
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'reality-acceptance-hub' });
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
              {activeTooltip === 'reality-acceptance-hub' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700 mb-3">Skills for accepting painful realities that can't be changed. Includes Radical Acceptance, Turning the Mind, Willingness, and Half-Smile.</p>
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

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                How to tell what's driving it
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    1) Ask the "If this changed…" question
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Finish this sentence:
                  </p>
                  <p className="text-gray-700 font-medium mb-2 ml-4">
                    "If _____ changed, I would feel noticeably better."
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>If the blank is a practical change (plan, task, money, schedule, safety, logistics) → <strong>A: Problem to solve</strong></li>
                    <li>If the blank is a person's behavior/communication, or a boundary (respect, closeness, fairness, clarity) → <strong>B: Interpersonal</strong></li>
                    <li>If the blank is the past, a fact of life, or something out of your control (grief, chronic illness, systemic harm, what someone already did) → <strong>C: Reality to accept</strong></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    2) Check your strongest urge (your urge is a clue)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Urge is to fix, plan, research, control, escape tasks → <strong>A</strong></li>
                    <li>Urge is to argue, explain, prove, people-please, withdraw, set limits → <strong>B</strong></li>
                    <li>Urge is to fight reality, replay "shouldn't," bargain, rage at the unfairness, "why me" → <strong>C</strong></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    3) Do the "control test" (right now, today)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Ask:
                  </p>
                  <p className="text-gray-700 font-medium mb-2 ml-4">
                    "Is there a concrete action I can take today that would change the situation itself?"
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Yes → likely <strong>A</strong></li>
                    <li>It depends on another person's response → likely <strong>B</strong></li>
                    <li>No, it's true no matter what I do → likely <strong>C</strong></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    4) If it's mixed, pick the biggest slice
                  </h3>
                  <p className="text-gray-700 mb-2">
                    A lot of emotions are combos (ex: grief + conflict, anxiety + logistics). Choose the driver that feels most urgent or most changeable first.
                  </p>
                  <p className="text-gray-700 text-sm italic ml-4">
                    If you're overwhelmed (7–10/10): do <Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIP</Link>/<Link href="/pages/interpersonal-skills/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> first, then come back.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Mini examples
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>"I'm stressed because rent is due and my budget is a mess." → <strong>A</strong></li>
                <li>"I'm angry because my friend keeps canceling and I need to talk to them." → <strong>B</strong></li>
                <li>"I'm grieving and stuck on how unfair this loss is." → <strong>C</strong></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Why this matters
              </h2>
              <p className="text-gray-700 mb-3">
                Different drivers need different skills:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Problems</strong> → problem-solving works.</li>
                <li><strong>Relationships</strong> → clear asks + boundaries + validation work.</li>
                <li><strong>Unchangeable realities</strong> → radical acceptance + turning the mind + willingness work.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pick the driver, go to the hub, then soothe to help your body fully come down after the work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
