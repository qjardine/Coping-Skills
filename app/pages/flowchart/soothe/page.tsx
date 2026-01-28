'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function SoothePage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            <Link href="/pages/flowchart/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link>
          </h1>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Distress Tolerance skills are DBT tools for getting through intense moments without making things worse—especially when you can't change the situation right now.
              </p>
              <p className="text-gray-700">
                Self-Soothe is a classic DBT distress tolerance skill: you intentionally use pleasant, comforting sensations (sight, sound, smell, taste, touch) to help your body settle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-3">Use Self-Soothe when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>emotions feel overwhelming</li>
                <li>you feel like you "can't stand this"</li>
                <li>you're about to do something impulsive to escape the feeling</li>
                <li>you need comfort first, problem-solving later</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: <Link href="/pages/flowchart/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link> in the moment
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 0 — Safety + consent (10 seconds)
                </h3>
                <p className="text-gray-700 mb-2">Ask: "Is it safe to do a comfort skill right now?"</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>If you're in immediate danger, focus on safety and support first.</li>
                  <li>If you're safe enough, continue.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — Name the moment (10 seconds)
                </h3>
                <p className="text-gray-700 mb-2">Say (out loud or in your head):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"This is a distress moment."</li>
                  <li>"I'm going to comfort my body so I don't make it worse."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — Rate your distress (0–10)
                </h3>
                <p className="text-gray-700 ml-4">Distress right now: __/10</p>
                <p className="text-gray-700 mt-2 text-sm italic">(You'll re-rate after.)</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — Choose ONE sense (keep it simple)
                </h3>
                <p className="text-gray-700 mb-3">Pick the easiest entry point for your brain today:</p>
                <p className="text-gray-700 ml-4 mb-4">
                  Vision / Hearing / Smell / Taste / Touch
                </p>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-gray-700 font-medium mb-2">Neurodivergent-friendly rule:</p>
                  <p className="text-gray-700 mb-2">
                    Choose soothing, not "too much."
                  </p>
                  <p className="text-gray-700 text-sm">
                    If you're sensory sensitive, go smaller: low light, low volume, gentle texture, mild scent—or skip smell entirely. (Self-soothing should not overwhelm you.)
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — Do the soothing mindfully (30–120 seconds)
                </h3>
                <p className="text-gray-700 mb-3">
                  While you do it, practice DBT mindfulness: notice and describe the sensation without judging.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Try this mini-script:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I notice… (warmth / softness / quiet / sweetness)."</li>
                  <li>"My body is getting a small break."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5 — Re-rate (0–10)
                </h3>
                <p className="text-gray-700 ml-4">Distress now: __/10</p>
                <p className="text-gray-700 mt-2">If it dropped even 1 point, that counts.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 6 — Decide the next step
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>If distress is still high: choose a second sense, or repeat the same one.</li>
                  <li>If you're steadier: move to your next skill (<Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">problem solving</Link>, <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>, emotion exposure, etc.).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  <Link href="/pages/flowchart/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link> ideas by sense (pick 1–2)
                </h3>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Vision (Sight)</h4>
                  <p className="text-gray-700 mb-2 font-medium">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>look at nature (even out a window)</li>
                    <li>watch a candle flame</li>
                    <li>look at art, photos, or a "pretty corner" of a room</li>
                    <li>watch snowfall/rain/video of scenery</li>
                  </ul>
                  <p className="text-gray-700 font-medium mb-1">ND options:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>dim lights</li>
                    <li>slow, low-motion visuals</li>
                    <li>avoid bright/flashy screens</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Hearing (Sound)</h4>
                  <p className="text-gray-700 mb-2 font-medium">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>calming music</li>
                    <li>nature sounds (ocean, rain, birds)</li>
                    <li>sit and listen to one "neutral" sound (fan hum, distant traffic)</li>
                  </ul>
                  <p className="text-gray-700 font-medium mb-1">ND options:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>noise-canceling headphones</li>
                    <li>one familiar track on repeat</li>
                    <li>lower volume than you think you need</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Smell (Scent) — optional</h4>
                  <p className="text-gray-700 mb-2 font-medium">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>scented candle/incense (if safe for you)</li>
                    <li>smell tea/coffee/herbs</li>
                    <li>step outside after rain / smell fresh air</li>
                  </ul>
                  <p className="text-gray-700 font-medium mb-1">ND options:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>if scents trigger headaches or nausea, skip this sense</li>
                    <li>use "neutral smells" (clean cloth, unscented lotion)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Taste</h4>
                  <p className="text-gray-700 mb-2 font-medium">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>a warm drink (tea, cocoa)</li>
                    <li>a small treat eaten slowly</li>
                    <li>a mint/gum and notice the flavor change</li>
                  </ul>
                  <p className="text-gray-700 font-medium mb-1">ND options:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>pick safe textures/flavors</li>
                    <li>tiny amount is enough (this is sensory comfort, not a meal)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Touch</h4>
                  <p className="text-gray-700 mb-2 font-medium">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>warm shower or bath</li>
                    <li>wrap in a soft blanket</li>
                    <li>pet an animal (if available)</li>
                    <li>hold something comforting (smooth stone, plush, warm mug)</li>
                  </ul>
                  <p className="text-gray-700 font-medium mb-1">ND options:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>weighted blanket (if you like pressure)</li>
                    <li>"deep pressure" (hug a pillow, press feet into floor)</li>
                    <li>avoid scratchy fabrics / irritating tags</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Common obstacles (and what to do)
                </h3>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">"I don't deserve comfort."</p>
                  <p className="text-gray-700 mb-2">
                    This is common. DBT frames self-soothing as basic human care—not a reward you have to earn. Start small and treat it like practice.
                  </p>
                  <p className="text-gray-700 mb-2 font-medium">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"I can be in pain and be kind to myself."</li>
                    <li>"Comfort helps me act effectively."</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">"I need someone else to soothe me."</p>
                  <p className="text-gray-700">
                    Wanting support is real. But <Link href="/pages/flowchart/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link> is about building an option you can do anytime, even when no one is available.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-medium mb-2">"Nothing works."</p>
                  <p className="text-gray-700 mb-2">Try reducing intensity:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>smaller dose (30 seconds)</li>
                    <li>fewer senses (one only)</li>
                    <li>more neutral (not "pleasant," just "not painful")</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Practice (so it's there when you need it)
                </h3>
                <p className="text-gray-700 mb-4">
                  DBT recommends practicing skills when you're not in crisis so they're easier when distress hits.
                </p>
                <p className="text-gray-700 font-medium mb-2">This week's tiny practice</p>
                <p className="text-gray-700 mb-2">
                  Pick one sense and do it for 1 minute once a day.
                </p>
                <p className="text-gray-700 mb-2">Then write:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"Before: __/10"</li>
                  <li>"After: __/10"</li>
                </ul>
                <p className="text-gray-700 font-medium mb-1">Optional: make a "Self-Soothe Kit"</p>
                <p className="text-gray-700">
                  A small bag/box with 1 item for each sense can make this skill much easier in the moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/soothe.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
        </a>
        <a
          href="/assets/Worksheets/soothe-interact.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
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
