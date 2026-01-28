'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function AssertivenessPage() {
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
  };ivenessPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
            <Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">Assertive Communication</Link>
          </h1>

          <div className="bg-green-50 backdrop-blur-sm rounded-lg border border-green-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                What is <Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">Assertive Communication</Link>?
              </h2>
              <p className="text-gray-700 mb-4">
                Assertive communication is the DBT "sweet spot" between passivity (giving up your needs) and aggression (violating others' needs). It means expressing your thoughts, feelings, and needs directly and respectfully—while also respecting the other person's right to have their own perspective.
              </p>
              <p className="text-gray-700 mb-2">Assertive communication means:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>You state your needs clearly without apology</li>
                <li>You listen to others' needs and perspectives</li>
                <li>You can say "no" without feeling guilty</li>
                <li>You can ask for what you need without being aggressive</li>
                <li>You respect yourself AND the other person</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                When to use <Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">Assertive Communication</Link>
              </h2>
              <p className="text-gray-700 mb-3">Use assertive communication when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>You need to set a boundary</li>
                <li>You want to ask for something</li>
                <li>You need to say "no" to a request</li>
                <li>You want to express your feelings or opinions</li>
                <li>You need to address a <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link> or misunderstanding</li>
                <li>You want to negotiate or compromise</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                The <Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">Assertive Communication</Link> Formula
              </h2>
              <p className="text-gray-700 mb-4">
                DBT teaches a simple structure for <Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">assertive communication</Link>:
              </p>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700 font-semibold mb-2">Template:</p>
                <p className="text-gray-700 mb-2">
                  "When [specific situation], I feel [emotion] because [reason]. I need [specific request]."
                </p>
                <p className="text-gray-700 text-sm italic">
                  Or shorter: "I feel [emotion] when [situation]. I need [request]."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Examples
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Asking for help:</p>
                    <p className="text-gray-700 ml-4">
                      "I'm feeling overwhelmed with this project. I need some help with the research portion. Can you take that on?"
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Setting a boundary:</p>
                    <p className="text-gray-700 ml-4">
                      "I feel uncomfortable when you call me after 10pm. I need my evenings to be quiet time. Can we keep calls to before 9pm?"
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Saying no:</p>
                    <p className="text-gray-700 ml-4">
                      "I appreciate you thinking of me, but I can't take on that project right now. I need to focus on my current commitments."
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Expressing feelings:</p>
                    <p className="text-gray-700 ml-4">
                      "I feel hurt when plans get cancelled last minute. I need more notice when possible so I can adjust my schedule."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Key Components of <Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">Assertive Communication</Link>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  1. Use "I" Statements
                </h3>
                <p className="text-gray-700 mb-2">Instead of "you" statements that blame:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li><strong>Not:</strong> "You always interrupt me!"</li>
                  <li><strong>Assertive:</strong> "I feel frustrated when I'm interrupted. I need to finish my thoughts."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  2. Be Specific
                </h3>
                <p className="text-gray-700 mb-2">Vague requests are harder to respond to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li><strong>Not:</strong> "You need to be more considerate."</li>
                  <li><strong>Assertive:</strong> "I need you to text me if you'll be more than 15 minutes late."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  3. Express Your Feelings
                </h3>
                <p className="text-gray-700 mb-2">Name the emotion without making the other person responsible:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li><strong>Not:</strong> "You made me angry."</li>
                  <li><strong>Assertive:</strong> "I feel angry when plans change without notice."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  4. Make Clear Requests
                </h3>
                <p className="text-gray-700 mb-2">State what you need, not what you don't want:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li><strong>Not:</strong> "<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">Stop</Link> being so messy."</li>
                  <li><strong>Assertive:</strong> "I need the dishes to be done by 8pm so I can cook dinner."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  5. Listen and Validate
                </h3>
                <p className="text-gray-700 mb-2">Assertive communication is a two-way street:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Listen to the other person's perspective</li>
                  <li>Validate their feelings (even if you disagree)</li>
                  <li>Look for compromise when possible</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Common Challenges and Solutions
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Challenge: "I feel guilty saying no"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Remember: saying no to one thing means saying yes to your own needs</li>
                  <li>You don't need to justify or over-explain</li>
                  <li>Practice: "I can't do that, but thank you for asking."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Challenge: "I come across as aggressive"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Use a calm, steady tone (not loud or sharp)</li>
                  <li>Keep your body language open (uncrossed arms, relaxed posture)</li>
                  <li>Add validation: "I understand your perspective, and I also need..."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Challenge: "I freeze up in the moment"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Buy time: "Let me think about that and get back to you."</li>
                  <li>Practice scripts ahead of time</li>
                  <li>Start small with low-stakes situations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Practice Exercise
              </h2>
              <p className="text-gray-700 mb-3">
                Pick one situation where you want to be more assertive. Fill in the template:
              </p>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700 mb-2 font-medium">Situation:</p>
                <p className="text-gray-700 mb-4 ml-4">When [specific situation]...</p>
                <p className="text-gray-700 mb-2 font-medium">Feeling:</p>
                <p className="text-gray-700 mb-4 ml-4">I feel [emotion]...</p>
                <p className="text-gray-700 mb-2 font-medium">Need:</p>
                <p className="text-gray-700 mb-4 ml-4">I need [specific request]...</p>
                <p className="text-gray-700 mb-2 font-medium">Your assertive statement:</p>
                <p className="text-gray-700 ml-4 italic">"When _____, I feel _____ because _____. I need _____."</p>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Remember
              </h3>
              <p className="text-gray-700 mb-2">
                <Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">Assertive communication</Link> is a skill that takes practice. Start with small situations and build up. It's okay if it feels awkward at first—that's normal when learning a new skill.
              </p>
              <p className="text-gray-700">
                The goal isn't perfection. The goal is expressing your needs while respecting others—and yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-16 md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-full md:w-auto"
      >
        Return to Landing
      </button>
    </div>
  );
}
