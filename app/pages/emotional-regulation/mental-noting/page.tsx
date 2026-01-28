'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function MentalNotingPage() {
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
      setActiveTooltip(null)
    } else {
      setActiveTooltip(tooltipId)
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
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
            <Link href="/pages/emotional-regulation/mental-noting" className="text-blue-600 hover:text-blue-800 underline">Mental Noting</Link> and Thought Defusion
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                What this is
              </h2>
              <p className="text-gray-700 mb-4">
                Mental noting is a mindfulness practice where you label what's happening (a thought, emotion, body sensation, urge, or sound) in simple words—without analyzing it.
              </p>
              <p className="text-gray-700 mb-4">
                Thought defusion (from ACT) is a way to unhook from thoughts by noticing them as "mind events," not commands or facts. ACT describes defusion as changing how you relate to thoughts so they have less control over your behavior.
              </p>
              <p className="text-gray-700 mb-2">Used together, these skills help you:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>notice what's happening without getting swept away</li>
                <li>reduce the "believability" of harsh thoughts (even if the thought is still there)</li>
                <li>create a calmer gap between trigger → thought → emotion → urge → action</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                When to use it
              </h2>
              <p className="text-gray-700 mb-3">Use this when you notice:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>spiraling/rumination ("why did I do that / what if / I'm doomed")</li>
                <li>intense self-judgment ("I'm stupid / worthless / a burden")</li>
                <li>anxiety loops ("something bad will happen")</li>
                <li>you can't <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> thinking, even if you know it's not helpful</li>
              </ul>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                Skip or shorten this practice if you're in a high crisis state (panic, dissociation, urge to act dangerously). In crisis, use Crisis Skills first (<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>/<Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIP</Link>/grounding), then come back to this.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Setup
              </h2>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Pick a duration
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Beginner: 3–5 minutes</li>
                    <li>Standard: 10 minutes</li>
                  </ul>
                </li>
                <li>Choose a posture: seated, lying down, or standing.</li>
                <li>Choose an anchor (optional): breath, feet on floor, sounds in room.</li>
                <li>Choose your tool
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>"Noting" labels (<Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">fast</Link> + simple)</li>
                    <li>Defusion phrases (more targeted)</li>
                    <li>Or both (best for sticky thoughts)</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Part A — <Link href="/pages/emotional-regulation/mental-noting" className="text-blue-600 hover:text-blue-800 underline">Mental Noting</Link> (DBT-friendly mindfulness labeling)
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step-by-step: Level 1 (Noting thoughts)
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Set a timer for 5 minutes.</li>
                  <li>When you notice a thought, label it:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"Thinking." or "Planning." or "Remembering."</li>
                    </ul>
                  </li>
                  <li>If helpful, make it a full sentence:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"I'm thinking about X."</li>
                    </ul>
                  </li>
                  <li>Return to your anchor (breath/feet/sound).</li>
                  <li>Repeat—gently, over and over.</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  This style of "noting" is a classic mindfulness instruction approach taught in Insight <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">Meditation</Link> contexts.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step-by-step: Level 2 (Noting experiences)
                </h3>
                <p className="text-gray-700 mb-2">Use this when emotions/sensations are strong.</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Set a timer for 10 minutes.</li>
                  <li>Label what's most prominent:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Thought: "Thinking: they hate me."</li>
                      <li>Emotion: "Anxiety." / "Shame."</li>
                      <li>Body: "Tight chest." / "Heat."</li>
                      <li>Urge: "Urge to hide." / "Urge to argue."</li>
                      <li>Sound: "Hearing."</li>
                    </ul>
                  </li>
                  <li>Keep labels short and factual.</li>
                  <li>If you drift into a story, label it: "Story." → return.</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Helpful label list
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Thoughts:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                      <li>Thinking, judging, comparing, catastrophizing, rehearsing, predicting</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Emotions:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                      <li>Sadness, anger, fear, shame, guilt, numb</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Body:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                      <li>Tightness, pressure, buzzing, sinking, heat</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Urges:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                      <li>Urge-to-run, urge-to-fix, urge-to-attack, urge-to-hide</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Part B — Thought Defusion (ACT "unhooking")
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  The core idea
                </h3>
                <p className="text-gray-700 mb-3">
                  Instead of "I'm stupid," you practice:
                </p>
                <p className="text-gray-700 ml-4 font-semibold">
                  "I'm having the thought that I'm stupid."
                </p>
                <p className="text-gray-700 mt-3">
                  ACT uses this kind of phrasing to create distance from thoughts.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step-by-step: The 4-layers defusion ladder
                </h3>
                <p className="text-gray-700 mb-2">When a sticky thought appears:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Name it: "I'm noticing a thought: I'm stupid."</li>
                  <li>Add distance: "I'm noticing I'm having the thought that I'm stupid."</li>
                  <li>Name the pattern: "This is a self-judgment thought."</li>
                  <li>De-fact it: "This is not a fact—just a mind event."</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  ACT research commonly measures defusion by reductions in thought believability and distress/struggle with thoughts.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Guided imagery options (pick one)
                </h3>
                <p className="text-gray-700 mb-2">Set a timer for 10 minutes.</p>

                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">Option 1: Words in the Sand</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Imagine your thought written in sand.</li>
                      <li>With each exhale, wind blows the words away.</li>
                      <li>The sand smooths again.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-1">Option 2: Fish in the Ocean</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Each thought is gently carried away by a fish.</li>
                      <li>You're left with clear water again.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-1">Option 3: Clouds in the Sky</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Each thought is written on a cloud.</li>
                      <li>Wind moves it across the sky and out of view.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Putting them together (<Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">fast</Link> "combo" practice)
                </h3>
                <p className="text-gray-700 mb-2">Use this when you're overwhelmed but still able to focus.</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Note: "Thinking."</li>
                  <li>Defuse: "I'm having the thought that ___."</li>
                  <li>Note the body: "Tight chest."</li>
                  <li>Return: one slow breath, feel your feet.</li>
                  <li>Repeat for 3–10 minutes.</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Troubleshooting
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"My mind won't stop."</p>
                    <p className="text-gray-700 ml-4">
                      Good—that's normal. The goal isn't stopping thoughts. The goal is not being dragged by them.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"Noting makes me feel worse."</p>
                    <p className="text-gray-700 ml-4">
                      Shorten to 60 seconds, add grounding (feet + room scan), or switch to sounds as your noting target.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"The thought feels true."</p>
                    <p className="text-gray-700 ml-4">
                      Try softer defusion: "My mind is telling me the 'I'm worthless' story again."
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"I dissociate or panic when I focus inward."</p>
                    <p className="text-gray-700 ml-4">
                      Keep eyes open, do external noting (colors, objects, sounds), and keep sessions brief.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Practice plan
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>2–3 times per week for defusion imagery</li>
                  <li>Daily 3–5 minutes of <Link href="/pages/emotional-regulation/mental-noting" className="text-blue-600 hover:text-blue-800 underline">mental noting</Link> (tiny reps build the "mindfulness muscle")</li>
                  <li>Use in the moment whenever you notice rumination starting</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Journal prompts (post-practice)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>What thought showed up most?</li>
                  <li>Did believability change (0–10)?</li>
                  <li>Did intensity change (0–10)?</li>
                  <li>What helped me unhook the most: noting, defusion phrases, or imagery?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-16 md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-full md:w-auto"
      >
        Return to Landing
      </button>
    </div>
  );
}
