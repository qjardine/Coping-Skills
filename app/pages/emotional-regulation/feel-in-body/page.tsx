'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import Image from 'next/image';

export default function FeelInBodyPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/pages/flowchart/sit-with-it');
  };

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
            Feeling Emotions in Your Body (with the Emotion–Sensation Wheel)
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6">
            <div className="mb-6">
              <Image
                src="/assets/emotionsensation.jpeg"
                alt="Emotion Sensation Wheel"
                width={800}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div>
              <p className="text-gray-700 mb-4">
                When you have an emotion, your body usually changes—<Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>, heart rate, muscle tension, temperature, posture, face, etc. Learning to notice those signals makes emotion regulation easier.
              </p>
              <p className="text-gray-700">
                If you've spent years "shutting off" body sensations (for safety, trauma, chronic stress, masking, sensory overwhelm), reconnecting can feel hard at first—but it's a learnable skill.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h2 className="text-xl font-semibold mb-3 text-purple-800">
                Neurodivergent note (important)
              </h2>
              <p className="text-gray-700 mb-3">
                If you're autistic and/or ADHD, you might have interoception differences—meaning it can be harder to notice or interpret internal signals (like hunger, thirst, rising anxiety, or anger building). Dr. Emma Goodall describes interoception as the internal sensory system that helps you notice, recognize, and respond to body states, and notes that overwhelm and trauma can reduce access to these signals.
              </p>
              <p className="text-gray-700 mb-3">
                Research on the Interoception Sensory Questionnaire (ISQ) also suggests many autistic adults report "interoceptive confusion."
              </p>
              <p className="text-gray-700 font-semibold">
                So if this is difficult: it doesn't mean you're "doing it wrong." It means your nervous system may need smaller steps and more supports.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step-by-step: Find the emotion through your body (using the wheel)
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 0 — Safety + choice (10 seconds)
                </h3>
                <p className="text-gray-700 mb-2">Ask yourself: "Does checking inside feel safe enough right now?"</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>If no: start with external mindfulness (look around the room, name 5 things you see), then come back later.</li>
                  <li>If yes or maybe: continue, but keep it small. (You can <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> anytime.)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 1 — Start with a baseline body question (20 seconds)
                </h3>
                <p className="text-gray-700 mb-3">
                  Instead of "What emotion am I feeling?", try:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                  <li>"How do I know I'm okay or not okay right now?"</li>
                  <li>"What signals is my body giving me?"</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Pick one easy signal to check:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>stomach (empty/full/nausea)</li>
                  <li>throat (tight/lump/clear)</li>
                  <li>chest (tight/open/neutral)</li>
                  <li>jaw (clenched/loose)</li>
                  <li>hands (restless/tingly/still)</li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  If you can't tell: that's still data. Write: "unclear".
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 2 — Use supports if interoception is fuzzy (optional, ND-friendly)
                </h3>
                <p className="text-gray-700 mb-3">
                  External supports are valid. They can bridge the gap while your internal <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> grows.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Try one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>glance at a smartwatch heart rate (if you have one)</li>
                  <li>check room temperature / weather app to notice heat/cold</li>
                  <li>drink water if you realize you haven't in a while</li>
                  <li>use a timer prompt ("pause + body check" 1–2x/day)</li>
                </ul>
                <p className="text-gray-700">
                  Goodall also describes building interoception with brief body-<Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> activities practiced regularly over time.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 3 — Do a micro-scan (30–60 seconds, not a full <Link href="/pages/mindfulness/body-scan/how-long" className="text-blue-600 hover:text-blue-800 underline">body scan</Link>)
                </h3>
                <p className="text-gray-700 mb-3 text-sm italic">
                  This is a gentle "sip," not a "chug."
                </p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Shoulders: up to ears → drop them</li>
                  <li>Hands: open/close once</li>
                  <li>Feet: press toes into the floor, then relax</li>
                  <li>Breath: one slow exhale</li>
                </ol>
                <p className="text-gray-700 mt-3">
                  You're looking for any change: tight/loose, buzzy/heavy, hot/cold, still/restless.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 4 — Face-first check (often easiest to notice)
                </h3>
                <p className="text-gray-700 mb-3">
                  DBT materials note that facial expressions and body language are tightly linked with emotion.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Check these quickly:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>jaw: clenched / loose</li>
                  <li>eyes: wide / squinty / avoiding</li>
                  <li>forehead: tense / smooth</li>
                  <li>mouth: tight / trembling / downturned</li>
                  <li>throat: tight / open</li>
                </ul>
                <p className="text-gray-700">
                  If you find tension, soften one area (jaw or forehead) and see if anything shifts.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 5 — Use the Emotion–Sensation Wheel (the image on your screen)
                </h3>
                <p className="text-gray-700 mb-3">You'll move outside → in.</p>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">5A) Pick 1–2 body sensations (outer ring)</p>
                  <p className="text-gray-700 mb-2">
                    Look at the outer ring and choose what matches closest.
                  </p>
                  <p className="text-gray-700 text-sm italic ml-4">
                    Examples: tight jaw, racing, nausea, heavy, lump in throat, sweaty palms, shuddering, numb.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">5B) Move one ring inward: choose the matching emotion word</p>
                  <p className="text-gray-700">
                    From that slice, pick the emotion word that fits best (even if it's only 60% right).
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">5C) Move to the core emotion family (center ring)</p>
                  <p className="text-gray-700 mb-2">Choose the core family:</p>
                  <p className="text-gray-700 ml-4">
                    Fear / Anger / Sad / Happy / Disgust / Surprise
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-medium mb-2">5D) Rate intensity (0–10)</p>
                  <p className="text-gray-700 ml-4 mb-2">"How strong is it right now?" ____/10</p>
                  <p className="text-gray-700 text-sm italic">
                    If you pick the "wrong" one: totally fine. Your goal is "close enough to work with."
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 6 — "Name + locate" (the DBT move)
                </h3>
                <p className="text-gray-700 mb-3">Write one simple sentence:</p>
                <p className="text-gray-700 ml-4 mb-3">
                  "I'm noticing ___ (emotion) in my ___ (body place), at about ___/10."
                </p>
                <p className="text-gray-700 mb-2 font-medium">Example:</p>
                <p className="text-gray-700 ml-4">
                  "I'm noticing anxious in my chest and hands, about 6/10."
                </p>
                <p className="text-gray-700 mt-3 text-sm italic">
                  This is mindfulness "Describe" in DBT—labeling without judgment.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 7 — If you feel stuck, use the "urge + posture" shortcut
                </h3>
                <p className="text-gray-700 mb-3">
                  Sometimes you can't feel the emotion, but you can notice the urge.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Ask:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"Do I want to hide/escape?" (often Fear)</li>
                  <li>"Do I want to attack/argue?" (often Anger)</li>
                  <li>"Do I want to withdraw/cry/sleep?" (often Sad)</li>
                  <li>"Do I want to push away/clean/get away?" (often Disgust)</li>
                  <li>"Do I want to move toward/connect/celebrate?" (often Happy)</li>
                </ul>
                <p className="text-gray-700">
                  Then use the wheel to see which slice matches your urge + any small sensation.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 8 — Tiny regulation option: <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-Smile</Link> (only if it feels okay)
                </h3>
                <p className="text-gray-700 mb-3">
                  Researchers and DBT sources note that changing facial muscles can shift emotional intensity for some people—this is why DBT teaches <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-Smile</Link>.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Try for 10 seconds:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>relax your face</li>
                  <li>gently lift the corners of your mouth slightly (not a fake big smile)</li>
                  <li>breathe out slowly</li>
                </ul>
                <p className="text-gray-700 ml-4 mb-2">Then re-rate intensity: ____/10</p>
                <p className="text-gray-700 text-sm italic">
                  (If this feels invalidating or weird, skip it.)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 9 — Close the loop (pick one "next right step")
                </h3>
                <p className="text-gray-700 mb-3">Now that you have a label, choose one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I can sit with this feeling." → Emotion Exposure / Self-Validation / Self-Compassion / Core Belief</li>
                  <li>"This is too big right now." → Distress Tolerance (<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>/<Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>)</li>
                  <li>"This is about a situation with someone." → Interpersonal Skills (<Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> / <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> / <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>)</li>
                  <li>"My body needs basics." → <Link href="/pages/self-care" className="text-blue-600 hover:text-blue-800 underline">Self-care</Link> check (hydration/food/meds/rest)</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  If your body feels "blank" or "numb"
                </h3>
                <p className="text-gray-700 mb-3">
                  That counts as information too. Try:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>write: "numb / unclear"</li>
                  <li>use external anchors (sound/sight) for 30 seconds</li>
                  <li>do one micro-scan movement (toes or shoulders)</li>
                  <li>then try the wheel again from the outer ring</li>
                </ul>
                <p className="text-gray-700">
                  Over time, repeated short practices (not long intense ones) can build interoceptive <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <button
          onClick={() => router.push('/pages/flowchart/changing-feelings')}
          className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Continue to Self-Care
        </button>
        <button
          onClick={handleReturnToLanding}
          className="px-4 md:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing
        </button>
      </div>
    </div>
  );
}
