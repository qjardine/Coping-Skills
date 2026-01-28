'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function EffectiveRethinkingPage() {
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
            Effective Rethinking (paired with relaxation)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700">
                Use this when a stressful thought is pouring fuel on your body (catastrophizing, "I can't," "they hate me," "this will never end"). You practice new thoughts when calm so they show up when stressed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — Write the prompting event (facts only)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Example:</p>
                <p className="text-gray-700 ml-4">"They didn't text back today."</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — Write the distress thoughts
                </h3>
                <p className="text-gray-700 mb-2">Ask: "What am I telling myself that makes this spike?"</p>
                <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I'm being abandoned."</li>
                  <li>"I can't handle this."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — Replace with effective thoughts
                </h3>
                <p className="text-gray-700 mb-2">
                  Write several replacements that are true enough to reduce arousal:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I don't know why yet."</li>
                  <li>"This feeling is intense, but it's temporary."</li>
                  <li>"I can cope even if I don't like it."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — Practice pairing thought + relax (when not in crisis)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Breathe in: say one effective thought silently.</li>
                  <li>Breathe out: say "Relax" silently and soften muscles.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5 — Use it in real life
                </h3>
                <p className="text-gray-700">
                  When the stress hits: pick one effective thought + pair it with your exhale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-6 right-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50"
      >
        Return to Landing
      </button>
    </div>
  );
}

