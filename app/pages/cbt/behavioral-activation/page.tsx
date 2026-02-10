'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function BehavioralActivationPage() {
  const router = useRouter();
  const [activityData, setActivityData] = useState({
    trigger: '',
    emotion: '',
    whatDo: '',
    cost: '',
    value: '',
    pleasure1: '',
    pleasure1When: '',
    pleasure2: '',
    pleasure2When: '',
    mastery1: '',
    mastery1When: '',
    mastery2: '',
    mastery2When: '',
    barriers: '',
    resources: '',
    expActivity: '',
    expPredicted: '',
    expActual: '',
    expLearned: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updateField = ({ field, value }: { field: string; value: string }) => {
    setActivityData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Behavioral Activation (CBT)
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Change what you do to shift how you feel
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                When depression (or burnout) shows up, it often steals motivation first—so we stop doing the things that bring pleasure, meaning, connection, and accomplishment, and then we feel even worse. Behavioral Activation (BA) is a CBT approach that reverses that downward spiral by changing what you do—on purpose, in small steps—so your mood has more chances to improve.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border-2 border-blue-300 mb-6">
                <p className="text-gray-700 font-semibold">
                  BA has strong research support as an effective treatment for depression, including meta-analyses and major clinical guidelines.
                </p>
              </div>

              <div className="flex justify-center">
                <a
                  href="/assets/Worksheets/behavioral-activation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
                >
                  📄 Download Behavioral Activation for Depression (PDF)
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4 text-sm">
                <li><a href="#what-it-is" className="hover:underline">What Behavioral Activation is</a></li>
                <li><a href="#why-it-works" className="hover:underline">Why it works (the depression spiral)</a></li>
                <li><a href="#step-1" className="hover:underline">Step 1: Activity Monitoring (track mood + time)</a></li>
                <li><a href="#step-2" className="hover:underline">Step 2: UP vs DOWN activities</a></li>
                <li><a href="#step-3" className="hover:underline">Step 3: Values, Pleasure, and Mastery</a></li>
                <li><a href="#step-4" className="hover:underline">Step 4: Schedule activities (outside-in)</a></li>
                <li><a href="#step-5" className="hover:underline">Pleasure Predicting (mini behavioral experiment)</a></li>
                <li><a href="#step-6" className="hover:underline">Barriers + resources (problem-solving)</a></li>
                <li><a href="#ba-plan" className="hover:underline">Your Behavioral Activation Plan (write it out)</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="what-it-is">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What Behavioral Activation is
              </h2>
              
              <div className="p-4 bg-purple-50 rounded border border-purple-200 mb-4">
                <p className="text-gray-700 mb-3">
                  Behavioral Activation is one of the most important CBT skills for depression. It focuses on how behavior and mood influence each other, and how choosing actions can shift emotion over time.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>BA can be a treatment by itself or combined with cognitive skills like cognitive restructuring.</li>
                  <li>Research supports BA as an effective approach for depression.</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div id="why-it-works">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Why it works (the depression spiral)
              </h2>

              <p className="text-gray-700 mb-4">
                Depression often creates a "vicious cycle":
              </p>

              <div className="space-y-3 mb-4">
                <div className="p-3 bg-red-50 rounded border border-red-200 flex items-start">
                  <span className="text-red-600 font-bold mr-3">1</span>
                  <p className="text-gray-700">Something happens (stress, loss, overwhelm)</p>
                </div>
                <div className="p-3 bg-red-50 rounded border border-red-200 flex items-start">
                  <span className="text-red-600 font-bold mr-3">2</span>
                  <p className="text-gray-700">You feel low / anxious / shut down</p>
                </div>
                <div className="p-3 bg-red-50 rounded border border-red-200 flex items-start">
                  <span className="text-red-600 font-bold mr-3">3</span>
                  <p className="text-gray-700">You avoid, isolate, or stop doing life-giving activities</p>
                </div>
                <div className="p-3 bg-red-50 rounded border border-red-200 flex items-start">
                  <span className="text-red-600 font-bold mr-3">4</span>
                  <p className="text-gray-700">Life gets smaller → fewer positive moments → mood worsens</p>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded border-2 border-green-300">
                <p className="text-gray-700">
                  <strong>BA targets the cycle at the behavior level</strong>—because waiting to "feel motivated" keeps you stuck. BA uses an "outside-in" approach: action precedes emotion.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="step-1">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Step 1: Activity Monitoring (track mood + time)
              </h2>

              <p className="text-gray-700 mb-4">
                First, we get data. BA uses activity tracking to learn:
              </p>

              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>what tends to lift your mood ("UP" activities)</li>
                  <li>what tends to drain it ("DOWN" activities)</li>
                  <li>where avoidance shows up</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-3">
                Your PDF suggests rating mood 0–10 across the day so patterns become visible.
              </p>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-gray-800 font-bold mb-3">Copy/paste mini tracker (today):</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Hour / activity: ____________________  Mood (0–10): ___</li>
                  <li>Hour / activity: ____________________  Mood (0–10): ___</li>
                  <li>Hour / activity: ____________________  Mood (0–10): ___</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div id="step-2">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Step 2: UP vs DOWN activities
              </h2>

              <p className="text-gray-700 mb-4">
                After a day (or week) of monitoring, list:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">UP activities ↑</p>
                  <p className="text-gray-700 text-sm">
                    Things that tend to increase mood, calm, connection, or energy
                  </p>
                </div>

                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <p className="text-gray-800 font-bold mb-2">DOWN activities ↓</p>
                  <p className="text-gray-700 text-sm">
                    Things that keep you stuck, numb, isolated, or more hopeless
                  </p>
                </div>
              </div>

              <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-gray-700 italic text-sm">
                  BA isn't moral judgment ("good/bad"). It's pattern recognition—so you can replace DOWN time with UP time.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="step-3">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Step 3: Values, Pleasure, and Mastery
              </h2>

              <p className="text-gray-700 mb-4">
                A "life worth living" often includes a mix of:
              </p>

              <div className="space-y-3 mb-4">
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-800 font-bold mb-2">Values (meaning)</p>
                  <p className="text-gray-700 text-sm">What matters most; your compass</p>
                </div>

                <div className="p-4 bg-pink-50 rounded border border-pink-200">
                  <p className="text-gray-800 font-bold mb-2">Pleasure (enjoyment/nourishment)</p>
                  <p className="text-gray-700 text-sm">Rest, laughter, music, nature, connection</p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">Mastery (accomplishment)</p>
                  <p className="text-gray-700 text-sm">Skill-building, competence, finishing tasks</p>
                </div>
              </div>

              <div className="p-4 bg-teal-50 rounded border border-teal-200">
                <p className="text-gray-700 mb-3">
                  Your PDF emphasizes balancing these three—because depression tries to delete all of them.
                </p>
                <p className="text-gray-800 font-semibold mb-2">Quick prompt:</p>
                <ul className="space-y-1 text-gray-700 text-sm ml-4">
                  <li>My values (top 1–3): ________________________________</li>
                  <li>Pleasure ideas (tiny + doable): ________________________</li>
                  <li>Mastery ideas (small wins): ___________________________</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div id="step-4">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Step 4: Schedule activities (outside-in)
              </h2>

              <p className="text-gray-700 mb-4">
                BA works best when it becomes planned, not "only when I feel like it." Your PDF recommends:
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 text-sm">✓ Start with 2–3 easiest activities</p>
                </div>
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 text-sm">✓ Schedule them at realistic times</p>
                </div>
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 text-sm">✓ Expect some resistance, adjust rather than quit</p>
                </div>
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 text-sm">✓ Work in small steps ("little by little")</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4 italic">
                Guidelines like NICE include BA among recommended psychological treatments for depression (depending on severity and preferences).
              </p>
            </div>

            {/* Section 7 */}
            <div id="step-5">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Pleasure Predicting (mini behavioral experiment)
              </h2>

              <p className="text-gray-700 mb-4">
                Depression often predicts: "That won't help." BA tests that prediction.
              </p>

              <div className="p-4 bg-orange-50 rounded border border-orange-200 mb-4">
                <p className="text-gray-800 font-bold mb-3">Your PDF suggests a simple experiment:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Predict how satisfying an activity will be (0–10)</li>
                  <li>Do the activity</li>
                  <li>Rate actual satisfaction (0–10)</li>
                  <li>Learn what's true (not what depression claimed)</li>
                </ol>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-gray-800 font-bold mb-3">Copy/paste: Pleasure Predicting</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Activity: __________________________</li>
                  <li>Predicted satisfaction (0–10): ___</li>
                  <li>Actual satisfaction (0–10): ___</li>
                  <li>What I learned: ____________________</li>
                </ul>
              </div>

              <p className="text-gray-600 text-sm mt-3 italic">
                Behavioral experiments are a core CBT method, and BA often uses them in this exact way.
              </p>
            </div>

            {/* Section 8 */}
            <div id="step-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Barriers + resources (problem-solving)
              </h2>

              <p className="text-gray-700 mb-4">
                BA expects obstacles. Your PDF includes planning for barriers and resources so activation is more likely to happen.
              </p>

              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <p className="text-gray-800 font-bold mb-3">Barrier-buster prompts</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>What might block me? (fatigue, anxiety, logistics, shame)</li>
                  <li>What would make it easier? (prep, smaller step, accountability, reminders)</li>
                </ul>
              </div>
            </div>

            {/* Section 9 - Interactive BA Plan */}
            <div id="ba-plan">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Your Behavioral Activation Plan (write it out)
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-400 space-y-6">
                {/* Part A */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">A) My current vicious cycle</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="trigger" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Trigger / situation:
                      </label>
                      <textarea
                        id="trigger"
                        value={activityData.trigger}
                        onChange={(e) => updateField({ field: 'trigger', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="What started the downward spiral?"
                      />
                    </div>

                    <div>
                      <label htmlFor="emotion" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Emotion (what I feel):
                      </label>
                      <input
                        id="emotion"
                        type="text"
                        value={activityData.emotion}
                        onChange={(e) => updateField({ field: 'emotion', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="e.g., hopeless, anxious, numb"
                      />
                    </div>

                    <div>
                      <label htmlFor="what-do" className="block text-gray-700 font-semibold mb-2 text-sm">
                        What I do / avoid:
                      </label>
                      <textarea
                        id="what-do"
                        value={activityData.whatDo}
                        onChange={(e) => updateField({ field: 'whatDo', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="How do I respond? What do I stop doing?"
                      />
                    </div>

                    <div>
                      <label htmlFor="cost" className="block text-gray-700 font-semibold mb-2 text-sm">
                        What happens next (cost):
                      </label>
                      <textarea
                        id="cost"
                        value={activityData.cost}
                        onChange={(e) => updateField({ field: 'cost', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="How does this make things worse?"
                      />
                    </div>
                  </div>
                </div>

                {/* Part B */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">B) My "upward spiral" (this week)</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="value" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Value (why it matters):
                      </label>
                      <input
                        id="value"
                        type="text"
                        value={activityData.value}
                        onChange={(e) => updateField({ field: 'value', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="What do I want to move toward?"
                      />
                    </div>

                    <div>
                      <p className="text-gray-700 font-semibold mb-2">2 Pleasure activities (tiny):</p>
                      <div className="space-y-3">
                        <div className="grid md:grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={activityData.pleasure1}
                            onChange={(e) => updateField({ field: 'pleasure1', value: e.target.value })}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="1. Activity"
                          />
                          <input
                            type="text"
                            value={activityData.pleasure1When}
                            onChange={(e) => updateField({ field: 'pleasure1When', value: e.target.value })}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="When"
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={activityData.pleasure2}
                            onChange={(e) => updateField({ field: 'pleasure2', value: e.target.value })}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="2. Activity"
                          />
                          <input
                            type="text"
                            value={activityData.pleasure2When}
                            onChange={(e) => updateField({ field: 'pleasure2When', value: e.target.value })}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="When"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-700 font-semibold mb-2">2 Mastery activities (small wins):</p>
                      <div className="space-y-3">
                        <div className="grid md:grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={activityData.mastery1}
                            onChange={(e) => updateField({ field: 'mastery1', value: e.target.value })}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="1. Activity"
                          />
                          <input
                            type="text"
                            value={activityData.mastery1When}
                            onChange={(e) => updateField({ field: 'mastery1When', value: e.target.value })}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="When"
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={activityData.mastery2}
                            onChange={(e) => updateField({ field: 'mastery2', value: e.target.value })}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="2. Activity"
                          />
                          <input
                            type="text"
                            value={activityData.mastery2When}
                            onChange={(e) => updateField({ field: 'mastery2When', value: e.target.value })}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="When"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part C */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-3">C) My activity rules</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>I will start with 5–10 minutes if needed.</li>
                    <li>If I miss a day, I will reschedule, not judge myself.</li>
                    <li>I will track mood (0–10) during/after activities.</li>
                  </ul>
                </div>

                {/* Part D */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">D) Barriers + resources</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="barriers" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Likely barriers:
                      </label>
                      <textarea
                        id="barriers"
                        value={activityData.barriers}
                        onChange={(e) => updateField({ field: 'barriers', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="What might get in the way?"
                      />
                    </div>

                    <div>
                      <label htmlFor="resources" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Resources/supports:
                      </label>
                      <textarea
                        id="resources"
                        value={activityData.resources}
                        onChange={(e) => updateField({ field: 'resources', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="What will help me succeed?"
                      />
                    </div>
                  </div>
                </div>

                {/* Part E */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">E) Pleasure Predicting (one experiment)</p>
                  
                  <div className="grid md:grid-cols-4 gap-3">
                    <div className="md:col-span-2">
                      <label htmlFor="exp-activity" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Activity:
                      </label>
                      <input
                        id="exp-activity"
                        type="text"
                        value={activityData.expActivity}
                        onChange={(e) => updateField({ field: 'expActivity', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="What will I test?"
                      />
                    </div>
                    <div>
                      <label htmlFor="exp-predicted" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Predicted:
                      </label>
                      <input
                        id="exp-predicted"
                        type="number"
                        min="0"
                        max="10"
                        value={activityData.expPredicted}
                        onChange={(e) => updateField({ field: 'expPredicted', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="0-10"
                      />
                    </div>
                    <div>
                      <label htmlFor="exp-actual" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Actual:
                      </label>
                      <input
                        id="exp-actual"
                        type="number"
                        min="0"
                        max="10"
                        value={activityData.expActual}
                        onChange={(e) => updateField({ field: 'expActual', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="0-10"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label htmlFor="exp-learned" className="block text-gray-700 font-semibold mb-2 text-sm">
                      What I learned:
                    </label>
                    <textarea
                      id="exp-learned"
                      value={activityData.expLearned}
                      onChange={(e) => updateField({ field: 'expLearned', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      rows={2}
                      placeholder="How did reality compare to my prediction?"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/exposure-and-experiments" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Graded Exposure & Behavioral Experiments</p>
                  <p className="text-gray-600 text-sm">Test predictions, reduce avoidance</p>
                </Link>
                <Link href="/pages/cbt/cognitive-restructuring" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Restructuring</p>
                  <p className="text-gray-600 text-sm">When thoughts sabotage activation</p>
                </Link>
                <Link href="/pages/cbt/thought-record" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thought Record</p>
                  <p className="text-gray-600 text-sm">Track situation → thought → outcomes</p>
                </Link>
                <Link href="/pages/interpersonal-skills/values" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Find Your Values</p>
                  <p className="text-gray-600 text-sm">Identify what matters most</p>
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
