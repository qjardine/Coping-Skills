'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { NextButton } from '@/components/shared/NextButton';

export default function InterpersonalSkillsPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            I would like to work on my Interpersonal Skills
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div className="bg-green-50 rounded-lg border border-green-200 p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Question: "What's your main goal right now?"
              </h2>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/dear-man')}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Get your objective met → DEAR MAN
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/give')}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Keep/improve the relationship → GIVE
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/fast')}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Keep self-respect → FAST
                </button>
              </div>
            </div>

            <div>
              <p className="text-gray-700 mb-4">
                People usually struggle with interpersonal skills in a few predictable places. DBT groups these as factors that reduce interpersonal effectiveness—meaning you might want to communicate well, but something gets in the way.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Lack of skill (you don't know what to say or do)
              </h2>
              <p className="text-gray-700 mb-4">
                This isn't laziness. It's like not knowing the steps to a dance—you can't do it just by "trying harder." DBT notes people may not have had good models, chances to observe skills, or safe opportunities to practice.
              </p>
              <p className="text-gray-700 font-medium mb-2">Common signs:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>freezing mid-conversation</li>
                <li>overexplaining or saying nothing</li>
                <li>not knowing how to ask, say no, or set a boundary clearly</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Worry thoughts and "myths" (you have the skill, but fear blocks it)
              </h2>
              <p className="text-gray-700 mb-4">
                Even when you know what to do, anxiety-thoughts can derail you: "They'll hate me," "I don't deserve to ask," "I'll do it wrong," "If they're upset, it means I failed." DBT calls out these belief-traps as barriers to <Link href="/pages/emotional-regulation/being-effective" className="text-blue-600 hover:text-blue-800 underline">being effective</Link>.
              </p>
              <p className="text-gray-700 font-medium mb-2">Common signs:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>people-pleasing, avoiding asks, or apologizing for needs</li>
                <li>mind-reading and catastrophizing about the outcome</li>
                <li>giving up before you try</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Emotions are too high (Emotion Mind takes over)
              </h2>
              <p className="text-gray-700 mb-4">
                Strong emotion can shut down your ability to use skills you do have—panic makes you avoid, anger makes you attack, shame makes you disappear. DBT emphasizes returning toward <Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> (balanced emotion + reason) so you can choose an effective response.
              </p>
              <p className="text-gray-700 font-medium mb-2">Common signs:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>snapping, crying, going blank, or dissociating</li>
                <li>sending the text you regret</li>
                <li>"I knew what I wanted to say later, but not in the moment"</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Indecision (conflicting goals)
              </h2>
              <p className="text-gray-700 mb-4">
                DBT points out that people often get stuck because they can't decide what they want most:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Get my objective?</li>
                <li>Keep the relationship?</li>
                <li>Keep my self-respect?</li>
              </ul>
              <p className="text-gray-700 mb-3">When those goals compete, you might swing between extremes:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>asking for too much vs. not asking at all</li>
                <li>saying no to everything vs. giving in to everything</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) The environment really is hard (power, safety, and context)
              </h2>
              <p className="text-gray-700 mb-4">
                Sometimes the barrier isn't you—it's the situation: power differences, unsafe people, or consequences that make direct communication risky. DBT materials explicitly include "environment" as a factor that can overpower skills, which is why options like planning, support, and safety-focused choices matter.
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                Quick takeaway
              </h2>
              <p className="text-gray-700 mb-3">
                Most interpersonal blowups or shutdowns come from one (or more) of these:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>I don't know how (skill gap)</li>
                <li>I'm scared (worry/myths)</li>
                <li>I'm flooded (emotion mind)</li>
                <li>I'm conflicted (indecision/goals)</li>
                <li>It's genuinely unsafe or high-stakes (environment)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                DBT interpersonal skills (like <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>, <Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>, and <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>) are designed to target these exact failure points—by giving you scripts, goal clarity, and ways to stay grounded while you communicate.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                Explore Interpersonal Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/ending-relationship')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Ending Relationships
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/interpersonal-mindfulness')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Interpersonal Mindfulness
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/dear-man')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  DEAR MAN
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/fast')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  FAST
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/give')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  GIVE
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/interpersonal-intensity')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Interpersonal Intensity
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/interpersonal-myths')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Interpersonal Myths & Truths
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/communication-styles')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Communication Styles
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/assertiveness')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Assertive Communication
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/conflict')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Resistance and Conflict
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/finding-friends')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Finding Friends
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/validation-levels')}
                  className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Validation Levels
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                Try a worksheet
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a
                  href="/assets/Worksheets/interpersonal.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-center"
                >
                  Try the Worksheet
                </a>
                <a
                  href="/assets/Worksheets/clarify-goals.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-center"
                >
                  Clarify Interpersonal Goals
                </a>
                <a
                  href="/assets/Worksheets/int-troubleshooting.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-center"
                >
                  Troubleshooting Interpersonal Skills
                </a>
                <a
                  href="/assets/Worksheets/int-dialectics.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-center"
                >
                  Dialectics of Interpersonal Skills
                </a>
                <a
                  href="/assets/Worksheets/int-opposites.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-center"
                >
                  Dialectics of Interpersonal Skills (Opposites)
                </a>
                <a
                  href="/assets/Worksheets/int-priorities.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-center"
                >
                  Clarifying Priorities in Interpersonal Situations
                </a>
                <a
                  href="/assets/Worksheets/int-effectiveness-scripts.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-center"
                >
                  Interpersonal Effectiveness Scripts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <NextButton onClick={handleNext} />
    </div>
  );
}
