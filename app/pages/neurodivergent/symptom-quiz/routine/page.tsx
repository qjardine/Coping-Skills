'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function RoutinePage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'routine';

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
              Needs Routine (IRL)
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
              1. Structure Calms Your Nervous System
            </h2>
            <p className="text-gray-600 italic">
              You're not rigid — your brain just functions better when it knows what's coming and when to expect it.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You feel safe, calmer, and less overwhelmed when you wake up knowing exactly what's happening in your day." },
                { id: 2, text: "You get anxious when you don't know what's next — even if it's something small, like what's for dinner." },
                { id: 3, text: "You find unstructured time weirdly stressful — too many options makes it impossible to choose or start anything." },
                { id: 4, text: "You like doing things in a specific order, like shower → coffee → emails — even if the order seems arbitrary." },
                { id: 5, text: "You repeat small rituals (like how you make tea or pack a bag) because they make life feel more manageable." }
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
              2. Change Feels Like a Threat, Not a Vibe
            </h2>
            <p className="text-gray-600 italic">
              Even fun surprises can send your nervous system into full DEFCON mode, especially if you weren't warned in advance.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You feel thrown off or panicked when plans suddenly change — even if they're technically 'better' plans." },
                { id: 7, text: "You need time to mentally prepare for schedule changes, even small ones like someone picking you up earlier than expected." },
                { id: 8, text: "If your routine is disrupted (wrong breakfast, someone moved your stuff), your whole day can feel off-kilter or harder to manage." },
                { id: 9, text: "'Go with the flow' feels like you're being swept away with no anchor — not relaxing, just stressful." },
                { id: 10, text: "You've been labelled rigid or controlling, when really you're just trying to protect your peace from unpredictability." }
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
              3. You Build Routines Into Everything
            </h2>
            <p className="text-gray-600 italic">
              It's not "just habit" — it's a way to reduce overwhelm and make life easier and more navigable.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You eat the same meals repeatedly because it saves you from having to make exhausting food choices every single day and you know they feel safe." },
                { id: 12, text: "You've created self-imposed 'rules' like which side of the bed you sleep on or what shirt goes with what socks." },
                { id: 13, text: "You feel deeply unsettled when something is done differently — even something small, like folding towels the 'wrong' way." },
                { id: 14, text: "You rewatch shows, replay songs, or read the same book again because it's familiar and your brain finds it soothing." },
                { id: 15, text: "You design systems — planners, charts, checklists — to make life easier to follow and harder to forget." }
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
              4. Transitions Are Not Your Favourite
            </h2>
            <p className="text-gray-600 italic">
              Starting and stopping things feels like gear shifts with no clutch — routine is what smooths the ride.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You struggle to start or end tasks without a specific cue, like a pee break, snack break (smoko)." },
                { id: 17, text: "You get hyperfocused on a routine and feel totally disoriented or irritable when it's interrupted, like when you go on holidays or have a visitor stay." },
                { id: 18, text: "You avoid travel or big events because they completely mess with your regular eating, sleeping, and downtime routines." },
                { id: 19, text: "You need planners, alarms, or calendars to keep you anchored — otherwise, your sense of time and tasks falls apart." },
                { id: 20, text: "Without routine, you feel untethered — like your body and brain are floating around without instructions or direction." }
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
              5. You've Been Misunderstood Because of It
            </h2>
            <p className="text-gray-600 italic">
              Other people see inflexibility — you know it's survival. Structure is how you stay regulated, not how you control everyone else.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "Been called dramatic or inflexible just because your routine got disrupted and your nervous system went haywire." },
                { id: 22, text: "You act 'chill' about sudden changes in public, then melt down later when you're finally alone." },
                { id: 23, text: "You feel low-key embarrassed about how badly you need routine to function — like it's a secret you have to hide." },
                { id: 24, text: "You've said yes to last-minute things trying to 'be spontaneous' — and ended up exhausted, overwhelmed, and mentally fried." },
                { id: 25, text: "You're your most capable, creative, and emotionally stable when your routines are predictable — not when you're forced to wing it." }
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
              Needing routine is common in autism, ADHD, anxiety, and OCD. Predictable structures help your nervous system feel safe and reduce the cognitive load of constant decision-making. This isn't about being controlling or inflexible — it's about creating stability in a world that often feels chaotic and overwhelming.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Build visual schedules, planners, or routines that work for your brain</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Create transition rituals (like tea between tasks) to ease gear changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Communicate your need for advance notice to friends and family</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Use <Link href="/pages/neurodivergent/act-intentionally" className="text-blue-600 hover:underline">intentional planning</Link> to reduce surprise overwhelm</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Build a <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:underline">care plan</Link> for when routines get disrupted</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/seeking-familiarity" className="text-blue-600 hover:underline">
                → Seeking Familiarity
              </Link>
              <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:underline">
                → Meltdown Prevention
              </Link>
              <Link href="/pages/neurodivergent/sensory-profiles" className="text-blue-600 hover:underline">
                → Sensory Profile & Needs
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
