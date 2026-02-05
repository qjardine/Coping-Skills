'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function SpecialInterestsPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'special-interests';

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
              Special Interests (IRL)
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
              1. It Starts With a Spark… Then a Spiral
            </h2>
            <p className="text-gray-600 italic">
              You don't "like things" — you become consumed, compelled, and entirely taken over. And it feels fantastic.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You discover a topic and within days you're consuming books, podcasts, documentaries, and forums like your life depends on it." },
                { id: 2, text: "You deep-dive into research so hard you forget to eat, sleep, pee, or do anything else at all." },
                { id: 3, text: "You collect rare facts, weird trivia, or hyper-specific knowledge most people don't even know exists — and love every second." },
                { id: 4, text: "You lose track of time completely — four hours felt like five minutes when you were inside your rabbit hole." },
                { id: 5, text: "You feel emotionally soothed, creatively energised, and mentally regulated when surrounded by your special interest — it's your happy place." }
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
              2. It's Not Just a Hobby — It's a Core Part of You
            </h2>
            <p className="text-gray-600 italic">
              It's not a phase. It's a fundamental part of how you connect to the world — and yourself.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You've had certain fixations since childhood — dinosaurs, fonts, weather, ancient history — and they still spark joy years later." },
                { id: 7, text: "You've built your identity around your passion — it influences your work, your clothes, even your daily routines." },
                { id: 8, text: "You feel a deeper connection with people who understand or share your interest — or at least ask genuine questions." },
                { id: 9, text: "You feel dismissed or hurt when someone mocks your interest, even casually — it's like they're mocking a part of you." },
                { id: 10, text: "You'd rather have a two-hour chat about your interest than try to force small talk at a party." }
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
              3. You Learn in Hyperdrive Mode
            </h2>
            <p className="text-gray-600 italic">
              When your brain is lit up by interest, learning feels like breathing — fast, deep, and weirdly automatic.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You retain every detail about your interest easily — but forget basic stuff like where your keys are or what day it is." },
                { id: 12, text: "You love teaching others what you've learned — even if they nod politely while slowly backing away." },
                { id: 13, text: "You prefer going deep on one topic for hours rather than learning little bits about lots of random things." },
                { id: 14, text: "You accidentally out-knowledge actual professionals in the field just from obsessive research and passion." },
                { id: 15, text: "You feel irritable, flat, or foggy when you haven't had quality time with your special interest for a few days." }
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
              4. It Helps You Feel Grounded in a Chaotic World
            </h2>
            <p className="text-gray-600 italic">
              Your special interest isn't a distraction — it's a stabiliser. It helps you regulate, reset, and feel safe.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You return to your special interest when life feels overwhelming — it's a place your brain knows how to feel calm." },
                { id: 17, text: "You feel anchored and emotionally steady when you're immersed in your interest — like the rest of the world goes quiet." },
                { id: 18, text: "You seek it out during stress, burnout, or anxiety because it brings predictability, structure, and a sense of control." },
                { id: 19, text: "You've created rituals around your interest — specific times, tools, or habits that help you access the calm it brings." },
                { id: 20, text: "You don't "use" your special interest — you need it. It's your refuge, reset button, and favourite form of self-care." }
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
              5. The World Doesn't Always Get It
            </h2>
            <p className="text-gray-600 italic">
              What brings you peace, purpose, or identity might look "extra" to others — but that doesn't make it less valid.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You've been called obsessive, childish, or weird because of how much you care — even if it hurts no one." },
                { id: 22, text: "You've hidden or toned down your interest in public, fearing judgment or being 'too much' again." },
                { id: 23, text: "You've had people roll their eyes or change the subject when you share something you're deeply excited about." },
                { id: 24, text: "You try to explain why it matters to you — but there aren't words for how deeply it fits your brain." },
                { id: 25, text: "You now realise special interests were your lifeline through chaos — they've regulated your emotions, sparked your creativity, and brought real joy." }
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
              Special interests are most commonly associated with autism, but they can also show up with ADHD, OCD, and other neurodivergences. They're not obsessions or hobbies — they're how your brain finds joy, regulation, and identity. Your special interests deserve protection and celebration.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Build time into your day for your special interest — treat it as self-care, not indulgence</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Use it as a reward or regulation tool when feeling overwhelmed or burnt out</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Connect with <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:underline">communities</Link> who share or respect your interest</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Create boundaries around it if needed — but never shame yourself for loving it</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Explore how it connects to <Link href="/pages/interpersonal-skills/values" className="text-blue-600 hover:underline">your values</Link> and identity</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:underline">
                → Stims & Special Interests
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/hyperfixation" className="text-blue-600 hover:underline">
                → Hyperfixation
              </Link>
              <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:underline">
                → Neurodivergent Affirmations
              </Link>
              <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:underline">
                → Personal Care Plan
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
