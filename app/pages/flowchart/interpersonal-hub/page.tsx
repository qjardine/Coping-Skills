'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function InterpersonalHubPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
            Interpersonal Skills Hub
          </h1>

          <div className="bg-green-50 backdrop-blur-sm rounded-lg border border-green-200 p-8 shadow-lg space-y-6 mb-8">
            <div>
              <p className="text-gray-700 mb-4">
                You've identified that a relationship conflict, request, or boundary issue is driving your emotion. Use these DBT interpersonal effectiveness skills to navigate the situation skillfully.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                What's your main goal right now?
              </h2>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/dear-man')}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Get your objective met → DEAR MAN
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/give')}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Keep/improve the relationship → GIVE
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/fast')}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Keep self-respect → FAST
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-green-800">
                Other helpful interpersonal skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/conflict')}
                  className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Handling Conflict
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/assertiveness')}
                  className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Assertive Communication
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/validation-levels')}
                  className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Validation Levels
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/interpersonal-mindfulness')}
                  className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Interpersonal Mindfulness
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              After working on the relationship issue
            </h2>
            <p className="text-gray-700 mb-4">
              Once you've used your interpersonal skills, it's important to soothe your body and help your nervous system come down. This helps you fully integrate the work you've done.
            </p>
            <button
              onClick={handleContinueToSoothe}
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
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
