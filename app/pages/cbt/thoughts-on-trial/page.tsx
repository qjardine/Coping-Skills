'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ThoughtsOnTrialPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    thought: '',
    defenseEvidence: ['', '', ''],
    prosecutionEvidence: ['', '', ''],
    verdict: '',
    balancedThought: '',
    emotionBefore: '',
    emotionAfter: '',
    action: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updateField = ({ field, value }: { field: string; value: string }) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateArrayField = ({ field, index, value }: { field: string; index: number; value: string }) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof formData] as string[]).map((item, i) => i === index ? value : item)
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Thoughts on Trial
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Put your stressful thought in court and test it with evidence
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Thoughts on Trial is a CBT cognitive restructuring exercise where you put a stressful thought "in court." You'll act as the Defense, Prosecution, and Judge to decide whether the thought is accurate, fair, and complete—or if a more balanced thought fits the facts better.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 font-semibold mb-2">This is especially helpful for:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>mind-reading ("They hate me")</li>
                  <li>catastrophizing ("This will ruin everything")</li>
                  <li>shame labels ("I'm a failure")</li>
                  <li>emotional reasoning ("I feel guilty so I must be guilty")</li>
                </ul>
              </div>

              <div className="flex justify-center">
                <a
                  href="/assets/Worksheets/thought-trial.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
                >
                  📄 Download Worksheet (PDF)
                </a>
              </div>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) When to use this
              </h2>
              
              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <p className="text-gray-700 mb-2 font-semibold">Use Thoughts on Trial when:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Your thought feels 100% true</li>
                  <li>You keep replaying a moment</li>
                  <li>You're stuck between "I'm fine" and "I'm doomed"</li>
                  <li>You want a structured way to challenge a thought without arguing in circles</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Rules of evidence (CBT court rules)
              </h2>
              
              <p className="text-gray-700 mb-4">
                In this exercise, evidence must be verifiable facts—not guesses, interpretations, or opinions.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">✓ Allowed evidence (facts):</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                    <li>Direct quotes ("They said: '…'")</li>
                    <li>Observable actions (missed appointment, didn't reply for 3 days)</li>
                    <li>Dates/times, numbers, written messages</li>
                    <li>What you did (sent 2 texts, asked for help)</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <p className="text-gray-800 font-bold mb-2">✗ Not allowed (not facts):</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                    <li>"They meant…"</li>
                    <li>"Everyone thinks…"</li>
                    <li>"I just know…"</li>
                    <li>Predictions ("This will happen")</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-3 italic text-sm">
                If something is uncertain, label it as an assumption and keep it out of the evidence list.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Step-by-step: run a thought trial
              </h2>

              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-700">
                    <strong>Step 1: Name the Thought</strong> (the "charge") - Write the thought as a single sentence, like a headline.
                  </p>
                </div>

                <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-700">
                    <strong>Step 2: Defense</strong> (evidence for the thought) - List only facts that support it.
                  </p>
                </div>

                <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-700">
                    <strong>Step 3: Prosecution</strong> (evidence against the thought) - List only facts that weaken it or point to another explanation.
                  </p>
                </div>

                <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-gray-700">
                    <strong>Step 4: Judge</strong> (the verdict) - Decide: Is the thought accurate and fair? Is it missing context? Are there other thoughts that better explain the facts?
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                Your verdict should produce a balanced thought you can actually believe (not forced positivity).
              </p>
            </div>

            {/* Section 4 - Interactive Worksheet */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Your Thought Trial (write it out)
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-400 space-y-5">
                {/* Thought */}
                <div>
                  <label htmlFor="thought" className="block text-gray-800 font-bold mb-2">
                    Thought (the charge):
                  </label>
                  <textarea
                    id="thought"
                    value={formData.thought}
                    onChange={(e) => updateField({ field: 'thought', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={2}
                    placeholder="Write your stressful thought here..."
                  />
                </div>

                {/* Defense Evidence */}
                <div>
                  <p className="text-gray-800 font-bold mb-3">Defense — Evidence FOR the thought (facts only)</p>
                  {formData.defenseEvidence.map((evidence, index) => (
                    <div key={index} className="mb-3">
                      <label htmlFor={`defense-${index}`} className="block text-gray-700 mb-1">
                        {index + 1}.
                      </label>
                      <textarea
                        id={`defense-${index}`}
                        value={evidence}
                        onChange={(e) => updateArrayField({ field: 'defenseEvidence', index, value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="Enter factual evidence..."
                      />
                    </div>
                  ))}
                </div>

                {/* Prosecution Evidence */}
                <div>
                  <p className="text-gray-800 font-bold mb-3">Prosecution — Evidence AGAINST the thought (facts only)</p>
                  {formData.prosecutionEvidence.map((evidence, index) => (
                    <div key={index} className="mb-3">
                      <label htmlFor={`prosecution-${index}`} className="block text-gray-700 mb-1">
                        {index + 1}.
                      </label>
                      <textarea
                        id={`prosecution-${index}`}
                        value={evidence}
                        onChange={(e) => updateArrayField({ field: 'prosecutionEvidence', index, value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows={2}
                        placeholder="Enter factual evidence..."
                      />
                    </div>
                  ))}
                </div>

                {/* Judge's Verdict */}
                <div>
                  <p className="text-gray-800 font-bold mb-3">Judge's verdict</p>
                  
                  <p className="text-gray-700 mb-2">Is the original thought accurate and fair?</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {['Mostly yes', 'Partly', 'Mostly no', 'Not at all'].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="verdict"
                          value={option}
                          checked={formData.verdict === option}
                          onChange={(e) => updateField({ field: 'verdict', value: e.target.value })}
                          className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>

                  <label htmlFor="balanced-thought" className="block text-gray-800 font-bold mb-2">
                    A more balanced thought that fits the facts:
                  </label>
                  <textarea
                    id="balanced-thought"
                    value={formData.balancedThought}
                    onChange={(e) => updateField({ field: 'balancedThought', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={3}
                    placeholder="Write a balanced, believable alternative thought..."
                  />
                </div>

                {/* Emotion Change */}
                <div>
                  <p className="text-gray-700 font-semibold mb-2">What feeling changes when I believe the balanced thought? (0–100):</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label htmlFor="emotion-before" className="block text-gray-700 mb-1 text-sm">Before:</label>
                      <input
                        id="emotion-before"
                        type="number"
                        min="0"
                        max="100"
                        value={formData.emotionBefore}
                        onChange={(e) => updateField({ field: 'emotionBefore', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="0-100"
                      />
                    </div>
                    <span className="text-gray-500 text-2xl">→</span>
                    <div className="flex-1">
                      <label htmlFor="emotion-after" className="block text-gray-700 mb-1 text-sm">After:</label>
                      <input
                        id="emotion-after"
                        type="number"
                        min="0"
                        max="100"
                        value={formData.emotionAfter}
                        onChange={(e) => updateField({ field: 'emotionAfter', value: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="0-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Tiny Action */}
                <div>
                  <p className="text-gray-700 font-semibold mb-2">Tiny next action (1 step, 5–10 minutes max):</p>
                  <div className="space-y-2 mb-3">
                    {[
                      { value: 'clarify', label: 'Clarify (ask a question)' },
                      { value: 'repair', label: 'Repair (apologize / re-do one part)' },
                      { value: 'cope', label: 'Cope (grounding / break / food / water)' },
                      { value: 'act', label: 'Act (do the next small step)' },
                      { value: 'let-be', label: 'Let it be (practice uncertainty, don\'t check/reassure)' },
                    ].map(({ value, label }) => (
                      <label key={value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-teal-600 focus:ring-teal-500 rounded"
                        />
                        <span className="text-gray-700">{label}</span>
                      </label>
                    ))}
                  </div>

                  <label htmlFor="action" className="block text-gray-700 mb-2">My action:</label>
                  <textarea
                    id="action"
                    value={formData.action}
                    onChange={(e) => updateField({ field: 'action', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={2}
                    placeholder="Describe your specific next step..."
                  />
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) If you get stuck: evidence prompts
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">Defense prompts (facts that support):</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>What exactly happened that triggered this?</li>
                    <li>What was said/done (wording matters)?</li>
                    <li>What pattern have you observed (with dates/examples)?</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">Prosecution prompts (facts that challenge):</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>What facts point to a neutral explanation?</li>
                    <li>What facts show you've handled similar things before?</li>
                    <li>What facts show support/effort/repair is possible?</li>
                    <li>What would a video camera show (no mind-reading)?</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200 mt-4">
                <p className="text-gray-800 font-bold mb-2">Alternative explanations (not evidence—use after evidence):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>They're busy / stressed / distracted</li>
                  <li>Miscommunication / tone mismatch</li>
                  <li>One moment ≠ a whole relationship / identity / future</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Next steps (what to do with the verdict)
              </h2>

              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700">
                    <strong>If your verdict is "partly true":</strong> make a specific plan (one repair step).
                  </p>
                </div>

                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700">
                    <strong>If your verdict is "not proven":</strong> practice uncertainty tolerance (don't check, don't rehearse, do one grounding action).
                  </p>
                </div>

                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700">
                    <strong>If your verdict is "mostly false":</strong> write the balanced thought on a coping card and repeat it when the original thought returns.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/cognitive-distortions" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Distortions</p>
                  <p className="text-gray-600 text-sm">Spot the trap fast</p>
                </Link>
                <Link href="/pages/cbt/thought-record" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thought Record</p>
                  <p className="text-gray-600 text-sm">Full structured reframe</p>
                </Link>
                <Link href="/pages/cbt/core-beliefs" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Core Beliefs</p>
                  <p className="text-gray-600 text-sm">When the same charge keeps coming back</p>
                </Link>
                <Link href="/pages/cbt/cognitive-restructuring" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Restructuring</p>
                  <p className="text-gray-600 text-sm">Challenge and reframe</p>
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
