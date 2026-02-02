'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4 text-gray-800">
              404
            </h1>
            <p className="text-2xl text-gray-600">
              Page Not Found
            </p>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg mb-8">
            <p className="text-gray-700 mb-6 text-center">
              The page you're looking for doesn't exist or may have been moved.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Here are some helpful links:
              </h2>
              
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-center"
                >
                  Start DBT Skills Flowchart
                </Link>
                
                <Link
                  href="/pages/landing-page"
                  className="block px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-center"
                >
                  Browse All Skills
                </Link>
                
                <Link
                  href="/pages/crisis"
                  className="block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-center"
                >
                  Crisis Help Now
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 backdrop-blur-sm rounded-lg border border-blue-200 p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link
                href="/pages/mindfulness"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Mindfulness Skills
              </Link>
              <Link
                href="/pages/distress-tolerance"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Distress Tolerance
              </Link>
              <Link
                href="/pages/emotional-regulation/emotional-regulation"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Emotion Regulation
              </Link>
              <Link
                href="/pages/interpersonal-skills/interpersonal-skills"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Interpersonal Skills
              </Link>
              <Link
                href="/pages/about"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                About the Skills
              </Link>
              <Link
                href="/pages/self-harm"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Self-Harm Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
