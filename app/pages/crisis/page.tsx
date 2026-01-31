'use client';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CrisisPage() {
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

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-red-800">
            Am I Overwhelmed?
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6 mb-4">
              <p className="text-red-900 font-semibold mb-3">
                If you're in immediate danger or at risk of harming yourself or someone else right now:
              </p>
              <button
                onClick={() => router.push('/pages/crisis-help-now')}
                className="w-full px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Go to Crisis Help Now
              </button>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Sometimes it's hard to tell if you're just stressed… or if you're overwhelmed and need crisis skills first.
              </p>
              <p className="text-gray-700 mb-4">
                In DBT, you're in a crisis when the situation is highly stressful, short-term, and creates intense pressure to fix it now. Crisis skills are for moments when emotion mind threatens to overwhelm you, or you're overwhelmed but demands must still be met.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Step 1: <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> for 10 seconds
              </h2>
              <p className="text-gray-700 mb-3">Before you decide anything, do STOP:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li><Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">Stop</Link> (pause)</li>
                <li>Take a step back (one breath, put the phone down)</li>
                <li>Observe (what's happening inside + outside)</li>
                <li>Proceed mindfully (choose what helps, not what hurts)</li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                If you can't do all of <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>, do just this: "Pause. One exhale."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Step 2: Quick overwhelm check (tap yes/no in your head)
              </h2>
              <p className="text-gray-700 mb-3 font-semibold">
                You're probably overwhelmed if 2 or more are true right now:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Urgency: "I have to fix this RIGHT NOW."</li>
                <li>Tunnel vision: you can't see options, only danger/mess.</li>
                <li>Body alarm: heart racing, shaking, numb, hot, clenched, can't settle.</li>
                <li>Impulse risk: you feel pulled to do something you'll regret (blow up, self-harm, quit, spam-text, binge, spend).</li>
                <li>Thinking slips: lots of "always/never," mind-reading, catastrophe.</li>
                <li>Skills feel impossible: even simple tasks feel too hard.</li>
              </ol>
              <p className="text-gray-700 mt-3 font-semibold">
                If yes, treat this as overwhelm → crisis skills first.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Step 3: Choose your crisis path (pick ONE)
              </h2>

              <div className="mb-4 p-4 bg-red-100 rounded-lg border border-red-300">
                <p className="text-gray-700 font-semibold mb-2">If you're having self-harm urges:</p>
                <button
                  onClick={() => router.push('/pages/self-harm/urge-now')}
                  className="w-full px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md mb-2"
                >
                  Go to Regulating Self-Harm Urges
                </button>
              </div>

              <div className="mb-4 p-4 bg-red-100 rounded-lg border border-red-300">
                <p className="text-gray-700 font-semibold mb-2">If you're having substance cravings:</p>
                <button
                  onClick={() => router.push('/pages/addiction/craving-now')}
                  className="w-full px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Go to Cravings Right Now
                </button>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">A) If your body is in full alarm → TIPP</p>
                <p className="text-gray-700 ml-4">
                  Use <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> to bring intensity down fast (temperature, intense exercise, paced <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>, paired muscle relaxation).
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">B) If you're stuck on an urge → <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros & Cons</Link></p>
                <p className="text-gray-700 ml-4">
                  Do DBT <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros/Cons</Link>: coping vs not coping (tolerating distress vs not tolerating).
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">C) If you need a safe break from the pain → ACCEPTS</p>
                <p className="text-gray-700 ml-4">
                  Use <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link> for short-term distraction until you're steadier.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">D) If you need comfort (not distraction) → <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link></p>
                <p className="text-gray-700 ml-4">
                  Use your senses (vision, hearing, smell, taste, touch) to settle.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">E) If you need hope + relief inside the moment → <Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">IMPROVE</Link>the Moment</p>
                <p className="text-gray-700 ml-4">
                  Imagery, meaning, prayer/asking for help, relaxation, one thing, brief vacation, encouragement.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">F) If you're fighting reality → <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link></p>
                <p className="text-gray-700 ml-4">
                  Stop arguing with what is already true (without approving of it).
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Step 4: Re-check after 2–5 minutes
              </h2>
              <p className="text-gray-700 mb-2 font-medium">Ask: "Did the intensity drop at least 10%?"</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Yes: You're moving out of overwhelm. Go to <Link href='/pages/mindfulness/wise-mind' className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link>, <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>, or <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link> next.</li>
                <li>No: Stay in crisis skills. Try one different option (TIPP → ACCEPTS, or ACCEPTS → <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link>).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Step 5: If you're unsure, use the <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> test
              </h2>
              <p className="text-gray-700 mb-3">
                Wise Mind is the overlap of emotion mind and reasonable mind—facts + feelings + values together.
              </p>
              <p className="text-gray-700 mb-2 font-medium">Ask:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>"Can I see the facts and my feelings at the same time?"</li>
                <li>"Can I choose a next step that matches my values?"</li>
              </ul>
              <p className="text-gray-700">
                If not, you're likely still overwhelmed → return to crisis skills.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                A tiny rule that helps
              </h3>
              <p className="text-gray-700">
                If acting now would make things worse, you're overwhelmed enough to use crisis skills.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Crisis Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                
            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => router.push('/pages/distress-tolerance/stop')}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  STOP Skill
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'distress-tolerance-stop' });
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
              {activeTooltip === 'distress-tolerance-stop' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700"><Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> skill: <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">Stop</Link>, Take a step back, Observe, Proceed mindfully. A quick crisis intervention to prevent impulsive actions.</p>
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
                  onClick={() => router.push('/pages/interpersonal-skills/pros-cons')}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Pros & Cons
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'distress-tolerance-pros-cons' });
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
              {activeTooltip === 'distress-tolerance-pros-cons' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Weigh the <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">pros and cons</Link> of acting on an urge versus not acting. Helps you make wise decisions in crisis moments.</p>
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
                  onClick={() => router.push('/pages/distress-tolerance')}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  TIPP
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'distress-tolerance-tip' });
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
              {activeTooltip === 'distress-tolerance-tip' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">TIPP skill: Temperature, Intense exercise, Paced <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>, Paired muscle relaxation. Physically-based skills to reduce intense emotions quickly.</p>
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
                  onClick={() => router.push('/pages/distress-tolerance/accepts')}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  ACCEPTS
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'distress-tolerance-accepts' });
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
              {activeTooltip === 'distress-tolerance-accepts' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700"><Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link> skill: Activities, Contributing, Comparisons, Emotions (opposite), Pushing away, Thoughts, Sensations. Distraction techniques to get through difficult moments.</p>
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
                  onClick={() => router.push('/pages/distress-tolerance/soothe')}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Soothe
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'flowchart-soothe' });
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
              {activeTooltip === 'flowchart-soothe' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Self-soothing techniques using the five senses to comfort your nervous system. Helps reduce distress when you can't change the situation.</p>
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
                  onClick={() => router.push('/pages/mindfulness/body-scan/how-long')}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Body Scan
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'mindfulness-body-scan' });
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
              {activeTooltip === 'mindfulness-body-scan' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Guided body scan practices to build body <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> and connect sensations to emotions. Available in 1, 5, and 15 minute options.</p>
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
                  onClick={() => router.push('/pages/distress-tolerance/improve')}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  IMPROVE the Moment
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'distress-tolerance-improve' });
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
              {activeTooltip === 'distress-tolerance-improve' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700"><Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">IMPROVE</Link> skill: Imagery, Meaning, Prayer, Relaxation, One thing, Vacation, Encouragement. Ways to make difficult moments more bearable.</p>
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
                  onClick={() => router.push('/pages/interpersonal-skills/radical-acceptance')}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Radical Acceptance
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'distress-tolerance-radical-acceptance' });
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
              {activeTooltip === 'distress-tolerance-radical-acceptance' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Accept reality as it is without fighting it. Reduces suffering by stopping the struggle against what cannot be changed.</p>
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
                  onClick={() => router.push('/pages/mindfulness/mindfulness')}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Mindfulness of Current Thoughts
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'mindfulness-mindfulness' });
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
              {activeTooltip === 'mindfulness-mindfulness' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Core mindfulness skills to help you notice what's happening right now without getting swept away. Includes observe, describe, and participate skills.</p>
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
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/Crisis Survival Skills Handout.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >Try the Worksheet (pdf)</a>
        <a
          href="/assets/Worksheets/when-to-use-crisis.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >When to use crisis skills (pdf)</a>
        <button
          onClick={handleReturnToLanding}
          className="px-4 md:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing
        </button>
      </div>
    </div>
  );
}

