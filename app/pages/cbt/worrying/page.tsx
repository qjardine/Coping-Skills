'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CBTWorryingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    worry: '',
    nextStep: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updateField = ({ field, value }: { field: string; value: string }) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            CBT Worrying
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Separate productive from unproductive worry and take action
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Worrying can feel like being stuck on a treadmill—your mind runs and runs, but doesn't arrive anywhere. CBT helps by separating productive worry (you can take a next step) from unproductive worry (you can't act right now), then using structured tools to either make a plan or set the worry aside until the right time.
              </p>
              
              <p className="text-gray-700 mb-6">
                This page includes downloadable worksheets and a simple flow you can repeat whenever worry takes over.
              </p>

              {/* Downloads Section */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-300 mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Downloads (PDF worksheets)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="/assets/Worksheets/productive-worrying.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors"
                  >
                    <span className="text-3xl mb-2">📄</span>
                    <span className="text-teal-700 font-semibold text-center text-sm">Productive Worrying</span>
                  </a>
                  
                  <a
                    href="/assets/Worksheets/worry-exploration-questions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors"
                  >
                    <span className="text-3xl mb-2">📄</span>
                    <span className="text-teal-700 font-semibold text-center text-sm">Worry Exploration Questions</span>
                  </a>
                  
                  <a
                    href="/assets/Worksheets/challenging-anxious-thoughts.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors"
                  >
                    <span className="text-3xl mb-2">📄</span>
                    <span className="text-teal-700 font-semibold text-center text-sm">Challenging Anxious Thoughts</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4">
                <li><a href="#what-worry-is" className="hover:underline">What worry is (and when it becomes a problem)</a></li>
                <li><a href="#productive-vs-unproductive" className="hover:underline">Productive vs. unproductive worry (the CBT split)</a></li>
                <li><a href="#two-path-flow" className="hover:underline">The 2-path worry flow (Plan it / Park it)</a></li>
                <li><a href="#worksheet-1" className="hover:underline">Worksheet 1: Productive Worrying (next step + when)</a></li>
                <li><a href="#worksheet-2" className="hover:underline">Worksheet 2: What Could Happen vs What Will Happen</a></li>
                <li><a href="#worksheet-3" className="hover:underline">Worksheet 3: Challenging Anxious Thoughts</a></li>
                <li><a href="#how-to-use" className="hover:underline">How to use these in session (and between sessions)</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="what-worry-is">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What worry is (and when it becomes a problem)
              </h2>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700">
                  Worry is repetitive thinking about future threats. Everyone worries sometimes, but worry becomes a problem when it's excessive, feels uncontrollable, and makes it harder to think clearly or take effective action.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="productive-vs-unproductive">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Productive vs. unproductive worry (the CBT split)
              </h2>

              <p className="text-gray-700 mb-4">
                A CBT-friendly way to calm worry is to ask one key question:
              </p>

              <div className="p-4 bg-yellow-50 rounded border-2 border-yellow-300 mb-4">
                <p className="text-gray-800 font-bold text-center text-lg">
                  "Can I take a real next step about this right now (or schedule one)?"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">Productive worry →</p>
                  <p className="text-gray-700">you can identify one concrete next step.</p>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <p className="text-gray-800 font-bold mb-2">Unproductive worry →</p>
                  <p className="text-gray-700">you can't solve it right now, or it's a "what if" with no actionable step today.</p>
                </div>
              </div>

              <p className="text-gray-700 mt-4 italic">
                This matters because worry often loops when there's no clear "next action."
              </p>
            </div>

            {/* Section 3 */}
            <div id="two-path-flow">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) The 2-path worry flow: Plan it / Park it
              </h2>

              <p className="text-gray-700 mb-4">Use this as your default.</p>

              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-2 border-green-300">
                  <p className="text-gray-800 font-bold text-lg mb-3">Path A: Plan it (if there's something you can do)</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                    <li>Name the worry in one sentence.</li>
                    <li>Choose one next step (not the whole solution).</li>
                    <li>Decide when you'll do it.</li>
                    <li>Give yourself permission to set it down until then.</li>
                  </ol>
                </div>

                <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
                  <p className="text-gray-800 font-bold text-lg mb-3">Path B: Park it (if you can't act right now)</p>
                  <p className="text-gray-700">
                    Use "worry time" / scheduling: write it down, then tell your brain, "Not now—later." This is a common CBT self-help strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="worksheet-1">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Worksheet 1: Productive Worrying (next step + when)
              </h2>

              <p className="text-gray-700 mb-4">
                This tool is ideal when worry keeps you awake or when the next step needs to be clear.
              </p>

              <div className="p-4 bg-purple-50 rounded border border-purple-200 mb-4">
                <p className="text-gray-800 font-bold mb-3">How it works (from the worksheet):</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Write your most pressing worries.</li>
                  <li>For each one, write the next step you'll take and when.</li>
                  <li>Don't solve the whole problem—just the next action.</li>
                  <li>Then give yourself permission to set it aside.</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-400">
                <p className="text-gray-800 font-bold mb-4">Copy/paste mini version:</p>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="worry" className="block text-gray-800 font-bold mb-2">
                      Worry:
                    </label>
                    <textarea
                      id="worry"
                      value={formData.worry}
                      onChange={(e) => updateField({ field: 'worry', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      rows={2}
                      placeholder="What's worrying you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="next-step" className="block text-gray-800 font-bold mb-2">
                      Next step + when:
                    </label>
                    <textarea
                      id="next-step"
                      value={formData.nextStep}
                      onChange={(e) => updateField({ field: 'nextStep', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      rows={2}
                      placeholder="One concrete action and when you'll do it"
                    />
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-4 italic">
                  (Download the full sheet above for multiple worries.)
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="worksheet-2">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Worksheet 2: What Could Happen vs. What Will Happen
              </h2>

              <p className="text-gray-700 mb-4">
                Worry often zooms in on the worst thing that could happen and treats it like what will happen. This worksheet helps you reality-check that gap.
              </p>

              <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                <p className="text-gray-800 font-bold mb-3">Answer these (from the PDF):</p>
                <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                  <li>What am I afraid of that <strong>probably will not</strong> come true?</li>
                  <li>If it doesn't come true, what will probably happen instead?</li>
                  <li>If it does come true, how will I cope? How will you eventually be okay?</li>
                  <li>After answering, how has the worry changed?</li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4 italic">
                This is a close cousin to <Link href="/pages/cbt/decatastrophizing" className="text-teal-600 hover:text-teal-800 font-semibold">decatastrophizing</Link>: probability + coping = lower panic.
              </p>
            </div>

            {/* Section 6 */}
            <div id="worksheet-3">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Worksheet 3: Challenging Anxious Thoughts
              </h2>

              <p className="text-gray-700 mb-4">
                This worksheet helps you catch anxious thinking and replace it with a more balanced alternative. It uses a simple structure:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">1. Describe a common anxiety trigger</p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-800 font-bold mb-2">2. Identify three outcomes:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Worst outcome</strong></li>
                    <li><strong>Best outcome</strong></li>
                    <li><strong>Likely outcome</strong></li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">3. Ask: if the worst outcome happened, how will you feel...</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>1 week from now?</li>
                    <li>1 month from now?</li>
                    <li>1 year from now?</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-800 font-bold mb-2">4. Write:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Irrational thought</strong></li>
                    <li><strong>Rational thought</strong></li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 italic">
                This directly targets the CBT pattern where anxiety overestimates likelihood and consequences.
              </p>
            </div>

            {/* Section 7 */}
            <div id="how-to-use">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) How to use these in session (and between sessions)
              </h2>

              <p className="text-gray-700 mb-4">
                A strong CBT learning loop is:
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-4 bg-teal-50 rounded border border-teal-200 flex items-start">
                  <span className="text-2xl font-bold text-teal-600 mr-3">1</span>
                  <p className="text-gray-700">
                    Do one together (using a past example)
                  </p>
                </div>

                <div className="p-4 bg-teal-50 rounded border border-teal-200 flex items-start">
                  <span className="text-2xl font-bold text-teal-600 mr-3">2</span>
                  <p className="text-gray-700">
                    Practice a second example until the format feels easy
                  </p>
                </div>

                <div className="p-4 bg-teal-50 rounded border border-teal-200 flex items-start">
                  <span className="text-2xl font-bold text-teal-600 mr-3">3</span>
                  <p className="text-gray-700">
                    Assign one worksheet between sessions with a real situation
                  </p>
                </div>

                <div className="p-4 bg-teal-50 rounded border border-teal-200 flex items-start">
                  <span className="text-2xl font-bold text-teal-600 mr-3">4</span>
                  <p className="text-gray-700">
                    Review next session, ask follow-up questions, and look for patterns
                  </p>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <p className="text-gray-800 font-bold mb-3">Helpful follow-up questions (perfect for self-coaching too):</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Have you worried about the same worry before? How did it work out?</li>
                  <li>If you had to bet all your money on it coming true, would that be a safe bet?</li>
                  <li>If your best friend had this worry, what would you tell them?</li>
                  <li>If it comes true, how could you cope or accept it?</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 rounded border border-blue-200 mt-4">
                <p className="text-gray-700 italic">
                  <strong>Tip:</strong> Saving completed worksheets to revisit later can be powerful proof that worries often fade or shift over time. (Great for building "evidence" against your worry-brain.)
                </p>
              </div>
            </div>

            {/* Section 8 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/decatastrophizing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Decatastrophizing</p>
                  <p className="text-gray-600 text-sm">Odds + coping plan</p>
                </Link>
                <Link href="/pages/cbt/thought-record" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thought Record</p>
                  <p className="text-gray-600 text-sm">Situation → thought → response → outcome</p>
                </Link>
                <Link href="/pages/cbt/automatic-thoughts" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Automatic Thoughts</p>
                  <p className="text-gray-600 text-sm">Catch the first thought</p>
                </Link>
                <Link href="/pages/cbt/cognitive-distortions" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Distortions</p>
                  <p className="text-gray-600 text-sm">Spot catastrophizing + mind-reading + more</p>
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
