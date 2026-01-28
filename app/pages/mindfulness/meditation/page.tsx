'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function MeditationPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">Meditation</Link>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">Meditation</Link>?
              </h2>
              <p className="text-gray-700 mb-4">
                Meditation is a practice of training attention and <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> to achieve mental clarity, emotional calm, and a sense of presence. Research shows <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">meditation</Link> can reduce stress, <Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">improve</Link> emotional regulation, enhance focus, and support overall well-being.
              </p>
              <p className="text-gray-700 mb-4">
                There's no "one right way" to meditate. Different techniques work for different people, and what helps you may change over time. The key is finding practices that feel accessible and sustainable for your unique brain and body.
              </p>
              <p className="text-gray-700">
                For neurodivergent individuals (ADHD, autism, etc.), traditional seated <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">meditation</Link> can feel challenging. This page offers various approaches, including movement-based, sensory-focused, and shorter-duration options that may work better for atypical brains.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Traditional <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">Meditation</Link> Techniques
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Befriending Your Breath
                  </h3>
                  <p className="text-gray-700 mb-3">
                    This is a foundational mindfulness practice that uses the breath as an anchor. Instead of controlling your breath, you simply notice it.
                  </p>
                  <p className="text-gray-700 mb-2 font-medium">How to practice:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>Find a comfortable position (sitting, lying, or standing)</li>
                    <li>Close your eyes or soften your gaze</li>
                    <li>Notice your breath without changing it</li>
                    <li>When your mind wanders (it will), gently return attention to the breath</li>
                    <li>Start with 2-5 minutes, gradually increasing if helpful</li>
                  </ol>
                  <p className="text-gray-700 mt-3 text-sm italic">
                    Neurodivergent note: If focusing on breath feels dysregulating, try external anchors instead (sounds, textures, or movement).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Loving Kindness <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">Meditation</Link> (Metta)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    This practice cultivates compassion and warmth toward yourself and others through intentional phrases.
                  </p>
                  <p className="text-gray-700 mb-2 font-medium">How to practice:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>Start with yourself: "May I be safe. May I be happy. May I be healthy. May I live with ease."</li>
                    <li>Repeat silently or out loud, feeling the intention behind the words</li>
                    <li>Then extend to someone you care about: "May [name] be safe..."</li>
                    <li>Then to a neutral person, then to someone difficult (if accessible)</li>
                    <li>Finally, extend to all beings</li>
                  </ol>
                  <p className="text-gray-700 mt-3 text-sm italic">
                    Research suggests loving-kindness <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">meditation</Link> can increase positive emotions and reduce self-criticism.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Walking <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">Meditation</Link>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Movement-based <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">meditation</Link> can be easier for people who find sitting still challenging. You bring mindful <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> to the act of walking.
                  </p>
                  <p className="text-gray-700 mb-2 font-medium">How to practice:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>Walk slowly, paying attention to each step</li>
                    <li>Notice the sensation of your feet touching the ground</li>
                    <li>Feel your body moving through space</li>
                    <li>When your mind wanders, return to the physical sensations of walking</li>
                    <li>You can walk in a circle, back and forth, or on a path</li>
                  </ol>
                  <p className="text-gray-700 mt-3">
                    This is especially helpful for ADHD brains that need movement to focus, or for anyone who finds seated <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">meditation</Link> uncomfortable.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Relaxation Response
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Developed by Dr. Herbert Benson, this technique activates the body's natural relaxation system, counteracting the stress response.
                  </p>
                  <p className="text-gray-700 mb-2 font-medium">How to practice:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>Choose a word, phrase, or sound that's meaningful to you (or use "one" or "peace")</li>
                    <li>Sit quietly in a comfortable position</li>
                    <li>Close your eyes and relax your muscles</li>
                    <li>Breathe naturally, and as you exhale, silently repeat your chosen word</li>
                    <li>When thoughts arise, gently return to your word</li>
                    <li>Continue for 10-20 minutes</li>
                  </ol>
                  <p className="text-gray-700 mt-3 text-sm italic">
                    Research shows this can lower blood pressure, reduce anxiety, and <Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">improve</Link> sleep.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Find Your Home Base
                  </h3>
                  <p className="text-gray-700 mb-3">
                    This practice helps you identify a physical anchor point in your body that feels safe and stable—useful for grounding during overwhelm or dissociation.
                  </p>
                  <p className="text-gray-700 mb-2 font-medium">How to practice:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>Scan your body to find one area that feels neutral or pleasant</li>
                    <li>Common "home bases": feet on floor, hands on thighs, lower belly, or the space between eyebrows</li>
                    <li>Rest your attention there gently</li>
                    <li>Notice the sensations without analyzing</li>
                    <li>When you feel scattered, return to this anchor</li>
                  </ol>
                  <p className="text-gray-700 mt-3">
                    This is trauma-informed and helpful for people who find body scanning overwhelming—you're choosing one safe spot rather than scanning everything.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Listen to Your Inner Empath
                  </h3>
                  <p className="text-gray-700 mb-3">
                    This practice helps you tune into your own needs and boundaries, especially if you tend to absorb others' emotions or lose yourself in relationships.
                  </p>
                  <p className="text-gray-700 mb-2 font-medium">How to practice:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>Take a few breaths and settle</li>
                    <li>Ask yourself: "What do I need right now?"</li>
                    <li>Listen without judgment—the first answer that comes is valid</li>
                    <li>Notice where in your body you feel the answer</li>
                    <li>If helpful, ask: "What would feel supportive?"</li>
                    <li>Take one small action toward that need if possible</li>
                  </ol>
                  <p className="text-gray-700 mt-3">
                    This builds interoceptive <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> and helps you distinguish your own feelings from others' energy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Gratitude Knocks
                  </h3>
                  <p className="text-gray-700 mb-3">
                    A quick, accessible practice that combines physical movement with gratitude, making it easier to access positive emotions.
                  </p>
                  <p className="text-gray-700 mb-2 font-medium">How to practice:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>Stand or sit comfortably</li>
                    <li>Think of one thing you're grateful for (can be tiny: "I have clean water")</li>
                    <li>Gently knock on a surface (table, your leg, wall) three times</li>
                    <li>With each knock, say (silently or out loud): "Thank you"</li>
                    <li>Feel the gratitude in your body</li>
                    <li>Repeat 2-3 times with different gratitudes</li>
                  </ol>
                  <p className="text-gray-700 mt-3">
                    The physical action helps anchor the practice and can be done anywhere, anytime. Research shows gratitude practices can increase well-being and reduce depression.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Neurodivergent-Friendly Adaptations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    For ADHD
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Use movement-based practices (walking, gentle stretching)</li>
                    <li>Keep sessions short (2-5 minutes) and build gradually</li>
                    <li>Use external anchors (sounds, textures, visual objects) instead of breath</li>
                    <li>Try "active" meditations like yoga or tai chi</li>
                    <li>Use timers and apps to structure practice</li>
                    <li>Don't judge yourself for a "busy mind"—noticing and returning is the practice</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    For Autism
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Choose sensory-friendly environments (dim lights, comfortable textures)</li>
                    <li>Use structured, predictable practices (same time, same place, same steps)</li>
                    <li>Focus on external anchors if interoception is challenging</li>
                    <li>Try body-based practices that use pressure or movement (weighted blanket, rocking)</li>
                    <li>Use scripts or guided meditations to reduce uncertainty</li>
                    <li>Allow stimming during practice if it helps you focus</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    For Trauma/CPTSD
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Keep eyes open and maintain <Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> of your surroundings</li>
                    <li>Use external anchors (sounds, objects, textures) rather than body scanning</li>
                    <li>Practice in short bursts (30 seconds to 2 minutes)</li>
                    <li>Have an exit plan and <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> if you feel activated</li>
                    <li>Use "Find Your Home Base" or "Listen to Your Inner Empath" practices</li>
                    <li>Consider working with a trauma-informed <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">meditation</Link> teacher</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Tips for Starting a <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">Meditation</Link> Practice
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Start small: Even 1-2 minutes counts</li>
                <li>Consistency matters more than duration: 2 minutes daily beats 20 minutes once a week</li>
                <li>Experiment: Try different techniques to find what works</li>
                <li>Be kind to yourself: A "busy" <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">meditation</Link> session still counts</li>
                <li>Use supports: Apps, timers, guided recordings, or body doubling can help</li>
                <li>Notice what helps: Track what practices feel good and what doesn't</li>
                <li>Modify as needed: There's no "right" way—adapt practices to your needs</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Research on <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">Meditation</Link>
              </h2>
              <p className="text-gray-700 mb-3">
                Scientific research supports <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">meditation</Link>'s benefits:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Reduces stress and anxiety (studies show decreased cortisol and improved stress response)</li>
                <li>Improves emotional regulation (increased activity in prefrontal cortex, decreased amygdala reactivity)</li>
                <li>Enhances attention and focus (especially helpful for ADHD)</li>
                <li>Supports physical health (lower blood pressure, improved immune function)</li>
                <li>Increases self-<Link href="/pages/mindfulness/awareness" className="text-blue-600 hover:text-blue-800 underline">awareness</Link> and interoception</li>
                <li>Can reduce symptoms of depression and <Link href="/pages/distress-tolerance/improve" className="text-blue-600 hover:text-blue-800 underline">improve</Link> overall well-being</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                Note: <Link href="/pages/mindfulness/meditation" className="text-blue-600 hover:text-blue-800 underline">Meditation</Link> is a complementary practice, not a replacement for professional mental health care when needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-16 md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-full md:w-auto"
      >
        Return to Landing
      </button>
    </div>
  );
}

