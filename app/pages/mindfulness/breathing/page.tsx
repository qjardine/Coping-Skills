'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function BreathingPage() {
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
            <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">Breathing</Link> Exercises (DBT Mindfulness) — Conscious <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">Breathing</Link>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                One simple way to practice mindfulness and one-mindfully is to practice <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link> on purpose. Your <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link> happens all the time—but most of the time it isn't conscious. In DBT, bringing attention to your breath is a reliable way to bring your mind and body back together.
              </p>
              <p className="text-gray-700 mb-4">
                Thich Nhat Hanh teaches a classic breath practice that Marsha Linehan references with respect in DBT contexts:
              </p>
              <p className="text-gray-700 font-semibold ml-4">
                "<Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">Breathing</Link> in, I know that I am <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link> in… <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">Breathing</Link> out, I know that I am <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link> out."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-3">Use breathing exercises when you want to:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>come back to the present moment</li>
                <li>lower physical tension</li>
                <li>ride out a wave of emotion without acting on it</li>
                <li>support <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link> (with <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link> / willing hands)</li>
                <li>help your nervous system settle enough to choose your next skill</li>
              </ul>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <strong>Important note:</strong> Some people feel panicky with deep <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>. If that happens, use the "exhale-first" option below and keep breaths small and gentle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: Pick one <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link> practice
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 0 — Set up (10 seconds)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Choose your posture:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>sitting with feet on the floor, hands resting</li>
                  <li>or lying down (if that feels safe)</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Eyes:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>closed only if comfortable</li>
                  <li>otherwise soft gaze at a spot a few feet away</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option A: "In / Out" Conscious <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">Breathing</Link> (easiest, very gentle)
                </h3>
                <p className="text-gray-700 mb-3 text-sm italic">
                  This is the Thich Nhat Hanh practice.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Steps (1–3 minutes)</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Breathe in naturally and think: "In."</li>
                  <li>Breathe out naturally and think: "Out."</li>
                  <li>Keep it simple. When your mind wanders, gently return to In / Out.</li>
                  <li>If it helps, add a tiny <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link> on the exhale.</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  Why this works: it gives your mind one small, steady anchor—your breath.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option B: Belly <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">Breathing</Link> (diaphragmatic <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>)
                </h3>
                <p className="text-gray-700 mb-3">
                  Diaphragmatic <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link> is also called abdominal/belly <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>—your belly rises and falls more than your upper chest.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Steps (2–5 minutes)</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Put one hand on your belly (or belly + chest).</li>
                  <li>Inhale slowly through your nose. Let your belly rise gently.</li>
                  <li>Exhale slowly. Let your belly fall.</li>
                  <li>Keep your shoulders relaxed.</li>
                  <li>If your chest is doing all the work, make the next inhale smaller and aim the air "downward" (soft belly expansion).</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option C: DBT Paced <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">Breathing</Link> (best for "revved up" emotion)
                </h3>
                <p className="text-gray-700 mb-3">
                  DBT crisis survival skills often teach paced <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>slow your <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link> down (about 5–6 breaths per minute)</li>
                  <li>and make the exhale longer than the inhale (example: 5 seconds in, 7 seconds out)</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Steps (2–4 minutes)</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Inhale through your nose for 4–5 seconds.</li>
                  <li>Exhale for 6–7 seconds (slower than the inhale).</li>
                  <li>Repeat 6–10 times.</li>
                  <li>If counting stresses you out, just focus on: "longer exhale."</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option D: If deep <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link> causes panic (Exhale-first)
                </h3>
                <p className="text-gray-700 mb-3">
                  Some people find panic eases if they exhale first, then inhale.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Steps (1–2 minutes)</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Start with a gentle exhale (like fogging a mirror—soft, not forceful).</li>
                  <li>Then inhale a small, comfortable breath through your nose.</li>
                  <li>Repeat slowly: exhale → inhale.</li>
                  <li>Keep breaths shallow-to-medium. Comfort first.</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Make it mindfulness (the DBT way)
                </h3>
                <p className="text-gray-700 mb-3">
                  No matter which option you choose, add one DBT mindfulness layer:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Observe:</strong> notice air moving in/out</li>
                  <li><strong>Describe:</strong> "warm," "cool," "tight chest," "soft belly," "<Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">fast</Link>," "slowing"</li>
                  <li><strong>Return:</strong> when your mind drifts, come back gently—no scolding</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Neurodivergent-friendly adjustments
                </h3>
                <p className="text-gray-700 mb-2">If interoception (internal sensing) is hard today:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>use hands on belly as an external cue</li>
                  <li>use short reps (30–60 seconds) multiple times</li>
                  <li>keep eyes open and anchor to a visual spot</li>
                  <li>reduce counting if it feels like pressure (use "longer exhale" instead)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Quick close (10 seconds)
                </h3>
                <p className="text-gray-700 mb-2">After you finish, check:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Distress before: __/10</li>
                  <li>Distress now: __/10</li>
                </ul>
                <p className="text-gray-700">
                  Even a 1-point drop is a win. If you're steadier, choose your next skill (<Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>, DEAR MAN, <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link>, Self-Soothing, etc.).
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Homework (tiny + doable)
                </h3>
                <p className="text-gray-700 mb-2">Once a day:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>1 minute of In / Out, or</li>
                  <li>10 breaths of paced <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link></li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Practicing when you're "okay" makes it easier to use when you're not.
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

