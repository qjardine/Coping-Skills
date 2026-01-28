'use client';

import { useState } from 'react';
import { FeelingsWheel } from '@/components/shared/FeelingsWheel';
import { MobileFeelingsSelector } from '@/components/shared/MobileFeelingsSelector';
import { NextButton } from '@/components/shared/NextButton';
import { BackButton } from '@/components/shared/BackButton';
import { EmotionsWordCloud } from '@/components/shared/EmotionsWordCloud';
import additionalEmotions from '@/data/additional-emotions.json';
import { useRouter } from 'next/navigation';

export default function FeelingsWheelPage() {
  const router = useRouter();
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

  const handleEmotionSelect = ({ emotion }: { emotion: string }) => {
    setSelectedEmotions((prev) => {
      if (prev.includes(emotion)) {
        return prev.filter((e) => e !== emotion);
      }
      return [...prev, emotion];
    });
  };

  const handleNext = () => {
    const emotionsParam = selectedEmotions.join(',');
    router.push(`/pages/flowchart/change?emotions=${encodeURIComponent(emotionsParam)}`);
  };

  const handleClear = () => {
    setSelectedEmotions([]);
  };

  const handleBack = () => {
    router.push('/pages/flowchart/body-check-in');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">How am I feeling?</h1>
        
        <div className="w-full max-w-4xl">
          {/* Desktop Feelings Wheel */}
          <div className="mb-8">
            <FeelingsWheel 
              onEmotionSelect={handleEmotionSelect} 
              selectedEmotions={selectedEmotions}
            />
          </div>

          {/* Other Feelings Word Cloud - Desktop */}
          <div className="hidden lg:block mb-8">
            <EmotionsWordCloud
              emotions={additionalEmotions}
              onEmotionSelect={handleEmotionSelect}
              selectedEmotions={selectedEmotions}
            />
          </div>

          {/* Mobile Feelings Selector */}
          <div className="lg:hidden mb-8">
            <MobileFeelingsSelector
              onEmotionSelect={handleEmotionSelect}
              selectedEmotions={selectedEmotions}
            />
          </div>
          
          <div className="text-center text-gray-700">
            {selectedEmotions.length > 0 ? (
              <>
                <p className="text-3xl font-semibold mb-4 text-gray-800">
                  I feel {selectedEmotions.join(', ')}
                </p>
                <button
                  onClick={handleClear}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white/80 hover:bg-white rounded-lg transition-colors duration-200 shadow-md"
                >
                  Clear
                </button>
              </>
            ) : (
              <>
                <p className="mb-4">
                  Click on a feeling or state to explore coping skills and strategies.
                </p>
                <p className="text-sm">
                  This interactive experience will guide you through options for working with your current emotional state.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Floating Next Button */}
      <NextButton onClick={handleNext} disabled={selectedEmotions.length === 0} />
      <BackButton onClick={handleBack} />
    </div>
  );
}
