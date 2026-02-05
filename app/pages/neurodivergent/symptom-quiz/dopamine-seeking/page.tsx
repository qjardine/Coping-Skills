'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function DopamineSeekingPage() {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'dopamine-seeking';

  const handleBack = () => {
    router.back();
  };

  const handleCheckboxChange = ({ id }: { id: number }) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    saveQuizScore({ symptomSlug: currentSlug, score: checkedCount });
  }, [checkedItems]);

  const symptoms = [
    {
      section: "The Chaos Craver",
      description: "You don't mean to… but your brain thrives on urgency and panic.",
      items: [
        { id: 1, text: "You often leave things until the absolute last second because it's the only way you'll actually start." },
        { id: 2, text: "You say \"I work better under pressure\" — but what you really mean is your brain needs panic to engage." },
        { id: 3, text: "You take on new projects or tasks even when overwhelmed — because new = more exciting." },
        { id: 4, text: "You deep-clean, rearrange furniture, or start new tasks as a way to avoid the one thing you're supposed to do." },
        { id: 5, text: "You've stirred up tension or leaned into conflict when bored — not consciously, but it gave your brain a hit." }
      ]
    },
    {
      section: "The Novelty Addict",
      description: "If it's new, your brain wants it — now.",
      items: [
        { id: 6, text: "You lose interest in hobbies once the novelty wears off — even if you were obsessed with them last week." },
        { id: 7, text: "You constantly try new planners, apps, or systems hoping this one will finally work." },
        { id: 8, text: "You act on ideas the second they pop up — even if it completely derails your day." },
        { id: 9, text: "You bounce between tabs, tasks, or thoughts because the next thing always feels more exciting." },
        { id: 10, text: "You get hyperfixated, going deep into new interests, only to abandon them suddenly once your brain's had its fill." }
      ]
    },
    {
      section: "The Distraction Chaser",
      description: "Distraction isn't an accident — it's your brain hunting for stimulation.",
      items: [
        { id: 11, text: "You open your phone to do one thing… and 45 minutes later, you're on a completely unrelated dopamine spiral." },
        { id: 12, text: "You need background noise — like podcasts, TV, or music — just to focus or fall asleep." },
        { id: 13, text: "You scroll during movies, shows, or even conversations — even when you want to stay present." },
        { id: 14, text: "You switch from task to task constantly, not because you're lazy, but because boredom feels unbearable." },
        { id: 15, text: "You daydream, pace, or talk to yourself because your brain craves something interesting all the time." }
      ]
    },
    {
      section: "The Risky Reward Seeker",
      description: "Impulse + thrill = dopamine goldmine.",
      items: [
        { id: 16, text: "You've made big purchases or life decisions in the moment — no plan, just vibes." },
        { id: 17, text: "You break rules or take shortcuts just to make things feel more exciting." },
        { id: 18, text: "You've overcommitted or said yes impulsively to things you regretted almost immediately." },
        { id: 19, text: "You chase intense emotions — even negative ones — because numbness feels worse." },
        { id: 20, text: "You get restless or irritated when routines feel too predictable or \"boring,\" even if they're helping." }
      ]
    },
    {
      section: "The Emotional Dopamine Spiral",
      description: "When your brain seeks a hit… and your feelings take the fallout.",
      items: [
        { id: 21, text: "You feel frustrated for needing things to be fun or urgent and beat yourself up about the tasks left unfinished." },
        { id: 22, text: "You crash hard after dopamine highs — suddenly exhausted, emotional, or aimless." },
        { id: 23, text: "You blame yourself for not sticking to routines or finishing things you once loved." },
        { id: 24, text: "You keep chasing new things, but feel empty when the spark wears off — like nothing ever sticks." },
        { id: 25, text: "You shame-spiral about your \"bad habits.\"" }
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
            Dopamine Seeker (IRL)
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
                <li>Learning about dopamine regulation differences in ADHD brains</li>
                <li>Finding "healthy" sources of novelty and stimulation</li>
                <li>Using gamification and rewards to make boring tasks more engaging</li>
                <li>Building in variety and breaks to prevent boredom crashes</li>
                <li>Practicing self-compassion instead of shame for seeking stimulation</li>
                <li>Discussing these patterns with a therapist familiar with ADHD</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Quick Strategies to Try
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Gamify Tasks:</strong> Turn boring tasks into games (set timers, create challenges, track streaks).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Body Doubling:</strong> Work alongside someone (in person or virtually) to add social stimulation.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Novelty Rotation:</strong> Rotate through hobbies/interests instead of abandoning them permanently.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Scheduled "Chaos Time":</strong> Give yourself permission to explore new things at designated times.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Stimulus Pairing:</strong> Pair boring tasks with stimulating activities (podcast while cleaning, music while working).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Micro-Rewards:</strong> Build in small rewards after completing chunks of work.</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Related Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/symptom-quiz/impulsivity" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Impulsivity</p>
                  <p className="text-gray-600 text-sm">Acting without thinking</p>
                </Link>
                <Link href="/pages/neurodivergent/symptom-quiz/hyperfixation" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Hyperfixation</p>
                  <p className="text-gray-600 text-sm">Intense focus patterns</p>
                </Link>
                <Link href="/pages/neurodivergent/symptom-quiz/task-paralysis" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Task Paralysis</p>
                  <p className="text-gray-600 text-sm">Needing urgency to start</p>
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
