'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ImprovePage() {
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
            <Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">IMPROVE</Link> the Moment
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700">
                Use IMPROVE when you need a small pocket of relief inside a hard moment—without needing the problem to change first.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — Pick ONE letter
                </h3>
                <p className="text-gray-700 mb-4">
                  You don't have to do all of them.
                </p>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">I — Imagery</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Imagine a relaxing scene (real or made up).</li>
                    <li>Picture a "safe room" in your mind and lock the door on what hurts.</li>
                    <li>Replay a happy memory like a short movie.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">M — Meaning</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Ask: "What matters to me here?"</li>
                    <li>Find one value you're practicing (survival, courage, care, honesty).</li>
                    <li>Name one small positive aspect (even "I'm trying").</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">P — Prayer (or "asking for help" if spiritual language doesn't fit)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Ask your <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link>, the universe, or a higher power for strength.</li>
                    <li>"Help me bear this pain without making it worse."</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">R — Relaxation</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Hot bath/shower, stretch/yoga, slow <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>, soften your face/jaw.</li>
                    <li>Unclench your hands.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">O — One thing in the moment</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Do one thing with your whole attention.</li>
                    <li>"Just this breath." "Just this step." "Just washing this cup."</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">V — Vacation (brief)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>5–20 minutes of approved escape: under a blanket, quiet corner, short walk, phone off, nature.</li>
                    <li>Keep it time-limited so it helps (not avoids).</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">E — Encouragement</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Speak to yourself like someone you care about:</li>
                    <li>"I can stand this."</li>
                    <li>"This will pass."</li>
                    <li>"I'm doing the best I can."</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — Re-check
                </h3>
                <p className="text-gray-700">
                  "Did it drop even 5–10%?" If yes, repeat once. If no, switch letters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/improve.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
        </a>
        <a
          href="/assets/Worksheets/improve-interact.pdf"
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

