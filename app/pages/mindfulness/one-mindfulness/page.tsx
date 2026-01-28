'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function OneMindfulnessPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
            <Link href="/pages/mindfulness/one-mindfulness" className="text-blue-600 hover:text-blue-800 underline">One-Mindfulness</Link> (DBT Mindfulness Skill)
          </h1>

          <div className="bg-blue-50 backdrop-blur-sm rounded-lg border border-blue-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                What is <Link href="/pages/mindfulness/one-mindfulness" className="text-blue-600 hover:text-blue-800 underline">One-Mindfulness</Link>?
              </h2>
              <p className="text-gray-700 mb-4">
                One-mindfulness is a DBT mindfulness skill that means doing one thing at a time, with your full attention. It's the opposite of multitasking—instead of splitting your attention across multiple activities, you focus completely on one task, one moment, one experience.
              </p>
              <p className="text-gray-700">
                When you practice <Link href="/pages/mindfulness/one-mindfulness" className="text-blue-600 hover:text-blue-800 underline">one-mindfulness</Link>, you're fully present with whatever you're doing—whether it's eating, walking, working, or even just <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Why Practice <Link href="/pages/mindfulness/one-mindfulness" className="text-blue-600 hover:text-blue-800 underline">One-Mindfulness</Link>?
              </h2>
              <p className="text-gray-700 mb-3">One-mindfulness helps you:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Reduce overwhelm by focusing on one thing at a time</li>
                <li>Increase effectiveness—you do better when fully present</li>
                <li>Reduce stress—less mental juggling means less mental fatigue</li>
                <li>Experience life more fully—you notice details you'd miss otherwise</li>
                <li>Break rumination cycles—focusing on one task pulls you out of spiraling thoughts</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                How to Practice <Link href="/pages/mindfulness/one-mindfulness" className="text-blue-600 hover:text-blue-800 underline">One-Mindfulness</Link>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1: Choose One Activity
                </h3>
                <p className="text-gray-700 mb-2">Pick one thing to do:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Eating a meal</li>
                  <li>Drinking water</li>
                  <li>Walking</li>
                  <li>Washing dishes</li>
                  <li>Brushing your teeth</li>
                  <li>Reading one paragraph</li>
                  <li>Listening to one song</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2: Do Only That Thing
                </h3>
                <p className="text-gray-700 mb-2">While doing it:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Put away distractions (phone, TV, other tasks)</li>
                  <li>Notice when your mind wanders</li>
                  <li>Gently bring attention back to the activity</li>
                  <li>Use your senses: what do you see, hear, feel, taste, smell?</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3: When Your Mind Wanders
                </h3>
                <p className="text-gray-700 mb-2">It will wander—that's normal. When it does:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Notice: "My mind went to [thought]."</li>
                  <li>Don't judge—just notice</li>
                  <li>Return attention to the activity</li>
                  <li>Repeat as many times as needed</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm italic">
                  The practice isn't "never wandering"—it's "noticing and returning."
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Examples of <Link href="/pages/mindfulness/one-mindfulness" className="text-blue-600 hover:text-blue-800 underline">One-Mindfulness</Link> Practice
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  One-Mindful Eating
                </h3>
                <p className="text-gray-700 mb-2">When eating:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Put down your phone</li>
                  <li>Notice the food's appearance, smell, texture</li>
                  <li>Take one bite and fully experience it</li>
                  <li>Chew slowly, noticing taste and texture</li>
                  <li>Swallow before taking the next bite</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  One-Mindful Walking
                </h3>
                <p className="text-gray-700 mb-2">When walking:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Feel your feet on the ground</li>
                  <li>Notice the rhythm of your steps</li>
                  <li>See what's around you (colors, shapes, movement)</li>
                  <li>Hear sounds (birds, traffic, your breath)</li>
                  <li>Feel air on your skin</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  One-Mindful Task Completion
                </h3>
                <p className="text-gray-700 mb-2">When doing a task:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Do one task start to finish</li>
                  <li>Notice the steps involved</li>
                  <li>Feel your body moving</li>
                  <li>Notice when you want to switch tasks—and don't</li>
                  <li>Complete it fully before moving on</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Common Challenges
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"I can't focus—my mind keeps jumping around"</p>
                  <p className="text-gray-700 ml-4">
                    That's normal. The practice is noticing the jump and returning—not stopping the jumps. Each return is a rep.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"I feel like I'm wasting time doing one thing slowly"</p>
                  <p className="text-gray-700 ml-4">
                    <Link href="/pages/mindfulness/one-mindfulness" className="text-blue-600 hover:text-blue-800 underline">One-mindfulness</Link> often makes you more efficient because you're not switching between tasks (which costs mental energy). Try it and see.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"I need to multitask to get everything done"</p>
                  <p className="text-gray-700 ml-4">
                    You can still multitask when needed. <Link href="/pages/mindfulness/one-mindfulness" className="text-blue-600 hover:text-blue-800 underline">One-mindfulness</Link> is a practice you do on purpose—not a rule for every moment. Start with one activity per day.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Practice Plan
              </h3>
              <p className="text-gray-700 mb-2">
                Start small:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Pick one activity per day to do one-mindfully</li>
                <li>Start with 2–5 minutes</li>
                <li>Build up to longer activities</li>
                <li>Notice how it feels different from multitasking</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Remember
              </h3>
              <p className="text-gray-700">
                One-mindfulness isn't about perfection. It's about practicing presence. Even 30 seconds of one-mindful attention counts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/one-mindful.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Worksheet
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
