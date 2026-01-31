'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ResisttPage() {
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
            RESISTT (Urge-Surfing Without Acting on the Urge)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What this page is for
              </h2>
              <p className="text-gray-700 mb-4">
                RESISTT is a 7-part DBT toolbox you can use when emotions spike and you feel an unhealthy urge (anything from doom-scrolling or overeating to picking a fight or self-harm). It's designed to help you ride out the urge long enough for intensity to drop, so you can choose what actually helps.
              </p>
              <p className="text-gray-700 mb-2 font-medium">Goal:</p>
              <p className="text-gray-700 ml-4">Reduce impulsive, urge-driven actions by giving your brain an "exit ramp" in the moment.</p>
              <p className="text-gray-700 mt-2 font-medium">Not the goal:</p>
              <p className="text-gray-700 ml-4">Solving your whole life while you're flooded.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                When to use RESISTT
              </h2>
              <p className="text-gray-700 mb-3">Use it when you notice:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>"If I don't do something RIGHT NOW I'm going to explode."</li>
                <li>You're locked into one story (catastrophizing, shame-spiral, revenge fantasy).</li>
                <li>Your body is activated (tight chest, buzzing, clenched jaw) and you're about to act.</li>
              </ul>
              <p className="text-gray-700 mb-2">Don't use it as a substitute for:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>urgent medical care,</li>
                <li>immediate safety planning,</li>
                <li>or ongoing problem-solving for chronic situations.</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                (RESISTT is for the moment the urge is hot.)
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Quick-start version (60 seconds)
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Name the urge: "I'm having the urge to ___."</li>
                <li>Pick one RESISTT letter and do it for 2–5 minutes.</li>
                <li>Re-rate intensity 0–10.</li>
                <li>If still high, pick a different letter and repeat.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                The 7 RESISTT skills (step-by-step)
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  R — Reframe the situation
                </h3>
                <p className="text-gray-700 mb-3">
                  When you're stuck in black-and-white thinking ("This will never end"), reframe into a more realistic, wider-angle view.
                </p>
                <p className="text-gray-700 mb-2 font-medium">How</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Ask: "What's a less extreme interpretation that still respects my pain?"</li>
                  <li>Try: "This is hard and I can survive hard moments."</li>
                  <li>If you can, do a quick <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>: What do I know vs. what am I predicting?</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Tiny scripts</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"This is a moment, not a life sentence."</li>
                  <li>"My mind is giving me a fear-story, not a certainty."</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  (Why this helps: cognitive reappraisal—changing how you interpret a situation—reliably reduces emotional response and recruits cognitive control systems.)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  E — Engage in a distracting activity
                </h3>
                <p className="text-gray-700 mb-3">
                  Distraction isn't denial; it's strategic attention-shifting until the wave passes.
                </p>
                <p className="text-gray-700 mb-2 font-medium">How</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Pick something with a beginning and end (10–20 minutes).</li>
                  <li>Do it mindfully (actually attend to it).</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Fast ideas</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Shower, quick walk, fold laundry for 10 minutes</li>
                  <li>Simple game, puzzle, music + lyrics, cooking one small thing</li>
                  <li>"One episode" with a timer</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Rule: If distraction turns into avoidance for days, switch to problem-solving later when regulated.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  S — Someone else
                </h3>
                <p className="text-gray-700 mb-3">Shift focus outward: help, connect, or be with another person (or creature).</p>
                <p className="text-gray-700 mb-2 font-medium">Options</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Text someone: "I'm having a rough moment—can we talk about literally anything for 10 minutes?"</li>
                  <li>Do one helpful micro-action: leave a kind comment, check on a friend, tidy a shared space</li>
                  <li>Pet time: brush an animal, refill water, go outside together</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  If you can't contact anyone: write a short supportive message to your future self ("Here's what you need in the next 10 minutes…").
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  I — Intense sensations (safe intensity)
                </h3>
                <p className="text-gray-700 mb-3">Give your body strong sensation without harm to interrupt the loop.</p>
                <p className="text-gray-700 mb-2 font-medium">Ideas</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Hold an ice cube (or cold pack) in your hand</li>
                  <li>Cold splash, cold shower, hot shower</li>
                  <li>Step outside into cold/heat briefly</li>
                  <li>Strong mint, sour candy, spicy gum (if safe for you)</li>
                </ul>
                <p className="text-gray-700 mt-3 font-semibold">
                  Safety note: intensity should be uncomfortable but safe, not injuring.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  S — Shut it out
                </h3>
                <p className="text-gray-700 mb-3">If the environment is fueling the fire, leave the trigger zone or "box it up" temporarily.</p>
                <p className="text-gray-700 mb-2 font-medium">How</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Physically move: different room, outside, bathroom, hallway</li>
                  <li>Visualize: put the problem in a box, on a shelf, in a locked drawer</li>
                  <li>Tell yourself: "Not now. I'll come back to this at ___ (specific time)."</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Pair it with: a timer + one other RESISTT step so "shut it out" doesn't become rumination in a new location.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  T — Neutral thoughts
                </h3>
                <p className="text-gray-700 mb-3"><Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">Give</Link> your mind content that doesn't escalate.</p>
                <p className="text-gray-700 mb-2 font-medium">Options</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Count breaths (inhale 1, exhale 2…)</li>
                  <li>Name 10 neutral objects you see</li>
                  <li>Recite lyrics, a poem, a prayer, multiplication tables</li>
                  <li>A neutral mantra: "Right now, it is what it is."</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  If you're spiraling: keep it concrete (counting, naming colors, sensory facts).
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  T — Take a break
                </h3>
                <p className="text-gray-700 mb-3">A break is a planned reduction of demands, not "quit life forever."</p>
                <p className="text-gray-700 mb-2 font-medium">Examples</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Postpone one non-urgent task to tomorrow</li>
                  <li>Cancel one optional plan</li>
                  <li>Take a "low-input hour" (dim lights, phone down, quiet activity)</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Guardrails</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Make it time-limited (30–120 minutes).</li>
                  <li>If you keep needing breaks daily, that's a vulnerability flag → use your "Overwhelmed?" page + <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link> / basics.</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  A worked example (copy/paste template)
                </h3>
                <div className="space-y-1 text-gray-700 text-sm">
                  <p>Situation:</p>
                  <p>Emotion + intensity (0–10):</p>
                  <p>Urge:</p>
                  <p className="mt-2 font-medium">My RESISTT plan (pick 2–3):</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>R (Reframe):</li>
                    <li>E (Engage):</li>
                    <li>S (Someone else):</li>
                    <li>I (Intense sensations):</li>
                    <li>S (Shut it out):</li>
                    <li>T (Neutral thoughts):</li>
                    <li>T (Take a break):</li>
                  </ul>
                  <p className="mt-2">After 10 minutes: intensity now (0–10):</p>
                  <p>Next wise step (one sentence):</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Practice plan (so it works when you actually need it)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Build a "RESISTT menu" now (3 options per letter).</li>
                  <li>Practice once when you're only mildly stressed (intensity 3–5).</li>
                  <li>When you're flooded: start with I (Intense) or E (Engage) first (<Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">fast</Link> body/attention wins), then do R once you're below ~6/10.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Common pitfalls (and fixes)
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>"Reframing feels fake."</strong> → Reframe to neutral, not positive: "This is painful and temporary."</p>
                  <p className="text-gray-700"><strong>Distraction becomes avoidance.</strong> → Schedule a later "solve it" block when calm.</p>
                  <p className="text-gray-700"><strong>"Someone else isn't available."</strong> → Use "neutral thoughts" + write a 5-line message you would send.</p>
                  <p className="text-gray-700"><strong>"You keep cycling RESISTT and staying at 8–10."</strong> → Switch to your Crisis Skills page (STOP/TIPP/<Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link>) and/or your Overwhelmed? decision page.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-16 md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
      >
        Return to Landing
      </button>
    </div>
  );
}
