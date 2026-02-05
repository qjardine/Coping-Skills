'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function SeekingFamiliarityPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'seeking-familiarity';

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
              Seeking Familiarity (IRL)
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
              1. You Gravitate Toward What Feels Safe
            </h2>
            <p className="text-gray-600 italic">
              Comfort isn't about laziness — it's how your brain protects itself from decision fatigue, sensory stress, and emotional overload.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You rewatch the same TV series because knowing what happens stops your brain from spinning with tension or unpredictability." },
                { id: 2, text: "You eat the same meals or snacks for weeks — not out of habit, but because the comfort feels regulating." },
                { id: 3, text: "You take the same route to work every day, even if it's slower, because changing paths feels mentally taxing." },
                { id: 4, text: "You re-read favourite books or play the same games — the familiarity brings peace, not boredom." },
                { id: 5, text: "You choose old, safe options over new ones — even when others say the new thing is 'better' or 'fun.'" }
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
              2. New Things = Instant Nope
            </h2>
            <p className="text-gray-600 italic">
              Unfamiliar is "unsafe until proven otherwise" — your brain needs time, context, and reassurance before stepping into the unknown.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You avoid joining a new class or club unless you know who's going, where it is, and what to expect." },
                { id: 7, text: "You turn down invitations to new places — even fun ones — because the not-knowing causes full-body resistance." },
                { id: 8, text: "You mentally 'rehearse' things like ordering at a new café or calling someone for the first time." },
                { id: 9, text: "You feel panicky or irritable if you're expected to adapt to something new without time to prepare." },
                { id: 10, text: "You've skipped opportunities — jobs, trips, hobbies — because the unknown felt more dangerous than missing out." }
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
              3. You Stick With People, Places, and Habits You Know
            </h2>
            <p className="text-gray-600 italic">
              Familiar people and environments help regulate your nervous system — it's about safety, not being antisocial or "stuck."
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You spend time with the same few people because new social energy feels unpredictable and exhausting." },
                { id: 12, text: "You feel unsettled or even panicked if your 'safe person,' café, playlist, or object of comfort isn't available." },
                { id: 13, text: "You go back to the same hairdresser, doctor, holiday spot — changing feels like starting from scratch emotionally." },
                { id: 14, text: "Wear the same outfits or brands on repeat — not for fashion, but because they don't require decision-making." },
                { id: 15, text: "You feel thrown off if your 'usual' seat in a room is taken — even if they're all the same." }
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
              4. You Use Familiarity to Manage Anxiety
            </h2>
            <p className="text-gray-600 italic">
              Routines and repetition aren't quirks — they're how you create predictability in a world that often feels chaotic.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You imagine worst-case scenarios before events so you're mentally prepared for anything unexpected." },
                { id: 17, text: "You replay past conversations or social situations to figure out what went wrong — or avoid repeating mistakes." },
                { id: 18, text: "You feel deeply soothed when your days follow a known rhythm — like familiar meals, shows, or end-of-day routines." },
                { id: 19, text: "You feel panicked or frustrated when someone suddenly changes plans or timelines without warning." },
                { id: 20, text: "You feel unsafe or disconnected when your routine breaks — like you're floating without an anchor." }
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
              5. You've Had to Defend Your Comfort Zone
            </h2>
            <p className="text-gray-600 italic">
              Other people might not get it — but sameness brings a sense of safety your brain doesn't find anywhere else.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You've been called boring or predictable just because you enjoy repetition and don't crave novelty." },
                { id: 22, text: "You've been made to feel 'less fun' for not liking spontaneous plans, group travel, or surprise outings." },
                { id: 23, text: "You've nodded and smiled through new experiences — secretly waiting to get home to your comfort playlist or favourite tea." },
                { id: 24, text: "You outgrow things but still return to them — TV shows, hobbies, objects — because familiarity feels emotionally grounding." },
                { id: 25, text: "You don't fear change in the way people assume — you just need it to come slowly, predictably, and with warning." }
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
              Seeking familiarity is common in autism, ADHD, anxiety, and OCD. Your brain uses predictable patterns and familiar environments to conserve energy, reduce stress, and feel safe. This isn't about being inflexible or boring — it's about creating the conditions where your nervous system can actually relax.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Honor your need for familiarity — it's not weakness, it's self-care</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Build "comfort anchors" into new situations (familiar playlist, trusted person, known snack)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Use <Link href="/pages/neurodivergent/symptom-quiz/routine" className="text-blue-600 hover:underline">routines</Link> to create predictability</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Research new places or experiences beforehand to reduce anxiety</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Create a <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:underline">safe space</Link> filled with familiar comfort items</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/routine" className="text-blue-600 hover:underline">
                → Needs Routine
              </Link>
              <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:underline">
                → Stims & Special Interests
              </Link>
              <Link href="/pages/neurodivergent/sensory-soothing" className="text-blue-600 hover:underline">
                → Sensory Self-Soothing
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
