'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ProblemSolvingPage() {
  const router = useRouter();
  const [problemData, setProblemData] = useState({
    definition: '',
    solutions: ['', '', '', '', '', ''],
    preferred: ['', '', '', ''],
    advantagesA: '',
    disadvantagesA: '',
    advantagesB: '',
    disadvantagesB: '',
    advantagesC: '',
    disadvantagesC: '',
    advantagesD: '',
    disadvantagesD: '',
    steps: ['', '', ''],
    who: ['', '', ''],
    when: ['', '', ''],
    effectiveness: '',
    revise: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updateField = ({ field, value }: { field: string; value: string }) => {
    setProblemData(prev => ({ ...prev, [field]: value }));
  };

  const updateArrayField = ({ field, index, value }: { field: string; index: number; value: string }) => {
    setProblemData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof problemData] as string[]).map((item, i) => 
        i === index ? value : item
      )
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            CBT Problem Solving
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Structured method for tackling real problems in the here-and-now
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                You might have once thought worrying and problem-solving are the same—but they're very different. Worry is a looping "worst-case" thought process that often leaves you anxious and without a plan. Problem-solving is a practical, structured way to deal with real problems in the here-and-now, creating an action plan you can actually implement.
              </p>
              
              <p className="text-gray-700 mb-6">
                CBT uses problem-solving (sometimes called Problem-Solving Therapy, PST) to improve coping with stressful life problems by teaching a step-by-step method for identifying problems, generating options, choosing a plan, and reviewing results.
              </p>

              <div className="flex justify-center">
                <a
                  href="/assets/Worksheets/problem-solving.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
                >
                  📄 Download Problem-Solving Worksheet (PDF)
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4">
                <li><a href="#worrying-vs-solving" className="hover:underline">Worrying vs. problem-solving</a></li>
                <li><a href="#before-start" className="hover:underline">Before you start (the right set-up)</a></li>
                <li><a href="#solvable" className="hover:underline">Is this a solvable problem? (3 questions)</a></li>
                <li><a href="#six-steps" className="hover:underline">The 6-step CBT problem-solving method</a></li>
                <li><a href="#worksheet" className="hover:underline">Your Problem-Solving Worksheet (write it out)</a></li>
                <li><a href="#review" className="hover:underline">Review questions (in session or self-coaching)</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="worrying-vs-solving">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Worrying vs. problem-solving
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <p className="text-gray-800 font-bold mb-3">Worrying:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-4">
                    <li>spins on worst-case scenarios and "what ifs"</li>
                    <li>happens when you're too anxious to think clearly</li>
                    <li>rarely produces real solutions, even if the feared thing did happen</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-3">Problem-solving:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-4">
                    <li>focuses on a real issue you can address</li>
                    <li>generates options, weighs pros/cons, builds a plan, and tests it</li>
                    <li>reduces anxiety by turning "stuck" into "next steps"</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-yellow-50 rounded border border-yellow-200 mt-4">
                <p className="text-gray-700 italic text-sm">
                  If you're stuck in worry, try to "switch modes" into problem-solving.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="before-start">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Before you start (the right set-up)
              </h2>

              <p className="text-gray-700 mb-4">
                To give yourself the best chance of doing problem-solving well, your PDF recommends:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">Set aside thinking time</p>
                  <p className="text-gray-700 text-sm">Problem-solving takes focus; don't do it "on the run."</p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">One problem at a time</p>
                  <p className="text-gray-700 text-sm">If you try to solve multiple problems at once, the quality drops.</p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">Use paper (or a notes app)</p>
                  <p className="text-gray-700 text-sm">Writing it down reduces mental clutter and makes options clearer.</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="solvable">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Is this a solvable problem? (3 questions)
              </h2>

              <p className="text-gray-700 mb-4">
                Before you start, ask:
              </p>

              <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
                  <li className="font-semibold">Is it real and likely?</li>
                  <li className="font-semibold">Is it happening now (here-and-now)?</li>
                  <li className="font-semibold">Do I have some control over it?</li>
                </ol>
              </div>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200 mt-4">
                <p className="text-gray-700">
                  If it's an unlikely future scenario you can't control, it may be better treated as worry (use postponement / refocusing skills). If it's current and within some control, problem-solving is a good fit.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div id="six-steps">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) The 6-step CBT problem-solving method
              </h2>

              <p className="text-gray-700 mb-4">
                Your module teaches a 6-step process:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border-2 border-teal-300">
                  <p className="text-gray-800 font-bold mb-2">Step 1: Identify / define the problem</p>
                  <p className="text-gray-700 text-sm">
                    State it clearly and specifically (facts, timing, circumstances). Focus on what's observable, not feelings.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
                  <p className="text-gray-800 font-bold mb-2">Step 2: Generate possible solutions</p>
                  <p className="text-gray-700 text-sm">
                    Brainstorm as many options as possible without judging them. Get creative first; filter later.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-2 border-purple-300">
                  <p className="text-gray-800 font-bold mb-2">Step 3: Evaluate alternatives</p>
                  <p className="text-gray-700 text-sm">
                    Choose your top 3–4 options and list advantages vs disadvantages for each.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-2 border-green-300">
                  <p className="text-gray-800 font-bold mb-2">Step 4: Decide on a plan</p>
                  <p className="text-gray-700 text-sm">
                    Pick one or more options and turn them into action steps: Who will do it, When, How you'll know it worked.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-2 border-orange-300">
                  <p className="text-gray-800 font-bold mb-2">Step 5: Implement the plan</p>
                  <p className="text-gray-700 text-sm">
                    Do the steps you listed.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg border-2 border-pink-300">
                  <p className="text-gray-800 font-bold mb-2">Step 6: Evaluate the outcome</p>
                  <p className="text-gray-700 text-sm">
                    Ask: did it work? If not, return to Step 2 and try a different option.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4 italic">
                This "structured coping" approach aligns with CBT problem-solving guidance used in self-help and clinical settings.
              </p>
            </div>

            {/* Section 5 - Interactive Worksheet */}
            <div id="worksheet">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Your Problem-Solving Worksheet (write it out)
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-400 space-y-6">
                {/* Step 1 */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-3">1) Identify and define the problem area / issue</p>
                  
                  <div>
                    <label htmlFor="definition" className="block text-gray-700 font-semibold mb-2">
                      Problem definition (facts, specific):
                    </label>
                    <textarea
                      id="definition"
                      value={problemData.definition}
                      onChange={(e) => updateField({ field: 'definition', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      rows={4}
                      placeholder="What exactly is the problem? Be specific and factual..."
                    />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-3">2) Generate possible solutions / options</p>
                  
                  <div className="mb-4">
                    <p className="text-gray-700 font-semibold mb-3">List all possible solutions (brainstorm):</p>
                    <div className="space-y-2">
                      {problemData.solutions.map((solution, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            value={solution}
                            onChange={(e) => updateArrayField({ field: 'solutions', index, value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder={`${index + 1}. Option...`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-3">Preferred solutions (top 3–4):</p>
                    <div className="space-y-2">
                      {['A', 'B', 'C', 'D'].map((letter, index) => (
                        <div key={letter} className="flex items-center gap-2">
                          <span className="text-gray-700 font-semibold">{letter})</span>
                          <input
                            type="text"
                            value={problemData.preferred[index]}
                            onChange={(e) => updateArrayField({ field: 'preferred', index, value: e.target.value })}
                            className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder={`Preferred solution ${letter}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">3) Evaluate alternatives (pros / cons)</p>
                  
                  <div className="space-y-4">
                    {/* Solution A */}
                    <div className="p-4 bg-purple-50 rounded border border-purple-200">
                      <p className="text-gray-800 font-semibold mb-3">Potential solution A</p>
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="advantages-a" className="block text-gray-700 font-semibold mb-1 text-sm">
                            Advantages:
                          </label>
                          <textarea
                            id="advantages-a"
                            value={problemData.advantagesA}
                            onChange={(e) => updateField({ field: 'advantagesA', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            rows={2}
                            placeholder="What are the benefits?"
                          />
                        </div>
                        <div>
                          <label htmlFor="disadvantages-a" className="block text-gray-700 font-semibold mb-1 text-sm">
                            Disadvantages:
                          </label>
                          <textarea
                            id="disadvantages-a"
                            value={problemData.disadvantagesA}
                            onChange={(e) => updateField({ field: 'disadvantagesA', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            rows={2}
                            placeholder="What are the drawbacks?"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Solution B */}
                    <div className="p-4 bg-blue-50 rounded border border-blue-200">
                      <p className="text-gray-800 font-semibold mb-3">Potential solution B</p>
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="advantages-b" className="block text-gray-700 font-semibold mb-1 text-sm">
                            Advantages:
                          </label>
                          <textarea
                            id="advantages-b"
                            value={problemData.advantagesB}
                            onChange={(e) => updateField({ field: 'advantagesB', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={2}
                          />
                        </div>
                        <div>
                          <label htmlFor="disadvantages-b" className="block text-gray-700 font-semibold mb-1 text-sm">
                            Disadvantages:
                          </label>
                          <textarea
                            id="disadvantages-b"
                            value={problemData.disadvantagesB}
                            onChange={(e) => updateField({ field: 'disadvantagesB', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Solution C */}
                    <div className="p-4 bg-green-50 rounded border border-green-200">
                      <p className="text-gray-800 font-semibold mb-3">Potential solution C</p>
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="advantages-c" className="block text-gray-700 font-semibold mb-1 text-sm">
                            Advantages:
                          </label>
                          <textarea
                            id="advantages-c"
                            value={problemData.advantagesC}
                            onChange={(e) => updateField({ field: 'advantagesC', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            rows={2}
                          />
                        </div>
                        <div>
                          <label htmlFor="disadvantages-c" className="block text-gray-700 font-semibold mb-1 text-sm">
                            Disadvantages:
                          </label>
                          <textarea
                            id="disadvantages-c"
                            value={problemData.disadvantagesC}
                            onChange={(e) => updateField({ field: 'disadvantagesC', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Solution D */}
                    <div className="p-4 bg-orange-50 rounded border border-orange-200">
                      <p className="text-gray-800 font-semibold mb-3">Potential solution D</p>
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="advantages-d" className="block text-gray-700 font-semibold mb-1 text-sm">
                            Advantages:
                          </label>
                          <textarea
                            id="advantages-d"
                            value={problemData.advantagesD}
                            onChange={(e) => updateField({ field: 'advantagesD', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            rows={2}
                          />
                        </div>
                        <div>
                          <label htmlFor="disadvantages-d" className="block text-gray-700 font-semibold mb-1 text-sm">
                            Disadvantages:
                          </label>
                          <textarea
                            id="disadvantages-d"
                            value={problemData.disadvantagesD}
                            onChange={(e) => updateField({ field: 'disadvantagesD', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">4) Decide on a plan</p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="text-left p-2 text-gray-700 font-semibold text-sm">Action steps</th>
                          <th className="text-left p-2 text-gray-700 font-semibold text-sm">Who</th>
                          <th className="text-left p-2 text-gray-700 font-semibold text-sm">When</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[0, 1, 2].map((index) => (
                          <tr key={index} className="border-b border-gray-200">
                            <td className="p-2">
                              <input
                                type="text"
                                value={problemData.steps[index]}
                                onChange={(e) => updateArrayField({ field: 'steps', index, value: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                                placeholder="Action step..."
                              />
                            </td>
                            <td className="p-2">
                              <input
                                type="text"
                                value={problemData.who[index]}
                                onChange={(e) => updateArrayField({ field: 'who', index, value: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                                placeholder="Who"
                              />
                            </td>
                            <td className="p-2">
                              <input
                                type="text"
                                value={problemData.when[index]}
                                onChange={(e) => updateArrayField({ field: 'when', index, value: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                                placeholder="When"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-2">5) Implement plan</p>
                  <p className="text-gray-600 italic">(Do the steps above.)</p>
                </div>

                {/* Step 6 */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">6) Evaluate the outcome</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="effectiveness" className="block text-gray-700 font-semibold mb-2 text-sm">
                        How effective was the plan?
                      </label>
                      <textarea
                        id="effectiveness"
                        value={problemData.effectiveness}
                        onChange={(e) => updateField({ field: 'effectiveness', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={3}
                        placeholder="Did it solve the problem? What worked? What didn't?"
                      />
                    </div>

                    <div>
                      <label htmlFor="revise" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Revise plan or try a new option?
                      </label>
                      <textarea
                        id="revise"
                        value={problemData.revise}
                        onChange={(e) => updateField({ field: 'revise', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={3}
                        placeholder="What adjustments or next steps are needed?"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="review">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Review questions (in session or self-coaching)
              </h2>

              <p className="text-gray-700 mb-4">
                After you complete a worksheet:
              </p>

              <div className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Did I define the problem clearly (facts, not feelings)?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Did I brainstorm enough options before judging?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Which option had the best tradeoff of benefit vs cost?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>What did I learn from implementing the plan (data for next time)?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>If I'm stuck, is this actually an "unsolvable worry" (uncertainty / lack of control) or a solvable problem?</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/worrying" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">CBT Worrying</p>
                  <p className="text-gray-600 text-sm">When the problem isn't solvable right now</p>
                </Link>
                <Link href="/pages/cbt/decatastrophizing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Decatastrophizing</p>
                  <p className="text-gray-600 text-sm">If worst-case thinking blocks planning</p>
                </Link>
                <Link href="/pages/cbt/cognitive-restructuring" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Restructuring</p>
                  <p className="text-gray-600 text-sm">If thoughts sabotage problem-solving</p>
                </Link>
                <Link href="/pages/cbt/behavioral-activation" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Behavioral Activation</p>
                  <p className="text-gray-600 text-sm">When low mood makes action hard</p>
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
