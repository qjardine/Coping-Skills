'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SafetyFirstPage() {
  const router = useRouter();

  const handleYes = () => {
    router.push('/pages/crisis');
  };

  const handleNo = () => {
    router.push('/pages/flowchart/body-check-in');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-red-800">
              Safety First
            </h1>
          </div>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg mb-8">
            <p className="text-gray-700 mb-4">
              Sometimes the most effective DBT skill is not an emotion skill — it's a safety skill.
            </p>
            <p className="text-gray-700 mb-4">
              DBT makes a clear distinction: when safety is on the line, you don't start with deep emotion processing or problem-solving. You start with stabilizing and getting safer. That's because intense distress can narrow attention, increase impulsivity, and make it harder to choose actions that protect your future self.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-red-800">
              Question: Are you in immediate danger or at risk of harming yourself or someone else right now?
            </h2>
            <div className="space-y-4 mt-6">
              <button
                onClick={handleYes}
                className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                No
              </button>
            </div>
            <p className="text-gray-700 mt-6 text-sm italic">
              <strong>Why this comes first:</strong> DBT crisis skills are built for short-term, high-intensity moments where you need to reduce danger and intensity fast — so you can make choices from a steadier mind.
            </p>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What counts as "immediate danger"?
              </h2>
              <p className="text-gray-700 mb-3">You might answer Yes if any of these are true right now:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>You're at risk of hurting yourself or you don't trust yourself to stay safe</li>
                <li>You're at risk of hurting someone else</li>
                <li>There's violence, weapons present, or escalating threat in your environment</li>
                <li>You're too intoxicated / dissociated / panicked to reliably keep yourself safe</li>
                <li>You feel like you might act on an urge in the next minutes, not "someday"</li>
              </ul>
              <p className="text-gray-700 mt-3">
                If you're unsure, treat it as Yes and go to <Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">crisis help</Link>. Safety beats perfect accuracy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                If "Yes" → /crisis-help-now (what happens there)
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  A) Get physically safer (first aid for risk)
                </h3>
                <p className="text-gray-700 mb-2">Pick the safest available step:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Move to a more public or more supported space (near people who are safe)</li>
                  <li>Put distance between you and anything you could use to harm yourself/others</li>
                  <li>If possible, ask someone to stay with you (in-person &gt; phone &gt; text)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  B) Reach crisis support
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>In the U.S., you can call/text/chat 988 for free, confidential crisis support 24/7.</li>
                  <li>If there is physical danger or immediate threat, emergency services may be needed (e.g., 911).</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  C) Then return to the skills flow
                </h3>
                <p className="text-gray-700">
                  Once you're physically safer and the "red alert" intensity drops, you can come back and continue:
                </p>
                <p className="text-gray-700 ml-4">
                  &quot;Can you check into your body?&quot; → /feelings → /change or /sit-with-it
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                FAQ
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Is this page only for suicide/self-harm?</p>
                  <p className="text-gray-700 ml-4">No. "Safety first" includes any situation where you might be harmed, might harm someone, or can't keep yourself safe due to panic, dissociation, or impairment.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Why not start with emotion skills right away?</p>
                  <p className="text-gray-700 ml-4">Because when you're in a danger-zone state, the brain often can't use higher-order skills well. DBT treats that as a state problem, not a moral failing.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if checking into my body feels unsafe?</p>
                  <p className="text-gray-700 ml-4">That's valid. This flow explicitly supports "unsafe body check" routes later — but safety still comes first if there's immediate risk.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Links
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">/crisis-help-now</Link></li>
                <li><Link href="/pages/flowchart/body-check-in" className="text-blue-600 hover:text-blue-800 underline">/ (Can you check into your body?)</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
