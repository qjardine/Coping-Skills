'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function NotComfortablePage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/pages/flowchart/sit-with-it');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Not Comfortable Right Now
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                That's okay. Listening to your limits is a skill.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Do this instead (60–90 seconds)
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-2">
                <li>Open your eyes and look around the room.</li>
                <li>Feel your feet on the floor. Press down gently.</li>
                <li>Name 5 things you see.</li>
                <li>Take one slow breath (long exhale).</li>
                <li>Choose one: water / snack / blanket / step outside / message support.</li>
              </ol>
            </div>

            <div className="mt-6">
              <p className="text-gray-700">
                If you want, you can go back and pick a different practice later.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Ready for next steps?
              </h2>
              <div className="space-y-4">
                <button
                  onClick={() => router.push('/pages/distress-tolerance/distress-tolerance')}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I would like to practice Distress Tolerance
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness')}
                  className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I would like to practice Mindfulness
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/interpersonal-skills')}
                  className="w-full px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I would like to work on my Interpersonal Skills
                </button>
                <button
                  onClick={() => router.push('/pages/self-care')}
                  className="w-full px-8 py-4 bg-blue-300 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I would like help practicing self-care
                </button>
                <button
                  onClick={() => router.push('/pages/flowchart/feelings')}
                  className="w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I would like to see the feelings wheel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={() => router.push('/pages/landing-page')}
        className="fixed bottom-6 right-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50"
      >
        Return to Landing
      </button>
    </div>
  );
}
