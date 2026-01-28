'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function AwarenessPage() {
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
            Mindful Practice of Awareness (DBT) — for <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                These <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> exercises help you practice accepting reality as it is. In DBT, <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link> is supported by:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>mindfulness of your breath,</li>
                <li><Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link>, and willing hands,</li>
                <li>and the repeated choice called <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link> (choosing acceptance again and again).</li>
              </ul>
              <p className="text-gray-700">
                This page gives you simple, step-by-step "<Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> practices" you can do in daily life.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-3">Use this when you're stuck in:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>"This shouldn't be happening."</li>
                <li>"I can't stand this."</li>
                <li>"Why is it like this?"</li>
                <li>looping resentment, fighting reality, or feeling trapped.</li>
              </ul>
              <p className="text-gray-700">
                The goal is not to approve of what happened. The goal is to <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> adding extra suffering by fighting what's already true.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Before you start (20 seconds)
              </h2>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Check safety. If you feel unsafe doing internal body focus, keep eyes open and use external anchors (sounds, objects, room details).</li>
                <li>Choose a time: 1 minute, 3 minutes, or 10 minutes.</li>
                <li>Set your intention: "I'm practicing <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> to help acceptance."</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                DBT "setup" (optional but powerful)
              </h2>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-smile</Link> + willing hands (30 seconds)
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Soften your face slightly into a gentle <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link> (not forced).</li>
                <li>Rest your hands open on your lap, palms up or relaxed.</li>
                <li>Take 3 slow breaths, longer exhale than inhale.</li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                If this feels weird or unsafe, skip it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Choose one <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> practice
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option 1: Body Positions <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">Awareness</Link> (anytime, anywhere)
                </h3>
                <p className="text-gray-700 mb-3">
                  This practice builds acceptance by noticing: "This is the position I'm in right now."
                </p>
                <p className="text-gray-700 mb-2 font-medium">Steps</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Notice your breath (no need to change it).</li>
                  <li>Notice your body position: walking / standing / sitting / lying.</li>
                  <li>Name it silently: "Standing." "Sitting."</li>
                  <li>Ask: "What's the purpose of this position right now?"
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"I'm sitting to rest."</li>
                      <li>"I'm standing to get ready."</li>
                      <li>If there's no purpose: "No purpose right now, and that's okay."</li>
                    </ul>
                  </li>
                  <li>When your mind wanders, return to one phrase: "Sitting." "Standing."</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  (That return is "<Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link>" in a tiny form: back to reality, again.)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option 2: Connection to the Universe <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">Awareness</Link> (grounded, supportive)
                </h3>
                <p className="text-gray-700 mb-3">
                  This practice uses contact points (feet on floor, body on chair) to feel supported.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Steps</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Find one contact point:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>feet on the floor, back on the chair, hands on fabric, air on skin.</li>
                    </ul>
                  </li>
                  <li>Describe it (neutral facts):
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"Firm." "Soft." "Warm." "Cool."</li>
                    </ul>
                  </li>
                  <li>Ask: "What does this object do for me right now?"
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Floor: holds me up.</li>
                      <li>Chair: supports my back.</li>
                      <li>Blanket: keeps me warm.</li>
                    </ul>
                  </li>
                  <li>Let yourself feel one small sense of support:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"I am being held up."</li>
                    </ul>
                  </li>
                  <li>If you can, add <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link> for 2 breaths.</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  DBT <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link> practice often pairs breath + <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link>/willing hands with noticing what feels "unacceptable," while gently turning toward acceptance.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option 3: Making Tea or Coffee Awareness (a moving <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">meditation</Link>)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Steps</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Slow down to about half speed.</li>
                  <li>As you move, narrate quietly in your head:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"Hand reaches." "Kettle lifts." "Water pours."</li>
                    </ul>
                  </li>
                  <li>Smell the aroma for one full breath.</li>
                  <li>Feel warmth in the mug for one full breath.</li>
                  <li>If your mind drifts, return to: "Pouring." "Holding."</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  This is DBT mindfulness "One-mindfully": one action at a time, fully.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option 4: Washing the Dishes <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">Awareness</Link> (daily-life mindfulness)
                </h3>
                <p className="text-gray-700 mb-3 text-sm italic">
                  This is adapted from Thich Nhat Hanh's mindfulness practice: dishes as an object of contemplation.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Steps</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Pick one dish. Treat it like the only task in the world for 30 seconds.</li>
                  <li>Feel the water temperature.</li>
                  <li>Notice the texture (slick, smooth, rough).</li>
                  <li>Watch the movement of your hands.</li>
                  <li>Each time your mind runs ahead, return to: "Washing."</li>
                  <li>End with one breath and a tiny <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link>.</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option 5: Cleaning the House <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">Awareness</Link> (stage-by-stage)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Steps</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Choose one small stage:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"Put books away" OR "Sweep one area" OR "Wipe the counter."</li>
                    </ul>
                  </li>
                  <li>Set a gentle timer (3–10 minutes).</li>
                  <li>Move 3x slower than usual for the first minute.</li>
                  <li>Narrate your actions:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"Picking up the book." "Placing it on the shelf."</li>
                    </ul>
                  </li>
                  <li>When thoughts wander, return to breath + your current action word:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"Placing." "Wiping." "Sweeping."</li>
                    </ul>
                  </li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  This uses DBT mindfulness "Observe/Describe/Participate" in real time.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option 6: Slow-Motion Bath or Shower <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">Awareness</Link> (sensory + calming)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Steps</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li><Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">Give</Link> yourself 5 extra minutes if you can.</li>
                  <li>Feel each stream of water on one body area at a time (shoulders, hands, feet).</li>
                  <li>Describe neutrally: "Warm." "Pressure." "Flow."</li>
                  <li>If you notice judgment ("I don't have time"), label it "judging," and return to water sensation.</li>
                  <li>Finish with willing hands + one slow exhale.</li>
                </ol>
                <p className="text-gray-700 mt-3">
                  If body focus feels unsafe: keep eyes open, focus on the sound of water and the feel on your hands only.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option 7: <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">Meditation</Link> <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">Awareness</Link> — "ONE"
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Steps</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Sit comfortably (chair is fine).</li>
                  <li>Eyes closed, or gently open with a soft gaze.</li>
                  <li>On each inhale, say silently: "ONE."</li>
                  <li>On each exhale, say silently: "ONE."</li>
                  <li>When your mind wanders, return gently to "ONE."</li>
                  <li>If you want to move, just notice: "wanting to move." Stay one extra breath, then choose.</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  This is mindfulness practice: returning again and again without punishment.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  If you're using this for <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link> (DBT)
                </h3>
                <p className="text-gray-700 mb-3">After any practice, do this 3-step close:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Name reality (one sentence):
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"This is happening." / "This is what happened."</li>
                    </ul>
                  </li>
                  <li>Turn the mind (choose acceptance for this moment):
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>"I don't like it, but I can <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> fighting what's true."</li>
                    </ul>
                  </li>
                  <li>Willing posture (10 seconds):
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>willing hands + <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link> + long exhale.</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Neurodivergent-friendly adjustments
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Prefer external anchors (sound, object, water, texture) over deep body scanning.</li>
                  <li>Use short reps (30–60 seconds) multiple times instead of one long sit.</li>
                  <li>Use prompts/timers (supports are valid).</li>
                  <li>If overwhelm increases, switch to distress tolerance first, then return later.</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  DBT skills are about effectiveness: the goal is to help you get through the moment with less suffering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-6 right-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50"
      >
        Return to Landing
      </button>
    </div>
  );
}

