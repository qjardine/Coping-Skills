'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function TimerPage() {
  const router = useRouter();
  const [minutes, setMinutes] = useState<number>(5);
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeRef = useRef<{ minutes: number; seconds: number }>({ minutes: 5, seconds: 0 });

  useEffect(() => {
    timeRef.current = { minutes, seconds };
  }, [minutes, seconds]);

  useEffect(() => {
    if (isRunning && !isComplete) {
      intervalRef.current = setInterval(() => {
        const current = timeRef.current;
        if (current.seconds > 0) {
          setSeconds(current.seconds - 1);
          timeRef.current = { ...current, seconds: current.seconds - 1 };
        } else if (current.minutes > 0) {
          setMinutes(current.minutes - 1);
          setSeconds(59);
          timeRef.current = { minutes: current.minutes - 1, seconds: 59 };
        } else {
          setIsComplete(true);
          setIsRunning(false);
        }
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, isComplete]);

  const handleStart = () => {
    setIsRunning(true);
    setIsComplete(false);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsComplete(false);
    setMinutes(5);
    setSeconds(0);
    timeRef.current = { minutes: 5, seconds: 0 };
  };

  const handleSetTime = ({ minutes: newMinutes, seconds: newSeconds }: { minutes: number; seconds: number }) => {
    if (!isRunning) {
      setMinutes(newMinutes);
      setSeconds(newSeconds);
      timeRef.current = { minutes: newMinutes, seconds: newSeconds };
    }
  };

  const handleBack = () => {
    router.back();
  };

  const formatTime = ({ minutes: mins, seconds: secs }: { minutes: number; seconds: number }) => {
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Timer
            </h1>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className={`text-6xl font-bold mb-4 ${isComplete ? 'text-green-600' : 'text-gray-800'}`}>
                {formatTime({ minutes, seconds })}
              </div>
              {isComplete && (
                <p className="text-xl text-green-600 font-semibold mb-4">
                  Time's up! Ready to come back?
                </p>
              )}
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {!isRunning && !isComplete && (
                <button
                  onClick={handleStart}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Start
                </button>
              )}
              {isRunning && (
                <button
                  onClick={handlePause}
                  className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Pause
                </button>
              )}
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Reset
              </button>
            </div>

            {!isRunning && !isComplete && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Set Minutes
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={minutes}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      setMinutes(Math.min(59, Math.max(0, value)));
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Set Seconds
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={seconds}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      setSeconds(Math.min(59, Math.max(0, value)));
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => {
                      handleSetTime({ minutes: 1, seconds: 0 });
                    }}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                  >
                    1 min
                  </button>
                  <button
                    onClick={() => {
                      handleSetTime({ minutes: 5, seconds: 0 });
                    }}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                  >
                    5 min
                  </button>
                  <button
                    onClick={() => {
                      handleSetTime({ minutes: 10, seconds: 0 });
                    }}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                  >
                    10 min
                  </button>
                  <button
                    onClick={() => {
                      handleSetTime({ minutes: 15, seconds: 0 });
                    }}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                  >
                    15 min
                  </button>
                </div>
              </div>
            )}

            {isComplete && (
              <div className="text-center">
                
            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button className="flex-1"
                  onClick={() => {
                    router.push('/pages/flowchart/gauge-overwhelm');
                  }}
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Ready to Continue
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'flowchart-gauge-overwhelm' });
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
              {activeTooltip === 'flowchart-gauge-overwhelm' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">Assess whether you're feeling overwhelmed. This helps determine if you need distress tolerance skills or can move to emotion regulation.</p>
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
            )}
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      {!isComplete && (
        <button
          onClick={() => router.push('/pages/flowchart/gauge-overwhelm')}
          className="fixed bottom-16 md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-full md:w-auto"
        >
          Continue to Gauge Overwhelm
        </button>
      )}
    </div>
  );
}
