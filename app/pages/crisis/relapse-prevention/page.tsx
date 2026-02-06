'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function RelapsePreventionPage() {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

  const handleBack = () => {
    router.back();
  };

  const toggleCheck = ({ id }: { id: number }) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Relapse Prevention Plan
        </h1>
        <p className="text-xl text-center text-gray-600 mb-6">
          A practical, written plan for staying on track—before urges become a crisis
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-8">
          {/* Introduction */}
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <p className="text-gray-700 leading-relaxed mb-4">
              Relapse prevention works best when it's specific, written, and shared with at least 1–2 safe people. Evidence-based relapse prevention (CBT/RP) focuses on identifying high-risk situations, building coping responses, and interrupting the "lapse → spiral" pattern (including the abstinence violation effect: "I slipped, so I might as well give up").
            </p>
            <div className="bg-red-50 p-4 rounded border border-red-300 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Emergency:</strong> If you're in immediate danger or at risk of harming yourself/others, use emergency services. For treatment referral/support in the U.S., SAMHSA's free, confidential helpline is 24/7: <strong>1-800-662-HELP (4357)</strong>
              </p>
            </div>
          </div>

          {/* Warning Signs Counter */}
          <div className="text-center p-4 bg-purple-50 rounded border border-purple-200">
            <p className="text-gray-700 font-semibold">
              Warning Signs Identified: {checkedCount} of 25
            </p>
          </div>

          {/* Section 1: High-Risk Situations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-300 pb-2">
              1. High-Risk Situations That Sneak Up
            </h2>
            <p className="text-gray-600 italic">
              Relapse often starts with "high-risk situations" + low coping bandwidth.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You go to (or drive past) a place strongly tied to using." },
                { id: 2, text: "You're around people who use, talk about using, or minimize your recovery." },
                { id: 3, text: "You're alone with access (money, substances, pills, dealers, websites/apps)." },
                { id: 4, text: "You're celebrating (\"I deserve it\") or grieving (\"I can't feel this\")." },
                { id: 5, text: "You're in conflict, shame, or rejection—and want instant relief." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: HALT States */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-300 pb-2">
              2. "HALT" States and Body-Based Triggers
            </h2>
            <p className="text-gray-600 italic">
              Basic needs neglected = cravings get louder.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "Hungry: skipped meals, blood sugar crash, \"I need something now.\"" },
                { id: 7, text: "Angry: resentment, injustice, simmering irritation." },
                { id: 8, text: "Lonely: isolation, scrolling, nobody knows you're struggling." },
                { id: 9, text: "Tired: poor sleep, burnout, pain flare, sensory overload." },
                { id: 10, text: "Sick/stressed: illness, hormones, deadlines, sensory overload, overwhelm." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Early Warning Signs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-300 pb-2">
              3. Early Warning Signs You're Drifting
            </h2>
            <p className="text-gray-600 italic">
              Relapse is often a process, not a single moment.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You stop doing the basics that keep you stable (food, meds, sleep, hygiene)." },
                { id: 12, text: "You isolate—skip meetings, stop texting safe people, avoid check-ins." },
                { id: 13, text: "You romanticize \"just one,\" minimize consequences, or bargain with rules." },
                { id: 14, text: "You get secretive: hiding purchases, deleting messages, lying by omission." },
                { id: 15, text: "Your coping narrows: everything feels like \"too much,\" or \"nothing helps.\"" }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Cravings and Shame Spiral */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-300 pb-2">
              4. Cravings, Lapses, and the Shame Spiral
            </h2>
            <p className="text-gray-600 italic">
              A lapse doesn't have to become a relapse—interrupt fast.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You start testing limits (\"I can handle being around it now\")." },
                { id: 17, text: "You build \"permission stories\" (stress, pain, celebration, \"I earned this\")." },
                { id: 18, text: "You feel intense shame after a slip and want to hide instead of repair." },
                { id: 19, text: "You stop reaching out because you feel like a burden or a failure." },
                { id: 20, text: "You keep exposure high (people/places/content) even though cravings spike." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Practical Risk Factors */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-300 pb-2">
              5. The Practical Risk Factors (Life Stuff)
            </h2>
            <p className="text-gray-600 italic">
              Relapse prevention is lifestyle design, not just willpower.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "Money access + no plan (paydays, cash, cards, \"treat yourself\" spirals)." },
                { id: 22, text: "Unstructured time (weekends, nights, being home alone)." },
                { id: 23, text: "Poor boundaries (saying yes when you're depleted, people-pleasing)." },
                { id: 24, text: "Big transitions (moves, breakups, grief, job changes, new meds)." },
                { id: 25, text: "No routine supports (no meetings/therapy, no recovery friends, no plan)." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Relapse Prevention Plan Template */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-400 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Your Relapse Prevention Plan (Fill-In)
            </h2>

            {/* Section A: Recovery Why */}
            <div className="bg-white p-5 rounded-lg space-y-3">
              <h3 className="font-bold text-gray-800 text-lg">A) My recovery "why"</h3>
              <div className="space-y-2">
                <p className="text-gray-700">• What I'm protecting: <span className="text-gray-500 italic">_______________________________</span></p>
                <p className="text-gray-700">• What I lose if I relapse: <span className="text-gray-500 italic">_______________________________</span></p>
                <p className="text-gray-700">• What I gain by staying on track: <span className="text-gray-500 italic">_______________________________</span></p>
              </div>
            </div>

            {/* Section B: Triggers and Responses */}
            <div className="bg-white p-5 rounded-lg space-y-4">
              <h3 className="font-bold text-gray-800 text-lg">B) My top triggers → my best response</h3>
              <p className="text-sm text-gray-600">Use Trigger → Risk → Plan (CBT/RP style)</p>
              
              {[1, 2, 3].map(num => (
                <div key={num} className="p-3 bg-gray-50 rounded space-y-2">
                  <p className="font-semibold text-gray-800">{num}. Trigger: <span className="text-gray-500 italic font-normal">_______________________________</span></p>
                  <p className="text-gray-700 ml-4">• What it does to me: <span className="text-gray-500 italic">_______________________________</span></p>
                  <p className="text-gray-700 ml-4">• My plan (avoid / reduce / cope): <span className="text-gray-500 italic">_______________________________</span></p>
                  <p className="text-gray-700 ml-4">• Person I'll text/call: <span className="text-gray-500 italic">_______________________________</span></p>
                </div>
              ))}

              <div className="bg-blue-50 p-4 rounded mt-4">
                <p className="font-semibold text-gray-800 mb-2">Common trigger solutions (pick what fits):</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>People/places:</strong> leave early, bring a sober buddy, drive yourself, have an exit script</li>
                  <li>• <strong>Stress:</strong> shorten obligations, ask for help, "one task only," body calming first</li>
                  <li>• <strong>Cravings:</strong> delay + distract + contact someone; reduce access; change location fast</li>
                  <li>• <strong>HALT:</strong> eat, hydrate, rest, shower, meds—then reassess</li>
                </ul>
              </div>
            </div>

            {/* Section C: Early Warning Signs */}
            <div className="bg-white p-5 rounded-lg space-y-3">
              <h3 className="font-bold text-gray-800 text-lg">C) My early warning signs (top 7)</h3>
              <p className="text-gray-700">Circle the ones that show up first:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> skipping meals</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> sleep wrecked</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> isolating</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> secrecy</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> bargaining</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> resentment</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> sensory overload</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> doom scrolling</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> stopping routines</label>
              </div>
              <p className="text-gray-700 mt-2">Other: <span className="text-gray-500 italic">_______________________________</span></p>
            </div>

            {/* Section D: Actions */}
            <div className="bg-white p-5 rounded-lg space-y-3">
              <h3 className="font-bold text-gray-800 text-lg">D) My "When warning signs show up" actions (pick 5)</h3>
              {[1, 2, 3, 4, 5].map(num => (
                <p key={num} className="text-gray-700">{num}. <span className="text-gray-500 italic">_______________________________</span></p>
              ))}
              <p className="text-sm text-gray-600 mt-3 italic">
                Examples: attend a meeting today, text sponsor, schedule therapy, hand off cash/cards, go to a safe place, ask someone to sit with you
              </p>
            </div>

            {/* Section E: Support Map */}
            <div className="bg-white p-5 rounded-lg space-y-2">
              <h3 className="font-bold text-gray-800 text-lg">E) My support map (who to contact)</h3>
              <p className="text-gray-700">• First call/text (fastest): <span className="text-gray-500 italic">_______________________________</span></p>
              <p className="text-gray-700">• Second: <span className="text-gray-500 italic">_______________________________</span></p>
              <p className="text-gray-700">• Sponsor/peer: <span className="text-gray-500 italic">_______________________________</span></p>
              <p className="text-gray-700">• Therapist/clinician: <span className="text-gray-500 italic">_______________________________</span></p>
              <p className="text-gray-700">• Group/meeting: <span className="text-gray-500 italic">_______________________________</span></p>
              <p className="text-gray-700">• Crisis/treatment referral: <strong>SAMHSA 1-800-662-HELP (4357)</strong></p>
            </div>

            {/* Section F: Environment Safety */}
            <div className="bg-white p-5 rounded-lg space-y-2">
              <h3 className="font-bold text-gray-800 text-lg">F) My environment safety steps (reduce access)</h3>
              <p className="text-gray-700">• Money plan (limits, accountability, autopay): <span className="text-gray-500 italic">_______________________________</span></p>
              <p className="text-gray-700">• Remove access (delete numbers/apps, block sites, disposal/lockbox): <span className="text-gray-500 italic">_______________________________</span></p>
              <p className="text-gray-700">• Avoid high-risk routes/places: <span className="text-gray-500 italic">_______________________________</span></p>
              <p className="text-gray-700">• Home kit (tea, snacks, sensory tools, distraction list): <span className="text-gray-500 italic">_______________________________</span></p>
            </div>
          </div>

          {/* If I'm Slipping Protocol */}
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-400 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              If I'm Slipping (24–72 hour protocol)
            </h2>
            <p className="text-center text-gray-600 italic">
              Short, specific, non-shaming. The goal is to interrupt the process.
            </p>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-red-600 mr-3">1.</span>
                <span><strong>Change location now</strong> (less access, less stimulus)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-600 mr-3">2.</span>
                <span><strong>Contact a person</strong> (don't do it alone)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-600 mr-3">3.</span>
                <span><strong>Do HALT basics</strong> (food/water/rest)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-600 mr-3">4.</span>
                <span><strong>Name the next right step</strong> (one step only)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-600 mr-3">5.</span>
                <span><strong>If a lapse happened: repair fast</strong> (tell someone, remove access, return to plan). Lapse ≠ failure.</span>
              </li>
            </ol>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/crisis/tolerance-window" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                <p className="text-purple-600 hover:text-purple-800 font-semibold">Window of Tolerance</p>
                <p className="text-gray-600 text-sm">Understanding regulation</p>
              </Link>
              <Link href="/pages/distress-tolerance/stop" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                <p className="text-purple-600 hover:text-purple-800 font-semibold">STOP Skill</p>
                <p className="text-gray-600 text-sm">Pause before acting</p>
              </Link>
              <Link href="/pages/crisis/safety-plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                <p className="text-purple-600 hover:text-purple-800 font-semibold">Safety Plan</p>
                <p className="text-gray-600 text-sm">Crisis intervention steps</p>
              </Link>
              <Link href="/pages/self-care" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                <p className="text-purple-600 hover:text-purple-800 font-semibold">Self-Care</p>
                <p className="text-gray-600 text-sm">Build your foundation</p>
              </Link>
            </div>
          </div>

          {/* Print Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => window.print()}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              🖨️ Print This Plan
            </button>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
