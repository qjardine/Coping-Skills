'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
export default function SelfCompassionPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/pages/flowchart/sit-with-it');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
            Self-Compassion
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                What this is
              </h2>
              <p className="text-gray-700">
                Self-compassion is treating yourself like you would treat someone you care about. A common model has three parts: mindfulness, common humanity, and kindness.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 1 — Name the pain (20 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Say:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>"This is a moment of suffering."</li>
                <li className="ml-6">(or "This hurts." / "Ouch." / "This is hard.")</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2 — Remember you're not alone (20 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Say:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>"Suffering is part of being human."</li>
                <li>"Other people feel this too."</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 3 — Offer kindness (30–60 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Say one of these (or make your own):
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>"May I be kind to myself right now."</li>
                <li>"May I <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link> myself what I need."</li>
                <li>"May I be gentle with this."</li>
              </ul>
              <p className="mt-4 mb-2 text-gray-700">
                <strong>Optional body support</strong> (choose one):
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Place a hand on your chest or cheek.</li>
                <li>Wrap your arms around yourself.</li>
                <li>Feel your feet on the floor.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 4 — One compassionate action (30 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Ask:
              </p>
              <p className="text-gray-700 font-medium mb-3">
                "What would be the kindest realistic next step?"
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> water, snack, step outside, message support, pause a task, lie down.
              </p>
              <p className="text-gray-700">
                If you feel overwhelmed, the most self-compassionate move may be to pull back temporarily and ground yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-6 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0 flex flex-col gap-2 z-50">
        <button
          onClick={() => router.push('/pages/flowchart/changing-feelings')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Continue to Self-Care
        </button>
        <button
          onClick={() => router.push('/pages/landing-page')}
          className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing
        </button>
      </div>
    </div>
  );
}
