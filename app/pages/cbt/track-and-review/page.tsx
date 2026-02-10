'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function TrackAndReviewPage() {
  const router = useRouter();
  
  // Present/Not Present Tracker
  const [presentTracker, setPresentTracker] = useState({
    target: '',
    morning: '',
    afternoon: '',
    evening: '',
    note: '',
  });

  // Episode Tracker
  const [episodeTracker, setEpisodeTracker] = useState({
    target: '',
    when: '',
    where: '',
    intensity: '',
    trigger: '',
    bodySigns: '',
    thoughtHeadline: '',
    whatIDid: '',
    outcomeShort: '',
    outcomeLater: '',
  });

  // Skills Used Tracker
  const [skillsTracker, setSkillsTracker] = useState({
    situation: '',
    targetRating: '',
    skillTried: '',
    timing: '',
    effect: '',
    nextTime: '',
  });

  // Weekly Review
  const [weeklyReview, setWeeklyReview] = useState({
    trigger1: '',
    trigger2: '',
    trigger3: '',
    warning1: '',
    warning2: '',
    warning3: '',
    whatHelped1: '',
    whatHelped2: '',
    whatHelped3: '',
    whatKeptGoing1: '',
    whatKeptGoing2: '',
    whatKeptGoing3: '',
    oneChange: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updatePresentTracker = ({ field, value }: { field: string; value: string }) => {
    setPresentTracker(prev => ({ ...prev, [field]: value }));
  };

  const updateEpisodeTracker = ({ field, value }: { field: string; value: string }) => {
    setEpisodeTracker(prev => ({ ...prev, [field]: value }));
  };

  const updateSkillsTracker = ({ field, value }: { field: string; value: string }) => {
    setSkillsTracker(prev => ({ ...prev, [field]: value }));
  };

  const updateWeeklyReview = ({ field, value }: { field: string; value: string }) => {
    setWeeklyReview(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            CBT Track & Review (Self-Monitoring)
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Notice, record, review patterns—then choose skills that actually work
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Self-monitoring is one of the most essential (and most underrated) CBT skills. It means learning to notice what's happening (thoughts, feelings, body sensations, urges, behaviors) and record it in a consistent way—so you can review patterns, test assumptions, and choose skills that actually work.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700">
                  <strong>CBT is built around collaborative empiricism</strong>—using real data to understand what keeps problems going and what helps them shift. Self-monitoring is how you collect that data in everyday life, not just in session.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4">
                <li><a href="#why-matters" className="hover:underline">Why self-monitoring matters in CBT</a></li>
                <li><a href="#what-is" className="hover:underline">What self-monitoring is (two parts)</a></li>
                <li><a href="#what-track" className="hover:underline">What to track (keep it simple)</a></li>
                <li><a href="#timing-format" className="hover:underline">Timing + format (make it doable)</a></li>
                <li><a href="#review-refine" className="hover:underline">Review & refine (the "review" part)</a></li>
                <li><a href="#starter-trackers" className="hover:underline">Starter trackers (copy/paste)</a></li>
                <li><a href="#troubleshooting" className="hover:underline">Troubleshooting (common stuck points)</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="why-matters">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Why self-monitoring matters in CBT
              </h2>

              <p className="text-gray-700 mb-4">
                Self-monitoring helps you:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                  <p className="text-gray-700">
                    <strong>Build awareness</strong> (often the first step in change)
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <p className="text-gray-700">
                    <strong>Develop a clearer formulation</strong> (a shared map of what triggers your difficulties and what maintains them)
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                  <p className="text-gray-700">
                    <strong>Test beliefs with evidence</strong> you gathered yourself, which is often more convincing than reassurance or advice
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                  <p className="text-gray-700">
                    <strong>Track progress over time</strong> and see what interventions are helping
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg border border-pink-200">
                  <p className="text-gray-700">
                    <strong>Sometimes get a small benefit just from monitoring</strong> (because awareness changes behavior)
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="what-is">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) What self-monitoring is (two parts)
              </h2>

              <p className="text-gray-700 mb-4">
                Self-monitoring has two core skills:
              </p>

              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-2 border-yellow-300">
                  <h3 className="text-gray-800 font-bold mb-3">A) Discrimination (noticing)</h3>
                  <p className="text-gray-700 mb-3">
                    You identify the target in the moment (or soon after):
                  </p>
                  <div className="bg-white p-3 rounded border border-yellow-300">
                    <p className="text-gray-600 text-sm">
                      "I'm anxious." "My chest is tight." "I'm ruminating." "I'm avoiding."
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mt-3 italic">
                    This can be hard at first—especially if you've spent years pushing feelings away or if you're worried about "doing it perfectly."
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border-2 border-teal-300">
                  <h3 className="text-gray-800 font-bold mb-3">B) Recording (writing it down)</h3>
                  <p className="text-gray-700">
                    You document what happened (what, when, where, intensity, what you did, what happened next). Later, you review the record to see patterns and choose next steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="what-track">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) What to track (keep it simple)
              </h2>

              <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border-2 border-red-300 mb-4">
                <p className="text-gray-800 font-bold text-lg">
                  The #1 rule: track one well-defined target at a time.
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  Trying to track too much reduces accuracy and makes it harder to keep up.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <p className="text-gray-800 font-bold mb-3">Good starter targets:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  <p className="text-gray-700 text-sm">• Mood (0–10), anxiety (0–10), anger (0–10)</p>
                  <p className="text-gray-700 text-sm">• Rumination / worry episodes</p>
                  <p className="text-gray-700 text-sm">• Urges (self-harm, checking, reassurance)</p>
                  <p className="text-gray-700 text-sm">• Avoidance behaviors (canceling, procrastinating)</p>
                  <p className="text-gray-700 text-sm">• Sleep (bedtime, wake time, awakenings)</p>
                  <p className="text-gray-700 text-sm">• Substance cravings</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4 italic">
                If thoughts are hard to catch, start with body sensations or observable behaviors first, then expand.
              </p>
            </div>

            {/* Section 4 */}
            <div id="timing-format">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Timing + format (make it doable)
              </h2>

              <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 mb-4">
                <p className="text-gray-700 mb-4">
                  Self-monitoring works best when recorded <strong>during or shortly after the event</strong>, before your brain rewrites the story.
                </p>

                <p className="text-gray-800 font-bold mb-2">Choose a format that matches your life:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Phone note / simple form</li>
                  <li>Tiny notebook</li>
                  <li>A printable sheet you keep visible</li>
                </ul>
              </div>

              <div className="p-4 bg-teal-50 rounded border-2 border-teal-300">
                <p className="text-gray-800 font-bold text-center">
                  The best tracker is the one you'll actually use.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="review-refine">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Review & refine (the "review" part)
              </h2>

              <div className="p-5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border-2 border-orange-300 mb-4">
                <p className="text-gray-800 font-bold mb-3">
                  Tracking without review is like collecting puzzle pieces and never assembling them.
                </p>

                <p className="text-gray-700 mb-3">A CBT-style review helps you answer:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>What are my top triggers?</li>
                  <li>What are the earliest warning signs?</li>
                  <li>What coping strategies do I use—do they help short-term, but cost long-term?</li>
                  <li>What patterns show up across episodes (time of day, people, places, thoughts)?</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700">
                  If you're doing therapy, <strong>reviewing monitoring records in session</strong> improves accuracy and makes the work feel meaningful (your effort gets used).
                </p>
              </div>
            </div>

            {/* Section 6 - Starter Trackers */}
            <div id="starter-trackers">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Starter trackers (copy/paste)
              </h2>

              {/* Tracker A */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  A) "Present / Not Present" quick check
                </h3>
                <p className="text-gray-600 text-sm mb-4 italic">
                  Perfect for beginners
                </p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border-2 border-green-400 space-y-4">
                  <div>
                    <label htmlFor="present-target" className="block text-gray-800 font-bold mb-2">
                      Target today:
                    </label>
                    <input
                      id="present-target"
                      type="text"
                      value={presentTracker.target}
                      onChange={(e) => updatePresentTracker({ field: 'target', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., anxiety, rumination, anger..."
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-green-300">
                      <p className="text-gray-800 font-semibold mb-3">Morning:</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="morning"
                            value="present"
                            checked={presentTracker.morning === 'present'}
                            onChange={(e) => updatePresentTracker({ field: 'morning', value: e.target.value })}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Present</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="morning"
                            value="not-present"
                            checked={presentTracker.morning === 'not-present'}
                            onChange={(e) => updatePresentTracker({ field: 'morning', value: e.target.value })}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Not present</span>
                        </label>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg border border-green-300">
                      <p className="text-gray-800 font-semibold mb-3">Afternoon:</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="afternoon"
                            value="present"
                            checked={presentTracker.afternoon === 'present'}
                            onChange={(e) => updatePresentTracker({ field: 'afternoon', value: e.target.value })}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Present</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="afternoon"
                            value="not-present"
                            checked={presentTracker.afternoon === 'not-present'}
                            onChange={(e) => updatePresentTracker({ field: 'afternoon', value: e.target.value })}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Not present</span>
                        </label>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg border border-green-300">
                      <p className="text-gray-800 font-semibold mb-3">Evening:</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="evening"
                            value="present"
                            checked={presentTracker.evening === 'present'}
                            onChange={(e) => updatePresentTracker({ field: 'evening', value: e.target.value })}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Present</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="evening"
                            value="not-present"
                            checked={presentTracker.evening === 'not-present'}
                            onChange={(e) => updatePresentTracker({ field: 'evening', value: e.target.value })}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Not present</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="present-note" className="block text-gray-800 font-bold mb-2">
                      Note (1 sentence):
                    </label>
                    <input
                      id="present-note"
                      type="text"
                      value={presentTracker.note}
                      onChange={(e) => updatePresentTracker({ field: 'note', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Quick observation..."
                    />
                  </div>

                  <p className="text-gray-600 text-sm italic">
                    Use this if you're overwhelmed or can't access thoughts/emotions easily yet.
                  </p>
                </div>
              </div>

              {/* Tracker B */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  B) 1-Minute episode tracker
                </h3>
                <p className="text-gray-600 text-sm mb-4 italic">
                  Most common CBT format
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-400 space-y-4">
                  <div>
                    <label htmlFor="episode-target" className="block text-gray-800 font-bold mb-2">
                      Target: (worry / panic / anger / urge / rumination / avoidance)
                    </label>
                    <input
                      id="episode-target"
                      type="text"
                      value={episodeTracker.target}
                      onChange={(e) => updateEpisodeTracker({ field: 'target', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What happened?"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="episode-when" className="block text-gray-700 font-semibold mb-2">
                        When:
                      </label>
                      <input
                        id="episode-when"
                        type="text"
                        value={episodeTracker.when}
                        onChange={(e) => updateEpisodeTracker({ field: 'when', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Time..."
                      />
                    </div>

                    <div>
                      <label htmlFor="episode-where" className="block text-gray-700 font-semibold mb-2">
                        Where:
                      </label>
                      <input
                        id="episode-where"
                        type="text"
                        value={episodeTracker.where}
                        onChange={(e) => updateEpisodeTracker({ field: 'where', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Location..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="episode-intensity" className="block text-gray-700 font-semibold mb-2">
                      Intensity (0–10):
                    </label>
                    <input
                      id="episode-intensity"
                      type="number"
                      min="0"
                      max="10"
                      value={episodeTracker.intensity}
                      onChange={(e) => updateEpisodeTracker({ field: 'intensity', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="episode-trigger" className="block text-gray-700 font-semibold mb-2">
                      Trigger (facts):
                    </label>
                    <textarea
                      id="episode-trigger"
                      value={episodeTracker.trigger}
                      onChange={(e) => updateEpisodeTracker({ field: 'trigger', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={2}
                      placeholder="What happened right before?"
                    />
                  </div>

                  <div>
                    <label htmlFor="episode-body" className="block text-gray-700 font-semibold mb-2">
                      Body signs:
                    </label>
                    <textarea
                      id="episode-body"
                      value={episodeTracker.bodySigns}
                      onChange={(e) => updateEpisodeTracker({ field: 'bodySigns', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={2}
                      placeholder="Physical sensations..."
                    />
                  </div>

                  <div>
                    <label htmlFor="episode-thought" className="block text-gray-700 font-semibold mb-2">
                      Thought headline:
                    </label>
                    <input
                      id="episode-thought"
                      type="text"
                      value={episodeTracker.thoughtHeadline}
                      onChange={(e) => updateEpisodeTracker({ field: 'thoughtHeadline', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder='"..."'
                    />
                  </div>

                  <div>
                    <label htmlFor="episode-did" className="block text-gray-700 font-semibold mb-2">
                      What I did next:
                    </label>
                    <textarea
                      id="episode-did"
                      value={episodeTracker.whatIDid}
                      onChange={(e) => updateEpisodeTracker({ field: 'whatIDid', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={2}
                      placeholder="Behavior/action..."
                    />
                  </div>

                  <div>
                    <label htmlFor="episode-short" className="block text-gray-700 font-semibold mb-2">
                      Outcome (short term):
                    </label>
                    <textarea
                      id="episode-short"
                      value={episodeTracker.outcomeShort}
                      onChange={(e) => updateEpisodeTracker({ field: 'outcomeShort', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={2}
                      placeholder="What happened right after?"
                    />
                  </div>

                  <div>
                    <label htmlFor="episode-later" className="block text-gray-700 font-semibold mb-2">
                      Outcome (later):
                    </label>
                    <textarea
                      id="episode-later"
                      value={episodeTracker.outcomeLater}
                      onChange={(e) => updateEpisodeTracker({ field: 'outcomeLater', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={2}
                      placeholder="How did it go over time?"
                    />
                  </div>

                  <p className="text-gray-600 text-sm italic">
                    "Thought headlines" are enough—you don't need an essay.
                  </p>
                </div>
              </div>

              {/* Tracker C */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  C) "Skills used" tracker
                </h3>
                <p className="text-gray-600 text-sm mb-4 italic">
                  For later in therapy
                </p>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-400 space-y-4">
                  <div>
                    <label htmlFor="skills-situation" className="block text-gray-800 font-bold mb-2">
                      Situation:
                    </label>
                    <textarea
                      id="skills-situation"
                      value={skillsTracker.situation}
                      onChange={(e) => updateSkillsTracker({ field: 'situation', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      rows={2}
                      placeholder="What was happening?"
                    />
                  </div>

                  <div>
                    <label htmlFor="skills-target" className="block text-gray-700 font-semibold mb-2">
                      Target (0–10):
                    </label>
                    <input
                      id="skills-target"
                      type="number"
                      min="0"
                      max="10"
                      value={skillsTracker.targetRating}
                      onChange={(e) => updateSkillsTracker({ field: 'targetRating', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="skills-tried" className="block text-gray-700 font-semibold mb-2">
                      Skill I tried: (breathing / time-out / thought record / exposure / opposite action / reach out)
                    </label>
                    <input
                      id="skills-tried"
                      type="text"
                      value={skillsTracker.skillTried}
                      onChange={(e) => updateSkillsTracker({ field: 'skillTried', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Which skill?"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Did I use it early or late?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="timing"
                          value="early"
                          checked={skillsTracker.timing === 'early'}
                          onChange={(e) => updateSkillsTracker({ field: 'timing', value: e.target.value })}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Early</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="timing"
                          value="late"
                          checked={skillsTracker.timing === 'late'}
                          onChange={(e) => updateSkillsTracker({ field: 'timing', value: e.target.value })}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Late</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="skills-effect" className="block text-gray-700 font-semibold mb-2">
                      Effect (0–10):
                    </label>
                    <input
                      id="skills-effect"
                      type="number"
                      min="0"
                      max="10"
                      value={skillsTracker.effect}
                      onChange={(e) => updateSkillsTracker({ field: 'effect', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="skills-next" className="block text-gray-700 font-semibold mb-2">
                      What I'll try next time:
                    </label>
                    <textarea
                      id="skills-next"
                      value={skillsTracker.nextTime}
                      onChange={(e) => updateSkillsTracker({ field: 'nextTime', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      rows={2}
                      placeholder="Adjustments or new approach..."
                    />
                  </div>
                </div>
              </div>

              {/* Tracker D */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  D) Weekly review
                </h3>
                <p className="text-gray-600 text-sm mb-4 italic">
                  10 minutes
                </p>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border-2 border-orange-400 space-y-5">
                  <p className="text-gray-700 mb-4">
                    Pick one day each week to answer:
                  </p>

                  <div>
                    <p className="text-gray-800 font-bold mb-3">1. My top 3 triggers were:</p>
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={weeklyReview.trigger1}
                        onChange={(e) => updateWeeklyReview({ field: 'trigger1', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                      <input
                        type="text"
                        value={weeklyReview.trigger2}
                        onChange={(e) => updateWeeklyReview({ field: 'trigger2', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                      <input
                        type="text"
                        value={weeklyReview.trigger3}
                        onChange={(e) => updateWeeklyReview({ field: 'trigger3', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-800 font-bold mb-3">2. My earliest warning signs were:</p>
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={weeklyReview.warning1}
                        onChange={(e) => updateWeeklyReview({ field: 'warning1', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                      <input
                        type="text"
                        value={weeklyReview.warning2}
                        onChange={(e) => updateWeeklyReview({ field: 'warning2', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                      <input
                        type="text"
                        value={weeklyReview.warning3}
                        onChange={(e) => updateWeeklyReview({ field: 'warning3', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-800 font-bold mb-3">3. What helped most (even 5%)?</p>
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={weeklyReview.whatHelped1}
                        onChange={(e) => updateWeeklyReview({ field: 'whatHelped1', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                      <input
                        type="text"
                        value={weeklyReview.whatHelped2}
                        onChange={(e) => updateWeeklyReview({ field: 'whatHelped2', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                      <input
                        type="text"
                        value={weeklyReview.whatHelped3}
                        onChange={(e) => updateWeeklyReview({ field: 'whatHelped3', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-800 font-bold mb-3">4. What kept it going? (avoidance, checking, rumination, isolation)</p>
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={weeklyReview.whatKeptGoing1}
                        onChange={(e) => updateWeeklyReview({ field: 'whatKeptGoing1', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                      <input
                        type="text"
                        value={weeklyReview.whatKeptGoing2}
                        onChange={(e) => updateWeeklyReview({ field: 'whatKeptGoing2', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                      <input
                        type="text"
                        value={weeklyReview.whatKeptGoing3}
                        onChange={(e) => updateWeeklyReview({ field: 'whatKeptGoing3', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="•"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-800 font-bold mb-3">5. One change I'll test next week:</p>
                    <textarea
                      value={weeklyReview.oneChange}
                      onChange={(e) => updateWeeklyReview({ field: 'oneChange', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      rows={2}
                      placeholder="•"
                    />
                  </div>

                  <div className="p-4 bg-white rounded border-2 border-orange-300">
                    <p className="text-gray-700 font-semibold">
                      This review mindset supports CBT's "data → formulation → plan" cycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="troubleshooting">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Troubleshooting (common stuck points)
              </h2>

              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
                  <p className="text-gray-800 font-bold mb-2">"I forget to track."</p>
                  <p className="text-gray-700">
                    Attach tracking to an existing routine (after meals, bathroom breaks, bedtime). Make it tiny.
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">"I can't tell what I feel."</p>
                  <p className="text-gray-700">
                    Track body sensations first (tight chest, clenched jaw, nausea) or behaviors (checking, scrolling, isolating).
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <p className="text-gray-800 font-bold mb-2">"I'm doing it wrong."</p>
                  <p className="text-gray-700">
                    There isn't one perfect way. The goal is useful data, not perfect data.
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <p className="text-gray-800 font-bold mb-2">"It makes me feel worse to pay attention."</p>
                  <p className="text-gray-700">
                    Start with shorter windows (1–2 check-ins/day) and track neutral facts. If distress spikes significantly, scale down and consider doing it with clinician support.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/thought-record" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thought Record</p>
                  <p className="text-gray-600 text-sm">Structured self-monitoring + evidence review</p>
                </Link>
                <Link href="/pages/cbt/cognitive-restructuring" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Restructuring</p>
                  <p className="text-gray-600 text-sm">Use your data to build balanced thoughts</p>
                </Link>
                <Link href="/pages/cbt/behavioral-activation" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Behavioral Activation</p>
                  <p className="text-gray-600 text-sm">Track mood → activities → outcomes</p>
                </Link>
                <Link href="/pages/emotional-regulation/anger-thermometer" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Anger Diary / Thermometer</p>
                  <p className="text-gray-600 text-sm">Emotion-specific tracking</p>
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
