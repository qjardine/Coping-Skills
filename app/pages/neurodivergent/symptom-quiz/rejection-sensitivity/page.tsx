'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function RejectionSensitivityPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'rejection-sensitivity';

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
              Rejection Sensitivity (IRL)
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
              1. You Take Things Deeply (and Personally)
            </h2>
            <p className="text-gray-600 italic">
              It's not just feedback — it's a full-body rejection that lingers long after the moment is over.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You feel devastated by gentle critique — like it confirms your deepest fear that you're never good enough." },
                { id: 2, text: "You spiral if a friend replies with "K" or takes too long to text back, worrying they're mad at you." },
                { id: 3, text: "You overanalyse facial expressions, texts, and tone — convinced there's judgment, even when nothing's been said." },
                { id: 4, text: "You avoid trying new things or putting yourself out there in case someone disapproves or you embarrass yourself." },
                { id: 5, text: "You always expect rejection — like if your boss or partner says "we need to talk," you assume the worst." }
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
              2. Rejection Feels Like Actual Pain
            </h2>
            <p className="text-gray-600 italic">
              Your body treats emotional pain like physical trauma — and it's exhausting.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You feel punched in the gut from a harsh comment — literally nauseous or winded by someone's words." },
                { id: 7, text: "You cry in private after mild disagreements — because it felt like a personal attack on your worth." },
                { id: 8, text: "You tense up, feel your chest tighten, or start shaking during or after conflict or perceived disapproval." },
                { id: 9, text: "You feel shame so strongly it's paralysing — even after something objectively small, like being corrected or called out." },
                { id: 10, text: "You physically crash after social rejection — headaches, stomach issues, or emotional shutdown for the day." }
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
              3. You React Before You Can Stop Yourself
            </h2>
            <p className="text-gray-600 italic">
              Even when you try to be chill, your brain is already halfway through the freakout.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You blurt apologies or over-explain yourself to prove you didn't mean to upset anyone." },
                { id: 12, text: "You avoid people for days after a perceived slight — even if they don't know you're upset." },
                { id: 13, text: "You get defensive over suggestions, reacting like it's an attack — then feel guilty and misunderstood afterward." },
                { id: 14, text: "You make fun of yourself before anyone else can — like a pre-emptive strike against judgment." },
                { id: 15, text: "You become the "perfect" employee, friend, or partner — bending over backwards to avoid letting anyone down." }
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
              4. It Impacts Your Relationships
            </h2>
            <p className="text-gray-600 italic">
              Connection is hard when your brain constantly whispers, "They probably don't like you anymore."
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You constantly question if people actually want you around, even after reassurance." },
                { id: 17, text: "You ask for validation often — not because you're needy, but because silence feels like abandonment." },
                { id: 18, text: "You fear people won't like the "real you," so you mask your personality to stay liked." },
                { id: 19, text: "You find relationships exhausting — constantly trying to maintain the connection while hiding how anxious or insecure you feel." },
                { id: 20, text: "You avoid dating or friendship opportunities altogether to protect yourself from the crash of eventual rejection." }
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
              5. You Feel Like a "Problem"
            </h2>
            <p className="text-gray-600 italic">
              You don't just fear rejection — you fear being the reason someone would walk away.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You assume you're too intense, dramatic, or annoying — even when people show you care and patience." },
                { id: 22, text: "You try to prevent failure by striving for perfection — mistakes feel like proof you don't deserve success." },
                { id: 23, text: "You give up on things you love (art, writing, projects) because one comment crushed your confidence." },
                { id: 24, text: "You avoid opportunities (jobs, auditions, promotions) out of fear you'll fail and humiliate yourself." },
                { id: 25, text: "You've spiralled so badly after a small conflict that you ghosted, quit, or disappeared to avoid more pain." }
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
              Rejection Sensitive Dysphoria (RSD) is common in ADHD, autism, anxiety, and complex trauma. Your nervous system perceives rejection or criticism as a genuine threat, triggering intense emotional and physical responses. This isn't "being dramatic" — it's a neurobiological sensitivity that causes real pain and requires real support.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Practice <Link href="/pages/neurodivergent/emotion-regulation" className="text-blue-600 hover:underline">emotion regulation skills</Link> for intense feelings</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Use <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:underline">RAIN mindfulness</Link> to observe rejection thoughts without spiraling</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Build <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:underline">affirmations</Link> to counter negative self-talk</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Learn about <Link href="/pages/interpersonal-skills/validation" className="text-blue-600 hover:underline">self-validation</Link> techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Create a <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:underline">care plan</Link> for rejection spirals</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/emotional-dysregulation" className="text-blue-600 hover:underline">
                → Emotional Dysregulation
              </Link>
              <Link href="/pages/crisis/tolerance-window" className="text-blue-600 hover:underline">
                → Window of Tolerance
              </Link>
              <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:underline">
                → Urge Surfing
              </Link>
              <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:underline">
                → Meltdown Prevention
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
