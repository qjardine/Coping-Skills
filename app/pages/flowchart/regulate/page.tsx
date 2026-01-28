'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';

export default function RegulatePage() {
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
  
  const router = useRouter();

  const handleYes = () => {
    router.push('/pages/flowchart/reaction');
  };

  const handleNo = () => {
    router.push('/pages/flowchart/check-facts');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Do you know what triggered the emotion?
            </h1>
          </div>

          <div className="space-y-4">
            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
              onClick={handleYes}
              className="flex-1 w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
                  Yes
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'flowchart-reaction' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is on this page?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {activeTooltip === 'flowchart-reaction' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Evaluate whether your emotional reaction fits the context of the situation. Helps you decide if you need to <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">check the facts</Link> or can change the situation.</p>
                  <button
                    onClick={() => {
                      setActiveTooltip(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
              onClick={handleNo}
              className="flex-1 w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
                  No
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'flowchart-check-facts' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is on this page?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {activeTooltip === 'flowchart-check-facts' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Separate observable facts from interpretations and assumptions. Helps you determine if your emotion fits the facts and choose the next skill.</p>
                  <button
                    onClick={() => {
                      setActiveTooltip(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg mt-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Do you know what triggered the emotion?
              </h2>
              <p className="text-gray-700 mb-4">
                Sometimes you know exactly what set it off ("that text," "that comment," "that noise"). Other times it's fuzzy—because emotions can be prompted by external events, internal body states, memories, thoughts, or sensory overload, and the "trigger" might be a chain instead of one thing. In DBT terms, you're looking for the <strong>prompting event</strong>—what kicked off the emotion episode.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Choose one:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Yes → (go to /reaction)</li>
                <li>No → (go to <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                How to identify triggers (DBT-style)
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  1) Find the "prompting event" (what happened right before)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Ask:</strong> "What was the first moment the emotion shifted?"
                </p>
                <p className="text-gray-700 mb-2">
                  DBT breaks an emotion episode into links (vulnerabilities → prompting event → thoughts/interpretations → body sensations → urges → actions → outcomes). If you can find the first link, everything else becomes clearer.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Quick prompts:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>What happened right before I noticed the feeling?</li>
                  <li>Was it something someone did, something I remembered, a thought, or a body change (pain, hunger, fatigue)?</li>
                  <li>What did I notice first: thought, body, or urge?</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  2) Scan for vulnerability factors (the "set-up")
                </h3>
                <p className="text-gray-700 mb-2">
                  Sometimes the trigger lands harder because you were already vulnerable. DBT explicitly treats body and baseline care as emotion-vulnerability factors (sleep, illness, substances, etc.).
                </p>
                <p className="text-gray-700 mb-2 font-medium">Fast vulnerability check:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Sleep? Food? Hydration? Meds? Pain/illness?</li>
                  <li>High stress load?</li>
                  <li>Caffeine/alcohol/other substances?</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  If you find a vulnerability, the "trigger" might be: "I was already depleted, then X happened."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  3) Separate "event" from "interpretation"
                </h3>
                <p className="text-gray-700 mb-2">
                  DBT teaches that the emotion usually follows your interpretation/meaning, not just the event itself. Two people can have the same event and feel different emotions depending on interpretation.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Try this fill-in:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Event</strong> (camera facts): "They didn't reply for 3 hours."</li>
                  <li><strong>Story</strong> (interpretation): "They're mad / I'm unwanted."</li>
                  <li><strong>Emotion:</strong> anxiety, shame, anger, etc.</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  If you can name the story, you've basically found the trigger.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  4) Use mindfulness "WHAT" skills to catch it in real time
                </h3>
                <p className="text-gray-700 mb-2">
                  If you're not sure what triggered you, do a 20–60 second micro-practice:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Observe:</strong> what's happening (outside + inside)</li>
                  <li><strong>Describe:</strong> put simple words to it ("tight chest," "thought: 'I messed up'")</li>
                  <li><strong>Participate:</strong> return to the moment without fighting it</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  This often reveals the trigger while it's happening.
                </p>
              </div>

              <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Neurodivergence note: common "invisible triggers"
                </h3>
                <p className="text-gray-700 mb-2">
                  If you're ADHD/autistic/otherwise neurodivergent, triggers are often sensory + nervous-system based and can look like "random mood shifts" unless you check the environment/body.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Common examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Sensory overload (sound, light, textures, crowded spaces)</li>
                  <li>Executive function friction (task switching, interruptions, unclear demands) which can raise dysregulation risk</li>
                  <li>Routine disruption / transitions (sudden plan changes)</li>
                </ul>
                <p className="text-gray-700 mt-2 font-medium">
                  A helpful question: "Did my environment get louder/brighter/more demanding in the last 10 minutes?"
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  If you still can't find the trigger
                </h3>
                <p className="text-gray-700">
                  That's okay. Choose No and go to <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>. DBT treats "uncertain trigger" as a reason to slow down, gather information, and test interpretations instead of guessing.
                </p>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Mini example
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Emotion:</strong> anger</li>
                  <li><strong>Prompting event:</strong> coworker interrupted me mid-sentence</li>
                  <li><strong>Vulnerability:</strong> skipped lunch + loud office</li>
                  <li><strong>Interpretation:</strong> "They don't respect me"</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Now you can check: does the reaction fit, and what skill helps next?
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  FAQ
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">What if there are multiple triggers?</p>
                    <p className="text-gray-700 ml-4">That's normal. Use the earliest link you can find (first shift in body/thought). DBT chain analysis assumes episodes are chains, not single causes.</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">What if the trigger is "nothing"?</p>
                    <p className="text-gray-700 ml-4">Often it's a vulnerability factor (sleep/food/pain) or sensory overload. If it still feels unclear, go to <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link> to avoid building a scary story.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}

