'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function EmotionalRegulationPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
            Emotional Regulation (DBT)
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                What is Emotional Regulation?
              </h2>
              <p className="text-gray-700 mb-4">
                Emotional Regulation is a core DBT module focused on understanding and managing emotions effectively. It helps you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Understand how emotions work</li>
                <li>Reduce vulnerability to intense emotions</li>
                <li>Decrease emotional suffering</li>
                <li>Change unwanted emotions</li>
                <li>Increase positive emotions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Key Skills in This Module
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Understanding Emotions
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link> - Separate facts from interpretations</li>
                    <li><Link href="/pages/emotional-regulation/cognitive-vulnerability" className="text-blue-600 hover:text-blue-800 underline">Cognitive Vulnerability</Link> - Notice distorted thoughts</li>
                    <li><a href="/emotional-regulation/mental-noting" className="text-blue-600 hover:text-blue-800 underline"><Link href="/pages/emotional-regulation/mental-noting" className="text-blue-600 hover:text-blue-800 underline">Mental Noting</Link> & Thought Defusion (pdf)</a> - Unhook from thoughts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-800">
                    Changing Emotions
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">Opposite Action</Link> - Act opposite to emotion urges</li>
                    <li><Link href="/pages/emotional-regulation/letting-go" className="text-blue-600 hover:text-blue-800 underline">Letting Go</Link> - Ride the wave of emotions</li>
                    <li><Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link> - Change the situation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-800">
                    Reducing Vulnerability
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><Link href="/pages/self-care" className="text-blue-600 hover:text-blue-800 underline">Self-Care</Link> - Take care of your body (<Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link> skills)</li>
                    <li><Link href="/pages/emotional-regulation/pleasant-activities" className="text-blue-600 hover:text-blue-800 underline">Pleasant Activities</Link> - Build positive experiences</li>
                    <li><Link href="/pages/emotional-regulation/build-mastery" className="text-blue-600 hover:text-blue-800 underline">Build Mastery</Link> - Feel capable</li>
                    <li><Link href="/pages/emotional-regulation/cope-ahead" className="text-blue-600 hover:text-blue-800 underline">Cope Ahead</Link> - Prepare for difficult situations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-800">
                    <Link href="/pages/emotional-regulation/being-effective" className="text-blue-600 hover:text-blue-800 underline">Being Effective</Link>
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><Link href="/pages/emotional-regulation/being-effective" className="text-blue-600 hover:text-blue-800 underline">Being Effective</Link> - Focus on what works</li>
                    <li><a href="/positive-self-talk" className="text-blue-600 hover:text-blue-800 underline">Positive Self-Talk (pdf)</a> - Challenge negative thoughts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">
                <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link>
              </h3>
              <p className="text-gray-700 mb-2">
                DBT's framework for reducing emotional vulnerability:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Accumulate</strong> positive emotions</li>
                <li><strong>Build</strong> mastery</li>
                <li><strong>Cope</strong> ahead</li>
                <li><strong>P</strong>hysical illness (treat it)</li>
                <li><strong>L</strong>eave time for rest</li>
                <li><strong>E</strong>at balanced meals</li>
                <li><strong>A</strong>void mood-altering substances</li>
                <li><strong>S</strong>leep well</li>
                <li><strong>E</strong>xercise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/er-troubleshooting.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >Troubleshooting Emotional Regulation (pdf)</a>
        <a
          href="/assets/Worksheets/er-troubleshooting-interact.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >Troubleshooting Emotional Regulation (Interactive) (pdf)</a>
        <button
          onClick={handleReturnToLanding}
          className="px-4 md:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing
        </button>
      </div>
    </div>
  );
}
