'use client';

import { useRouter } from 'next/navigation';
import { getNextSymptom } from '@/utils/quiz-storage';

interface QuizNavButtonProps {
  currentSlug: string;
}

export function QuizNavButton({ currentSlug }: QuizNavButtonProps) {
  const router = useRouter();

  const handleNext = () => {
    const nextSlug = getNextSymptom({ currentSlug });
    if (nextSlug) {
      router.push(`/pages/neurodivergent/symptom-quiz/${nextSlug}`);
    } else {
      router.push('/pages/neurodivergent/symptom-quiz/results');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleNext}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors flex items-center gap-2"
      >
        Next Symptom →
      </button>
    </div>
  );
}
