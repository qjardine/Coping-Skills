'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function NightmareProtocolPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-orange-800">
            <Link href="/pages/distress-tolerance/nightmare-protocol" className="text-blue-600 hover:text-blue-800 underline">Nightmare Protocol</Link> (DBT + Evidence-Based Imagery Practice)
          </h1>

          <div className="bg-orange-50 backdrop-blur-sm rounded-lg border border-orange-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Nightmares can train your brain to fear sleep—especially when they repeat. DBT's <Link href="/pages/distress-tolerance/nightmare-protocol" className="text-blue-600 hover:text-blue-800 underline">Nightmare Protocol</Link> is a structured way to reduce nightmare intensity by rewriting the ending and repeatedly rehearsing the safer version while your brain is awake and regulated.
              </p>
              <p className="text-gray-700">
                This overlaps with Imagery Rehearsal Therapy (IRT), a well-supported approach for nightmare disorder.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                When to Use This (and When Not To)
              </h2>
              <p className="text-gray-700 mb-3">Use this when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>you're having recurring nightmares</li>
                <li>nightmares are disrupting your sleep</li>
                <li>you feel ready to work on them (not in immediate crisis)</li>
              </ul>
              <p className="text-gray-700 mb-2 font-semibold">Not the best tool when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>you're in an immediate crisis where safety is at risk (use crisis skills first)</li>
                <li>you suspect sleep apnea, severe insomnia, night terrors, PTSD flashbacks, or medication side effects (still use skills, and loop in a clinician)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                DBT <Link href="/pages/distress-tolerance/nightmare-protocol" className="text-blue-600 hover:text-blue-800 underline">Nightmare Protocol</Link> (Step by Step)
              </h2>
              <p className="text-gray-700 mb-4 text-sm italic">
                From DBT Skills Training Handouts (<Link href="/pages/distress-tolerance/nightmare-protocol" className="text-blue-600 hover:text-blue-800 underline">Nightmare Protocol</Link>).
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">1) Get regulated first.</p>
                  <p className="text-gray-700 ml-4">Do relaxation + coping skills before working on the nightmare (paced breathing, progressive relaxation, <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link>, guided imagery, crisis survival review).</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">2) Choose one target nightmare.</p>
                  <p className="text-gray-700 ml-4">Pick a recurring nightmare you can manage right now. If it's a trauma nightmare, DBT suggests postponing—or if you do target it, skip the step that requires writing it out in detail.</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">3) Write the nightmare down (if appropriate).</p>
                  <p className="text-gray-700 ml-4">Include sensory details + your thoughts/feelings/assumptions about yourself inside the dream.</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">4) Choose a changed outcome (before the bad part).</p>
                  <p className="text-gray-700 ml-4">Make the change happen before anything traumatic/bad occurs. The goal is an ending that leaves you with peace when you wake up. It can be weird/supernatural—whatever works.</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">5) Write the full dream with the changes.</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">6) Rehearse + relax at night.</p>
                  <p className="text-gray-700 ml-4">Visualize the entire changed dream, then do relaxation.</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">7) Rehearse + relax during the day.</p>
                  <p className="text-gray-700 ml-4">Practice the changed version + relaxation as often as you can.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                Neurodivergent Notes (Make It Work for Your Brain)
              </h2>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">Sensory-first rewrite:</p>
                <p className="text-gray-700 ml-4 mb-2">If your nightmares are sensory-heavy, rewrite with sensory safety:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                  <li>change lighting, sound, distance, temperature, texture</li>
                  <li>add a "safe object" you can feel/hold in the dream</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">Short rehearsal counts:</p>
                <p className="text-gray-700 ml-4 mb-2">If visualization is hard or triggering:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                  <li>rehearse in 10–30 second loops (just the moment where it turns safe)</li>
                  <li>use written scripts instead of imagery (read the new version slowly)</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 font-semibold mb-2">If scripting feels sticky:</p>
                <p className="text-gray-700 ml-4 mb-2">Use a template:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                  <li>"The dream starts the same until ____."</li>
                  <li>"Before anything bad happens, ____ shows up / changes."</li>
                  <li>"I end up safe by ____."</li>
                  <li>"When I wake up, I feel ____."</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Mini Worksheet (Copy/Paste)
              </h3>
              <div className="space-y-1 text-gray-700 text-sm">
                <p>Target nightmare name:</p>
                <p>Trigger pattern (when it tends to happen):</p>
                <p>Body feeling when you wake up:</p>
                <p>Original theme (1 sentence):</p>
                <p>Changed outcome (before the bad part):</p>
                <p>New ending image (most comforting snapshot):</p>
                <p>Night rehearsal plan (time + where):</p>
                <p>Day rehearsal plan (2 minutes, 1–3 times):</p>
                <p>What helped regulation before rehearsal:</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-16 md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-full md:w-auto"
      >
        Return to Landing
      </button>
    </div>
  );
}
