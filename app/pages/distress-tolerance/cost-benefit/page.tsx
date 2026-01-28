'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CostBenefitPage() {
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
            Distress Tolerance: Cost–Benefit Analysis
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What this is
              </h2>
              <p className="text-gray-700 mb-4">
                Cost–Benefit Analysis (sometimes called <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros & Cons</Link>) is a Distress Tolerance tool for when you have mixed motivation about a behavior:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>"I want to <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link>, but it helps in the moment."</li>
                <li>"I know it hurts me, but it feels relieving."</li>
                <li>"Part of me wants change; part of me wants comfort."</li>
              </ul>
              <p className="text-gray-700 mb-2">This practice helps you decide:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Is this behavior worth changing?</li>
                <li>If yes, what leverage will help me stick with it when distress hits?</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                When to use this
              </h2>
              <p className="text-gray-700 mb-3">Use Cost–Benefit Analysis when you are:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>about to do a problem behavior (doomscrolling, substance use, lashing out, avoidance, self-sabotage, overspending, bingeing, etc.)</li>
                <li>trying to quit or reduce something but keep going back</li>
                <li>stuck in "I don't know if I even want to change"</li>
              </ul>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                If you're in a high crisis state, use <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>/<Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIP</Link> first, then do this once you can think clearly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: Cost–Benefit Analysis (DBT style)
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1: Choose ONE behavior
                </h3>
                <p className="text-gray-700 mb-3">Pick one behavior you want to examine. Keep it specific.</p>
                <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"Smoke when stressed"</li>
                  <li>"Skip meals then binge at night"</li>
                  <li>"Send angry texts when triggered"</li>
                  <li>"Spend money impulsively"</li>
                  <li>"Avoid opening messages / bills"</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Write it at the top of your page:</p>
                <p className="text-gray-700 ml-4 mb-3 font-semibold">
                  Problem behavior: ______________________
                </p>
                <p className="text-gray-700 mb-2">Now choose an alternative that represents "coping" or "skillful action":</p>
                <p className="text-gray-700 ml-4 font-semibold">
                  Alternative behavior: ______________________
                </p>
                <p className="text-gray-700 ml-4 mt-2 text-sm italic">
                  (e.g., "urge-surf for 10 minutes," "text a friend and ask for support," "drink water + snack," "walk outside," "use <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> then write draft-not-send," etc.)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2: Costs of doing the problem behavior
                </h3>
                <p className="text-gray-700 mb-3">Brainstorm every negative consequence—short-term and long-term.</p>
                <p className="text-gray-700 mb-2 font-medium">Prompt questions:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>What happens to my body? my mood? my sleep?</li>
                  <li>What does it do to my relationships? money? work?</li>
                  <li>What happens to my self-respect?</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Write each cost and add an importance score 1–5 (5 = very important):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Cost: ____________________  (1–5): __</li>
                  <li>Cost: ____________________  (1–5): __</li>
                  <li>Cost: ____________________  (1–5): __</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3: Benefits of doing the problem behavior
                </h3>
                <p className="text-gray-700 mb-3">Be honest. These are the reasons it's compelling.</p>
                <p className="text-gray-700 mb-2 font-medium">Prompt questions:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>What do I get immediately? (numbness, relief, control, distraction, pleasure)</li>
                  <li>What emotion does it reduce right now?</li>
                  <li>What does it help me avoid?</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Benefit: __________________  (1–5): __</li>
                  <li>Benefit: __________________  (1–5): __</li>
                  <li>Benefit: __________________  (1–5): __</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4: Costs of the alternative behavior (changing)
                </h3>
                <p className="text-gray-700 mb-3">This is the part people skip—don't. Change costs effort.</p>
                <p className="text-gray-700 mb-2 font-medium">Prompt questions:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>What discomfort do I have to tolerate?</li>
                  <li>What will feel awkward, scary, boring, slow, or vulnerable?</li>
                  <li>What will I have to <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link> up?</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Cost: ____________________  (1–5): __</li>
                  <li>Cost: ____________________  (1–5): __</li>
                  <li>Cost: ____________________  (1–5): __</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5: Benefits of the alternative behavior (coping)
                </h3>
                <p className="text-gray-700 mb-3">Now imagine the payoff—and try to feel it.</p>
                <p className="text-gray-700 mb-2 font-medium">Prompt questions:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>What improves in a week? a month?</li>
                  <li>What happens to my energy, mood, confidence?</li>
                  <li>What doors open if this gets easier?</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Benefit: __________________  (1–5): __</li>
                  <li>Benefit: __________________  (1–5): __</li>
                  <li>Benefit: __________________  (1–5): __</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 6: Add it up (the leverage step)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Add totals for each quadrant:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Total costs of problem behavior: ____</li>
                  <li>Total benefits of problem behavior: ____</li>
                  <li>Total costs of alternative: ____</li>
                  <li>Total benefits of alternative: ____</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Interpret the results (without judgment)</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>If the benefits of the alternative + costs of the problem behavior are clearly bigger → you have leverage for change.</li>
                  <li>If the benefits of the problem behavior are still huge → you may need more supports, a smaller alternative, or to address what the behavior is doing for you (comfort, safety, numbness, control).</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Make it usable in real life (30-second "in the moment" version)
                </h3>
                <p className="text-gray-700 mb-2">When you're about to do the behavior, ask:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>What do I get in the next 10 minutes if I do it?</li>
                  <li>What do I get in the next 24 hours if I don't?</li>
                  <li>What will Future Me thank me for?</li>
                </ol>
                <p className="text-gray-700 mb-2">Then choose the smallest next skill step:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"Wait 5 minutes"</li>
                  <li>"Drink water"</li>
                  <li>"Text someone"</li>
                  <li>"Do <Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIP</Link> for 60 seconds"</li>
                  <li>"Move my body for 2 minutes"</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Example: Eating too much junk food
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Problem behavior:</strong> binge junk food at night</p>
                  <p><strong>Alternative:</strong> eat a balanced snack + <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">self-soothe</Link> + go to bed routine</p>
                  <p className="mt-2"><strong>Costs of problem behavior (1–5):</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>stomach pain (4)</li>
                    <li>shame spiral (5)</li>
                    <li>poor sleep (4)</li>
                    <li>feels out of control (5)</li>
                  </ul>
                  <p className="mt-2"><strong>Benefits of problem behavior:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>immediate comfort (4)</li>
                    <li>numbness/distraction (4)</li>
                    <li>"I get to have something" (3)</li>
                  </ul>
                  <p className="mt-2"><strong>Costs of alternative:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>cravings feel loud (4)</li>
                    <li>planning food is annoying (3)</li>
                    <li>emotion hits without the numbness (5)</li>
                  </ul>
                  <p className="mt-2"><strong>Benefits of alternative:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>better sleep (4)</li>
                    <li>more stable mood (4)</li>
                    <li>self-trust increases (5)</li>
                    <li>less shame (5)</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Practice plan
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Do this exercise 3 times with 3 different behaviors (when you're calm).</li>
                  <li>Keep your strongest "leverage bullets" somewhere visible (phone note).</li>
                  <li>Revisit and update after a week—your list will get more accurate.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-16 md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-full md:w-auto"
      >
        Return to Landing
      </button>
    </div>
  );
}
