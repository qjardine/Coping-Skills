'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function SensorySensitivitiesPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'sensory-sensitivities';

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
              Sensory Sensitivities (IRL)
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
              1. Your Environment Can Make or Break Your Day
            </h2>
            <p className="text-gray-600 italic">
              Your brain's not being dramatic — it's just trying to process everything all at once, and can't turn down the volume.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You avoid turning on the big overhead light — it's too harsh, makes your head pound, and feels instantly stressful." },
                { id: 2, text: "Supermarkets feel like sensory chaos — flickering lights, beeping scanners, music, crowds, smells — too much data, not enough processing space." },
                { id: 3, text: "You avoid perfume counters, movie theatres, food courts, loud hairdressers or big events because the mix of input is too intense." },
                { id: 4, text: "You often plan your outings around how loud, bright, crowded, or smelly a place might be — without even realising it." },
                { id: 5, text: "You have a love/hate relationship with the beach: windy, wet sticky sand, loud waves, sun is bright — it's all just a lot." }
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
              2. It's Driving Me Mad
            </h2>
            <p className="text-gray-600 italic">
              It's not being "high maintenance" — it's sensory self-defence.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You hate sock seams, tight waistbands, scratchy tags, or anything that clings or is tight." },
                { id: 7, text: "You struggle with messy tasks like washing dishes, making food — anything where your hands get dirty." },
                { id: 8, text: "You cut out every label and avoid fabrics like wool, lace, corduroy, denim, or anything that feels stiff or textured." },
                { id: 9, text: "When something feels "just right," you immediately buy it in three colours and wear it on rotation for months and re-wear the same outfit over and over." },
                { id: 10, text: "You are easily overwhelmed with layered sounds (TV's on, phone ringing, someone talking in the next room, cars driving past — oh and the big light is on)." }
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
              3. Crowds, Noise, and Movement Wipe You Out
            </h2>
            <p className="text-gray-600 italic">
              Even when you want to be there, your nervous system might tap out before you do.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You couldn't concentrate in school or work because fluorescent lights, chatter, and shuffling feet made it impossible to focus." },
                { id: 12, text: "You find it exhausting to talk in loud spaces — your brain keeps scanning the room for sounds, smells, and movement." },
                { id: 13, text: "Busy environments like parties, offices, or stations make you irritable or foggy — like you're dodging sensory punches nonstop." },
                { id: 14, text: "You feel an immediate drop in tension the moment you step into a quiet room after being in a loud one." },
                { id: 15, text: "You can pick up sounds others can't (like buzzing electricity or a ticking clock)." }
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
              4. Your Body Reacts Before You Can Name It
            </h2>
            <p className="text-gray-600 italic">
              You don't always know why you feel awful — but your nervous system definitely does.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "Strong smells like perfume, bleach, or reheated food hit you like a truck — triggering nausea, dizziness, or even panic." },
                { id: 17, text: "You feel "off" in rooms with flickering lights, clutter, mirrored floors, or too many colours and patterns." },
                { id: 18, text: "You feel uneasy when you have an injury — the feeling of being sore, a stinging cut etc is overwhelming." },
                { id: 19, text: "You don't always love being touched, unexpected hugs, being touched lightly, strangers putting their hand on your shoulder to get your attention." },
                { id: 20, text: "You are easily overwhelmed by visual clutter — messy space, messy mind, messy emotions." }
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
              5. Textures and Food Can Be War Zones
            </h2>
            <p className="text-gray-600 italic">
              Picky eating isn't about preference — it's protection from overwhelm.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You avoid textures like microfibre, raw wood, towels from the dryer, dry hands, or even the feeling of hair on your neck." },
                { id: 22, text: "You hate weird food textures (mushy, oily, slimy or gritty foods bananas, mushrooms, lentils, etc)." },
                { id: 23, text: "You eat familiar meals on repeat — often with ingredients that are consistent, like crisps, pre-made sauces, etc. Unlike fruit and veggies, which can have varying and inconsistent textures." },
                { id: 24, text: "You struggle with brushing your teeth, foaming toothpaste and the feeling of the bristles. PASS." },
                { id: 25, text: "Wearing headbands, clips, hair ties or your hair being in the same position too long hurts the skin on your scalp." }
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
              Sensory sensitivities are common with autism, ADHD, anxiety, PTSD, and SPD (Sensory Processing Disorder). Your nervous system processes sensory input differently — sometimes too loudly, sometimes not enough. Understanding your sensory profile helps you advocate for your needs and create environments where you can thrive.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Complete your <Link href="/pages/neurodivergent/sensory-profiles" className="text-blue-600 hover:underline">sensory profile</Link> to identify your triggers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Build a <Link href="/pages/neurodivergent/sensory-kit" className="text-blue-600 hover:underline">sensory toolkit</Link> with items that help regulate</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Create a <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:underline">sensory safe space</Link> at home</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Practice <Link href="/pages/neurodivergent/sensory-soothing" className="text-blue-600 hover:underline">sensory self-soothing</Link> techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Use <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:underline">stims</Link> to regulate when overwhelmed</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:underline">
                → Meltdown Prevention
              </Link>
              <Link href="/pages/crisis/tolerance-window" className="text-blue-600 hover:underline">
                → Window of Tolerance
              </Link>
              <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:underline">
                → Personal Care Plan
              </Link>
              <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:underline">
                → Self-Soothing with Senses
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
