'use client';
import Link from 'next/link';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Category = {
  label: string;
  pages: { label: string; path: string }[];
  isFlowchart?: boolean;
};

const categories: Record<string, Category> = {
  mindfulness: {
    label: 'Mindfulness',
    pages: [
      { label: 'Mindfulness Overview', path: '/pages/mindfulness/mindfulness' },
      { label: 'Body Scan', path: '/pages/mindfulness/body-scan/how-long' },
      { label: 'Awareness', path: '/pages/mindfulness/awareness' },
      { label: 'Breathing', path: '/pages/mindfulness/breathing' },
      { label: 'RAIN', path: '/pages/mindfulness/rain' },
      { label: 'Wise Mind', path: '/pages/mindfulness/wise-mind/wise-mind' },
      { label: 'Meditation', path: '/pages/mindfulness/meditation' },
      { label: 'What Skills', path: '/pages/mindfulness/what' },
      { label: 'How Skills', path: '/pages/mindfulness/how' },
      { label: 'One-Mindfulness', path: '/pages/mindfulness/one-mindfulness' },
    ],
  },
  'distress-tolerance': {
    label: 'Distress Tolerance',
    pages: [
      { label: 'Distress Tolerance Overview', path: '/pages/distress-tolerance' },
      { label: 'STOP', path: '/pages/distress-tolerance/stop' },
      { label: 'TIPP', path: '/pages/distress-tolerance/tipp' },
      { label: 'Mammalian Diving Reflex', path: '/pages/distress-tolerance/mammalian-diving' },
      { label: 'ACCEPTS', path: '/pages/distress-tolerance/accepts' },
      { label: 'Self-Soothe', path: '/pages/distress-tolerance/soothe' },
      { label: 'IMPROVE', path: '/pages/distress-tolerance/improve' },
      { label: 'Urge Surfing', path: '/pages/distress-tolerance/urge-surfing' },
      { label: 'Radical Acceptance', path: '/pages/interpersonal-skills/radical-acceptance' },
      { label: 'Pros & Cons', path: '/pages/interpersonal-skills/pros-cons' },
      { label: 'Cost-Benefit Analysis', path: '/pages/distress-tolerance/cost-benefit' },
      { label: 'Effective Rethinking', path: '/pages/distress-tolerance/effective-rethinking' },
      { label: 'Muscle Relaxation', path: '/pages/interpersonal-skills/muscle-relaxation' },
      { label: 'Self-Care', path: '/pages/self-care' },
      { label: 'Turning the Mind', path: '/pages/distress-tolerance/turning-mind' },
      { label: 'Willingness & Half-Smile', path: '/pages/distress-tolerance/willingness-half-smile' },
      { label: 'Nightmare Protocol', path: '/pages/distress-tolerance/nightmare-protocol' },
      { label: 'Self-Harm Support Hub', path: '/pages/self-harm' },
      { label: 'Addiction Recovery Hub', path: '/pages/addiction' },
    ],
  },
  'emotional-regulation': {
    label: 'Emotional Regulation',
    pages: [
      { label: 'Emotional Regulation Overview', path: '/pages/emotional-regulation/emotional-regulation' },
      { label: 'Check the Facts', path: '/pages/flowchart/check-facts' },
      { label: 'Problem Solving', path: '/pages/flowchart/problem-solve' },
      { label: 'Opposite Action', path: '/pages/emotional-regulation/opposite-action' },
      { label: 'Build Mastery', path: '/pages/emotional-regulation/build-mastery' },
      { label: 'Cope Ahead', path: '/pages/emotional-regulation/cope-ahead' },
      { label: 'Pleasant Activities', path: '/pages/emotional-regulation/pleasant-activities' },
      { label: 'Letting Go', path: '/pages/emotional-regulation/letting-go' },
      { label: 'Being Effective', path: '/pages/emotional-regulation/being-effective' },
      { label: 'Mental Noting & Thought Defusion', path: '/pages/emotional-regulation/mental-noting' },
      { label: 'Cognitive Vulnerability', path: '/pages/emotional-regulation/cognitive-vulnerability' },
      { label: 'Positive Self-Talk', path: '/pages/emotional-regulation/positive-self-talk' },
      { label: 'Mindful Emotions', path: '/pages/emotional-regulation/mindful-emotions' },
      { label: 'ABC PLEASE', path: '/pages/emotional-regulation/abc-please' },
      { label: 'Feel in Body', path: '/pages/emotional-regulation/feel-in-body' },
    ],
  },
  'interpersonal-skills': {
    label: 'Interpersonal Skills',
    pages: [
      { label: 'Interpersonal Skills Overview', path: '/pages/interpersonal-skills/interpersonal-skills' },
      { label: 'Find Your Values', path: '/pages/interpersonal-skills/values' },
      { label: 'DEAR MAN', path: '/pages/interpersonal-skills/dear-man' },
      { label: 'GIVE', path: '/pages/interpersonal-skills/give' },
      { label: 'FAST', path: '/pages/interpersonal-skills/fast' },
      { label: 'Interpersonal Intensity', path: '/pages/interpersonal-skills/interpersonal-intensity' },
      { label: 'Interpersonal Myths & Truths', path: '/pages/interpersonal-skills/interpersonal-myths' },
      { label: 'RESISTT', path: '/pages/interpersonal-skills/resistt' },
      { label: 'Communication Styles', path: '/pages/interpersonal-skills/communication-styles' },
      { label: 'Assertive Communication', path: '/pages/interpersonal-skills/assertiveness' },
      { label: 'Resistance and Conflict', path: '/pages/interpersonal-skills/conflict' },
      { label: 'Ending Relationships', path: '/pages/interpersonal-skills/ending-relationship' },
      { label: 'Interpersonal Mindfulness', path: '/pages/interpersonal-skills/interpersonal-mindfulness' },
      { label: 'Finding Friends', path: '/pages/interpersonal-skills/finding-friends' },
      { label: 'Repair / Rupture After Conflict', path: '/pages/interpersonal-skills/repair' },
    ],
  },
  'crisis-skills': {
    label: 'Crisis Skills',
    pages: [
      { label: 'Crisis Help Now', path: '/pages/crisis-help-now' },
      { label: 'Create a Crisis Plan', path: '/pages/crisis/plan' },
      { label: 'Am I Overwhelmed?', path: '/pages/crisis' },
      { label: 'Your Window of Tolerance', path: '/pages/crisis/tolerance-window' },
      { label: 'Nightmare Protocol', path: '/pages/distress-tolerance/nightmare-protocol' },
      { label: 'Post-Crisis Debrief', path: '/pages/post-crisis-debrief' },
      { label: 'Chain Analysis', path: '/pages/chain-analysis' },
      { label: 'Self-Harm Support Hub', path: '/pages/self-harm' },
      { label: 'Addiction Recovery Hub', path: '/pages/addiction' },
      { label: 'Relapse Prevention Plan', path: '/pages/crisis/relapse-prevention' },
    ],
  },
  'cbt': {
    label: 'Cognitive Behavioral Therapy (CBT)',
    pages: [
      { label: 'CBT Hub', path: '/pages/cbt' },
      { label: 'CBT Basics', path: '/pages/cbt/basics' },
      { label: 'Levels of Cognition', path: '/pages/cbt/levels' },
      { label: 'Automatic Thoughts', path: '/pages/cbt/automatic-thoughts' },
      { label: 'Cognitive Distortions', path: '/pages/cbt/cognitive-distortions' },
      { label: 'Thoughts on Trial', path: '/pages/cbt/thoughts-on-trial' },
      { label: 'Thought Records', path: '/pages/cbt/thought-record' },
      { label: 'Cognitive Restructuring', path: '/pages/cbt/cognitive-restructuring' },
      { label: 'CBT Worrying', path: '/pages/cbt/worrying' },
      { label: 'Core Beliefs & Schemas', path: '/pages/cbt/core-beliefs' },
      { label: 'Graded Exposure & Experiments', path: '/pages/cbt/exposure-and-experiments' },
      { label: 'Behavioral Activation', path: '/pages/cbt/behavioral-activation' },
      { label: 'Response Prevention', path: '/pages/cbt/response-prevention' },
      { label: 'Problem-Solving', path: '/pages/cbt/problem-solving' },
      { label: 'Anxiety & Body Skills', path: '/pages/cbt/anxiety-body' },
      { label: 'Sleep & CBT-I Basics', path: '/pages/cbt/sleep-basics' },
      { label: 'Track & Review Progress', path: '/pages/cbt/track-and-review' },
      { label: 'CBT Relapse Prevention', path: '/pages/cbt/relapse-prevention' },
    ],
  },
  'neurodivergent': {
    label: 'Neurodivergent Support',
    pages: [
      { label: 'Symptom Explorer Quiz', path: '/pages/neurodivergent/symptom-quiz' },
      { label: 'Overload Skills Menu', path: '/pages/neurodivergent/overload' },
      { label: 'Managing Meltdowns', path: '/pages/neurodivergent/meltdowns' },
      { label: 'Your Window of Tolerance', path: '/pages/neurodivergent/tolerance-window' },
      { label: 'Neurodivergent Emotion Regulation', path: '/pages/neurodivergent/emotion-regulation' },
      { label: 'Alexithymia (Identifying Feelings)', path: '/pages/neurodivergent/alexithymia' },
      { label: 'Trouble Describing Emotions?', path: '/pages/neurodivergent/describe' },
      { label: 'Act Intentionally', path: '/pages/neurodivergent/act-intentionally' },
      { label: 'Sensory Profile & Needs', path: '/pages/neurodivergent/sensory-profiles' },
      { label: 'Build a Sensory Toolkit', path: '/pages/neurodivergent/sensory-kit' },
      { label: 'Stims & Special Interests', path: '/pages/neurodivergent/stims-special-interests' },
      { label: 'Sensory Self-Soothing', path: '/pages/neurodivergent/sensory-soothing' },
      { label: 'Personal Care Plan', path: '/pages/neurodivergent/care-plan' },
      { label: 'Neurodivergent Affirmations', path: '/pages/neurodivergent/affirmations' },
      { label: 'Creating a Sensory Safe Space', path: '/pages/neurodivergent/safe-space' },
      { label: 'Neurodivergent Mindfulness Guide', path: '/pages/neurodivergent/mindfulness-guide' },
      { label: 'Accessible Mindfulness Exercises', path: '/pages/neurodivergent/mindfulness' },
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
            <a
              href="/assets/Worksheets/DBT-Cheat-Sheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 mb-4"
            >
              DBT Cheat Sheet (PDF)
            </a>
          </div>

          <div className="space-y-3">
            {Object.entries(categories).map(([categoryId, category]) => {
              // Color themes: Mindfulness (blue), Distress Tolerance (orange), Emotional Regulation (purple), Interpersonal Skills (green), Crisis Skills (red), Flowchart (white)
              const getCategoryColor = (id: string) => {
                switch (id) {
                  case 'mindfulness':
                    return 'bg-blue-50 border-blue-200 hover:bg-blue-100';
                  case 'distress-tolerance':
                    return 'bg-orange-50 border-orange-200 hover:bg-orange-100';
                  case 'emotional-regulation':
                    return 'bg-purple-50 border-purple-200 hover:bg-purple-100';
                  case 'interpersonal-skills':
                    return 'bg-green-50 border-green-200 hover:bg-green-100';
                  case 'crisis-skills':
                    return 'bg-red-50 border-red-200 hover:bg-red-100';
                  case 'cbt':
                    return 'bg-teal-50 border-teal-200 hover:bg-teal-100';
                  case 'neurodivergent':
                    return 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100';
                  case 'flowchart':
                    return 'bg-white border-gray-200 hover:bg-gray-50';
                  default:
                    return 'bg-white/80 border-gray-200 hover:bg-gray-50';
                }
              };

              const getCategoryTextColor = (id: string) => {
                switch (id) {
                  case 'mindfulness':
                    return 'text-blue-800';
                  case 'distress-tolerance':
                    return 'text-orange-800';
                  case 'emotional-regulation':
                    return 'text-purple-800';
                  case 'interpersonal-skills':
                    return 'text-green-800';
                  case 'crisis-skills':
                    return 'text-red-800';
                  case 'cbt':
                    return 'text-teal-800';
                  case 'neurodivergent':
                    return 'text-indigo-800';
                  default:
                    return 'text-gray-800';
                }
              };

              const getCategoryButtonColor = (id: string) => {
                switch (id) {
                  case 'mindfulness':
                    return 'bg-blue-600 hover:bg-blue-700 text-white';
                  case 'distress-tolerance':
                    return 'bg-orange-600 hover:bg-orange-700 text-white';
                  case 'emotional-regulation':
                    return 'bg-purple-600 hover:bg-purple-700 text-white';
                  case 'interpersonal-skills':
                    return 'bg-green-600 hover:bg-green-700 text-white';
                  case 'crisis-skills':
                    return 'bg-red-600 hover:bg-red-700 text-white';
                  case 'cbt':
                    return 'bg-teal-600 hover:bg-teal-700 text-white';
                  case 'neurodivergent':
                    return 'bg-indigo-600 hover:bg-indigo-700 text-white';
                  default:
                    return 'bg-gray-600 hover:bg-gray-700 text-white';
                }
              };

              return (
                <div key={categoryId} className={`${getCategoryColor(categoryId)} backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border`}>
                  <button
                    onClick={() => {
                      if (category.isFlowchart) {
                        handleFlowchart();
                      } else {
                        toggleCategory({ categoryId });
                      }
                    }}
                    className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200"
                  >
                    <span className={`text-lg font-semibold ${getCategoryTextColor(categoryId)}`}>
                      {category.label}
                    </span>
                    {!category.isFlowchart && category.pages.length > 0 && (
                      <svg
                        className={`w-5 h-5 ${getCategoryTextColor(categoryId)} transition-transform duration-200 ${
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
                    <div className="border-t border-gray-200 p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.pages.map((page) => (
                          <button
                            key={page.path}
                            onClick={() => router.push(page.path)}
                            className={`px-4 py-3 rounded-lg font-semibold transition-colors duration-200 text-left shadow-md ${getCategoryButtonColor(categoryId)}`}
                          >
                            {page.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
