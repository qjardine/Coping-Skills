'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SafeSpacePage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Creating a Sensory Safe Space
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                For many autistic and neurodivergent people, sensory needs are a core part of daily well-being. Sensory differences (being more or less sensitive to things like sound, light, texture, smell, movement, temperature) are common in autism and are even reflected in clinical descriptions of autism as hyper- or hypo-reactivity to sensory input.
              </p>
              <p className="text-gray-700 mb-4">
                A sensory safe space is a place you can retreat to when your nervous system is overloaded—so you can regulate, recover, and come back online. The goal isn't "perfect calm." The goal is less pain, less overwhelm, more control. Sensory overload can lead to distress and shutdown/meltdown, and environmental changes can help reduce that load.
              </p>
              <p className="text-gray-700">
                See also: <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">Overload/Shutdown</Link>, <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> (for "I'm in Red"), and <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">Care Plan</Link> (for building accommodations proactively).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) The rule of sensory safety
              </h2>
              <p className="text-gray-700 mb-3">A sensory safe space should be:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>easy to access</strong> (no complicated setup)</li>
                <li><strong>low decision</strong> (you know what to do when you enter)</li>
                <li><strong>adjustable</strong> (different needs on different days)</li>
                <li><strong>yours</strong> (built for your nervous system, not aesthetics)</li>
              </ul>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded border border-yellow-200 font-medium">
                Neurodivergent truth: if a tool "should" work but doesn't, it's not your fault. Adjust the environment until it fits.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Find your space
              </h2>
              <p className="text-gray-700 mb-3">You don't need an entire room.</p>
              <p className="text-gray-700 mb-3 font-semibold">Choose one:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>a corner of your bedroom</li>
                <li>under a loft bed</li>
                <li>a closet nook (if it feels safe)</li>
                <li>under the stairs</li>
                <li>a pop-up tent indoors</li>
                <li>a specific chair + side table as your "zone"</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Best features to look for</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>fewer interruptions</li>
                  <li>predictable lighting</li>
                  <li>ability to control sound</li>
                  <li>a "clear boundary" (tent, curtain, room divider, or even a blanket draped over a chair)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Add an "exit plan"</h3>
                <p className="text-gray-700 mb-2">If you share space, pick a second option:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>backup spot (car, stairwell, bathroom, porch, outside bench)</li>
                  <li>portable kit (see section 9)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Choose your lighting
              </h2>
              <p className="text-gray-700 mb-4">
                Many people find bright overhead or flickering lights dysregulating—so lighting is often the fastest win.
              </p>
              <p className="text-gray-700 mb-3 font-semibold">Options to test:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>warm white bulbs instead of cool white</li>
                <li>dimmable lamps instead of overhead lights</li>
                <li>fairy lights / LED strips (soft, indirect)</li>
                <li>galaxy projector / ambient light</li>
                <li>blackout curtain or sleep mask for "dark mode"</li>
                <li>sunglasses indoors when needed (allowed!)</li>
              </ul>
              <p className="text-gray-700 p-4 bg-blue-50 rounded border border-blue-200 font-medium">
                The key is control: you should be able to make it brighter or darker quickly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Sound control
              </h2>
              <p className="text-gray-700 mb-4">
                Noise is a common overload trigger, and reducing sound can make your whole body feel safer. The National Autistic Society notes that sensory differences can cause distress/discomfort and lists environment triggers like sound and light that can contribute to overload/shutdown.
              </p>
              <p className="text-gray-700 mb-3 font-semibold">Try:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>earplugs (foam or reusable)</li>
                <li>noise-canceling headphones / earmuffs</li>
                <li>white noise / brown noise / fan</li>
                <li>a predictable playlist (same tracks, same order)</li>
                <li>"quiet sign" or signal for housemates ("I'm in regulation mode")</li>
              </ul>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="text-gray-700 mb-2 font-semibold">Pro tip: Create two audio presets:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Calm:</strong> low-stimulation ambient</li>
                  <li><strong>Reset:</strong> one specific track you associate with safety</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Where to sit
              </h2>
              <p className="text-gray-700 mb-4">
                Seating is about what kind of sensory input your body needs right now.
              </p>
              <p className="text-gray-700 mb-3 font-semibold">Choose a few options so you have choice:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>bean bag + blanket (soft + enveloping)</li>
                <li>couch corner with pillows (containment)</li>
                <li>rocking chair / swing chair (rhythmic movement)</li>
                <li>exercise ball (bounce/movement)</li>
                <li>floor nest (mat + pillows)</li>
                <li>desk chair + footrest (structured support)</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <p className="text-gray-700 mb-2 font-semibold">If you're unsure, ask:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Do I need pressure (weighted, squish, tight blanket)?</li>
                  <li>Do I need movement (rock, bounce, pace)?</li>
                  <li>Do I need stillness (firm, stable, quiet)?</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) What to put in it
              </h2>
              <p className="text-gray-700 mb-4">
                This is the fun part: stock the space with items that regulate you.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="font-semibold mb-2 text-gray-800">Touch / pressure</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>weighted blanket (or heavy quilt)</li>
                    <li>soft throw blanket</li>
                    <li>hoodie / compression layer</li>
                    <li>plush pillow / body pillow</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="font-semibold mb-2 text-gray-800">Hands / fidgets</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>fidget items</li>
                    <li>putty / slime / kinetic sand</li>
                    <li>stress ball</li>
                    <li>textured fabric swatches</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="font-semibold mb-2 text-gray-800">Oral sensory</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>chewelry (if helpful)</li>
                    <li>mint / gum</li>
                    <li>crunchy snack (sensory input can be regulating)</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="font-semibold mb-2 text-gray-800">Visual</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>favorite pictures</li>
                    <li>affirmations card (see <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:text-blue-800 underline">Neurodivergent Affirmations</Link>)</li>
                    <li>simple, low-stimulation objects (lava lamp, sensory bottle)</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="font-semibold mb-2 text-gray-800">Sound</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>headphones / earplugs</li>
                    <li>sound machine / fan</li>
                    <li>soothing playlist</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="font-semibold mb-2 text-gray-800">Brain-friendly soothing</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>puzzle / simple game</li>
                    <li>comfort book/comic</li>
                    <li>"same-show" episode list</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-yellow-50 rounded border border-yellow-200 font-medium">
                Keep it contained: use a basket/bin so setup is instant.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Build it around your sensory profile
              </h2>
              <p className="text-gray-700 mb-3">Use this quick checklist (circle what applies):</p>

              <div className="bg-gray-50 p-6 rounded border border-gray-200 space-y-4">
                <div>
                  <p className="font-semibold mb-2 text-gray-800">Over-sensitive to:</p>
                  <div className="flex flex-wrap gap-3 ml-4">
                    <span className="text-gray-700">☐ sound</span>
                    <span className="text-gray-700">☐ light</span>
                    <span className="text-gray-700">☐ touch</span>
                    <span className="text-gray-700">☐ smell</span>
                    <span className="text-gray-700">☐ crowds</span>
                    <span className="text-gray-700">☐ temperature</span>
                    <span className="text-gray-700">☐ movement</span>
                    <span className="text-gray-700">☐ food textures</span>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-gray-800">Under-sensitive / seeks:</p>
                  <div className="flex flex-wrap gap-3 ml-4">
                    <span className="text-gray-700">☐ pressure</span>
                    <span className="text-gray-700">☐ movement</span>
                    <span className="text-gray-700">☐ chewing</span>
                    <span className="text-gray-700">☐ strong flavors</span>
                    <span className="text-gray-700">☐ deep sound</span>
                    <span className="text-gray-700">☐ tactile input</span>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-gray-800">My biggest triggers are:</p>
                  <div className="ml-4 text-gray-700">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-gray-800">My fastest regulators are:</p>
                  <div className="ml-4 text-gray-700">• _______________</div>
                </div>
              </div>

              <p className="text-gray-700 mt-4 italic">
                This helps you choose tools that match your nervous system instead of copying someone else's setup.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Make it "low effort" for shutdown days
              </h2>
              <p className="text-gray-700 mb-4">
                When you're overloaded, executive function drops. Your safe space should still work then.
              </p>

              <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 mb-3 font-semibold">Set up:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>one-tap lighting (switch accessible from your seat)</li>
                  <li>one basket with your essentials</li>
                  <li>a printed "what to do" card:
                    <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                      <li>dim lights</li>
                      <li>headphones on</li>
                      <li>blanket/pressure</li>
                      <li>drink water</li>
                      <li>5-minute skill (see <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">RAIN</Link> or <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">Urge Surfing</Link>)</li>
                    </ol>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 p-4 bg-yellow-50 rounded border border-yellow-200">
                If this doesn't lower intensity, go to <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Portable sensory safe space (for outside the house)
              </h2>
              <p className="text-gray-700 mb-3 font-semibold">Make a small "go kit":</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>earplugs + headphones</li>
                <li>sunglasses</li>
                <li>fidget</li>
                <li>snack + water</li>
                <li>mask (if smells/crowds are hard)</li>
                <li>a grounding card with 2–3 phrases:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>"My body is overloaded, not broken."</li>
                    <li>"Reduce input first."</li>
                    <li>"I can leave."</li>
                  </ul>
                </li>
              </ul>

              <p className="text-gray-700">
                This pairs well with your <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">Care Plan</Link> page (accommodations) and <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> (scripts + safe people).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                10) If you live with other people
              </h2>
              <p className="text-gray-700 mb-4">
                A sensory safe space works best when it's respected.
              </p>

              <div className="bg-green-50 p-4 rounded border border-green-200 mb-4">
                <p className="text-gray-700 mb-3 font-semibold">Consider a simple agreement:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>"When I'm in the space, I'm not available unless it's urgent."</li>
                  <li>"Knock/text first."</li>
                  <li>"If I'm nonverbal, use yes/no questions."</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <p className="text-gray-700 mb-2 font-semibold">Add a visual signal:</p>
                <p className="text-gray-700 ml-4">door sign, LED color, or a sticky note: "Regulating—back soon."</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                11) Safety notes
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>If you use weighted items, choose a weight that feels comforting, not restrictive.</li>
                <li>If your space is enclosed (tent/closet), make sure you have:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>airflow</li>
                    <li>easy exit</li>
                    <li>hydration nearby</li>
                  </ul>
                </li>
                <li>If self-harm urges are part of your overload pattern, keep your <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> steps and emergency contacts accessible.</li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Affirmations
                </Link>
                <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">
                  Overload & Shutdown
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
                </Link>
                <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">
                  Create a Crisis Plan
                </Link>
                <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">
                  RAIN Mindfulness
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">
                  Urge Surfing
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
