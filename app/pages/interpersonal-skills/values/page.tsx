'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ValuesPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleDownload = () => {
    window.open('/assets/Worksheets/values.pdf', '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Find Your Values
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Values are your morals, ethics, principles, and priorities—the things that make life feel meaningful and guide how you want to live. In DBT, values help you build a "life worth living" by giving you direction when emotions, stress, or relationship conflict make decision-making feel messy or urgent.
              </p>

              <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 font-medium mb-2">When you know your values, you can:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>make choices that you're more likely to respect later</li>
                  <li>tolerate hard situations with more purpose ("I'm doing this for something")</li>
                  <li>spot when you're being pulled off-course (people-pleasing, avoidance, self-abandonment)</li>
                  <li>plan goals that actually fit you (not someone else's expectations)</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                This page pairs DBT's Values & Priorities List (from Marsha M. Linehan's DBT skills materials) with a simple way to turn values into real-world actions.
              </p>

              <button
                onClick={handleDownload}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4"
              >
                Download the worksheet (PDF)
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Values vs goals
              </h2>
              <p className="text-gray-700 mb-4">
                Values are ongoing directions (like "connection," "learning," "freedom").
                <br />
                Goals are specific targets (like "text two friends weekly," "apply for three jobs," "cook twice this week").
              </p>

              <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
                <p className="text-gray-700 font-medium mb-2">A helpful rule:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Values = compass</li>
                  <li>Goals = map</li>
                  <li>Skills = how you travel when it gets hard</li>
                </ul>
              </div>

              <p className="text-gray-700">
                If you already have a <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> page on your site, link it here—values work best when chosen from Wise Mind, not from shame or fear.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) How to identify your values
              </h2>
              <p className="text-gray-700 mb-3">
                Use any of these prompts (pick the ones that actually spark something):
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>When were you happiest? What were you doing? Who were you with?</li>
                <li>When were you most proud of yourself?</li>
                <li>When have you felt most fulfilled or "this matters"?</li>
                <li>What are your special interests (or recurring fixations)?</li>
                <li>What do you feel strongly about (injustice, care, freedom, art, learning, community)?</li>
                <li>When have you stood up for something—even quietly?</li>
                <li>When do you feel most like yourself?</li>
              </ul>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded border border-yellow-200">
                <strong>Neurodivergent-friendly tip:</strong> if memories are fuzzy, use present-moment clues: what topics energize you, what environments feel safe, what kinds of people you keep returning to.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Use the DBT Values & Priorities List
              </h2>
              <p className="text-gray-700 mb-4">
                The worksheet includes a set of value "domains" you can explore, with example priorities under each. These domains include: relationships, belonging/group, influence/power, achievement, pleasure, excitement/adventure, respect/tradition, self-direction, spirituality, security, fairness/open-mindedness/nature, community contribution, self-development, and integrity.
              </p>

              <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">How to do it (10–20 minutes)</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Skim the headings first (A–O).</li>
                  <li>Circle 3–7 domains that feel important in your Wise Mind, not just what you "should" pick.</li>
                  <li>Within each chosen domain, check 2–5 specific priorities that fit you.</li>
                  <li>Add your own "Other:" items (your list is allowed to be personal).</li>
                </ol>
              </div>

              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200 font-medium">
                <strong>The DBT rule that helps most:</strong> Choose what matters to you, not what feels currently possible. Depression/anxiety/burnout can shrink your sense of possibility; values are bigger than your current capacity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Make your values concrete
              </h2>
              <p className="text-gray-700 mb-4">
                Values get powerful when you define what they look like in real life.
              </p>

              <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                <p className="text-gray-700 mb-3 font-semibold">Pick one value and fill this in:</p>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <strong>My value:</strong> __________
                  </div>
                  <div>
                    <strong>When I'm living it, it looks like:</strong>
                    <div className="ml-4 mt-1">_______________</div>
                  </div>
                  <div>
                    <strong>When I'm off-track, it looks like:</strong>
                    <div className="ml-4 mt-1">_______________</div>
                  </div>
                  <div>
                    <strong>One tiny action (5 minutes or less) that moves me toward it:</strong> __________
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <p className="text-gray-700 mb-2 font-semibold">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Connection</strong> → send one "thinking of you" text; join a group chat; show up to one event.</li>
                  <li><strong>Integrity</strong> → tell the truth kindly; repair after harm; keep one promise to yourself.</li>
                  <li><strong>Learning</strong> → watch a short tutorial; read 2 pages; ask one question.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) It's okay to have different values in different areas
              </h2>
              <p className="text-gray-700 mb-4">
                Many people find it helpful to define values by context:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="font-semibold mb-2 text-gray-800">My Social Values</h3>
                  <p className="text-gray-700">What I prioritize with friends/community (ex: connection, humor, reciprocity).</p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="font-semibold mb-2 text-gray-800">My Personal Values</h3>
                  <p className="text-gray-700">What I prioritize for my inner life (ex: self-respect, creativity, rest, growth).</p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="font-semibold mb-2 text-gray-800">My Political Values</h3>
                  <p className="text-gray-700">What I prioritize in the world (ex: fairness, freedom, mutual aid, dignity).</p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="font-semibold mb-2 text-gray-800">My Work/Study Values</h3>
                  <p className="text-gray-700">What I prioritize in how I work (ex: sustainability, learning, impact, autonomy).</p>
                </div>
              </div>

              <p className="text-gray-700 mt-4 italic">
                It's normal for these to overlap—and normal for them to evolve.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Turn values into priorities and goals
              </h2>
              <p className="text-gray-700 mb-4">
                Pick your top 3 values and create a simple "values → goals" chain:
              </p>

              <div className="bg-gray-50 p-6 rounded border border-gray-200 space-y-4">
                <div>
                  <p className="font-semibold mb-2 text-gray-800">Value 1: __________</p>
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                    <li>One goal for this month: __________</li>
                    <li>Two weekly actions:
                      <div className="ml-6 mt-1">• __________</div>
                      <div className="ml-6">• __________</div>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-gray-800">Value 2: __________</p>
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                    <li>One goal for this month: __________</li>
                    <li>Two weekly actions:
                      <div className="ml-6 mt-1">• __________</div>
                      <div className="ml-6">• __________</div>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-gray-800">Value 3: __________</p>
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                    <li>One goal for this month: __________</li>
                    <li>Two weekly actions:
                      <div className="ml-6 mt-1">• __________</div>
                      <div className="ml-6">• __________</div>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                <strong>Capacity rule:</strong> In burnout or crisis, your "weekly actions" might be tiny. A 1% action still points your life in the right direction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) When values conflict
              </h2>
              <p className="text-gray-700 mb-4">
                Sometimes two values pull in opposite directions (common examples: freedom vs security, honesty vs harmony, connection vs rest).
              </p>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <p className="text-gray-700 mb-3 font-semibold">Try this quick DBT-style approach:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Name the conflict: "Part of me values ___, and part of me values ___."</li>
                  <li>Ask <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link>: "What's the most effective choice right now?"</li>
                  <li>Choose a "both-and" micro-plan:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>"I value connection and rest → I'll reply with a short text and reschedule."</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Use your site skills to live your values
              </h2>
              <p className="text-gray-700 mb-4">
                Values aren't just "nice ideas"—they're what you come back to when urges, anxiety, or shutdown try to steer you.
              </p>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="text-gray-700 mb-3 font-semibold">Add a short "skills menu" under your values plan:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>When emotions are intense → use <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">RAIN</Link> (to unblend from shame/fear)</li>
                  <li>When urges spike → use <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">Urge Surfing</Link> (ride the wave without acting)</li>
                  <li>When capacity drops → use your <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">Care Plan</Link> (accommodations + support)</li>
                  <li>When safety is at risk → use your <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> (scripts + safe people)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Printable worksheet
              </h2>
              <p className="text-gray-700 mb-4">
                Use the DBT Values & Priorities List to circle domains and check priorities:
              </p>
              <button
                onClick={handleDownload}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Download: DBT Values & Priorities List (PDF)
              </button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">
                  Wise Mind
                </Link>
                <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">
                  RAIN Mindfulness
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">
                  Urge Surfing
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
                </Link>
                <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">
                  Create a Crisis Plan
                </Link>
                <Link href="/pages/interpersonal-skills/interpersonal-skills" className="text-blue-600 hover:text-blue-800 underline">
                  Interpersonal Effectiveness
                </Link>
                <Link href="/pages/emotional-regulation/self-validation" className="text-blue-600 hover:text-blue-800 underline">
                  Self-Validation
                </Link>
                <Link href="/pages/emotional-regulation/self-compassion" className="text-blue-600 hover:text-blue-800 underline">
                  Self-Compassion
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
