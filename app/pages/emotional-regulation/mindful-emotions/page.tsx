'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function MindfulEmotionsPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            <Link href="/pages/emotional-regulation/mindful-emotions" className="text-blue-600 hover:text-blue-800 underline">Mindful Emotions</Link>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                <strong>DBT Skill:</strong> Mindfulness of Current Emotion (Ride the Wave)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                You know that moment when an emotion starts taking over—heart racing, jaw tight, thoughts speeding up, body bracing. It can feel like you have to act to get relief (argue, shut down, binge, scroll, drink, run, self-harm, people-<Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">please</Link>, disappear).
              </p>
              <p className="text-gray-700 mb-4">
                Mindfulness of Current Emotion is a DBT skill that helps you stay with an emotion in real time—without suppressing it and without letting it drive your behavior. You learn to notice the emotion, feel it in your body, and let it rise and fall like a wave. When you <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> fighting the feeling (or feeding it with impulsive actions), it becomes easier to ride it out and return to <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link>.
              </p>
              <p className="text-gray-700">
                DBT was originally developed to help people who experience intense emotions and high-risk urges learn skills to reduce suffering and build a life worth living.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                When to Use This Skill
              </h2>
              <p className="text-gray-700 mb-3">Use Mindful Emotions when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>You can name an emotion ("I feel anxious / angry / ashamed / sad").</li>
                <li>The intensity is high but not escalating into immediate danger.</li>
                <li>You want to <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> reacting automatically (snapping, spiraling, self-medicating, shutting down).</li>
                <li>You want to reduce suffering without needing the emotion to vanish first.</li>
              </ul>
              <p className="text-gray-700 mb-3 font-semibold">Use a crisis skill first (like TIP/STOP/<Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">self-soothe</Link>) when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Your body is in full alarm (panic, shaking, dissociation, feeling out of control).</li>
                <li>You're at high risk of doing something unsafe.</li>
                <li>You can't stay present without being overwhelmed.</li>
              </ul>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                A simple rule: If you can't stay with the feeling without increasing risk, do crisis skills first—then come back to <Link href="/pages/emotional-regulation/mindful-emotions" className="text-blue-600 hover:text-blue-800 underline">mindful emotions</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                How to Practice <Link href="/pages/emotional-regulation/mindful-emotions" className="text-blue-600 hover:text-blue-800 underline">Mindful Emotions</Link> (Ride the Wave)
              </h2>
              <p className="text-gray-700 mb-4 font-semibold">Set a timer for 2–10 minutes.</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 1: Name it (out loud or in your head)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"This is anger."</li>
                    <li>"This is fear."</li>
                    <li>"This is shame."</li>
                  </ul>
                  <p className="text-gray-700 mt-2">Naming is not weakness—it's clarity.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 2: Locate it in your body</h3>
                  <p className="text-gray-700 mb-2 font-medium">Ask:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Where do I feel this most? (chest, throat, stomach, face, hands)</li>
                    <li>What is it like? (tight, hot, buzzing, heavy, fluttery, numb)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 3: Allow it to be here (no fixing, no feeding)</h3>
                  <p className="text-gray-700 mb-2 font-medium">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"I don't like this, and I can allow it to be here."</li>
                    <li>"This is uncomfortable, not dangerous." (if true)</li>
                  </ul>
                  <p className="text-gray-700 mt-2">This is DBT willingness: letting the emotion exist without wrestling it.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 4: Watch the wave move</h3>
                  <p className="text-gray-700 mb-2">Imagine the emotion as a wave:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>It rises</li>
                    <li>it peaks</li>
                    <li>it shifts</li>
                    <li>it falls</li>
                  </ul>
                  <p className="text-gray-700 mt-2">Your only job is to keep observing: sensations, breath, urge level, intensity.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 5: Don't become the emotion</h3>
                  <p className="text-gray-700 mb-2 font-medium">Say:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"I am noticing anger."</li>
                    <li>"I am not anger. Anger is happening."</li>
                  </ul>
                  <p className="text-gray-700 mt-2">You can feel it without being it.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 6: Add gentle kindness (if you can)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"Of course this hurts."</li>
                    <li>"Anyone in my situation might feel this."</li>
                    <li>"I can be with myself here."</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 mb-2 font-medium">When the timer ends, re-orient:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Look around the room</li>
                    <li>feel your feet</li>
                    <li>take one longer exhale</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Quick Option: 90-Second Ride (Micro-Practice)
              </h3>
              <p className="text-gray-700 mb-2">If you're short on time, do this for 90 seconds:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>"This is ___."</li>
                <li>Where is it in my body?</li>
                <li>Breathe out slowly and watch it change.</li>
                <li>"I can ride this for 90 seconds."</li>
              </ol>
              <p className="text-gray-700 mt-3">
                Even if the emotion doesn't disappear, you usually get a shift—10% is a win.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Worksheet & Virtual Coach
              </h2>
              <p className="text-gray-700 mb-3">After you practice, jot down:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Emotion name(s)</li>
                <li>Body sensations</li>
                <li>Urges (what you wanted to do)</li>
                <li>What helped you stay present</li>
                <li>What changed (even slightly)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                FAQs
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Do I have to approve of the emotion?</p>
                  <p className="text-gray-700 ml-4">No. Acceptance is not approval. You're allowing the feeling to exist so it can move through—without adding extra suffering by fighting it.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if the emotion gets stronger when I pay attention to it?</p>
                  <p className="text-gray-700 ml-4">That can happen at first. If intensity rises past what you can safely hold, switch to a crisis skill (TIP, grounding, <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">self-soothe</Link>), then return when you're steadier.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Is this the same as "calming down"?</p>
                  <p className="text-gray-700 ml-4">Not exactly. The goal isn't to force calm. The goal is not getting hijacked. Calm often arrives as a side effect of not feeding the emotion.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if checking my body feels unsafe (trauma, dissociation, sensory overwhelm)?</p>
                  <p className="text-gray-700 ml-4">Then modify the practice:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                    <li>Keep eyes open and focus on the room (external grounding)</li>
                    <li>Name the emotion without body focus</li>
                    <li>Use "hands on object" grounding (texture, temperature)</li>
                    <li>Do a shorter timer (30–60 seconds)</li>
                    <li>Return to the feelings wheel first, then body later</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What's the difference between this and suppressing emotions?</p>
                  <p className="text-gray-700 ml-4">Suppressing is "go away." Mindful emotion is "you can be here, and I won't obey you."</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if I'm not sure what I'm feeling?</p>
                  <p className="text-gray-700 ml-4">Use the "Check Into Your Body" flow first (body scan or feelings wheel). <Link href="/pages/emotional-regulation/mindful-emotions" className="text-blue-600 hover:text-blue-800 underline">Mindful emotions</Link> works best when you can name at least one feeling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/mindful-emotions-interact.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Worksheet
        </a>
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

