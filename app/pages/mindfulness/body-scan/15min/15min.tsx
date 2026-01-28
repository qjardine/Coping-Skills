'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { NextButton } from '@/components/shared/NextButton';
import { BackButton } from '@/components/shared/BackButton';

export default function BodyScan15MinPage() {
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
            15 Minute <Link href="/pages/mindfulness/body-scan" className="text-blue-600 hover:text-blue-800 underline">Body Scan</Link>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1 — Get ready (1 minute)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Choose a quiet spot where you won't be interrupted.</li>
                <li>Sit in a chair with feet flat (or lie down if you prefer).</li>
                <li>Hands resting. Shoulders loose.</li>
                <li>Close your eyes if that feels okay. Otherwise, keep them open and soften your gaze.</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Take 3–5 slow breaths.
                <br />
                Inhale gently. Exhale a little longer.
              </p>
              <p className="mt-3 text-gray-700">
                <strong>Reminder:</strong> Your job is to notice, not to "do it perfectly."
                <br />
                If your mind wanders, gently say "wandering" and return to the last spot you remember.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2 — Lower <Link href="/pages/mindfulness/body-scan" className="text-blue-600 hover:text-blue-800 underline">body scan</Link> (about 5 minutes)
              </h2>
              <p className="mb-3 text-gray-700">
                Start at the ground contact:
              </p>
              <ol className="list-decimal list-inside space-y-4 text-gray-700 ml-4">
                <li>
                  <strong>Feet</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Notice toes → soles → heels → ankles</li>
                    <li>Are they tired? sore? warm? restless? fine?</li>
                    <li>On an exhale, let them soften a little.</li>
                  </ul>
                </li>
                <li>
                  <strong>Lower legs</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Calves and shins: heavy? light? tingling? neutral?</li>
                  </ul>
                </li>
                <li>
                  <strong>Knees</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Feel the back of the knees and how they rest.</li>
                  </ul>
                </li>
                <li>
                  <strong>Thighs</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Notice the muscles. Notice contact with the chair.</li>
                  </ul>
                </li>
                <li>
                  <strong>Hips / pelvis / buttocks</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Feel where your body is supported.</li>
                  </ul>
                </li>
              </ol>
              <p className="mt-4 text-gray-700">
                If you notice tension: breathe in.
                <br />
                As you breathe out, imagine releasing just a small amount.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3 — Upper <Link href="/pages/mindfulness/body-scan" className="text-blue-600 hover:text-blue-800 underline">body scan</Link> (about 5 minutes)
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700 ml-4">
                <li>
                  <strong>Belly</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Calm? tight? fluttery? hungry? numb? okay?</li>
                  </ul>
                </li>
                <li>
                  <strong>Lower back</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>This area often holds stress. Notice pressure or soreness without judging.</li>
                    <li>Exhale and soften.</li>
                  </ul>
                </li>
                <li>
                  <strong>Mid-back and upper back</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Feel the chair supporting you. Let yourself be held up.</li>
                  </ul>
                </li>
                <li>
                  <strong>Hands and arms</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Fingertips → fingers → palms</li>
                    <li>Notice temperature, tingling, pulsing, stillness</li>
                    <li>Move up: wrists → forearms → elbows → upper arms</li>
                  </ul>
                </li>
              </ol>
              <p className="mt-4 text-gray-700">
                If thoughts show up: that's normal. Gently come back to the body part you're scanning.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4 — Shoulders and head (about 4 minutes)
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700 ml-4">
                <li>
                  <strong>Shoulders & neck</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Notice tightness, pulling, soreness, or ease.</li>
                    <li>On each exhale, let shoulders drop slightly.</li>
                  </ul>
                </li>
                <li>
                  <strong>Jaw and mouth</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Unclench jaw. Let tongue rest.</li>
                  </ul>
                </li>
                <li>
                  <strong>Nose and eyes</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Feel the breath at the nose. Soften the muscles around the eyes.</li>
                  </ul>
                </li>
                <li>
                  <strong>Forehead, scalp, head</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Smooth the forehead if you can.</li>
                    <li>Notice the whole head: pressure? lightness? neutral?</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 5 — Finish (1 minute)
              </h2>
              <p className="mb-3 text-gray-700">
                Feel your whole body as one connected shape.
                <br />
                Notice your <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>.
              </p>
              <p className="text-gray-700">
                Take one slow breath in… and a longer breath out.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 6 — Write it down (optional, 1 minute)
              </h2>
              <p className="mb-3 text-gray-700">
                On a body outline (or in a notes box), write:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Most noticeable sensation: ___</li>
                <li>Most tense area: ___</li>
                <li>Most relaxed area: ___</li>
                <li>One kind action I can take next: ___ (water, stretch, snack, rest, warmth)</li>
              </ul>
              <p className="mt-4 text-gray-700">
                <strong>Safety option (any time):</strong> open your eyes, feel your feet, and name 5 things you see / 4 things you feel. You can <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> whenever you want.
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

