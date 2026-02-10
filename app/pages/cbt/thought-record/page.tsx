'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ThoughtRecordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    situation: '',
    thought: '',
    emotions: '',
    behaviors: '',
    outcome: '',
    alternative: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updateField = ({ field, value }: { field: string; value: string }) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Thought Record
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Identify and record your thoughts to understand patterns
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                In cognitive behavioral therapy (CBT), there are few tools as simple—but powerful—as a thought record. Thought records help you identify and record your thoughts, which becomes a core skill for the rest of CBT work (distortions, core beliefs, behavioral experiments, and more).
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 mb-2 font-semibold">Your Thought Record tracks:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Situation</strong> (what happened)</li>
                  <li><strong>Thought</strong> (what your mind said it meant)</li>
                  <li><strong>Response</strong> (emotions & behaviors)</li>
                  <li><strong>Outcome</strong> (what happened next / what it led to)</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                This helps you notice patterns and understand how thoughts + responses shape outcomes.
              </p>

              <div className="flex justify-center">
                <a
                  href="/assets/Worksheets/thought-record.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
                >
                  📄 Download Worksheet (PDF)
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4">
                <li><a href="#what-it-is" className="hover:underline">What a thought record is</a></li>
                <li><a href="#when-to-use" className="hover:underline">When to use it</a></li>
                <li><a href="#how-to-fill" className="hover:underline">How to fill it out (column-by-column)</a></li>
                <li><a href="#practice-form" className="hover:underline">Your Thought Record (write it out)</a></li>
                <li><a href="#practice-plan" className="hover:underline">Practice plan (session → between sessions → review)</a></li>
                <li><a href="#if-stuck" className="hover:underline">If you get stuck: prompts + examples</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="what-it-is">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What a thought record is
              </h2>
              
              <p className="text-gray-700 mb-4">
                A thought record is a common CBT exercise that helps you capture and examine what happened, what you thought, how you reacted, and what the outcome was. It's a structured way to spot "thinking patterns" and begin challenging/reframing unhelpful thoughts.
              </p>

              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <p className="text-gray-700">
                  Your PDF keeps it extra simple with four columns: <strong>Situation | Thought | Response (emotions & behaviors) | Outcome</strong>.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="when-to-use">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) When to use it
              </h2>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200 mb-3">
                <p className="text-gray-800 font-bold mb-3">Use a thought record when:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Your mood shifts suddenly (anxiety spike, shame wave, anger surge)</li>
                  <li>You're stuck replaying something</li>
                  <li>You avoided something and feel worse after</li>
                  <li>You want to understand a repeating pattern ("this always happens")</li>
                </ul>
              </div>

              <div className="p-3 bg-teal-50 rounded border border-teal-200">
                <p className="text-gray-700 italic">
                  <strong>Tip:</strong> don't wait for a "big" situation. Small triggers are perfect practice.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="how-to-fill">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) How to fill it out (column-by-column)
              </h2>

              <p className="text-gray-700 mb-4">
                This matches your PDF layout.
              </p>

              <div className="space-y-4">
                {/* Situation */}
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">Situation (facts only)</p>
                  <p className="text-gray-700 mb-3">
                    Write a brief "camera footage" description:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                    <li>Where were you?</li>
                    <li>Who was there?</li>
                    <li>What happened right before you noticed the emotion shift?</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 italic">
                    Keep it short and observable (no mind-reading).
                  </p>
                </div>

                {/* Thought */}
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-800 font-bold mb-2">Thought (what your mind said)</p>
                  <p className="text-gray-700 mb-2">
                    Write the strongest thought as a quote:
                  </p>
                  <div className="bg-white p-3 rounded border border-purple-300 mb-2">
                    <p className="text-gray-700 italic">"They're mad at me."</p>
                    <p className="text-gray-700 italic">"This means I'm unsafe."</p>
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    If there are multiple thoughts, pick the hottest one (the one that hits hardest).
                  </p>
                </div>

                {/* Response */}
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">Response (emotions & behaviors)</p>
                  <p className="text-gray-700 mb-3">Split into two parts:</p>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border border-green-300">
                      <p className="text-gray-700">
                        <strong>Emotions:</strong> name + intensity (0–100)
                      </p>
                      <p className="text-gray-600 text-sm italic">e.g., anxiety 80/100, shame 70/100</p>
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-green-300">
                      <p className="text-gray-700">
                        <strong>Behaviors:</strong> what you did (or avoided doing)
                      </p>
                      <p className="text-gray-600 text-sm italic">withdrew, argued, checked, apologized repeatedly, doomscrolled, didn't eat, etc.</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mt-3 font-semibold">
                    This column is where you learn your personal "loop."
                  </p>
                </div>

                {/* Outcome */}
                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <p className="text-gray-800 font-bold mb-2">Outcome (what happened next)</p>
                  <p className="text-gray-700 mb-3">What did your response lead to?</p>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>short-term relief? (avoidance often does this)</li>
                    <li>longer-term cost? (more anxiety later, conflict, missed opportunities)</li>
                  </ul>

                  <p className="text-gray-700 mt-3 italic">
                    Over time, outcomes teach you what patterns actually work.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 - Interactive Form */}
            <div id="practice-form">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Your Thought Record (write it out)
              </h2>

              <p className="text-gray-700 mb-4">
                Copy/paste this and fill it in (one row at a time):
              </p>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-400 space-y-5">
                {/* Situation */}
                <div>
                  <label htmlFor="situation" className="block text-gray-800 font-bold mb-2">
                    Situation (facts only):
                  </label>
                  <textarea
                    id="situation"
                    value={formData.situation}
                    onChange={(e) => updateField({ field: 'situation', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={3}
                    placeholder="Where were you? Who was there? What happened?"
                  />
                </div>

                {/* Thought */}
                <div>
                  <label htmlFor="thought" className="block text-gray-800 font-bold mb-2">
                    Thought (quote it):
                  </label>
                  <textarea
                    id="thought"
                    value={formData.thought}
                    onChange={(e) => updateField({ field: 'thought', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={2}
                    placeholder='"My mind said..."'
                  />
                </div>

                {/* Response - Emotions */}
                <div>
                  <label htmlFor="emotions" className="block text-gray-800 font-bold mb-2">
                    Response — emotions (0–100):
                  </label>
                  <textarea
                    id="emotions"
                    value={formData.emotions}
                    onChange={(e) => updateField({ field: 'emotions', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={2}
                    placeholder="e.g., anxiety 80/100, shame 70/100"
                  />
                </div>

                {/* Response - Behaviors */}
                <div>
                  <label htmlFor="behaviors" className="block text-gray-800 font-bold mb-2">
                    Response — behaviors (what I did / avoided):
                  </label>
                  <textarea
                    id="behaviors"
                    value={formData.behaviors}
                    onChange={(e) => updateField({ field: 'behaviors', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={2}
                    placeholder="withdrew, argued, checked, avoided, etc."
                  />
                </div>

                {/* Outcome */}
                <div>
                  <label htmlFor="outcome" className="block text-gray-800 font-bold mb-2">
                    Outcome (what happened next / what it led to):
                  </label>
                  <textarea
                    id="outcome"
                    value={formData.outcome}
                    onChange={(e) => updateField({ field: 'outcome', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={3}
                    placeholder="Short-term relief? Longer-term cost?"
                  />
                </div>

                {/* Optional Alternative */}
                <div className="pt-3 border-t border-teal-300">
                  <label htmlFor="alternative" className="block text-gray-800 font-bold mb-2">
                    Optional (highly recommended): what I wish I'd done instead (tiny step):
                  </label>
                  <textarea
                    id="alternative"
                    value={formData.alternative}
                    onChange={(e) => updateField({ field: 'alternative', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={2}
                    placeholder="One small alternative action..."
                  />
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="practice-plan">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Practice plan (session → between sessions → review)
              </h2>

              <p className="text-gray-700 mb-4">
                A strong way to learn this tool (and the way many CBT worksheets are taught) is:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded border border-blue-200 flex items-start">
                  <span className="text-2xl font-bold text-blue-600 mr-3">1</span>
                  <p className="text-gray-700">
                    Introduce it in session and fill one out together using a real past example.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200 flex items-start">
                  <span className="text-2xl font-bold text-blue-600 mr-3">2</span>
                  <p className="text-gray-700">
                    Practice with a couple more examples until the structure feels easy.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200 flex items-start">
                  <span className="text-2xl font-bold text-blue-600 mr-3">3</span>
                  <p className="text-gray-700">
                    Between sessions: complete a blank thought record with a new situation.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200 flex items-start">
                  <span className="text-2xl font-bold text-blue-600 mr-3">4</span>
                  <p className="text-gray-700">
                    Next session: review what you wrote and look for patterns, distortions, and next-step skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="if-stuck">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) If you get stuck: prompts + examples
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-800 font-bold mb-3">If you can't find the thought:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>"What did this mean about me?"</li>
                    <li>"What am I afraid will happen next?"</li>
                    <li>"If my emotion could talk, what would it say?"</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-800 font-bold mb-3">If your "situation" is full of interpretations:</p>
                  <p className="text-gray-700 mb-2">Rewrite it as:</p>
                  <div className="bg-white p-3 rounded border border-yellow-300 mb-2">
                    <p className="text-green-700">✓ "They didn't reply for 6 hours" (fact)</p>
                  </div>
                  <p className="text-gray-700 mb-2">not</p>
                  <div className="bg-white p-3 rounded border border-yellow-300">
                    <p className="text-red-700">✗ "They're ignoring me because I'm annoying" (thought)</p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-3">If your outcome is unclear:</p>
                  <p className="text-gray-700 mb-2">Ask:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Did my response make things better today?</li>
                    <li>Did it make things better tomorrow?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/automatic-thoughts" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Automatic Thoughts</p>
                  <p className="text-gray-600 text-sm">Catch the thought that starts the chain</p>
                </Link>
                <Link href="/pages/cbt/cognitive-distortions" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Distortions</p>
                  <p className="text-gray-600 text-sm">Name the thinking trap</p>
                </Link>
                <Link href="/pages/cbt/thoughts-on-trial" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thoughts on Trial</p>
                  <p className="text-gray-600 text-sm">Test the thought like evidence</p>
                </Link>
                <Link href="/pages/cbt/core-beliefs" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Core Beliefs</p>
                  <p className="text-gray-600 text-sm">When the same thought keeps returning</p>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center pt-4">
              <Link
                href="/pages/cbt"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                ← Back to CBT Hub
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
