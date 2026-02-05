'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function HyperactivityPage() {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'hyperactivity';

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
      section: "Body in Motion (Even If You Fight the Urge)",
      description: "You don't have to be physically \"hyperactive\" for it to count — if the urge is there but you hold back because of anxiety, social rules, or trying to be \"appropriate,\" it still matters.",
      items: [
        { id: 1, text: "You bounce your leg constantly — or want to, but stop yourself." },
        { id: 2, text: "You shift in your seat or struggle to find a comfortable position." },
        { id: 3, text: "You pace, wander, or get up frequently — or wish you could but feel stuck in place." },
        { id: 4, text: "You feel physically trapped in \"sit still\" situations — like your body wants to escape but isn't allowed to." },
        { id: 5, text: "You tap, doodle, chew, or fidget constantly — then feel self-conscious or childish for doing it." }
      ]
    },
    {
      section: "Restlessness Disguised as \"Energy\"",
      description: "This is the kind of \"helpful\" hyperactivity that looks productive… until you crash.",
      items: [
        { id: 6, text: "You feel like you have a motor running inside you — revved up, even at rest." },
        { id: 7, text: "You can't rest without guilt — doing \"nothing\" makes you feel useless or lazy." },
        { id: 8, text: "You clean, tidy, or organise things just to burn off energy — not because it needs doing." },
        { id: 9, text: "You say yes to everything because slowing down makes you feel uncomfortable — but later feel resentful or burnt out." },
        { id: 10, text: "You do 10 things at once to avoid sitting with discomfort — then crash and feel like you've let everyone down." }
      ]
    },
    {
      section: "Internal Hyperactivity (The Mind Won't Quit)",
      description: "You might look calm on the outside, but your brain is running laps in heels.",
      items: [
        { id: 11, text: "Your thoughts race constantly — even during downtime, even at night." },
        { id: 12, text: "You replay conversations, imagine future scenarios, or daydream nonstop — and sometimes wish you could shut it all off." },
        { id: 13, text: "You have to get thoughts out the second they arrive or they feel like they'll explode." },
        { id: 14, text: "You blurt or interrupt because your brain won't wait its turn — and then feel rude or ashamed for doing it." },
        { id: 15, text: "You avoid stillness or silence because it makes your mind even louder — like your brain turns into static." }
      ]
    },
    {
      section: "Task Jumping + \"Let's Do ALL the Things\" Mode",
      description: "You're a one-person tornado of 17 open tabs, 3 half-finished projects, and zero chill.",
      items: [
        { id: 16, text: "You start several tasks at once — switching between them without completing any." },
        { id: 17, text: "You feel productive but then crash into the shame of realising nothing actually got finished." },
        { id: 18, text: "You leave chaos zones (piles, messes, projects) that make you feel embarrassed or disorganised." },
        { id: 19, text: "You get antsy or irritable when you're not in motion — restlessness feels like failure." },
        { id: 20, text: "You crave novelty and jump at new ideas — but blame yourself when the interest fizzles." }
      ]
    },
    {
      section: "Social Energy (or Over-Energy)",
      description: "Even your personality can run on hyperdrive.",
      items: [
        { id: 21, text: "You talk fast, talk loud, or talk a lot — and spiral after social situations wondering if you were \"too much.\"" },
        { id: 22, text: "You interrupt, or dominate conversations — not out of rudeness, but because you're excited (and scared you'll forget your thought)." },
        { id: 23, text: "You walk away from social interactions with a vulnerability hangover — replaying every moment and regretting your energy." },
        { id: 24, text: "You're known as \"bubbly,\" \"intense,\" or \"high energy\" — but inside, you're exhausted from holding that up." },
        { id: 25, text: "You feel like you have to shrink yourself in quiet spaces — constantly wondering if your personality is \"too loud\" for the room." }
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
            Hyperactivity (IRL)
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
                <li>Learning about hyperactivity in ADHD (including internal/mental hyperactivity)</li>
                <li>Finding safe outlets for movement and energy (fidgets, walking, stimming)</li>
                <li>Practicing self-acceptance instead of forcing yourself to "sit still"</li>
                <li>Using movement breaks and active work strategies</li>
                <li>Understanding that hyperactivity isn't always visible or physical</li>
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
                  <span><strong>Fidget Tools:</strong> Use fidgets, chewelry, stress balls, or textured items during focus time.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Movement Breaks:</strong> Set timers for movement breaks every 30-60 minutes (stretch, walk, dance).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Active Work:</strong> Use standing desks, walk while on calls, or pace while thinking.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Brain Dump:</strong> Keep a notebook or voice recorder for rapid thought capture when ideas race.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Permission to Move:</strong> Give yourself explicit permission to get up, pace, or move during tasks.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Social Scripts:</strong> Prepare phrases like "Sorry, I'm excited and interrupted — please finish your thought."</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Related Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/symptom-quiz/dopamine-seeking" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Dopamine Seeking</p>
                  <p className="text-gray-600 text-sm">Novelty & stimulation needs</p>
                </Link>
                <Link href="/pages/neurodivergent/stims-special-interests" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Stims & Special Interests</p>
                  <p className="text-gray-600 text-sm">Movement regulation</p>
                </Link>
                <Link href="/pages/neurodivergent/symptom-quiz/impulsivity" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Impulsivity</p>
                  <p className="text-gray-600 text-sm">Acting on urges</p>
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
