'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function TipPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-orange-800">
            Distress Tolerance: TIP (Change Your Body Chemistry Fast)
          </h1>

          <div className="bg-orange-50 backdrop-blur-sm rounded-lg border border-orange-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                1. Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                When you're overwhelmed, your body can go into full alarm—heart racing, shaking, numb, hot, clenched, or unable to think clearly. In DBT, TIP is a crisis skill for turning the intensity down quickly by working with your physiology (not by arguing with your thoughts). TIP stands for Temperature, Intense Exercise, Paced Breathing, Paired Muscle Relaxation.
              </p>
              <p className="text-gray-700">
                Use TIP first when your intensity is high (often 7–10/10), urges feel dangerous, or you can't access Wise Mind yet.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                2. When to Use TIP (and When Not To)
              </h2>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">Use TIP when:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Your body feels "revved up" (panic, rage, agitation, shutdown-with-alarm).</li>
                  <li>You're at risk of impulsive actions (text-bombing, self-harm urges, substance urges, blowing up).</li>
                  <li>You need to get just stable enough to do the next step (<Link href="/pages/interpersonal-skills/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>, <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros/Cons</Link>, <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>).</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-700 font-semibold mb-2">Don't use TIP (or modify it) when:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Temperature:</strong> you have medical reasons to avoid cold exposure (for example certain heart conditions), or cold triggers severe distress. Use paced breathing + muscle relaxation instead.</li>
                  <li><strong>Intense Exercise:</strong> you're injured, faint, medically unsafe to exert, or your body is already overtaxed—choose gentler movement or breathing.</li>
                  <li>If you're in immediate danger, go to <Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">Crisis Help Now</Link> first.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                3. The TIP Menu (Pick 1–2, not all 4)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    T — Temperature (30–60 seconds)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Goal:</strong> trigger a rapid "reset" by using cold safely.
                  </p>
                  <p className="text-gray-700 font-medium mb-2">Options:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>Hold a cold pack to cheeks/eyes (wrapped).</li>
                    <li>Splash cold water on your face.</li>
                    <li>Hold something cold in your hands.</li>
                  </ul>
                  <p className="text-gray-700 text-sm italic">
                    Quick rule: cold should be intense but safe—no pain, no injury, no prolonged exposure.
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    (One reason cold can help is the body's "diving response," which is linked with increased vagal activity in many contexts.)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    I — Intense Exercise (30–120 seconds)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Goal:</strong> burn off adrenaline so your body can settle.
                  </p>
                  <p className="text-gray-700 font-medium mb-2">Options:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>Fast walk, stairs, brisk jumping jacks, shadow boxing (controlled), dancing hard.</li>
                    <li>"Power clean": set a 2-minute timer and move quickly.</li>
                  </ul>
                  <p className="text-gray-700 text-sm italic">
                    Stop if you feel dizzy, unsafe, or pain beyond normal exertion.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    P — Paced Breathing (1–3 minutes)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Goal:</strong> slow the nervous system down.
                  </p>
                  <p className="text-gray-700 font-medium mb-2">Simple version:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>Inhale 4, exhale 6 (or 4/7/8 if you like it).</li>
                    <li>Keep the exhale longer than the inhale.</li>
                  </ul>
                  <p className="text-gray-700 text-sm italic">
                    If counting is stressful: breathe like you're fogging a mirror—slow exhale.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    P — Paired Muscle Relaxation (1–3 minutes)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Goal:</strong> teach the body the difference between tension and release.
                  </p>
                  <p className="text-gray-700 font-medium mb-2">How:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>Tense a muscle group 5 seconds, release 10–15 seconds.</li>
                    <li>Move through: hands → shoulders → jaw → stomach → legs.</li>
                  </ul>
                  <p className="text-gray-700 text-sm italic">
                    This pairing (tension then release) is commonly taught with TIP/TIPP worksheets.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                4. 2-Minute TIP Protocol (Ultra Simple)
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Name intensity: "I'm at a ___/10."</li>
                <li>Choose one:
                  <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                    <li>If your body is panicky/racing → Temperature</li>
                    <li>If you're amped/angry/restless → Intense Exercise</li>
                    <li>If you're spinning/ruminating → Paced Breathing</li>
                    <li>If you're clenched/frozen → Paired Muscle Relaxation</li>
                  </ul>
                </li>
                <li>Re-rate: "Now I'm at a ___/10."</li>
              </ol>
              <p className="text-gray-700 mt-4">
                If it dropped 10%, you're winning—go to your next page (<Link href="/pages/interpersonal-skills/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> / <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros&Cons</Link> / <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                5. Real-Life Example
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Situation:</strong> You get a text that spikes panic. Intensity 9/10.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>TIP plan:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>T: cold pack on cheeks 30 seconds</li>
                <li>P: 4-in / 6-out breathing for 2 minutes</li>
              </ul>
              <p className="text-gray-700">
                <strong>Re-check:</strong> intensity drops to 6/10 → now you can do <Link href="/pages/interpersonal-skills/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> and choose a wise next step.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                6. FAQs
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Do I have to do all four?</p>
                  <p className="text-gray-700 ml-4">
                    No. Pick 1–2 that match your state. Overloading yourself can backfire.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Is TIP "avoiding" the problem?</p>
                  <p className="text-gray-700 ml-4">
                    No. TIP is a stabilizer so you can handle the problem without making it worse.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if TIP doesn't work?</p>
                  <p className="text-gray-700 ml-4">
                    Try a different letter (Temperature → Paced Breathing). If you're still escalating, consider whether you need <Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">Crisis Help Now</Link>.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Can I do TIP silently in public?</p>
                  <p className="text-gray-700 ml-4">
                    Yes: paced breathing + subtle muscle relax + cold drink held to face/hands.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-orange-300">
              <h2 className="text-xl font-semibold mb-4 text-orange-800">
                Related Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/stop')}
                  className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  STOP
                </button>
                <button
                  onClick={() => router.push('/pages/crisis')}
                  className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Am I Overwhelmed?
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/pros-cons')}
                  className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Pros & Cons
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/resistt')}
                  className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Urge Surfing (RESISTT)
                </button>
                <button
                  onClick={() => router.push('/pages/crisis-help-now')}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Crisis Help Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
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
