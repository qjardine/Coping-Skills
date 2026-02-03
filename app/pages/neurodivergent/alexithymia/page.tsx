'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function AlexithymiaPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Alexithymia
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            (Neurodivergent-friendly guide to identifying feelings)
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Alexithymia is a difference in emotional processing where you may struggle to identify, describe, and express emotions—especially with words. It's a common experience in autistic and other neurodivergent communities. Autistica describes it as difficulty understanding and describing your own emotions, noting that around half of autistic people may experience these challenges.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 mb-3 font-semibold">If you experience alexithymia, you might relate to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>"I feel something but I can't name it."</li>
                  <li>defaulting to vague answers like "I'm fine" or "I don't know."</li>
                  <li>confusing emotions with body states (hungry, tired, overstimulated, sick)</li>
                  <li>not recognizing facial expressions well (in yourself or others), or finding that matching expressions to feelings takes effort</li>
                </ul>
              </div>

              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200 font-medium">
                Alexithymia doesn't mean you "don't have emotions." It usually means the labeling system is harder to access.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What alexithymia can look like
              </h2>

              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <p className="text-gray-700 mb-3 font-semibold">Common experiences include:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Trouble finding the right words for what you feel (or feeling "blank")</li>
                  <li>Difficulty telling the difference between emotions (anger vs fear vs shame)</li>
                  <li>Difficulty separating emotions from bodily sensations (anxiety vs nausea vs sensory overload)</li>
                  <li>Feeling emotions "late" (you only realize you were upset after the fact)</li>
                  <li>Feeling emotions as physical signals first (tight chest, buzzing limbs, pressure in head)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  In research, alexithymia is commonly described as involving difficulty identifying feelings, difficulty describing feelings, and a tendency toward externally oriented thinking (focusing away from emotional experience).
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Why it's common in neurodivergence
              </h2>
              
              <p className="text-gray-700 mb-4">
                Alexithymia frequently co-occurs with autism, with systematic reviews reporting rates up to ~50% in autistic samples (varies by study and measure).
              </p>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 mb-3">
                  A helpful way to understand the "why" is <strong>interoception</strong>—your ability to notice internal body signals (hunger, thirst, heartbeat, tension) that often act as early clues for emotions. Research has explored alexithymia as related to interoceptive differences.
                </p>
                <p className="text-gray-700 font-medium">
                  Neurodivergent translation: if your body signals are fuzzy, emotion-labeling can be fuzzy too.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) The goal isn't perfect labeling
              </h2>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-gray-700 mb-3 text-lg font-semibold">
                  You do not need to name the perfect emotion word.
                </p>
                <p className="text-gray-700 mb-3">
                  A more realistic goal is:
                </p>
                <p className="text-gray-700 text-center text-xl font-bold mb-3">
                  Notice → Describe → Choose support.
                </p>
                <p className="text-gray-700">
                  Even "I'm activated" or "I'm overloaded" is enough to choose an effective next step.
                </p>
                <p className="text-gray-700 mt-3">
                  See also: <Link href="/pages/neurodivergent/emotion-regulation" className="text-blue-600 hover:text-blue-800 underline">The Role of Emotions</Link> (emotions as information + motivation)
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Use alternative descriptions
              </h2>
              <p className="text-gray-700 mb-4">
                When the label won't come, describe what you do know.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">A) Describe body sensations</h3>
                  <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>"My chest feels tight and my shoulders are up." <span className="italic">(often anxiety/stress)</span></li>
                    <li>"My jaw is clenched and I feel hot." <span className="italic">(often anger/frustration)</span></li>
                    <li>"My stomach feels sore and my hands won't settle." <span className="italic">(often anxiety/overwhelm)</span></li>
                    <li>"My whole body feels heavy and slow." <span className="italic">(often sadness/shutdown)</span></li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">B) Describe urges (action impulses)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>"I want to hide / leave / escape."</li>
                    <li>"I want to throw something."</li>
                    <li>"I want to cry but I can't."</li>
                    <li>"I want to fix everything right now."</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">C) Describe behaviors</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>"I'm doom-scrolling."</li>
                    <li>"I can't respond to messages."</li>
                    <li>"I keep re-reading the same sentence."</li>
                    <li>"I can't stop pacing."</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-blue-50 rounded border border-blue-200 font-medium">
                Shortcut: If you can name body + urge, you can build a care response even without the "emotion word."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Use an emotion wheel
              </h2>
              
              <p className="text-gray-700 mb-4">
                Emotion wheels are visual tools that help you go from broad categories (mad/sad/scared) to more specific labels (irritated, disappointed, anxious, ashamed). They're often recommended for building emotional vocabulary, especially when identifying feelings is difficult.
              </p>

              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">How to use it (2 minutes):</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Start at the center:</strong> pick the closest "big bucket" (anger / fear / sadness / joy / disgust / surprise).</li>
                  <li><strong>Move outward:</strong> pick one or two words that fit best.</li>
                  <li><strong>If nothing fits,</strong> pick: "overwhelmed" or "activated" and move to support.</li>
                </ol>
                <p className="text-gray-700 mt-4 font-medium">
                  Neurodivergent tip: don't force accuracy. Choose the "closest enough" label and move on.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Use music, lyrics, and media as emotional language
              </h2>
              
              <p className="text-gray-700 mb-4 font-medium">
                If words are hard, borrow words.
              </p>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Ways to use music:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Choose a song that matches your internal state and say: "It's like this."</li>
                  <li>Make playlists labeled by sensation/need (not emotion):
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                      <li>"tight chest"</li>
                      <li>"angry energy"</li>
                      <li>"shutdown"</li>
                      <li>"soft comfort"</li>
                    </ul>
                  </li>
                  <li>Use lyrics as a script for what you can't say yet.</li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  This can function as both communication and self-discovery.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) A neurodivergent self check-in for alexithymia
              </h2>
              
              <p className="text-gray-700 mb-4">
                Use this when someone asks, "How are you?" and you truly don't know.
              </p>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">30-second check-in</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Body:</strong> hungry/thirsty/tired/pain/bathroom?</li>
                  <li><strong>Sensory:</strong> too loud/bright/itchy/hot/crowded?</li>
                  <li><strong>Energy:</strong> 0–10</li>
                  <li><strong>Stress:</strong> 0–10</li>
                  <li><strong>Urge:</strong> hide / fix / cry / lash out / sleep / talk / stim</li>
                </ul>

                <p className="text-gray-700 mt-4 mb-2 font-semibold">Then answer with a translation:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>"I'm not sure emotionally, but my stress is 8/10 and I'm overloaded."</li>
                  <li>"I'm low energy and sensory-sensitive; I need quiet."</li>
                  <li>"I feel activated; I need a break."</li>
                </ul>

                <p className="text-gray-700 mt-4">
                  See also: <Link href="/pages/neurodivergent/mindfulness-guide" className="text-blue-600 hover:text-blue-800 underline">Neurodivergent Mindfulness</Link> (observe/describe without judgment)
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Communication scripts for when you can't name it
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">With friends/partners</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>"I can't label what I'm feeling yet. I just know I'm activated."</li>
                    <li>"I need quiet support, not questions."</li>
                    <li>"Can you ask yes/no questions for a bit?"</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">At work/school</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>"I'm overloaded and need a short break. I'll return at ___."</li>
                    <li>"I'm having trouble processing. Please send it in writing."</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">With clinicians/support staff</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>"My feelings don't show up as words. I notice them as body sensations first."</li>
                    <li>"Can we use an emotion wheel or a list of options?"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Burnout's effect on alexithymia
              </h2>

              <p className="text-gray-700 mb-4">
                During neurodivergent burnout, emotional labeling often gets harder because:
              </p>

              <div className="p-4 bg-red-50 rounded border border-red-200 mb-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>interoceptive signals become noisier or blunted</li>
                  <li>sensory overload rises</li>
                  <li>executive function drops</li>
                  <li>you may default to shutdown/flatness</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-gray-700 mb-3">So it can feel like:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>"I don't feel anything"</li>
                  <li>"I only feel bad"</li>
                  <li>"I can't find words for any of it"</li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  That doesn't mean your emotions are gone. It often means your system is in conservation mode.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                10) Reintroducing emotional awareness when it feels impossible
              </h2>

              <p className="text-gray-700 mb-4 text-lg font-medium">
                Think "tiny + sensory + repeat."
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Step 1: Start with safety and regulation</h3>
                  <p className="text-gray-700 mb-2">Use your fastest body-based supports:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">Sensory Safe Space</Link></li>
                    <li><Link href="/pages/neurodivergent/sensory-soothing" className="text-blue-600 hover:text-blue-800 underline">Sensory Self-Soothing</Link></li>
                    <li><Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">Mammalian Diving Reflex</Link> / <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP Temperature</Link></li>
                    <li>gentle movement or stimming (see <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:text-blue-800 underline">Stims & Special Interests</Link>)</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Step 2: Use "one-word labeling"</h3>
                  <p className="text-gray-700 mb-2">Pick one:</p>
                  <p className="text-gray-700 ml-4 font-medium">
                    activated / heavy / foggy / buzzy / tender / raw / flat
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Step 3: Add one supportive action</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>water</li>
                    <li>food</li>
                    <li>pressure (blanket)</li>
                    <li>lights down</li>
                    <li>headphones</li>
                    <li>text one safe person</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Step 4: Debrief later, not during the wave</h3>
                  <p className="text-gray-700 mb-2">After you're calmer:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>use an emotion wheel</li>
                    <li>journal 3 lines: prompt → body → urge</li>
                    <li>connect it to <Link href="/pages/interpersonal-skills/values" className="text-blue-600 hover:text-blue-800 underline">values</Link>/needs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                11) Use this with...
              </h2>
              <p className="text-gray-700 mb-4">
                Alexithymia support works best when paired with other skills:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/emotion-regulation" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">The Role of Emotions</p>
                  <p className="text-gray-600 text-sm">emotions as information + motivation</p>
                </Link>
                <Link href="/pages/neurodivergent/mindfulness-guide" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Neurodivergent Mindfulness</p>
                  <p className="text-gray-600 text-sm">observe/describe without judgment</p>
                </Link>
                <Link href="/pages/mindfulness/rain" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">RAIN</p>
                  <p className="text-gray-600 text-sm">recognize/allow/investigate/nurture</p>
                </Link>
                <Link href="/pages/neurodivergent/sensory-soothing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Self-Soothing</p>
                  <p className="text-gray-600 text-sm">five senses regulation</p>
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Safe Space</p>
                  <p className="text-gray-600 text-sm">reduce sensory load</p>
                </Link>
                <Link href="/pages/neurodivergent/meltdowns" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Managing Meltdowns</p>
                  <p className="text-gray-600 text-sm">if you're in rumble stage</p>
                </Link>
                <Link href="/pages/crisis/plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Crisis Plan</p>
                  <p className="text-gray-600 text-sm">if safety is at risk</p>
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Personal Care Plan</p>
                  <p className="text-gray-600 text-sm">daily supports & accommodations</p>
                </Link>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Reminder</h3>
              <p className="text-gray-700 text-lg font-medium">
                You don't need perfect emotion words. You need: <strong>body → needs → support</strong>. That's enough.
              </p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">
                  Overload Skills Menu
                </Link>
                <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Affirmations
                </Link>
                <Link href="/pages/interpersonal-skills/values" className="text-blue-600 hover:text-blue-800 underline">
                  Find Your Values
                </Link>
                <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">
                  Check the Facts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
