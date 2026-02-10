'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function LevelsOfCognitionPage() {
  const router = useRouter();
  const [layersData, setLayersData] = useState({
    situation: '',
    nat1: '',
    nat2: '',
    nat3: '',
    conditionalIf: '',
    conditionalThen: '',
    rigidRule: '',
    coreBelief: '',
    compensatory: '',
    natReframe: '',
    ruleSoftener: '',
    experiment: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updateField = ({ field, value }: { field: string; value: string }) => {
    setLayersData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Levels of Cognition (CBT)
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            From quick thoughts to deeper beliefs that shape how you see life
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                CBT often describes thoughts on layers—from quick, in-the-moment thoughts to deeper beliefs that shape how you interpret life. Your worksheet breaks this into four levels: Negative Automatic Thoughts (NATs), Conditional Assumptions, Rigid Rules, and Core Beliefs. These layers influence how we view ourselves, the world, and the future—and can drive distressing emotions and unhelpful behaviors.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-6">
                <p className="text-gray-700">
                  CBT also commonly maps these layers as <strong>automatic thoughts → intermediate beliefs (rules/assumptions) → core beliefs (schemas)</strong>, with coping/behavior patterns that keep the loop going.
                </p>
              </div>

              <div className="flex justify-center">
                <a
                  href="/assets/Worksheets/levels-of-cognition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
                >
                  📄 Download Layers of Cognition Worksheet (PDF)
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4">
                <li><a href="#four-layers" className="hover:underline">The four layers (quick definitions)</a></li>
                <li><a href="#how-interact" className="hover:underline">How the layers interact</a></li>
                <li><a href="#examples" className="hover:underline">Examples (what each layer sounds like)</a></li>
                <li><a href="#find-layers" className="hover:underline">Find your layers (Downward Arrow)</a></li>
                <li><a href="#change-layers" className="hover:underline">Change your layers (what to work on first)</a></li>
                <li><a href="#compensatory" className="hover:underline">Compensatory strategies</a></li>
                <li><a href="#practice" className="hover:underline">Your Layers of Cognition Practice</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="four-layers">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) The four layers (quick definitions)
              </h2>

              <p className="text-gray-700 mb-4">
                Your PDF outlines four levels of negative cognitions:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-2 border-yellow-300">
                  <p className="text-gray-800 font-bold mb-2">A) Negative Automatic Thoughts (NATs)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Fast, fleeting thoughts—sometimes barely conscious—that color how you interpret situations (internal monologue).
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Examples: "I can't cope," "They don't like me," "I always mess up."
                  </p>
                  <p className="text-teal-600 text-xs mt-2">
                    (These align with CBT "automatic thoughts.")
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
                  <p className="text-gray-800 font-bold mb-2">B) Rigid Rules</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Inflexible "must/should" rules that quietly run your life (often learned early).
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Examples: "I must always work hard," "I should always be strong."
                  </p>
                  <p className="text-teal-600 text-xs mt-2">
                    (In CBT, these are commonly part of intermediate beliefs.)
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-2 border-purple-300">
                  <p className="text-gray-800 font-bold mb-2">C) Conditional Assumptions</p>
                  <p className="text-gray-700 text-sm mb-2">
                    "If… then…" reflexes that predict what will happen and what it means.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Examples: "If I'm criticized, then I'm no good," "If I'm not in control, something bad will happen."
                  </p>
                  <p className="text-teal-600 text-xs mt-2">
                    (Also commonly described as intermediate beliefs.)
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-2 border-red-300">
                  <p className="text-gray-800 font-bold mb-2">D) Negative Core Beliefs</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Deep, global, absolutist beliefs about self, others, and the world. Your worksheet groups them into themes like helplessness, unlovability, worthlessness.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Examples: "I'm defective," "Others can't be trusted," "The world is dangerous."
                  </p>
                  <p className="text-teal-600 text-xs mt-2">
                    (CBT often calls these "underlying beliefs/schemas.")
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="how-interact">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) How the layers interact (why the same thoughts repeat)
              </h2>

              <div className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 mb-4">
                <p className="text-gray-700 mb-3">
                  The deeper layers (core beliefs and intermediate beliefs) tend to produce similar automatic thoughts across many situations—so the same emotional/behavioral loop can repeat.
                </p>
                
                <div className="bg-white p-4 rounded border border-purple-300">
                  <p className="text-gray-800 font-semibold mb-2">CBT case conceptualization maps:</p>
                  <p className="text-gray-700 text-sm">
                    core belief → intermediate beliefs (rules/assumptions) → automatic thoughts → emotions → behaviors, plus coping strategies that keep patterns going
                  </p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded border-2 border-yellow-300">
                <p className="text-gray-700">
                  <strong>This is why</strong> challenging only the top-layer thought sometimes helps quickly—but deeper change often comes from updating the beliefs underneath.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="examples">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Examples (what each layer sounds like)
              </h2>

              <p className="text-gray-700 mb-4">
                Here's one "stack" using your worksheet language:
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-5 rounded-lg border border-orange-200">
                <p className="text-gray-800 font-bold mb-4">Situation: Friend doesn't text back.</p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border border-yellow-300">
                    <p className="text-gray-700">
                      <strong className="text-yellow-700">NAT:</strong> "They're ignoring me."
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded border border-purple-300">
                    <p className="text-gray-700">
                      <strong className="text-purple-700">Conditional assumption:</strong> "If someone doesn't reply fast, it means I did something wrong."
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded border border-blue-300">
                    <p className="text-gray-700">
                      <strong className="text-blue-700">Rigid rule:</strong> "I should never be needy."
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded border border-red-300">
                    <p className="text-gray-700">
                      <strong className="text-red-700">Core belief:</strong> "I'm unlovable."
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-4 italic">
                This is also why two people can face the same event but feel totally different: different belief layers create different interpretations.
              </p>
            </div>

            {/* Section 4 */}
            <div id="find-layers">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Find your layers (Downward Arrow)
              </h2>

              <p className="text-gray-700 mb-4">
                Use this when you notice a strong emotion or a repeating NAT.
              </p>

              <div className="p-5 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200">
                <div className="space-y-4">
                  <div className="p-3 bg-white rounded border border-teal-300">
                    <p className="text-gray-800 font-bold mb-2">1. Write the NAT as a quote:</p>
                    <p className="text-gray-600 text-sm">"__________________________________________"</p>
                  </div>

                  <div className="p-3 bg-white rounded border border-teal-300">
                    <p className="text-gray-800 font-bold mb-2">2. Ask 2–5 times:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>"If that's true, what does it mean about me?"</li>
                      <li>"What's the worst part about that?"</li>
                      <li>"What would that say about my future?"</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-white rounded border border-teal-300">
                    <p className="text-gray-800 font-bold mb-2">3. When you hit something global/absolute...</p>
                    <p className="text-gray-700 text-sm">
                      (e.g., "I'm worthless," "People can't be trusted"), that's usually a core belief.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-3 italic">
                Downward Arrow is a common CBT method for linking automatic thoughts to deeper beliefs.
              </p>
            </div>

            {/* Section 5 */}
            <div id="change-layers">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Change your layers (what to work on first)
              </h2>

              <p className="text-gray-700 mb-4">
                A practical CBT approach:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">Start at NATs (fast relief)</p>
                  <p className="text-gray-700 text-sm">
                    Use <Link href="/pages/cbt/thought-record" className="text-teal-600 hover:text-teal-800 font-semibold">Thought Records</Link>, Socratic Questioning, <Link href="/pages/cbt/thoughts-on-trial" className="text-teal-600 hover:text-teal-800 font-semibold">Thoughts on Trial</Link>.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-800 font-bold mb-2">Work on rules/assumptions (medium depth)</p>
                  <p className="text-gray-700 text-sm">
                    Soften "must/should" and "if/then" predictions; test them with <Link href="/pages/cbt/exposure-and-experiments" className="text-teal-600 hover:text-teal-800 font-semibold">behavioral experiments</Link>.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-800 font-bold mb-2">Update core beliefs (deep change)</p>
                  <p className="text-gray-700 text-sm">
                    Build a believable replacement belief + collect evidence + do repeated experiments that contradict the old belief.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="compensatory">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Compensatory strategies (safety behaviors / coping moves)
              </h2>

              <p className="text-gray-700 mb-4">
                Your worksheet adds compensatory strategies: behavior patterns that show up when negative cognitions are activated—often to reduce anxiety or prevent feared outcomes, but they can keep beliefs from being tested.
              </p>

              <div className="p-5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200 mb-4">
                <p className="text-gray-800 font-bold mb-3">Examples from your worksheet:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  <p className="text-gray-700 text-sm">• Worrying</p>
                  <p className="text-gray-700 text-sm">• Reassurance-seeking</p>
                  <p className="text-gray-700 text-sm">• Checking</p>
                  <p className="text-gray-700 text-sm">• Procrastinating/avoiding</p>
                  <p className="text-gray-700 text-sm">• Perfectionism/over-preparing</p>
                  <p className="text-gray-700 text-sm">• Blaming/attacking</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700">
                  <strong>In CBT language,</strong> these often function like safety behaviors: they bring short-term relief but reduce opportunities to learn "I can cope" or "the feared outcome doesn't happen."
                </p>
              </div>
            </div>

            {/* Section 7 - Interactive Practice */}
            <div id="practice">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Your Layers of Cognition Practice (write it out)
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-400 space-y-6">
                {/* Situation */}
                <div>
                  <label htmlFor="situation" className="block text-gray-800 font-bold mb-2">
                    Situation (facts only):
                  </label>
                  <textarea
                    id="situation"
                    value={layersData.situation}
                    onChange={(e) => updateField({ field: 'situation', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={3}
                    placeholder="What happened? (observable facts)"
                  />
                </div>

                {/* Layer 1 - NATs */}
                <div className="p-5 bg-white rounded-lg border border-yellow-300">
                  <p className="text-gray-800 font-bold mb-4">Layer 1 — NATs (what my mind said)</p>
                  
                  <div className="space-y-3">
                    <div>
                      <textarea
                        value={layersData.nat1}
                        onChange={(e) => updateField({ field: 'nat1', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        rows={2}
                        placeholder="First automatic thought..."
                      />
                    </div>

                    <div>
                      <p className="text-gray-700 font-semibold mb-2 text-sm">More NATs (optional):</p>
                      <div className="space-y-2">
                        <textarea
                          value={layersData.nat2}
                          onChange={(e) => updateField({ field: 'nat2', value: e.target.value })}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          rows={1}
                          placeholder="Additional thought..."
                        />
                        <textarea
                          value={layersData.nat3}
                          onChange={(e) => updateField({ field: 'nat3', value: e.target.value })}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          rows={1}
                          placeholder="Additional thought..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 2 - Conditional Assumptions */}
                <div className="p-5 bg-white rounded-lg border border-purple-300">
                  <p className="text-gray-800 font-bold mb-4">Layer 2 — Conditional assumptions (If… then…)</p>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="conditional-if" className="block text-gray-700 font-semibold mb-2 text-sm">
                        If:
                      </label>
                      <textarea
                        id="conditional-if"
                        value={layersData.conditionalIf}
                        onChange={(e) => updateField({ field: 'conditionalIf', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={2}
                        placeholder="If..."
                      />
                    </div>

                    <div>
                      <label htmlFor="conditional-then" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Then:
                      </label>
                      <textarea
                        id="conditional-then"
                        value={layersData.conditionalThen}
                        onChange={(e) => updateField({ field: 'conditionalThen', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={2}
                        placeholder="Then..."
                      />
                    </div>
                  </div>
                </div>

                {/* Layer 3 - Rigid Rules */}
                <div className="p-5 bg-white rounded-lg border border-blue-300">
                  <p className="text-gray-800 font-bold mb-4">Layer 3 — Rigid rules (must/should)</p>
                  
                  <div>
                    <label htmlFor="rigid-rule" className="block text-gray-700 font-semibold mb-2">
                      I must / should:
                    </label>
                    <textarea
                      id="rigid-rule"
                      value={layersData.rigidRule}
                      onChange={(e) => updateField({ field: 'rigidRule', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={2}
                      placeholder="What rigid rule is running?"
                    />
                  </div>
                </div>

                {/* Layer 4 - Core Belief */}
                <div className="p-5 bg-white rounded-lg border border-red-300">
                  <p className="text-gray-800 font-bold mb-4">Layer 4 — Core belief (global + absolute)</p>
                  
                  <div>
                    <label htmlFor="core-belief" className="block text-gray-700 font-semibold mb-2">
                      About me / others / the world:
                    </label>
                    <textarea
                      id="core-belief"
                      value={layersData.coreBelief}
                      onChange={(e) => updateField({ field: 'coreBelief', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      rows={2}
                      placeholder="Deep, global belief..."
                    />
                  </div>
                </div>

                {/* Compensatory Strategies */}
                <div className="p-5 bg-white rounded-lg border border-orange-300">
                  <p className="text-gray-800 font-bold mb-4">Compensatory strategies (what I do when this gets activated)</p>
                  
                  <div>
                    <label htmlFor="compensatory" className="block text-gray-700 font-semibold mb-2 text-sm">
                      (avoid / check / reassure / over-prepare / people-please / attack / withdraw / worry)
                    </label>
                    <textarea
                      id="compensatory"
                      value={layersData.compensatory}
                      onChange={(e) => updateField({ field: 'compensatory', value: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      rows={3}
                      placeholder="What do I do when these beliefs are triggered?"
                    />
                  </div>
                </div>

                {/* One Small Shift */}
                <div className="p-5 bg-white rounded-lg border border-green-300">
                  <p className="text-gray-800 font-bold mb-4">One small shift (choose one)</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="nat-reframe" className="block text-gray-700 font-semibold mb-2 text-sm">
                        NAT reframe (balanced thought):
                      </label>
                      <textarea
                        id="nat-reframe"
                        value={layersData.natReframe}
                        onChange={(e) => updateField({ field: 'natReframe', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        rows={2}
                        placeholder="A more balanced version of the automatic thought..."
                      />
                    </div>

                    <div>
                      <label htmlFor="rule-softener" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Rule softener (less rigid):
                      </label>
                      <input
                        id="rule-softener"
                        type="text"
                        value={layersData.ruleSoftener}
                        onChange={(e) => updateField({ field: 'ruleSoftener', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder='"It would be nice to ___, but I don\'t have to ___."'
                      />
                    </div>

                    <div>
                      <label htmlFor="experiment" className="block text-gray-700 font-semibold mb-2 text-sm">
                        Experiment (test the assumption):
                      </label>
                      <textarea
                        id="experiment"
                        value={layersData.experiment}
                        onChange={(e) => updateField({ field: 'experiment', value: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        rows={2}
                        placeholder='"I will ___ and observe what actually happens."'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/automatic-thoughts" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Automatic Thoughts</p>
                  <p className="text-gray-600 text-sm">Catch NATs quickly</p>
                </Link>
                <Link href="/pages/cbt/cognitive-distortions" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Distortions</p>
                  <p className="text-gray-600 text-sm">Name the thinking trap</p>
                </Link>
                <Link href="/pages/cbt/cognitive-restructuring" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Restructuring</p>
                  <p className="text-gray-600 text-sm">Step-by-step reframing</p>
                </Link>
                <Link href="/pages/cbt/core-beliefs" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Core Beliefs</p>
                  <p className="text-gray-600 text-sm">Deep layer work</p>
                </Link>
                <Link href="/pages/cbt/exposure-and-experiments" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Graded Exposure & Behavioral Experiments</p>
                  <p className="text-gray-600 text-sm">Test predictions, reduce safety behaviors</p>
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
