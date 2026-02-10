'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CognitiveDistortionsPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Cognitive Distortions
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            (Thinking Traps)
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Cognitive distortions are predictable "thinking traps"—habits your mind uses (especially under stress) that can make situations feel more threatening, hopeless, or personal than they really are. CBT treats them as patterns to notice and test, not as "the truth."
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 font-semibold">Use this page when:</p>
                <p className="text-gray-700 mt-2">
                  you're spiraling, stuck in shame, can't stop spinning, or your brain is doing "worst-case math."
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Spot the pattern (the goal isn't "positive thinking")
              </h2>
              
              <p className="text-gray-700 mb-4">
                CBT doesn't require you to force optimism. It asks: Is this thought accurate, complete, and helpful? If it's distorted, you practice generating a more balanced thought and/or test it with a small action.
              </p>

              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <p className="text-gray-700 mb-2 font-semibold">Two key rules:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>A thought can be partly true and still distorted (missing context, extreme, unfair to you).</li>
                  <li>You can have more than one distortion at once (that's normal).</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) The 10 cognitive distortions
              </h2>

              <div className="space-y-4">
                {/* Distortion 1 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    1. All-or-Nothing Thinking
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Black/white, perfect/failure.
                  </p>
                  <p className="text-gray-600 italic">
                    Example: "If I can't do it perfectly, it doesn't count."
                  </p>
                </div>

                {/* Distortion 2 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    2. Overgeneralization
                  </h3>
                  <p className="text-gray-700 mb-2">
                    One bad event becomes a never-ending pattern ("always/never").
                  </p>
                  <p className="text-gray-600 italic">
                    Example: "This went badly—things always go badly."
                  </p>
                </div>

                {/* Distortion 3 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    3. Mental Filter
                  </h3>
                  <p className="text-gray-700 mb-2">
                    You zoom in on one negative detail and ignore the rest.
                  </p>
                  <p className="text-gray-600 italic">
                    Example: Ten compliments + one critique = your brain only keeps the critique.
                  </p>
                </div>

                {/* Distortion 4 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    4. Discounting the Positive
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Wins "don't count," are "luck," or "anyone could do that."
                  </p>
                  <p className="text-gray-600 italic">
                    Example: "They're just being nice."
                  </p>
                </div>

                {/* Distortion 5 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    5. Jumping to Conclusions
                  </h3>
                  <p className="text-gray-700 mb-2">
                    You assume the worst without solid evidence.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 italic ml-4">
                    <li>Mind-reading: "They're mad at me."</li>
                    <li>Fortune-telling: "This will go badly."</li>
                  </ul>
                </div>

                {/* Distortion 6 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    6. Magnification (or Minimizing)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Blow up problems/threats or shrink strengths/wins (the "binocular trick").
                  </p>
                  <p className="text-gray-600 italic">
                    Example: "This mistake ruins everything" / "That success was nothing."
                  </p>
                </div>

                {/* Distortion 7 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    7. Emotional Reasoning
                  </h3>
                  <p className="text-gray-700 mb-2">
                    "If I feel it, it must be true."
                  </p>
                  <p className="text-gray-600 italic">
                    Example: "I feel guilty, so I must be a bad person."
                  </p>
                </div>

                {/* Distortion 8 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    8. "Should" Statements
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Rigid rules for yourself/others: "should," "must," "ought," "have to."
                  </p>
                  <p className="text-gray-600 italic">
                    Often creates resentment, rebellion, or shutdown.
                  </p>
                </div>

                {/* Distortion 9 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    9. Labeling
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Turning a mistake into an identity: "I'm a loser."
                  </p>
                  <p className="text-gray-600 italic">
                    (Instead of: "I did a thing I regret.")
                  </p>
                </div>

                {/* Distortion 10 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    10. Personalization & Blame
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Personalization:</strong> Blaming yourself for things not fully under your control.</li>
                    <li><strong>Blame:</strong> Only blaming others/circumstances and missing your own leverage points.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Fast reframes that actually work
              </h2>
              
              <p className="text-gray-700 mb-4">
                These are "first-aid" moves—quick enough to do while activated.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700">
                    <strong className="text-green-700">A) Name it:</strong> "Ah—mind reading + magnification." Naming the distortion creates distance.
                  </p>
                </div>

                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-700">B) Make it specific:</strong> Swap global claims for specifics:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"Always" → "This time / lately / in this situation"</li>
                    <li>"Everyone" → "Two people / some people"</li>
                  </ul>
                </div>

                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700">
                    <strong className="text-green-700">C) Use a gentler rule:</strong> Turn "should" into a preference: "I should never mess up" → "I want to do well, and mistakes happen."
                  </p>
                </div>

                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700">
                    <strong className="text-green-700">D) Add missing information:</strong> Ask: "What evidence am I ignoring?" (Especially for mental filter / discounting positive.)
                  </p>
                </div>

                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700">
                    <strong className="text-green-700">E) Shift from identity to behavior:</strong> "I'm a failure" → "That plan didn't work. I can try a smaller step."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) The 3-minute "Catch → Check → Change" script
              </h2>
              
              <p className="text-gray-700 mb-4">
                This is the simplest CBT flow (and matches common NHS self-help CBT steps).
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                  <h3 className="font-bold text-gray-800 mb-2">Catch (30 sec):</h3>
                  <p className="text-gray-700">
                    What's the situation? What thought hit hardest?
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                  <h3 className="font-bold text-gray-800 mb-2">Check (90 sec):</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Which distortion(s) might be here?</li>
                    <li>What are 2 facts that support the thought?</li>
                    <li>What are 2 facts that don't support it (or a more neutral explanation)?</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                  <h3 className="font-bold text-gray-800 mb-2">Change (60 sec):</h3>
                  <p className="text-gray-700 mb-2">
                    Write a balanced thought that's believable (not cheerleading), then choose one tiny action:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>text for clarification</li>
                    <li>do the task for 5 minutes</li>
                    <li>ask for reassurance once then stop</li>
                    <li>take a grounding break and return</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) When thoughts feel true (especially emotional reasoning)
              </h2>
              
              <p className="text-gray-700 mb-4">
                Emotional reasoning is tricky because feelings are real—but feelings aren't proof.
              </p>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 mb-2 font-semibold">Try:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>"My body is signaling danger. That doesn't mean there is danger."</li>
                  <li>"What would I conclude if I felt 20% calmer?"</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  (Then use behavioral experiments: test the prediction with a small, safe action.)
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Mini worksheet (copy/paste)
              </h2>

              <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-green-400 space-y-3 font-mono text-sm">
                <p className="text-gray-700">Situation: <span className="text-gray-500 italic">_______________________________</span></p>
                <p className="text-gray-700">Emotion (0–100): <span className="text-gray-500 italic">_______________________________</span></p>
                <p className="text-gray-700">Automatic thought: <span className="text-gray-500 italic">_______________________________</span></p>
                <p className="text-gray-700">Distortions spotted: <span className="text-gray-500 italic">_______________________________</span></p>
                <p className="text-gray-700">Evidence for: <span className="text-gray-500 italic">_______________________________</span></p>
                <p className="text-gray-700">Evidence against / other explanations: <span className="text-gray-500 italic">_______________________________</span></p>
                <p className="text-gray-700">Balanced thought: <span className="text-gray-500 italic">_______________________________</span></p>
                <p className="text-gray-700">Action I'll take (tiny): <span className="text-gray-500 italic">_______________________________</span></p>
                <p className="text-gray-700">Emotion after (0–100): <span className="text-gray-500 italic">_______________________________</span></p>
              </div>
            </div>

            {/* Related Resources */}
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/thought-record" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thought Records</p>
                  <p className="text-gray-600 text-sm">Capture and challenge thoughts</p>
                </Link>
                <Link href="/pages/cbt/cognitive-restructuring" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Restructuring</p>
                  <p className="text-gray-600 text-sm">Challenge and reframe thoughts</p>
                </Link>
                <Link href="/pages/cbt/behavioral-experiments" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Behavioral Experiments</p>
                  <p className="text-gray-600 text-sm">Test your predictions</p>
                </Link>
                <Link href="/pages/cbt/core-beliefs" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Core Beliefs</p>
                  <p className="text-gray-600 text-sm">Underlying thought patterns</p>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center pt-4">
              <Link
                href="/pages/cbt"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                ← Back to CBT Hub
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
