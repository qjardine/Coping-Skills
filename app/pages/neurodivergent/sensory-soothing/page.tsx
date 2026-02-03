'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SensorySoothingPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Sensory Self-Soothing
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Sensory self-soothing is one of the most neurodivergent-friendly distress tolerance tools: you use your senses (and your body) to reduce overwhelm, soften big feelings, and create comfort—especially when your nervous system is overloaded.
              </p>
              <p className="text-gray-700 mb-4">
                Many autistic and neurodivergent people experience sensory differences (being more or less sensitive to sound, light, touch, smell, taste, and other senses). Sensory input can overwhelm you fast… and sensory input can also be exactly what helps you regulate.
              </p>
              <p className="text-gray-700 p-4 bg-blue-50 rounded border border-blue-200">
                In DBT, this is often taught as Self-Soothe with the Five Senses: you intentionally choose soothing sensory experiences to help you ride out distress.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What sensory self-soothing does
              </h2>
              <p className="text-gray-700 mb-3">Sensory self-soothing can help you:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>lower the intensity of emotion</li>
                <li>reduce sensory overload (or meet sensory-seeking needs)</li>
                <li>interrupt spiraling thoughts</li>
                <li>feel grounded in the present moment</li>
                <li>create comfort and safety in your body</li>
              </ul>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded border border-yellow-200 font-medium">
                Important: this isn't "forcing calm." It's giving your nervous system the inputs it needs to settle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Two types of sensory needs
              </h2>
              <p className="text-gray-700 mb-4">
                Autistic sensory profiles often include both:
              </p>

              <div className="space-y-4 mb-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">A) Sensory overload (too much input)</h3>
                  <p className="text-gray-700">
                    You may need: less noise, less light, less touch, fewer demands.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">B) Sensory seeking (not enough input)</h3>
                  <p className="text-gray-700">
                    You may need: more pressure, more movement, more texture, more rhythm.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 mb-2 font-semibold">Self-soothing works best when you match the strategy to the need:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Overloaded</strong> → reduce input + gentle comfort</li>
                  <li><strong>Seeking</strong> → add safe input (movement, pressure, chew, rhythm)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) The DBT rule: soothe each sense
              </h2>
              <p className="text-gray-700 mb-4">
                DBT teaches self-soothing by intentionally choosing experiences that feel comforting through the five senses (vision, hearing, smell, taste, touch).
              </p>
              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200 font-medium">
                Below are ideas to get you started. Your job is to pick what actually works for you, not what "should" work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Sensory self-soothing ideas
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">LOOK (Vision)</h3>
                  <p className="text-gray-700 mb-2">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>watch a feel-good show or a familiar comfort episode</li>
                    <li>look at funny memes</li>
                    <li>watch satisfying/repetitive videos (crafting, sorting, ASMR visuals)</li>
                    <li>nature walk: clouds, leaves, water movement</li>
                    <li>soft lighting (lamps, fairy lights) or dim the room</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    See also: <Link href="/pages/neurodivergent/mindfulness" className="text-blue-600 hover:text-blue-800 underline">Accessible Mindfulness Exercises</Link>, <Link href="/pages/neurodivergent/mindfulness-guide" className="text-blue-600 hover:text-blue-800 underline">Neurodivergent Mindfulness</Link>
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">HEAR (Sound)</h3>
                  <p className="text-gray-700 mb-2">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>calming playlist, white/brown noise, fan</li>
                    <li>one "anchor song" you associate with safety</li>
                    <li>noise-canceling headphones / ear defenders (especially for overload)</li>
                    <li>call a friend and ask for quiet company (not problem-solving)</li>
                  </ul>
                  <p className="text-gray-700 mt-3 italic">
                    Noise protection is a common, practical strategy for sensory overload.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">SMELL (Scent)</h3>
                  <p className="text-gray-700 mb-2">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>light a candle (if safe)</li>
                    <li>keep a favorite scent on hand (lotion, essential oil dab, perfume sample card)</li>
                    <li>fresh laundry smell, minty balm, or a comforting tea aroma</li>
                  </ul>
                  <p className="text-gray-700 mt-3 italic">
                    If smells are a trigger for you, scent-based soothing may be a "no"—that's valid.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">TASTE</h3>
                  <p className="text-gray-700 mb-2">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>sip warm tea or a favorite drink</li>
                    <li>focus on a hard candy or mint</li>
                    <li>crunchy snack (if crunch helps you regulate)</li>
                    <li>bake cookies (smell + taste + predictable routine)</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">TOUCH (Tactile / Pressure)</h3>
                  <p className="text-gray-700 mb-2">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>weighted blanket or heavy quilt (pressure)</li>
                    <li>bubble bath or shower (temperature + touch)</li>
                    <li>cuddling a pet (if that's regulating)</li>
                    <li>soft textures (hoodie, plush blanket, sensory fabric)</li>
                    <li>compression clothing / tight wrap (if pressure helps)</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    See also: <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">Creating a Sensory Safe Space</Link>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Add stimming to your soothing plan
              </h2>
              <p className="text-gray-700 mb-4">
                Stimming (repetitive movement or sound) is a common and often healthy way autistic people regulate emotion, attention, and sensory input. Many autistic adults describe stimming as a self-regulatory, adaptive tool.
              </p>
              <p className="text-gray-700 mb-4">
                If you're used to masking, you might not know what stims help you yet. That's okay—experiment gently.
              </p>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">A list of stims to try (starter menu)</h3>
                <p className="text-gray-700 mb-3">Pick what feels safe and natural:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>hand flapping/waving</li>
                    <li>stim dancing</li>
                    <li>tapping feet/fingers</li>
                    <li>twirling hair</li>
                    <li>shaking head gently</li>
                    <li>singing or humming</li>
                    <li>repeating words/phrases (echolalia)</li>
                    <li>making soft sounds</li>
                    <li>rubbing fingers on soft textures</li>
                    <li>chewing gum or chewelry (if helpful)</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>bouncing your leg</li>
                    <li>fidgeting (spinner, cube, putty)</li>
                    <li>rocking back and forth</li>
                    <li>watching something repetitive/soothing</li>
                    <li>moving hands in front of your vision (visual stim)</li>
                    <li>seeking pressure (blankets, pillows, pet weight)</li>
                    <li>sucking on a mint or lollipop</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                <strong>Safety note:</strong> stims are valid. If a stim becomes self-injurious, the goal is usually harm reduction (swap to a safer input that meets the same need), not shame or elimination.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Special interests as regulation
              </h2>
              <p className="text-gray-700 mb-4">
                Special interests (sometimes called "spins") can be a powerful, positive regulation strategy: they bring focus, joy, and a sense of meaning—especially during stress.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Spins you can DO (active regulation)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>makeup</li>
                    <li>cooking or baking</li>
                    <li>arts and crafts</li>
                    <li>photography</li>
                    <li>plant care</li>
                    <li>stargazing</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Spins you can WATCH/LISTEN to (low energy)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>comfort TV shows</li>
                    <li>podcasts</li>
                    <li>music</li>
                    <li>YouTube deep dives</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Spins for deep-dive distraction</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>documentaries / longform videos</li>
                    <li>research rabbit holes (with a time limit if needed)</li>
                    <li>organizing collections / playlists / folders</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Spins to share with others</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>info-dump with consent</li>
                    <li>co-watch, co-play, co-create</li>
                    <li>swap recommendations with a friend</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                <strong>Tip:</strong> If you're approaching overload, choose a version of your interest that is low demand (watch/listen) rather than high executive-function (complex projects).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Build your personal Sensory Self-Soothing list
              </h2>
              <p className="text-gray-700 mb-4">
                When you're distressed, it's hard to think. Make your list now so you can use it later.
              </p>

              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-2">My sensory soothing menu</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">LOOK:</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">HEAR:</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">SMELL:</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">TASTE:</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">TOUCH / PRESSURE:</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">STIMS that help:</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">SPECIAL INTEREST "reset" options:</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div className="pt-4 border-t border-gray-300">
                  <p className="font-semibold mb-3">When I'm overwhelmed, start with:</p>
                  <p className="text-sm mb-2 ml-4">(Choose 3 "first-line" options you can do in under 2 minutes.)</p>
                  <ol className="list-decimal list-inside ml-4 space-y-1">
                    <li>_______________</li>
                    <li>_______________</li>
                    <li>_______________</li>
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Share this with your support people
              </h2>
              <p className="text-gray-700 mb-3">
                Self-soothing is easier when other people know what helps.
              </p>
              <p className="text-gray-700 mb-3">You can share:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>your top 3 sensory strategies</li>
                <li>what to avoid (bright lights, talking, touch, questions)</li>
                <li>your preferred communication (text, yes/no, no speaking)</li>
              </ul>
              <p className="text-gray-700">
                This pairs well with your <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> and <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:text-blue-800 underline">Meltdown Management</Link> pages.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) When to switch to a stronger plan
              </h2>
              <p className="text-gray-700 mb-3">If sensory self-soothing isn't enough:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>use your <Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">Mammalian Diving Reflex</Link> / <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP Temperature</Link> page for a fast downshift</li>
                <li>use your <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> if safety is at risk</li>
                <li>use your <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:text-blue-800 underline">Meltdown Management</Link> plan if you're in the rumble stage</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                DBT's self-soothing is one tool in the toolbox—not the only one.
              </p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">
                  Creating a Sensory Safe Space
                </Link>
                <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:text-blue-800 underline">
                  Managing Meltdowns
                </Link>
                <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">
                  Overload & Shutdown
                </Link>
                <Link href="/pages/neurodivergent/mindfulness" className="text-blue-600 hover:text-blue-800 underline">
                  Accessible Mindfulness Exercises
                </Link>
                <Link href="/pages/neurodivergent/mindfulness-guide" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Mindfulness Guide
                </Link>
                <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">
                  Create a Crisis Plan
                </Link>
                <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">
                  TIPP
                </Link>
                <Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">
                  Mammalian Diving Reflex
                </Link>
                <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">
                  Self-Soothe (DBT)
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
