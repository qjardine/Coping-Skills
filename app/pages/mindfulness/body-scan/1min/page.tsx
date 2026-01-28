'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { NextButton } from '@/components/shared/NextButton';
import { BackButton } from '@/components/shared/BackButton';

export default function BodyScan1MinPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/pages/flowchart/feelings');
  };

  const handleBack = () => {
    router.push('/pages/mindfulness/body-scan/how-long');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            1 Minute <Link href="/pages/mindfulness/body-scan" className="text-blue-600 hover:text-blue-800 underline">Body Scan</Link>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1 — Get ready (10 seconds)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Sit comfortably (or lie down).</li>
                <li>Feet on the floor if you're sitting. Hands resting.</li>
                <li>If closing your eyes doesn't feel good, keep them open and look at one spot.</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Take one slow breath in… and a longer breath out.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2 — Quick scan (40 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Move your attention through your body like a slow flashlight:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Feet & legs:</strong> Notice contact with the floor/chair. Any tightness? Any warmth?
                  <br />
                  Breathe out and let them soften 1%.
                </li>
                <li>
                  <strong>Belly & chest:</strong> Notice if it feels calm, tight, fluttery, or neutral.
                  <br />
                  One slow exhale.
                </li>
                <li>
                  <strong>Shoulders & neck:</strong> These often hold stress.
                  <br />
                  As you breathe out, let your shoulders drop a tiny bit.
                </li>
                <li>
                  <strong>Face & head:</strong> Soften your jaw. Unclench your forehead if you can.
                </li>
              </ul>
              <p className="mt-3 text-gray-700">
                If your mind wanders, quietly say "wandering" and come back to the body part you were on.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3 — Finish (10 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Feel your whole body at once.
                <br />
                Take one more slow breath.
              </p>
              <p className="text-gray-700">
                <strong>Optional:</strong> Ask, "What does my body need next?" (water, stretch, rest, food, warmth)
              </p>
            </div>
          </div>
        </div>
      </div>

      <NextButton onClick={handleNext} />
      <BackButton onClick={handleBack} />
    </div>
  );
}

