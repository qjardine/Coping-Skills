'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ConflictPage() {
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
            Interpersonal Effectiveness: Resistance and Conflict
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Sometimes you meet resistance even when you're using DBT skills correctly. The other person may feel threatened, misunderstood, overwhelmed, or simply unwilling. Conflict can also spike your own emotion mind—making it harder to stay effective.
              </p>
              <p className="text-gray-700">
                This page adds more DBT tools for resistance/conflict (beyond "just explain better"), and includes neurodivergence-aware options (processing time, sensory overload, literal communication, shutdown/meltdown risk, rejection sensitivity, etc.). When you plan for resistance, you're less likely to escalate, over-explain, or collapse.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2. Core Principle: Two Goals at Once (Dialectical Thinking)
              </h2>
              <p className="text-gray-700 mb-3">
                In conflict, DBT asks you to hold two truths:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>My needs matter.</li>
                <li>Their needs matter too.</li>
              </ul>
              <p className="text-gray-700 mb-2">You're aiming for one (or more) of these priorities:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Objective effectiveness (get what you want)</li>
                <li>Relationship effectiveness (keep/strengthen the relationship)</li>
                <li>Self-respect effectiveness (act in line with your values)</li>
              </ol>
              <p className="text-gray-700 font-semibold">
                If you don't choose your priority, emotion mind will choose for you.
              </p>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mt-3">
                <p className="text-gray-700 font-semibold mb-2">Quick <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> prompt:</p>
                <p className="text-gray-700">
                  "What matters most here: the outcome, the relationship, or my self-respect?"
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3. Skill Set for Resistance
              </h2>
              <p className="text-gray-700 mb-3">
                Use the skills below like a menu. You don't need all of them—pick what fits.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Skill 1: Validate First (Without Surrendering)
                </h3>
                <p className="text-gray-700 mb-3">
                  Resistance often drops when someone feels heard. Validation is not agreement; it's communicating that their experience makes sense from their perspective.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Script:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"I can see why you'd feel ___."</li>
                  <li>"It makes sense that you're worried about ___."</li>
                  <li>"I get that this feels like ___ to you."</li>
                </ul>
                <p className="text-gray-700">Then:</p>
                <p className="text-gray-700 ml-4">"And my need is ___."</p>
                <p className="text-gray-700 mt-3 text-sm italic">
                  This aligns with DBT's emphasis on validation as a relationship-stabilizer in conflict.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Skill 2: The Broken Record (Calm Repetition)
                </h3>
                <p className="text-gray-700 mb-3">
                  When the other person floods you with arguments, derailments, or "but what about…," choose one short sentence and repeat it with slight variations—calm, steady, no extra defending.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Example sentence:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I'm not available for yelling. I can talk when it's calmer."</li>
                  <li>"I need an answer by Friday."</li>
                  <li>"I'm not able to lend money."</li>
                </ul>
                <p className="text-gray-700 mt-3 font-semibold">
                  Key rule: repeating is not rudeness; it's structure.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Skill 3: Ask for Specifics (Turn Vague Into Concrete)
                </h3>
                <p className="text-gray-700 mb-3">
                  Criticism and resistance often hide a specific fear or need.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Prompts:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"What part of this is bothering you most?"</li>
                  <li>"What would 'better' look like to you?"</li>
                  <li>"When you say 'you always,' can you name one example from this week?"</li>
                  <li>"What are you worried will happen if we do it my way?"</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Specifics reduce spirals and help you problem-solve.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Skill 4: <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> Troubleshooting
                </h3>
                <p className="text-gray-700 mb-2">If your request isn't landing, do a quick audit:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Describe facts (not interpretations)</li>
                  <li>Express one clear feeling</li>
                  <li>Assert one clear ask</li>
                  <li>Reinforce benefit (to them/relationship)</li>
                  <li>Mindful (don't get pulled off topic)</li>
                  <li>Appear confident</li>
                  <li>Negotiate (trade-offs, options)</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  (If you already have <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> elsewhere, link to it here as the "main request skill.")
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Skill 5: Relationship Stabilizers (<Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>)
                </h3>
                <p className="text-gray-700 mb-3">
                  When resistance is high, increase warmth without giving up your boundary:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Gentle (no attacks/threats)</li>
                  <li>Interested (curious listening)</li>
                  <li>Validate (their feelings/logic)</li>
                  <li>Easy manner (reduce intensity when possible)</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> is a classic DBT set for keeping the relationship intact during difficult conversations.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Skill 6: Self-Respect Anchors (<Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>)
                </h3>
                <p className="text-gray-700 mb-3">
                  If you tend to fold, people-<Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">please</Link>, or over-apologize under pressure:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Fair (to self and other)</li>
                  <li>(No) Apologies for existing/asking (apologize only for actual harm)</li>
                  <li>Stick to values</li>
                  <li>Truthful (no exaggeration, no martyrdom)</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  FAST protects you from "agreeing to stop the conflict" and then resenting it later.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Skill 7: Time-Outs and Repair (Conflict Hygiene)
                </h3>
                <p className="text-gray-700 mb-3">
                  When arousal is too high, the skill is pause, not "win."
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"I'm getting flooded. I need 20 minutes. I will come back at 7:30."</li>
                  <li>"I want to finish this, and I want us to be okay. Let's take a reset."</li>
                </ul>
                <p className="text-gray-700 font-semibold">
                  Important: Always name a return time if you can. That preserves trust.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4. Neurodivergence Notes: Make Conflict More Accessible
              </h2>
              <p className="text-gray-700 mb-4">
                Neurodivergent conflict often fails because of mismatched processing, not bad intent. Research supports that misunderstandings can be mutual between neurotypes ("double empathy"), meaning both sides may need to adapt—not just one person.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Common friction points (and fixes)
                </h3>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">1) Processing time / shutdown risk</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Use written bullet points (text/email/shared note)</li>
                    <li>Ask: "Do you want to respond now, or after you've had time to think?"</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">2) Sensory overload → escalation</p>
                  <p className="text-gray-700 mb-2 ml-4 text-sm italic">
                    High input (noise, light, crowding) can make emotion regulation harder; sensory overload is a real driver of stress reactions for many autistic adults.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Move locations (car, quieter room)</li>
                    <li>Lower stimulation (dim lights, reduce background noise)</li>
                    <li>Shorten the conversation into "rounds" (5–10 minutes)</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">3) Literal language / ambiguity</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Swap "You never / You always" for timestamps and examples</li>
                    <li>Define vague words ("respect," "support," "soon") into behaviors</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">4) Rejection sensitivity / threat response</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Lead with reassurance: "I'm not leaving. I'm trying to fix this."</li>
                    <li>Use validation early (before problem-solving)</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">5) Masking & fatigue</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Schedule conflict talks earlier in the day if possible</li>
                    <li>Agree on a "minimum effective conversation" (what must be decided today vs later)</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Accessibility agreement (highly recommended):
                </h3>
                <p className="text-gray-700 font-semibold">
                  "When either of us says 'pause,' we <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link>. When either of us says 'clarify,' we define terms without judgment."
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5. Practice Worksheet
              </h2>
              <p className="text-gray-700 mb-2">Use this after a real conflict (or to rehearse one):</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Situation (facts):</li>
                <li>My goal: (objective / relationship / self-respect)</li>
                <li>What resistance looked like: (deflecting, stonewalling, yelling, sarcasm, etc.)</li>
                <li>Skills I used: (validate, broken record, ask specifics, <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>, <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>, time-out)</li>
                <li>What worked even a little:</li>
                <li>What I'll try next time (one change):</li>
                <li>Repair step (if needed): (apology for harm, clarification, reaffirm boundary, reconnection)</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6. Real-Life Example Script (Putting It Together)
              </h2>
              <p className="text-gray-700 mb-3">
                Scenario: You ask a housemate to stop bringing up a conflict at midnight. They resist: "You're so controlling. I can't talk to you at all."
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">You (Validate + Boundary):</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"I get that it feels controlling to be told when to talk."</li>
                    <li>"And I'm not available for conflict conversations after 10pm."</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">You (Ask specifics):</p>
                  <p className="text-gray-700 ml-4">"What part feels most unfair—time limits, or the topic itself?"</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">You (Broken record):</p>
                  <p className="text-gray-700 ml-4">"I can talk tomorrow at 6, or Saturday at noon. Not tonight."</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">You (GIVE):</p>
                  <p className="text-gray-700 ml-4">"I do want to hear you. I just need it at a time I can stay regulated."</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">You (FAST):</p>
                  <p className="text-gray-700 ml-4">"I'm being fair to both of us. I'm not apologizing for needing sleep."</p>
                </div>
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

