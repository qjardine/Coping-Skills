'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function EmotionExposurePage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/pages/flowchart/sit-with-it');
  };

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
            Emotion Exposure (DBT)
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                What this is
              </h2>
              <p className="text-gray-700">
                Emotion Exposure is practicing letting an emotion be there without escaping it or acting on the urge. Over time, this can reduce avoidance and help emotions feel less scary and less controlling.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 1 — Choose the emotion (10 seconds)
              </h2>
              <p className="text-gray-700 mb-2">
                Fill in the blank (in your head or on the worksheet):
              </p>
              <p className="text-gray-700 font-medium mb-2">
                "Right now I'm feeling: ____."
              </p>
              <p className="text-gray-700">
                <strong>Optional:</strong> rate intensity 0–10.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2 — Sit down and breathe (30 seconds)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Sit or stand still.</li>
                <li>Take 3 slow breaths (longer exhale than inhale).</li>
              </ul>
              <p className="mt-3 text-gray-700">
                <strong>Reminder:</strong> You can stop anytime. This is practice, not a test.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 3 — Observe the emotion like a wave (2–3 minutes)
              </h2>
              <p className="mb-3 text-gray-700">
                Answer these gently, without debating them:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Where do I feel it in my body? (chest, throat, stomach, face, hands…)</li>
                <li>What is it doing right now? (tight, hot, heavy, buzzing, shaky, numb…)</li>
                <li>How strong is it (0–10)?</li>
                <li>Is it rising, steady, or falling?</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Try saying: "This is a wave. Waves change."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4 — Notice the action urge, and don't do it (1–2 minutes)
              </h2>
              <p className="mb-3 text-gray-700">
                Emotions often come with an urge (text them, shut down, lash out, numb out, scroll, leave).
              </p>
              <p className="mb-3 text-gray-700">
                Fill in the blanks:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Urge: "I want to ____."</li>
                <li>I am choosing: "I will not do that for the next 2 minutes."</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Just keep breathing and noticing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 5 — Check what changed (30 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Ask:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>"Is the intensity different now (0–10)?"</li>
                <li>"Did another emotion show up?"</li>
                <li>"What helped me stay with it?"</li>
              </ul>
              <p className="mt-4 text-gray-700">
                If you got overwhelmed: open your eyes, feel your feet, look around, and name 5 things you can see. Then you can stop.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <button
          onClick={() => router.push('/pages/flowchart/changing-feelings')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Continue to Self-Care
        </button>
        <button
          onClick={handleReturnToLanding}
          className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing
        </button>
      </div>
    </div>
  );
}
