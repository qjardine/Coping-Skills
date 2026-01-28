'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function SleepHygienePage() {
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
            <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">Sleep Hygiene</Link>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Sleep is one of the biggest "vulnerability factors" in DBT: when you're under-slept, your nervous system is easier to overwhelm, urges hit harder, and emotion regulation gets way more expensive. <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">Sleep hygiene</Link> is how you set your body up to sleep by building strong external cues (routine + environment) so you don't have to rely on willpower at 1:47am.
              </p>
              <p className="text-gray-700">
                For neurodivergent brains (ADHD/autistic), sleep can be extra tricky because internal "sleep signals" may be less reliable (interoception), sensory needs may be higher, and circadian rhythm can drift. <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">Sleep hygiene</Link> helps by externalizing rhythm: consistent cues, consistent timing, consistent "bed = sleep" association.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                When to Use This Page
              </h2>
              <p className="text-gray-700 mb-3">Use this page when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>you're having trouble falling asleep or staying asleep</li>
                <li>bedtime ramps up rumination, anxiety, or sensory discomfort</li>
                <li>your sleep schedule drifts (late nights → late mornings → worse sleep)</li>
                <li>you wake up and your brain starts doing "middle-of-the-night catastrophizing"</li>
              </ul>
              <p className="text-gray-700 mb-2 font-semibold">Not the best tool when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>you're in an immediate crisis where safety is at risk (use crisis skills first)</li>
                <li>you suspect sleep apnea, severe insomnia, night terrors, PTSD flashbacks, or medication side effects (still use skills, and loop in a clinician)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                DBT <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">Sleep Hygiene</Link> Protocol (Core Steps)
              </h2>
              <p className="text-gray-700 mb-4 text-sm italic">
                This is adapted from DBT's <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">Sleep Hygiene</Link> Protocol.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">1) Keep a consistent schedule (even weekends).</p>
                  <p className="text-gray-700 ml-4">Go to bed and get up at the same time. Avoid naps longer than ~10 minutes.</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">2) Protect the "bed = sleep" association.</p>
                  <p className="text-gray-700 ml-4">Don't use your bed for daytime scrolling, TV, phone calls, or reading.</p>
                  <p className="text-gray-700 ml-4 text-sm italic mt-1">(Stimulus control is a widely used insomnia approach: bed is for sleep, not awake-time.)</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">3) Avoid late-day sleep disruptors.</p>
                  <p className="text-gray-700 ml-4">Caffeine, nicotine, alcohol, heavy meals, and vigorous exercise late in the day can make sleep harder.</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">4) Build a sensory-safe sleep environment.</p>
                  <p className="text-gray-700 ml-4">Cool-ish, quiet, dark. Use tools on purpose: fan/white noise, earplugs, sleep mask, heating blanket, "feet out of blanket," etc.</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">5) Give yourself 30–60 minutes to fall asleep.</p>
                  <p className="text-gray-700 ml-4">If you're not asleep by then, don't force it. Check whether you're calm vs. anxious/ruminating.</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-1">6) Don't catastrophize.</p>
                  <p className="text-gray-700 ml-4">"Being awake is not a catastrophe." Aim for rest/reverie, and don't "start the day" at 3am.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                If You Can't Sleep: Choose the Right Branch
              </h2>
              <p className="text-gray-700 mb-4">
                DBT splits this into calm but awake vs anxious/ruminating.
              </p>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">A) If you're calm but wide awake</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Get out of bed and do something low-stimulation in another room (no bright lights). Return to bed when sleepy.</li>
                  <li>Try a light snack (something simple).</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 font-semibold mb-2">B) If you're anxious or ruminating</p>
                <p className="text-gray-700 mb-2 ml-4">Pick one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                  <li>TIP (cold water + paced <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>) if your body is revved up.</li>
                  <li>9→0 <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link> countdown (then restart at 8→0, 6→0, etc.)</li>
                  <li>Focus on the bodily sensation under the rumination (often rumination is avoiding a harder body-feeling).</li>
                  <li>Label it "middle-of-the-night thinking" (your brain will think differently in the morning).</li>
                  <li>If it keeps looping: If solvable, solve it. If not solvable now, go all the way to the "catastrophe" and then cope-ahead with it.</li>
                  <li>If nothing else works: quiet, steady audio (low-variation voices) can help some people settle.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Neurodivergent-Friendly <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">Sleep Hygiene</Link> Add-Ons
              </h2>
              <p className="text-gray-700 mb-3">Use these as accommodations, not "fixes."</p>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">Sensory calibration (make sleep easier for your nervous system):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Pick one "safe sensory anchor" (fan noise, weighted blanket, compression sheet, specific scent, etc.).</li>
                  <li>If silence is painful, use consistent low-variation sound (fan/white noise/steady voices).</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">Transition support (ADHD/autistic "task switching"):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Add a short repeatable wind-down script (same 3–5 steps nightly).</li>
                  <li>Use timers to externalize time: "screens off in 10," "bed routine starts now."</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 font-semibold mb-2">If screens are a regulation tool:</p>
                <p className="text-gray-700 ml-4">Don't fight yourself at bedtime; route it. Choose one lower-stimulation option (dim, night mode, predictable content), then step down to audio or print.</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Practice Sheet (Track What Works)
              </h3>
              <p className="text-gray-700 mb-3">
                Use DBT's <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">Sleep Hygiene</Link> Practice Sheet to track: bedtime/wake time, what you did before bed, rumination level before/after, and usefulness.
              </p>
              <p className="text-gray-700">
                Mini-experiment idea: Pick one variable for 7 days (bedtime consistency, caffeine cutoff, fan noise, leaving bed after 60 min) and track the change.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/sleep-hygiene.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
        </a>
        <a
          href="/assets/Worksheets/sleep-hygiene-interact.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Interactive Worksheet
        </a>
        <a
          href="/assets/Worksheets/nightmare.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          <Link href="/pages/distress-tolerance/nightmare-protocol" className="text-blue-600 hover:text-blue-800 underline">Nightmare Protocol</Link>
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
