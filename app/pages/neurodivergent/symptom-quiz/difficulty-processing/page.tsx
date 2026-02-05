'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function DifficultyProcessingPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'difficulty-processing';

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
              Difficulty Processing (IRL)
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
              1. Your Brain Buffers (Especially Under Load)
            </h2>
            <p className="text-gray-600 italic">
              It's not that you're not smart — your brain is doing too much at once.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You need extra time to answer questions, even simple ones, because your brain is \"loading.\"" },
                { id: 2, text: "You can't think when someone is watching you or waiting for an answer." },
                { id: 3, text: "You lose your words mid-sentence and have to restart." },
                { id: 4, text: "You can't process new info if you're already stressed, hungry, tired, or in pain." },
                { id: 5, text: "You read the same sentence three times and still don't know what it said." }
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
              2. Too Many Inputs = Shutdown, Not "Drama"
            </h2>
            <p className="text-gray-600 italic">
              When sound/light/movement is high, processing goes offline.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "Background noise (TV, music, conversations) makes it hard to understand the person in front of you." },
                { id: 7, text: "Bright lights, crowds, or visual clutter make your brain feel foggy or panicky." },
                { id: 8, text: "You can't follow directions in busy places (stores, offices, events) because your brain is filtering too much." },
                { id: 9, text: "You get \"snappy\" or \"blank\" when overstimulated — not because you don't care, but because you can't sort inputs." },
                { id: 10, text: "You need quiet to think, but people treat quiet as optional." }
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
              3. Words Don't Match What's Happening Inside
            </h2>
            <p className="text-gray-600 italic">
              The feeling is real — the label doesn't show up.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "Someone asks \"How do you feel?\" and your brain returns: error / unknown / nothing." },
                { id: 12, text: "You only realise what you felt hours later (or the next day)." },
                { id: 13, text: "You can describe facts (\"what happened\") but not the internal experience (\"how it felt\")." },
                { id: 14, text: "You confuse emotions with body states (tired vs sad, anxious vs excited, hungry vs angry)." },
                { id: 15, text: "You know you're \"off\" but can't explain why, which makes you feel stuck or misunderstood." }
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
              4. Conversations Move Too Fast
            </h2>
            <p className="text-gray-600 italic">
              Processing delay can look like disinterest — but it's just timing.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You understand what someone meant after the conversation ends." },
                { id: 17, text: "You go quiet in groups because by the time you're ready to speak, the topic has changed." },
                { id: 18, text: "You miss jokes, sarcasm, or implied meanings until later (or not at all)." },
                { id: 19, text: "You get overwhelmed by rapid-fire questions and can't answer any of them." },
                { id: 20, text: "You need people to pause after asking something — but they keep adding more." }
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
              5. The Fallout Looks Like Avoidance (But It's Protection)
            </h2>
            <p className="text-gray-600 italic">
              When processing is hard, your nervous system learns "don't engage."
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You procrastinate because starting means facing confusing steps and too many decisions." },
                { id: 22, text: "You avoid calls, appointments, or paperwork because the info-load feels unmanageable." },
                { id: 23, text: "You freeze when instructions aren't clear — then feel ashamed for \"not just doing it.\"" },
                { id: 24, text: "You dissociate, go numb, or shut down when overwhelmed — like your brain pulls the plug to survive." },
                { id: 25, text: "You feel guilty for needing help, repeats, or written instructions — even though they're legitimate accommodations." }
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
              Processing difficulties are common in autism, ADHD, sensory processing differences, and trauma. Your brain needs more time, fewer inputs, and clearer signals to understand and respond to information. This isn't about intelligence — it's about how your nervous system handles incoming data, especially under stress or sensory overload. Understanding this can help you create environments and communication styles that support your processing needs.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Ask for Time:</strong> Say "Let me think about that" or "Can you give me a minute?"</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Reduce Sensory Input:</strong> Turn off background noise, dim lights, minimize visual clutter</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Request Written Info:</strong> Ask for instructions via text/email instead of verbal only</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>One Thing at a Time:</strong> Break conversations and tasks into single questions or steps</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Body-First Language:</strong> Use physical sensations (tight chest, heavy, jittery) when emotions are unclear</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/sensory-sensitivities" className="text-blue-600 hover:underline">
                → Sensory Sensitivities
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/sensory-overload" className="text-blue-600 hover:underline">
                → Sensory Overload
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/interoception" className="text-blue-600 hover:underline">
                → Interoception
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/social-cues" className="text-blue-600 hover:underline">
                → Social Communication
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
