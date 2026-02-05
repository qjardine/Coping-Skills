'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { SymptomWheel } from '@/components/SymptomWheel';

export default function SymptomQuizPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Neurodivergent Symptom Explorer
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Discover which experiences resonate with you
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                Explore Your Experiences
              </h2>

              <div className="p-4 bg-green-50 rounded border border-green-200 mb-6">
                <p className="text-gray-700 mb-3">
                  This interactive tool helps you explore common neurodivergent experiences across ADHD, Autism, and overlapping traits.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>How it works:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Rate symptoms on the wheel (1-5 scale) by clicking the ring levels</li>
                  <li>Click on label names or use the button grid to explore detailed examples</li>
                  <li>Check boxes next to experiences that resonate with you</li>
                  <li>Return to explore other symptoms</li>
                </ol>
                <p className="text-gray-700 text-sm mt-3">
                  <strong>Rating guide:</strong> 1 = rarely/minimal impact, 5 = very often/significant impact
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200 mb-6">
                <p className="text-gray-700">
                  <strong>Note:</strong> This is not a diagnostic tool. It's designed to help you understand your experiences and identify areas where you might benefit from support or accommodations. 
                  If you're seeking a diagnosis, please consult with a qualified healthcare professional.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <SymptomWheel />
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                What You'll Explore
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <h4 className="font-semibold text-gray-800 mb-2">ADHD Traits</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-2">
                    <li>Task Paralysis</li>
                    <li>Object Permanence</li>
                    <li>Impulsivity</li>
                    <li>Time Blindness</li>
                    <li>Dopamine Seeking</li>
                    <li>Hyperactivity</li>
                    <li>Executive Dysfunction</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h4 className="font-semibold text-gray-800 mb-2">AUTISM Traits</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-2">
                    <li>Masking</li>
                    <li>Stimming</li>
                    <li>Routine</li>
                    <li>Seeking Familiarity</li>
                    <li>Difficulty with Social Cues</li>
                    <li>Repetitive Behavior</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200 md:col-span-2">
                  <h4 className="font-semibold text-gray-800 mb-2">Overlapping Traits (Common in Both ADHD & Autism)</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 list-disc list-inside space-y-1 text-sm text-gray-700 ml-2">
                    <li>Emotional Dysregulation</li>
                    <li>Sensory Sensitivities</li>
                    <li>Hyperfixation</li>
                    <li>Difficulty Processing</li>
                    <li>Interoception</li>
                    <li>Rejection Sensitivity</li>
                    <li>Sensory Overload</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-purple-50 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                After Exploring
              </h3>
              <p className="text-gray-700 mb-4">
                Once you've explored the symptoms that resonate with you, consider:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Reviewing your checked symptoms with a therapist or doctor</li>
                <li>Exploring accommodations and strategies on this site (see related pages below)</li>
                <li>Connecting with neurodivergent communities for support</li>
                <li>Practicing self-compassion as you learn about yourself</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Related Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/care-plan" className="p-3 bg-white rounded border border-blue-200 hover:bg-blue-50 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Personal Care Plan</p>
                  <p className="text-gray-600 text-sm">Build your support system</p>
                </Link>
                <Link href="/pages/neurodivergent/sensory-profiles" className="p-3 bg-white rounded border border-blue-200 hover:bg-blue-50 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Profile</p>
                  <p className="text-gray-600 text-sm">Map your sensory needs</p>
                </Link>
                <Link href="/pages/neurodivergent/meltdowns" className="p-3 bg-white rounded border border-blue-200 hover:bg-blue-50 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Managing Meltdowns</p>
                  <p className="text-gray-600 text-sm">Early warning signs & recovery</p>
                </Link>
                <Link href="/pages/neurodivergent/tolerance-window" className="p-3 bg-white rounded border border-blue-200 hover:bg-blue-50 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Window of Tolerance</p>
                  <p className="text-gray-600 text-sm">Understanding regulation</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
