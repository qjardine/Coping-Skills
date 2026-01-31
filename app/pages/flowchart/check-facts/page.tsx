'use client';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CheckFactsPage() {
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

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Check the Facts (DBT Emotion Regulation)
          </h1>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                You can have a real emotion and still be reacting to a story your mind filled in.
              </p>
              <p className="text-gray-700 mb-4">
                DBT "Check the Facts" helps you separate:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>what you observed (facts),</li>
                <li>from what you assumed (interpretations),</li>
              </ul>
              <p className="text-gray-700">
                so you can see whether your emotion (and its intensity) fits the facts—and choose the next skill.
              </p>
              <p className="text-gray-700 mt-4">
                DBT teaches this inside Emotion Regulation, the module about how emotions work and how to manage emotions instead of being managed by them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                When to use this skill
              </h2>
              <p className="text-gray-700 mb-3">Use Check the Facts when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>you feel very upset,</li>
                <li>you notice "black-and-white" thinking ("always," "never," "they hate me"),</li>
                <li>or you want to know: Do I need to change the emotion, or change the situation?</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: Check the Facts (6 questions)
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1: What emotion do you want to change?
                </h3>
                <p className="text-gray-700 mb-3 font-medium">Fill in:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Emotion: ________</li>
                  <li>Intensity (0–10): ________</li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  Tip: If you're unsure, use your emotion wheel or pick a best-guess word ("maybe fear").
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2: What is the prompting event?
                </h3>
                <p className="text-gray-700 mb-3">
                  This means: What happened right before the emotion showed up?
                </p>
                <p className="text-gray-700 mb-3 font-medium">Write it as facts only:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Who did what?</li>
                  <li>When/where?</li>
                  <li>What did you see/hear/read?</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Example (facts):</p>
                <p className="text-gray-700 ml-4 mb-2">"I expected a call Wednesday and I didn't get one."</p>
                <p className="text-gray-700 mb-2 font-medium">(Not facts):</p>
                <p className="text-gray-700 ml-4">"She never cares about me."</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3: Describe what you observed with your senses
                </h3>
                <p className="text-gray-700 mb-3">List only what your senses could capture:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>saw: ________</li>
                  <li>heard: ________</li>
                  <li>read: ________</li>
                  <li>body cues: ________</li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  This step reduces "memory warp" and emotional reasoning (treating feelings as facts).
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4: What are my interpretations, thoughts, and assumptions?
                </h3>
                <p className="text-gray-700 mb-3">Now write the story your brain added:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                  <li>"I'm thinking: ________"</li>
                  <li>"I'm assuming: ________"</li>
                  <li>"I'm telling myself it means: ________"</li>
                </ul>
                <p className="text-gray-700 font-medium mb-2">Quick check for black-and-white thinking</p>
                <p className="text-gray-700 mb-2">
                  Circle any words like: always / never / everyone / no one / ruined / hopeless.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Those are clues you may be in interpretation-land.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5: What are other interpretations?
                </h3>
                <p className="text-gray-700 mb-3">
                  Your goal is not to "be positive." Your goal is to be accurate.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Ask:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"What's another possible reason this happened?"</li>
                  <li>"What would I tell a friend if this happened to them?"</li>
                  <li>"What else could be true at the same time?"</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Example alternatives:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"She forgot."</li>
                  <li>"She's overwhelmed."</li>
                  <li>"Something came up."</li>
                  <li>"She cares but isn't consistent."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 6: Am I assuming a threat? What's the catastrophe?
                </h3>
                <p className="text-gray-700 mb-4">This is the "fear math" step.</p>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">6A) Label the threat</p>
                  <p className="text-gray-700 ml-4">"The threat I'm imagining is: ________"</p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">6B) How likely is it (0–100%)?</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"Likelihood: ____%"</li>
                    <li>"Evidence for: ____"</li>
                    <li>"Evidence against: ____"</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 font-medium mb-2">6C) What is the catastrophe I'm predicting?</p>
                  <p className="text-gray-700 mb-2 ml-4">"The worst-case story is: ________"</p>
                  <p className="text-gray-700 mb-2">Then add coping:</p>
                  <p className="text-gray-700 ml-4">
                    "If the worst happened, how would I cope well?" (name 2 supports + 1 action)
                  </p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Now ask the main question
                </h3>
                <p className="text-gray-700 mb-4 font-semibold">
                  Does my emotion (and its intensity) fit the facts?
                </p>
                <p className="text-gray-700 mb-4">
                  DBT often recommends checking with <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link>: the balanced place between Emotion Mind and Reason Mind.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Choose one:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Yes, it fits the facts.</strong><br />
                    → Use <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link> (change the situation) or <Link href="/pages/interpersonal-skills/interpersonal-skills" className="text-blue-600 hover:text-blue-800 underline">Interpersonal Skills</Link> (if it's a people problem).</li>
                  <li><strong>No, it doesn't fit the facts (or it's too intense).</strong><br />
                    → Use <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">Opposite Action</Link> or another emotion regulation skill to shift the emotion.</li>
                  <li><strong>I'm not sure.</strong><br />
                    → Re-check Step 2–5 and pick the most likely facts.</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Helpful reference: When emotions fit the facts
                </h3>
                <p className="text-gray-700 mb-3">
                  These are common DBT "fit the facts" patterns (examples are simplified):
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                  <li>Guilt fits when your behavior violates your values.</li>
                  <li>Anger fits when a goal is blocked, someone is harmed/threatened, or an important boundary is violated.</li>
                  <li>Envy fits when someone has something you want/need.</li>
                  <li>Love fits when attachment/connection improves quality of life or supports valued goals.</li>
                  <li>Fear fits when there is a real threat to safety/health/well-being.</li>
                  <li>Disgust fits when something could contaminate/poison you or violates strong boundaries in a protective way.</li>
                  <li>Jealousy fits when something important to you feels at risk of being lost.</li>
                  <li>Sadness fits when there is a real loss or reality isn't what you hoped for.</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Intensity is influenced by</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>how likely the feared/desired outcome is,</li>
                  <li>how important it is,</li>
                  <li>and how effective the emotion is in your life right now.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <button
          onClick={() => router.push('/pages/flowchart/reaction')}
          className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Continue to Check Reaction
        </button>
        <a
          href="/assets/Worksheets/check-the-facts.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >Try the Worksheet (pdf)</a>
        <a
          href="/assets/Worksheets/check-facts.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >Check the Facts Worksheet (pdf)</a>
      </div>
    </div>
  );
}
