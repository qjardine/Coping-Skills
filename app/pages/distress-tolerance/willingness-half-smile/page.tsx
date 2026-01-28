'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function WillingnessHalfSmilePage() {
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
  };lfSmilePage() {
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
            <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Willingness</Link> (do what works, even when you don't feel like it) & <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-Smile</Link> (accept reality with your face)
          </h1>

          <div className="bg-orange-50 backdrop-blur-sm rounded-lg border border-orange-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Willingness</Link>: Do What Works
              </h2>
              <p className="text-gray-700 mb-4">
                Willingness in DBT means doing what's effective—even when you don't feel like it, even when it's hard, even when you'd rather resist. It's the opposite of willfulness: digging in your heels and refusing to do what would help.
              </p>
              <p className="text-gray-700 mb-4">
                <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Willingness</Link> isn't about wanting to do something. It's about choosing to do it anyway because it's what works.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                What is <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Willingness</Link>?
              </h2>
              <p className="text-gray-700 mb-3">Willingness means:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Doing what's effective, not what you feel like doing</li>
                <li>Being open to reality as it is</li>
                <li>Responding skillfully instead of reacting automatically</li>
                <li>Participating fully in life, even when it's hard</li>
              </ul>
              <p className="text-gray-700 mb-3">Willfulness means:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Sitting on your hands and refusing to act</li>
                <li>Demanding that reality be different</li>
                <li>Refusing to accept what is</li>
                <li>Being rigid and closed off</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                How to Practice <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Willingness</Link>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1: Notice Willfulness
                </h3>
                <p className="text-gray-700 mb-2">Signs of willfulness:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I won't" / "I can't" / "I refuse"</li>
                  <li>Digging in your heels</li>
                  <li>Refusing to try skills</li>
                  <li>Demanding things be different</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2: Turn the Mind to <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Willingness</Link>
                </h3>
                <p className="text-gray-700 mb-2">Ask yourself:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"What would be effective here?"</li>
                  <li>"What would help, even if I don't want to do it?"</li>
                  <li>"Am I willing to try?"</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3: Act from <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Willingness</Link>
                </h3>
                <p className="text-gray-700 mb-2">Do the effective thing:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Even if you don't feel like it</li>
                  <li>Even if it's hard</li>
                  <li>Even if you'd rather resist</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  You don't have to want to—you just have to be willing to.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-Smile</Link>: Accept Reality with Your Face
              </h2>
              <p className="text-gray-700 mb-4">
                Half-Smile is a DBT distress tolerance skill that uses your body to signal acceptance to your mind. It's not about pretending to be happy—it's about using a gentle, accepting facial expression to help your nervous system shift toward acceptance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                What is <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-Smile</Link>?
              </h2>
              <p className="text-gray-700 mb-4">
                Half-Smile is a gentle, subtle smile—not a big grin. It's the kind of smile you might <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link> when you see something peaceful or when you're accepting something difficult with grace.
              </p>
              <p className="text-gray-700 mb-4">
                Research shows that facial expressions can influence emotions (facial feedback hypothesis). A <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link> can help signal to your nervous system that you're accepting reality, even when your mind is still struggling.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                How to Practice <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-Smile</Link>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1: Relax Your Face
                </h3>
                <p className="text-gray-700 mb-2">Let go of tension:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Unclench your jaw</li>
                  <li>Relax your forehead</li>
                  <li>Drop your shoulders</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2: Create a Gentle <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-Smile</Link>
                </h3>
                <p className="text-gray-700 mb-2">Lift the corners of your mouth slightly—just a little. It should feel:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Gentle, not forced</li>
                  <li>Subtle, not exaggerated</li>
                  <li>Peaceful, not fake</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3: Pair with Willing Hands
                </h3>
                <p className="text-gray-700 mb-2">Turn your palms up (willing hands):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>This signals openness and acceptance</li>
                  <li>Unclench your fists</li>
                  <li>Let your hands rest gently</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4: Hold It
                </h3>
                <p className="text-gray-700 mb-2">Keep the half-smile and willing hands for:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>30 seconds to start</li>
                  <li>Longer if it helps</li>
                  <li>Notice what happens in your body</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                When to Use <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Willingness</Link> & <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-Smile</Link>
              </h2>
              <p className="text-gray-700 mb-3">Use these skills when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>You're resisting doing what would help</li>
                <li>You're stuck in willfulness</li>
                <li>You're struggling to accept reality</li>
                <li>You want to shift toward acceptance</li>
                <li>You're practicing <Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link> or <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">Turning the Mind</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                Common Challenges
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"Half-smile feels fake"</p>
                  <p className="text-gray-700 ml-4">
                    That's okay. You're not pretending to be happy—you're using your body to signal acceptance. It's a tool, not a performance.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"I don't feel willing"</p>
                  <p className="text-gray-700 ml-4">
                    <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Willingness</Link> isn't a feeling—it's a choice. You can choose <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">willingness</Link> even when you don't feel willing.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"This won't help"</p>
                  <p className="text-gray-700 ml-4">
                    Try it anyway. These skills work through practice, not through believing they'll work. Sometimes the body leads the mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Practice Exercise
              </h3>
              <p className="text-gray-700 mb-2">
                Right now, try:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Relax your face</li>
                <li>Create a gentle <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link></li>
                <li>Turn your palms up (willing hands)</li>
                <li>Hold for 30 seconds</li>
                <li>Notice what happens</li>
              </ol>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Remember
              </h3>
              <p className="text-gray-700">
                Willingness and <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half-Smile</Link> are skills you practice—not things you perfect. Even a moment of <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">willingness</Link> or a brief <Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">half-smile</Link> counts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/willingness-half-smile.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
        </a>
        <a
          href="/assets/Worksheets/half-smile-willing.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Half-Smile Willingness Worksheet
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
