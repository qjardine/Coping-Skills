'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function PositiveSelfTalkPage() {
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
            Positive Self-Talk
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                A step-by-step skill for when your brain is being mean to you.
              </p>
              <p className="text-gray-700 mb-4">
                Sometimes all we have is the power of our own self-talk. And that can be enough to get through the next minute, the next hour, or the next hard thing.
              </p>
              <p className="text-gray-700">
                Positive self-talk in DBT/CBT doesn't mean "pretend everything is fine."
                It means: notice the thought, check if it's distorted, then choose a more helpful and believable message—so you can act from <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> instead of getting pushed around by shame, fear, or hopelessness.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                What this is for
              </h2>
              <p className="text-gray-700 mb-3">Use this page when you notice:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>You're spiraling ("I'm a failure," "I ruin everything," "Nobody cares.")</li>
                <li>You're stuck in harsh self-judgment</li>
                <li>You want to do something effective, but your inner voice is dragging you down</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Before you start (10 seconds)
              </h2>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Pick one hard moment. What's happening right now? (Keep it simple.)</li>
                <li>Rate the intensity (0–10). How strong is the distress?</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 1: Catch the ANT (Automatic Negative Thought)
              </h2>
              <p className="text-gray-700 mb-3">
                ANTs are the quick "automatic" thoughts that show up and hit you in the gut.
              </p>
              <p className="text-gray-700 mb-2 font-medium">Finish this sentence:</p>
              <p className="text-gray-700 ml-4 mb-3 font-semibold">
                "My brain is saying: ________."
              </p>
              <p className="text-gray-700 mb-2 font-medium">Example:</p>
              <p className="text-gray-700 ml-4 italic">
                "My brain is saying: I'm going to mess this up and everyone will know I'm incompetent."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 2: Name the thinking trap (1 label is enough)
              </h2>
              <p className="text-gray-700 mb-3">
                Cognitive distortions are mental shortcuts that can increase distress.
              </p>
              <p className="text-gray-700 mb-2 font-medium">Common ones:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Catastrophizing: "This will be a disaster."</li>
                <li>Black-and-white thinking: "I'm either perfect or worthless."</li>
                <li>Overgeneralizing: "This happened once, so it always happens."</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Write:</p>
              <p className="text-gray-700 ml-4 font-semibold">
                "This sounds like: ________."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 3: Check the evidence (CBT "reality check")
              </h2>
              <p className="text-gray-700 mb-3">
                Ask 3 quick questions (don't overthink):
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>What are the facts I can prove?</li>
                <li>What am I assuming?</li>
                <li>What would I say to a friend in the same situation?</li>
              </ol>
              <p className="text-gray-700 text-sm italic">
                This is the core of cognitive restructuring: identify the thought → evaluate it → make a more accurate alternative.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 4: Write a "true enough" replacement thought
              </h2>
              <p className="text-gray-700 mb-3">A good replacement thought is:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Kind</li>
                <li>Believable</li>
                <li>Action-supporting</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Format options (pick one):</p>

              <div className="mb-4 ml-4">
                <p className="text-gray-700 font-semibold mb-1">A) Balanced truth</p>
                <p className="text-gray-700 ml-4 italic">"This is hard and I can take one step."</p>
              </div>

              <div className="mb-4 ml-4">
                <p className="text-gray-700 font-semibold mb-1">B) Evidence-based</p>
                <p className="text-gray-700 ml-4 italic">"I've handled things before. I can handle the next 10 minutes."</p>
              </div>

              <div className="mb-4 ml-4">
                <p className="text-gray-700 font-semibold mb-1">C) Self-validation</p>
                <p className="text-gray-700 ml-4 italic">"It makes sense I feel this way, given what's happening."</p>
              </div>

              <div className="mb-4 ml-4">
                <p className="text-gray-700 font-semibold mb-1">D) Coaching voice</p>
                <p className="text-gray-700 ml-4 italic">"Slow down. Breathe. Do the next right thing."</p>
              </div>

              <p className="text-gray-700 text-sm italic">
                (If the "positive" version feels fake, make it smaller until it's believable.)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 5: Say it like practice (not like magic)
              </h2>
              <p className="text-gray-700 mb-3">
                Repeat your replacement thought 3 times, slowly.
              </p>
              <p className="text-gray-700 mb-2">If you can, pair it with a tiny action:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>unclench jaw</li>
                <li>drop shoulders</li>
                <li>one sip of water</li>
                <li>open the notes app and write the next step</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                This is how you teach your brain: repetition + behavior.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 6: Make a tiny "rehearsal plan" for next time
              </h2>
              <p className="text-gray-700 mb-2 font-medium">Write one sentence:</p>
              <p className="text-gray-700 ml-4 mb-3 font-semibold">
                "Next time this ANT shows up, I will ________."
              </p>
              <p className="text-gray-700 mb-2 font-medium">Examples:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>"Next time I hear 'I'm a burden,' I will label it as a thought and text one safe person."</li>
                <li>"Next time I catastrophize, I will list 2 other possible outcomes."</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step 7: Remember the Backwards Brain Bicycle
              </h2>
              <p className="text-gray-700 mb-3">
                Changing self-talk is like rewiring a habit: it can feel impossible at first, then it slowly becomes easier with repetition.
              </p>
              <p className="text-gray-700">
                The "Backwards Brain Bicycle" story shows how long it can take to re-train your brain with small daily practice—and that it does change with practice.
              </p>
              <p className="text-gray-700 mt-3 font-semibold">
                So if this feels awkward: that's normal. You're building a new pathway.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Quick "starter scripts" (choose 1)
              </h3>
              <p className="text-gray-700 mb-2">If you don't know what to say, borrow one:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>"I can be scared and still show up."</li>
                <li>"I don't have to solve my whole life right now."</li>
                <li>"This feeling is real, and it will shift."</li>
                <li>"One step. One breath. One choice."</li>
                <li>"I'm practicing. Not performing."</li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">
                If your self-talk gets unsafe
              </h3>
              <p className="text-gray-700">
                If your inner voice is pushing you toward self-harm or you feel in danger, pause this exercise and use Crisis Skills (<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>/<Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>/Reach out for support). You deserve help and safety first.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-16 md:bottom-6 md:right-6 right-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50"
      >
        Return to Landing
      </button>
    </div>
  );
}

