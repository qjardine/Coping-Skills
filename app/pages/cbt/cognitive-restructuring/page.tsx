'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BackButton } from '@/components/shared/BackButton';

export default function CognitiveRestructuringPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Cognitive Restructuring
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Working with thoughts that aren't working for you
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Having learned to check in with your mood and identify automatic thoughts, you probably feel more grounded in your emotions, not being carried away by them as often. This chapter is devoted to helping you make big changes in your thoughts, feelings, and behaviors from that new, grounded place.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <p className="text-gray-700">
                  <strong>Cognitive restructuring</strong> refers to the act of identifying ineffective patterns in thinking, and changing them to be more effective. More effective can mean triggering less negative emotion, seeing things more clearly, or enabling more skillful behavior.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded border-2 border-yellow-300 mb-4">
                <p className="text-gray-800 font-bold mb-2">Important:</p>
                <p className="text-gray-700">
                  Cognitive restructuring is NOT about flipping to positive extremes or denial. It's about developing a more sophisticated viewpoint that considers both positive and negative perspectives, resulting in thoughts that trigger less negative emotion and are more effective at helping you achieve your aims.
                </p>
              </div>

              <div className="flex justify-center">
                <a
                  href="/assets/Worksheets/cognitive-restructuring.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
                >
                  📄 Download Worksheet (PDF)
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4">
                <li><a href="#step-1" className="hover:underline">Step 1: Record Your Thoughts</a></li>
                <li><a href="#step-2" className="hover:underline">Step 2: Pick a Thought</a></li>
                <li><a href="#step-3" className="hover:underline">Step 3: Find Different Points of View (6 Probing Questions)</a></li>
                <li><a href="#step-4" className="hover:underline">Step 4: Craft an Alternative Response</a></li>
              </ol>
            </div>

            {/* Step 1 */}
            <div id="step-1">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1: Record Your Thoughts
              </h2>
              
              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <p className="text-gray-700 mb-3">
                  Record the situation, thoughts, and feelings on your cognitive restructuring thought record. Choose a situation that triggered negative thoughts and feelings and break it into its component parts.
                </p>
                <p className="text-gray-700 font-semibold">
                  What is important: identify as many thoughts associated with the negative emotion(s) as possible. Don't just stop at one thought.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div id="step-2">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2: Pick a Thought
              </h2>

              <p className="text-gray-700 mb-4">
                Pick one automatic thought from the list you created, the one that feels most responsible for your negative emotion. Focus on the thought that seems to be associated with the most distress.
              </p>

              <div className="p-4 bg-orange-50 rounded border border-orange-200 mb-4">
                <p className="text-gray-800 font-bold mb-3">Transform your thought into a statement:</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-orange-300">
                    <p className="text-gray-700"><strong>Automatic thought:</strong> "What if I fail the exam?"</p>
                    <p className="text-green-700"><strong>→ Statement:</strong> "I will fail the exam."</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-orange-300">
                    <p className="text-gray-700"><strong>Automatic thought:</strong> "Oh crap!"</p>
                    <p className="text-green-700"><strong>→ Statement:</strong> "I really messed up big time."</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-orange-300">
                    <p className="text-gray-700"><strong>Automatic thought:</strong> (an image of stuttering)</p>
                    <p className="text-green-700"><strong>→ Statement:</strong> "I will stutter, and they'll think I'm a fool."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div id="step-3">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3: Find Different Points of View
              </h2>

              <p className="text-gray-700 mb-4">
                Think about the situation and the automatic thought from as many angles as you need in order to start to think and feel differently. Here are six probing questions to help you discover new perspectives:
              </p>

              {/* Question 1 */}
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300 mb-3">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    1. What is the effect of believing this thought? What would happen if I didn't believe this thought?
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-3">
                  Answering these questions forces us to face the consequences of having a particular thought and pragmatically determine whether the thought is helpful or not.
                </p>

                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <p className="text-gray-800 font-semibold mb-2">Example: Getting passed over for promotion</p>
                  <p className="text-gray-700 mb-3">
                    <strong>Automatic thought:</strong> "I'll never be able to get ahead."
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded">
                      <p className="text-red-700 font-semibold">Effect of believing:</p>
                      <p className="text-gray-700 text-sm">Causes you to feel worse, turns disappointment into despair, saps energy and confidence, creates self-fulfilling prophecy</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="text-green-700 font-semibold">Effect of NOT believing:</p>
                      <p className="text-gray-700 text-sm">Feel disappointment but not despair, recover more quickly, strategize improvement, feel better in general</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-2 border-purple-300 mb-3">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    2. What is the evidence supporting this thought? What is the evidence against this thought?
                  </h3>
                </div>

                <p className="text-gray-700 mb-3">
                  These questions help you determine the accuracy of your automatic thought. If the thought is inaccurate, you're working with bad information and unable to make good decisions.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded border border-red-200">
                    <p className="text-gray-800 font-bold mb-2">Evidence FOR (biased view):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                      <li>I worked hard for this</li>
                      <li>I'm more qualified</li>
                      <li>This was the only way</li>
                      <li>I'm a total failure</li>
                      <li>My boss hates me</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <p className="text-gray-800 font-bold mb-2">Evidence AGAINST (balanced view):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                      <li>I can get ahead in other ways</li>
                      <li>Future opportunities will come</li>
                      <li>I'm good at what I do</li>
                      <li>This is just one setback</li>
                      <li>I can learn and improve</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-3 italic">
                  Tip: Pretend you're a defense attorney and pick apart the 'evidence for' list. Would that evidence hold up in court?
                </p>
              </div>

              {/* Question 3 */}
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-2 border-green-300 mb-3">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    3. Is there an alternative explanation?
                  </h3>
                </div>

                <p className="text-gray-700 mb-3">
                  This question challenges you to consider possibilities you probably had not previously. It forces us to realize that our automatic thought is merely an assumption.
                </p>

                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <p className="text-gray-800 font-semibold mb-2">Example: Friend never texts first</p>
                  <p className="text-gray-700 mb-3">
                    <strong>Automatic thought:</strong> "She doesn't really like me that much. She just responds to be polite."
                  </p>
                  <p className="text-gray-800 font-semibold mb-2">Alternative explanations:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                    <li>Maybe she just doesn't like texting</li>
                    <li>Maybe she's just very busy</li>
                    <li>Maybe she feels like she would bother you to text out of the blue</li>
                    <li>Maybe she's socially anxious, so she waits for you to text first</li>
                    <li>Maybe texting isn't that important to her</li>
                    <li>Maybe she's gotten used to relying on you to text first</li>
                    <li>Maybe she's trying to cut down on screen time</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 italic">
                    Without evidence, you have little reason to believe your assumption over any of these explanations.
                  </p>
                </div>
              </div>

              {/* Question 4 */}
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-2 border-yellow-300 mb-3">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    4. What's the worst that could happen? Would I survive it? What's the best that could happen? What's most likely?
                  </h3>
                </div>

                <p className="text-gray-700 mb-3">
                  In anxiety-provoking situations, it's helpful to identify the whole range of possibilities. The worst outcome is usually not the likely outcome, so we overwhelm ourselves needlessly.
                </p>

                <div className="space-y-3">
                  <div className="bg-red-50 p-4 rounded border border-red-200">
                    <p className="text-gray-800 font-bold mb-2">Worst case:</p>
                    <p className="text-gray-700 text-sm mb-3">"She'll be angry, say she never liked me, and tell me never to talk to her again."</p>
                    <p className="text-gray-700 font-semibold text-sm mb-2">Then ask yourself:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Would I survive it?</li>
                      <li>What could I do to cope?</li>
                      <li>How would I feel a week/month/year later?</li>
                      <li>Looking back from the future, why might this be good for me?</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <p className="text-gray-800 font-bold mb-2">Best case:</p>
                    <p className="text-gray-700 text-sm">"She'll be understanding, explain she was afraid to bother me, and we'll become closer friends."</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <p className="text-gray-800 font-bold mb-2">Most likely:</p>
                    <p className="text-gray-700 text-sm">"She'll probably be understanding as she usually is. That's why I'm friends with her. She'll be more mindful of texting in the future because I know she really does like me."</p>
                  </div>
                </div>
              </div>

              {/* Question 5 */}
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg border-2 border-pink-300 mb-3">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    5. If my friend _______ were in this situation, what would I tell them?
                  </h3>
                </div>

                <p className="text-gray-700 mb-3">
                  Have you ever noticed how easy it is to give advice to someone else, but you come up short when you need it yourself? This question allows us to depersonalize the situation and see it more clearly.
                </p>

                <div className="bg-pink-50 p-4 rounded border border-pink-200">
                  <p className="text-gray-800 font-semibold mb-2">Example: Lending sister money repeatedly</p>
                  <p className="text-gray-700 text-sm mb-3">
                    Donovan has been lending his sister money for months, making cuts to his own spending, but she keeps asking for more.
                  </p>
                  <p className="text-gray-700 font-semibold text-sm mb-2">Advice he'd give his friend Debra:</p>
                  <div className="bg-white p-3 rounded border border-pink-300">
                    <p className="text-gray-700 text-sm italic">
                      "Debra, you're not responsible for your sister. She's an adult. While it's good of you to help her, she is responsible for solving her own problems. You might actually be more helpful if you offer support in different ways, like helping her find a job or apply for unemployment. She'll probably be disappointed, but if she cares about you, she'll understand."
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 6 */}
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border-2 border-teal-300 mb-3">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    6. What can I do about this?
                  </h3>
                </div>

                <p className="text-gray-700 mb-3">
                  This question helps change your mindset from being a passive victim of circumstance to being an active player who can shape events. Use this question LAST after mulling over the situation from different angles.
                </p>

                <div className="bg-teal-50 p-4 rounded border border-teal-200 mb-3">
                  <p className="text-gray-800 font-bold mb-2">Two steps:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>Brainstorm possible solutions (write ALL ideas, no editing)</li>
                    <li>Identify the most effective solutions and implement them</li>
                  </ol>
                </div>

                <div className="bg-white p-4 rounded border border-teal-200">
                  <p className="text-gray-800 font-semibold mb-2">Example brainstorm: Sent report with error to board</p>
                  <p className="text-gray-700 text-sm mb-3">Ayala's boss told her to "shape up" or be "toast." Her brainstorm:</p>
                  <ul className="list-decimal list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>Use this to more actively look for a better-aligned job</li>
                    <li>Win the lottery and quit</li>
                    <li>Apologize sincerely and ask for recommendations</li>
                    <li>Create a system to prevent recurrence</li>
                    <li>Reach out to board members to explain</li>
                    <li>Blame another co-worker</li>
                    <li>See this as a sign to double-check work more carefully</li>
                    <li>Make case for needing more help in the office</li>
                    <li>Accept that everyone makes mistakes and learn from this</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 italic">
                    After brainstorming, she ruled out unfeasible ideas and chose to create a double-checking system and explore new career options. She felt much better focused on what she could DO.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div id="step-4">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4: Craft an Alternative Response
              </h2>

              <p className="text-gray-700 mb-4">
                Having answered a few of the probing questions, challenge yourself to create one statement that encapsulates the answers, or at least the most powerful components. This is your <strong>alternative response</strong>.
              </p>

              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300 mb-4">
                <p className="text-gray-700 mb-3">
                  You can bring to mind this alternative response whenever the old automatic thought occurs to you. Although it's hard to replace thoughts, allowing the new alternative response to coexist with the old automatic thought can do a lot to lighten your mood and help you get back on track.
                </p>
                
                <div className="bg-white p-4 rounded border border-purple-300">
                  <p className="text-gray-800 font-bold mb-2">Tips for using your alternative response:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Write it down and place it where you need it</li>
                    <li>Set it as a phone reminder before meetings</li>
                    <li>Use it as your desktop background</li>
                    <li>Put it on a Post-it on the refrigerator</li>
                    <li>The more you think about it, the more naturally it will occur</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded border-2 border-yellow-300">
                <p className="text-gray-800 font-bold text-center">
                  The more thought records you complete, the easier they become. With practice, you'll be able to construct an alternative response in the moment without writing it out.
                </p>
              </div>
            </div>

            {/* Related Resources */}
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/automatic-thoughts" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Automatic Thoughts</p>
                  <p className="text-gray-600 text-sm">Identify the thoughts that start the chain</p>
                </Link>
                <Link href="/pages/cbt/cognitive-distortions" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Distortions</p>
                  <p className="text-gray-600 text-sm">Common thinking traps to watch for</p>
                </Link>
                <Link href="/pages/cbt/thought-record" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thought Record</p>
                  <p className="text-gray-600 text-sm">Track situations, thoughts, and responses</p>
                </Link>
                <Link href="/pages/cbt/thoughts-on-trial" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thoughts on Trial</p>
                  <p className="text-gray-600 text-sm">Test thoughts with courtroom evidence</p>
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
