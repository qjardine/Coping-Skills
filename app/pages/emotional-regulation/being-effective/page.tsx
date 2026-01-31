'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function BeingEffectivePage() {
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
            Being Effective (Emotion Regulation)
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                What it is
              </h2>
              <p className="text-gray-700 mb-4">
                In DBT, being effective means focusing on what works to meet your needs and move toward your goals—rather than what's "fair," what you wish were true, or what would feel satisfying in the moment. It's choosing actions that actually <Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">improve</Link> outcomes.
              </p>
              <p className="text-gray-700">
                When you do what works (even in tiny steps), you're more likely to get results—and results create relief, confidence, and positive emotion over time. Emotion Regulation skills also target learning emotions, changing unwanted emotions, increasing pleasant emotions, and reducing vulnerability to "emotion mind."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                When to use "Be Effective"
              </h2>
              <p className="text-gray-700 mb-3">Use it when you notice:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>You're stuck in "should," "it's unfair," "they always," "I can't," or replaying arguments</li>
                <li>You're spending energy on winning / proving / punishing / getting validation</li>
                <li>You're overwhelmed and need the smallest next move</li>
                <li>You're tempted to avoid basics (food, shower, email, meds, sleep) because it "doesn't matter"</li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                Not the vibe: Being effective is not "being nice," "being perfect," or "doing everything." It's strategic and values-aligned.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                The Core Question
              </h2>
              <p className="text-gray-700 mb-2">Before you act, ask:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>What's my goal in this situation? (today / this hour)</li>
                <li>What action moves me 1 step closer?</li>
                <li>What would I do if I were being effective, not right?</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                Step-by-step: The "Effective" Micro-Plan (5–10 minutes)
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 1) Name the situation (1 sentence)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">"Right now I'm ___ and the problem is ___."</p>
                <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I'm overwhelmed and my inbox is scaring me."</li>
                  <li>"I'm sad and avoiding basic tasks."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 2) Pick ONE goal (make it tiny)
                </h3>
                <p className="text-gray-700 mb-2">Choose the smallest real outcome you want:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"Lower distress from 8/10 to 6/10"</li>
                  <li>"Make future-me's morning easier"</li>
                  <li>"Get unstuck for 5 minutes"</li>
                  <li>"Finish the next step, not the whole thing"</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 3) Choose the smallest next action
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Pick one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>2-minute action (starter)</li>
                  <li>5-minute action (momentum)</li>
                  <li>10-minute action (mini-sprint)</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Open doc, write 3 bullet points</li>
                  <li>Put clothes in hamper</li>
                  <li>Drink water + eat anything with protein</li>
                  <li>Reply to one email with a template</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 4) Remove friction (ND-friendly)
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Choose one support:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Set a visual timer</li>
                  <li>Body double (Discord call, co-working, silent buddy)</li>
                  <li>"Only needs to be 60% done"</li>
                  <li>Convert to a checklist with 3 steps</li>
                  <li>Reduce sensory load (lights down, headphones, comfy clothes)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 5) Do the action + <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link>
                </h3>
                <p className="text-gray-700">
                  When timer ends: <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> and reassess. Success = you did the step.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Step 6) <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">Give</Link> credit (out loud)
                </h3>
                <p className="text-gray-700 font-semibold">
                  "I did the effective thing. That counts."
                </p>
                <p className="text-gray-700 mt-2">
                  This trains your brain to associate effectiveness with safety and progress.
                </p>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Daily Worksheet: Short-Term Goals (Today)
                </h3>
                <p className="text-gray-700 mb-2">Write 3–6 items max.</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Short-term goals for today → steps to reach them</strong></p>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Basic care: (food / water / meds / rest) → "Do it now / set reminder / prep"</li>
                    <li>One responsibility: → "First step only"</li>
                    <li>One environment reset: → "5-minute tidy"</li>
                    <li>One connection: → "text one person / show up briefly"</li>
                  </ol>
                  <p className="mt-3 font-medium">Example:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Eat breakfast → choose food → get ingredients → eat → dishes later</li>
                    <li>Start postponed work task → open email thread → write 2-sentence reply draft → send or save</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Long-Term Goals: Build a "Life Worth Living" Thread
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">Step 1) Brainstorm without "should"</p>
                    <p className="text-gray-700 ml-4">
                      List things you actually care about (learning, art, community, friendships, health, craft, independence).
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">Step 2) Choose ONE long-term goal</p>
                    <p className="text-gray-700 ml-4">Make it specific enough to act on.</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">Step 3) Break into milestones</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Week 1: research / set up / tiny practice</li>
                      <li>Week 2: repeatable routine</li>
                      <li>Month 1: first visible output (draft, class, application, small project)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">Step 4) Pick the next step (today)</p>
                    <p className="text-gray-700 ml-4">If it's not actionable today, it's not a step yet.</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Common "Not Effective" Traps (and quick re-frames)
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Trap:</strong> "I don't feel motivated."<br />
                  <strong>Effective:</strong> "Motivation often follows action. I'll do 5 minutes."</p>
                  <p className="text-gray-700"><strong>Trap:</strong> "If I can't do it all, why start?"<br />
                  <strong>Effective:</strong> "Partial completion reduces future suffering."</p>
                  <p className="text-gray-700"><strong>Trap:</strong> "I need the perfect plan."<br />
                  <strong>Effective:</strong> "I need a starter step. Plans can <Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">improve</Link> after movement."</p>
                  <p className="text-gray-700"><strong>Trap:</strong> "I have to fix my feelings first."<br />
                  <strong>Effective:</strong> "Sometimes I act first so feelings can settle."</p>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Tiny scripts you can reuse
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"My goal is ___, so the effective move is ___."</li>
                  <li>"I can be upset and still choose what works."</li>
                  <li>"This is a 'next-step' moment, not a 'solve my life' moment."</li>
                  <li>"I'm choosing effectiveness over intensity."</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-16 md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
      >
        Return to Landing
      </button>
    </div>
  );
}
