'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function ObjectPermanencePage() {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'object-permanence';

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

  const symptoms = [
    {
      section: "Out of Sight, Out of Brain",
      description: "If you can't see it, your brain acts like it never existed in the first place.",
      items: [
        { id: 1, text: "You forget food exists if it's behind closed doors, not in a transparent container or sitting behind something else." },
        { id: 2, text: "You forget you own certain clothes unless they're already out or visible. You're constantly like \"ohh I totally forgot I had this shirt.\"" },
        { id: 3, text: "You forget to eat the leftovers, take your medications, or to drink water unless they're right there in front of you." },
        { id: 4, text: "You lose track of half-finished projects just because you stored them away \"for later.\" Like notes in your phone, that journal you stopped using or that brilliant idea on a piece of paper under 500 other papers." },
        { id: 5, text: "You're constantly losing things, forgetting where you put them, or even buying duplicates of items you already have because you forgot you had them." }
      ]
    },
    {
      section: "You're a Human Reminder System",
      description: "Your life is a scavenger hunt of strategic item placement, open tabs, and digital breadcrumbs.",
      items: [
        { id: 6, text: "You set out items in your path (like on your desk or a bag by the door) so you'll remember them." },
        { id: 7, text: "You leave tabs, emails, or texts on unread as \"do this later\" reminders." },
        { id: 8, text: "You put things in weird, specific spots hoping it will \"jog your memory.\"" },
        { id: 9, text: "You panic-clean and then forget where you put everything." },
        { id: 10, text: "You forget to use tools or apps meant to help you remember — unless they remind you." }
      ]
    },
    {
      section: "People Fall Off the Radar Too",
      description: "If they're not in front of you, it's like they fell off the edge of your mind's map.",
      items: [
        { id: 11, text: "You forget to text friends back. Another notification came up, you clicked into it mid-conversation and never returned to finish your reply." },
        { id: 12, text: "You don't think to check in with people unless they reach out first." },
        { id: 13, text: "You feel deep connection with someone — then totally forget they exist for weeks." },
        { id: 14, text: "You experience guilt for not thinking about people often, or remembering birthdays etc." },
        { id: 15, text: "You rely on seeing someone's name or face to even remember they're in your life." }
      ]
    },
    {
      section: "Tasks Vanish from Your Mind",
      description: "They were there one minute — then poof — gone like a magician's trick your brain pulled on itself.",
      items: [
        { id: 16, text: "You miss important tasks just because they weren't written down or visible." },
        { id: 17, text: "You delay small jobs (\"I'll do that later\") then completely forget they ever existed." },
        { id: 18, text: "You'll remember a task while doing something else — and then instantly forget again." },
        { id: 19, text: "You open a notification, read it, and forget it existed 3 seconds later." },
        { id: 20, text: "You forget recurring things (like laundry or taking bins out) unless prompted by something visual or physical." }
      ]
    },
    {
      section: "You Feel Like a Bad Adult (But You're Not)",
      description: "You're not broken — your brain just wasn't designed for invisible memory storage.",
      items: [
        { id: 21, text: "You feel guilt or embarrassment for forgetting things that seem \"basic\" — even though you meant to do them." },
        { id: 22, text: "You know your intentions to stay connected with loved ones are solid… but it's hard not to feel like you're letting people (or yourself) down." },
        { id: 23, text: "You've caught yourself spiralling, thinking \"what's wrong with me?\" — when really, your brain just doesn't store what it can't see." },
        { id: 24, text: "You wish you didn't need visual reminders everywhere just to function — sticky notes, piles, alarms, open tabs…" },
        { id: 25, text: "You feel constant guilt and frustration over misplacing things — like you're always searching, always losing, always behind… even though your brain just literally forgets they exist when they're out of sight." }
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
            Object Permanence
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
                <li>Learning about working memory differences in ADHD and how they affect daily life</li>
                <li>Using visual reminder systems (transparent containers, open shelves, visible notes)</li>
                <li>Creating "visibility stations" for important items (medication by toothbrush, keys by door)</li>
                <li>Setting up recurring alarms/reminders for routine tasks</li>
                <li>Practicing self-compassion when forgetting happens (it's not a character flaw)</li>
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
                  <span><strong>Make It Visible:</strong> Use transparent containers, open shelving, and keep frequently-used items in sight.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Strategic Placement:</strong> Put items where you'll use them (medication by toothbrush, charger by bed, keys on hook by door).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Digital Reminders:</strong> Set recurring phone alarms for regular tasks (meds, water, check-ins with friends).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>One Place Rule:</strong> Designate one spot for essentials (keys, wallet, phone) and always return them there.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Photos as Reminders:</strong> Take photos of half-finished projects or things to remember, then set them as phone backgrounds or pin them.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Social Check-Ins:</strong> Schedule recurring reminders to text specific people, or use apps that prompt you to reach out.</span>
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
                <Link href="/pages/neurodivergent/symptom-quiz/task-paralysis" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Task Paralysis</p>
                  <p className="text-gray-600 text-sm">Starting & remembering tasks</p>
                </Link>
                <Link href="/pages/neurodivergent/symptom-quiz/inattentiveness" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Inattentiveness</p>
                  <p className="text-gray-600 text-sm">Attention & focus patterns</p>
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
