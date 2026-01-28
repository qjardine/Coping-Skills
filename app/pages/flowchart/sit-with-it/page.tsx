'use client';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const tooltips = {
  emotionExposure: 'Emotion Exposure is practicing letting an emotion be there without escaping it or acting on the urge. Over time, this can reduce avoidance and help emotions feel less scary and less controlling.',
  selfValidation: 'Self-validation means accepting that your emotion makes sense, even if you don\'t like it. This can reduce "secondary emotions" like shame about being sad or anger about being anxious.',
  selfCompassion: 'Self-compassion is treating yourself like you would treat someone you care about. A common model has three parts: mindfulness, common humanity, and kindness.',
  feelInBody: 'Help feeling emotions in your body through body awareness and sensation practices.',
};

export default function SitWithItPage() {
  const router = useRouter();
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

  const handleEmotionExposure = () => {
    router.push('/pages/emotional-regulation/emotion-exposure');
  };

  const handleSelfValidation = () => {
    router.push('/pages/emotional-regulation/self-validation');
  };

  const handleSelfCompassion = () => {
    router.push('/pages/emotional-regulation/self-compassion');
  };

  const handleNotComfortable = () => {
    router.push('/pages/flowchart/sit-with-it/not-comfortable');
  };

  const handleFeelInBody = () => {
    router.push('/pages/emotional-regulation/feel-in-body');
  };

  const toggleTooltip = ({ tooltipId }: { tooltipId: string }) => {
    if (activeTooltip === tooltipId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Can you sit with this feeling?
            </h1>
          </div>

          <div className="space-y-4">
            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleEmotionExposure}
                  className="flex-1 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Yes, I would like to practice Emotion Exposure
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'emotionExposure' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is Emotion Exposure?"
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
              {activeTooltip === 'emotionExposure' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">{tooltips.emotionExposure}</p>
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
                  onClick={handleSelfValidation}
                  className="flex-1 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Yes, I would like to practice Self-Validation
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'selfValidation' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is Self-Validation?"
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
              {activeTooltip === 'selfValidation' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">{tooltips.selfValidation}</p>
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
                  onClick={handleSelfCompassion}
                  className="flex-1 px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Yes, I would like to practice Self-Compassion
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'selfCompassion' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is Self-Compassion?"
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
              {activeTooltip === 'selfCompassion' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">{tooltips.selfCompassion}</p>
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
                  onClick={handleFeelInBody}
                  className="flex-1 px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I'd like help feeling this in my body
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'feelInBody' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is feeling in body?"
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
              {activeTooltip === 'feelInBody' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">{tooltips.feelInBody}</p>
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

            <button
              onClick={handleNotComfortable}
              className="w-full px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              No, I don't feel comfortable sitting with this feeling right now
            </button>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg mt-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Why this page exists
              </h2>
              <p className="text-gray-700 mb-4">
                Sometimes the best move isn't to change the emotion—it's to stop fighting it.
              </p>
              <p className="text-gray-700 mb-4">Sitting with an emotion can:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>reduce secondary emotions (shame about sadness, anger about fear),</li>
                <li>lower avoidance,</li>
                <li>help your nervous system learn: "this feeling is survivable."</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This page offers four ways to sit with it, plus an exit ramp if it's too much right now.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                The /sit-with-it choices (what each option helps with)
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  A) "Yes, I would like to practice Emotion Exposure"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> fear, shame, sadness, anger spikes that you usually avoid or shut down.</p>
                <p className="text-gray-700 mb-2"><strong>What it entails (DBT-style):</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Notice the emotion in the body</li>
                  <li>Breathe and allow it to rise/fall</li>
                  <li>Don't feed it with stories; don't suppress it</li>
                  <li>Stay until intensity drops even 5–10%</li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">
                  DBT often frames this as <Link href="/pages/emotional-regulation/mindful-emotions" className="text-blue-600 hover:text-blue-800 underline">mindfulness of current emotion</Link> / riding the wave—learning that emotions crest and pass.
                </p>
                <p className="text-gray-700 mt-2 text-sm">
                  <strong>Safety note:</strong> If you're near panic, dissociation, or self-harm urges, do <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">crisis skills</Link> first, then come back.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  B) "Yes, I would like to practice Self-Validation"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> shame, self-criticism, "I shouldn't feel this," emotional confusion, trauma reactions.</p>
                <p className="text-gray-700 mb-2"><strong>What it does:</strong> reduces suffering by treating your internal experience as real and understandable—even when you don't like it.</p>
                <p className="text-gray-700 mb-2"><strong>How it looks:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Name the feeling</li>
                  <li>Name what makes sense about it ("Given X, it tracks that I feel Y.")</li>
                  <li>Offer support ("This is hard, and I can handle the next minute.")</li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">
                  Validation is a core DBT mechanism (you can validate without agreeing with every thought).
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  C) "Yes, I would like to practice Self-Compassion"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> harsh inner critic, chronic guilt, burnout, "I'm broken," neurodivergent trauma from being misunderstood.</p>
                <p className="text-gray-700 mb-2"><strong>What it entails:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Talk to yourself like you would to someone you love</li>
                  <li>Reduce threat/attack language</li>
                  <li>Add warmth + steadiness ("Of course this hurts.")</li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm italic">
                  Self-compassion pairs well with DBT because it lowers shame and increases willingness to use skills.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  D) "I'd like help feeling this in my body"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> people who can name emotions but can't locate them physically; interoception differences (common in autism/ADHD); dissociation.</p>
                <p className="text-gray-700 mb-2"><strong>What it entails (gentle body check, ND-friendly):</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Keep eyes open, look around the room (safety cue)</li>
                  <li>Pick one neutral body area first (hands/feet)</li>
                  <li>Find one sensation (warm/cool/tingle/pressure)</li>
                  <li>Only then ask: "Does this connect to the emotion at all?"</li>
                </ul>
                <p className="text-gray-700 mt-2 text-sm">
                  If the body feels unsafe, switch to external grounding (textures, colors, sounds) and come back later.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  E) "No, I don't feel comfortable sitting with this feeling right now"
                </h3>
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> when the emotion is too intense, trauma-linked, or you're at risk of doing something unsafe.</p>
                <p className="text-gray-700 mb-2"><strong>What happens next (recommended):</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Use <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">Distress Tolerance</Link> skills first (<Link href="/pages/interpersonal-skills/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>, <Link href="/pages/distress-tolerance/tip" className="text-blue-600 hover:text-blue-800 underline">TIP</Link>, <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link>, <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">self-soothe</Link>)</li>
                  <li>Then return to /change or /sit-with-it when intensity is lower</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                When to use /sit-with-it (and when not to)
              </h2>
              <p className="text-gray-700 mb-3"><strong>Use /sit-with-it when:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>The emotion fits the facts (or you're not sure yet).</li>
                <li>You're trying to reduce avoidance, numbness, or secondary emotions.</li>
                <li>You want to build tolerance and emotional range.</li>
              </ul>
              <p className="text-gray-700 mb-2 font-semibold">Don't use /sit-with-it as the first move when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>You're in crisis overwhelm (high impulse risk, unsafe urges). Do <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">crisis survival</Link> first.</li>
                <li>You're dissociating heavily or body check-ins feel unsafe (ground externally first).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                /sit-with-it FAQ
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"If I sit with it, won't it get worse?"</p>
                  <p className="text-gray-700 ml-4">It can spike briefly at first—then it usually drops. The goal is not to like it; it's to prove you can survive it without escalation.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"What if I start dissociating?"</p>
                  <p className="text-gray-700 ml-4">Open eyes, name 5 objects, feel your feet, hold something textured/cold, and return to the room. If needed, choose the "not comfortable" option and use <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">distress tolerance</Link> first.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">"Is self-validation the same as excusing harmful behavior?"</p>
                  <p className="text-gray-700 ml-4">No. You validate the emotion ("this makes sense") while still choosing effective behavior.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Flow recap (how these pages fit the site)
              </h3>
              <p className="text-gray-700 mb-2">
                Entry → "Can you check into your body?" → (Body scan OR feelings wheel) → "I feel ___" → /change
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>If Yes: <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link> / <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">Opposite Action</Link> / <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link> / <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC PLEASE</Link>)</li>
                <li>If No: /sit-with-it → (Emotion Exposure / Self-Validation / Self-Compassion / Feel it in body / Not safe → <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">Distress Tolerance</Link>)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
