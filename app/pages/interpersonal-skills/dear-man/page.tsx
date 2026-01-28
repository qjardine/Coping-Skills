'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function DearManPage() {
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
            Objectives Effectiveness: <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> (DBT)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div className="bg-green-50 rounded-lg border border-green-200 p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Do you need help modulating intensity?
              </h2>
              <p className="text-gray-700 mb-4">
                Before DEAR MAN (or before "say no"), DBT often uses an "options for intensity" tool: how hard to ask or say no.
              </p>
              <button
                onClick={() => router.push('/pages/interpersonal-skills/interpersonal-intensity')}
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Yes → Modulating Intensity
              </button>
            </div>

            <div>
              <p className="text-gray-700 mb-4">
                DBT Interpersonal Effectiveness skills are designed to help you get what you need from relationships while respecting yourself and others. When you have a clear objective—asking for help, requesting a change, saying no, negotiating a responsibility—<Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> is the DBT "get the outcome" script.
              </p>
              <p className="text-gray-700 mb-4">
                <strong><Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> = Describe • Express • Assert • Reinforce • (stay) Mindful • Appear confident • Negotiate.</strong>
              </p>
              <p className="text-gray-700">
                DEAR MAN is most effective when paired with <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> (protect the relationship) and <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> (protect self-respect).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-3">Use <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> when you want to:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>ask for a favor or help</li>
                <li>request a change or compromise</li>
                <li>say no and make it stick</li>
                <li>resolve <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link> or get your viewpoint taken seriously</li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                Also: even perfect skills don't guarantee success—some environments won't respond. When it's impossible to get what you want, DBT often shifts to Distress Tolerance and <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 0 — Get clear on your goal (30 seconds)
                </h3>
                <p className="text-gray-700 mb-3 font-medium">Fill in:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                  <li>What I want: ________</li>
                  <li>From who: ________</li>
                  <li>By when: ________</li>
                  <li>My top priority: Objective / Relationship / Self-respect</li>
                </ul>
                <p className="text-gray-700 mb-2">If you feel overwhelmed, consider:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>postponing low-priority demands</li>
                  <li>balancing "wants" vs "shoulds"</li>
                  <li>asking for help instead of doing it alone</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — D: Describe (facts only)
                </h3>
                <p className="text-gray-700 mb-3">Say what happened without judgments.</p>
                <p className="text-gray-700 mb-2 font-medium">Template:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"When ___ happened…"</li>
                  <li>"The facts are ___."</li>
                </ul>
                <p className="text-gray-700 font-medium mb-2">Examples:</p>
                <p className="text-gray-700 ml-4">
                  "You said you'd be home by dinner, and you got home at 11."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — E: Express (your feelings/opinions with "I")
                </h3>
                <p className="text-gray-700 mb-3">Don't assume the other person knows how you feel.</p>
                <p className="text-gray-700 mb-2 font-medium">Template:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"I feel ___ about that."</li>
                  <li>"I'm feeling ___ because ___."</li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  <Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">Tip</Link>: keep it short. Expression is not a debate.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — A: Assert (ask clearly or say no clearly)
                </h3>
                <p className="text-gray-700 mb-3">Be direct. One clear sentence.</p>
                <p className="text-gray-700 mb-2 font-medium">Templates (asking):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"I'm asking you to ___."</li>
                  <li>"I need ___."</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Templates (saying no):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"No, I can't do that."</li>
                  <li>"I'm not available for ___."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — R: Reinforce (why it helps / what they gain)
                </h3>
                <p className="text-gray-700 mb-3">
                  Reinforce increases the chance they say yes by showing benefits.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Template:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"If you do ___, then ___."</li>
                  <li>"It would help because ___."</li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  <Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">Tip</Link>: If you promise a "reward" (gratitude, reciprocation), follow through.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5 — M: Stay Mindful (don't get pulled off track)
                </h3>
                <p className="text-gray-700 mb-3">
                  This is the "broken record" part: calmly repeat your ask or your no.
                </p>
                <p className="text-gray-700 mb-2">Do:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>return to your main point</li>
                  <li>ignore side attacks</li>
                  <li>keep your voice even</li>
                </ul>
                <p className="text-gray-700 font-medium mb-2">Broken record line:</p>
                <p className="text-gray-700 ml-4">
                  "I hear you. And I'm still asking for ___."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 6 — A: Appear confident (even if you feel scared)
                </h3>
                <p className="text-gray-700 mb-3">Confidence helps your message land.</p>
                <p className="text-gray-700 mb-2">Try:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>steady volume (not whispering)</li>
                  <li>upright posture</li>
                  <li>fewer "maybe / I'm not sure / sorry" add-ons</li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  If you're shaking inside, that's okay—"appear confident" is about delivery, not perfection.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 7 — N: Negotiate (be flexible, not vague)
                </h3>
                <p className="text-gray-700 mb-3">
                  Negotiate means: trade, compromise, or brainstorm—without abandoning your goal.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Templates:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I can't do __, but I can do __."</li>
                  <li>"Would __ or __ work better for you?"</li>
                  <li>"What solution would work for both of us?"</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  If the conversation turns toxic: "<Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> inside <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>"
                </h3>
                <p className="text-gray-700 mb-3">
                  If they derail with attacks, interruptions, or refusing to accept your boundary, you can address that directly:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Describe:</strong> "You're raising your voice and interrupting me."</li>
                  <li><strong>Express:</strong> "I'm getting overwhelmed."</li>
                  <li><strong>Assert:</strong> "I'm going to pause this conversation."</li>
                  <li><strong>Reinforce:</strong> "We can talk later when it's calmer."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Practice (recommended)
                </h3>
                <p className="text-gray-700 mb-3">
                  DEAR MAN works best when you write it out and rehearse—especially if you freeze in the moment.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Try:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Write your <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> as 4–7 short sentences</li>
                  <li>Practice out loud once</li>
                  <li>Identify the hardest letter (often Assert or Mindful) and practice that part again</li>
                </ol>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Example: renegotiating chores
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Describe:</strong> "I've been taking out the trash every week since we moved in."</li>
                  <li><strong>Express:</strong> "I don't like doing it—dust aggravates my allergies."</li>
                  <li><strong>Assert:</strong> "I'm not going to take the trash out anymore."</li>
                  <li><strong>Reinforce:</strong> "If you take it out, it will get done the way you prefer."</li>
                  <li><strong>Mindful:</strong> repeat calmly if needed</li>
                  <li><strong>Appear confident:</strong> steady voice, eye contact</li>
                  <li><strong>Negotiate:</strong> "I can trade and do the bathroom instead—would that work?"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/dbt-dear-man.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Interactive Worksheet
        </a>
        <a
          href="/assets/Worksheets/dearman.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          DEAR MAN Worksheet
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

