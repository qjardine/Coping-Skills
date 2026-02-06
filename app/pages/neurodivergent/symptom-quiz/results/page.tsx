'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { getQuizScores, calculateLevel, symptomNames, symptomOrder, clearQuizScores, getQuizProgress } from '@/utils/quiz-storage';

export default function QuizResultsPage() {
  const router = useRouter();
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load scores from localStorage
    const quizScores = getQuizScores();
    setScores(quizScores);
    setIsLoading(false);
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleRetakeQuiz = () => {
    if (confirm('This will clear your current results. Are you sure?')) {
      clearQuizScores();
      router.push('/pages/neurodivergent/symptom-quiz/task-paralysis');
    }
  };

  const progress = getQuizProgress();
  const topSymptoms = Object.entries(scores)
    .map(([slug, score]) => ({
      name: symptomNames[slug] || slug,
      score,
      level: calculateLevel({ checkedCount: score })
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Your Symptom Profile
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Based on your responses
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-8">
            {/* Progress Indicator */}
            <div className="p-4 bg-blue-50 rounded border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-semibold">Quiz Progress</span>
                <span className="text-blue-600 font-bold">{progress.completed} / {progress.total} symptoms</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress.percentage}%` }}
                ></div>
              </div>
              {progress.completed < progress.total && (
                <p className="text-sm text-gray-600 mt-2">
                  Complete all symptoms for the most accurate profile.
                </p>
              )}
            </div>

            {/* Top Symptoms */}
            {topSymptoms.length > 0 && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Your Top 5 Symptoms
                </h3>
                <div className="space-y-3">
                  {topSymptoms.map(({ name, score, level }, index) => (
                    <div key={name} className="flex items-center justify-between p-3 bg-white rounded border border-purple-200">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-purple-600">{index + 1}</span>
                        <div>
                          <p className="font-semibold text-gray-800">{name}</p>
                          <p className="text-sm text-gray-600">
                            {score} / 25 experiences • Level {level}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(l => (
                          <div
                            key={l}
                            className={`w-3 h-8 rounded ${
                              l <= level ? 'bg-purple-600' : 'bg-gray-200'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Results */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                All Symptoms
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {symptomOrder.map(slug => {
                  const score = scores[slug] || 0;
                  const level = calculateLevel({ checkedCount: score });
                  const name = symptomNames[slug] || slug;
                  
                  return (
                    <Link
                      key={slug}
                      href={`/pages/neurodivergent/symptom-quiz/${slug}`}
                      className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-purple-400 hover:shadow transition-all"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{name}</p>
                        <p className="text-sm text-gray-600">{score} / 25</p>
                      </div>
                      <div className="flex gap-0.5 ml-3">
                        {[1, 2, 3, 4, 5].map(l => (
                          <div
                            key={l}
                            className={`w-2 h-6 rounded-sm ${
                              l <= level ? 'bg-purple-600' : 'bg-gray-200'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Click any symptom to review or update your answers
              </p>
            </div>

            {/* What's Next */}
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                What's Next?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">1.</span>
                  <span>
                    <strong>Review your top symptoms:</strong> Explore the strategies and resources for each symptom that scored high.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">2.</span>
                  <span>
                    <strong>Share with your support team:</strong> Consider discussing these results with a therapist, doctor, or trusted person.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">3.</span>
                  <span>
                    <strong>Explore accommodations:</strong> Visit the related resources below to find coping strategies that work for you.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">4.</span>
                  <span>
                    <strong>Be kind to yourself:</strong> Understanding your neurodivergent profile is a journey, not a destination.
                  </span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRetakeQuiz}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Retake Quiz
              </button>
              <Link
                href="/pages/neurodivergent/symptom-quiz"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Explore Symptoms
              </Link>
            </div>

            {/* Related Resources */}
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Related Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/care-plan" className="p-3 bg-white rounded border border-blue-200 hover:bg-blue-50 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Personal Care Plan</p>
                  <p className="text-gray-600 text-sm">Build your support system</p>
                </Link>
                <Link href="/pages/neurodivergent/sensory-profiles" className="p-3 bg-white rounded border border-blue-200 hover:bg-blue-50 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Profile</p>
                  <p className="text-gray-600 text-sm">Map your sensory needs</p>
                </Link>
                <Link href="/pages/neurodivergent/meltdowns" className="p-3 bg-white rounded border border-blue-200 hover:bg-blue-50 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Managing Meltdowns</p>
                  <p className="text-gray-600 text-sm">Early warning signs & recovery</p>
                </Link>
                <Link href="/pages/neurodivergent/tolerance-window" className="p-3 bg-white rounded border border-blue-200 hover:bg-blue-50 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Window of Tolerance</p>
                  <p className="text-gray-600 text-sm">Understanding regulation</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
