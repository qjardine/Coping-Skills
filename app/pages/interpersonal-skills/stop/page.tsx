'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function StopPage() {
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
            <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> (Crisis "pause button")
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700">
                Use STOP when you're about to react on impulse (text, yell, self-sabotage, shut down). It helps you not make it worse and choose the next step on purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — S: <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">Stop</Link>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Pause. Don't react.</li>
                  <li>If it helps, say (in your head): "<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">Stop</Link>."</li>
                  <li>Hold still for 1–2 breaths.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — T: Take a step back
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Physically step back, sit down, or put your phone down.</li>
                  <li>Take one slow breath. Let your shoulders drop.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — O: Observe
                </h3>
                <p className="text-gray-700 mb-2">Notice, without judging:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>What happened (just the facts)?</li>
                  <li>What's happening inside (thoughts, feelings, urges)?</li>
                  <li>What are other people doing or saying?</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — P: Proceed mindfully
                </h3>
                <p className="text-gray-700 mb-2">Ask yourself:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"What do I want from this situation?"</li>
                  <li>"What will make this better or worse?"</li>
                  <li>"What would <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> choose?"</li>
                </ul>
                <p className="text-gray-700">
                  Then do one next helpful action (even tiny).
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  If you get stuck
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Pick one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIP</Link> (if your body is in panic/rage)</li>
                  <li><Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link> (if you need a safe distraction)</li>
                  <li><Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link> menu (if you need comfort)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/stop-skill.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
        </a>
        <a
          href="/assets/Worksheets/stop-practice.pdf"
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

