'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { NextButton } from '@/components/shared/NextButton';

export default function MindfulnessPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
            I would like to practice Mindfulness
          </h1>

          <div className="bg-blue-50 backdrop-blur-sm rounded-lg border border-blue-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-4">
                Mindfulness helps you notice what's happening right now (thoughts, feelings, urges, surroundings) without getting swept away. It's a core DBT module.
              </p>
              <p className="text-gray-700">
                If body-focus feels unsafe, you can do mindfulness using external anchors (sound/sight) with eyes open.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Step 1 — Choose an anchor (10 seconds)
              </h2>
              <p className="text-gray-700 mb-3">Pick one:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Sight anchor:</strong> look at one object.</li>
                <li><strong>Sound anchor:</strong> listen for the farthest sound, then the closest.</li>
                <li><strong>Touch anchor (external):</strong> hold a mug/fidget and notice texture/temperature.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Step 2 — The DBT "What" skills (1–2 minutes)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Observe:</strong> notice sensations/thoughts without grabbing them.</li>
                <li><strong>Describe:</strong> put words on it: "tight chest," "worry thought," "sadness."</li>
                <li><strong>Participate:</strong> do the moment fully—one thing at a time.</li>
              </ul>
              <p className="text-gray-700 mb-3">Try this script:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>"I notice ____."</li>
                <li>"I'm describing: ____."</li>
                <li>"Right now I'm just doing: ____."</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Step 3 — The DBT "How" skills (1 minute)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Nonjudgmentally:</strong> drop "good/bad," use neutral words.</li>
                <li><strong>One-mindfully:</strong> one task, one moment.</li>
                <li><strong>Effectively:</strong> do what works for your goals (not what proves a point).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Step 4 — "Name it to tame it" (30 seconds)
              </h2>
              <p className="text-gray-700 mb-3">Label softly:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>"This is anxiety."</li>
                <li>"This is a sadness wave."</li>
                <li>"This is an urge."</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Labeling is describing—no debate needed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Step 5 — One-minute reset (60 seconds)
              </h2>
              <p className="text-gray-700 mb-3">Do this anywhere:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Look for 5 things you see</li>
                <li>4 things you feel (chair, feet, fabric)</li>
                <li>3 things you hear</li>
              </ol>
              <p className="text-gray-700 mt-4">
                Then ask: "What's my next effective step?"
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Step 6 — If you drift (always normal)
              </h2>
              <p className="text-gray-700">
                Say "wandering," then return to your anchor. (That return is the skill.)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">
                Explore More Mindfulness Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => router.push('/pages/mindfulness/body-scan/how-long')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-left"
                >
                  Body Scan
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/awareness')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-left"
                >
                  Awareness
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/breathing')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-left"
                >
                  Breathing
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/rain')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-left"
                >
                  RAIN
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/wise-mind/wise-mind')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-left"
                >
                  Wise Mind
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/meditation')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-left"
                >
                  Meditation
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/what')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-left"
                >
                  What Skills
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/one-mindfulness')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-left"
                >
                  One-Mindfulness
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <NextButton onClick={handleNext} />
    </div>
  );
}
