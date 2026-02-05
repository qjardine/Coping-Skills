'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function StimmingPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'stimming';

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
              Stimming (IRL)
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
              1. Your Body Is Always Moving (Even When You Don't Notice)
            </h2>
            <p className="text-gray-600 italic">
              Stillness doesn't come naturally — your body's always finding little ways to let off steam or stay grounded.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You bounce your leg constantly at your desk or dinner table — even if you didn't realise you were doing it." },
                { id: 2, text: "You twirl your hair, pick your skin, or chew your nails when you're anxious, focused, or trying to stay alert." },
                { id: 3, text: "You click pens, drum your fingers, or tap objects rhythmically — your hands seem to move faster than your brain." },
                { id: 4, text: "You pace the room or gently rock while deep in thought — the motion helps calm your nervous energy." },
                { id: 5, text: "You shift positions repeatedly — sitting still for too long makes your skin crawl or your brain feel sluggish." }
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
              2. You Use Movement to Self-Regulate
            </h2>
            <p className="text-gray-600 italic">
              Stimming helps your brain breathe — especially when you're overwhelmed, excited, or teetering on meltdown mode.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You stim more intensely when you're anxious, bored, overstimulated, or emotionally overloaded — your body knows what it needs." },
                { id: 7, text: "You chew on pens, hoodie strings, or straws — the repetitive motion feels calming, grounding, and impossible to resist." },
                { id: 8, text: "You rub soft blankets, scratch textures, or press against surfaces — the tactile input soothes your nerves instantly." },
                { id: 9, text: "You rock, flap, squeeze your hands, or seek pressure — especially when you're holding in a big feeling." },
                { id: 10, text: "You stim to prevent meltdowns or shutdowns — and when it works, it's like your body knew what your brain couldn't explain." }
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
              3. Your Fidgeting Is Not Optional
            </h2>
            <p className="text-gray-600 italic">
              You don't fidget on purpose — you do it because your body needs an outlet to stay regulated and focused.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You try not to fidget in meetings or school, but it just builds up until you need to move more." },
                { id: 12, text: "You feel physically restless or on edge when you can't move — like your skin's buzzing from the inside." },
                { id: 13, text: "You've been told to "sit still" or "stop fidgeting" — but suppressing it makes everything harder, not easier." },
                { id: 14, text: "You struggle to think or listen without movement — your brain focuses better when your body's doing something small." },
                { id: 15, text: "You stim subtly under the table, inside your sleeves, or by clenching muscles so others don't notice or comment." }
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
              4. You've Built Your Own Toolkit
            </h2>
            <p className="text-gray-600 italic">
              You've gathered tools and routines that help you stim on your terms — even if others don't notice.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You keep stim-friendly objects nearby — hair ties, jewellery, sleeves, soft fabrics, or random objects you can click, twist, or tap." },
                { id: 17, text: "You use music or rhythm (like walking beats or hand patterns) to calm your brain or help you think straight." },
                { id: 18, text: "You wear rings to spin, bracelets to flick, or fabrics you can rub when you need something grounding." },
                { id: 19, text: "You have go-to stims for different moods — bouncing when happy, tapping when anxious, chewing when overwhelmed." },
                { id: 20, text: "You build rituals into your day — like pacing while brushing your teeth or rocking slightly when writing or reading." }
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
              5. You've Been Misunderstood For It
            </h2>
            <p className="text-gray-600 italic">
              Your natural coping tools were seen as misbehaviour — even though they were helping you cope the whole time.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You were labelled disruptive in school for fidgeting, pacing, or moving constantly — even when it helped you concentrate." },
                { id: 22, text: "You've hidden stimming in public or with family to avoid being judged as weird, childish, or dramatic." },
                { id: 23, text: "You've felt embarrassed or ashamed of how much you fidget — even though it keeps you from feeling overwhelmed." },
                { id: 24, text: "You only recently learned that stimming isn't a bad habit — it's a legit way your brain manages regulation." },
                { id: 25, text: "You wish people understood that stimming isn't misbehaviour — it's your nervous system doing its best to self-soothe and survive." }
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
              Stimming is most commonly associated with autism and ADHD, but it shows up across many neurodivergences and stress responses. It's not a problem to fix — it's a legitimate self-regulation tool your nervous system uses to manage sensory input, emotions, and energy. Your stims deserve understanding and protection.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Learn more about <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:underline">stims and how they help</Link></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Build a <Link href="/pages/neurodivergent/sensory-kit" className="text-blue-600 hover:underline">sensory toolkit</Link> with stim-friendly items</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Practice <Link href="/pages/neurodivergent/sensory-soothing" className="text-blue-600 hover:underline">sensory self-soothing</Link> techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Never shame yourself for stimming — it's helping you regulate</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Create a <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:underline">safe space</Link> where you can stim freely</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/sensory-profiles" className="text-blue-600 hover:underline">
                → Sensory Profile & Needs
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/sensory-sensitivities" className="text-blue-600 hover:underline">
                → Sensory Sensitivities
              </Link>
              <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:underline">
                → Meltdown Prevention
              </Link>
              <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:underline">
                → Neurodivergent Affirmations
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
