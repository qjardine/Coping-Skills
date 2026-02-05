'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SocialCuesPage() {
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
              Social Communication (IRL)
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
              1. The Unspoken Rules Are Not Clear
            </h2>
            <p className="text-gray-600 italic">
              Social interaction often feels like everyone else got a script — and you're stuck decoding tone, body language, and hidden meaning on the fly.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You struggle to understand sarcasm, jokes, or teasing — it's hard to tell if someone's being funny or mean." },
                { id: 2, text: "You might take longer to respond because you're processing tone, context, body language, and if they're being literal or not." },
                { id: 3, text: "You understand language literally — if someone asks your favourite dish, you might answer "mug" not "pasta."" },
                { id: 4, text: "You struggle to tell when it's your turn to speak — sometimes interrupting, sometimes waiting too long and missing your chance." },
                { id: 5, text: "You follow rules and instructions exactly as given — even when others assume you'll just "know" what they meant." }
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
              2. You Communicate Differently Than Others Expect
            </h2>
            <p className="text-gray-600 italic">
              Your brain has its own rhythm and style — it's just not always what people are used to.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You struggle with small talk and often steer conversations toward deeper or more meaningful topics when possible." },
                { id: 7, text: "You could talk for hours about your favourite topic or special interest — but go blank on surface-level "small talk" questions." },
                { id: 8, text: "You speak bluntly, share honestly, or ask direct questions — and then worry you came across as rude or intense." },
                { id: 9, text: "You can't help but correct people if they say something that's factually incorrect — even if it's socially awkward." },
                { id: 10, text: "You talk too fast, too much, or not at all — it depends on your comfort, interest, and sensory state." }
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
              3. Your Brain Tries to Script Everything
            </h2>
            <p className="text-gray-600 italic">
              Improv is exhausting. Scripting, prepping, and replaying is how you keep social chaos from catching you off guard.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You mentally rehearse conversations, including every possible response — even for tiny things like greeting someone or ordering coffee." },
                { id: 12, text: "You replay past interactions, overanalysing every word, tone, and facial expression, overanalysing every word in case you overshared too much." },
                { id: 13, text: "You script common phrases or reactions in advance because small talk doesn't come naturally or intuitively." },
                { id: 14, text: "You freeze or panic when someone says something unexpected, emotional, or the conversation veers off the expected path — and you have trouble adjusting on the spot." },
                { id: 15, text: "You smile, nod, and hope for the best in social situations — even if you didn't understand what was said." }
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
              4. People Don't Always Get You (and Vice Versa)
            </h2>
            <p className="text-gray-600 italic">
              You're not antisocial — you're working ten times harder just to stay connected — and still get misunderstood.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You struggle to maintain eye contact — or overdo it — because it never feels truly natural or comfortable." },
                { id: 17, text: "You don't look at the camera on Zoom; you look at yourself to monitor your facial expression and body language." },
                { id: 18, text: "You often feel like you're "too much" or "too blunt," even when you're just being honest or enthusiastic." },
                { id: 19, text: "You get accused of missing social cues, being rude, or seeming cold — when you're simply overwhelmed or unsure." },
                { id: 20, text: "You feel pressure to track tone, body language, your own face, and the topic — and still respond meaningfully." }
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
              5. You've Adjusted Yourself to Be Accepted
            </h2>
            <p className="text-gray-600 italic">
              You've spent a lifetime reshaping how you show up — just to feel "normal" enough for everyone else.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You've masked your natural way of speaking or reacting to seem more "polished," "chill," or neurotypical." },
                { id: 22, text: "You fake enthusiasm in conversations just to avoid seeming disengaged — even when you're exhausted or totally disinterested." },
                { id: 23, text: "You find socialising exhausting because you're constantly monitoring how you're coming across instead of just being in the moment." },
                { id: 24, text: "You've left conversations feeling like you "messed it up," even if the other person didn't seem to notice anything wrong." },
                { id: 25, text: "You have a mental list of things to ask someone you know you're going to see, like how their dog "spot" is going, or has work at the police station been busy lately." }
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
              Difficulty with social communication is common in autism, ADHD, and social anxiety. Your brain processes social information differently — literal language, direct communication, and deeper conversations often feel more natural than neurotypical social scripts. This isn't a deficit — it's a different way of connecting that deserves understanding and accommodation.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Find people who appreciate your direct, honest communication style</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Practice saying "I don't understand" or asking for clarification without shame</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Learn about <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:underline">interpersonal effectiveness</Link> skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Build recovery time into social schedules — socializing is work for you</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Explore <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:underline">affirmations</Link> for social anxiety</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/masking" className="text-blue-600 hover:underline">
                → Masking
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/rejection-sensitivity" className="text-blue-600 hover:underline">
                → Rejection Sensitivity
              </Link>
              <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:underline">
                → Personal Care Plan
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
    </div>
  );
}
