'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function LettingGoPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
            Letting Go of Painful Emotions
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                DBT Emotion Regulation — also called Mindfulness of Current Emotions / Ride the Wave
              </p>
              <p className="text-gray-700 mb-4">
                Painful emotions are real and valid. "Letting go" in DBT does not mean pushing them away or pretending they're fine. It means letting go of the extra suffering that comes from fighting reality, replaying the story, or trying to force the feeling to disappear.
              </p>
              <p className="text-gray-700">
                DBT frames this as a path to "emotional freedom," because suppressing emotions tends to increase suffering over time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                When to use this skill
              </h2>
              <p className="text-gray-700 mb-3">Use it when you notice:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>You're stuck in a loop (ruminating, replaying, rehearsing arguments, spiraling).</li>
                <li>You're trying to not feel something and it's getting louder.</li>
                <li>You're acting like the emotion is an emergency, even if it isn't.</li>
              </ul>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                If you're so overwhelmed you can't focus on anything but the emotion, your brain stops processing, or you can't use "complicated skills," that's a skills breakdown point—switch to crisis survival skills first.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step-by-step: Ride the Wave (the core practice)
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 0: Set yourself up (10 seconds)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Pick a time container: "I'm practicing for 60–90 seconds."</li>
                  <li>Choose an anchor: breath, feet on floor, hands on thighs, a visual point in the room.</li>
                  <li>Optional: say quietly, "This is a feeling. Feelings rise and fall."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 1: Observe the emotion (name it)
                </h3>
                <p className="text-gray-700 mb-3">
                  DBT starts with stepping back and noticing.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Try:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"I'm noticing anger."</li>
                  <li>"I'm noticing shame."</li>
                  <li>"I'm noticing grief."</li>
                  <li>If naming is hard: "I'm noticing something intense."</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Neurodivergent-friendly option:</p>
                <p className="text-gray-700 mb-2">if naming emotions is hard (alexithymia/interoception stuff), label the channel instead:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"<Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">Fast</Link> thoughts."</li>
                  <li>"Hot face."</li>
                  <li>"Pressure in chest."</li>
                  <li>"Urgency to fix/escape."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 2: Wave metaphor (<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> arguing with the water)
                </h3>
                <p className="text-gray-700 mb-3">
                  DBT suggests experiencing the emotion as a wave, coming and going—then imagining surfing it.
                </p>
                <p className="text-gray-700 mb-2">That means:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>You don't have to like the wave.</li>
                  <li>You don't have to solve the wave.</li>
                  <li>You just stay on the board.</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Use a phrase like:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"Here it comes… here it is… it will shift."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 3: Drop the 5 common "hooks"
                </h3>
                <p className="text-gray-700 mb-3">
                  This is the heart of "letting go of suffering." While you surf:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Don't block or suppress it.</li>
                  <li>Don't try to push it away.</li>
                  <li>Don't try to keep it around / hold on to it.</li>
                  <li>Don't amplify it (don't add extra fuel).</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Quick check: ask, "Am I adding a second arrow?"</p>
                <p className="text-gray-700 mb-2 font-medium">Examples of "second arrows":</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I shouldn't feel this."</li>
                  <li>"This proves I'm broken."</li>
                  <li>"I'll feel like this forever."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 4: Mindfulness of body sensations (optional, and adjustable)
                </h3>
                <p className="text-gray-700 mb-3">
                  DBT suggests noticing where the emotion shows up in the body and experiencing sensations fully, while observing how long until it goes down.
                </p>
                <p className="text-gray-700 mb-2 font-medium">If body <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> is accessible:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Scan: jaw, throat, chest, belly, hands, shoulders.</li>
                  <li>Describe sensations like a scientist: "tight," "buzzing," "heavy," "electric," "numb."</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">If body <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> is not accessible or is triggering:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Use external anchors instead: hold an ice cube, notice fabric texture, look for 5 objects with straight lines, listen for 3 separate sounds.</li>
                  <li>Or do "body-lite": only notice one safe area (feet in socks, hands on blanket).</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 5: Remember: you are not your emotion
                </h3>
                <p className="text-gray-700 mb-3">
                  DBT is explicit: you don't have to act on the emotion, and it helps to remember times you've felt different.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Try:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"This is part of me, not all of me."</li>
                  <li>"I can feel this without obeying it."</li>
                  <li>"I have felt other things before, and I will again."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 6: Practice "loving" the emotion (meaning: respect + no judgment)
                </h3>
                <p className="text-gray-700 mb-3">
                  DBT frames this as respecting the emotion and not judging it—practicing <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">willingness</Link> and radically accepting the emotion as present.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Gentle phrases:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"Of course I feel this, given what I've lived."</li>
                  <li>"This is a nervous system doing its job."</li>
                  <li>"I don't approve of what happened, but I can allow the feeling to exist."</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  A super-short version (30 seconds)
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Name: "I'm noticing ___."</li>
                  <li>Wave: "This will rise and fall."</li>
                  <li>Unhook: "No pushing away, no amplifying."</li>
                  <li>Choose: "I won't act for 30 seconds."</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Troubleshooting (common blocks)
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"It gets bigger when I notice it."</p>
                    <p className="text-gray-700 ml-4">
                      That's normal at first. You're turning toward what you used to avoid. Keep the time container tiny (30–60 seconds). If arousal spikes into overwhelm, pivot to crisis skills.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"I can't find the emotion in my body."</p>
                    <p className="text-gray-700 ml-4">
                      Also normal—especially with interoception differences. Use external anchors and label thoughts/urges instead. You're still doing the skill.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"I keep replaying the story."</p>
                    <p className="text-gray-700 ml-4">
                      Treat the story like a thought channel, not the emotion.<br />
                      Try: "Replaying is here." Then return to sensation/anchor.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"I'm judging myself for having this feeling."</p>
                    <p className="text-gray-700 ml-4">
                      Add a dialectic reminder: acceptance is not approval. You can accept what's happening inside you without approving of what caused it. (This is a core DBT move.)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Practice ideas (start small)
                </h3>
                <p className="text-gray-700 mb-2">
                  Pick one "low-stakes" situation and practice for 60 seconds:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Mild irritation (slow line, tech issue)</li>
                  <li>Disappointment (plans changed)</li>
                  <li>Anxiety (sending a message)</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  The goal is repetition, not perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/letting-go.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >Try the Worksheet (pdf)</a>
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
