'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function HyperfixationPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'hyperfixation';

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
              Hyperfocus (IRL)
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
              1. Once You Start, You Cannot Stop
            </h2>
            <p className="text-gray-600 italic">
              You sit down "just for a bit" — then look up five hours later, hungry, stiff, and wildly off-schedule.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You lose hours in a task and completely forget to eat, pee, stretch, or respond to texts." },
                { id: 2, text: "You start something 'just for 10 minutes' and accidentally blow through an entire afternoon." },
                { id: 3, text: "You tell yourself you'll stop after one more round, episode, or paragraph… and then you don't." },
                { id: 4, text: "You become so locked in, you physically can't switch tasks, even when you know you should." },
                { id: 5, text: "You ignore everything around you — alarms, conversations, hunger — because your brain won't let go of the task." }
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
              2. Your Brain Picks the Target (Not You)
            </h2>
            <p className="text-gray-600 italic">
              It doesn't matter if it's urgent or helpful — your brain latches on to grout, spreadsheets, or random rabbit holes.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You hyperfocus on cleaning, crafting, or rearranging furniture — while deadlines and bills collect dust in the background." },
                { id: 7, text: "You dive into deep research on something random (like jellyfish or tax law) and forget your actual priorities." },
                { id: 8, text: "You start organising drawers instead of replying to a time-sensitive email — and genuinely can't switch gears." },
                { id: 9, text: "You hyperfixate on hobbies or interests for weeks — buying supplies, watching tutorials — then move on without finishing." },
                { id: 10, text: "You avoid starting some things entirely because you know you'll get too absorbed and lose half your day." }
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
              3. It's Not Always Useful
            </h2>
            <p className="text-gray-600 italic">
              Sometimes it's creative genius… other times it's four hours redesigning a playlist instead of doing your taxes.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You spend hours tweaking fonts, layouts, or colours for a project that didn't need to be perfect." },
                { id: 12, text: "You finish the fun parts of something and ignore the boring or important ones — like shipping the finished order." },
                { id: 13, text: "You accidentally stay up all night hyperfocused and feel hungover from sheer mental exhaustion the next day." },
                { id: 14, text: "You've forgotten appointments, burnt dinner, or missed meetings because you were so deep in your zone." },
                { id: 15, text: "You feel panicked or frustrated when someone interrupts your focus — like they broke a fragile spell you were inside." }
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
              4. It Feels Amazing… Until It Doesn't
            </h2>
            <p className="text-gray-600 italic">
              When it works it's magical — but when you can't tap into it, everything feels heavy, slow, and impossible.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You get bursts of intense focus and output that make you feel unstoppable — until you crash hard afterwards." },
                { id: 17, text: "You feel lost or ashamed when you can't get into hyperfocus — even when everything else depends on it." },
                { id: 18, text: "You rely on hyperfocus to get things done because normal motivation or focus just isn't strong enough." },
                { id: 19, text: "You don't notice hunger, pain, or overstimulation while in a flow state — until your body fully malfunctions." },
                { id: 20, text: "You spend hours chasing that mental 'lock in' feeling — reorganising, prepping, or reworking the conditions to make it happen." }
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
              5. It Impacts How You See Yourself
            </h2>
            <p className="text-gray-600 italic">
              You're either a productivity machine… or completely frozen — and that whiplash messes with your self-worth.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You feel proud of the intense, high-quality work you can do — but guilty about what you neglected to get there." },
                { id: 22, text: "You feel confused and frustrated that you can hyperfocus on some things… but can't even start others." },
                { id: 23, text: "You've been accused of laziness or inconsistency, even though hyperfocus proves how capable you really are." },
                { id: 24, text: "You carry shame for missing meals, ignoring messages, or not hearing someone speaking to you." },
                { id: 25, text: "You feel guilty when you snap at your loved ones when they interrupt your hyperfocus." }
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
              Hyperfocus is a hallmark of ADHD and autism, where your brain locks onto tasks with laser intensity — for better or worse. It's not about willpower; it's about how your brain regulates attention and reward. Learning to work with (not against) hyperfocus can help you harness its power while protecting your wellbeing.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Set alarms or timers to break hyperfocus and check in with your body</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Keep water and snacks nearby so you don't forget to eat</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Use <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:underline">special interests</Link> strategically for rewards or regulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Practice <Link href="/pages/neurodivergent/act-intentionally" className="text-blue-600 hover:underline">acting intentionally</Link> to choose focus targets</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Create a <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:underline">care plan</Link> for recovery after hyperfocus crashes</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/dopamine-seeking" className="text-blue-600 hover:underline">
                → Dopamine Seeking
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/task-paralysis" className="text-blue-600 hover:underline">
                → Task Paralysis
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/time-blindness" className="text-blue-600 hover:underline">
                → Time Blindness
              </Link>
              <Link href="/pages/neurodivergent/sensory-profiles" className="text-blue-600 hover:underline">
                → Sensory Profile & Needs
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
