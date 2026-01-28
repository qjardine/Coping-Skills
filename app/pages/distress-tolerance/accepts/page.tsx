'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function AcceptsPage() {
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
            ACCEPTS (<Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> distraction)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700">
                Use ACCEPTS when you can't solve the problem right now and you need to get through the moment safely. This is short-term distraction (not avoidance forever).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                How to use this page
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — Name the time window
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Choose one:</p>
                <p className="text-gray-700 ml-4">5 minutes / 20 minutes / 1 hour.</p>
                <p className="text-gray-700 mt-2 text-sm italic">
                  (You're buying time so you don't make it worse.)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — Pick ONE letter and do it now
                </h3>
                <p className="text-gray-700 mb-4 text-sm italic">
                  Below are examples (based on the page 333 list in your PDF—expanded with plain language).
                </p>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">A — Activities (do something)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Do one task you can finish (tiny counts).</li>
                    <li>Watch a show or a movie.</li>
                    <li>Clean one small area.</li>
                    <li>Go for a walk or exercise.</li>
                    <li>Read, games, puzzles, music, build/make something.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">C — Contributing (help someone)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Send an encouraging message.</li>
                    <li>Do a small favor.</li>
                    <li><Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">Give</Link> away one thing you don't need.</li>
                    <li>Volunteer (even once).</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">C — Comparisons (zoom out)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Compare to a time you felt different (and it passed).</li>
                    <li>Think of someone coping the same or worse (compassion, not shame).</li>
                    <li>Remind yourself: "This moment is not my whole life."</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">E — Emotions (create a different emotion)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Comedy, funny clips, joke book.</li>
                    <li>Music that shifts your mood (soothing or energizing).</li>
                    <li>A story that pulls up a different feeling.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">P — Pushing away (temporary mental distance)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Leave the situation briefly (if you can).</li>
                    <li>Imagine putting the problem in a box/on a shelf until later.</li>
                    <li>Build an imaginary wall for 10 minutes.</li>
                    <li>If ruminating: gently interrupt ("Not now.")</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">T — Thoughts (fill your mind)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Count things you see.</li>
                    <li>Repeat lyrics.</li>
                    <li>Do a puzzle.</li>
                    <li>Read.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">S — Sensations (strong safe sensation)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Squeeze a stress ball.</li>
                    <li>Hold ice in your hand (briefly).</li>
                    <li>Hot/cold shower.</li>
                    <li>Stand in rain/snow for a moment (if safe).</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — Re-check
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Ask: "Am I safer / more stable than before?"</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>If yes: go to IMPROVE, Self-Soothe, or <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link>.</li>
                  <li>If no: pick one more <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link> option.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/accepts.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
        </a>
        <a
          href="/assets/Worksheets/accepts-interactive.pdf"
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

