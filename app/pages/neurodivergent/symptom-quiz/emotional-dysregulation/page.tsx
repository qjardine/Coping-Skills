'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function EmotionalDysregulationPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'emotional-dysregulation';

  const toggleCheck = ({ id }: { id: number }) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  useEffect(() => {
    saveQuizScore({ symptomSlug: currentSlug, score: checkedCount });
  }, [checkedCount]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">
              Emotional Dysregulation (IRL)
            </h1>
            <p className="text-gray-600">
              Check the experiences that resonate with you
            </p>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              {checkedCount} of 25 checked
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              1. You Feel Things Loudly
            </h2>
            <p className="text-gray-600 italic">
              Your emotional volume is always on max — even when you're trying to whisper.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You cry over something 'minor' like a broken glass or burnt toast — and feel embarrassed about how intense it felt." },
                { id: 2, text: "You get furious over being interrupted or ignored — even if the person didn't mean to be rude." },
                { id: 3, text: "You panic, cry, or freeze up when you receive unexpected criticism — even when it's said kindly." },
                { id: 4, text: "You feel a wave of anxiety or dread just from running late, even if it's just by 5 minutes, and the person doesn't care you're late." },
                { id: 5, text: "You feel physical symptoms like heart racing, nausea, or shaking during stress — even if you're 'keeping it together' externally." }
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

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              2. Emotions Hijack Your Day
            </h2>
            <p className="text-gray-600 italic">
              One emotional bump and your whole to-do list goes up in flames.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You avoid chores or emails because they trigger guilt, overwhelm, or fear — even if you know they're simple tasks." },
                { id: 7, text: "You lash out in arguments, then later feel deep regret but struggle to know how to fix it." },
                { id: 8, text: "You cancel plans or quit tasks because your emotions get so heavy, even if you were excited 10 minutes earlier." },
                { id: 9, text: "You use food, alcohol, or other 'numbing' tools to escape overwhelming feelings — even if you didn't intend to." },
                { id: 10, text: "You fall apart after tiny failures (like breaking a mug) — crying, spiralling, and unable to focus for the rest of the day." }
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

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              3. You Can't Always Mask It — But Sometimes You Do
            </h2>
            <p className="text-gray-600 italic">
              Sometimes it leaks out. Sometimes you seal it in so tightly it implodes later.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You hide big feelings in public, then cry, scream, or shut down when you're finally alone." },
                { id: 12, text: "You seem calm in meetings but later explode over something unrelated — the bottled-up stress finally finding a release." },
                { id: 13, text: "You get told you're 'too sensitive' or 'overreacting' — but your emotions are real and just come out hot." },
                { id: 14, text: "You act fine while dissociating or faking a smile — but your body feels tense, heavy, and sometimes like it might collapse." },
                { id: 15, text: "You struggle to focus, listen, or work when your emotions are simmering just below the surface — no one else notices, but it's consuming you." }
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

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              4. Regret + Rumination = The Sequel
            </h2>
            <p className="text-gray-600 italic">
              The movie in your mind is on repeat — and the cringe is stuck on loop.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You replay emotional moments for days, obsessing over what you said, how you looked, or what they really meant." },
                { id: 17, text: "You apologise over and over — even when the other person insists you're fine and they're not upset." },
                { id: 18, text: "You spiral after showing emotion, wondering if you've ruined a relationship or embarrassed yourself." },
                { id: 19, text: "You feel humiliated after every 'too much' moment — even if no one else reacted." },
                { id: 20, text: "You can't let go of small disagreements — your brain won't stop spinning on them, no matter how hard you try." }
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

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              5. Mood Whiplash + Coping Collisions
            </h2>
            <p className="text-gray-600 italic">
              Your emotions turn corners so fast, your nervous system can't catch up.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You go from confident to crushed in seconds when plans change or expectations aren't met — even slightly." },
                { id: 22, text: "You feel deeply sad for hours or days over something that others brushed off in minutes." },
                { id: 23, text: "You get defensive or angry when criticised — even if it's valid — then beat yourself up for reacting that way." },
                { id: 24, text: "You've self-harmed, engaged in disordered eating, or used substances to try and get control over emotions that felt too big to bear." },
                { id: 25, text: "You feel constantly on edge — anxious, wired, or stuck in fight-or-flight — even when 'nothing's wrong.'" }
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

          {/* What This Might Mean */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">What This Might Mean</h2>
            <p className="text-gray-700 leading-relaxed">
              Emotional dysregulation is common in ADHD, autism, anxiety, and trauma. It doesn't mean you're "too much" — it means your nervous system processes emotions intensely and struggles to modulate them. With the right tools, you can learn to ride the waves instead of drowning in them.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Practice <Link href="/pages/neurodivergent/emotion-regulation" className="text-blue-600 hover:underline">emotion regulation skills</Link> like opposite action or self-soothing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Use <Link href="/pages/distress-tolerance/tippp" className="text-blue-600 hover:underline">TIP skills</Link> when emotions feel overwhelming</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Track patterns with a <Link href="/pages/emotional-regulation" className="text-blue-600 hover:underline">mood diary</Link></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Create a <Link href="/pages/crisis/plan" className="text-blue-600 hover:underline">crisis plan</Link> for when emotions escalate</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Learn <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:underline">RAIN mindfulness</Link> to observe emotions without judgment</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/crisis/tolerance-window" className="text-blue-600 hover:underline">
                → Window of Tolerance
              </Link>
              <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:underline">
                → Meltdown Prevention
              </Link>
              <Link href="/pages/neurodivergent/sensory-soothing" className="text-blue-600 hover:underline">
                → Sensory Self-Soothing
              </Link>
              <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:underline">
                → Affirmations for Hard Days
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center pt-4">
            <Link
              href="/pages/neurodivergent/symptom-quiz"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              ← Back to Symptom Quiz
            </Link>
          </div>
        </div>
      </div>
      <QuizNavButton currentSlug={currentSlug} />
    </div>
  );
}
