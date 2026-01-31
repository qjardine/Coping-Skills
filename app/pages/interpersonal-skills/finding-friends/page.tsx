'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function FindingFriendsPage() {
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
            Finding Friends (DBT Interpersonal Effectiveness)
          </h1>

          <div className="bg-green-50 backdrop-blur-sm rounded-lg border border-green-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                What this skill is
              </h2>
              <p className="text-gray-700 mb-4">
                Finding and building friendships can feel overwhelming—especially if you've experienced rejection, social anxiety, or isolation. DBT Interpersonal Effectiveness skills can help you build connections step-by-step, with realistic expectations and self-respect.
              </p>
              <p className="text-gray-700">
                This page combines DBT skills (<Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>, <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>, <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>) with practical strategies for meeting people and building friendships that work for you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                When to use this page
              </h2>
              <p className="text-gray-700 mb-3">Use this when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>You want to build new friendships</li>
                <li>You feel isolated or lonely</li>
                <li>You struggle with social anxiety but want connection</li>
                <li>You've had negative friendship experiences and want a different approach</li>
                <li>You want to strengthen existing friendships</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step 1: Know what you're looking for
              </h2>
              <p className="text-gray-700 mb-3">
                Before you start, get clear on what kind of friendship you want:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>What activities do you enjoy? (hiking, gaming, art, reading, etc.)</li>
                <li>What values matter to you in friendship? (honesty, humor, support, etc.)</li>
                <li>How much social time feels right for you? (daily, weekly, monthly?)</li>
                <li>What kind of communication style works for you? (texting, calls, in-person?)</li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                Knowing what you want helps you find people who are a good fit—and helps you use <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>/<Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>/<Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> effectively.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step 2: Start small (low-pressure ways to meet people)
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option A: Shared activities
                </h3>
                <p className="text-gray-700 mb-2">Join groups or classes around your interests:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Book clubs, writing groups, art classes</li>
                  <li>Hiking groups, sports teams, fitness classes</li>
                  <li>Volunteer organizations</li>
                  <li>Religious or spiritual communities</li>
                  <li>Support groups (DBT, mental health, etc.)</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  Why this works: You already have something in common, and the activity gives you something to talk about.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option B: Online communities
                </h3>
                <p className="text-gray-700 mb-2">Find online spaces that match your interests:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Discord servers, Reddit communities, Facebook groups</li>
                  <li>Apps like Meetup, Bumble BFF, or interest-specific platforms</li>
                  <li>Online gaming communities</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  Why this works: Lower pressure, you can take your time, and you can find people with very specific shared interests.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Option C: Through existing connections
                </h3>
                <p className="text-gray-700 mb-2">Ask people you already know:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"Do you know anyone who likes [your interest]?"</li>
                  <li>Accept invitations to group events</li>
                  <li>Say yes to "friend of a friend" introductions</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step 3: Use DBT skills in early interactions
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Use <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> to build connection
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Gentle:</strong> Approach with warmth and respect</li>
                  <li><strong>Interested:</strong> Ask questions about them, listen actively</li>
                  <li><strong>Validate:</strong> "That sounds interesting!" "I can see why you'd like that."</li>
                  <li><strong>Easy manner:</strong> Keep it light, use humor when appropriate</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Use <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> to make plans
                </h3>
                <p className="text-gray-700 mb-2">When you want to hang out:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Describe:</strong> "I've been enjoying our conversations..."</li>
                  <li><strong>Express:</strong> "I'd like to get to know you better."</li>
                  <li><strong>Assert:</strong> "Would you want to [specific activity] this weekend?"</li>
                  <li><strong>Reinforce:</strong> "I think we'd have fun!"</li>
                  <li><strong>Negotiate:</strong> "Or if that doesn't work, we could do [alternative]."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Use <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> to protect yourself
                </h3>
                <p className="text-gray-700 mb-2">If someone isn't a good fit:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Fair:</strong> "I appreciate the invitation, and I don't think we're a good match."</li>
                  <li><strong>No Apologies:</strong> "I'm not interested in hanging out."</li>
                  <li><strong>Stick to values:</strong> "I value friendships where [your value]."</li>
                  <li><strong>Truthful:</strong> "I don't think we have enough in common."</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step 4: Build friendship gradually
              </h2>
              <p className="text-gray-700 mb-3">
                Friendships take time. DBT teaches building relationships step-by-step:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Start with low-stakes interactions:</strong> Brief conversations, shared activities</li>
                <li><strong>Increase gradually:</strong> Longer conversations, one-on-one time</li>
                <li><strong>Share gradually:</strong> Start with surface topics, build to deeper sharing</li>
                <li><strong>Set boundaries early:</strong> Use <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> to protect your needs from the start</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step 5: Maintain friendships with DBT skills
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Use <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> for <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link>
                </h3>
                <p className="text-gray-700 mb-2">When something bothers you:</p>
                <p className="text-gray-700 ml-4">
                  "When [situation], I feel [emotion]. I'm asking if we could [specific request]. I value our friendship, and I think this would help us both."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Use <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> to maintain connection
                </h3>
                <p className="text-gray-700 mb-2">Regularly:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Show interest in their life</li>
                  <li>Validate their experiences</li>
                  <li>Keep things light and fun</li>
                  <li>Be gentle during disagreements</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Use <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> to set boundaries
                </h3>
                <p className="text-gray-700 mb-2">When you need to say no:</p>
                <p className="text-gray-700 ml-4">
                  "I appreciate you thinking of me. I can't make it this time. Let's plan something for next week instead."
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Common Challenges
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  "I'm too anxious to approach people"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Solutions:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Start with online communities (lower pressure)</li>
                  <li>Join groups where you don't have to talk much (hiking, art classes)</li>
                  <li>Practice <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> scripts ahead of time</li>
                  <li>Use distress tolerance skills (<Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link>, <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>) before social events</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  "I don't know what to talk about"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Solutions:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Ask open-ended questions: "What got you interested in [shared activity]?"</li>
                  <li>Use <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>: Show interest, validate, keep it light</li>
                  <li>Share something small about yourself, then ask about them</li>
                  <li>Remember: silence is okay. You don't need to fill every moment.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  "People don't seem interested"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Solutions:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Not everyone will be a good fit—that's normal</li>
                  <li>Use <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>: Don't take it personally, stick to your values</li>
                  <li>Keep trying different groups or activities</li>
                  <li>Focus on quality over quantity—one good friend is enough</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Practice Plan
              </h3>
              <p className="text-gray-700 mb-2">
                This week, try one small step:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Join one online community or group</li>
                <li>Say yes to one social invitation</li>
                <li>Have one conversation with someone new</li>
                <li>Use <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> in one interaction</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Remember: Building friendships takes time. Be patient with yourself and others.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="flex flex-col gap-2 md:fixed md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
      >
        Return to Landing
      </button>
    </div>
  );
}
