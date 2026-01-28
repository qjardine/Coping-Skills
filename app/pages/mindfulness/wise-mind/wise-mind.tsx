'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function WiseMindPage() {
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
            <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> (DBT) — finding the "centered" place inside you
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Mindfulness skills are the foundation of DBT. They help with (1) knowing who you are, (2) knowing where you're going, and (3) handling what goes on in your mind.
              </p>
              <p className="text-gray-700 mb-4">
                In DBT, there are three states of mind:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li><strong>Emotion Mind</strong> (hot, feeling-driven)</li>
                <li><strong>Reasonable/Rational Mind</strong> (cool, logic-only)</li>
                <li><strong><Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link></strong> (the overlap: values + facts + feelings together)</li>
              </ul>
              <p className="text-gray-700">
                Marsha Linehan describes <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> as: "that part of each person that can know and experience truth… almost always quiet… a certain peace… centered."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-3">Use this when you:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>feel torn between emotion and logic</li>
                <li>need to make a decision (text back? set a boundary? quit? apologize?)</li>
                <li>feel "spun up" or "numb" and don't trust your thoughts</li>
                <li>want to act in a way that matches your values</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: Find <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 0 — Quick safety check (10 seconds)
                </h3>
                <p className="text-gray-700 mb-2">If focusing inside your body feels unsafe right now:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>keep your eyes open</li>
                  <li>pick an external anchor (a spot on the wall, a sound in the room)</li>
                  <li>do the steps gently from there</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — Name which mind is running the show (20 seconds)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Emotion Mind signs ("hot")</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>urgency, panic, rage, shame spiral</li>
                  <li>"I have to fix this NOW"</li>
                  <li>facts feel distorted or huge</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Reasonable Mind signs ("cool")</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>logic-only, detached</li>
                  <li>"feelings don't matter"</li>
                  <li>optimizing, analyzing, but not actually grounded</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Say one sentence:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"Right now I'm in Emotion Mind."</li>
                  <li>or "Right now I'm in Reasonable Mind."</li>
                  <li>or "I'm bouncing between both."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — Do a 30-second "<Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> doorway"
                </h3>
                <p className="text-gray-700 mb-3">Pick one option:</p>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">Option A: Breath + "In / Out"</p>
                  <p className="text-gray-700 ml-4">
                    On inhale: think "In."<br />
                    On exhale: think "Out."<br />
                    Repeat 5 breaths.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-medium mb-2">Option B: <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-smile</Link> + willing hands</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>soften your face slightly (not forced)</li>
                    <li>rest hands open on your lap</li>
                  </ul>
                  <p className="text-gray-700 ml-4 mt-2">Take one long exhale.</p>
                </div>
                <p className="text-gray-700 mt-3 text-sm italic">
                  (These are common DBT mindfulness supports for shifting state.)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — Put Emotion Mind and Reasonable Mind on the table (1 minute)
                </h3>
                <p className="text-gray-700 mb-3">Fill these in quickly:</p>
                <p className="text-gray-700 mb-2 font-medium">Emotion Mind says:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"I feel ___."</li>
                  <li>"My urges are ___." (run / yell / hide / text / shut down)</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Reasonable Mind says:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"The facts I know are ___."</li>
                  <li>"My realistic options are ___."</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  You're not choosing yet. You're gathering both sides.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — Ask <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> 3 questions (1 minute)
                </h3>
                <p className="text-gray-700 mb-3">
                  Wise Mind includes emotion and reason, plus values and long-term clarity. It often feels quieter and more "centered."
                </p>
                <p className="text-gray-700 mb-2 font-medium">Ask:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>"What's the simplest true thing here?"</li>
                  <li>"What action matches my values and the facts?"</li>
                  <li>"If I wasn't trying to avoid discomfort, what would I do?"</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  If an answer comes as a gentle "knowing" (even reluctant), that may be <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link>.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5 — Look for the "<Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> signal" (30 seconds)
                </h3>
                <p className="text-gray-700 mb-3">
                  Wise Mind can feel different for different people, but many describe:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>a quieter, steadier feeling</li>
                  <li>less dread/less "push"</li>
                  <li>a sense of "this is the right next step" (even if it's not the easiest)</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Write one sentence:</p>
                <p className="text-gray-700 ml-4 mb-3">
                  "My <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> says the next right step is ___."
                </p>
                <p className="text-gray-700 mb-2">Keep it small:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>one text draft</li>
                  <li>one boundary sentence</li>
                  <li>one glass of water + pause</li>
                  <li>one request using <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link></li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 6 — If you can't access <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> yet (still valid)
                </h3>
                <p className="text-gray-700 mb-3">If you feel flooded, numb, or confused:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>choose a grounding skill (paced breathing / <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">self-soothe</Link>)</li>
                  <li>postpone big decisions</li>
                  <li>return to <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> later</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  DBT assumes <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> is always there—but access can be blocked by overwhelm. Practice helps.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Mini practice (build access over time)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">"Hourly check-in" (30 seconds)</p>
                <p className="text-gray-700 mb-2">
                  Set a gentle alarm 1–3 times/day.
                </p>
                <p className="text-gray-700 mb-2">When it goes off:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>"Emotion Mind / Reasonable Mind / <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link>?"</li>
                  <li>Name one feeling + one fact</li>
                  <li>Let it go and return to the moment</li>
                </ol>
                <p className="text-gray-700 mt-3">
                  This trains the "find <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> faster" muscle.
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

