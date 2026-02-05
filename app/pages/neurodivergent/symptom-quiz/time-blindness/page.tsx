'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function TimeBlindnessPage() {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'time-blindness';

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
      section: "The \"Just One More Thing\" Trap",
      description: "Time estimates in your brain are… let's just say \"optimistic.\"",
      items: [
        { id: 1, text: "You try to do one quick thing before leaving and end up running late." },
        { id: 2, text: "You tell yourself \"this will only take 5 minutes\" and it takes an hour." },
        { id: 3, text: "You constantly underestimate or overestimate how long tasks will take." },
        { id: 4, text: "You start getting ready way too late — even when you had all day. Or too early and end up killing time by doing something else which then makes you late." },
        { id: 5, text: "You pack 3 hours' worth of tasks into 45 minutes… whether it's physically possible or not." }
      ]
    },
    {
      section: "Time Just… Disappears",
      description: "Time keeps on slippin' — but somehow only you didn't notice.",
      items: [
        { id: 6, text: "You completely lose track of time while working, scrolling, or doing something you enjoy. You suddenly look up and it's dark out, you haven't eaten all day, and you suddenly really need to pee." },
        { id: 7, text: "You regularly say \"wait, what time is it?!\" and panic." },
        { id: 8, text: "You miss appointments or deadlines simply because you forgot to check the clock." },
        { id: 9, text: "You have no sense of how much time has passed unless you set an alarm." },
        { id: 10, text: "You plan to leave early but always end up rushing out the door last minute." }
      ]
    },
    {
      section: "You Live in \"Now\" or \"Not Now\"",
      description: "If it's not happening right now, it's like it doesn't exist at all.",
      items: [
        { id: 11, text: "You delay tasks endlessly because they don't feel urgent right now." },
        { id: 12, text: "You over-prioritise \"urgent\" things that are actually less important." },
        { id: 13, text: "You struggle to start long-term projects until the very last second." },
        { id: 14, text: "You think about doing something for days… but never actually do it." },
        { id: 15, text: "You only remember important things at night or when it's too late to act on them." }
      ]
    },
    {
      section: "You Rely on External Time Anchors",
      description: "Without alarms or calendars, time is just a wibbly-wobbly guess-fest.",
      items: [
        { id: 16, text: "You depend heavily on alarms, timers, or reminders to manage your day." },
        { id: 17, text: "You keep checking the clock during tasks because you don't trust your sense of time." },
        { id: 18, text: "You need others to remind you when to start or stop doing things." },
        { id: 19, text: "You completely lose your place in time without visual cues (like light outside or a visible clock)." },
        { id: 20, text: "You often forget what day of the week it is — or what month." }
      ]
    },
    {
      section: "Your Time Perception Impacts Everything",
      description: "Time moves either too fast or too slow — like your internal clock just doesn't sync with the real world.",
      items: [
        { id: 21, text: "You feel like time moves either too fast or too slow — like your internal clock just doesn't sync with the real world." },
        { id: 22, text: "You spiral when things take longer than planned — even if they should've taken that long — and feel like you've failed somehow." },
        { id: 23, text: "You always think you have more time than you do — and feel blindsided when you realise you don't." },
        { id: 24, text: "You avoid starting things because you genuinely have no idea how long they'll take — and that uncertainty feels paralysing." },
        { id: 25, text: "You look back at the day and feel gutted — like time just vanished and you can't explain where it went or what you even did." }
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
            Time Blindness (IRL)
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
                <li>Learning about time perception differences in ADHD</li>
                <li>Using external time anchors (multiple alarms, visible clocks, timers)</li>
                <li>Building in "buffer time" for everything (add 50% to your estimates)</li>
                <li>Time-blocking with visual schedules</li>
                <li>Practicing self-compassion when time blindness happens</li>
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
                  <span><strong>Multiple Alarms:</strong> Set alarms for "start getting ready," "actually leave," and "point of no return."</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Visible Clocks:</strong> Put clocks everywhere you look (bathroom, kitchen, desk, phone lock screen).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Time Timers:</strong> Use visual countdown timers that show time passing (great for kids and adults).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Buffer Time:</strong> Always add 50% more time to your estimate. If you think it'll take 20 minutes, plan for 30.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Time Blocking:</strong> Schedule specific times for tasks (not just "morning" or "afternoon").</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Backward Planning:</strong> Start with the deadline and work backwards to figure out when you need to start.</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Related Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/symptom-quiz/task-paralysis" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Task Paralysis</p>
                  <p className="text-gray-600 text-sm">Starting & timing challenges</p>
                </Link>
                <Link href="/pages/neurodivergent/symptom-quiz/executive-dysfunction" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Executive Dysfunction</p>
                  <p className="text-gray-600 text-sm">Planning & organization</p>
                </Link>
                <Link href="/pages/neurodivergent/symptom-quiz/object-permanence" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Object Permanence</p>
                  <p className="text-gray-600 text-sm">Memory & reminders</p>
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
