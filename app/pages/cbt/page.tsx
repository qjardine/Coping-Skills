'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BackButton } from '@/components/shared/BackButton';

export default function CBTHubPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Cognitive Behavioral Therapy (CBT)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Cognitive Behavioral Therapy (CBT) is a practical, skills-based therapy that helps you change unhelpful patterns in thoughts, feelings, body sensations, and behaviors. CBT isn't about "positive thinking." It's about learning to notice patterns, test them, and build new habits that reduce suffering and increase stability.
              </p>
              
              <p className="text-gray-700 mb-4">
                CBT is widely used and has strong evidence for helping with many mental health problems (like anxiety and depression), and it often focuses on short-term, structured practice—skills you can use outside of sessions too.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4">
                <li><a href="#what-cbt-is" className="hover:underline">What CBT is (and isn't)</a></li>
                <li><a href="#cbt-model" className="hover:underline">The CBT model (triangle + loop)</a></li>
                <li><a href="#start-here" className="hover:underline">A "start here" path</a></li>
                <li><a href="#common-tools" className="hover:underline">Common CBT tools on this site</a></li>
                <li><a href="#extra-support" className="hover:underline">When to seek extra support</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="what-cbt-is">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What CBT is (and isn't)
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">CBT is:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Skills-based:</strong> you practice specific tools (like reframing thoughts, problem-solving, exposure, behavioral activation).</li>
                    <li><strong>Pattern-focused:</strong> it targets cycles that keep you stuck.</li>
                    <li><strong>Collaborative + structured:</strong> often includes between-session practice (sometimes called "homework").</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <p className="text-gray-800 font-bold mb-2">CBT is not:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>"Just think happy thoughts."</li>
                    <li>A claim that your problems aren't real.</li>
                    <li>A demand that you logic your way out of emotions.</li>
                  </ul>
                </div>

                <p className="text-gray-700 italic">
                  Instead, CBT assumes that interpretations (not just events) shape feelings and actions—and that changing either thoughts or behaviors can shift the whole system.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="cbt-model">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) The CBT model (triangle + loop)
              </h2>

              <p className="text-gray-700 mb-4">
                Your understanding of CBT centers on two super-useful versions of the CBT model:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">A) The Cognitive Triangle (Thoughts ↔ Emotions ↔ Behaviors)</p>
                  <p className="text-gray-700">
                    A situation triggers thoughts, feelings, and actions—and each part feeds the others. If you change one corner of the triangle, the other corners shift too.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-800 font-bold mb-2">B) The Cognitive Behavioral Model loop</p>
                  <p className="text-gray-700 mb-2">
                    Situation → Thought → Emotion → Behavior → Next situation
                  </p>
                  <p className="text-gray-700">
                    This version highlights that behaviors can change what happens next (and how others respond), which reinforces future thoughts and feelings.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-700">
                    <strong>If you only remember one thing:</strong> your mind often fills in missing facts with guesses based on past experiences—and those guesses can drive intense emotion and avoidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="start-here">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Start here (simple path)
              </h2>

              <p className="text-gray-700 mb-4">
                If you're new to CBT, use this order:
              </p>

              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li className="text-gray-700">
                  <Link href="/pages/cbt/basics" className="text-teal-600 hover:text-teal-800 font-semibold">CBT Basics</Link> (how the triangle works)
                </li>
                <li className="text-gray-700">
                  <Link href="/pages/cbt/automatic-thoughts" className="text-teal-600 hover:text-teal-800 font-semibold">Automatic Thoughts</Link> (the "first thought")
                </li>
                <li className="text-gray-700">
                  <Link href="/pages/cbt/cognitive-distortions" className="text-teal-600 hover:text-teal-800 font-semibold">Cognitive Distortions</Link> (spot thinking traps)
                </li>
                <li className="text-gray-700">
                  <Link href="/pages/cbt/thought-record" className="text-teal-600 hover:text-teal-800 font-semibold">Thought Record</Link> (turn spirals into steps)
                </li>
                <li className="text-gray-700">
                  Behavior tool that fits your goal (<Link href="/pages/cbt/behavioral-activation" className="text-teal-600 hover:text-teal-800">behavioral activation</Link>, <Link href="/pages/cbt/graded-exposure" className="text-teal-600 hover:text-teal-800">exposure</Link>)
                </li>
              </ol>
            </div>

            {/* Section 4 */}
            <div id="common-tools">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Common CBT tools you'll see on this site
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pages/cbt/cognitive-distortions" className="p-4 bg-white rounded border border-teal-200 hover:bg-teal-50 transition-colors">
                  <p className="text-teal-600 font-semibold mb-1">Cognitive Distortions</p>
                  <p className="text-gray-600 text-sm">Name the thinking trap</p>
                </Link>

                <Link href="/pages/cbt/cognitive-restructuring" className="p-4 bg-white rounded border border-teal-200 hover:bg-teal-50 transition-colors">
                  <p className="text-teal-600 font-semibold mb-1">Cognitive Restructuring</p>
                  <p className="text-gray-600 text-sm">Test + reframe thoughts realistically</p>
                </Link>

                <Link href="/pages/cbt/thought-record" className="p-4 bg-white rounded border border-teal-200 hover:bg-teal-50 transition-colors">
                  <p className="text-teal-600 font-semibold mb-1">Thought Records</p>
                  <p className="text-gray-600 text-sm">Situation → thought → evidence → balanced thought</p>
                </Link>

                <Link href="/pages/cbt/behavioral-activation" className="p-4 bg-white rounded border border-teal-200 hover:bg-teal-50 transition-colors">
                  <p className="text-teal-600 font-semibold mb-1">Behavioral Activation</p>
                  <p className="text-gray-600 text-sm">Build momentum when depression/burnout shrinks your life</p>
                </Link>

                <Link href="/pages/cbt/graded-exposure" className="p-4 bg-white rounded border border-teal-200 hover:bg-teal-50 transition-colors">
                  <p className="text-teal-600 font-semibold mb-1">Exposure / ERP concepts</p>
                  <p className="text-gray-600 text-sm">Reduce avoidance and retrain fear predictions (especially anxiety/OCD)</p>
                </Link>

                <Link href="/pages/cbt/thoughts-on-trial" className="p-4 bg-white rounded border border-teal-200 hover:bg-teal-50 transition-colors">
                  <p className="text-teal-600 font-semibold mb-1">Thoughts on Trial</p>
                  <p className="text-gray-600 text-sm">Put stressful thoughts in court and test with evidence</p>
                </Link>
              </div>
            </div>

            {/* Section 5 */}
            <div id="extra-support">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) When to seek extra support
              </h2>

              <div className="p-4 bg-red-50 rounded border-2 border-red-300">
                <p className="text-gray-700 mb-3">
                  This site is for education and self-help skills, but it's not a substitute for professional care. If you're in crisis or at risk of harming yourself, get urgent help in your area right now.
                </p>
                
                <div className="flex justify-center">
                  <Link
                    href="/pages/crisis"
                    className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
                  >
                    Crisis Resources
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/basics" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">CBT Basics</p>
                  <p className="text-gray-600 text-sm">Learn the triangle and how change happens</p>
                </Link>
                <Link href="/pages/cbt/cognitive-distortions" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Distortions</p>
                  <p className="text-gray-600 text-sm">Spot common thinking traps</p>
                </Link>
                <Link href="/pages/cbt/core-beliefs" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Core Beliefs</p>
                  <p className="text-gray-600 text-sm">Deeper "rules" that shape patterns</p>
                </Link>
                <Link href="/pages/cbt/automatic-thoughts" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Automatic Thoughts</p>
                  <p className="text-gray-600 text-sm">Understanding the "first thought"</p>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center pt-4">
              <Link
                href="/pages/landing-page"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
