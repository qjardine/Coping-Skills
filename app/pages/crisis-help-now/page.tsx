'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CrisisHelpNowPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  const handleContinueToBodyCheck = () => {
    router.push('/pages/flowchart/body-check-in');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-red-800">
            Crisis Help Now
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6 mb-6">
              <p className="text-red-900 font-semibold text-lg mb-2">
                If you're in immediate danger or at risk of harming yourself or someone else right now, this page is the priority.
              </p>
              <p className="text-red-900 font-medium">
                Your only goal is safer, not perfect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                A) Get physically safer (first aid for risk)
              </h2>
              <p className="text-gray-700 mb-3 font-medium">
                Pick the safest available step:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Move to a more public or more supported space (near safe people).</li>
                <li>Put distance between you and anything you could use to harm yourself/others.</li>
                <li>If possible, ask someone to stay with you (in-person {'>'} phone {'>'} text).</li>
                <li>If you can't leave: go to a doorway / sit on the floor / keep hands visible / focus on "one safe minute."</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                B) Reach crisis support (U.S.)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Call or text <strong>988</strong> for free, confidential crisis support (24/7/365).</li>
                <li>If there is immediate physical danger, emergency services may be needed (e.g., 911).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                C) Then return to the skills flow
              </h2>
              <p className="text-gray-700 mb-3">
                Once you're physically safer and the "red alert" drops even a little:
              </p>
              <p className="text-gray-700 font-medium">
                Go to: <Link href="/pages/flowchart/body-check-in" className="text-blue-600 hover:text-blue-800 underline">Check Into Your Body</Link> → <Link href="/pages/flowchart/feelings" className="text-blue-600 hover:text-blue-800 underline">Feelings</Link> → <Link href="/pages/flowchart/change" className="text-blue-600 hover:text-blue-800 underline">Change</Link> or <Link href="/pages/flowchart/sit-with-it" className="text-blue-600 hover:text-blue-800 underline">Sit with It</Link>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-red-300">
              <h2 className="text-xl font-semibold mb-4 text-red-800">
                Other Crisis Resources
              </h2>
              <button
                onClick={() => router.push('/pages/crisis')}
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Am I Overwhelmed?
              </button>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <button
          onClick={handleContinueToBodyCheck}
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Continue to Check Into Your Body
        </button>
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
