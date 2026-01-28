'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function AbcPleasePage() {
  const router = useRouter();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.tooltip-container') && !target.closest('.tooltip-button')) {
        setActiveTooltip(null);
      }
    };

    if (activeTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeTooltip]);

  const toggleTooltip = ({ tooltipId }: { tooltipId: string }) => {
    if (activeTooltip === tooltipId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };

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
            <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link> (Reduce Vulnerability + Build Emotional Resilience)
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Emotion Regulation is the DBT module that teaches how emotions work and how to manage them instead of being managed by them. One of the biggest "hidden" drivers of emotional overwhelm is vulnerability: when your body is run down, your stress threshold drops and your emotions hit harder, faster, and longer.
              </p>
              <p className="text-gray-700 mb-4">
                ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link> is a foundational DBT skill (from Emotion Regulation) that helps you lower vulnerability and raise resilience by taking care of your body and your emotional baseline. It's not about perfection. It's about giving your nervous system a fair shot.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                What is <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link>?
              </h2>
              <p className="text-gray-700 mb-4">
                ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link> is two skill sets working together:
              </p>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">ABC (build positive emotional strength)</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>A</strong> — Accumulate positive emotions (short-term + long-term)</li>
                  <li><strong>B</strong> — <Link href="/pages/emotional-regulation/build-mastery" className="text-blue-600 hover:text-blue-800 underline">Build mastery</Link></li>
                  <li><strong>C</strong> — <Link href="/pages/emotional-regulation/cope-ahead" className="text-blue-600 hover:text-blue-800 underline">Cope ahead</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-700 font-semibold mb-2">PLEASE (reduce physical vulnerability)</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>PL</strong> — Treat Physical illness</li>
                  <li><strong>E</strong> — Eat balanced meals</li>
                  <li><strong>A</strong> — Avoid mood-altering substances</li>
                  <li><strong>S</strong> — Sleep enough</li>
                  <li><strong>E</strong> — Exercise regularly</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-4 text-sm italic">
                <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link> is widely taught as part of DBT's Emotion Regulation skills and is meant to prevent emotional crises by strengthening your baseline.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                When to use <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link> (and when not to)
              </h2>
              <p className="text-gray-700 mb-3">Use ABC PLEASE when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>You're noticing more emotional reactivity than usual</li>
                <li>You've been sleep-deprived, underfed, sick, isolated, or burned out</li>
                <li>You keep thinking: "Why is everything hitting me so hard lately?"</li>
                <li>You're trying to prevent the next spiral (this is the point of the skill)</li>
              </ul>
              <p className="text-gray-700 mb-2 font-semibold">Don't use <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link> as your first tool when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>You're in active crisis (panic, urge-to-act-now, self-harm urges, extreme escalation)</li>
                <li>You're too dysregulated to plan, eat, sleep, or problem-solve</li>
              </ul>
              <p className="text-gray-700 mt-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                In those moments, start with Distress Tolerance crisis skills (like STOP, TIPP, ACCEPTS), then come back to <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link> once intensity drops.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                ABC: Build Positive Emotional Strength
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  A — Accumulate Positive Emotions
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Short-term positive experiences: do one small pleasant thing on purpose.</p>
                <p className="text-gray-700 mb-2 ml-4">Examples (keep it tiny on low-capacity days):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                  <li>Watch a short funny clip</li>
                  <li>Sit in the sun for 2 minutes</li>
                  <li>Pet an animal</li>
                  <li>Listen to one song you love</li>
                  <li>Make a warm drink</li>
                </ul>
                <p className="text-gray-700 mt-3 mb-2 font-medium">Long-term positive experiences: build a life you want to be in.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>values-based projects</li>
                  <li>hobbies</li>
                  <li>relationships</li>
                  <li>learning goals</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  Why it works: regular positive experiences don't "erase" pain, but they increase emotional buffering and reduce the sense that life is only stress.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  B — <Link href="/pages/emotional-regulation/build-mastery" className="text-blue-600 hover:text-blue-800 underline">Build Mastery</Link>
                </h3>
                <p className="text-gray-700 mb-2">Do one thing daily that creates a sense of competence. It should be:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>a little challenging</li>
                  <li>doable</li>
                  <li>measurable</li>
                </ul>
                <p className="text-gray-700 mb-2 ml-4">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                  <li>clean one surface</li>
                  <li>practice a skill for 5 minutes</li>
                  <li>finish one avoided task step</li>
                  <li>learn one new recipe component</li>
                  <li>organize one folder</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  Mastery is an antidote to helplessness: "I can do hard things."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  C — <Link href="/pages/emotional-regulation/cope-ahead" className="text-blue-600 hover:text-blue-800 underline">Cope Ahead</Link>
                </h3>
                <p className="text-gray-700 mb-2">Pick a likely stressor and rehearse skillful coping before it happens.</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Name the situation (be specific).</li>
                  <li>Predict emotions + urges.</li>
                  <li>Choose skills (STOP, DEAR MAN, <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">self-soothe</Link>, etc.).</li>
                  <li>Visualize yourself doing it effectively.</li>
                  <li>Relax afterward.</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  This is "practice runs for your nervous system."
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link>: Take Care of Your Body So It Supports Your Mind
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  PL — Treat Physical Illness
                </h3>
                <p className="text-gray-700 mb-2">When your body is unwell, your emotional threshold drops. Do the basics:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>take meds as prescribed</li>
                  <li>follow up on symptoms</li>
                  <li>rest and hydrate</li>
                  <li>get support when needed</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  E — Eat Balanced Meals
                </h3>
                <p className="text-gray-700 mb-2">You don't need a perfect diet. The goal is stability:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>avoid long gaps without food</li>
                  <li>aim for predictable meals/snacks</li>
                  <li>include protein/fat/fiber when possible (helps prevent energy crashes)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  A — Avoid Mood-Altering Substances
                </h3>
                <p className="text-gray-700 mb-2">Mood-altering substances (alcohol/drugs and sometimes heavy caffeine use) can increase emotional volatility and impulsivity for many people.</p>
                <p className="text-gray-700 ml-4">If you use them, do a <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> check:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                  <li>Is this helping my stability… or borrowing relief from tomorrow?</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  S — Sleep Enough
                </h3>
                <p className="text-gray-700 mb-2">Most adults function best with roughly 7–9 hours, though needs vary. Even a few nights of poor sleep can make emotions feel "louder" and harder to regulate.</p>
                <p className="text-gray-700 ml-4">If sleep is hard: focus on consistency first (same wake time, wind-down routine, lower stimulation).</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  E — Exercise Regularly
                </h3>
                <p className="text-gray-700 mb-2">Movement supports mood and stress regulation. It doesn't have to be intense:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>short walk</li>
                  <li>stretching</li>
                  <li>dancing to one song</li>
                  <li>gentle body-weight movement</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  Even small amounts count. Physical activity is recognized in public health guidance as supportive for mental well-being and stress resilience.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                A practical <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link> plan (pick the "minimum viable" version)
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  The 10-minute baseline (low energy / low capacity)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>A:</strong> one pleasant thing (2 minutes)</li>
                  <li><strong>B:</strong> one mastery step (5 minutes)</li>
                  <li><strong>C:</strong> one "<Link href="/pages/emotional-regulation/cope-ahead" className="text-blue-600 hover:text-blue-800 underline">cope ahead</Link>" sentence ("If X happens, I will do <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> + leave the room for 2 minutes.")</li>
                  <li><strong><Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link>:</strong> drink water + eat something + 2 minutes of movement</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  The steady baseline (moderate capacity)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>A:</strong> one pleasant activity + one long-term investment per week</li>
                  <li><strong>B:</strong> 10–20 minutes of mastery 3–5x/week</li>
                  <li><strong>C:</strong> rehearse before known triggers (appointments, family events, work meetings)</li>
                  <li><strong><Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link>:</strong> consistent meals, sleep routine, movement most days</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Neurodivergence-friendly adjustments (ADHD/autism/trauma)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Use menus instead of plans (choose from 3 options, not 30)</li>
                  <li>Keep tasks sensory-safe (lighting, textures, noise)</li>
                  <li>Make steps visible (checklists, timers, sticky notes)</li>
                  <li>Use "body doubling" for mastery tasks</li>
                  <li>Allow "same-food" meals and "parallel play" <Link href="/pages/emotional-regulation/pleasant-activities" className="text-blue-600 hover:text-blue-800 underline">pleasant activities</Link></li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Worksheet prompts (copy/paste)
              </h3>
              <div className="space-y-1 text-gray-700 text-sm">
                <p><strong>A — Accumulate positives</strong></p>
                <p className="ml-4">Short-term (today): ______________________</p>
                <p className="ml-4">Long-term (this week): ___________________</p>
                <p className="mt-2"><strong>B — Build mastery (small win)</strong></p>
                <p className="ml-4">Mastery task: ___________________________</p>
                <p className="ml-4">Smallest step: __________________________</p>
                <p className="mt-2"><strong>C — Cope ahead</strong></p>
                <p className="ml-4">Situation: ______________________________</p>
                <p className="ml-4">Emotions/urges: _________________________</p>
                <p className="ml-4">Skills I'll use: _________________________</p>
                <p className="ml-4">If things go sideways, I will: ___________</p>
                <p className="mt-2"><strong>PLEASE</strong></p>
                <p className="ml-4">Physical illness support I need: __________</p>
                <p className="ml-4">Next meal/snack plan: ___________________</p>
                <p className="ml-4">Substances to reduce/avoid: ______________</p>
                <p className="ml-4">Sleep support tonight: ___________________</p>
                <p className="ml-4">Movement option: ________________________</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                FAQs
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Do I have to do all of <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link></Link> every day?</p>
                  <p className="text-gray-700 ml-4">No. The skill works through consistency over time. Even doing one piece helps.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if I'm too depressed to do any of it?</p>
                  <p className="text-gray-700 ml-4">Go smaller. "2 minutes counts." Start with <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link> basics (water/food/rest), then add a tiny mastery step.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Is ABC <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link> a crisis skill?</p>
                  <p className="text-gray-700 ml-4">Not primarily. It's a prevention skill. Use crisis skills first if you're in immediate danger of acting on urges or spiraling.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Related pages
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><Link href="/pages/emotional-regulation/pleasant-activities" className="text-blue-600 hover:text-blue-800 underline">Pleasant Activities</Link> (lists + practicality tiers)</li>
                <li><Link href="/pages/emotional-regulation/build-mastery" className="text-blue-600 hover:text-blue-800 underline">Build Mastery</Link></li>
                <li><Link href="/pages/emotional-regulation/cope-ahead" className="text-blue-600 hover:text-blue-800 underline">Cope Ahead</Link></li>
                <li><Link href="/pages/emotional-regulation/being-effective" className="text-blue-600 hover:text-blue-800 underline">Being Effective</Link></li>
                <li><Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">Sleep</Link> / <Link href="/pages/distress-tolerance/nightmare-protocol" className="text-blue-600 hover:text-blue-800 underline">Nightmare Protocol</Link></li>
                <li><Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">Distress Tolerance</Link>: <Link href="/pages/interpersonal-skills/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>, <Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>, <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link>, <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros & Cons</Link>, Urge Surfing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/DBT-PLEASE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
        </a>
        <a
          href="/assets/Worksheets/please-interact.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Interactive Worksheet
        </a>
        <a
          href="/assets/Worksheets/DBT-PLEASE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          DBT-PLEASE Worksheet
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
