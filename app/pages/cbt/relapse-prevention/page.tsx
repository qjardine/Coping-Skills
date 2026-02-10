'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function RelapsePreventionPage() {
  const router = useRouter();
  const [planData, setPlanData] = useState({
    targetBehavior: '',
    stayingOnTrack: '',
    when: '',
    where: '',
    why: '',
    withWhom: '',
    whatAfter: '',
    externalTriggers: '',
    internalTriggers: '',
    bodySigns: '',
    thoughtSigns: '',
    behaviorSigns: '',
    nonTargetActivity: '',
    urgeSurfing: '',
    thoughtTool: '',
    contactList: '',
    leaveStrategy: '',
    refusalScript: '',
    lowRisk1: '',
    lowRisk2: '',
    lowRisk3: '',
    wakeTime: '',
    morning: '',
    afternoon: '',
    evening: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updateField = ({ field, value }: { field: string; value: string }) => {
    setPlanData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            CBT Relapse Prevention Plan
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Prevent lapses and stop the spiral from turning into relapse
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Relapse prevention (RP) is a CBT-based approach that focuses on the maintenance stage of change: (1) preventing an initial lapse, and (2) preventing a lapse from turning into a full relapse.
              </p>
              
              <p className="text-gray-700 mb-4">
                CBT relapse prevention is grounded in learning principles (conditioning + reinforcement): triggers and emotional states become linked to urges, and habits get strengthened by short-term relief or reward—so we build new skills + new routines to break that loop.
              </p>

              <div className="p-5 bg-red-50 rounded-lg border-2 border-red-300 mb-6">
                <p className="text-gray-700 mb-2 font-semibold">Crisis Support:</p>
                <p className="text-gray-700">
                  If you're in immediate danger or at risk of harming yourself/others, use emergency services. In the U.S., SAMHSA's free, confidential 24/7 helpline: <strong className="text-red-700">1-800-662-HELP (4357)</strong>
                </p>
              </div>

              <div className="flex justify-center">
                <a
                  href="/assets/Worksheets/relapse-prevention.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
                >
                  📄 Download Relapse Prevention Strategies (PDF)
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4 text-sm">
                <li><a href="#lapse-vs-relapse" className="hover:underline">Lapse vs relapse (why "one slip" isn't failure)</a></li>
                <li><a href="#roadmap" className="hover:underline">Your relapse roadmap</a></li>
                <li><a href="#functional-analysis" className="hover:underline">Functional analysis: the 5 W's</a></li>
                <li><a href="#high-risk" className="hover:underline">High-risk vs low-risk situations</a></li>
                <li><a href="#coping-urges" className="hover:underline">Coping with urges/cravings</a></li>
                <li><a href="#refusal-skills" className="hover:underline">Refusal + boundary skills</a></li>
                <li><a href="#ave" className="hover:underline">The Abstinence Violation Effect (AVE)</a></li>
                <li><a href="#daily-plan" className="hover:underline">Daily recovery plan</a></li>
                <li><a href="#rp-plan" className="hover:underline">Your Relapse Prevention Plan</a></li>
                <li><a href="#if-slip" className="hover:underline">If I slip: get back on track protocol</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="lapse-vs-relapse">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Lapse vs relapse (why "one slip" isn't failure)
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-800 font-bold mb-2">Lapse</p>
                  <p className="text-gray-700 text-sm">A brief return to the old behavior</p>
                </div>

                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <p className="text-gray-800 font-bold mb-2">Relapse</p>
                  <p className="text-gray-700 text-sm">Returning to the old pattern fully</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700">
                  <strong>RP's job is to stop the spiral in between.</strong> A key idea in the relapse prevention model is that high-risk situations often trigger the first lapse—especially when coping skills and self-efficacy are low.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="roadmap">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Your relapse roadmap: Trigger → Thought → Craving/Urge → Behavior
              </h2>

              <p className="text-gray-700 mb-4">
                Your training materials describe this classic chain:
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded border border-purple-200 flex items-center">
                  <span className="text-purple-600 font-bold mr-3 text-lg">1</span>
                  <div>
                    <p className="text-gray-800 font-bold">Trigger</p>
                    <p className="text-gray-600 text-sm">(internal/external)</p>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded border border-purple-200 flex items-center">
                  <span className="text-purple-600 font-bold mr-3 text-lg">2</span>
                  <div>
                    <p className="text-gray-800 font-bold">Thought</p>
                    <p className="text-gray-600 text-sm">("I need relief," "I deserve this")</p>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded border border-purple-200 flex items-center">
                  <span className="text-purple-600 font-bold mr-3 text-lg">3</span>
                  <div>
                    <p className="text-gray-800 font-bold">Urge</p>
                    <p className="text-gray-600 text-sm">(body + mind)</p>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded border border-purple-200 flex items-center">
                  <span className="text-purple-600 font-bold mr-3 text-lg">4</span>
                  <div>
                    <p className="text-gray-800 font-bold">Behavior</p>
                    <p className="text-gray-600 text-sm">(short-term relief, long-term cost)</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4 italic">
                Even if your relapse target isn't substances (e.g., self-harm, avoidance, compulsive checking), the same CBT chain applies.
              </p>
            </div>

            {/* Section 3 */}
            <div id="functional-analysis">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Functional analysis: the 5 W's (what sets you up)
              </h2>

              <p className="text-gray-700 mb-4">
                CBT starts by learning how the behavior fits into your life, not just that it happens. Use the 5 W's (functional analysis):
              </p>

              <div className="p-5 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>When</strong> does it happen?</li>
                  <li><strong>Where</strong> does it happen?</li>
                  <li><strong>Why</strong> (what feelings/thoughts/cues come before)?</li>
                  <li><strong>With/from whom</strong>?</li>
                  <li><strong>What happened after</strong> (effects, consequences)?</li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4">
                <strong>Why this matters:</strong> it tells you where to intervene—before the urge peaks.
              </p>
            </div>

            {/* Section 4 */}
            <div id="high-risk">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) High-risk vs low-risk situations
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <p className="text-gray-800 font-bold mb-2">High-risk situations</p>
                  <p className="text-gray-700 text-sm">Include triggers and have been strongly associated with the behavior</p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">Low-risk situations</p>
                  <p className="text-gray-700 text-sm">Places/people/times not associated with the behavior</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded border-2 border-yellow-300">
                <p className="text-gray-700 font-semibold">
                  A core CBT prevention move is to decrease time in high-risk situations and increase time in low-risk situations.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="coping-urges">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Coping with urges/cravings (skill menu)
              </h2>

              <p className="text-gray-700 mb-4">
                RP acknowledges that urges are "inevitable," but teaches that urges are survivable and workable with tools.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold text-sm">1. Do a non-target activity</p>
                  <p className="text-gray-600 text-xs">Move, shower, tasks, grounding</p>
                </div>

                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold text-sm">2. Talk about the craving/urge</p>
                  <p className="text-gray-600 text-xs">Name it; don't fight it alone</p>
                </div>

                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold text-sm">3. "Surf" the urge</p>
                  <p className="text-gray-600 text-xs">Ride the wave without acting</p>
                </div>

                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold text-sm">4. Thought stopping / interrupt</p>
                  <p className="text-gray-600 text-xs">Break the thought loop</p>
                </div>

                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold text-sm">5. Contact a safe person</p>
                  <p className="text-gray-600 text-xs">Counselor/peer support</p>
                </div>

                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold text-sm">6. Spiritual support</p>
                  <p className="text-gray-600 text-xs">Prayer/ritual if that fits you</p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="refusal-skills">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Refusal + boundary skills (how to say "no")
              </h2>

              <p className="text-gray-700 mb-4">
                A very common relapse situation is being offered the old behavior (directly or indirectly). Refusal skills include:
              </p>

              <div className="p-5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span>Respond quickly (don't stall)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span>Maintain eye contact (if safe)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span>Say a clear, firm "No" (don't leave the door open)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span>Keep it brief</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span>Leave the situation</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-600 text-sm mt-3 italic">
                Practice and role-play are recommended in the materials.
              </p>
            </div>

            {/* Section 7 */}
            <div id="ave">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) The Abstinence Violation Effect (AVE) + how to reframe
              </h2>

              <p className="text-gray-700 mb-4">
                After a lapse, two paths are common:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">Helpful reframe ✓</p>
                  <p className="text-gray-700 text-sm">"I made a mistake; I can adjust and keep going."</p>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <p className="text-gray-800 font-bold mb-2">AVE spiral ✗</p>
                  <p className="text-gray-700 text-sm">"I'm hopeless; I blew it; I might as well keep going."</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded border border-blue-200 mt-4">
                <p className="text-gray-700">
                  RP explicitly teaches that a lapse does not automatically mean returning to full relapse, and encourages reframing (learning mindset). This "lapse → guilt → relapse" pattern is a key target in Marlatt-style relapse prevention.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div id="daily-plan">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Daily recovery plan (schedule = protection)
              </h2>

              <p className="text-gray-700 mb-4">
                A high-risk factor is an unstructured day ("I just do what I feel like doing"), which increases exposure to triggers and high-risk situations.
              </p>

              <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <p className="text-gray-800 font-bold mb-3">Your module emphasizes that an hour-by-hour plan can:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>increase self-efficacy</li>
                  <li>anticipate obstacles</li>
                  <li>increase time in low-risk, non-trigger situations</li>
                  <li>reduce time in high-risk situations</li>
                </ul>
              </div>
            </div>

            {/* Section 9 - Interactive Plan */}
            <div id="rp-plan">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Your Relapse Prevention Plan (write it out)
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-400 space-y-6">
                {/* Part A */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">A) What I'm preventing</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="target-behavior" className="block text-gray-700 font-semibold mb-2">
                        My target behavior(s):
                      </label>
                      <textarea
                        id="target-behavior"
                        value={planData.targetBehavior}
                        onChange={(e) => updateField({ field: 'targetBehavior', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="What behavior am I working to prevent?"
                      />
                    </div>

                    <div>
                      <label htmlFor="staying-track" className="block text-gray-700 font-semibold mb-2">
                        What "staying on track" looks like:
                      </label>
                      <input
                        id="staying-track"
                        type="text"
                        value={planData.stayingOnTrack}
                        onChange={(e) => updateField({ field: 'stayingOnTrack', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="My recovery/maintenance goal..."
                      />
                    </div>
                  </div>
                </div>

                {/* Part B */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">B) My high-risk map (5 W's)</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="when" className="block text-gray-700 font-semibold mb-2 text-sm">
                        When:
                      </label>
                      <input
                        id="when"
                        type="text"
                        value={planData.when}
                        onChange={(e) => updateField({ field: 'when', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Times/days..."
                      />
                    </div>

                    <div>
                      <label htmlFor="where" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Where:
                      </label>
                      <input
                        id="where"
                        type="text"
                        value={planData.where}
                        onChange={(e) => updateField({ field: 'where', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Places..."
                      />
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="why" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Why (feelings/thoughts):
                      </label>
                      <textarea
                        id="why"
                        value={planData.why}
                        onChange={(e) => updateField({ field: 'why', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="What emotions or thoughts come before?"
                      />
                    </div>

                    <div>
                      <label htmlFor="with-whom" className="block text-gray-700 font-semibold mb-2 text-sm">
                        With/from whom:
                      </label>
                      <input
                        id="with-whom"
                        type="text"
                        value={planData.withWhom}
                        onChange={(e) => updateField({ field: 'withWhom', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="People involved..."
                      />
                    </div>

                    <div>
                      <label htmlFor="what-after" className="block text-gray-700 font-semibold mb-2 text-sm">
                        What happens after (short-term relief / long-term cost):
                      </label>
                      <textarea
                        id="what-after"
                        value={planData.whatAfter}
                        onChange={(e) => updateField({ field: 'whatAfter', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="Consequences and effects..."
                      />
                    </div>
                  </div>
                </div>

                {/* Part C */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">C) My triggers</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="external-triggers" className="block text-gray-700 font-semibold mb-2">
                        External triggers (people/places/things/times):
                      </label>
                      <textarea
                        id="external-triggers"
                        value={planData.externalTriggers}
                        onChange={(e) => updateField({ field: 'externalTriggers', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={3}
                        placeholder="List external triggers..."
                      />
                    </div>

                    <div>
                      <label htmlFor="internal-triggers" className="block text-gray-700 font-semibold mb-2">
                        Internal triggers (emotions/states):
                      </label>
                      <textarea
                        id="internal-triggers"
                        value={planData.internalTriggers}
                        onChange={(e) => updateField({ field: 'internalTriggers', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={3}
                        placeholder="anxiety, anger, boredom, fatigue, excitement, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Part D */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">D) Early warning signs (my "yellow light")</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="body-signs" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Body signs:
                      </label>
                      <input
                        id="body-signs"
                        type="text"
                        value={planData.bodySigns}
                        onChange={(e) => updateField({ field: 'bodySigns', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Physical sensations..."
                      />
                    </div>

                    <div>
                      <label htmlFor="thought-signs" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Thought signs:
                      </label>
                      <input
                        id="thought-signs"
                        type="text"
                        value={planData.thoughtSigns}
                        onChange={(e) => updateField({ field: 'thoughtSigns', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Recurring thoughts or mental patterns..."
                      />
                    </div>

                    <div>
                      <label htmlFor="behavior-signs" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Behavior signs (avoidance, isolation, checking, etc.):
                      </label>
                      <input
                        id="behavior-signs"
                        type="text"
                        value={planData.behaviorSigns}
                        onChange={(e) => updateField({ field: 'behaviorSigns', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Warning behaviors..."
                      />
                    </div>
                  </div>
                </div>

                {/* Part E */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">E) My coping toolkit (pick 6–10)</p>
                  
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="non-target" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Non-target activity:
                      </label>
                      <input
                        id="non-target"
                        type="text"
                        value={planData.nonTargetActivity}
                        onChange={(e) => updateField({ field: 'nonTargetActivity', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="What will I do instead?"
                      />
                    </div>

                    <div>
                      <label htmlFor="urge-surfing" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Urge surfing plan:
                      </label>
                      <input
                        id="urge-surfing"
                        type="text"
                        value={planData.urgeSurfing}
                        onChange={(e) => updateField({ field: 'urgeSurfing', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="How will I ride the urge?"
                      />
                    </div>

                    <div>
                      <label htmlFor="thought-tool" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Thought tool (reframe / restructuring):
                      </label>
                      <input
                        id="thought-tool"
                        type="text"
                        value={planData.thoughtTool}
                        onChange={(e) => updateField({ field: 'thoughtTool', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Reframe I'll use..."
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-list" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Contact list (safe people):
                      </label>
                      <textarea
                        id="contact-list"
                        value={planData.contactList}
                        onChange={(e) => updateField({ field: 'contactList', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="Names and phone numbers..."
                      />
                    </div>

                    <div>
                      <label htmlFor="leave-strategy" className="block text-gray-700 font-semibold mb-2 text-sm">
                        "Leave the situation" strategy:
                      </label>
                      <input
                        id="leave-strategy"
                        type="text"
                        value={planData.leaveStrategy}
                        onChange={(e) => updateField({ field: 'leaveStrategy', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="My exit plan..."
                      />
                    </div>

                    <div>
                      <label htmlFor="refusal-script" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Refusal script:
                      </label>
                      <input
                        id="refusal-script"
                        type="text"
                        value={planData.refusalScript}
                        onChange={(e) => updateField({ field: 'refusalScript', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder='"No thanks, [reason]"'
                      />
                    </div>
                  </div>
                </div>

                {/* Part F */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">F) My low-risk plan (what I do instead)</p>
                  
                  <p className="text-gray-700 mb-3 text-sm">3 low-risk places/activities:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-semibold">1)</span>
                      <input
                        type="text"
                        value={planData.lowRisk1}
                        onChange={(e) => updateField({ field: 'lowRisk1', value: e.target.value })}
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Low-risk activity or place..."
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-semibold">2)</span>
                      <input
                        type="text"
                        value={planData.lowRisk2}
                        onChange={(e) => updateField({ field: 'lowRisk2', value: e.target.value })}
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Low-risk activity or place..."
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-semibold">3)</span>
                      <input
                        type="text"
                        value={planData.lowRisk3}
                        onChange={(e) => updateField({ field: 'lowRisk3', value: e.target.value })}
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Low-risk activity or place..."
                      />
                    </div>
                  </div>
                </div>

                {/* Part G */}
                <div className="p-5 bg-white rounded-lg border border-teal-300">
                  <p className="text-gray-800 font-bold mb-4">G) Daily schedule anchor (minimum viable plan)</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="wake-time" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Wake time anchor:
                      </label>
                      <input
                        id="wake-time"
                        type="time"
                        value={planData.wakeTime}
                        onChange={(e) => updateField({ field: 'wakeTime', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <p className="text-gray-700 font-semibold mb-2 text-sm">Structured blocks (morning / afternoon / evening):</p>
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="morning" className="block text-gray-600 mb-1 text-xs">
                            Morning:
                          </label>
                          <input
                            id="morning"
                            type="text"
                            value={planData.morning}
                            onChange={(e) => updateField({ field: 'morning', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="Morning routine/activities..."
                          />
                        </div>
                        <div>
                          <label htmlFor="afternoon" className="block text-gray-600 mb-1 text-xs">
                            Afternoon:
                          </label>
                          <input
                            id="afternoon"
                            type="text"
                            value={planData.afternoon}
                            onChange={(e) => updateField({ field: 'afternoon', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="Afternoon routine/activities..."
                          />
                        </div>
                        <div>
                          <label htmlFor="evening" className="block text-gray-600 mb-1 text-xs">
                            Evening:
                          </label>
                          <input
                            id="evening"
                            type="text"
                            value={planData.evening}
                            onChange={(e) => updateField({ field: 'evening', value: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="Evening routine/activities..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div id="if-slip">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                10) If I slip: a "get back on track" protocol
              </h2>

              <p className="text-gray-700 mb-4">
                A slip is a signal to act quickly, not punish yourself.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
                  <p className="text-gray-800 font-bold mb-2">1) Pause + interrupt the spiral</p>
                  <p className="text-gray-700 text-sm">Stop, breathe, and name it: "This is a lapse, not destiny."</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-2 border-purple-300">
                  <p className="text-gray-800 font-bold mb-2">2) Reduce harm immediately</p>
                  <p className="text-gray-700 text-sm">Leave the high-risk situation; remove access; go to a safer environment.</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-2 border-green-300">
                  <p className="text-gray-800 font-bold mb-2">3) Reframe (counter AVE)</p>
                  <p className="text-gray-700 text-sm">Write one reframe: "I slipped, and I'm returning to my plan now."</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-2 border-yellow-300">
                  <p className="text-gray-800 font-bold mb-2">4) Do a mini functional analysis</p>
                  <p className="text-gray-700 text-sm">What set me up? Where could I intervene next time?</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-2 border-orange-300">
                  <p className="text-gray-800 font-bold mb-2">5) Contact support</p>
                  <p className="text-gray-700 text-sm">Text/call a safe person, counselor, sponsor, or helpline. (SAMHSA: 1-800-662-HELP)</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg border-2 border-pink-300">
                  <p className="text-gray-800 font-bold mb-2">6) Take the next right step</p>
                  <p className="text-gray-700 text-sm">Return to your schedule anchor + one coping skill today.</p>
                </div>
              </div>
            </div>

            {/* Section 11 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/crisis/chain-analysis" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Chain Analysis</p>
                  <p className="text-gray-600 text-sm">Find the exact turning points</p>
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Urge Surfing</p>
                  <p className="text-gray-600 text-sm">Ride urges without acting</p>
                </Link>
                <Link href="/pages/cbt/worrying" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">CBT Worrying + Problem Solving</p>
                  <p className="text-gray-600 text-sm">Stop rumination, make a plan</p>
                </Link>
                <Link href="/pages/cbt/behavioral-activation" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Behavioral Activation</p>
                  <p className="text-gray-600 text-sm">Build an upward spiral</p>
                </Link>
                <Link href="/pages/cbt/cognitive-restructuring" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Restructuring</p>
                  <p className="text-gray-600 text-sm">Update relapse-permission thoughts</p>
                </Link>
                <Link href="/pages/crisis/relapse-prevention" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Crisis Relapse Prevention</p>
                  <p className="text-gray-600 text-sm">25 warning signs + emergency protocol</p>
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
