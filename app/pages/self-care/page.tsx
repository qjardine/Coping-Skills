'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { NextButton } from '@/components/shared/NextButton';

export default function SelfCarePage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/pages/flowchart/gauge-overwhelm');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            <Link href="/pages/self-care" className="text-blue-600 hover:text-blue-800 underline">Self-Care</Link> Check-In
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What this is for
              </h2>
              <p className="text-gray-700">
                In DBT, taking care of your body lowers "emotion vulnerability" (<Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link> skills). When your body is under-resourced, emotions hit harder and coping skills get harder to use.
              </p>
              <p className="text-gray-700 mt-2">
                This page helps you figure out what you need right now, with small actions that don't feel overwhelming.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1 — Pause (10 seconds)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Look around the room.</li>
                <li>Take one slow breath in… and a longer breath out.</li>
                <li>Say: "I'm checking my basics."</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2 — The 4 basics (pick ONE to start)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    A) Hydrated?
                  </h3>
                  <p className="mb-2 text-gray-700 font-medium">Quick check:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>Have I had water in the last few hours?</li>
                    <li>Do I have dry mouth, headache, dizziness, or "fog"?</li>
                  </ul>
                  <p className="mb-2 text-gray-700 font-medium">Do the smallest helpful thing:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Drink 6–10 slow sips of water.</li>
                    <li>If you can: refill your bottle or bring water closer.</li>
                  </ul>
                  <p className="mt-2 text-gray-700 text-sm italic">
                    (You're aiming for "better," not perfect.)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    B) Medicated?
                  </h3>
                  <p className="mb-2 text-gray-700 font-medium">Quick check:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>Did I take my meds as prescribed today / at the right time?</li>
                    <li>Did I miss a dose because I forgot, avoided it, or ran out?</li>
                  </ul>
                  <p className="mb-2 text-gray-700">
                    DBT's <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link> includes taking medications as prescribed as part of caring for physical health.
                  </p>
                  <p className="mb-2 text-gray-700 font-medium">Do the smallest helpful thing:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>If it's time: take your prescribed dose (as directed).</li>
                    <li>If you're unsure or you missed: check your med list / pill organizer / alarm.</li>
                    <li>If you're out: set one tiny next step (request refill, message pharmacy, put it on your calendar).</li>
                  </ul>
                  <p className="mt-2 text-gray-700 text-sm italic">
                    (Don't change doses based on this page—if something feels off, contact your prescriber.)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    C) Nourished?
                  </h3>
                  <p className="mb-2 text-gray-700 font-medium">Quick check:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>When did I last eat something with real fuel (not just caffeine/sugar)?</li>
                    <li>Am I noticing irritability, shakiness, nausea, or "everything feels harder"?</li>
                  </ul>
                  <p className="mb-2 text-gray-700">
                    DBT's <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link> includes balanced eating: not too much, not too little, and eating regularly.
                  </p>
                  <p className="mb-2 text-gray-700 font-medium">Do the smallest helpful thing:</p>
                  <p className="mb-2 text-gray-700">Pick one option that feels possible:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>"Tiny meal": yogurt, oatmeal, soup, sandwich, leftovers.</li>
                    <li>"Tiny snack": nuts, cheese, crackers, banana, granola bar.</li>
                  </ul>
                  <p className="text-gray-700">
                    If choosing food feels hard, use CBT's "make it easier" move:
                  </p>
                  <p className="text-gray-700 ml-4">
                    Lower the bar: "Just eat something in the next 10 minutes."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    D) Rested?
                  </h3>
                  <p className="mb-2 text-gray-700 font-medium">Quick check:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>Did I sleep enough for me?</li>
                    <li>Do I feel heavy, wired-tired, spaced out, or brittle?</li>
                  </ul>
                  <p className="mb-2 text-gray-700">
                    DBT's <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link> also includes sleep enough (sleep strongly affects emotion regulation).
                  </p>
                  <p className="mb-2 text-gray-700 font-medium">Do the smallest helpful thing (choose one):</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>1–3 minutes: sit down, eyes open, breathe slower than usual.</li>
                    <li>10–20 minutes: short rest / nap if possible.</li>
                    <li>Set up tonight: put your phone out of reach, make your room darker/quieter (eye mask, blackout curtains, white noise/earplugs).</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3 — What kind of rest do you need?
              </h2>
              <p className="mb-4 text-gray-700">
                Sometimes "rest" isn't just sleep. Psychology sources describe multiple types of rest (physical, mental, emotional, social, sensory, creative, spiritual).
              </p>
              <p className="mb-4 text-gray-700 font-medium">
                Choose the one that matches what you feel:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Physical rest</h3>
                  <p className="mb-1 text-gray-700"><strong>For:</strong> low energy, tense muscles, body fatigue</p>
                  <p className="text-gray-700"><strong>Try:</strong> nap, gentle stretching, warm shower, massage, lighter movement instead of a hard workout.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Mental rest</h3>
                  <p className="mb-1 text-gray-700"><strong>For:</strong> racing thoughts, brain fog, burnout</p>
                  <p className="text-gray-700"><strong>Try:</strong> 5-minute break from demanding tasks, do something low-stakes (fold laundry), or "thought dump" journaling.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Emotional rest</h3>
                  <p className="mb-1 text-gray-700"><strong>For:</strong> "holding it together," overwhelmed feelings</p>
                  <p className="text-gray-700"><strong>Try:</strong> name the feeling, talk to a safe person, say no to one emotionally intense thing, put phone on DND for a bit.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Social rest</h3>
                  <p className="mb-1 text-gray-700"><strong>For:</strong> being "on" too much, people fatigue</p>
                  <p className="text-gray-700"><strong>Try:</strong> fewer plans, alone time, or swap draining connection for supportive connection.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Sensory rest</h3>
                  <p className="mb-1 text-gray-700"><strong>For:</strong> overstimulation, screen fatigue, noise sensitivity</p>
                  <p className="text-gray-700"><strong>Try:</strong> dim lights, quiet room, reduce screen time, step outside, close eyes briefly (if safe).</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Creative rest</h3>
                  <p className="mb-1 text-gray-700"><strong>For:</strong> creativity feels dead, problem-solving exhaustion</p>
                  <p className="text-gray-700"><strong>Try:</strong> low-pressure creative hobby, nature, art, something that creates "awe."</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Spiritual rest</h3>
                  <p className="mb-1 text-gray-700"><strong>For:</strong> meaning fatigue, feeling disconnected</p>
                  <p className="text-gray-700"><strong>Try:</strong> nature, values reminder, prayer/ritual, service/cause that feels nourishing.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4 — CBT reframe (when you resist <Link href="/pages/self-care" className="text-blue-600 hover:text-blue-800 underline">self-care</Link>)
              </h2>
              <p className="mb-3 text-gray-700">
                If your brain says "I don't deserve this" or "this won't help," try:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>"This is a skills experiment."</li>
                <li>"Small inputs, big impact."</li>
                <li>"I'm building stability, not chasing perfect."</li>
              </ul>
              <p className="mt-3 text-gray-700 text-sm italic">
                (DBT framing: you're reducing vulnerability so coping skills work better.)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 5 — Make a tiny plan (30 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Fill in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>One need I will address now: ____</li>
                <li>The smallest action: ____ (ex: 8 sips of water / take meds / eat a snack / lie down 10 min)</li>
                <li>When: ____ (now / in 10 min / at 9pm)</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                If you can't do any of this right now
              </h2>
              <p className="text-gray-700">
                That's a signal you may need <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">Distress Tolerance</Link> first (crisis-survival skills), or extra support. DBT explicitly pairs body-care (<Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">PLEASE</Link>) with skills for intense moments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <NextButton onClick={handleNext} />
    </div>
  );
}

