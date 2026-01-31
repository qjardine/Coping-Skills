'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function InterpersonalMindfulnessPage() {
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
            Interpersonal Mindfulness (DBT) — Mindfulness of Others
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Part of being a good friend, loved one, or coworker is being mindful of other people. If you struggle with this, you might feel shame. Remember: if no one modeled these skills for you growing up, they may not come naturally. It's not your fault—and it's learnable.
              </p>
              <p className="text-gray-700 mb-4">
                In DBT, Mindfulness of Others is taught using the Mindfulness "What" skills:
                <strong> Observe → Describe → Participate.</strong>
              </p>
              <p className="text-gray-700">
                And you do those skills with the Mindfulness "How" skills:
                <strong> Nonjudgmentally → One-mindfully → Effectively.</strong>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-3">Use this when you want to:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>listen better and reduce misunderstandings</li>
                <li>stay present instead of planning your reply</li>
                <li><Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> spiraling into mind-reading ("they must think…")</li>
                <li>be more connected in conversations, meetings, or group settings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: Mindfulness of Others
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 0 — Set a 2-minute intention
                </h3>
                <p className="text-gray-700 mb-3">
                  Pick one interaction happening now (text, call, in-person, meeting).
                </p>
                <p className="text-gray-700 mb-3">
                  Say silently: "For 2 minutes, I'm practicing being present with them."
                </p>
                <p className="text-gray-700">
                  If you're overwhelmed, take one slow breath out first (longer exhale), then begin.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — OBSERVE (curiosity, not performance)
                </h3>
                <p className="text-gray-700 mb-4">
                  DBT "Observe" means noticing what's happening without grabbing it, judging it, or rehearsing.
                </p>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">1A) Stop multitasking (10 seconds)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Put the phone down / pause scrolling</li>
                    <li>Close extra tabs</li>
                    <li>Turn your body toward them (if in person)</li>
                  </ul>
                  <p className="text-gray-700 mt-2 text-sm italic">
                    This supports being one-mindful (one thing at a time).
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">1B) Notice "what's here" (30–60 seconds)</p>
                  <p className="text-gray-700 mb-2">Observe with interest:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>tone of voice / pace</li>
                    <li>facial expression / posture</li>
                    <li>what they're actually saying (not what you fear it means)</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">1C) Catch the "reply planning" loop (10 seconds)</p>
                  <p className="text-gray-700 mb-2">
                    If you notice yourself planning your response instead of listening, label it: "planning"
                  </p>
                  <p className="text-gray-700">
                    Then return to: "listening."
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-medium mb-2">1D) Notice judgments and release them (10 seconds)</p>
                  <p className="text-gray-700 mb-2">
                    If a judgment shows up ("they're being dramatic"), label: "judging"
                  </p>
                  <p className="text-gray-700">
                    Then return to neutral noticing. (That's nonjudgmental practice.)
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — DESCRIBE (facts before assumptions)
                </h3>
                <p className="text-gray-700 mb-4">
                  DBT "Describe" means putting words on what you observe in a neutral, factual way.
                </p>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">2A) Replace judgment words with descriptive words (30 seconds)</p>
                  <p className="text-gray-700 mb-2">Try converting:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"They're rude" → "They interrupted twice."</li>
                    <li>"They don't care" → "They haven't responded yet."</li>
                    <li>"They're attacking me" → "Their voice got louder and they said ___."</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">2B) Don't mind-read (20 seconds)</p>
                  <p className="text-gray-700 mb-2">
                    If you catch: "They think I'm annoying" / "They're doing this on purpose," say: "That's an assumption."
                  </p>
                  <p className="text-gray-700 text-sm italic">
                    DBT Mindfulness of Others specifically recommends avoiding assumptions about what others think and avoiding motive-guessing unless you have strong evidence.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-medium mb-2">2C) <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">Give</Link> the benefit of the doubt (20 seconds)</p>
                  <p className="text-gray-700 mb-2">Try one:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"There could be another explanation."</li>
                    <li>"I don't know their whole context."</li>
                    <li>"I can ask instead of guessing."</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — PARTICIPATE (show up fully)
                </h3>
                <p className="text-gray-700 mb-4">
                  DBT "Participate" means entering the interaction fully instead of staying half-in/half-out.
                </p>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">3A) Do the interaction with your whole attention (30 seconds)</p>
                  <p className="text-gray-700 mb-2">Pick one:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>maintain comfortable eye contact (if appropriate)</li>
                    <li>nod / short "mmhmm"</li>
                    <li>put your phone away</li>
                    <li>reflect one line: "That sounds stressful."</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">3B) Go with the flow (30 seconds)</p>
                  <p className="text-gray-700 mb-2">Let the moment be the moment.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Don't force control</li>
                    <li>Don't force the "perfect" reply</li>
                  </ul>
                  <p className="text-gray-700 mt-2 text-sm italic">
                    Mindfulness of Others includes "go with the flow; relinquish control."
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-medium mb-2">3C) In groups: become "one with the conversation" (30–60 seconds)</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>listen for the shared topic</li>
                    <li>add one small contribution</li>
                    <li>ask one curious question</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Quick repair (when you notice you weren't mindful)
                </h3>
                <p className="text-gray-700 mb-3">If you drift, judge, or get defensive:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Pause (one breath)</li>
                  <li>Name it: "I lost the thread."</li>
                  <li>Return: "Can you say that last part again?"</li>
                </ol>
                <p className="text-gray-700 mt-3">
                  The return is the skill.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Tiny daily practice (2 minutes)
                </h3>
                <p className="text-gray-700 mb-3">Choose one conversation per day:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>30s Observe (no multitasking)</li>
                  <li>30s Describe (facts, not mind-reading)</li>
                  <li>60s Participate (one supportive response)</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Over time, this makes relationships steadier—because people feel seen, and you stay grounded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/int-mindfulness.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >Try the Worksheet (pdf)</a>
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

