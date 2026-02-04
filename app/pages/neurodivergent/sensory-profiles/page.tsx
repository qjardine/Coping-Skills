'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { SensoryWheel } from '@/components/SensoryWheel';

export default function SensoryProfilesPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Sensory Profile & Needs
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            (Neurodivergent-friendly guide + worksheet)
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Determine Your Sensory Profile
              </h2>

              <p className="text-gray-700 mb-4">
                The worksheet ("My Sensory Profile") is a simple way to map your sensitivities and needs across the senses, then turn that map into real accommodations.
              </p>

              <p className="text-gray-700 mb-4">
                It has two circle charts (one for hypersensitivity, one for hyposensitivity) plus boxes where you write your real-life examples for each sense.
              </p>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 text-sm italic mb-2">
                  <strong>Worksheet Image:</strong> "My Sensory Profile" worksheet with two circular rating charts (hypersensitivity and hyposensitivity) across senses (sound, visual, smell, taste, touch, interoception, vestibular, proprioception) using a 1–5 scale, plus labeled boxes to write examples and needs for each sense.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => router.push('/assets/Worksheets/sensoryprofile.jpeg')}>
                  Download Worksheet
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What you're rating
              </h2>

              <p className="text-gray-700 mb-4">
                The worksheet asks you to rate how much each sensory area affects your life, using this scale:
              </p>

              <div className="p-4 bg-green-50 rounded border border-green-200">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>1</strong> — no impact on my quality of life</li>
                  <li><strong>2</strong> — occasionally but minimal impact</li>
                  <li><strong>3</strong> — sometimes impacts my quality of life</li>
                  <li><strong>4</strong> — regularly interferes</li>
                  <li><strong>5</strong> — uses up all my spoons</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200 mt-4">
                <p className="text-gray-700 mb-2 font-semibold">You'll do this twice:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Hypersensitivity chart</strong> = "too much / too intense / overload"</li>
                  <li><strong>Hyposensitivity chart</strong> = "not enough / I seek more input"</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Fill the two circle charts
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">A) Hypersensitivity (over-responsive)</h3>
                  <p className="text-gray-700 mb-3">
                    For each sense, ask: <em>"When this input is present, does it overwhelm me, hurt, distract me, or drain me?"</em>
                  </p>
                  <p className="text-gray-700 mb-3 font-medium">
                    Then choose 1–5 and shade that wedge.
                  </p>

                  <p className="text-gray-700 mb-2 font-semibold">Examples of "hyper" experiences:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>sound:</strong> background noise overwhelms, sudden sounds startle</li>
                    <li><strong>visual:</strong> lights too bright, clutter is exhausting</li>
                    <li><strong>touch:</strong> tags/seams hurt, wet textures are awful</li>
                    <li><strong>smell:</strong> perfume causes nausea/headache</li>
                    <li><strong>taste:</strong> textures are distressing, strong flavors overwhelm</li>
                    <li><strong>vestibular:</strong> motion sickness, avoids swings/spinning</li>
                    <li><strong>proprioception:</strong> fine-motor tasks feel hard, need to stay grounded</li>
                    <li><strong>interoception:</strong> internal sensations feel too intense (heartbeat/nausea)</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">B) Hyposensitivity (under-responsive)</h3>
                  <p className="text-gray-700 mb-3">
                    For each sense, ask: <em>"Do I need more input to feel regulated or even notice what's happening?"</em>
                  </p>
                  <p className="text-gray-700 mb-3 font-medium">
                    Then choose 1–5 and shade that wedge.
                  </p>

                  <p className="text-gray-700 mb-2 font-semibold">Examples of "hypo" experiences:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>sound:</strong> turns volume up, drawn to loud spaces</li>
                    <li><strong>proprioception:</strong> crashes into things, seeks tight clothing/weighted pressure</li>
                    <li><strong>vestibular:</strong> seeks rocking/swinging/movement</li>
                    <li><strong>interoception:</strong> forgets hunger/thirst/bathroom until it's urgent</li>
                    <li><strong>taste/touch:</strong> seeks strong flavors or oral/tactile input</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded border border-purple-200 mt-4">
                <p className="text-gray-700 font-medium">
                  <strong>Tip:</strong> It's normal to be both hyper and hypo in the same sense depending on your stress level, environment, or burnout.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                Interactive Sensory Profile Charts
              </h2>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-6">
                <p className="text-gray-700 text-sm">
                  <strong>Try it now:</strong> Click on any ring segment to rate that sense from 1-5. Fill out both charts to visualize your sensory profile. Your ratings will help you identify which accommodations to prioritize.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="flex justify-center">
                  <SensoryWheel type="hyper" title="Hypersensitivity (Over-Responsive)" />
                </div>
                <div className="flex justify-center">
                  <SensoryWheel type="hypo" title="Hyposensitivity (Under-Responsive)" />
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded border border-green-200 mb-6">
                <p className="text-gray-700 text-sm">
                  <strong>What the colors mean:</strong> Each of the 8 senses has its own color. The 5 rings represent intensity levels (1 = minimal impact to 5 = uses up all spoons). Click any ring to set your rating for that sense.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Use the boxes to make it real (this is the most important part)
              </h2>

              <p className="text-gray-700 mb-4">
                On the second page of the worksheet, there are boxes labeled by sense (e.g., Visual, Sound, Smell, Taste, Touch, Proprioception, Vestibular, Interoception). For each one, write:
              </p>

              <div className="p-4 bg-green-50 rounded border border-green-200 mb-4">
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Triggers:</strong> what specific inputs cause problems (or what you seek)</li>
                  <li><strong>Early warning signs:</strong> how you know you're nearing overload</li>
                  <li><strong>Helps/accommodations:</strong> what reliably improves things</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-3 font-semibold">Use prompts like:</p>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded border border-gray-300">
                  <p className="text-gray-700 font-semibold mb-2">VISUAL</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                    <li>Triggers:</li>
                    <li>Helps: (dim lights, sunglasses, reduce clutter)</li>
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 rounded border border-gray-300">
                  <p className="text-gray-700 font-semibold mb-2">SOUND</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                    <li>Triggers:</li>
                    <li>Helps: (noise-cancelling headphones, earplugs, quiet area)</li>
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 rounded border border-gray-300">
                  <p className="text-gray-700 font-semibold mb-2">INTEROCEPTION</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                    <li>What I miss: (hunger/thirst/pain)</li>
                    <li>What helps: (visual prompts, check-in scripts, scheduled breaks)</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                See also: <Link href="/pages/neurodivergent/alexithymia" className="text-blue-600 hover:text-blue-800 underline">Alexithymia</Link> (difficulty noticing internal signals)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Turn your profile into "Top 3 supports"
              </h2>

              <p className="text-gray-700 mb-4">
                After you fill the charts and boxes, circle:
              </p>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200 mb-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>your <strong>highest hyper scores</strong> (these are your overload risks)</li>
                  <li>your <strong>highest hypo scores</strong> (these are your regulation needs)</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 mb-3 font-semibold">Then write your Top 3 supports to use first:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Reduce input</strong> (for hyper)</li>
                  <li><strong>Add safe input</strong> (for hypo)</li>
                  <li><strong>Meet body needs</strong> (food/water/rest/bathroom)</li>
                </ol>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-green-50 rounded border border-green-200 font-medium">
                This becomes your personal "sensory plan" you can use in your <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">Care Plan</Link>, <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:text-blue-800 underline">Meltdown Plan</Link>, and <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> pages.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Use this with...
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                  <p className="text-gray-600 text-sm">early warning signs + recovery</p>
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Personal Care Plan</p>
                  <p className="text-gray-600 text-sm">sensory accommodations</p>
                </Link>
                <Link href="/pages/neurodivergent/tolerance-window" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Window of Tolerance</p>
                  <p className="text-gray-600 text-sm">sensory load affects window</p>
                </Link>
                <Link href="/pages/neurodivergent/overload" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Overload Skills Menu</p>
                  <p className="text-gray-600 text-sm">quick sensory regulation</p>
                </Link>
                <Link href="/pages/neurodivergent/alexithymia" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Alexithymia</p>
                  <p className="text-gray-600 text-sm">interoception differences</p>
                </Link>
                <Link href="/pages/crisis/plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Crisis Plan</p>
                  <p className="text-gray-600 text-sm">sensory supports for crisis</p>
                </Link>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Reminder</h3>
              <p className="text-gray-700 text-lg font-medium">
                Your sensory profile is <strong>information, not a diagnosis of being "too sensitive."</strong>
              </p>
              <p className="text-gray-700 mt-2">
                It's a map to help you build accommodations that <strong>fit your nervous system</strong>, not a list of things to "fix."
              </p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:text-blue-800 underline">
                  Stims & Special Interests
                </Link>
                <Link href="/pages/neurodivergent/emotion-regulation" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Emotion Regulation
                </Link>
                <Link href="/pages/neurodivergent/act-intentionally" className="text-blue-600 hover:text-blue-800 underline">
                  Act Intentionally
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
