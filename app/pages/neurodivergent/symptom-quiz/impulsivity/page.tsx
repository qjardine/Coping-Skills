'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function ImpulsivityPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'impulsivity';

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
              Impulsivity (IRL)
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
              1. The Mouth Moves Faster Than the Brain
            </h2>
            <p className="text-gray-600 italic">
              Blurts, overshares, and oops-you-said-it moments.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You blurt things out mid-conversation and only realise later it was off-topic or awkward." },
                { id: 2, text: "You interrupt people because if you don't say it now, you'll forget it." },
                { id: 3, text: "You sometimes overshare really personal stuff even if you just met someone." },
                { id: 4, text: "You've made jokes or said the \"wrong\" thing in serious moments, and realised it too late." },
                { id: 5, text: "You're sometimes brutally honest and share your opinion without considering someone else's feelings." }
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
              2. The "Buy Now, Regret Later" Specialist
            </h2>
            <p className="text-gray-600 italic">
              Impulse purchases and late-night checkout demons.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You've bought random things online late at night and forgotten about them until they arrive." },
                { id: 7, text: "You justify small impulse purchases all day, not noticing how fast they add up." },
                { id: 8, text: "You've made big financial decisions impulsively without fully thinking it through." },
                { id: 9, text: "You've gone all-in on a hobby or goal — buying the gear before confirming your interest." },
                { id: 10, text: "You've bought full outfits or product setups for something you might not even follow through with." }
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
              3. The Task-Hopper and Time-Warp Wizard
            </h2>
            <p className="text-gray-600 italic">
              Jumping from idea to idea… or forgetting what time even is.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You underestimate how long things will take and overstuff your schedule." },
                { id: 12, text: "You drop what you're doing the moment a new task or idea feels more exciting." },
                { id: 13, text: "You switch between tasks constantly — often leaving multiple things unfinished." },
                { id: 14, text: "You say \"I'll just do this one thing real quick\" and emerge three hours later." },
                { id: 15, text: "You hyperfocus on something unplanned, forgetting urgent tasks or responsibilities." }
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
              4. The Feelings-First Reactor
            </h2>
            <p className="text-gray-600 italic">
              Where emotions = action, usually a bit too fast.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You react emotionally before thinking — and might lash out or spiral quickly." },
                { id: 17, text: "You've rage-quit a job, cut ties with someone, or made big decisions mid-meltdown." },
                { id: 18, text: "You act quickly on intense emotions — like ghosting, deleting, or starting over." },
                { id: 19, text: "You overcommit when excited, then instantly regret it when the dopamine fades." },
                { id: 20, text: "You sabotage plans or progress the moment things feel overwhelming." }
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
              5. The Emotionally Charged Impulse + Shame Spiral
            </h2>
            <p className="text-gray-600 italic">
              The aftermath of acting fast — and feeling it deeply.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You replay what you said or did — over and over — feeling shame for how you reacted." },
                { id: 22, text: "You feel guilty for interrupting or taking over conversations but don't know how to stop." },
                { id: 23, text: "You beat yourself up for spending money impulsively — and hide it from others." },
                { id: 24, text: "You feel like you're \"too much\" or a burden when your excitement turns chaotic." },
                { id: 25, text: "You've convinced yourself you're irresponsible, unreliable, or broken — just because you act on impulse more than others." }
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
              Impulsivity is common in ADHD, autism, and emotional dysregulation. Your brain processes rewards, consequences, and decisions differently — acting on immediate feelings rather than delayed outcomes. This isn't about being reckless or irresponsible — it's about how your brain prioritizes urgency, novelty, and emotion over planning and inhibition. Understanding this can help you build systems that work with your impulses instead of fighting them.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>The STOP Skill:</strong> Use <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:underline">STOP</Link> (Stop, Take a step back, Observe, Proceed mindfully) before acting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>24-Hour Rule:</strong> Wait a day before making big purchases or decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Budget Limits:</strong> Set spending caps or use separate accounts for impulse vs. planned purchases</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Pause Scripts:</strong> Practice saying "Let me think about that" or "I'll get back to you"</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Energy Outlets:</strong> Channel impulsive energy into movement, creative projects, or physical activity</span>
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
              <Link href="/pages/neurodivergent/symptom-quiz/emotional-dysregulation" className="text-blue-600 hover:underline">
                → Emotional Dysregulation
              </Link>
              <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:underline">
                → STOP Skill
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/hyperactivity" className="text-blue-600 hover:underline">
                → Hyperactivity
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
