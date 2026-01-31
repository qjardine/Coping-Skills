'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

export default function BodyScanPage() {
  const router = useRouter();

  const handleTimeSelect = ({ duration }: { duration: string }) => {
    router.push(`/pages/mindfulness/body-scan/${duration}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              How long would you like to spend on your body scan?
            </h1>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => {
                handleTimeSelect({ duration: '1min' });
              }}
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              1 min
            </button>
            <button
              onClick={() => {
                handleTimeSelect({ duration: '5min' });
              }}
              className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              5 min
            </button>
            <button
              onClick={() => {
                handleTimeSelect({ duration: '15min' });
              }}
              className="w-full px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              15 min
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/body-scan-script.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Try the Worksheet (pdf)
        </a>
        <a
          href="/assets/Worksheets/body-scan-interact.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Interactive Worksheet (pdf)
        </a>
      </div>
    </div>
  );
}
