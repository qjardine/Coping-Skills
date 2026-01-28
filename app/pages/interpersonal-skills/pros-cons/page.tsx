'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ProsConsPage() {
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
            <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros & Cons</Link> (DBT Distress Tolerance) — "Tolerate vs. Don't Tolerate"
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Distress Tolerance skills help you get through intense moments without making things worse, especially when you can't change the situation right away.
              </p>
              <p className="text-gray-700 mb-4">
                DBT <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros & Cons</Link> is different from a typical <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">pros/cons</Link> list. In DBT, you compare:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li><Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros/Cons</Link> of tolerating distress (coping / not acting on urges)</li>
                <li>vs.</li>
                <li><Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros/Cons</Link> of not tolerating distress (acting on urges / impulsive coping)</li>
              </ul>
              <p className="text-gray-700">
                This helps you step back from urgency and choose the option with better long-term outcomes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-3">Use this when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>an urge feels very strong</li>
                <li>acting on the urge would make things worse long-term</li>
                <li>your brain says "I don't care, I need relief NOW"</li>
                <li>you feel stuck between two paths: cope vs. act impulsively</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: DBT <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros & Cons</Link>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 0 — Name the crisis urge (10 seconds)
                </h3>
                <p className="text-gray-700 mb-2">Finish the sentence:</p>
                <p className="text-gray-700 ml-4 mb-3 font-medium">
                  "My urge right now is to ________."
                </p>
                <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                <p className="text-gray-700 ml-4 text-sm">
                  text repeatedly, lash out, quit suddenly, self-harm, avoid, isolate, use substances, binge, spend, <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link> up.
                </p>
                <p className="text-gray-700 mt-3 text-sm italic">
                  (DBT uses pros/cons specifically for "crisis urges"—strong urges that can lead to long-term harm.)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — Define the two choices (15 seconds)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Write two headings:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Choice A:</strong> Act on the urge (Not coping / Not tolerating distress)</li>
                  <li><strong>Choice B:</strong> Resist the urge (Coping / Tolerating distress)</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  DBT asks you to list pros/cons for both choices.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — Draw the 2x2 grid (20 seconds)
                </h3>
                <p className="text-gray-700 mb-2">Use this grid:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Pros of Acting on the Urge</li>
                  <li>Cons of Acting on the Urge</li>
                  <li>Pros of Resisting the Urge</li>
                  <li>Cons of Resisting the Urge</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  (You'll fill it <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">fast</Link>—imperfect is fine.)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — Fill it in: SHORT-TERM first (1 minute)
                </h3>
                <p className="text-gray-700 mb-3">
                  Start with what your brain cares about right now.
                </p>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">Pros of Acting on the Urge (short-term)</p>
                  <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"Immediate relief"</li>
                    <li>"I feel powerful / in control"</li>
                    <li>"I get attention / validation"</li>
                    <li>"I don't have to feel this"</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">Cons of Acting on the Urge (short-term)</p>
                  <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"More <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link> tonight"</li>
                    <li>"I'll lose my evening to the aftermath"</li>
                    <li>"I'll feel shaky / dysregulated"</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">Pros of Resisting the Urge (short-term)</p>
                  <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"I stay safe"</li>
                    <li>"I avoid making the situation worse"</li>
                    <li>"I prove to myself I can ride the wave"</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 font-medium mb-2">Cons of Resisting the Urge (short-term)</p>
                  <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"It feels awful"</li>
                    <li>"I have to tolerate discomfort"</li>
                    <li>"It takes effort"</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — Now add LONG-TERM consequences (1 minute)
                </h3>
                <p className="text-gray-700 mb-3">
                  This is the part crisis brain tries to skip. DBT explicitly asks you to consider long-term outcomes.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Ask:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"If I do this repeatedly, what happens to my life?"</li>
                  <li>"What happens to my relationships, money, health, self-respect?"</li>
                  <li>"What pattern am I reinforcing?"</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Common long-term cons of acting on urges:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>regret/shame</li>
                  <li>damaged trust</li>
                  <li>lost opportunities</li>
                  <li>stronger future urges (habit loop)</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Common long-term pros of resisting urges:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>more self-trust</li>
                  <li>fewer blowups</li>
                  <li>better long-term stability</li>
                  <li>easier skill use next time</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5 — Circle your "top 2" on each side (30 seconds)
                </h3>
                <p className="text-gray-700 mb-2">Circle:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>the two biggest benefits of coping/tolerating</li>
                  <li>the two biggest costs of acting on the urge</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  This makes your decision clearer when your mind is loud.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 6 — Make the smallest commitment (10 seconds)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Choose one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"For the next 10 minutes, I will not act on this urge."</li>
                  <li>"For the next hour, I will delay."</li>
                  <li>"I will use one distress tolerance skill first."</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  DBT often uses pros/cons to support delay + skill use rather than white-knuckling.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 7 — Rehearse it (this is the DBT secret)
                </h3>
                <p className="text-gray-700 mb-3">
                  DBT materials recommend:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>write your pros/cons before a crisis when possible</li>
                  <li>carry them</li>
                  <li>rehearse them repeatedly</li>
                  <li>when an urge hits, review them and imagine the outcomes</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Quick rehearsal script:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"If I act on the urge, I get ______ now, and I pay ______ later."</li>
                  <li>"If I resist, I feel ______ now, and I get ______ later."</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Example (short)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Urge: "Yell at the instructor and storm out."</p>
                <p className="text-gray-700 mb-2">
                  Pros of acting: immediate release, feels powerful<br />
                  Cons of acting: can't return, shame later, <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link><br />
                  Pros of resisting: stay in class, self-respect, emotions pass<br />
                  Cons of resisting: discomfort, effort
                </p>
                <p className="text-gray-700 mt-3">
                  Result: choose "ride the wave," then distract later if needed. (This matches the DBT example style of comparing coping vs not coping.)
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Practice (so it works when you need it)
                </h3>
                <p className="text-gray-700 mb-3">
                  Practice on low-stakes situations first (DBT recommends rehearsal when you're not highly emotionally invested).
                </p>
                <p className="text-gray-700 mb-2 font-medium">Try one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"<Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros/cons</Link> of going to bed on time"</li>
                  <li>"<Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros/cons</Link> of not sending the third follow-up text"</li>
                  <li>"<Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros/cons</Link> of taking a 10-minute walk instead of doomscrolling"</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  The goal is for <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros/Cons</Link> to become quick enough to do in your head when distress hits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/pros-cons.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
        </a>
        <a
          href="/assets/Worksheets/Pros-cons-practice.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Pros & Cons Practice
        </a>
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

