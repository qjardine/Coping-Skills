'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function MeltdownsPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Managing Meltdowns
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                A meltdown is an intense, involuntary stress response that can happen when your nervous system gets overwhelmed—often from sensory overload, emotional buildup, change, demands, masking, or a pile-up of stressors. It's your body and brain communicating: "I've hit (and passed) my limit."
              </p>
              <p className="text-gray-700 mb-4 p-4 bg-blue-50 rounded border border-blue-200 font-medium">
                Meltdowns are not tantrums. Tantrums are typically goal-oriented; meltdowns are an overload response where control and communication can collapse.
              </p>
              <p className="text-gray-700">
                This page helps you map your meltdown pattern and build a plan for: triggers, early warning signs, coping strategies, needs/boundaries during a meltdown, recovery, and a tip sheet for loved ones.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What meltdowns can look like
              </h2>
              <p className="text-gray-700 mb-3">Meltdowns vary person to person. They can include:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>crying, yelling, sobbing, shaking</li>
                <li>pacing, escaping, bolting for a door</li>
                <li>going nonverbal / losing words</li>
                <li>hyperventilating or "can't catch breath"</li>
                <li>curling inward, rocking, repetitive movement</li>
                <li>throwing items or slamming doors (not "on purpose"—it's overload)</li>
                <li>self-injury (for some people) like head-hitting or biting (this is a safety flag)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Meltdowns can be external (big, visible) or more internal. Some people also experience <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">shutdowns</Link> (withdrawal, immobility, reduced speech/communication) when overwhelmed.
              </p>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded border border-yellow-200">
                <strong>Compassion note:</strong> If you caused harm during a meltdown, accountability still matters—but the meltdown itself isn't a moral failure. Plan for safety first, repair later.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) The big idea: it's usually a build-up
              </h2>
              <p className="text-gray-700 mb-3">
                From the outside, a meltdown can look like it was caused by one "small" thing. Often it's actually the final straw after:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>sensory load (noise/light/texture/smell)</li>
                <li>cognitive load (too many decisions, too many steps)</li>
                <li>emotional load (conflict, rejection, shame)</li>
                <li>masking fatigue</li>
                <li>hunger, thirst, sleep debt</li>
                <li>transitions and surprises</li>
              </ul>
              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200 font-medium">
                So meltdown management is mostly pattern recognition + earlier exits + fewer inputs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Meltdown mapping
              </h2>
              <p className="text-gray-700 mb-4">
                Mapping helps you catch meltdowns earlier and reduce the intensity when they're unavoidable.
              </p>

              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Meltdown Triggers</h3>
                  <p className="text-gray-700 mb-2">Write down your common triggers:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>sensory:</strong> noise, bright light, crowded spaces, itchy clothes, temperature</li>
                    <li><strong>transitions:</strong> sudden plan changes, being rushed, unexpected visitors</li>
                    <li><strong>social:</strong> conflict, criticism, misunderstanding, too much talking</li>
                    <li><strong>demands:</strong> too many tasks, too many decisions, time pressure</li>
                    <li><strong>body:</strong> hunger, dehydration, pain, illness, insomnia</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Early Warning Signs</h3>
                  <p className="text-gray-700 mb-2">These are your "rumble stage" clues—signals to intervene before you tip over:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>irritability, snapping, "everything feels too loud"</li>
                    <li>urge to escape, pacing, restless hands</li>
                    <li>difficulty speaking, losing words</li>
                    <li>heat in face, chest tightness, clenched jaw</li>
                    <li>tunnel vision, catastrophizing, "I can't do this"</li>
                    <li>shutting down, going blank, dissociating</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Coping Strategies You Can Put in Place</h3>
                  <p className="text-gray-700 mb-3">Pick 3–5 "first-line" strategies you can actually do:</p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">Reduce input</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>move to your <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">Sensory Safe Space</Link></li>
                        <li>headphones/earplugs, sunglasses, hoodie, mask</li>
                        <li>dim lights, remove itchy layers, cool down/warm up</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-gray-700 font-semibold mb-2">Regulate your body</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li><Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> / Temperature (<Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">mammalian diving reflex</Link>: cold face / ice pack)</li>
                        <li><Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">paced breathing</Link> (if it works for you)</li>
                        <li>heavy pressure (weighted blanket, tight wrap)</li>
                        <li>rhythmic movement/stimming (rocking, pacing, fidgeting)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-gray-700 font-semibold mb-2">Buy time</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>exit script: "I need a sensory break. I'll be back in 20."</li>
                        <li>delay decisions until your nervous system settles</li>
                        <li>body doubling / someone quietly present</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-gray-700 font-semibold mb-2">Use your site skills</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li><Link href="/pages/neurodivergent/mindfulness-guide" className="text-blue-600 hover:text-blue-800 underline">Neurodivergent Mindfulness</Link> (observe/describe without judgment)</li>
                        <li><Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">RAIN</Link> (recognize/allow/investigate/nurture)</li>
                        <li><Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">Urge Surfing</Link> (ride the spike without acting)</li>
                        <li><Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> (if safety is at risk)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Your needs and boundaries during a meltdown
              </h2>
              <p className="text-gray-700 mb-3">During a meltdown, your brain may not be able to process:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>long explanations</li>
                <li>questions that require reasoning</li>
                <li>"calm down" demands</li>
                <li>unexpected touch (for many people)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                A lot of autistic-support guidance emphasizes keeping the environment calm, reducing triggers, and avoiding escalating inputs.
              </p>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="text-gray-700 mb-3 font-semibold">Write your "during meltdown" rules:</p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Space:</strong> Do I need to be alone, or do I need someone nearby but quiet?</li>
                  <li><strong>Touch:</strong> Never touch me / ask first / deep pressure helps / hand squeeze only.</li>
                  <li><strong>Words:</strong> Use very few words / no questions / yes-no only.</li>
                  <li><strong>Environment:</strong> lights low, sound low, no crowding, door kept clear.</li>
                  <li><strong>Time:</strong> don't demand quick recovery; I need time to come down.</li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                If you use AAC (texting, notes app, communication cards), keep it available—communication supports shouldn't be treated like something you have to "earn."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Meltdown recovery ideas
              </h2>
              <p className="text-gray-700 mb-4">
                After a meltdown, it's common to feel exhausted, foggy, embarrassed, or "emotionally hungover." Many guides emphasize rest, low stimulation, and gentle recovery.
              </p>
              <p className="text-gray-700 mb-3">Choose what helps you recover:</p>

              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Body</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>water + electrolytes</li>
                    <li>simple safe food (low effort, easy texture)</li>
                    <li>shower, change clothes</li>
                    <li>sleep/rest in low light</li>
                    <li>deep pressure (weighted blanket)</li>
                    <li>gentle movement (stretch, slow walk)</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Nervous system</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>quiet room, predictable sound</li>
                    <li>comfort show/music</li>
                    <li>stimming without shame</li>
                    <li>journaling one sentence: "What pushed me over the edge?"</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Repair (later)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>when regulated: short accountability + plan</li>
                    <li>"I had a meltdown. I'm sorry for ___. Next time I'll ___."</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Meltdown prevention tips
              </h2>
              <p className="text-gray-700 mb-3">
                These won't prevent every meltdown (and that's okay), but they reduce frequency and intensity.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Listen to your body early (don't negotiate with the warning signs).</li>
                <li>Build a routine that works for you (not "ideal routines").</li>
                <li>Plan regular sensory breaks and "low-demand time."</li>
                <li>Create a sensory toolbox (headphones, sunglasses, fidgets, snacks, pressure).</li>
                <li>Identify triggers and make exit strategies for outings.</li>
                <li>Allow yourself space to unmask and stim.</li>
                <li>Use AAC/written communication when speech drops.</li>
                <li>Plan ahead: call venues about quiet spaces/accommodations if that helps.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                See also: <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">Creating a Sensory Safe Space</Link>
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Meltdown tip sheet for loved ones
              </h2>
              <p className="text-gray-700 mb-4">
                You can copy/paste this into your <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> or share it with friends/partners/family.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Early Warning Signs to Pay Attention To</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• _______________</li>
                    <li>• _______________</li>
                    <li>• _______________</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Please Do These Things When You Notice Warning Signs</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>reduce noise/light</li>
                    <li>offer water/food (no pressure)</li>
                    <li>help me exit / drive / find a quiet spot</li>
                    <li>speak less, slow down</li>
                    <li>ask: "Do you want space or quiet company?"</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Things That Aren't Helpful During a Meltdown</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>arguing, correcting, or demanding eye contact</li>
                    <li>lots of questions</li>
                    <li>"You're overreacting" / "Calm down"</li>
                    <li>surprise touch or blocking exits</li>
                    <li>escalating the environment (more people, more noise)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">My Preferred Communication Methods</h3>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>✅ text / ✅ notes app / ✅ yes-no questions</li>
                    <li>❌ phone calls / ❌ long conversations / ❌ explaining myself mid-meltdown</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Things to Do After a Meltdown</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>give me time to recover (quiet, low demands)</li>
                    <li>help with basics (water, snack, blanket)</li>
                    <li>don't force processing immediately</li>
                    <li>later, ask if I want to debrief and adjust the plan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) When it's a safety issue
              </h2>
              <p className="text-gray-700 mb-3">
                If meltdowns include self-injury, dangerous bolting, or risk to you/others, treat it like a safety plan situation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>use your <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link></li>
                <li>reduce access to dangerous items during high-risk times</li>
                <li>ask for help early (support person, clinician, crisis resources)</li>
              </ul>
              <p className="text-gray-700 font-medium">
                If you're in immediate danger, contact local emergency services or crisis supports.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Quick "Meltdown Mapping" worksheet (copy/paste)
              </h2>

              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Meltdown Triggers</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Early Warning Signs</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">First-Line Coping (do these at the first warning sign)</p>
                  <ol className="list-decimal list-inside ml-4 space-y-1">
                    <li>_______________</li>
                    <li>_______________</li>
                    <li>_______________</li>
                  </ol>
                </div>

                <div>
                  <p className="font-semibold mb-2">Boundaries During a Meltdown</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Space: _______________</li>
                    <li>• Touch: _______________</li>
                    <li>• Words: _______________</li>
                    <li>• Environment: _______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Recovery Plan</p>
                  <ul className="ml-4 space-y-1">
                    <li>• What helps: _______________</li>
                    <li>• What makes it worse: _______________</li>
                    <li>• How long recovery usually takes: _______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">For Loved Ones: What to Do</p>
                  <div className="ml-4">_______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">For Loved Ones: What Not to Do</p>
                  <div className="ml-4">_______________</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">
                  Overload & Shutdown
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">
                  Creating a Sensory Safe Space
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
                </Link>
                <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">
                  Create a Crisis Plan
                </Link>
                <Link href="/pages/neurodivergent/mindfulness-guide" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Mindfulness
                </Link>
                <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">
                  RAIN Mindfulness
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">
                  Urge Surfing
                </Link>
                <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">
                  TIPP
                </Link>
                <Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">
                  Mammalian Diving Reflex
                </Link>
                <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">
                  Paced Breathing
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
