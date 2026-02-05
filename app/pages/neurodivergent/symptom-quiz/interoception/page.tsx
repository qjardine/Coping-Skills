'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function InteroceptionPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'interoception';

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
              Interoception (IRL)
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
              1. Body Clues? Never Heard of Her
            </h2>
            <p className="text-gray-600 italic">
              Your body doesn't whisper — it screams, but only when it's nearly too late.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You forget to eat, get a drink, or pee until your body forces the issue — headache, nausea, bladder panic, the works." },
                { id: 2, text: "You don't realise you're tired until you physically crash — dizzy, sick, or so fried your brain just shuts down." },
                { id: 3, text: "You either feel pain way too much or not at all — small bumps are agony, but you miss injuries entirely." },
                { id: 4, text: "You only notice being hot, cold, or uncomfortable after everyone else has adjusted — like you missed the memo." },
                { id: 5, text: "You swing between starving and stuffed, because that gentle "I'm getting full" signal just doesn't show up." }
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
              2. You Can't Tell What You're Feeling
            </h2>
            <p className="text-gray-600 italic">
              It's not that you don't feel — it's that the signal is scrambled or it never arrives.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You can't tell if you're hungry or bored, anxious or excited, tired or lazy — it all blends together." },
                { id: 7, text: "You struggle to describe how your body feels — just "weird," "off," "meh" with no clear location or reason." },
                { id: 8, text: "You think you're fine until pain, fatigue, or nausea hits out of nowhere — and now it's definitely not fine." },
                { id: 9, text: "You misread physical symptoms as emergencies — like a tummy ache that spirals into "am I dying?"" },
                { id: 10, text: "You second-guess if you're actually unwell or just imagining it — you genuinely can't tell sometimes." }
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
              3. Emotions Hijack the Body Bus
            </h2>
            <p className="text-gray-600 italic">
              Your feelings drive the vehicle, but you're not sure if it's gas, brakes, or the check engine light.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You realise you're anxious because your chest is tight and your stomach flipped — not the other way around." },
                { id: 12, text: "You miss that you're overwhelmed until you snap, cry, or shut down and wonder "why did that feel so big?"" },
                { id: 13, text: "You experience emotions as full-body sensations — buzzing skin, clenching jaw, shaky hands — even before thoughts catch up." },
                { id: 14, text: "You struggle to recognise your emotions until someone else reflects them — "Oh… I guess I'm angry."" },
                { id: 15, text: "You can't always tell the difference between emotional dysregulation and sensory overload — it's just "everything's wrong."" }
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
              4. You're the Last to Know You're Unwell
            </h2>
            <p className="text-gray-600 italic">
              The signals were there — your brain just didn't check the inbox.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You don't realise you're sick until you're floored — fever, fatigue, and "why didn't I notice this yesterday?"" },
                { id: 17, text: "You ignore subtle warning signs like sore throats or aches until they're fully debilitating." },
                { id: 18, text: "You walk around with injuries or pain for days without noticing — until someone else points it out." },
                { id: 19, text: "You miss signs of stress or burnout until you physically can't get out of bed." },
                { id: 20, text: "You feel surprised when people ask if you're okay — and then realise, yeah, you don't feel great." }
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
              5. Your Daily Life Gets Thrown Off Course
            </h2>
            <p className="text-gray-600 italic">
              When you can't trust your internal signals, everything takes more effort — or comes with unexpected consequences.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You miss meals, bathroom breaks, or hydration — and only realise when your body starts glitching." },
                { id: 22, text: "You overexert yourself or miss sleep because tiredness doesn't register until it's 3am and your body says "nope."" },
                { id: 23, text: "You can't build consistent routines around food, sleep, or self-care because your internal timing feels broken." },
                { id: 24, text: "You avoid medical appointments because you're unsure what you're feeling or how to explain it clearly." },
                { id: 25, text: "You rely on chaos-friendly systems — timers, snacks, "pee first" rules — because guessing what your body needs just isn't working." }
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
              Interoception difficulties are common in autism, ADHD, anxiety disorders, and trauma. Your brain struggles to interpret internal body signals like hunger, thirst, pain, temperature, or emotions. This isn't about being "out of touch" — it's a genuine neurological difference in how your body communicates with your brain.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Set alarms for meals, water, and bathroom breaks throughout the day</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Practice <Link href="/pages/neurodivergent/describe" className="text-blue-600 hover:underline">describing emotions</Link> and body sensations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Use <Link href="/pages/neurodivergent/sensory-profiles" className="text-blue-600 hover:underline">sensory check-ins</Link> to tune into your body</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Learn about <Link href="/pages/neurodivergent/alexithymia" className="text-blue-600 hover:underline">alexithymia</Link> (difficulty identifying emotions)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Keep snacks, water, and comfort items easily accessible</span>
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
              <Link href="/pages/neurodivergent/alexithymia" className="text-blue-600 hover:underline">
                → Alexithymia
              </Link>
              <Link href="/pages/neurodivergent/emotion-regulation" className="text-blue-600 hover:underline">
                → Emotion Regulation
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
