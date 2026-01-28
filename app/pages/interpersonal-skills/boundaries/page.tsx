'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BackButton } from '@/components/shared/BackButton';

export default function BoundariesPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
            Boundary Building
          </h1>

          <div className="bg-green-50 backdrop-blur-sm rounded-lg border border-green-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Healthy boundaries protect your time, energy, body, emotions, and dignity. They're not walls. They're doors with locks — you decide what comes in, what stays out, and what conditions apply.
              </p>
              <p className="text-gray-700 mb-4">
                If you grew up around chaos, disrespect, or inconsistent caregiving, boundaries can feel "wrong" at first. That makes sense: your nervous system may have learned that saying no = danger, conflict, or abandonment. Boundary work often includes unlearning survival rules while learning skills that keep you safe and connected.
              </p>
              <p className="text-gray-700">
                In DBT, boundary building lives in <Link href="/pages/interpersonal-skills/interpersonal-skills" className="text-blue-600 hover:text-blue-800 underline">Interpersonal Effectiveness</Link>: balancing three goals:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Your objective (what you want)</li>
                <li>The relationship (keeping it workable)</li>
                <li>Self-respect (acting in line with your values)</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                What is a boundary?
              </h2>
              <p className="text-gray-700 mb-3">A boundary is a clear statement of:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>What's okay / not okay</li>
                <li>What you will do if it continues (your action, not controlling theirs)</li>
                <li>What you want instead (if relevant)</li>
              </ul>
              <p className="text-gray-700 mb-2">Boundaries can be:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Physical (touch, space, privacy, rest)</li>
                <li>Emotional (how you'll engage with ridicule, contempt, threats, guilt-trips)</li>
                <li>Time/energy (availability, response time, plans)</li>
                <li>Communication (tone, volume, topics, timing)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step One: Identify your "go / no-go"
              </h2>
              <p className="text-gray-700 mb-2">Use these prompts:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>What behavior leaves me feeling small, unsafe, drained, or resentful?</li>
                <li>What's my "no-go" threshold? (yelling, insults, sexual pressure, constant texting, etc.)</li>
                <li>What do I need to feel safe enough to stay engaged?</li>
                <li>What is my body telling me? (tight chest, dread, shutdown, agitation)</li>
              </ul>
              <p className="text-gray-700 mt-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <strong>Neurodivergent note:</strong> If you're autistic/ADHD, your boundary signals might show up as sensory overload, shutdown, or delayed emotional processing. "I don't know yet" can be a real boundary signal — you may need time before answering.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step Two: Choose the right DBT tools
              </h2>
              <p className="text-gray-700 mb-4">DBT gives you scripts that match different needs:</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Use <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> to ask or say no
                </h3>
                <p className="text-gray-700">
                  This is the classic DBT structure for making a request or setting a limit:
                  Describe, Express, Assert, Reinforce + (stay) Mindful, Appear confident, Negotiate.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Use <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> to protect the relationship
                </h3>
                <p className="text-gray-700">
                  GIVE helps you keep connection while being firm (Gentle, Interested, Validate, Easy manner).
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Use <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> to protect self-respect
                </h3>
                <p className="text-gray-700">
                  FAST supports boundaries that keep you aligned with values (Fair, no Apologies for existing, Stick to values, be Truthful).
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700 font-semibold mb-2">Quick picker:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>If you mainly need a limit/request → <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link></li>
                  <li>If you mainly need warmth + connection → add <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link></li>
                  <li>If you mainly need self-respect + values → add <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link></li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step Three: Write your boundary in a clear, enforceable way
              </h2>
              <p className="text-gray-700 mb-3">A strong boundary is usually:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Specific</li>
                <li>Behavior-focused</li>
                <li>Short</li>
                <li>Actionable</li>
                <li>About what you will do, not a threat</li>
              </ul>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Template (simple)
                </h3>
                <p className="text-gray-700 mb-2 font-mono bg-gray-100 p-3 rounded">
                  "When ___ happens, I feel ___. I need ___. If it keeps happening, I will ___."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Examples
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Tone boundary:</p>
                    <p className="text-gray-700 ml-4">"If you raise your voice or insult me, I'm going to pause the conversation and come back later."</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Time boundary:</p>
                    <p className="text-gray-700 ml-4">"I can talk for 15 minutes tonight. If we need more, we can schedule time tomorrow."</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Texting boundary:</p>
                    <p className="text-gray-700 ml-4">"I don't reply while working. I'll respond after 6."</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Body boundary:</p>
                    <p className="text-gray-700 ml-4">"Don't touch me without asking. If it happens again, I'm stepping away."</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Neurodivergent-friendly version (extra clear):</p>
                    <p className="text-gray-700 ml-4">"I need direct language, one topic at a time, and a pause if I get overwhelmed."</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step Four: Deliver it skillfully (how you say it matters)
              </h2>
              <p className="text-gray-700 mb-2 font-medium">Best practices:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Lead with Describe (facts), not accusations</li>
                <li>Use one sentence for the boundary</li>
                <li>Add one sentence for why (optional)</li>
                <li>Repeat if needed (calm, consistent)</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">If you expect resistance:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Validate their feelings without backing down: "I hear you don't like this. I'm still not available for that."</li>
                <li>Repeat the core line (the "broken record" move) — brief and steady.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step Five: Enforce consistently (the trust part)
              </h2>
              <p className="text-gray-700 mb-3">Boundaries build trust when your actions match your words.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>If you said you'll pause the conversation, pause it</li>
                <li>If you said you'll leave when insults start, leave</li>
                <li>If you said you'll revisit tomorrow, revisit tomorrow</li>
              </ul>
              <p className="text-gray-700 mt-3">
                <strong>Important:</strong> Enforcement isn't punishment — it's self-protection + clarity.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Worksheet prompts
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>My boundary area: (time / body / emotions / communication / space)</li>
                <li>No-go behavior:</li>
                <li>What I need instead:</li>
                <li>My <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> request/limit:</li>
                <li>How I'll use <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> (relationship care):</li>
                <li>How I'll use <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> (self-respect):</li>
                <li>If they resist, my one-line repeat statement:</li>
                <li>What I will do to enforce this (my action):</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                FAQs
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Is setting boundaries "selfish"?</p>
                  <p className="text-gray-700 ml-4">Not in DBT. Boundaries prevent resentment, burnout, and blowups. They support sustainable relationships.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if I freeze and can't say it in the moment?</p>
                  <p className="text-gray-700 ml-4">That's common, especially with trauma or neurodivergence. Use a delayed boundary: "I need time. I'll respond tomorrow." Then write it out and send it later.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if the other person reacts badly?</p>
                  <p className="text-gray-700 ml-4">That's information. You can validate feelings, but you don't have to negotiate your basic safety and dignity. If the relationship repeatedly punishes boundaries, the next boundary might be distance.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Links
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><Link href="/pages/interpersonal-skills/communication-styles" className="text-blue-600 hover:text-blue-800 underline">/communication-styles</Link></li>
                <li><Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">/assertive-communication</Link></li>
                <li><Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">/resistance-and-conflict</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-16 md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-full md:w-auto"
      >
        Return to Landing
      </button>
    </div>
  );
}
