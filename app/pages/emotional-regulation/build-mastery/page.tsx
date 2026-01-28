'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function BuildMasteryPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-32 md:pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            <Link href="/pages/emotional-regulation/build-mastery" className="text-blue-600 hover:text-blue-800 underline">Build Mastery</Link> (feel more capable, one small win at a time)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-4">
                Build Mastery is a DBT Emotion Regulation skill (part of <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link>) that helps you feel competent and more in control. When you do small, doable challenges regularly, you reduce vulnerability to intense emotions like helplessness, anxiety, and depression.
              </p>
              <p className="text-gray-700 font-semibold">
                Mastery doesn't mean perfection. It means: "I did something. I can handle things."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: <Link href="/pages/emotional-regulation/build-mastery" className="text-blue-600 hover:text-blue-800 underline">Build mastery</Link> today
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1: Pick ONE "mastery moment"
                </h3>
                <p className="text-gray-700 mb-3">Choose one thing that is:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                  <li>a little challenging</li>
                  <li>possible</li>
                  <li>small enough to finish</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>wash dishes for 5 minutes</li>
                  <li>learn 3 chords on an instrument</li>
                  <li>cook a simple recipe</li>
                  <li>fix one small thing (button, bike chain, desk drawer)</li>
                  <li>do one crossword clue</li>
                  <li>read 2 pages and jot a 1-sentence note</li>
                  <li>text a friend and follow through on plans (relationship mastery counts)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2: "Plan for success, not failure"
                </h3>
                <p className="text-gray-700 mb-2">Make it easier to complete:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>lower the bar ("5 minutes is enough")</li>
                  <li>gather what you need first (ingredients, tools, playlist)</li>
                  <li>remove one obstacle (set out clothes, open the document, clear one surface)</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  If you're overwhelmed: make the task tiny and count it.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3: Do it on purpose (and expect mistakes)
                </h3>
                <p className="text-gray-700 mb-3">
                  Start. Go slow. Learn as you go.
                </p>
                <p className="text-gray-700 mb-2">
                  Mistakes are not proof you can't—mistakes are how you learn.
                </p>
                <p className="text-gray-700 mb-2 font-medium">If you get stuck, use "help skills":</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>ask someone who knows</li>
                  <li>look it up</li>
                  <li>try a simpler version first</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4: <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">Give</Link> yourself credit (this is part of the skill)
                </h3>
                <p className="text-gray-700 mb-2">At the end, say (out loud if you can):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"That counted."</li>
                  <li>"I practiced."</li>
                  <li>"I did a hard thing."</li>
                </ul>
                <p className="text-gray-700 mb-2">Optional: write 1 line:</p>
                <p className="text-gray-700 ml-4 italic">
                  What I did + what it shows about me
                </p>
                <p className="text-gray-700 ml-4 mb-2 font-medium">Example:</p>
                <p className="text-gray-700 ml-4">
                  "Cooked eggs. I can follow steps even when tired."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Starting a "Mastery Project" (optional, powerful)
                </h3>
                <p className="text-gray-700 mb-3">
                  If you want momentum, choose an ongoing project you actually care about:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>training for a 5K</li>
                  <li>learning a language</li>
                  <li>knitting / cooking / art</li>
                  <li>a puzzle series</li>
                  <li>writing (blog, zine, journal)</li>
                  <li>climbing / sport practice</li>
                </ul>
                <p className="text-gray-700 font-semibold">
                  Rule: challenging-but-doable. Not mindless, not impossible.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  If you want an easy daily template
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Pick one:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>5-minute mastery (timer → <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> when done)</li>
                  <li>One tiny "hard part" (send the email draft, fold 5 items, chop one onion or substitute if you're low-FODMAP)</li>
                  <li>Skill stacking: do mastery right after a routine (after coffee, after meds, after brushing teeth)</li>
                </ol>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  When to use <Link href="/pages/emotional-regulation/build-mastery" className="text-blue-600 hover:text-blue-800 underline">Build Mastery</Link>
                </h3>
                <p className="text-gray-700 mb-2">Use it when you feel:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>stuck / helpless</li>
                  <li>low confidence</li>
                  <li>"I can't do anything"</li>
                  <li>emotionally fragile and needing stability</li>
                </ul>
                <p className="text-gray-700 mt-3 font-semibold">
                  Even one small mastery action helps your brain learn: "I can move."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-20 right-4 md:bottom-6 md:right-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-[calc(100%-2rem)] md:w-auto"
      >
        Return to Landing
      </button>
    </div>
  );
}

