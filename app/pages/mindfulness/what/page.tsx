'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function WhatPage() {
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

  const toggleTooltip = ({ tooltipId }: { tooltipId: string }) => {
    if (activeTooltip === tooltipId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };

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
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
            DBT Mindfulness: The "What" Skills (Observe, Describe, Participate)
          </h1>

          <div className="bg-blue-50 backdrop-blur-sm rounded-lg border border-blue-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                In DBT mindfulness, the "What" skills are the core actions you practice to become present: Observe, Describe, and Participate. They help you notice what's happening (inside and outside you) without instantly reacting, spiraling, or checking out.
              </p>
              <p className="text-gray-700">
                The goal isn't to "empty your mind"—it's to train attention so you can respond on purpose instead of running on autopilot.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                What are the "What" Skills?
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  1) Observe
                </h3>
                <p className="text-gray-700 mb-2">Observe means noticing what is happening—internally or externally—without trying to change it yet.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Notice sensations (tight chest, buzzing hands)</li>
                  <li>Notice thoughts ("I'm going to mess this up")</li>
                  <li>Notice emotions (fear, anger, shame)</li>
                  <li>Notice your environment (sounds, light, temperature)</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">Key idea: control your attention, not the experience.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  2) Describe
                </h3>
                <p className="text-gray-700 mb-2">Describe means putting words on what you observe, simply and factually—like you're narrating a nature documentary.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"My jaw is clenched."</li>
                  <li>"I'm having the thought that I'm unsafe."</li>
                  <li>"Anger is here."</li>
                  <li>"The room is loud."</li>
                </ul>
                <p className="text-gray-700 mt-3">Describing reduces chaos by turning "a swirl" into "named parts."</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  3) Participate
                </h3>
                <p className="text-gray-700 mb-2">Participate means entering the moment fully—doing what you're doing with your whole self, as best you can.</p>
                <p className="text-gray-700">This is the "flow" skill: less self-monitoring, more showing up.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                How to Practice Each Skill
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Observe Practice: "Camera Mode" (30–90 seconds)
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Pause.</li>
                  <li>Look around and silently note 5 things you can see.</li>
                  <li>Notice 3 body sensations (temperature, tension, heartbeat).</li>
                  <li>Notice 1 thought as a thought ("I'm having the thought that ___.").</li>
                  <li>Return to breath for one exhale.</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  If you're neurodivergent (ADHD/autistic): make it smaller and more concrete—pick one sense (sound-only) or one anchor (feet on floor). Short reps count.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Describe Practice: "Fact / Feeling / Thought"
                </h3>
                <p className="text-gray-700 mb-2">Try this format (out loud or in your head):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Fact:</strong> "I got a short reply."</li>
                  <li><strong>Feeling:</strong> "I feel anxious."</li>
                  <li><strong>Thought:</strong> "I'm thinking they're mad at me."</li>
                </ul>
                <p className="text-gray-700 mt-3 ml-4">Optional: <strong>Urge:</strong> "I want to send 5 follow-up texts."</p>
                <p className="text-gray-700 mt-3 text-sm italic">
                  This keeps you out of mind-reading and helps later skills like <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Participate Practice: "Do One Thing All The Way"
                </h3>
                <p className="text-gray-700 mb-2">Pick one tiny activity and do it one-mindfully for 1–3 minutes:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Drink water (notice temperature, swallow, aftertaste)</li>
                  <li>Wash hands (notice soap smell, water pressure)</li>
                  <li>Walk to another room (feel footfalls, air on skin)</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  Participate is especially helpful when you're stuck in rumination.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Common Stuck Points (and Fixes)
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"Observing makes it worse."</p>
                  <p className="text-gray-700 ml-4">
                    That usually means you're sliding into analyzing/judging. Switch to external observation (sounds/colors) for 30 seconds, then return inside.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"Describing feels fake or too clinical."</p>
                  <p className="text-gray-700 ml-4">
                    Use simpler language: "This sucks. My stomach is tight. I'm scared." Still describing.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"Participating is hard when I'm dissociated or overloaded."</p>
                  <p className="text-gray-700 ml-4">
                    Use sensory participation: weighted blanket, cold drink, textured object, rocking/stimming on purpose—then re-enter the task.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"My brain won't stop."</p>
                  <p className="text-gray-700 ml-4">
                    Great—mindfulness isn't "no thoughts." It's: notice thought → label thought → return. Repeat forever. That is the rep.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Practice Plan (1 week)
              </h2>
              <p className="text-gray-700 mb-2 font-medium">Daily (2–5 minutes total):</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li><strong>Observe</strong> (1 min): Camera Mode</li>
                <li><strong>Describe</strong> (1 min): Fact/Feeling/Thought about something small</li>
                <li><strong>Participate</strong> (1–3 min): Do One Thing All The Way</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">In-the-moment use:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>When you feel yourself escalating: Observe → Describe before you speak or text.</li>
                <li>When you feel frozen/checked-out: Participate with one small physical action.</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Worksheets & Virtual Coach
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><a href="/assets/Worksheets/mindful-what.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">DBT Mindfulness: "What" Skills Worksheet (PDF)</a></li>
                <li><a href="/assets/Worksheets/what-how.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">DBT Mindfulness: "What & How" Skills Quick Reference (PDF)</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                FAQs
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Do I do Observe, Describe, and Participate all at once?</p>
                  <p className="text-gray-700 ml-4">Not usually. Pick one as your main practice. In real life, you often naturally move Observe → Describe → Participate.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Is "Describe" the same as journaling?</p>
                  <p className="text-gray-700 ml-4">Journaling can include describing, but describing is short and immediate: a sentence or two that names what's happening without a story.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">How does this connect to the rest of DBT?</p>
                  <p className="text-gray-700 ml-4">Mindfulness is the foundation—these skills make it easier to use Emotion Regulation (like <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">Opposite Action</Link>), Distress Tolerance (like TIPP/<Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link>), and Interpersonal Effectiveness (like <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>) because you can notice what's happening before you act.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/mindful-what.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
        </a>
        <a
          href="/assets/Worksheets/what-how.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Interactive Worksheet
        </a>
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
