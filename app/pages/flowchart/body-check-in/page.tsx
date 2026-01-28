'use client';

import { useRouter } from 'next/navigation';

export default function BodyCheckInPage() {
  const router = useRouter();

  const handleBodyCheckInYes = () => {
    router.push('/pages/flowchart/feelings');
  };

  const handleBodyCheckInGuide = () => {
    router.push('/pages/mindfulness/body-scan/how-long');
  };

  const handleBodyCheckInUnsafe = () => {
    router.push('/pages/mindfulness/body-scan/unsafe-body-check');
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Can you check into your body?
            </h1>
          </div>

          <div className="space-y-4 mb-12">
            <button
              onClick={handleBodyCheckInYes}
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              Yes, I know how I'm feeling
            </button>
            <button
              onClick={handleBodyCheckInGuide}
              className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              No, please guide me through a body scan
            </button>
            <button
              onClick={handleBodyCheckInUnsafe}
              className="w-full px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              No, it feels unsafe to check into my body
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Can You Check Into Your Body?
              </h2>
              <p className="text-gray-700 mb-4">
                Emotion Regulation is the Dialectical Behavioral Therapy (DBT) module that teaches how emotions work—so you can manage emotions instead of being managed by them. One of the fastest ways to figure out what you're feeling is to check your body first.
              </p>
              <p className="text-gray-700 mb-4">
                Why? Emotions don't only happen in your head. They show up as sensations (tight chest, heavy limbs, buzzing skin, nausea, numbness), and learning to notice those signals helps you identify, name, and regulate what's happening. Body-based mindfulness practices like the body scan are commonly used to build this awareness.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                /feelings — "Yes, I know how I'm feeling"
              </h3>
              <p className="text-gray-700 mb-3">
                If you already have a read on your emotional state, your job is to name it clearly so the rest of DBT can work.
              </p>
              <div className="ml-4 space-y-2">
                <p className="text-gray-700"><strong>Step 1: Name the emotion (one word if possible)</strong></p>
                <p className="text-gray-700 ml-4">Use the feelings wheel by selecting yes if needed (start broad → narrow):</p>
                <p className="text-gray-700 ml-4">Anger / Fear / Sadness / Shame / Joy / Disgust / Surprise / Love</p>
                <p className="text-gray-700 ml-4 text-sm italic">Then refine: irritated → angry → furious, etc. (Emotion wheels are often based on Plutchik-style primary emotions.)</p>
                
                <p className="text-gray-700"><strong>Step 2: Rate intensity (0–10)</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>0–3: low</li>
                  <li>4–6: medium</li>
                  <li>7–10: high (consider crisis skills first)</li>
                </ul>

                <p className="text-gray-700"><strong>Step 3: Do a 20-second body label anyway</strong></p>
                <p className="text-gray-700 ml-4">Even if you "know," add one line:</p>
                <p className="text-gray-700 ml-4">"In my body I notice: ________."</p>
                <p className="text-gray-700 ml-4 text-sm italic">You can also check in with the emotion-sensation wheel.</p>

                <p className="text-gray-700"><strong>Step 4: Quick emotion chain (DBT-style)</strong></p>
                <p className="text-gray-700 ml-4 mb-2">Fill in one sentence each:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                  <li>Prompting event: What kicked this off?</li>
                  <li>Interpretation: What story did my mind tell?</li>
                  <li>Emotion + body: What do I feel + where?</li>
                  <li>Urge: What do I want to do?</li>
                  <li>Next best skill: (Check the Facts / Opposite Action / Problem Solving)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                "No, please guide me through a body scan"
              </h3>
              <p className="text-gray-700 mb-3">
                This is a short, gentle scan designed for emotion identification (not forcing relaxation).
              </p>
              <div className="ml-4 space-y-2">
                <p className="text-gray-700"><strong>1, 5 or 15 Minute Guided Body Scan (neurodivergent + trauma-aware options)</strong></p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Set your safety dial</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Eyes open or closed—your choice.</li>
                      <li>Pick a safe anchor: feet on floor, hands on thighs, back against chair.</li>
                    </ul>
                  </li>
                  <li><strong>One breath, then scan in "islands"</strong>
                    <p className="ml-6 mt-1">Don't search your whole body at once. Touch down briefly:</p>
                    <ul className="list-disc list-inside ml-8">
                      <li>Forehead / jaw</li>
                      <li>Throat / chest</li>
                      <li>Belly</li>
                      <li>Hands</li>
                      <li>Legs / feet</li>
                    </ul>
                  </li>
                  <li><strong>Label only, no fixing</strong>
                    <p className="ml-6 mt-1">Use neutral words:</p>
                    <p className="ml-8">tight, heavy, fluttery, warm, cold, numb, buzzing, shaky, settled</p>
                  </li>
                  <li><strong>Stop rules</strong>
                    <p className="ml-6 mt-1">If you feel "too much":</p>
                    <ul className="list-disc list-inside ml-8">
                      <li>return to your safe anchor</li>
                      <li>press feet into floor</li>
                      <li>look around and name 5 objects</li>
                    </ul>
                  </li>
                  <li><strong>Name the emotion</strong>
                    <p className="ml-6 mt-1">Ask: "If this sensation could talk, what emotion would it name?"</p>
                    <p className="ml-6 mt-1">Then go to the feelings wheel.</p>
                  </li>
                </ol>
                <p className="text-gray-700 ml-4 text-sm italic mt-2">
                  Body-scan style practices are widely used in mindfulness programs and studied in clinical populations (including PTSD), with different components (like body scan vs breathing) examined separately. If you're ready for a body scan, select the "No, please guide me through a body scan" button above.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                "No, it feels unsafe to check into my body"
              </h3>
              <p className="text-gray-700 mb-3">
                That's valid. For some people—especially with trauma, chronic pain, dissociation, sensory overwhelm, or interoception difficulties—body attention can spike distress.
              </p>
              <p className="text-gray-700 mb-3 text-sm italic">
                Trauma-informed mindfulness emphasizes choice, pacing, and external grounding instead of forcing internal focus.
              </p>
              <div className="ml-4 space-y-2">
                <p className="text-gray-700"><strong>Step 1: Safety first (pick one grounding option)</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Orienting: Look around and name: 5 things you see, 4 feel, 3 hear, 2 smell, 1 taste.</li>
                  <li>Edges: Feel the chair, the floor, the wall—contact points only.</li>
                  <li>Temperature: Hold something cool/warm (mug, ice pack wrapped).</li>
                  <li>Movement: Shake out hands, roll shoulders, stand and sit once.</li>
                </ul>

                <p className="text-gray-700"><strong>Step 2: Identify emotion without the body</strong></p>
                <p className="text-gray-700 ml-4">Use "outside-in" cues:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                  <li>What happened right before this? (prompting event)</li>
                  <li>What am I thinking on repeat?</li>
                  <li>What urge is here? (hide, lash out, numb, fix, flee)</li>
                </ul>
                <p className="text-gray-700 ml-4 mt-2">Then choose from the feelings wheel without scanning sensations. If you'd like more information about safer alternatives to a body scan, please select the "No, it feels unsafe to check into my body" button above.</p>

                <p className="text-gray-700"><strong>Step 3: If you're overwhelmed, don't force emotion work</strong></p>
                <p className="text-gray-700 ml-4">If you're at 8–10 intensity or at risk of impulsive behavior:</p>
                <p className="text-gray-700 ml-8">→ use crisis skills first (STOP/TIP/ACCEPTS)</p>
                <p className="text-gray-700 ml-4 mt-2">Then come back to identify emotions when you're steadier.</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Why this page exists
              </h3>
              <p className="text-gray-700 mb-3">
                You can't "use the right DBT skill" if you don't know what you're feeling. Emotion naming is the entry point to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Check the Facts</li>
                <li>Opposite Action</li>
                <li>Problem Solving</li>
                <li>Boundary/Interpersonal skills</li>
              </ul>
              <p className="text-gray-700">Even a rough label is better than none.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                FAQs
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>What if I feel numb or blank?</strong></p>
                <p className="text-gray-700 ml-4">Try: "numb / shut down / foggy" + rate intensity. Then check urges (sleep, scroll, isolate, use substances). That's still useful data.</p>

                <p className="text-gray-700"><strong>What if I feel multiple emotions at once?</strong></p>
                <p className="text-gray-700 ml-4">Pick the loudest one first (highest intensity). Secondary emotions can come later.</p>

                <p className="text-gray-700"><strong>What if body scanning makes me spiral?</strong></p>
                <p className="text-gray-700 ml-4">Use /safe-check-in only. Trauma-informed practice means you don't push through activation—you build tolerance slowly, with choice.</p>

                <p className="text-gray-700"><strong>How often should I do this?</strong></p>
                <p className="text-gray-700 ml-4">Quick check-ins work best:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                  <li>morning baseline</li>
                  <li>before hard conversations</li>
                  <li>when you notice a mood shift</li>
                  <li>after conflict or overwhelm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
