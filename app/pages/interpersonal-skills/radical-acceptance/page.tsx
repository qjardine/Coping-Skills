'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function RadicalAcceptancePage() {
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
            <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link> (DBT Distress Tolerance) — <Link href="/pages/interpersonal-skills/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> fighting reality
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Distress Tolerance skills help you get through painful moments without making things worse, especially when you can't change the situation right away.
              </p>
              <p className="text-gray-700 font-semibold">
                <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link> is one of the most effective—and hardest—DBT skills. It means accepting reality completely (in your mind, body, and heart) and stopping the fight with what is already true.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link> is (and isn't)
              </h2>
              <p className="text-gray-700 mb-2 font-medium">It IS:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>accepting the facts of the present and the past as facts</li>
                <li><Link href="/pages/emotional-regulation/letting-go" className="text-blue-600 hover:text-blue-800 underline">letting go</Link> of "this shouldn't be happening" (even if it's unfair)</li>
                <li>choosing the most effective response for you</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">It is NOT:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>approval</li>
                <li>saying it's okay what happened</li>
                <li>giving up on change</li>
                <li>pretending it didn't hurt</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                The 4 paths (your real choices)
              </h2>
              <p className="text-gray-700 mb-3">
                When something painful happens, you usually have four options:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Solve the problem (if possible)</li>
                <li>Change how you feel about it (emotion regulation)</li>
                <li>Accept it (<Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">radical acceptance</Link>)</li>
                <li>Stay miserable (keep fighting reality / do nothing)</li>
              </ol>
              <p className="text-gray-700">
                Radical Acceptance is option #3: a way to reduce suffering when the facts won't change right now.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: Practice <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 0 — Choose something "small enough" (important)
                </h3>
                <p className="text-gray-700">
                  If you're dealing with major trauma, this can take time and support. Start with a small-to-medium situation first (traffic, a delayed package, a difficult email, an awkward interaction).
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — Name the reality (facts only)
                </h3>
                <p className="text-gray-700 mb-3">Fill in one sentence:</p>
                <p className="text-gray-700 ml-4 mb-3 font-medium">
                  "The facts are: ________."
                </p>
                <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"The package is late."</li>
                  <li>"They said no."</li>
                  <li>"I feel hurt and I don't get an apology right now."</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  No blame words. No "always/never." Just facts.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — Find the part of you that is fighting reality
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Ask:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"What am I insisting should be different?"</li>
                  <li>"What am I refusing to accept is true?"</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Name it plainly:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I'm fighting the delay."</li>
                  <li>"I'm fighting being misunderstood."</li>
                  <li>"I'm fighting that this happened."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — Use the mantra (one short phrase)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Pick one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"It is what it is."</li>
                  <li>"This is the reality of this moment."</li>
                  <li>"I don't like it, but it's true."</li>
                </ul>
                <p className="text-gray-700">
                  Repeat it slowly 3 times.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — Accept with your body (DBT's shortcut)
                </h3>
                <p className="text-gray-700 mb-3">
                  DBT explicitly teaches "accepting reality with your body" using <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link> and willing hands.
                </p>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">Half-smile (10–20 seconds)</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>Relax your face from forehead → jaw</li>
                    <li>Let teeth be slightly apart</li>
                    <li>Lift the corners of your mouth slightly (not a forced grin)</li>
                  </ol>
                </div>

                <div>
                  <p className="text-gray-700 font-medium mb-2">Willing hands (10–20 seconds)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Sit: hands unclenched on lap, palms up, fingers relaxed</li>
                    <li>Stand: arms relaxed, palms turned outward/up slightly</li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-3">Now take one slow exhale.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5 — <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link> (the real practice)
                </h3>
                <p className="text-gray-700 mb-3">
                  Radical Acceptance isn't one decision. It's choosing acceptance again and again when your mind drifts back to fighting. DBT calls this <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link>.
                </p>
                <p className="text-gray-700 mb-2">When you notice resistance ("No. This can't be happening."), do:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Notice: "I'm resisting."</li>
                  <li>Don't judge it: "Of course my mind resists."</li>
                  <li>Turn: "I choose acceptance again."</li>
                  <li>Return to body: willing hands + long exhale</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 6 — Clarify what acceptance allows you to do next
                </h3>
                <p className="text-gray-700 mb-3">
                  Acceptance often frees up energy for effective action.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Ask:</p>
                <p className="text-gray-700 ml-4 mb-3">
                  "Now that I accept the facts, what's the next right step?"
                </p>
                <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>problem-solve (if change is possible)</li>
                  <li>set a boundary (<Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>)</li>
                  <li>use coping skills (<Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">self-soothe</Link>, paced <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>)</li>
                  <li>rest and revisit later</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  If you get stuck: "<Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link> is not approval"
                </h3>
                <p className="text-gray-700 mb-2">
                  If your brain says "Accepting means I'm saying it's okay," use this reframe:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I can accept that it happened and still believe it was wrong."</li>
                  <li>"Acceptance is about reality, not endorsement."</li>
                  <li>"I accept the facts so I can choose what's effective next."</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Practice (make it easier later)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">1-minute daily rep</p>
                <p className="text-gray-700 mb-2">
                  Pick one small annoyance each day and do:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"Facts are ____."</li>
                  <li>"It is what it is."</li>
                  <li>willing hands + long exhale</li>
                </ol>
                <p className="text-gray-700 text-sm italic">
                  DBT materials emphasize repeated practice—especially when stakes are lower—so the skill is available when stakes are high.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/radical-acceptance.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
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

