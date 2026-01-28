'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function InterpersonalIntensityPage() {
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
            <Link href="/pages/interpersonal-skills/interpersonal-intensity" className="text-blue-600 hover:text-blue-800 underline">Interpersonal Intensity</Link>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                How intense should my request or "no" be? (DBT Interpersonal Effectiveness)
              </h2>
              <p className="text-gray-700 mb-4">
                Sometimes the problem isn't what you're going to say (<Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>) or how you'll say it (<Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>/<Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>). It's how strongly to come in.
              </p>
              <p className="text-gray-700">
                This page helps you match your intensity to the situation—so you don't hint when you need to be firm, and you don't go "full force" when a lighter approach would work better.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                When to use this
              </h2>
              <p className="text-gray-700 mb-3">Use this page before you:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Make a request (ask for help, change, time, money, space, clarity, repair)</li>
                <li>Say no (refuse, set a limit, delay, renegotiate)</li>
                <li>Feel stuck between "I'm being too much" vs "I'm disappearing"</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: Determine your intensity
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — Pick ONE lane
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Choose one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>I am ASKING for something, or</li>
                  <li>I am SAYING NO / refusing something</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Don't answer both sets. Pick the one you're doing right now.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — Name your 3 priorities
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Quick check:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Objectives: How important is it to get what I want?</li>
                  <li>Relationship: How fragile/tenuous is this relationship right now?</li>
                  <li>Self-respect: Is my self-respect or values on the line?</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Rule of thumb:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Higher objective importance → more intensity</li>
                  <li>More relationship fragility → consider lowering intensity (or using extra <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>)</li>
                  <li>Self-respect on the line → intensity should match your values (don't abandon you)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — Do the Yes/No intensity checklist
                </h3>
                <p className="text-gray-700 mb-3">
                  Circle YES or NO for each factor below.
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 font-semibold mb-2">1) PRIORITIES</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Objectives very important? YES / NO (asking)</li>
                      <li>Relationship very tenuous? YES / NO (asking — if YES, consider lowering intensity)</li>
                      <li>Self-respect on the line? YES / NO (both — let values guide)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-2">2) CAPABILITIES</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Does the person have what you want? YES / NO (asking)</li>
                      <li>Do I have what the other person wants? YES / NO (saying no)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-2">3) TIMELINESS</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Is this a good time to ask (attention, mood, bandwidth)? YES / NO (asking)</li>
                      <li>Is this a bad time to say no? YES / NO (saying no)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-2">4) HOMEWORK</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Do I know the facts + my goal + my request clearly? YES / NO (asking)</li>
                      <li>Is the other person's request clear? YES / NO (saying no)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-2">5) AUTHORITY / OBLIGATION</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Are they required (law/moral code/role) to <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link> what I'm asking? YES / NO (asking)</li>
                      <li>Am I required to comply—would saying no violate their rights? YES / NO (saying no)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-2">6) RELATIONSHIP FIT</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Is what I want appropriate to our relationship? YES / NO (asking)</li>
                      <li>Is their request appropriate to our relationship? YES / NO (saying no)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-2">7) RECIPROCITY</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Have I done at least as much / am I willing to <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link> too? YES / NO (asking)</li>
                      <li>Do I owe them / do they <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link> me a lot? YES / NO (saying no)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-2">8) GOALS OVER TIME</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Would being submissive create long-term problems? YES / NO (asking)</li>
                      <li>Is short-term peace more important than long-term relationship health? YES / NO (saying no)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mb-2">9) RESPECT / HELPLESSNESS CHECK</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Am I avoiding helplessness (I can do some parts myself)? YES / NO (asking)</li>
                      <li>Will saying no wreck my self-respect? Does <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> say "no is right"? YES / NO (saying no)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — Add up your score
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>If you're ASKING: count your total YES</li>
                  <li>If you're SAYING NO: count your total NO</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  (That's the pattern used in the worksheet: YES's drive asking intensity; NO's drive refusal intensity.)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5 — Convert your score to an intensity level
                </h3>
                <p className="text-gray-700 mb-3">Use the chart:</p>

                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">ASKING (Total YES) → Intensity Rating</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>6 = Ask firmly, insist</li>
                    <li>5 = Ask firmly, resist "no"</li>
                    <li>4 = Ask firmly, take "no"</li>
                    <li>3 = Ask tentatively, take "no"</li>
                    <li>2 = Hint openly, take "no"</li>
                    <li>1 = Hint indirectly, take "no"</li>
                    <li>0 = Don't ask, don't hint (do what they want without being asked)</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">SAYING NO (Total NO) → Intensity Rating</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>6 = Refuse firmly, don't <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link> in</li>
                    <li>5 = Refuse firmly, resist giving in</li>
                    <li>4 = Refuse firmly but reconsider</li>
                    <li>3 = Express unwillingness</li>
                    <li>2 = Express unwillingness but say yes</li>
                    <li>1 = Express hesitancy but say yes</li>
                    <li>0 = Do what they want without being asked</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 6 — Match intensity to skills
                </h3>
                <p className="text-gray-700 mb-2">Now choose the "toolkit" that fits your intensity:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>High intensity (5–6): <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> + <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>, minimal negotiation, strong boundary language</li>
                  <li>Medium (3–4): <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> + <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>, clear ask/no with room to negotiate</li>
                  <li>Low (0–2): gentle/brief communication; maybe you're gathering info first, or choosing acceptance</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 7 — Write your one-sentence script
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Fill one:</p>
                <p className="text-gray-700 mb-2 ml-4">
                  <strong>Asking:</strong><br />
                  "I'm asking for ___ by ___. If that doesn't work, I can do ___."
                </p>
                <p className="text-gray-700 ml-4">
                  <strong>Saying no:</strong><br />
                  "I can't ___ . What I can do is ___ / I'm available ___."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 8 — Reality-check after
                </h3>
                <p className="text-gray-700 mb-2">After the interaction:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Did I come in too hot? too soft?</li>
                  <li>Did I protect self-respect?</li>
                  <li>What would <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> adjust next time—timing, clarity, or intensity?</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Quick examples
                </h3>
                <div className="mb-3">
                  <p className="text-gray-700 font-semibold mb-1">Example A: Asking (Intensity 5)</p>
                  <p className="text-gray-700 ml-4">
                    You need a deadline change, you've been reliable, it's appropriate, timing is decent.<br />
                    Approach: Ask firmly + resist no.<br />
                    Script: "I need a 48-hour extension. If that's not possible, I can submit part one by Friday and the rest Monday."
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Example B: Saying No (Intensity 6)</p>
                  <p className="text-gray-700 ml-4">
                    Someone keeps pushing a boundary you've stated, and you feel self-respect on the line.<br />
                    Approach: Refuse firmly, don't <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link> in.<br />
                    Script: "No. I'm not available for that. <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">Please</Link> <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> asking."
                  </p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  If this feels extra hard (very common)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>If you freeze/fawn: start with writing the script, then practice out loud once.</li>
                  <li>If you escalate: do a quick nervous system reset first (<Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>/breath), then use the chart.</li>
                  <li>If you're neurodivergent: it can help to pre-select 2–3 "default scripts" for common situations (plans changing, overstimulation, work asks), so you're not improvising under pressure.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/int-modulating-intensity.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
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
