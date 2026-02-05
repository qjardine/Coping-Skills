'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { saveQuizScore, getNextSymptom, calculateLevel } from '@/utils/quiz-storage';

export default function TaskParalysisPage() {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'task-paralysis';

  const handleBack = () => {
    router.back();
  };

  const handleCheckboxChange = ({ id }: { id: number }) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Save score whenever checked items change
  useEffect(() => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    saveQuizScore({ symptomSlug: currentSlug, score: checkedCount });
  }, [checkedItems]);

  const handleNext = () => {
    const nextSlug = getNextSymptom({ currentSlug });
    if (nextSlug) {
      router.push(`/pages/neurodivergent/symptom-quiz/${nextSlug}`);
    } else {
      router.push('/pages/neurodivergent/symptom-quiz/results');
    }
  };

  const symptoms = [
    {
      section: "You Want to Start… But Physically Can't",
      description: "The desire is there — but your body's stuck in a game of red light, green light… and it's all red lights.",
      items: [
        { id: 1, text: "You stare at a task knowing it needs to be done — but your body won't move." },
        { id: 2, text: "You open your laptop to work, then sit frozen for 45 minutes doing absolutely nothing." },
        { id: 3, text: "You procrastinate even things you enjoy — the \"starting\" part feels impossible." },
        { id: 4, text: "You sit down to do the thing, then somehow end up scrolling, snacking, or dissociating." },
        { id: 5, text: "You get stuck choosing where to start — so you don't start at all." }
      ]
    },
    {
      section: "It Feels Bigger Than It Actually Is",
      description: "The task is small. Your brain turns it into a dragon guarding a lava pit of shame.",
      items: [
        { id: 6, text: "A simple task (like replying to an email) feels like a mountain to climb." },
        { id: 7, text: "You spend more time mentally preparing for a task than actually doing it." },
        { id: 8, text: "You think, \"I'll just do it later\"… then avoid it for weeks." },
        { id: 9, text: "You rewrite or reorganise your to-do list endlessly instead of actually doing anything." },
        { id: 10, text: "You feel so overwhelmed by your list, you do… none of it." }
      ]
    },
    {
      section: "Perfectionism, Fear + Decision Paralysis",
      description: "You're not procrastinating out of laziness — you're dodging failure, judgement, and the unknown.",
      items: [
        { id: 11, text: "You avoid starting because you're afraid you'll mess it up." },
        { id: 12, text: "You wait for the perfect moment to begin — the right mood, right setup, no distractions… which never comes." },
        { id: 13, text: "You feel like you need a full free day or a burst of motivation to even try." },
        { id: 14, text: "You keep researching, planning, or prepping — because actually doing the thing feels too scary." },
        { id: 15, text: "Even tiny decisions — like what to eat — can send you into full analysis paralysis." }
      ]
    },
    {
      section: "Frozen in Time (But the Clock Keeps Ticking)",
      description: "You're stuck, unmoving while time sprints ahead like: I didn't even notice you fell over.",
      items: [
        { id: 16, text: "You tell yourself you'll start in 10 minutes… then 3 hours disappear." },
        { id: 17, text: "You use \"productive\" distractions — like organising your desktop — to avoid real tasks." },
        { id: 18, text: "You miss deadlines, cancel plans, or ghost people — because you couldn't start in time." },
        { id: 19, text: "You spend hours stuck on a small task, like sorting your inbox — and can't move on." },
        { id: 20, text: "You struggle to switch tasks, even after finishing one — your brain just… stalls." }
      ]
    },
    {
      section: "Emotional Spiral + Mental Shutdown",
      description: "You're not broken — you're burnt out, bottlenecked, or bouncing between too much invisible effort.",
      items: [
        { id: 21, text: "You call yourself lazy, unmotivated, or incapable — even though it's not about effort." },
        { id: 22, text: "You feel shame and guilt after avoiding something for too long — but still can't start." },
        { id: 23, text: "You dread checking messages or notifications you missed while you were frozen." },
        { id: 24, text: "You avoid household chores for so long that they snowball and make everything worse." },
        { id: 25, text: "You feel like no matter how hard you try, you're behind — and it's all your fault." }
      ]
    }
  ];

  const totalItems = symptoms.reduce((sum, section) => sum + section.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Task Paralysis (IRL)
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Check the experiences that resonate with you
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div className="p-4 bg-blue-50 rounded border border-blue-200">
              <p className="text-gray-700 mb-2">
                <strong>You've checked {checkedCount} out of {totalItems} experiences</strong>
              </p>
              <p className="text-gray-700 text-sm">
                There's no "passing" number. This is about understanding your experiences, not scoring yourself.
              </p>
            </div>

            <div className="space-y-8">
              {symptoms.map((symptomSection, sectionIdx) => (
                <div key={sectionIdx} className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {sectionIdx + 1}. {symptomSection.section}
                    </h3>
                    <p className="text-gray-700 italic">
                      {symptomSection.description}
                    </p>
                  </div>

                  <div className="space-y-3 ml-4">
                    {symptomSection.items.map((item) => (
                      <div key={item.id} className="p-4 bg-gray-50 rounded-lg border border-gray-300">
                        <div className="flex items-start space-x-4">
                          <input
                            type="checkbox"
                            id={`symptom-${item.id}`}
                            checked={checkedItems[item.id] || false}
                            onChange={() => handleCheckboxChange({ id: item.id })}
                            className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <label
                            htmlFor={`symptom-${item.id}`}
                            className="flex-1 text-gray-800 cursor-pointer"
                          >
                            <span className="font-semibold">{item.id}.</span> {item.text}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                What This Might Mean
              </h3>
              <p className="text-gray-700 mb-4">
                If many of these experiences resonate with you, you might benefit from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Learning about executive dysfunction and how it affects task initiation</li>
                <li>Breaking tasks into tiny, concrete steps (micro-tasking)</li>
                <li>Using body doubling (working alongside someone) to help with starting</li>
                <li>Exploring ADHD-friendly tools like timers, external cues, and accountability partners</li>
                <li>Practicing self-compassion instead of self-criticism when paralysis happens</li>
                <li>Discussing these patterns with a therapist familiar with ADHD and executive function</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Quick Strategies to Try
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>The 2-Minute Rule:</strong> Commit to doing just 2 minutes of the task. Often, starting is the hardest part.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Body Doubling:</strong> Work alongside someone (in person or virtually) — their presence can help you start.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Micro-Tasking:</strong> Break the task down into absurdly small steps (e.g., "open document," "type one sentence").</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>External Cue:</strong> Set a timer, alarm, or ask someone to text you a reminder to start.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Parallel Tasks:</strong> If you can't do the main task, do something adjacent (e.g., tidy your desk before working).</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Related Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/symptom-quiz/executive-function" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Executive Function</p>
                  <p className="text-gray-600 text-sm">Explore related challenges</p>
                </Link>
                <Link href="/pages/neurodivergent/symptom-quiz/time-blindness" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Time Blindness</p>
                  <p className="text-gray-600 text-sm">Understanding time perception</p>
                </Link>
                <Link href="/pages/neurodivergent/tolerance-window" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Window of Tolerance</p>
                  <p className="text-gray-600 text-sm">Understanding regulation</p>
                </Link>
                <Link href="/pages/neurodivergent/symptom-quiz" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Back to Symptom Wheel</p>
                  <p className="text-gray-600 text-sm">Explore other symptoms</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuizNavButton currentSlug={currentSlug} />
      <BackButton onClick={handleBack} />
    </div>
  );
}
