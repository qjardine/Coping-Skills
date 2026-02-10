'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BackButton } from '@/components/shared/BackButton';
import Image from 'next/image';

export default function CBTBasicsPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            CBT Basics
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Learning to separate what happened from what your mind says it means
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                CBT basics = learning to separate what happened from what your mind says it means, then using skills to change the cycle.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 mb-2">The heart of CBT:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>A situation happens (facts).</li>
                  <li>You have thoughts (interpretations/guesses).</li>
                  <li>Those thoughts drive emotions (and body sensations).</li>
                  <li>Emotions influence behaviors.</li>
                  <li>Behaviors shape what happens next—feeding the loop.</li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4">
                <li><a href="#triangle" className="hover:underline">The CBT triangle (one-minute explanation)</a></li>
                <li><a href="#situation-thought" className="hover:underline">Situation vs. thought (the most important split)</a></li>
                <li><a href="#guesses" className="hover:underline">Thoughts are often guesses</a></li>
                <li><a href="#behaviors" className="hover:underline">How behaviors keep cycles going</a></li>
                <li><a href="#practice" className="hover:underline">A 2-minute practice you can do today</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="triangle">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) The CBT triangle (one-minute explanation)
              </h2>
              
              <div className="p-4 bg-purple-50 rounded border border-purple-200 mb-4">
                <p className="text-gray-700 mb-3">
                  The cognitive triangle shows that thoughts, emotions, and behaviors affect one another. A situation triggers the triangle, and changing any corner changes the others.
                </p>
                
                <div className="bg-white p-4 rounded border border-purple-300">
                  <p className="text-gray-700 mb-2 font-semibold">Example from the triangle:</p>
                  <p className="text-gray-700">
                    If a stranger looks angry, you might think "I did something wrong" or "They're having a bad day," which leads to different emotions and actions.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-gray-700 text-center font-semibold text-lg">
                  Thoughts ↔ Emotions ↔ Behaviors
                </p>
                <p className="text-gray-600 text-center text-sm mt-2">
                  Change one corner, and the others shift too
                </p>
              </div>

              <div className="flex justify-center my-6">
                <Image
                  src="/assets/cbt-triangle.png"
                  alt="CBT Triangle showing the relationship between Thoughts, Feelings, and Behaviors"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Section 2 */}
            <div id="situation-thought">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Situation vs. thought (the most important split)
              </h2>

              <p className="text-gray-700 mb-4">
                CBT starts by separating:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">Situation:</p>
                  <p className="text-gray-700">What happened (who/what/when/where)</p>
                  <p className="text-gray-600 text-sm mt-2 italic">Observable facts only</p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">Thought:</p>
                  <p className="text-gray-700">Your interpretation of what it means</p>
                  <p className="text-gray-600 text-sm mt-2 italic">Mental commentary/guesses</p>
                </div>
              </div>

              <div className="p-4 bg-orange-50 rounded border border-orange-200">
                <p className="text-gray-700">
                  <strong>This matters because:</strong> many situations are not "good" or "bad" on their own—our interpretation drives much of the emotion.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="guesses">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Thoughts are often guesses (especially when we don't know the facts)
              </h2>

              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 mb-3">
                  Thoughts are often "a guess about what might be true," and when facts aren't known, the mind fills in blanks using beliefs and past experiences.
                </p>
                
                <p className="text-gray-700 font-semibold">
                  This is a core CBT idea: it's often the interpretation of the situation (automatic thoughts/images)—not the situation itself—that drives emotion, behavior, and body response.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <p className="text-gray-700 mb-2 font-semibold">Common examples:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Situation:</strong> Friend doesn't reply to text for 2 days</li>
                  <li><strong>Guess 1:</strong> "They're mad at me" → anxiety, overthinking</li>
                  <li><strong>Guess 2:</strong> "They're probably busy" → calm, patience</li>
                  <li><strong>Reality:</strong> Could be either (or something else entirely)</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div id="behaviors">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) How behaviors keep cycles going
              </h2>

              <p className="text-gray-700 mb-4">
                Behaviors are what you do (or avoid doing) in response to emotions. They influence what happens next—sometimes reinforcing the belief that the thought was true.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <p className="text-gray-700 mb-2">
                    <strong>Example 1:</strong> Driver cuts you off → "They're being aggressive!" → feeling angry → honking → other driver honks back → conflict escalates
                  </p>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <p className="text-gray-700 mb-2">
                    <strong>Example 2:</strong> Believing "no one will want me" → withdrawing → social circle shrinks → belief feels confirmed
                  </p>
                </div>
              </div>

              <div className="p-4 bg-teal-50 rounded border border-teal-200 mt-4">
                <p className="text-gray-700">
                  <strong>That's why CBT changes thought patterns and behavior patterns.</strong> CBT is commonly described as structured, practical, and skill-focused.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="practice">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) A 2-minute CBT practice (Catch → Name → Nudge)
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-400 space-y-4">
                <div className="p-4 bg-white rounded border border-teal-200">
                  <p className="text-teal-800 font-bold mb-2">Catch (30 sec):</p>
                  <p className="text-gray-700">
                    Write the situation as a fact sentence. "What happened: ___"
                  </p>
                </div>

                <div className="p-4 bg-white rounded border border-teal-200">
                  <p className="text-teal-800 font-bold mb-2">Name (45 sec):</p>
                  <p className="text-gray-700 mb-2">
                    Write the strongest thought as a quote: "My mind says: '___'"
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    (If you can, name the distortion: mind-reading, catastrophizing, etc.)
                  </p>
                </div>

                <div className="p-4 bg-white rounded border border-teal-200">
                  <p className="text-teal-800 font-bold mb-2">Nudge (45 sec):</p>
                  <p className="text-gray-700 mb-2">
                    Write one alternative that's more balanced (not fake-positive):
                  </p>
                  <p className="text-gray-700">
                    "Another possible explanation is ___"
                  </p>
                  <p className="text-gray-700 mt-2">
                    Then choose one tiny behavior that supports the balanced view.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4 italic text-sm">
                This matches the self-help approach described in NHS CBT resources: noticing thoughts and trying structured techniques to respond differently.
              </p>
            </div>

            {/* Related Resources */}
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/automatic-thoughts" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Automatic Thoughts</p>
                  <p className="text-gray-600 text-sm">Learn about the "first thought"</p>
                </Link>
                <Link href="/pages/cbt/cognitive-distortions" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Distortions</p>
                  <p className="text-gray-600 text-sm">Common thinking traps</p>
                </Link>
                <Link href="/pages/cbt/thought-record" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thought Record</p>
                  <p className="text-gray-600 text-sm">Structured thought analysis</p>
                </Link>
                <Link href="/pages/cbt/thoughts-on-trial" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thoughts on Trial</p>
                  <p className="text-gray-600 text-sm">Test thoughts with evidence</p>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center pt-4">
              <Link
                href="/pages/cbt"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
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
