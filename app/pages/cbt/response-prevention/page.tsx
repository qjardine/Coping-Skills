'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ResponsePreventionPage() {
  const router = useRouter();
  
  const [erpLog, setErpLog] = useState({
    trigger: '',
    ritualsPrevented: '',
    anxietyBefore: '',
    anxietyPeak: '',
    anxietyAfter: '',
    whatLearned: '',
    nextStep: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updateErpLog = ({ field, value }: { field: string; value: string }) => {
    setErpLog(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Exposure and Response Prevention (ERP)
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Face OCD triggers while choosing not to do compulsions
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Exposure and Response Prevention (ERP) is the most important CBT approach for OCD. ERP works by helping you gradually face OCD triggers (exposure) while choosing not to do the compulsive or "neutralizing" behavior (response prevention). Over time, your brain learns that the trigger isn't truly dangerous, and the obsession/urge cycle loses strength.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700">
                  <strong>ERP can feel counterintuitive at first</strong>—because it asks you to move toward uncertainty and discomfort instead of away from it—but it's strongly evidence-based and recommended in major clinical guidelines for OCD.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4">
                <li><a href="#what-is" className="hover:underline">What ERP is</a></li>
                <li><a href="#ocd-cycle" className="hover:underline">The OCD cycle (why compulsions keep OCD alive)</a></li>
                <li><a href="#exposure-vs-prevention" className="hover:underline">Exposure vs response prevention</a></li>
                <li><a href="#metaphor" className="hover:underline">A helpful metaphor: the "false alarm" system</a></li>
                <li><a href="#what-feels-like" className="hover:underline">What ERP feels like (what to expect)</a></li>
                <li><a href="#building-plan" className="hover:underline">Building your ERP plan (hierarchy)</a></li>
                <li><a href="#response-rules" className="hover:underline">Response prevention rules</a></li>
                <li><a href="#homework" className="hover:underline">Homework + tracking progress</a></li>
                <li><a href="#professional-support" className="hover:underline">When to get professional support</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="what-is">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What ERP is
              </h2>

              <div className="p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-300">
                <p className="text-gray-700 mb-4">
                  ERP is a form of CBT designed for OCD where you:
                </p>
                
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded border border-purple-300">
                    <p className="text-gray-700">
                      <strong>Practice confronting</strong> thoughts, images, objects, and situations that trigger obsessions <span className="text-purple-600 font-semibold">(exposure)</span>
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded border border-purple-300">
                    <p className="text-gray-700">
                      <strong>And practice not doing</strong> compulsions/rituals after being triggered <span className="text-purple-600 font-semibold">(response prevention)</span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4 italic">
                At first, ERP is usually planned and coached with a trained clinician. With practice, many people learn to do ERP exercises independently between sessions.
              </p>
            </div>

            {/* Section 2 */}
            <div id="ocd-cycle">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) The OCD cycle (why compulsions keep OCD alive)
              </h2>

              <p className="text-gray-700 mb-4">
                OCD often runs on a loop like:
              </p>

              <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-2 border-red-300">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-lg border border-red-400 flex-1">
                      <p className="text-gray-800 font-bold text-center">Trigger</p>
                    </div>
                    <p className="text-gray-600 text-xl">→</p>
                    <div className="p-3 bg-white rounded-lg border border-red-400 flex-1">
                      <p className="text-gray-800 font-bold text-center">Obsession/Intrusion</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-lg border border-orange-400 flex-1">
                      <p className="text-gray-800 font-bold text-center">Anxiety/Uncertainty</p>
                    </div>
                    <p className="text-gray-600 text-xl">→</p>
                    <div className="p-3 bg-white rounded-lg border border-orange-400 flex-1">
                      <p className="text-gray-800 font-bold text-center">Compulsion/Ritual</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-lg border border-yellow-400 flex-1">
                      <p className="text-gray-800 font-bold text-center">Temporary Relief</p>
                    </div>
                    <p className="text-gray-600 text-xl">→</p>
                    <div className="p-3 bg-white rounded-lg border border-red-500 flex-1">
                      <p className="text-gray-800 font-bold text-center">Stronger OCD Next Time</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 p-4 bg-white rounded-lg border-2 border-red-400">
                  <p className="text-gray-700">
                    <strong>Compulsions provide short-term relief,</strong> but they also teach your brain: "That trigger really was dangerous; you prevented catastrophe." That reinforcement makes the alarm louder next time. <strong className="text-red-700">ERP breaks the reinforcement loop.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="exposure-vs-prevention">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Exposure vs response prevention (what each part means)
              </h2>

              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border-2 border-green-300">
                  <h3 className="text-gray-800 font-bold text-lg mb-3">
                    Exposure = "approach the trigger"
                  </h3>
                  <p className="text-gray-700">
                    Exposure means intentionally encountering what sets off OCD—internally (thoughts/images) or externally (places/objects/situations)—in a planned, gradual way.
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-300">
                  <h3 className="text-gray-800 font-bold text-lg mb-3">
                    Response prevention = "don't do the ritual"
                  </h3>
                  <p className="text-gray-700">
                    Response prevention means choosing not to do the compulsion (or reassurance/checking/mental ritual) that usually follows the trigger. <strong>This is where new learning happens.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="metaphor">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) A helpful metaphor: the "false alarm" system
              </h2>

              <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-300">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-yellow-400">
                    <p className="text-gray-700">
                      Think of anxiety like an alarm system. A working alarm alerts you to real danger—but <strong className="text-orange-700">OCD is like an alarm that goes off for "toast smoke" as if it were a house fire.</strong>
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-orange-400">
                    <p className="text-gray-700">
                      Compulsions are your attempt to "put out the fire," but they accidentally convince your brain that toast smoke truly equals danger.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-green-400">
                    <p className="text-gray-700">
                      <strong className="text-green-700">ERP retrains the alarm system</strong> so it responds more realistically to uncertainty and risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="what-feels-like">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) What ERP feels like (what to expect)
              </h2>

              <p className="text-gray-700 mb-4">
                When you do ERP correctly, this is a common pattern:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                  <p className="text-gray-700">
                    <strong>1.</strong> Anxiety/uncertainty rises at first
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                  <p className="text-gray-700">
                    <strong>2.</strong> You learn the feelings are distressing but survivable
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-yellow-50 to-green-50 rounded-lg border border-yellow-200">
                  <p className="text-gray-700">
                    <strong>3.</strong> Anxiety often decreases with time and repetition
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200">
                  <p className="text-gray-700">
                    <strong>4.</strong> You gain confidence handling uncertainty
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200">
                  <p className="text-gray-700">
                    <strong>5.</strong> You learn feared outcomes are less likely than OCD predicts
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-purple-50 rounded border border-purple-200">
                <p className="text-gray-700 text-sm">
                  Many older ERP explanations emphasize <strong>habituation</strong> (anxiety naturally dropping). More modern models also emphasize <strong>inhibitory learning</strong>—building new "safety" learning that competes with old fear learning, even if anxiety doesn't drop quickly every time.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div id="building-plan">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Building your ERP plan (hierarchy)
              </h2>

              <p className="text-gray-700 mb-4">
                ERP is usually done in steps (a hierarchy or "fear ladder"):
              </p>

              <div className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-300 mb-5">
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li className="p-3 bg-white rounded border border-blue-300">
                    <strong>List OCD triggers</strong> (situations, objects, thoughts, images)
                  </li>
                  <li className="p-3 bg-white rounded border border-blue-300">
                    <strong>Rate distress</strong> (0–10 or 0–100)
                  </li>
                  <li className="p-3 bg-white rounded border border-blue-300">
                    <strong>Start with easier steps</strong> and work upward with repetition
                  </li>
                </ol>
              </div>

              <div className="p-5 bg-gradient-to-br from-teal-50 to-green-50 rounded-lg border-2 border-teal-300">
                <h3 className="text-gray-800 font-bold mb-4">
                  Example hierarchy (contamination OCD — simplified)
                </h3>
                
                <div className="space-y-2">
                  <div className="p-3 bg-white rounded border border-teal-300">
                    <p className="text-gray-700 text-sm">
                      • Touch doorknob → wait 10 minutes before washing
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded border border-teal-300">
                    <p className="text-gray-700 text-sm">
                      • Touch phone after being outside → no wiping/cleaning
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded border border-teal-300">
                    <p className="text-gray-700 text-sm">
                      • Use public restroom → no checking/rewashing rituals
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-4 italic">
                  (Your hierarchy should be personalized and safety-appropriate.)
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div id="response-rules">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Response prevention rules (reducing rituals + safety behaviors)
              </h2>

              <p className="text-gray-700 mb-4">
                Response prevention includes stopping:
              </p>

              <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border-2 border-orange-300">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-4 bg-white rounded-lg border border-orange-400">
                    <p className="text-gray-800 font-semibold mb-2">Visible compulsions</p>
                    <p className="text-gray-600 text-sm">Washing, checking, repeating, ordering</p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-orange-400">
                    <p className="text-gray-800 font-semibold mb-2">Mental rituals</p>
                    <p className="text-gray-600 text-sm">Counting, neutralizing phrases, mental reviewing</p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-orange-400">
                    <p className="text-gray-800 font-semibold mb-2">Reassurance seeking</p>
                    <p className="text-gray-600 text-sm">Asking, googling, "just to be sure"</p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-orange-400">
                    <p className="text-gray-800 font-semibold mb-2">Avoidance</p>
                    <p className="text-gray-600 text-sm">That functions like a ritual</p>
                  </div>
                </div>

                <div className="mt-5 p-4 bg-white rounded-lg border-2 border-red-400">
                  <p className="text-gray-700">
                    <strong>A common ERP goal:</strong> Reduce "neutralizing" behaviors enough that your brain can learn: "I can tolerate uncertainty and nothing catastrophic happens."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 - Homework Form */}
            <div id="homework">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Homework + tracking progress
              </h2>

              <p className="text-gray-700 mb-4">
                ERP improves with consistent practice. Many evidence-based OCD programs include regular between-session exercises and tracking (what trigger, what ritual prevented, anxiety rating, what you learned).
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-400 space-y-4">
                <h3 className="text-gray-800 font-bold text-lg mb-4">
                  ERP Practice Log
                </h3>

                <div>
                  <label htmlFor="erp-trigger" className="block text-gray-800 font-bold mb-2">
                    Trigger / exposure:
                  </label>
                  <textarea
                    id="erp-trigger"
                    value={erpLog.trigger}
                    onChange={(e) => updateErpLog({ field: 'trigger', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={2}
                    placeholder="What exposure did I practice?"
                  />
                </div>

                <div>
                  <label htmlFor="erp-rituals" className="block text-gray-800 font-bold mb-2">
                    Ritual(s) prevented:
                  </label>
                  <textarea
                    id="erp-rituals"
                    value={erpLog.ritualsPrevented}
                    onChange={(e) => updateErpLog({ field: 'ritualsPrevented', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={2}
                    placeholder="What compulsions did I resist?"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="erp-before" className="block text-gray-700 font-semibold mb-2">
                      Anxiety before:
                    </label>
                    <input
                      id="erp-before"
                      type="number"
                      min="0"
                      max="10"
                      value={erpLog.anxietyBefore}
                      onChange={(e) => updateErpLog({ field: 'anxietyBefore', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="erp-peak" className="block text-gray-700 font-semibold mb-2">
                      Peak:
                    </label>
                    <input
                      id="erp-peak"
                      type="number"
                      min="0"
                      max="10"
                      value={erpLog.anxietyPeak}
                      onChange={(e) => updateErpLog({ field: 'anxietyPeak', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="erp-after" className="block text-gray-700 font-semibold mb-2">
                      After:
                    </label>
                    <input
                      id="erp-after"
                      type="number"
                      min="0"
                      max="10"
                      value={erpLog.anxietyAfter}
                      onChange={(e) => updateErpLog({ field: 'anxietyAfter', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="/10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="erp-learned" className="block text-gray-800 font-bold mb-2">
                    What I learned:
                  </label>
                  <textarea
                    id="erp-learned"
                    value={erpLog.whatLearned}
                    onChange={(e) => updateErpLog({ field: 'whatLearned', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                    placeholder="New insights, realizations, evidence..."
                  />
                </div>

                <div>
                  <label htmlFor="erp-next" className="block text-gray-800 font-bold mb-2">
                    Next step / repeat plan:
                  </label>
                  <textarea
                    id="erp-next"
                    value={erpLog.nextStep}
                    onChange={(e) => updateErpLog({ field: 'nextStep', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={2}
                    placeholder="What will I practice next?"
                  />
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div id="professional-support">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) When to get professional support
              </h2>

              <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-2 border-red-300 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>ERP is safest and most effective when guided by an OCD-trained clinician</strong>—especially if:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Your compulsions are intense or time-consuming</li>
                  <li>You have severe distress, suicidality, or dissociation</li>
                  <li>Your exposures could involve real-world risk (ERP is about tolerating uncertainty, not creating danger)</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700">
                  <strong>To find OCD specialists:</strong> The <a href="https://iocdf.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">International OCD Foundation</a> offers a provider directory and guidance on ERP.
                </p>
              </div>
            </div>

            {/* Section 10 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/exposure-and-experiments" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Graded Exposure & Behavioral Experiments</p>
                  <p className="text-gray-600 text-sm">General CBT exposure/testing</p>
                </Link>
                <Link href="/pages/cbt/cognitive-restructuring" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Restructuring</p>
                  <p className="text-gray-600 text-sm">For obsessional appraisals</p>
                </Link>
                <Link href="/pages/cbt/track-and-review" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Review & Track</p>
                  <p className="text-gray-600 text-sm">Self-monitoring logs</p>
                </Link>
                <Link href="/pages/cbt/relapse-prevention" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Relapse Prevention</p>
                  <p className="text-gray-600 text-sm">Protect gains, plan for flare-ups</p>
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
