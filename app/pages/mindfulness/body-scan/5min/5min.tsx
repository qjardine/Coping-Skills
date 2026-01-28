'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { NextButton } from '@/components/shared/NextButton';
import { BackButton } from '@/components/shared/BackButton';

export default function BodyScan5MinPage() {
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
            5 Minute <Link href="/pages/mindfulness/body-scan" className="text-blue-600 hover:text-blue-800 underline">Body Scan</Link>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1 — Get ready (30 seconds)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Choose a quiet spot. Sit comfortably (or lie down).</li>
                <li>Feet flat if sitting. Hands resting.</li>
                <li>If closing your eyes doesn't feel safe, keep them open.</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Take 3 slow breaths.
                <br />
                On each exhale, let your body get a little heavier.
              </p>
              <p className="mt-3 text-gray-700">
                If your mind wanders, gently label it "thinking" and return to your body.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2 — Lower body (about 1½ minutes)
              </h2>
              <p className="mb-3 text-gray-700">
                Bring attention to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Toes → soles → ankles</li>
                <li>Calves → knees → thighs</li>
                <li>Hips / butt / pelvic area (notice where you're supported)</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Notice sensations without judging: tight, tired, buzzing, numb, warm, okay.
              </p>
              <p className="mt-3 text-gray-700">
                On one exhale, release tension where you can.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3 — Upper body (about 1½ minutes)
              </h2>
              <p className="mb-3 text-gray-700">
                Move attention to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Belly (calm? nervous? hungry? tight?)</li>
                <li>Lower back → mid back → upper back (feel the chair support you)</li>
                <li>Hands → forearms → upper arms</li>
              </ul>
              <p className="mt-3 text-gray-700">
                If you find tension, don't fight it. Just breathe and make room for it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4 — Shoulders and head (about 1 minute)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Shoulders & neck:</strong> notice gripping or soreness
                  <br />
                  Exhale and let them soften.
                </li>
                <li>
                  <strong>Jaw & face:</strong> unclench jaw, soften eyes, smooth forehead.
                </li>
                <li>
                  <strong>Head:</strong> heavy? light? tense? okay?
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 5 — Finish + tiny note (30 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Feel your whole body <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>.
              </p>
              <p className="text-gray-700">
                <strong>Optional 1-line note:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Most tense place: ___</li>
                <li>Most relaxed place: ___</li>
              </ul>
              <p className="mt-4 text-gray-700">
                If you feel overwhelmed at any point: open your eyes, feel your feet, and name 5 things you can see.
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

