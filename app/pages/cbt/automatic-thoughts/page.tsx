'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function AutomaticThoughtsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    trigger: '',
    automaticThought: '',
    emotions: '',
    newThought: '',
    action: '',
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
            Automatic Thoughts
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Quick, reflexive thoughts that shape your mood and actions
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Automatic thoughts are the quick, reflexive thoughts that pop up in response to a situation—often so fast you don't notice them, but they still shape your mood and actions. Your worksheet explains that automatic thoughts can be negative and irrational, and that identifying them and replacing them with more rational thoughts can improve mood.
              </p>
              
              <div className="p-4 bg-yellow-50 rounded border-2 border-yellow-300 mb-4">
                <p className="text-gray-800 font-bold text-center text-lg">
                  Automatic thoughts are not facts—they're your brain's instant interpretation.
                </p>
              </div>

              <div className="flex justify-center">
                <a
                  href="/assets/Worksheets/automatic-thoughts.pdf"
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
                <li><a href="#what-they-are" className="hover:underline">What automatic thoughts are</a></li>
                <li><a href="#how-affect-mood" className="hover:underline">How they affect mood (even when you don't notice them)</a></li>
                <li><a href="#common-signs" className="hover:underline">Common signs you're in an automatic thought</a></li>
                <li><a href="#step-by-step" className="hover:underline">Step-by-step: Catch → Write → Replace</a></li>
                <li><a href="#practice" className="hover:underline">Your Automatic Thoughts Practice (write it out)</a></li>
                <li><a href="#if-stuck" className="hover:underline">If you get stuck: prompts + examples</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="what-they-are">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What automatic thoughts are
              </h2>
              
              <p className="text-gray-700 mb-4">
                Automatic thoughts are immediate reactions your mind produces about:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">You</p>
                  <p className="text-gray-700 italic">"I'm stupid"</p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-800 font-bold mb-2">Other people</p>
                  <p className="text-gray-700 italic">"They're judging me"</p>
                </div>

                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <p className="text-gray-800 font-bold mb-2">The future</p>
                  <p className="text-gray-700 italic">"This will go badly"</p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                They often show up as short sentences, images, or a "gut conclusion," and they can repeat in familiar patterns.
              </p>
            </div>

            {/* Section 2 */}
            <div id="how-affect-mood">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) How they affect mood (even when you don't notice them)
              </h2>

              <p className="text-gray-700 mb-4">
                Your worksheet notes that thoughts influence how we feel about ourselves and the world. Sometimes the thought happens so quickly that we miss it—but the mood shift still happens.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-5 rounded-lg border border-blue-200">
                <p className="text-gray-800 font-semibold mb-3">Example:</p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong className="text-blue-700">Trigger:</strong> a mistake
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-red-700">Automatic thought:</strong> "I'm going to be fired. I always mess up."
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-orange-700">Result:</strong> anxiety, shame, avoidance
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-700">New thought:</strong> "Mistakes happen. I can work through this."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="common-signs">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Common signs you're in an automatic thought
              </h2>

              <div className="p-4 bg-red-50 rounded border border-red-200">
                <p className="text-gray-800 font-bold mb-3">You might be in an automatic thought when:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Your emotion intensity jumps quickly (0 → 80)</li>
                  <li>You feel suddenly ashamed, panicky, angry, or hopeless</li>
                  <li>Your brain uses <span className="font-semibold">always/never</span>, <span className="font-semibold">ruined</span>, <span className="font-semibold">they must think</span></li>
                  <li>You want to avoid, hide, check, or seek reassurance immediately</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div id="step-by-step">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Step-by-step: Catch → Write → Replace
              </h2>

              <p className="text-gray-700 mb-4">
                This matches the structure on your worksheet: Trigger → Automatic Thought → New Thought.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-800 font-bold mb-2">Step 1: Catch the trigger (facts only)</p>
                  <p className="text-gray-700">What happened? (who/what/when/where)</p>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-800 font-bold mb-2">Step 2: Write the automatic thought as a quote</p>
                  <p className="text-gray-700 mb-2">"My mind said: '___'"</p>
                  <p className="text-gray-600 text-sm italic">Tip: If there are multiple thoughts, write the most painful one first.</p>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-800 font-bold mb-2">Step 3: Replace with a new, rational thought</p>
                  <p className="text-gray-700 mb-3">Not fake-positive—just more realistic and helpful.</p>
                  
                  <div className="bg-white p-3 rounded border border-yellow-300">
                    <p className="text-gray-700 font-semibold mb-2">A good "new thought" is:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                      <li>believable (you could say it out loud without cringing)</li>
                      <li>specific (not vague)</li>
                      <li>kind but not enabling</li>
                      <li>focused on what you can do next</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 - Interactive Practice */}
            <div id="practice">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Your Automatic Thoughts Practice (write it out)
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-400 space-y-5">
                {/* Trigger */}
                <div>
                  <label htmlFor="trigger" className="block text-gray-800 font-bold mb-2">
                    Trigger (facts):
                  </label>
                  <textarea
                    id="trigger"
                    value={formData.trigger}
                    onChange={(e) => updateField({ field: 'trigger', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={3}
                    placeholder="What happened? (who/what/when/where)"
                  />
                </div>

                {/* Automatic Thought */}
                <div>
                  <label htmlFor="automatic-thought" className="block text-gray-800 font-bold mb-2">
                    Automatic thought (what my mind said):
                  </label>
                  <textarea
                    id="automatic-thought"
                    value={formData.automaticThought}
                    onChange={(e) => updateField({ field: 'automaticThought', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={3}
                    placeholder='"My mind said..."'
                  />
                </div>

                {/* Emotions */}
                <div>
                  <label htmlFor="emotions" className="block text-gray-800 font-bold mb-2">
                    Emotion(s) + intensity (0–100):
                  </label>
                  <textarea
                    id="emotions"
                    value={formData.emotions}
                    onChange={(e) => updateField({ field: 'emotions', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={2}
                    placeholder="e.g., Anxiety 85/100, Shame 70/100"
                  />
                </div>

                {/* New Thought */}
                <div>
                  <label htmlFor="new-thought" className="block text-gray-800 font-bold mb-2">
                    New thought (more rational / balanced):
                  </label>
                  <textarea
                    id="new-thought"
                    value={formData.newThought}
                    onChange={(e) => updateField({ field: 'newThought', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={3}
                    placeholder="A more balanced, believable thought..."
                  />
                </div>

                {/* Action */}
                <div>
                  <label htmlFor="action" className="block text-gray-800 font-bold mb-2">
                    Action I'll take (tiny next step):
                  </label>
                  <textarea
                    id="action"
                    value={formData.action}
                    onChange={(e) => updateField({ field: 'action', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={2}
                    placeholder="One small, specific action I can take..."
                  />
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="if-stuck">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) If you get stuck: prompts + examples
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-800 font-bold mb-3">Prompts to uncover the thought</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-4">
                    <li>What is the worst thing my brain is predicting?</li>
                    <li>What does this mean about me?</li>
                    <li>What does this mean about them?</li>
                    <li>What does this mean about the future?</li>
                    <li>If this thought were true, what am I afraid would happen next?</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-3">"New thought" sentence starters</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-4">
                    <li>"A more balanced way to see this is…"</li>
                    <li>"One possibility is…, another possibility is…"</li>
                    <li>"Even if this is uncomfortable, I can…"</li>
                    <li>"I don't have all the facts yet, so I can…"</li>
                    <li>"Mistakes happen. What I can do next is…"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-5 rounded-lg border border-orange-200">
                <p className="text-gray-800 font-bold mb-3">Example (from your worksheet)</p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Trigger:</strong> I made a mistake at work.
                  </p>
                  <p className="text-gray-700">
                    <strong>Automatic thought:</strong> "I'm probably going to be fired… I'm no good at this job."
                  </p>
                  <p className="text-gray-700">
                    <strong>New thought:</strong> "I messed up, but mistakes happen. I'm going to work through this, like I always do."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/cognitive-distortions" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Distortions</p>
                  <p className="text-gray-600 text-sm">Name the thinking trap</p>
                </Link>
                <Link href="/pages/cbt/thoughts-on-trial" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thoughts on Trial</p>
                  <p className="text-gray-600 text-sm">Put the thought in "court"</p>
                </Link>
                <Link href="/pages/cbt/thought-record" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thought Record</p>
                  <p className="text-gray-600 text-sm">Full CBT worksheet</p>
                </Link>
                <Link href="/pages/cbt/core-beliefs" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Core Beliefs</p>
                  <p className="text-gray-600 text-sm">When the same automatic thoughts repeat</p>
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
