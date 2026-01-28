'use client';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

const tooltips = {
  distressTolerance: 'For moments when emotions feel too big right now. Distress Tolerance skills help you get through the moment without making it worse, then come back to problem-solving later.',
  mindfulness: 'To build the skill of noticing what\'s happening right now (thoughts, feelings, urges, surroundings) without getting swept away. If body focus feels unsafe, mindfulness can start with external anchors and choice.',
  interpersonalSkills: 'When the feeling is connected to a situation with someone else—<Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link>, asking for something, saying no, or keeping self-respect. These DBT skills help you communicate clearly and reduce relationship blowups.',
  selfCare: 'In DBT, taking care of your body lowers "emotion vulnerability" (<Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link> skills). When your body is under-resourced, emotions hit harder and coping skills get harder to use. This helps you figure out what you need right now, with small actions that don\'t feel overwhelming.',
};

export default function UnsafeBodyCheckPage() {
  const router = useRouter();
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

  const handleDistressTolerance = () => {
    router.push('/pages/distress-tolerance/distress-tolerance');
  };

  const handleMindfulness = () => {
    router.push('/pages/mindfulness');
  };

  const handleInterpersonalSkills = () => {
    router.push('/pages/interpersonal-skills/interpersonal-skills');
  };

  const handleFeelingsWheel = () => {
    router.push('/pages/flowchart/feelings');
  };

  const handleSelfCare = () => {
    router.push('/pages/self-care');
  };

  const handleBack = () => {
    router.push('/pages/flowchart/body-check-in');
  };

  const toggleTooltip = ({ tooltipId }: { tooltipId: string }) => {
    if (activeTooltip === tooltipId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            When it feels unsafe to check into your body
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                First: you're not doing anything wrong
              </h2>
              <p className="text-gray-700">
                For some people, especially with trauma, dissociation, chronic stress, or panic, turning attention inward can feel unsafe. Trauma-informed mindfulness emphasizes choice, control, and going gently (eyes open, movement allowed, focus outward first).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                The goal of this page
              </h2>
              <p className="text-gray-700">
                Get back to "safe enough" in the present moment without forcing a <Link href="/pages/mindfulness/body-scan/how-long" className="text-blue-600 hover:text-blue-800 underline">body scan</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: Safer alternatives (choose 1–2)
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 1 — Orient to the room (30–60 seconds)
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Keep your eyes open.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Name 5 things you can see</li>
                    <li>Name 4 things you can feel (chair under you, feet on floor, fabric on skin)</li>
                    <li>Name 3 things you can hear</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    If you want: slowly turn your head and look at corners/door/window—remind your nervous system "I'm here, now."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 2 — Use an "outside anchor" (30–90 seconds)
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Pick one:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>
                      <strong>Object anchor:</strong> hold something (mug, key, fidget). Describe it: texture, temperature, weight.
                    </li>
                    <li>
                      <strong>Sound anchor:</strong> listen for the farthest sound you can notice, then the closest.
                    </li>
                    <li>
                      <strong>Sight anchor:</strong> stare gently at one spot and describe shapes/colors.
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    This is mindfulness too—you're just anchoring outside your body first.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 3 — Add small movement (30–60 seconds)
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Choose one:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Press your feet into the floor for 5 seconds, release, repeat.</li>
                    <li>Roll shoulders once, unclench jaw once.</li>
                    <li>Stand up and sit down slowly one time.</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    Trauma-informed approaches often recommend allowing movement instead of "stay perfectly still."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 4 — If you want a tiny body check (optional, 10 seconds)
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Only if it feels okay:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Check one neutral spot (feet in socks, hands on fabric), then return to an outside anchor.</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    The idea is "a sip, not a chug."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                When to get extra support
              </h2>
              <p className="mb-3 text-gray-700">
                If you feel like you might hurt yourself, or you can't get back to "safe enough," reach out for live support:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>US:</strong> call/text/chat 988 (Suicide & Crisis Lifeline).
                </li>
                <li>
                  <strong>If you're a Veteran:</strong> dial 988 then press 1, or text 838255.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="tooltip-container">
               <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center mt-8">
              Ready for next steps?
            </h2>
              <div className="flex items-center gap-2"> 
                <button
                  onClick={handleDistressTolerance}
                  className="flex-1 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I would like to practice Distress Tolerance
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'distressTolerance' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is Distress Tolerance?"
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
              {activeTooltip === 'distressTolerance' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700 mb-3">{tooltips.distressTolerance}</p>
                  <p className="text-xs font-semibold text-gray-700 mb-2">What you'll do on the next page (examples):</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 ml-2">
                    <li>A quick "<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> the spiral" skill (like <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> or <Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>)</li>
                    <li>Short-term coping (like <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link> distraction tools)</li>
                    <li>Self-soothing / calming your nervous system</li>
                  </ul>
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
                  onClick={handleMindfulness}
                  className="flex-1 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I would like to practice Mindfulness
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'mindfulness' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is Mindfulness?"
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
              {activeTooltip === 'mindfulness' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700 mb-3">{tooltips.mindfulness}</p>
                  <p className="text-xs font-semibold text-gray-700 mb-2">What you'll do on the next page (examples):</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 ml-2">
                    <li>Mindfulness with eyes open (sight/sound anchor)</li>
                    <li>"Name it to tame it" (label thought/feeling gently)</li>
                    <li>One-minute present-moment reset</li>
                  </ul>
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
                  onClick={handleInterpersonalSkills}
                  className="flex-1 px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I would like to work on my Interpersonal Skills
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'interpersonalSkills' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What are Interpersonal Skills?"
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
              {activeTooltip === 'interpersonalSkills' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700 mb-3">{tooltips.interpersonalSkills}</p>
                  <p className="text-xs font-semibold text-gray-700 mb-2">What you'll do on the next page (examples):</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 ml-2">
                    <li><Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> (ask / say no / set a boundary)</li>
                    <li><Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> (keep the relationship) and <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> (keep self-respect)</li>
                  </ul>
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
                  onClick={handleSelfCare}
                  className="flex-1 px-8 py-4 bg-blue-300 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I would like help practicing self-care
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'selfCare' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is Self-Care?"
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
              {activeTooltip === 'selfCare' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">{tooltips.selfCare}</p>
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

            <button
              onClick={handleFeelingsWheel}
              className="w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              I would like to see the feelings wheel
            </button>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={() => router.push('/pages/landing-page')}
        className="fixed bottom-6 right-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50"
      >
        Return to Landing
      </button>
    </div>
  );
}
