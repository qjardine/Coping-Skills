'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function RainPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            RAIN Mindfulness Technique
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Mindfulness is a state of nonjudgmental awareness of the present moment—including thoughts, emotions, and body sensations. Practicing mindfulness can support recovery from anxiety, depression, and addiction by helping you notice what's happening without getting swept away by it.
              </p>
              <p className="text-gray-700 mb-4">
                RAIN is a simple, powerful mindfulness practice for working with difficult inner experiences:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li><strong>Recognize</strong> what's happening</li>
                <li><strong>Allow</strong> it to be there (without fighting it)</li>
                <li><strong>Investigate</strong> with curiosity</li>
                <li><strong>Nurture</strong> with compassion</li>
              </ul>
              <p className="text-gray-700 mb-4 text-sm italic">
                The acronym was first coined by meditation teacher Michele McDonald and later adapted and popularized (including the "Nurture" step) by psychologist and meditation teacher Tara Brach.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Download Worksheet</h3>
              <a
                href="/assets/Worksheets/rain.pdf"
                download
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Download RAIN Worksheet (PDF)
              </a>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-gray-700">
                <strong>Grounding reminder:</strong> If you notice you're bracing, holding your breath, or mentally "sprinting," pause and take <strong>one slow exhale</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                How to use RAIN
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Pick one moment to work with (a feeling, urge, memory fragment, argument replay, body tension).</li>
                <li>Go slow. You can linger on each step for a minute—or ten.</li>
                <li>If things intensify, you can "downshift" (see "If you get overwhelmed" below).</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This can be done sitting, lying down, walking, or even with eyes open in public.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Prepare
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Get comfortable (sit or lie down).</li>
                <li>Soften your gaze or close your eyes.</li>
                <li>Take three slow breaths.</li>
              </ol>
              <p className="text-gray-700 mt-3 italic">
                If it helps, put a hand on your chest or belly as a steady anchor.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) R — Recognize what's here
              </h2>
              <p className="text-gray-700 mb-3">
                <strong>Goal:</strong> name your present-moment experience clearly.
              </p>
              <p className="text-gray-700 mb-2 font-medium">Try:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>"This is anxiety."</li>
                <li>"This is anger."</li>
                <li>"This is shame."</li>
                <li>"This is an urge."</li>
                <li>"My body is feeling tight / buzzy / heavy."</li>
              </ul>
              <p className="text-gray-700 p-3 bg-blue-50 rounded">
                <strong>Tip:</strong> Keep it simple. You're not solving anything yet—you're just turning toward what's true.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) A — Allow it to be here (for now)
              </h2>
              <p className="text-gray-700 mb-3">
                <strong>Goal:</strong> stop the tug-of-war.
              </p>
              <p className="text-gray-700 mb-3">
                Allowing doesn't mean liking it or agreeing with it. It means: "I'll let this be here in my awareness without pushing it away."
              </p>
              <p className="text-gray-700 mb-2 font-medium">Try:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>"This is how it is right now."</li>
                <li>"I can make room for this feeling."</li>
                <li>"Let it come, let it be, let it go."</li>
              </ul>
              <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-gray-700">
                  <strong>Common block:</strong> "If I allow it, it'll never stop."<br />
                  <strong>Counter:</strong> Allowing is often what helps feelings move through instead of getting stuck.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) I — Investigate with curiosity
              </h2>
              <p className="text-gray-700 mb-3">
                <strong>Goal:</strong> gently explore what's underneath—without interrogation or self-criticism.
              </p>
              <p className="text-gray-700 mb-3">
                Use a soft, curious tone. Questions you can try:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
                <li><strong>Thoughts:</strong> "What words or images are repeating?"</li>
                <li><strong>Emotions:</strong> "What am I feeling most strongly?"</li>
                <li><strong>Body:</strong> "Where do I feel it in my body (throat, chest, stomach, jaw)?"</li>
                <li><strong>Need:</strong> "What does the most vulnerable part of me need right now—acceptance, reassurance, rest, belonging?"</li>
              </ul>
              <p className="text-gray-700 p-3 bg-blue-50 rounded">
                <strong>Tip:</strong> If you get lost in the story, come back to the body: "Where is this showing up physically?"
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) N — Nurture with self-compassion
              </h2>
              <p className="text-gray-700 mb-3">
                <strong>Goal:</strong> offer yourself the kind of care you'd offer someone you love.
              </p>
              <p className="text-gray-700 mb-2 font-medium">Choose one:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
                <li><strong>A comforting message:</strong> "I'm here." "You're okay." "This makes sense." "I love you."</li>
                <li><strong>Supportive touch</strong> (hand on heart, cheek, hug your shoulders)</li>
                <li><strong>Imagine warmth</strong> from someone/something supportive (friend, pet, spiritual figure)</li>
              </ul>
              <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-gray-700 mb-2">
                  <strong>If self-compassion feels impossible:</strong> try "neutral compassion":
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"This is hard."</li>
                  <li>"Many people feel this."</li>
                  <li>"May I be gentle with myself right now."</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Conclude
              </h2>
              <p className="text-gray-700 mb-3">
                Take three slow breaths. Then set a tiny next step:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>drink water</li>
                <li>stretch</li>
                <li>step outside</li>
                <li>write one sentence about what you noticed</li>
                <li>text a supportive person</li>
              </ul>
              <p className="text-gray-700 font-medium">
                And: "I'll keep being kind to myself today."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Quick versions
              </h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  30-second RAIN (in public, at work, mid-urge)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Recognize:</strong> "Anxiety."</li>
                  <li><strong>Allow:</strong> "Okay, for now."</li>
                  <li><strong>Investigate:</strong> (one breath + "where is this in my body?")</li>
                  <li><strong>Nurture:</strong> (exhale + "I'm safe enough in this moment.")</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  RAIN as a loop (when feelings come in waves)
                </h3>
                <p className="text-gray-700">
                  Repeat the letters gently as the experience shifts. Sometimes it's:<br />
                  R → A → (back to R) → A → I → N.
                </p>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                If you get overwhelmed
              </h2>
              <p className="text-gray-700 mb-3">
                If RAIN makes you feel more activated:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Open your eyes</li>
                <li>Name 5 things you see</li>
                <li>Feel your feet on the floor</li>
                <li>Switch to a simpler skill (paced breathing, cold water, grounding)</li>
                <li>Try RAIN later with a smaller, less intense target</li>
              </ul>
              <p className="text-gray-700 font-medium">
                If you're in immediate danger, can't stay safe, or might act on self-harm/substance urges in the next few minutes, use your <Link href="/pages/crisis" className="text-red-600 hover:text-red-800 underline font-semibold">crisis plan</Link> or local emergency supports first.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Pairing ideas (especially for addiction + anxiety)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>RAIN + Urge Surfing:</strong> Use RAIN during the peak of an urge, then surf the wave once you're more centered.</li>
                <li><strong>RAIN + Chain Analysis:</strong> Use RAIN to settle your body first, then map the links with more clarity.</li>
                <li><strong>RAIN + Self-Validation:</strong> Turn the "Nurture" step into a validation script: "Of course I feel this—given what happened."</li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">
                  Conscious Breathing
                </Link>
                <Link href="/pages/emotional-regulation/mindful-emotions" className="text-blue-600 hover:text-blue-800 underline">
                  Mindful Emotion Awareness
                </Link>
                <Link href="/pages/emotional-regulation/self-validation" className="text-blue-600 hover:text-blue-800 underline">
                  Self-Validation
                </Link>
                <Link href="/pages/emotional-regulation/self-compassion" className="text-blue-600 hover:text-blue-800 underline">
                  Self-Compassion
                </Link>
                <Link href="/pages/mindfulness/body-scan/how-long" className="text-blue-600 hover:text-blue-800 underline">
                  Body Scan
                </Link>
                <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">
                  ACCEPTS
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
