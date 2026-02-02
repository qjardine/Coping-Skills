'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { BackButton } from '@/components/shared/BackButton';

function IntensityContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [intensity, setIntensity] = useState<number | null>(null);

  useEffect(() => {
    const emotionsParam = searchParams?.get('emotions');
    if (emotionsParam) {
      setSelectedEmotions(emotionsParam.split(','));
    }
  }, [searchParams]);

  const handleIntensitySelect = (value: number) => {
    setIntensity(value);
    
    if (value >= 8) {
      // 8-10 → TIPP first (crisis/overwhelm)
      router.push('/pages/distress-tolerance/tipp');
    } else if (value >= 4) {
      // 4-7 → continue current flow
      const emotionsParam = searchParams?.get('emotions') || '';
      router.push(`/pages/flowchart/change${emotionsParam ? `?emotions=${encodeURIComponent(emotionsParam)}` : ''}`);
    } else {
      // 0-3 → micro-skill suggestions
      const emotionsParam = searchParams?.get('emotions') || '';
      router.push(`/pages/flowchart/intensity/micro-skills${emotionsParam ? `?emotions=${encodeURIComponent(emotionsParam)}` : ''}`);
    }
  };

  const handleBack = () => {
    router.push('/pages/flowchart/feelings');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              How intense is this right now?
            </h1>
            {selectedEmotions.length > 0 && (
              <p className="text-xl text-gray-600 mb-2">
                I feel {selectedEmotions.join(', ')}
              </p>
            )}
            <p className="text-lg text-gray-500">
              Rate your intensity from 0 to 10
            </p>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-4 sm:p-8 shadow-lg mb-8">
            <div className="mb-6">
              <p className="text-gray-700 mb-4 text-center">
                Select a number that best represents how intense this feeling is right now:
              </p>
              {/* Desktop: Single row of 11 buttons */}
              <div className="hidden md:grid md:grid-cols-11 gap-2 mb-4">
                {Array.from({ length: 11 }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handleIntensitySelect(i)}
                    className={`px-3 py-4 rounded-lg font-semibold transition-all duration-200 ${
                      intensity === i
                        ? 'bg-blue-600 text-white scale-110 shadow-lg'
                        : i >= 8
                        ? 'bg-red-100 hover:bg-red-200 text-red-800'
                        : i >= 4
                        ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800'
                        : 'bg-green-100 hover:bg-green-200 text-green-800'
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
              {/* Mobile: Two rows (0-5, 6-10) */}
              <div className="md:hidden space-y-2 mb-4">
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 6 }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => handleIntensitySelect(i)}
                      className={`px-3 py-4 rounded-lg font-semibold transition-all duration-200 ${
                        intensity === i
                          ? 'bg-blue-600 text-white scale-110 shadow-lg'
                          : i >= 8
                          ? 'bg-red-100 hover:bg-red-200 text-red-800'
                          : i >= 4
                          ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800'
                          : 'bg-green-100 hover:bg-green-200 text-green-800'
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: 5 }, (_, i) => {
                    const value = i + 6;
                    return (
                      <button
                        key={value}
                        onClick={() => handleIntensitySelect(value)}
                        className={`px-3 py-4 rounded-lg font-semibold transition-all duration-200 ${
                          intensity === value
                            ? 'bg-blue-600 text-white scale-110 shadow-lg'
                            : value >= 8
                            ? 'bg-red-100 hover:bg-red-200 text-red-800'
                            : value >= 4
                            ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800'
                            : 'bg-green-100 hover:bg-green-200 text-green-800'
                        }`}
                      >
                        {value}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                <span>0 - Not intense</span>
                <span>5 - Moderate</span>
                <span>10 - Extremely intense</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                <p className="text-red-800 font-semibold mb-2">8-10: High Intensity</p>
                <p className="text-red-700 text-sm">
                  You'll be directed to TIPP (Temperature, Intense Exercise, Paced Breathing, Paired Muscle Relaxation) to help reduce intensity quickly.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-yellow-800 font-semibold mb-2">4-7: Moderate Intensity</p>
                <p className="text-yellow-700 text-sm">
                  Continue with the standard flow to explore skills for working with this feeling.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-green-800 font-semibold mb-2">0-3: Low Intensity</p>
                <p className="text-green-700 text-sm">
                  You'll see micro-skill suggestions perfect for lower intensity moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}

export default function IntensityPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8 pb-24">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Loading...</h1>
          </div>
        </div>
      </div>
    }>
      <IntensityContent />
    </Suspense>
  );
}
