'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function MaskingPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'masking';

  const toggleCheck = ({ id }: { id: number }) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  useEffect(() => {
    saveQuizScore({ symptomSlug: currentSlug, score: checkedCount });
  }, [checkedCount]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">
              Masking (IRL)
            </h1>
            <p className="text-gray-600">
              Check the experiences that resonate with you
            </p>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              {checkedCount} of 25 checked
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              1. You've Built a Whole Persona for Safety
            </h2>
            <p className="text-gray-600 italic">
              You're not faking — you're surviving. And adapting how you act became second nature before you even noticed it was happening.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You copy how others speak, gesture, and react to appear \"normal\" — even if it feels unnatural or exhausting." },
                { id: 2, text: "You rehearse conversations like scripts — including multiple outcomes in case the interaction doesn't go to plan." },
                { id: 3, text: "You force yourself to sit still even when your body desperately needs to move, stretch, stim, or fidget." },
                { id: 4, text: "You memorise \"safe\" social behaviours — eye contact, nodding, smiling — even if they feel deeply uncomfortable in your body." },
                { id: 5, text: "You suppress natural movements or reactions (stimming, pacing, flinching) to avoid judgment, ridicule, or drawing attention." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              2. You Edit Yourself Constantly
            </h2>
            <p className="text-gray-600 italic">
              Even when you're not talking, your brain is working overtime to monitor, adjust, and mask every little thing.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You overthink every word after a conversation — reviewing tone, phrasing, and facial expressions like a one-person post-mortem." },
                { id: 7, text: "You fake interest in conversations or activities just to seem polite — even if you're zoning out or overstimulated." },
                { id: 8, text: "You apologise for small things constantly, trying to seem reliable, responsible, and never a burden to others." },
                { id: 9, text: "You use small talk or learned social phrases like \"so good to see you!\" without any real emotional engagement." },
                { id: 10, text: "You push through overwhelm, faking calm or happiness, even when your brain is screaming for a break or escape." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              3. You've Taught Yourself to Play the Part
            </h2>
            <p className="text-gray-600 italic">
              Socialising isn't intuitive — it's a performance you've been perfecting for years.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You structure tasks the way others do, even if it's inefficient for your brain, just to seem competent." },
                { id: 12, text: "You plan and rehearse responses before speaking to avoid sounding impulsive, rude, or 'off.'" },
                { id: 13, text: "You take on roles that don't fit — like being the organiser or overachiever — because it's what's expected." },
                { id: 14, text: "You pretend to understand things during meetings or conversations just to avoid embarrassment or looking stupid." },
                { id: 15, text: "You've practised \"appropriate\" facial expressions in the mirror — even if they don't match how you actually feel." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              4. You Don't Know Who You Are Without It
            </h2>
            <p className="text-gray-600 italic">
              Masking becomes so automatic, you start to lose touch with what's real and what's just performative safety.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You act attentive in conversations while your mind is elsewhere — the performance matters more than the presence." },
                { id: 17, text: "You're unsure what you like or want — your personality often shifts depending on who you're with." },
                { id: 18, text: "You mimic enthusiasm or agreeableness to avoid conflict, even if something feels uncomfortable or inauthentic to you." },
                { id: 19, text: "You're hyper-aware of your tone, posture, and reactions — constantly checking yourself so others won't be put off." },
                { id: 20, text: "You feel emotionally flat or distant after socialising — like your real self wasn't even in the room." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              5. It's Cost You A Lot
            </h2>
            <p className="text-gray-600 italic">
              People praise your "adaptability," but they don't see the toll it takes to constantly edit your existence.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You've been told you're \"easygoing\" or \"so mature\" — but it's just years of hiding what's going on." },
                { id: 22, text: "You've avoided special interests you love because they've been called childish, obsessive, or \"too weird.\"" },
                { id: 23, text: "You've broken down privately after pretending to be fine all day — crying, melting down, or going completely non-verbal." },
                { id: 24, text: "You've stayed silent in situations where you needed help, just to avoid being seen as difficult or dramatic." },
                { id: 25, text: "You fear people won't like the real you — so you keep masking, even when it's slowly burning you out." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* What This Might Mean */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">What This Might Mean</h2>
            <p className="text-gray-700 leading-relaxed">
              Masking is common in autism, ADHD, and anyone who's learned that being "different" isn't safe. You've spent years suppressing your natural behaviors, interests, and communication style to fit neurotypical expectations. This isn't about dishonesty — it's a survival strategy that protects you from judgment, rejection, and harm. But masking comes at a cost: burnout, identity confusion, and disconnection from yourself. Recognizing masking is the first step toward reclaiming your authentic self.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Create Unmask-Friendly Spaces:</strong> Find people and places where you can be yourself without performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Practice Small Authenticity:</strong> Start with tiny acts of being yourself (stimming at home, sharing a special interest)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Build Recovery Time:</strong> Schedule downtime after social events to recover from masking</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Explore Your Preferences:</strong> Journal about what YOU actually like, not what you think you should like</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Connect With Community:</strong> Find neurodivergent spaces where masking isn't necessary</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/stimming" className="text-blue-600 hover:underline">
                → Stimming
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/social-cues" className="text-blue-600 hover:underline">
                → Social Communication
              </Link>
              <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:underline">
                → Meltdowns & Shutdowns
              </Link>
              <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:underline">
                → Personal Care Plan
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center pt-4">
            <Link
              href="/pages/neurodivergent/symptom-quiz"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              ← Back to Symptom Quiz
            </Link>
          </div>
        </div>
      </div>
      <QuizNavButton currentSlug={currentSlug} />
    </div>
  );
}
