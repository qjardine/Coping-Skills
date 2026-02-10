'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ExposureAndExperimentsPage() {
  const router = useRouter();
  const [exposureData, setExposureData] = useState({
    fearTheme: '',
    whyDoing: '',
    todayStep: '',
    prediction: '',
    howLong: '',
    safetyBehaviors: '',
    sudsBefore: '',
    sudsPeak: '',
    sudsAfter: '',
    learned: '',
  });

  const [experimentData, setExperimentData] = useState({
    belief: '',
    prediction: '',
    likelihood: '',
    experimentWhat: '',
    experimentWhen: '',
    experimentTimes: '',
    dataToCollect: '',
    results: '',
    updatedBelief: '',
    nextExperiment: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updateExposureField = ({ field, value }: { field: string; value: string }) => {
    setExposureData(prev => ({ ...prev, [field]: value }));
  };

  const updateExperimentField = ({ field, value }: { field: string; value: string }) => {
    setExperimentData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Graded Exposure & Behavioral Experiments
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Face fears gradually and test predictions scientifically
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Avoidance keeps anxiety powerful. Graded exposure helps you face feared situations gradually and repeatedly so your brain learns, "I can handle this," and the fear prediction loses strength. Exposure often uses a fear hierarchy (fear ladder)—ranking situations from least to most scary and working up step by step.
              </p>
              
              <p className="text-gray-700 mb-4">
                Behavioral experiments are CBT's "science mode": you make a prediction ("If I do X, Y will happen"), test it safely, and use the results to update the belief. They're more than "getting active"—they're designed to generate new evidence that challenges inaccurate beliefs.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4">
                <li><a href="#when-to-use" className="hover:underline">When to use these skills (and when not to DIY)</a></li>
                <li><a href="#what-is-exposure" className="hover:underline">Graded exposure: what it is</a></li>
                <li><a href="#fear-ladder" className="hover:underline">Build a fear ladder (hierarchy)</a></li>
                <li><a href="#do-exposure" className="hover:underline">Do the exposure (rules that make it work)</a></li>
                <li><a href="#exposure-plan" className="hover:underline">Your Graded Exposure Plan (write it out)</a></li>
                <li><a href="#what-are-experiments" className="hover:underline">Behavioral experiments: what they are</a></li>
                <li><a href="#experiment-plan" className="hover:underline">Your Behavioral Experiment Plan (write it out)</a></li>
                <li><a href="#troubleshooting" className="hover:underline">Troubleshooting (common stuck points)</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="when-to-use">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) When to use these skills (and when not to DIY)
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-3">These tools are great for:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>Phobias</li>
                    <li>Social anxiety</li>
                    <li>Panic avoidance</li>
                    <li>Health anxiety checking loops</li>
                    <li>Perfectionism avoidance</li>
                    <li>"I can't handle this" patterns</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded border-2 border-red-300">
                  <p className="text-gray-800 font-bold mb-3">Get extra support (do with a clinician) if:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>Trauma memories/flashbacks tied to exposure target</li>
                    <li>Self-harm risk, severe dissociation, or safety concerns</li>
                    <li>The exposure would put you in real danger</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 italic">
                    CBT exposure is safe exposure, not unsafe risk-taking
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="what-is-exposure">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Graded exposure: what it is
              </h2>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 mb-3">
                  Graded exposure means approaching feared situations in small steps, starting easier and building up. The goal isn't to "force fear away."
                </p>
                <p className="text-gray-800 font-semibold">It's to learn (through experience) that:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>the feared outcome usually doesn't happen, or</li>
                  <li>you can tolerate and cope with the feelings if it does.</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div id="fear-ladder">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Build a fear ladder (hierarchy)
              </h2>

              <p className="text-gray-700 mb-4">
                A fear ladder is a list of situations ranked from "slightly uncomfortable" to "very scary." APA describes graded exposure as constructing a hierarchy of feared objects/activities/situations and working through it.
              </p>

              <div className="p-4 bg-purple-50 rounded border border-purple-200 mb-4">
                <p className="text-gray-800 font-bold mb-3">How to build yours</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Pick one fear theme (e.g., "driving on highways," "making phone calls," "being seen in public")</li>
                  <li>List 10–15 situations related to it</li>
                  <li>Rate each one with SUDS (0–100 distress). (This is commonly used in exposure approaches.)</li>
                  <li>Sort from lowest to highest</li>
                </ol>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-5 rounded-lg border border-orange-200">
                <p className="text-gray-800 font-bold mb-3">Example (social anxiety ladder)</p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>25/100:</strong> say "hi" to a cashier</li>
                  <li><strong>40/100:</strong> ask an employee where something is</li>
                  <li><strong>55/100:</strong> make a short phone call</li>
                  <li><strong>70/100:</strong> attend a small meetup for 20 minutes</li>
                  <li><strong>90/100:</strong> give a short introduction to a group</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div id="do-exposure">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Do the exposure (rules that make it work)
              </h2>

              <p className="text-gray-700 mb-4">
                Exposure works best when it's:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">✓ Graded</p>
                  <p className="text-gray-700 text-sm">Step-by-step progression</p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">✓ Repeated</p>
                  <p className="text-gray-700 text-sm">Practice the same step multiple times</p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">✓ Prolonged</p>
                  <p className="text-gray-700 text-sm">Stay long enough for anxiety to drop</p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">✓ Without escape tricks</p>
                  <p className="text-gray-700 text-sm">Reduce safety behaviors that block learning</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-gray-800 font-bold mb-2">What you're training</p>
                <p className="text-gray-700">
                  Your brain learns from what actually happens during the exposure—especially if you stay long enough to see anxiety shift and you repeat it until it's less intense.
                </p>
              </div>
            </div>

            {/* Section 5 - Interactive Exposure Plan */}
            <div id="exposure-plan">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Your Graded Exposure Plan (write it out)
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-400 space-y-5">
                <div>
                  <label htmlFor="fear-theme" className="block text-gray-800 font-bold mb-2">
                    Fear theme (one target):
                  </label>
                  <textarea
                    id="fear-theme"
                    value={exposureData.fearTheme}
                    onChange={(e) => updateExposureField({ field: 'fearTheme', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={2}
                    placeholder="e.g., driving on highways, making phone calls"
                  />
                </div>

                <div>
                  <label htmlFor="why-doing" className="block text-gray-800 font-bold mb-2">
                    Why I'm doing this (what avoidance costs me):
                  </label>
                  <textarea
                    id="why-doing"
                    value={exposureData.whyDoing}
                    onChange={(e) => updateExposureField({ field: 'whyDoing', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={2}
                    placeholder="What opportunities am I missing? How does avoidance limit me?"
                  />
                </div>

                <div className="pt-3 border-t border-teal-300">
                  <p className="text-gray-800 font-bold mb-2">My exposure practice (for the next step)</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="today-step" className="block text-gray-700 font-semibold mb-2">
                        Today's step:
                      </label>
                      <input
                        id="today-step"
                        type="text"
                        value={exposureData.todayStep}
                        onChange={(e) => updateExposureField({ field: 'todayStep', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Specific step I'll practice today"
                      />
                    </div>

                    <div>
                      <label htmlFor="prediction" className="block text-gray-700 font-semibold mb-2">
                        Prediction (what my anxiety says will happen):
                      </label>
                      <textarea
                        id="prediction"
                        value={exposureData.prediction}
                        onChange={(e) => updateExposureField({ field: 'prediction', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder='"If I do this, then..."'
                      />
                    </div>

                    <div>
                      <label htmlFor="how-long" className="block text-gray-700 font-semibold mb-2">
                        How long I'll stay / what "done" means:
                      </label>
                      <input
                        id="how-long"
                        type="text"
                        value={exposureData.howLong}
                        onChange={(e) => updateExposureField({ field: 'howLong', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="e.g., 10 minutes, until anxiety drops by 50%"
                      />
                    </div>

                    <div>
                      <label htmlFor="safety-behaviors" className="block text-gray-700 font-semibold mb-2">
                        Safety behaviors I'll reduce (optional):
                      </label>
                      <textarea
                        id="safety-behaviors"
                        value={exposureData.safetyBehaviors}
                        onChange={(e) => updateExposureField({ field: 'safetyBehaviors', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="e.g., checking, reassurance-seeking, distraction"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="suds-before" className="block text-gray-700 font-semibold mb-2 text-sm">
                          SUDS before:
                        </label>
                        <input
                          id="suds-before"
                          type="number"
                          min="0"
                          max="100"
                          value={exposureData.sudsBefore}
                          onChange={(e) => updateExposureField({ field: 'sudsBefore', value: e.target.value })}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="0-100"
                        />
                      </div>
                      <div>
                        <label htmlFor="suds-peak" className="block text-gray-700 font-semibold mb-2 text-sm">
                          SUDS peak:
                        </label>
                        <input
                          id="suds-peak"
                          type="number"
                          min="0"
                          max="100"
                          value={exposureData.sudsPeak}
                          onChange={(e) => updateExposureField({ field: 'sudsPeak', value: e.target.value })}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="0-100"
                        />
                      </div>
                      <div>
                        <label htmlFor="suds-after" className="block text-gray-700 font-semibold mb-2 text-sm">
                          SUDS after:
                        </label>
                        <input
                          id="suds-after"
                          type="number"
                          min="0"
                          max="100"
                          value={exposureData.sudsAfter}
                          onChange={(e) => updateExposureField({ field: 'sudsAfter', value: e.target.value })}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="0-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="learned" className="block text-gray-700 font-semibold mb-2">
                        What I learned:
                      </label>
                      <textarea
                        id="learned"
                        value={exposureData.learned}
                        onChange={(e) => updateExposureField({ field: 'learned', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={3}
                        placeholder="What happened? How did it differ from my prediction?"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="what-are-experiments">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Behavioral experiments: what they are
              </h2>

              <p className="text-gray-700 mb-4">
                Behavioral experiments are planned experiential tests to gather new data about a belief—either to test the old belief or to test a newer, more helpful belief.
              </p>

              <div className="p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                <p className="text-gray-800 font-bold mb-3">They're different from exposure in one key way:</p>
                <div className="space-y-2">
                  <div className="p-3 bg-white rounded border border-purple-300">
                    <p className="text-gray-700">
                      <strong>Exposure</strong> targets fear/avoidance learning ("I can handle the feeling; the feared thing is less dangerous than predicted")
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded border border-purple-300">
                    <p className="text-gray-700">
                      <strong>Experiments</strong> target belief testing ("My prediction is accurate or not; what does the evidence show?")
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-3 italic">
                  In practice, they often overlap (many exposures are also experiments).
                </p>
              </div>
            </div>

            {/* Section 7 - Interactive Experiment Plan */}
            <div id="experiment-plan">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Your Behavioral Experiment Plan (write it out)
              </h2>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-400 space-y-5">
                <div>
                  <label htmlFor="belief" className="block text-gray-800 font-bold mb-2">
                    Belief / thought to test:
                  </label>
                  <textarea
                    id="belief"
                    value={experimentData.belief}
                    onChange={(e) => updateExperimentField({ field: 'belief', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={2}
                    placeholder="What belief am I testing?"
                  />
                </div>

                <div>
                  <label htmlFor="exp-prediction" className="block text-gray-800 font-bold mb-2">
                    What I predict will happen (be specific):
                  </label>
                  <textarea
                    id="exp-prediction"
                    value={experimentData.prediction}
                    onChange={(e) => updateExperimentField({ field: 'prediction', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={2}
                    placeholder='"If I ________, then ________."'
                  />
                </div>

                <div>
                  <label htmlFor="likelihood" className="block text-gray-800 font-bold mb-2">
                    How likely does it feel? (0-100)
                  </label>
                  <input
                    id="likelihood"
                    type="number"
                    min="0"
                    max="100"
                    value={experimentData.likelihood}
                    onChange={(e) => updateExperimentField({ field: 'likelihood', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="0-100"
                  />
                </div>

                <div className="pt-3 border-t border-purple-300">
                  <p className="text-gray-800 font-bold mb-3">Experiment (what I'll do):</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="exp-what" className="block text-gray-700 font-semibold mb-2">
                        What:
                      </label>
                      <textarea
                        id="exp-what"
                        value={experimentData.experimentWhat}
                        onChange={(e) => updateExperimentField({ field: 'experimentWhat', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={2}
                        placeholder="Specific action I'll take"
                      />
                    </div>

                    <div>
                      <label htmlFor="exp-when" className="block text-gray-700 font-semibold mb-2">
                        When/where:
                      </label>
                      <input
                        id="exp-when"
                        type="text"
                        value={experimentData.experimentWhen}
                        onChange={(e) => updateExperimentField({ field: 'experimentWhen', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Specific time and place"
                      />
                    </div>

                    <div>
                      <label htmlFor="exp-times" className="block text-gray-700 font-semibold mb-2">
                        How many times:
                      </label>
                      <input
                        id="exp-times"
                        type="text"
                        value={experimentData.experimentTimes}
                        onChange={(e) => updateExperimentField({ field: 'experimentTimes', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Number of repetitions"
                      />
                    </div>

                    <div>
                      <label htmlFor="data-collect" className="block text-gray-700 font-semibold mb-2">
                        What data I'll collect (observable):
                      </label>
                      <textarea
                        id="data-collect"
                        value={experimentData.dataToCollect}
                        onChange={(e) => updateExperimentField({ field: 'dataToCollect', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={3}
                        placeholder="What specific evidence will I look for?"
                      />
                    </div>

                    <div>
                      <label htmlFor="results" className="block text-gray-700 font-semibold mb-2">
                        Results (what actually happened):
                      </label>
                      <textarea
                        id="results"
                        value={experimentData.results}
                        onChange={(e) => updateExperimentField({ field: 'results', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={3}
                        placeholder="Fill this in after the experiment"
                      />
                    </div>

                    <div>
                      <label htmlFor="updated-belief" className="block text-gray-700 font-semibold mb-2">
                        What did I learn / updated belief:
                      </label>
                      <textarea
                        id="updated-belief"
                        value={experimentData.updatedBelief}
                        onChange={(e) => updateExperimentField({ field: 'updatedBelief', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={3}
                        placeholder="Based on the results, what's the new belief?"
                      />
                    </div>

                    <div>
                      <label htmlFor="next-exp" className="block text-gray-700 font-semibold mb-2">
                        Next experiment (optional):
                      </label>
                      <textarea
                        id="next-exp"
                        value={experimentData.nextExperiment}
                        onChange={(e) => updateExperimentField({ field: 'nextExperiment', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={2}
                        placeholder="What's the next test?"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div id="troubleshooting">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Troubleshooting (common stuck points)
              </h2>

              <div className="space-y-3">
                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <p className="text-gray-800 font-bold mb-2">"Step 1 is too hard."</p>
                  <p className="text-gray-700">Make it smaller. Graded exposure is supposed to start doable.</p>
                </div>

                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <p className="text-gray-800 font-bold mb-2">"I'm not getting less anxious."</p>
                  <p className="text-gray-700">Check the rules: are you repeating the step, staying long enough, and reducing safety behaviors that block learning?</p>
                </div>

                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <p className="text-gray-800 font-bold mb-2">"My brain just moved the goalposts."</p>
                  <p className="text-gray-700">That's normal. Turn the new fear prediction into the next behavioral experiment: "Let's test that claim."</p>
                </div>

                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <p className="text-gray-800 font-bold mb-2">"I did it once—why isn't it cured?"</p>
                  <p className="text-gray-700">Learning is built by repetition. Think training, not a one-time test.</p>
                </div>
              </div>
            </div>

            {/* Section 9 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/decatastrophizing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Decatastrophizing</p>
                  <p className="text-gray-600 text-sm">Odds + coping if worst-case happens</p>
                </Link>
                <Link href="/pages/cbt/thought-record" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thought Record</p>
                  <p className="text-gray-600 text-sm">Situation → thought → response → outcome</p>
                </Link>
                <Link href="/pages/cbt/cognitive-distortions" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Distortions</p>
                  <p className="text-gray-600 text-sm">Spot catastrophizing & safety-thinking traps</p>
                </Link>
                <Link href="/pages/cbt/worrying" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">CBT Worrying</p>
                  <p className="text-gray-600 text-sm">Productive vs unproductive worry</p>
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
