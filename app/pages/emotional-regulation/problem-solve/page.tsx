'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
export default function ProblemSolvePage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
             Problem Solving
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                You've named the emotion. You've checked the facts. You know your feeling makes sense—and honestly, anyone in your shoes might feel the same way.
              </p>
              <p className="text-gray-700 mb-4">
                But the problem is still there.
              </p>
              <p className="text-gray-700 mb-4">
                The stress isn't going away. The situation hasn't changed. And the more time passes, the more stuck you feel—spinning in your head, not sure what to do next.
              </p>
              <p className="text-gray-700 font-semibold">
                That's where DBT <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link> comes in.
              </p>
              <p className="text-gray-700 mt-4">
                This skill isn't about calming your body or forcing the emotion to go away. It's about changing the situation itself—taking intentional action when your emotion fits the facts, but something still needs to change.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is DBT Problem Solving?
              </h2>
              <p className="text-gray-700 mb-4">
                Problem Solving is a DBT Emotion Regulation skill developed by Dr. Marsha Linehan. It's taught in DBT skills training and appears in DBT® Skills Training Handouts and Worksheets (2nd ed.).
              </p>
              <p className="text-gray-700">
                If you want to learn more about DBT from DBT's main training organization, you can explore Behavioral Tech's DBT education resources.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Why Problem Solving matters
              </h2>
              <p className="text-gray-700 mb-4">
                Sometimes you need skills like <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link> or <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">Opposite Action</Link> to lower intensity. But other times the emotion is accurate—and the most effective move is to address the real-world problem. That's when Problem Solving is the "change" skill you want.
              </p>
              <p className="text-gray-700">
                This isn't about fixing everything overnight. It's about getting unstuck and regaining direction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                The DBT <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link> Steps (one step at a time)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 1: Figure out and describe the problem (facts only)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Write one sentence that describes what is happening, not what it "means."
                  </p>
                  <p className="text-gray-700 font-medium mb-2">Prompt:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>"The problem is: ____."</li>
                    <li>"What happened? Who did what? When? Where?"</li>
                  </ul>
                  <p className="text-gray-700">
                    <strong>Example:</strong> "My roommate and I argue about cleaning the kitchen."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 2: <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the facts</Link> (quick reality check)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Make sure you're seeing the situation clearly.
                  </p>
                  <p className="text-gray-700 font-medium mb-2">Prompt:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>"What are the facts I can prove?"</li>
                    <li>"What am I assuming?"</li>
                  </ul>
                  <p className="text-gray-700">
                    If the facts don't hold up, pause and rewrite Step 1.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 3: Identify your goal (keep it small + realistic)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Pick a goal that is specific, doable, and within your control.
                  </p>
                  <p className="text-gray-700 font-medium mb-2">Prompt:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>"If this went better, what would be different?"</li>
                    <li>"My goal is: ____."</li>
                  </ul>
                  <p className="text-gray-700">
                    <strong>Example goal:</strong> "We agree on a simple chore plan."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 4: Brainstorm solutions (quantity over quality)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    List as many ideas as you can. No judging yet. Tiny ideas count.
                  </p>
                  <p className="text-gray-700 font-medium mb-2">Prompt:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"What are 10 possible things I could try?"</li>
                    <li>"Who could I ask for ideas?"</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 5: Choose a solution to try first
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Pick one option that fits your goal and that you are most willing to do.
                  </p>
                  <p className="text-gray-700">
                    If you're torn, do a quick <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">pros/cons</Link> and choose the one you'll actually try.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 6: Put the solution into action (make it smaller)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Turn the solution into mini-steps and take the first one.
                  </p>
                  <p className="text-gray-700 font-medium mb-2">Prompt:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"First step (1–5 minutes): ____."</li>
                    <li>"When will I do it?"</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 7: Evaluate what happened (and adjust)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    After you try it, check results:
                  </p>
                  <p className="text-gray-700 font-medium mb-2">Prompt:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>"Did it help even 10%?"</li>
                    <li>"What worked? What didn't?"</li>
                    <li>"Do I try again, or pick a new solution?"</li>
                  </ul>
                  <p className="text-gray-700">
                    If it didn't work, that's not failure—that's data. Go back to Step 5 and try a different option.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Real-life example: "The Sunday Night Spiral"
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Problem (Step 1):</strong> "Every Sunday night I feel anxious and dread Monday."</li>
                <li><strong>Facts (Step 2):</strong> "I have a heavy week and I avoided a few tasks."</li>
                <li><strong>Goal (Step 3):</strong> "Feel more prepared so I can sleep."</li>
                <li><strong>Brainstorm (Step 4):</strong> "30-minute reset, ask boss to prioritize, say no to something, do one tiny task."</li>
                <li><strong>Choose (Step 5):</strong> "30-minute Sunday reset."</li>
                <li><strong>Action (Step 6):</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>20 minutes: list top 3 priorities + first tiny step for each</li>
                    <li>10 minutes: clear desk / prep clothes</li>
                    <li>1 tiny task: reply to one email</li>
                  </ul>
                </li>
                <li><strong>Evaluate (Step 7):</strong> "Anxiety isn't gone, but it's lighter; sleep improved."</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Problem Solving is progress, not perfection
              </h2>
              <p className="text-gray-700 mb-4">
                This skill works because it gives you a path forward when you're stuck—even if the path is messy.
              </p>
              <p className="text-gray-700 font-semibold">
                You don't need the perfect plan. You need a first step.
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                Your challenge this week
              </h2>
              <p className="text-gray-700 mb-3">
                Pick one stuck situation.
              </p>
              <p className="text-gray-700 font-medium mb-2">
                Do just these three steps:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Describe the problem (facts)</li>
                <li>Set one small goal</li>
                <li>Brainstorm 5 options</li>
              </ol>
              <p className="text-gray-700 mt-3 italic">
                Even brainstorming counts as progress.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
        <button
          onClick={() => router.push('/pages/distress-tolerance/soothe')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Continue to Soothe
        </button>
        <button
          onClick={() => router.push('/pages/landing-page')}
          className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing
        </button>
      </div>
    </div>
  );
}

