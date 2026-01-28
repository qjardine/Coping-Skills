'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function GivePage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
            Relationship Effectiveness: <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> (DBT)
          </h1>

          <div className="bg-green-50 backdrop-blur-sm rounded-lg border border-green-200 p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                What is <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>?
              </h2>
              <p className="text-gray-700 mb-4">
                GIVE is a DBT Interpersonal Effectiveness skill focused on maintaining and improving your relationships during difficult conversations. While <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> helps you get what you want, <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> helps you protect the relationship—even when you're asking for something or saying no.
              </p>
              <p className="text-gray-700 mb-4">
                <strong><Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> = Gentle • Interested • Validate • Easy manner</strong>
              </p>
              <p className="text-gray-700">
                GIVE is most effective when used alongside <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> (for objectives) and <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link> (for self-respect).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                When to use <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>
              </h2>
              <p className="text-gray-700 mb-3">Use GIVE when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>The relationship is important to you</li>
                <li>You want to maintain connection during <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link></li>
                <li>You're asking for something and want them to feel heard</li>
                <li>You're saying no but want to preserve the relationship</li>
                <li>You tend to come across as harsh or defensive</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Step-by-step: <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  G — Be Gentle (no attacks, no threats)
                </h3>
                <p className="text-gray-700 mb-3">
                  Approach the conversation with kindness and respect. Avoid attacking, threatening, or using harsh language.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Do:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Use a calm, steady tone</li>
                  <li>Speak respectfully</li>
                  <li>Focus on the issue, not the person</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Don't:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Attack: "You always..." or "You never..."</li>
                  <li>Threaten: "If you don't, I'll..."</li>
                  <li>Use harsh language or name-calling</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">Examples:</p>
                <div className="space-y-2 ml-4">
                  <p className="text-gray-700"><strong>Not gentle:</strong> "You're so inconsiderate! You never think about anyone else!"</p>
                  <p className="text-gray-700"><strong>Gentle:</strong> "I feel hurt when plans change without notice. Can we talk about how to handle this differently?"</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  I — Act Interested (listen and show you care)
                </h3>
                <p className="text-gray-700 mb-3">
                  Show genuine interest in the other person's perspective. Listen actively and ask questions.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Do:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Listen without interrupting</li>
                  <li>Ask clarifying questions: "Can you help me understand...?"</li>
                  <li>Show you're paying attention: nod, make eye contact</li>
                  <li>Reflect back what you hear: "So you're saying..."</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Don't:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Interrupt or finish their sentences</li>
                  <li>Plan your response while they're talking</li>
                  <li>Dismiss their perspective</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">Example:</p>
                <p className="text-gray-700 ml-4">
                  "I want to understand your perspective. Can you tell me more about why this is important to you?"
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  V — Validate (acknowledge their feelings and perspective)
                </h3>
                <p className="text-gray-700 mb-3">
                  Validation doesn't mean agreement. It means acknowledging that their feelings and perspective make sense from their point of view.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Do:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Acknowledge their feelings: "I can see why you'd feel that way."</li>
                  <li>Validate their experience: "That makes sense given..."</li>
                  <li>Show understanding: "I understand that this is important to you."</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Don't:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Invalidate: "You shouldn't feel that way."</li>
                  <li>Minimize: "It's not a big deal."</li>
                  <li>Dismiss: "That's ridiculous."</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">Examples:</p>
                <div className="space-y-2 ml-4">
                  <p className="text-gray-700"><strong>Not validating:</strong> "You're overreacting. It's not that serious."</p>
                  <p className="text-gray-700"><strong>Validating:</strong> "I can see why this feels frustrating to you. That makes sense."</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  E — Easy manner (be lighthearted, use humor when appropriate)
                </h3>
                <p className="text-gray-700 mb-3">
                  Keep the conversation light when possible. Use humor, smile, and don't take everything so seriously.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Do:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Use a warm, friendly tone</li>
                  <li>Smile when appropriate</li>
                  <li>Use light humor (when it fits)</li>
                  <li>Keep things in perspective</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Don't:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Be overly serious or dramatic</li>
                  <li>Use sarcasm (it can feel like an attack)</li>
                  <li>Make everything a crisis</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">Example:</p>
                <p className="text-gray-700 ml-4">
                  "I know we're both stressed about this. Let's figure it out together—we've solved harder things before!"
                </p>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Complete <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> Example: Asking for help
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Gentle:</strong> "I know you're busy, and I'm wondering if you might have time to help me with something."</li>
                  <li><strong>Interested:</strong> "How are things going for you? I want to make sure this isn't a bad time."</li>
                  <li><strong>Validate:</strong> "I know you have a lot on your plate, and I appreciate that."</li>
                  <li><strong>Easy manner:</strong> "No pressure at all—if you can't, totally fine! Just thought I'd ask."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Combining GIVE with <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>
                </h3>
                <p className="text-gray-700 mb-3">
                  You can use GIVE throughout your <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link> script to maintain the relationship while getting your objective:
                </p>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-gray-700 mb-2 font-medium">Example: Asking for a change</p>
                  <p className="text-gray-700 ml-4 mb-2">
                    <strong>GIVE + <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>:</strong> "I know you're stressed about work [Validate]. I'm wondering if we could talk about something [Gentle, Easy manner]. When plans change last minute, I feel anxious because I've already prepared [Express]. I'm asking if you could <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link> me a heads up when possible [Assert]. I understand things come up, and I'm flexible—just a text would help [Validate, Negotiate]."
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Common Challenges
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"I don't feel like being gentle when I'm angry"</p>
                    <p className="text-gray-700 ml-4">
                      <strong>Remember:</strong> You can feel angry and still communicate gently. Take a break if needed, then return with <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>. Being gentle doesn't mean you're not angry—it means you're choosing how to express it.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"Validating feels like I'm agreeing with them"</p>
                    <p className="text-gray-700 ml-4">
                      <strong>Remember:</strong> Validation ≠ agreement. You can say "I understand why you feel that way" without saying "you're right." Validation is about acknowledging their experience, not endorsing it.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">"Easy manner feels fake when I'm upset"</p>
                    <p className="text-gray-700 ml-4">
                      <strong>Remember:</strong> Easy manner doesn't mean pretending you're not upset. It means not escalating unnecessarily. You can be serious about the issue while keeping your tone respectful.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Practice Exercise
                </h3>
                <p className="text-gray-700 mb-2">
                  Think of a conversation where you want to maintain the relationship. Write your <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link> response:
                </p>
                <div className="space-y-2 text-gray-700 text-sm ml-4">
                  <p><strong>Gentle:</strong> "I'm wondering if we could talk about..."</p>
                  <p><strong>Interested:</strong> "Can you help me understand your perspective on...?"</p>
                  <p><strong>Validate:</strong> "I can see why you'd feel..."</p>
                  <p><strong>Easy manner:</strong> "No pressure, just wanted to check in..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/int-give.pdf"
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
