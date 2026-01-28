'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function TurningMindPage() {
  const router = useRouter();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.tooltip-container') && !target.closest('.tooltip-button')) {
        setActiveTooltip(null);
      }
    };

    if (activeTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeTooltip]);

  const toggleTooltip = ({ tooltipId }: { tooltipId: string }) => {
    if (activeTooltip === tooltipId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };

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
          <h1 className="text-4xl font-bold mb-8 text-center text-orange-800">
            <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link>
          </h1>

          <div className="bg-orange-50 backdrop-blur-sm rounded-lg border border-orange-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Turning the Mind is a DBT distress tolerance skill that helps you do <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link> on purpose—especially when your mind keeps sliding back into "this shouldn't be happening," "it's not fair," "I can't stand this," or "I refuse."
              </p>
              <p className="text-gray-700 mb-4">
                Radical Acceptance isn't a one-time decision. For most of us, it's a repeat choice, made over and over again—sometimes dozens of times in a day. <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link> is what you do the moment you notice you've drifted away from acceptance, and you gently guide yourself back.
              </p>
              <p className="text-gray-700">
                A metaphor that helps: imagine you're riding a horse. You hold the reins and pick the path (acceptance), but the horse (your mind) wanders. You don't punish the horse. You notice, and you guide it back—again and again.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                What "<Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link>" Actually Means
              </h2>
              <p className="text-gray-700 mb-4">
                Turning the Mind is choosing acceptance when your mind wants to fight reality. DBT treats this like a fork in the road:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li><strong>Acceptance road:</strong> "This is happening. I don't like it. I can still respond wisely."</li>
                <li><strong>Non-acceptance road:</strong> "This can't be happening. It must <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link>. I won't tolerate this."</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link> is the internal pivot that says: "I'm choosing the acceptance road, again."
              </p>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <strong>Important:</strong> Acceptance is not approval. Accepting reality means acknowledging what's already true—without pretending it's okay, fair, or wanted. It simply stops the extra suffering that comes from arguing with what exists.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                When to Use <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link>
              </h2>
              <p className="text-gray-700 mb-3">Use this skill when you notice:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>You're stuck in "no, not this" energy</li>
                <li>You keep replaying why it's unfair or how it should have gone</li>
                <li>You're ruminating on the same reality you can't change right now</li>
                <li>You can't move into problem-solving because your mind is still fighting facts</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Common situations:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Breakups, rejection, grief, chronic illness, disability flare-ups</li>
                <li>Trauma reminders (when you're safe enough to practice acceptance, not forcing it)</li>
                <li>Bureaucracy / waiting / delays / "this is taking too long"</li>
                <li>People being who they are (even when it hurts)</li>
                <li>Any moment you're spending energy on "it shouldn't be" instead of "what now?"</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                When Not to Use <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link>
              </h2>
              <p className="text-gray-700 mb-3">Turning the Mind is not for:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Immediate danger or safety emergencies (use crisis/safety supports first)</li>
                <li>Situations where acceptance would be used to stay in abuse or tolerate ongoing harm</li>
                <li>Moments when you need information, boundaries, or action and you're using "acceptance" to avoid the hard conversation</li>
              </ul>
              <p className="text-gray-700 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <strong>A helpful reframe:</strong> Accept reality first → then choose effective action. Acceptance isn't "do nothing." It's "<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> fighting facts so you can act wisely."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                How to Do <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link> (Step-by-Step)
              </h2>
              <p className="text-gray-700 mb-4">Use this mini-sequence:</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1: Notice Non-Acceptance
                </h3>
                <p className="text-gray-700 mb-2">Look for signals like:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I hate this / I can't / I won't"</li>
                  <li>Tight jaw, clenching, bracing, spiraling thoughts</li>
                  <li>Rehearsing arguments with reality</li>
                </ul>
                <p className="text-gray-700 mt-3 ml-4 font-medium">Name it gently: "I'm fighting reality."</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2: Name What You're Being Asked to Accept
                </h3>
                <p className="text-gray-700 mb-2">Be concrete:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I didn't get the job."</li>
                  <li>"They said no."</li>
                  <li>"My body is in a flare today."</li>
                  <li>"This happened, and I can't undo it."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3: Make the Inner Choice
                </h3>
                <p className="text-gray-700 mb-2">Say (out loud or silently):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I choose to accept this moment as it is."</li>
                  <li>or "I don't like it, and I accept it."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4: Turn Again (and Again)
                </h3>
                <p className="text-gray-700 mb-2">Your mind will drift. That's normal. Each time you notice you're back in "nope," you simply do the turn again:</p>
                <p className="text-gray-700 ml-4 font-medium">Notice → Name → Choose acceptance.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5: Add a Body Anchor (Optional but Powerful)
                </h3>
                <p className="text-gray-700 mb-2">Pair Turning the Mind with a physical cue that tells your nervous system "soften":</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Willing hands (palms up, unclench)</li>
                  <li>A gentle <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link></li>
                  <li>One slow exhale</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  These are often taught alongside acceptance skills because the body can "vote" for acceptance even when the mind resists.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                Tiny Practice: The "Minor Situation" Reps
              </h2>
              <p className="text-gray-700 mb-3">Pick something small (traffic, an annoying email, a mess in the kitchen).</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Notice resistance: "ugh no."</li>
                <li>Use a mantra: "This is what's here."</li>
                <li>Open hands, soften jaw.</li>
                <li>Turn the mind back to acceptance.</li>
                <li>Repeat if you drift.</li>
              </ol>
              <p className="text-gray-700 mt-3 text-sm italic">
                This is how you train it—like reps at the gym—so it's more available when things are big.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                Real-Life Example
              </h2>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700 mb-2 font-medium">Reality: Your friend cancels last minute.</p>
                <p className="text-gray-700 mb-2"><strong>Non-acceptance loop:</strong> "They don't care. This always happens. I can't stand it."</p>
                <p className="text-gray-700 mb-2"><strong><Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link>:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I'm fighting reality."</li>
                  <li>"They canceled. I hate it. It's true."</li>
                  <li>"I choose acceptance in this moment."</li>
                  <li>Then choose effective action: <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">self-soothe</Link>, ask for a reschedule, or set a boundary later—without spiraling first.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                FAQs
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"If I accept this, won't I stop trying?"</p>
                  <p className="text-gray-700 ml-4">No. Acceptance removes the stuckness so you can choose your next step with clarity.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"I keep <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">turning the mind</Link> and it keeps coming back."</p>
                  <p className="text-gray-700 ml-4">That's the skill. Turning the Mind is often a repeat practice, not a one-and-done insight.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"What if I'm not ready to accept?"</p>
                  <p className="text-gray-700 ml-4">That's okay. Start with <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">willingness</Link>: "I'm not ready, and I'm willing to practice one small turn."</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Worksheets & Resources
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><a href="/assets/Worksheets/turning-mind.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline"><Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link> (PDF)</a></li>
                <li>Related skills that pair well:</li>
                <li className="ml-8"><Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link></li>
                <li className="ml-8"><Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half Smile + Willing Hands</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/turning-mind.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
        </a>
        <a
          href="/assets/Worksheets/turning-willingness.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Willingness Worksheet
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
