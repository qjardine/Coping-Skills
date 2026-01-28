'use client';
import Link from 'next/link';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const categories = {
  mindfulness: {
    label: 'Mindfulness',
    pages: [
      { label: 'Mindfulness Overview', path: '/mindfulness' },
      { label: '<Link href="/pages/mindfulness/body-scan/how-long" className="text-blue-600 hover:text-blue-800 underline">Body Scan</Link>', path: '/pages/mindfulness/body-scan/how-long' },
      { label: '<Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">Awareness</Link>', path: '/mindfulness/awareness' },
      { label: '<Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">Breathing</Link>', path: '/mindfulness/breathing' },
      { label: '<Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link>', path: '/mindfulness/wise-mind' },
    ],
  },
  'distress-tolerance': {
    label: 'Distress Tolerance',
    pages: [
      { label: 'Distress Tolerance Overview', path: '/distress-tolerance' },
      { label: 'STOP', path: '/pages/interpersonal-skills/stop' },
      { label: '<Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIP</Link>', path: '/distress-tolerance/tip' },
      { label: '<Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link>', path: '/distress-tolerance/accepts' },
      { label: '<Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-Soothe</Link>', path: '/pages/distress-tolerance/soothe' },
      { label: '<Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">IMPROVE</Link>', path: '/distress-tolerance/improve' },
      { label: '<Link href="/pages/interpersonal-skills/radical-acceptance" className="text-blue-600 hover:text-blue-800 underline">Radical Acceptance</Link>', path: '/pages/interpersonal-skills/radical-acceptance' },
      { label: '<Link href="/pages/distress-tolerance/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros & Cons</Link>', path: '/distress-tolerance/pros-cons' },
      { label: '<Link href="/pages/distress-tolerance/cost-benefit" className="text-blue-600 hover:text-blue-800 underline">Cost-Benefit</Link> Analysis', path: '/distress-tolerance/<Link href="/pages/distress-tolerance/cost-benefit" className="text-blue-600 hover:text-blue-800 underline">cost-benefit</Link>' },
      { label: '<Link href="/pages/interpersonal-skills/resistt" className="text-blue-600 hover:text-blue-800 underline">RESISTT</Link>', path: '/distress-tolerance/<Link href="/pages/interpersonal-skills/resistt" className="text-blue-600 hover:text-blue-800 underline">resistt</Link>' },
      { label: 'Effective Rethinking', path: '/distress-tolerance/effective-rethinking' },
      { label: 'Muscle Relaxation', path: '/pages/interpersonal-skills/muscle-relaxation' },
      { label: 'Self-Care', path: '/pages/self-care' },
    ],
  },
  'emotional-regulation': {
    label: 'Emotional Regulation',
    pages: [
      { label: 'Emotional Regulation Overview', path: '/emotional-regulation' },
      { label: '<Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>', path: '/pages/flowchart/check-facts' },
      { label: '<Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link>', path: '/pages/flowchart/problem-solve' },
      { label: '<Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">Opposite Action</Link>', path: '/emotional-regulation/opposite-action' },
      { label: '<Link href="/pages/emotional-regulation/build-mastery" className="text-blue-600 hover:text-blue-800 underline">Build Mastery</Link>', path: '/emotional-regulation/build-mastery' },
      { label: '<Link href="/pages/emotional-regulation/cope-ahead" className="text-blue-600 hover:text-blue-800 underline">Cope Ahead</Link>', path: '/emotional-regulation/cope-ahead' },
      { label: '<Link href="/pages/emotional-regulation/pleasant-activities" className="text-blue-600 hover:text-blue-800 underline">Pleasant Activities</Link>', path: '/emotional-regulation/pleasant-activities' },
      { label: '<Link href="/pages/emotional-regulation/letting-go" className="text-blue-600 hover:text-blue-800 underline">Letting Go</Link>', path: '/emotional-regulation/letting-go' },
      { label: '<Link href="/pages/emotional-regulation/being-effective" className="text-blue-600 hover:text-blue-800 underline">Being Effective</Link>', path: '/emotional-regulation/being-effective' },
      { label: '<Link href="/pages/emotional-regulation/mental-noting" className="text-blue-600 hover:text-blue-800 underline">Mental Noting</Link> & Thought Defusion', path: '/emotional-regulation/mental-noting' },
      { label: '<Link href="/pages/emotional-regulation/cognitive-vulnerability" className="text-blue-600 hover:text-blue-800 underline">Cognitive Vulnerability</Link>', path: '/emotional-regulation/cognitive-vulnerability' },
      { label: 'Positive Self-Talk', path: '/positive-self-talk' },
    ],
  },
  'interpersonal-skills': {
    label: 'Interpersonal Skills',
    pages: [
      { label: 'Interpersonal Skills Overview', path: '/interpersonal-skills' },
      { label: '<Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>', path: '/interpersonal-skills/dear-man' },
      { label: '<Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">GIVE</Link>', path: '/interpersonal-skills/<Link href="/pages/interpersonal-skills/give" className="text-blue-600 hover:text-blue-800 underline">give</Link>' },
      { label: '<Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">FAST</Link>', path: '/interpersonal-skills/fast' },
      { label: '<Link href="/pages/interpersonal-skills/interpersonal-intensity" className="text-blue-600 hover:text-blue-800 underline">Interpersonal Intensity</Link>', path: '/interpersonal-skills/interpersonal-intensity' },
      { label: 'Interpersonal Myths & Truths', path: '/interpersonal-skills/interpersonal-myths' },
      { label: '<Link href="/pages/interpersonal-skills/communication-styles" className="text-blue-600 hover:text-blue-800 underline">Communication Styles</Link>', path: '/interpersonal-skills/communication-styles' },
      { label: '<Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">Assertive Communication</Link>', path: '/interpersonal-skills/<Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">assertiveness</Link>' },
      { label: 'Resistance and <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">Conflict</Link>', path: '/interpersonal-skills/conflict' },
      { label: '<Link href="/pages/interpersonal-skills/ending-relationship" className="text-blue-600 hover:text-blue-800 underline">Ending Relationships</Link>', path: '/interpersonal-skills/ending-relationships' },
      { label: '<Link href="/pages/interpersonal-skills/interpersonal-mindfulness" className="text-blue-600 hover:text-blue-800 underline">Interpersonal Mindfulness</Link>', path: '/interpersonal-skills/interpersonal-mindfulness' },
      { label: '<Link href="/pages/interpersonal-skills/finding-friends" className="text-blue-600 hover:text-blue-800 underline">Finding Friends</Link>', path: '/interpersonal-skills/finding-friends' },
    ],
  },
  'crisis-skills': {
    label: 'Crisis Skills',
    pages: [
      { label: 'Am I Overwhelmed?', path: '/pages/crisis' },
    ],
  },
  'flowchart': {
    label: 'Go through the interactive flow chart',
    pages: [],
    isFlowchart: true,
  },
};

export default function LandingPage() {
  const router = useRouter();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = ({ categoryId }: { categoryId: string }) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  const handleFlowchart = () => {
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              I would like to practice...
            </h1>
          </div>

          <div className="space-y-3">
            {Object.entries(categories).map(([categoryId, category]) => (
              <div key={categoryId} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => {
                    if (category.isFlowchart) {
                      handleFlowchart();
                    } else {
                      toggleCategory({ categoryId });
                    }
                  }}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {category.label}
                  </span>
                  {!category.isFlowchart && (
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                        expandedCategory === categoryId ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {expandedCategory === categoryId && category.pages.length > 0 && (
                  <div className="border-t border-gray-200">
                    {category.pages.map((page) => (
                      <button
                        key={page.path}
                        onClick={() => router.push(page.path)}
                        className="w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-gray-700">{page.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
