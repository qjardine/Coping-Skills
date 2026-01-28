'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">About the Skills</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview: What DBT Is For</h2>
            <p className="text-gray-700 mb-4">
              Dialectical Behavior Therapy (DBT) is a skills-based approach for handling intense emotions, reducing crisis behaviors, and building a life that feels worth living. DBT is especially useful when emotions show up as urgent action urges—shutting down, lashing out, spiraling, dissociating, people-pleasing, self-harm urges, compulsive checking, substance urges, etc.
            </p>
            <p className="text-gray-700 mb-4">
              DBT doesn't treat emotions as "the problem." It treats emotions as real signals that can become overwhelming—especially when you're stressed, traumatized, burned out, neurodivergent, or lacking support. DBT gives you repeatable skills to respond effectively.
            </p>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">The 4 DBT skill modules</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Mindfulness:</strong> notice what's happening (without getting swallowed by it)</li>
                <li><strong>Distress Tolerance:</strong> survive the moment without making it worse</li>
                <li><strong>Emotion Regulation:</strong> reduce vulnerability + shape emotions over time</li>
                <li><strong>Interpersonal Effectiveness:</strong> get what you need while keeping self-respect + relationships intact</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How DBT Works</h2>
            <p className="text-gray-700 mb-4">
              DBT works because it trains three things at once:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">1) <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">Awareness</Link> (Mindfulness)</h3>
                <p className="text-gray-700 mb-2">You learn to spot what's happening in real time:</p>
                <p className="text-gray-700 ml-4 mb-2">trigger → thoughts → body sensations → emotion → urge → action</p>
                <p className="text-gray-700">When you can name it, you can work with it.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">2) Stabilization (Distress Tolerance / Crisis Skills)</h3>
                <p className="text-gray-700 mb-2">When you're in "hot brain" mode, reasoning is hard. Crisis skills help you:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>lower physiological arousal</li>
                  <li>interrupt impulsive actions</li>
                  <li>get through the wave safely</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">3) Change + building a better baseline (Emotion Regulation + Interpersonal)</h3>
                <p className="text-gray-700 mb-2">Once you're stable, you build the conditions that make crises less frequent:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>reduce vulnerabilities (sleep, nutrition, overstimulation, cognitive distortions)</li>
                  <li>build positive emotions and mastery</li>
                  <li><Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">improve</Link> boundaries, communication, trust, and repair</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-gray-700 mb-2">
                DBT is "dialectical" because it holds two true things at once:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>You are doing the best you can</li>
                <li>You can learn new skills and do better</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Flow Chart Map</h2>
            <p className="text-gray-700 mb-4">
              The interactive flow chart guides you through a structured process to identify your feelings and choose appropriate coping skills. Here's the path and <Link href="/pages/mindfulness/what" className="text-blue-600 hover:text-blue-800 underline">what skills</Link> you can use at each step:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 1: Body Check-In</h3>
                <p className="text-gray-700 mb-2">Start by checking into your body. Options:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Yes, I know how I'm feeling</strong> → Go to Feelings Wheel</li>
                  <li><strong>No, <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">please</Link> guide me through a body scan</strong> → <Link href="/pages/mindfulness/body-scan/how-long" className="text-blue-600 hover:text-blue-800 underline">Body Scan</Link> (1, 5, or 15 minutes)</li>
                  <li><strong>No, it feels unsafe</strong> → <Link href="/pages/mindfulness/body-scan/unsafe-body-check" className="text-blue-600 hover:text-blue-800 underline">Unsafe Body Check</Link> page with alternative options</li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">Skills: <Link href="/pages/mindfulness/mindfulness" className="text-blue-600 hover:text-blue-800 underline">Mindfulness</Link>, Body <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">Awareness</Link></p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 2: Identify Feelings</h3>
                <p className="text-gray-700 mb-2">Use the interactive Feelings Wheel to select your emotions.</p>
                <p className="text-gray-700 mt-2 text-sm italic">Skills: <Link href="/pages/mindfulness/mindfulness" className="text-blue-600 hover:text-blue-800 underline">Mindfulness</Link> (Observe, Describe), Emotion Identification</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 3: Sit With It (Optional)</h3>
                <p className="text-gray-700 mb-2">After identifying feelings, you can choose to sit with them:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><Link href="/pages/emotional-regulation/emotion-exposure" className="text-blue-600 hover:text-blue-800 underline">Emotion Exposure</Link></li>
                  <li><Link href="/pages/emotional-regulation/self-validation" className="text-blue-600 hover:text-blue-800 underline">Self-Validation</Link></li>
                  <li><Link href="/pages/emotional-regulation/self-compassion" className="text-blue-600 hover:text-blue-800 underline">Self-Compassion</Link></li>
                  <li><Link href="/pages/emotional-regulation/feel-in-body" className="text-blue-600 hover:text-blue-800 underline">Feel in Body</Link></li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">Skills: <Link href="/pages/emotional-regulation/letting-go" className="text-blue-600 hover:text-blue-800 underline">Letting Go</Link>, <Link href="/pages/mindfulness/mindfulness" className="text-blue-600 hover:text-blue-800 underline">Mindfulness</Link></p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 4: Change Feelings (If Needed)</h3>
                <p className="text-gray-700 mb-2">If you want to change your feelings, the flow continues:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong><Link href="/pages/self-care" className="text-blue-600 hover:text-blue-800 underline">Self-Care</Link> Check:</strong> Are you hydrated, medicated, nourished, rested? → <Link href="/pages/self-care" className="text-blue-600 hover:text-blue-800 underline">Self-Care</Link></li>
                  <li><strong>Gauge Overwhelm:</strong> Are you overwhelmed? → <Link href="/pages/flowchart/gauge-overwhelm" className="text-blue-600 hover:text-blue-800 underline">Gauge Overwhelm</Link></li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">Skills: <Link href="/pages/self-care" className="text-blue-600 hover:text-blue-800 underline">Self-Care</Link> (PLEASE skills), <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">Distress Tolerance</Link></p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 5: Regulation Path</h3>
                <p className="text-gray-700 mb-2">If not overwhelmed, continue with regulation:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Do you know what triggered it?</strong> → <Link href="/pages/flowchart/regulate" className="text-blue-600 hover:text-blue-800 underline">Regulate</Link></li>
                  <li><strong>Does your reaction fit?</strong> → <Link href="/pages/flowchart/reaction" className="text-blue-600 hover:text-blue-800 underline">Reaction</Link></li>
                  <li><strong>Check the Facts:</strong> → <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link></li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">Skills: <Link href="/pages/emotional-regulation/emotional-regulation" className="text-blue-600 hover:text-blue-800 underline">Emotion Regulation</Link>, <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link></p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Step 6: <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link> or Soothe</h3>
                <p className="text-gray-700 mb-2">Based on whether you can change the situation:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Can you change it?</strong> → <Link href="/pages/flowchart/change-situation" className="text-blue-600 hover:text-blue-800 underline">Change Situation</Link></li>
                  <li><strong>Yes, I can change it</strong> → <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link></li>
                  <li><strong>No, I can't change it</strong> → <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">Soothe</Link></li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">Skills: <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link>, <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link>, <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">Distress Tolerance</Link></p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Crisis Path</h3>
                <p className="text-gray-700 mb-2">If overwhelmed, use crisis skills first:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">Crisis Skills</Link> → STOP, TIP, ACCEPTS, <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link>, IMPROVE, <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link></li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">Skills: <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">Distress Tolerance</Link>, <Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">Crisis Skills</Link></p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Key Principle</h3>
              <p className="text-gray-700">
                The flow chart adapts to your needs. If you're in crisis, use <Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">crisis skills</Link> first. If you're stable, you can work through emotion regulation and problem-solving. The goal is to match the skill to your current state and needs.
              </p>
            </div>
          </section>
        </div>
        </div>
      </div>
    </div>
  );
}
