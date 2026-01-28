'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function FastPage() {
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

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
            DBT Skill <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> for Self-Respect
          </h1>

          <div className="bg-green-50 backdrop-blur-sm rounded-lg border border-green-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                What is <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>?
              </h2>
              <p className="text-gray-700 mb-4">
                FAST is a DBT Interpersonal Effectiveness skill focused on maintaining your self-respect during difficult conversations. While <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> helps you get what you want, <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> helps you keep your self-respect intact—even when the conversation doesn't go your way.
              </p>
              <p className="text-gray-700 mb-4">
                <strong><Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> = Fair • (no) Apologies • Stick to values • Truthful</strong>
              </p>
              <p className="text-gray-700">
                FAST is most effective when used alongside <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> (for objectives) and <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> (for relationships).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                When to use <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>
              </h2>
              <p className="text-gray-700 mb-3">Use FAST when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>You're setting a boundary or saying no</li>
                <li>You're in a <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link> where self-respect feels at risk</li>
                <li>You tend to over-apologize or minimize your needs</li>
                <li>You want to maintain your values during a difficult conversation</li>
                <li>You're negotiating and want to stay true to yourself</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step-by-step: <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  F — Be Fair (to yourself AND the other person)
                </h3>
                <p className="text-gray-700 mb-3">
                  Fair means acknowledging both perspectives without giving up your own needs.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Do:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Listen to their perspective</li>
                  <li>Validate their feelings (even if you disagree)</li>
                  <li>State your needs clearly</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Don't:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">Give</Link> up your needs to "be fair"</li>
                  <li>Assume you're always wrong</li>
                  <li>Take all the blame</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">Example:</p>
                <p className="text-gray-700 ml-4">
                  "I understand you're stressed about the deadline. I'm also stressed, and I need to set this boundary."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  A — (No) Apologies (don't over-apologize)
                </h3>
                <p className="text-gray-700 mb-3">
                  Only apologize when you've actually done something wrong. Don't apologize for having needs, setting boundaries, or saying no.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Do:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Apologize for actual mistakes: "I'm sorry I was late."</li>
                  <li>Say no clearly without apology: "I can't do that."</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Don't:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Apologize for your feelings: "I'm sorry I feel this way."</li>
                  <li>Apologize for saying no: "I'm sorry, but I can't."</li>
                  <li>Apologize repeatedly</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">Examples:</p>
                <div className="space-y-2 ml-4">
                  <p className="text-gray-700"><strong>Over-apologizing:</strong> "I'm so sorry, I know this is inconvenient, but I really can't make it. I'm really sorry."</p>
                  <p className="text-gray-700"><strong>FAST way:</strong> "I can't make it. Thanks for understanding."</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  S — Stick to your values
                </h3>
                <p className="text-gray-700 mb-3">
                  Don't compromise your values to avoid <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link> or <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">please</Link> others. Know what matters to you and hold to it.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Before the conversation, ask:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>What are my core values here?</li>
                  <li>What am I not willing to compromise on?</li>
                  <li>What would violate my self-respect?</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">During the conversation:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Return to your values if you feel pressured</li>
                  <li>Say: "That doesn't align with my values."</li>
                  <li>Don't agree to things that violate your principles</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">Example:</p>
                <p className="text-gray-700 ml-4">
                  "I value honesty, so I can't agree to lie about this. I understand it's difficult, and I'm not willing to compromise on this."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  T — Be Truthful (don't lie, don't make excuses)
                </h3>
                <p className="text-gray-700 mb-3">
                  Be honest about your needs, feelings, and limits. You don't need elaborate excuses—the truth is enough.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Do:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Tell the truth about your needs and limits</li>
                  <li>Be direct: "I can't do that because I'm already overwhelmed."</li>
                  <li>Keep it simple—you don't need a long explanation</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Don't:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Make up elaborate excuses</li>
                  <li>Lie to avoid <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link></li>
                  <li>Say "maybe" when you mean "no"</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">Examples:</p>
                <div className="space-y-2 ml-4">
                  <p className="text-gray-700"><strong>Making excuses:</strong> "Oh, I'd love to, but I have this thing, and then another thing, and my dog is sick..."</p>
                  <p className="text-gray-700"><strong>Truthful:</strong> "I can't take that on right now. I'm at capacity."</p>
                </div>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Complete <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> Example: Saying no to extra work
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Fair:</strong> "I understand this project is important to you. I also need to protect my capacity."</li>
                  <li><strong>No Apologies:</strong> "I can't take on this project." (Not: "I'm so sorry, I wish I could...")</li>
                  <li><strong>Stick to values:</strong> "I value doing quality work, and I can't do that if I'm spread too thin."</li>
                  <li><strong>Truthful:</strong> "I'm already working on three projects and don't have capacity for another."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Common Challenges
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"I feel guilty saying no without apologizing"</p>
                    <p className="text-gray-700 ml-4">
                      <strong>Remember:</strong> Saying no is not wrong. You're allowed to have limits. Practice: "I can't do that" (period, no apology needed).
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"They'll think I'm being unfair"</p>
                    <p className="text-gray-700 ml-4">
                      <strong>Remember:</strong> Fair doesn't mean equal. Fair means both people's needs matter. You can acknowledge their needs while holding yours.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"I don't know what my values are"</p>
                    <p className="text-gray-700 ml-4">
                      <strong>Practice:</strong> Before difficult conversations, ask: "What would I need to do to feel good about myself after this?" That's your value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Practice Exercise
                </h3>
                <p className="text-gray-700 mb-2">
                  Think of a situation where you want to say no or set a boundary. Write your <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> response:
                </p>
                <div className="space-y-2 text-gray-700 text-sm ml-4">
                  <p><strong>Fair:</strong> "I understand _____. I also need _____."</p>
                  <p><strong>No Apologies:</strong> "I can't _____."</p>
                  <p><strong>Stick to values:</strong> "I value _____, so I need to _____."</p>
                  <p><strong>Truthful:</strong> "The truth is _____."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/int-fast.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet
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
