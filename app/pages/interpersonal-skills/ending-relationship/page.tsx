'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function EndingRelationshipsPage() {
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
            Ending a Relationship (DBT Interpersonal Effectiveness)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                DBT Interpersonal Effectiveness skills help you get what you need in relationships while respecting yourself and others—especially when emotions are intense.
              </p>
              <p className="text-gray-700">
                Not all relationships go on forever. Some fade naturally. Others you may need to end on purpose. That can be scary, griefy, or triggering—and it can also be a brave way of protecting your mental health, values, and goals.
              </p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 0 — Safety first (read this before anything else)
              </h2>
              <p className="text-gray-700 mb-4">
                If there is abuse, stalking, threats, coercion, or you fear escalation, prioritize safety planning over a breakup conversation. DBT pages that teach "<Link href="/pages/interpersonal-skills/ending-relationship" className="text-blue-600 hover:text-blue-800 underline">ending relationships</Link>" explicitly say safety first and recommend contacting domestic violence resources for planning.
              </p>
              <p className="text-gray-700 mb-2 font-medium">U.S. National Domestic Violence Hotline:</p>
              <p className="text-gray-700 mb-4">
                Call 1-800-799-SAFE (7233) or text START to 88788 for confidential support.
              </p>
              <p className="text-gray-700 mb-2 font-medium">International help:</p>
              <p className="text-gray-700 mb-4">
                Hot Peach Pages has an international directory of local agencies by country.
              </p>
              <p className="text-gray-700 text-sm">
                If your internet use might be monitored, the Hotline warns it may be hard to erase browsing history completely—consider a safer device/network.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1 — Name what kind of relationship this is (30 seconds)
              </h2>
              <p className="text-gray-700 mb-4">
                DBT often distinguishes between relationships that are:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Destructive:</strong> damaging your quality of life (happiness, self-esteem, body, safety).</li>
                <li><strong>Interfering:</strong> blocking important goals, responsibilities, or other relationships.</li>
              </ul>
              <p className="text-gray-700 font-medium mb-2">Pick one:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>"This is mostly destructive."</li>
                <li>"This is mostly interfering."</li>
                <li>"It's both."</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2 — Decide from <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> (not panic, not guilt) (1 minute)
              </h2>
              <p className="text-gray-700 mb-4 font-semibold">
                ALWAYS decide to end a relationship from <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> (the balance of emotion + reason).
              </p>
              <p className="text-gray-700 mb-3 font-medium">Quick Wise Mind check:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Emotion Mind says: "____"</li>
                <li>Reason Mind says: "____"</li>
                <li><Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> says: "Given my values and safety, the next right step is ____."</li>
              </ul>
              <p className="text-gray-700">
                If you cannot access <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> right now, do Distress Tolerance first (<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>/<Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>), then come back.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3 — If it might be repairable, try repair first (optional)
              </h2>
              <p className="text-gray-700 mb-4">
                If it is important to you and safe, DBT suggests using <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link> to repair the relationship before ending it.
              </p>
              <p className="text-gray-700 mb-3 font-medium">Ask:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>"Is there one specific change that would make this workable?"</li>
                <li>"Have I clearly asked for that change?"</li>
                <li>"Is the pattern likely to change?"</li>
              </ul>
              <p className="text-gray-700">
                If the answer is "no," or it's unsafe, move on.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4 — <Link href="/pages/emotional-regulation/cope-ahead" className="text-blue-600 hover:text-blue-800 underline">Cope Ahead</Link>: rehearse the ending (2–5 minutes)
              </h2>
              <p className="text-gray-700 mb-4">
                DBT recommends <Link href="/pages/emotional-regulation/cope-ahead" className="text-blue-600 hover:text-blue-800 underline">Cope Ahead</Link> to practice the conversation before you do it.
              </p>
              <p className="text-gray-700 mb-3 font-medium">Do this quickly:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Imagine the conversation.</li>
                <li>Imagine your body sensations (tight chest, shaking, numb).</li>
                <li>Picture yourself using the script below.</li>
                <li>Picture them reacting well and reacting poorly.</li>
                <li>Picture yourself staying calm and leaving safely.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 5 — Plan the logistics (this is part of safety)
              </h2>
              <p className="text-gray-700 mb-3 font-medium">Choose what's safest and most effective:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Where:</strong> public place, phone call, text, or with support nearby</li>
                <li><strong>When:</strong> not during a fight; not when you're sleep-deprived</li>
                <li><strong>Exit plan:</strong> "I can leave / hang up / <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> replying after I say my piece."</li>
                <li><strong>Support:</strong> tell a trusted person; plan what you'll do right after</li>
              </ul>
              <p className="text-gray-700">
                If you share housing/finances/pets, plan practical next steps (keys, accounts, belongings) before the talk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 6 — Have the conversation using DBT scripts
              </h2>
              <p className="text-gray-700 mb-4">
                DBT pages about <Link href="/pages/interpersonal-skills/ending-relationship" className="text-blue-600 hover:text-blue-800 underline">ending relationships</Link> recommend being direct and using <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> + <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> + <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  6A) <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> (be clear and direct)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  <li><strong>D — Describe (facts):</strong> "Over the last ___, we've had ___."</li>
                  <li><strong>E — Express:</strong> "I feel ___."</li>
                  <li><strong>A — Assert:</strong> "I'm ending this relationship." / "I'm not continuing contact."</li>
                  <li><strong>R — Reinforce:</strong> "This is what I need for my health/safety/goals."</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  <li><strong>M — Mindful:</strong> repeat your key line if pulled into debate.</li>
                  <li><strong>A — Appear confident:</strong> steady tone, fewer words.</li>
                  <li><strong>N — Negotiate (only if you want):</strong> boundaries, logistics—not the decision.</li>
                </ul>
                <p className="text-gray-700 font-medium mb-2">Simple ending script (gender neutral)</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I've thought about this carefully. I'm ending this relationship."</li>
                  <li>"I'm not available to keep working on it."</li>
                  <li>"I'm going to take space now. <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">Please</Link> don't contact me for __."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  6B) <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> (reduce unnecessary harm)
                </h3>
                <p className="text-gray-700 mb-3">
                  Use <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> to stay respectful (especially if it's not abusive):
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Gentle:</strong> no insults or threats</li>
                  <li><strong>Interested:</strong> listen briefly if you choose</li>
                  <li><strong>Validate:</strong> "I hear this hurts." (You can validate without changing your decision.)</li>
                  <li><strong>Easy manner:</strong> calm tone, simple words</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  6C) <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> (protect your self-respect)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Fair:</strong> to you and them</li>
                  <li><strong>No Apologies:</strong> don't apologize for having needs or ending it</li>
                  <li><strong>Stick to values:</strong> don't trade your safety/values for peace</li>
                  <li><strong>Truthful:</strong> no exaggerating, no fake promises</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 7 — After the conversation: boundaries + aftercare (5 minutes)
              </h2>
              <p className="text-gray-700 mb-4">
                Ending relationships can trigger grief, fear, or second-guessing.
              </p>
              <p className="text-gray-700 mb-3 font-semibold">Do two things:</p>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  7A) Set one boundary
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Pick one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"No contact for ___"</li>
                  <li>"Only logistics by text/email"</li>
                  <li>"Block/mute if needed for safety or healing"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  7B) Do one grounding / care action
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>water / food / shower</li>
                  <li>text a safe friend</li>
                  <li>short walk</li>
                  <li>journal: "Why I ended it" (for future you)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 8 — If letting go is hard: <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">Opposite Action</Link> for love (optional)
              </h2>
              <p className="text-gray-700 mb-4">
                DBT ending-relationship guidance often suggests practicing <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">Opposite Action</Link> for love when you're struggling to let go.
              </p>
              <p className="text-gray-700 mb-2">That can look like:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>reduce contact instead of reaching out</li>
                <li>remove reminders for now</li>
                <li>do value-based activities that rebuild your life</li>
              </ul>
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

