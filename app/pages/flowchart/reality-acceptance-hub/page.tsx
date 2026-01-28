'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function RealityAcceptanceHubPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleContinueToSoothe = () => {
    router.push('/pages/distress-tolerance/soothe');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
            Reality Acceptance Hub
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6 mb-8">
            <div>
              <p className="text-gray-700 mb-4">
                You've identified that something you can't change—a loss, injustice, or chronic reality—is driving your emotion. These DBT skills help you accept painful realities and reduce suffering by stopping the fight with what is already true.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Core acceptance skills
              </h2>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/radical-acceptance')}
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Radical Acceptance
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/turning-mind')}
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Turning the Mind
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/willingness-half-smile')}
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Willingness & Half-Smile
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-purple-800">
                Supporting skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => router.push('/pages/mindfulness/awareness')}
                  className="px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Mindful Awareness
                </button>
                <button
                  onClick={() => router.push('/pages/emotional-regulation/letting-go')}
                  className="px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Letting Go
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/improve')}
                  className="px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  IMPROVE
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/accepts')}
                  className="px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  ACCEPTS
                </button>
              </div>
            </div>

            <div className="p-4 bg-purple-100 rounded-lg border border-purple-300">
              <h3 className="text-lg font-semibold mb-2 text-purple-800">
                Remember
              </h3>
              <p className="text-gray-700 text-sm">
                Acceptance doesn't mean approval. It means acknowledging reality so you can respond effectively instead of staying stuck fighting what can't be changed.
              </p>
            </div>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              After working on acceptance
            </h2>
            <p className="text-gray-700 mb-4">
              Acceptance work can be emotionally intense. Once you've practiced these skills, soothe your body to help your nervous system settle and integrate the work.
            </p>
            <button
              onClick={handleContinueToSoothe}
              className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              Continue to Soothe
            </button>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <button
          onClick={() => router.push('/pages/landing-page')}
          className="px-4 md:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing
        </button>
      </div>
    </div>
  );
}
