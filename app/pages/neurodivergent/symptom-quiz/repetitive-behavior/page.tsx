'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RepetitiveBehaviorPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

  const toggleCheck = ({ id }: { id: number }) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">
              Repetitive Behavior (IRL)
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
              1. Repetition Helps You Feel Safe + Steady
            </h2>
            <p className="text-gray-600 italic">
              Sometimes your brain just needs a loop to latch onto — not to control, but to feel grounded.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You whisper 'keys, keys, keys' on repeat while searching for them." },
                { id: 2, text: "You ask the same question several times — not because you didn't hear, but because you need reassurance that you heard them correctly." },
                { id: 3, text: "You recite 'phone, wallet, keys' before leaving the house like a verbal checklist that calms your brain." },
                { id: 4, text: "You count steps, strokes, or items — in your head or aloud — just to feel some kind of order." },
                { id: 5, text: "You repeat the same routine or steps (like brushing teeth then flossing) because it feels 'wrong' to mix it up." }
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
              2. Your Body Does It Too
            </h2>
            <p className="text-gray-600 italic">
              Repetitive physical behaviours aren't always about sensory-seeking — they're also how you regulate, soothe, or just be.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You pace a specific path while thinking — back and forth in the same hallway or room until your thoughts land." },
                { id: 7, text: "You bounce your leg, rock, or tap in rhythm without noticing — until someone points it out or you finally feel calmer." },
                { id: 8, text: "You rub the same spot on your thumb, twist your jewellery, or tap objects in a repeated, comforting pattern." },
                { id: 9, text: "You hum or repeat sounds to yourself quietly — a phrase, a word, or a tune that helps you feel calm." },
                { id: 10, text: "You stay in one looping motion (tapping, swaying, bouncing) until your body signals it's okay to stop." }
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
              3. Language Loops Are Your Brain's Replay Button
            </h2>
            <p className="text-gray-600 italic">
              Verbal repetition isn't "just a habit" — it's communication, self-regulation, scripting, and processing all rolled into one.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You repeat what someone just said (immediate echolalia) as a way to process or confirm understanding." },
                { id: 12, text: "You reuse favourite phrases from movies or conversations (delayed echolalia) — sometimes it says what you can't." },
                { id: 13, text: "You mentally rehearse full conversations before they happen, replaying them line-for-line just in case you need the script." },
                { id: 14, text: "You mentally repeat the same idea, thought in your mind multiple times while you're trying to figure it out/work through it." },
                { id: 15, text: "You revisit the same thought or word internally until your brain feels like it's 'filed' it properly." }
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
              4. You Loop Ideas, Interests, and Memories
            </h2>
            <p className="text-gray-600 italic">
              Repetitive behaviour isn't always physical — your brain can get stuck on thoughts, stories, and hyperfixations too.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You relive past conversations or embarrassing moments like a playlist your brain won't stop hitting 'repeat' on." },
                { id: 17, text: "You rewatch, reread, or replay the same song over and over — it's comforting and doesn't require new effort." },
                { id: 18, text: "You talk about the same topic a lot — even if the conversation's moved on — because it still feels unfinished." },
                { id: 19, text: "You go down rabbit holes of information you already know, just to feel competent or comforted." },
                { id: 20, text: "You have a comfort food (familiarity), but you will eat that over and over for months on end." }
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
              5. People Misunderstand What It Actually Does For You
            </h2>
            <p className="text-gray-600 italic">
              To them it looks obsessive or weird — to you, it's stability, safety, and survival — and always has been.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You've been told your routines, stims, or habits are 'too much,' 'childish,' or attention-seeking." },
                { id: 22, text: "You've masked your repetitive behaviours to avoid being teased — then burned out from the effort of hiding them." },
                { id: 23, text: "You feel embarrassed after repeating something out loud — even though it helped you process or stay on track (like mimicking the beeping of the microwave)." },
                { id: 24, text: "Experienced distress when you couldn't finish a repeated behaviour \"properly\" — like being interrupted when your brain is midway through mentally singing a lyric." },
                { id: 25, text: "Now realise repetition wasn't a problem — it was your brain's way of coping, organising, and staying steady all along." }
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
              Repetitive behaviors are common in autism, OCD, ADHD, anxiety, and trauma responses. They serve important functions: self-soothing, processing information, creating predictability, managing sensory input, and providing stability. These behaviors aren't "bad habits" — they're legitimate coping mechanisms that help your nervous system regulate and feel safe.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Honor your repetitive behaviors — they're helping you regulate, not harming anyone</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Learn about <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:underline">stimming</Link> and how repetition supports regulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Build <Link href="/pages/neurodivergent/symptom-quiz/routine" className="text-blue-600 hover:underline">routines</Link> that accommodate your need for repetition</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Use <Link href="/pages/neurodivergent/symptom-quiz/seeking-familiarity" className="text-blue-600 hover:underline">familiarity</Link> as a strength, not a limitation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Create a <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:underline">safe space</Link> where you can engage in repetitive behaviors freely</span>
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
              <Link href="/pages/neurodivergent/symptom-quiz/stimming" className="text-blue-600 hover:underline">
                → Stimming
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/routine" className="text-blue-600 hover:underline">
                → Needs Routine
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
