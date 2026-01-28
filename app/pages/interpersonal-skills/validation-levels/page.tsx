'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ValidationLevelsPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
            Six Levels of Validation (DBT)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                What this is
              </h2>
              <p className="text-gray-700 mb-4">
                Validation is acknowledging that someone's experience makes sense, even if you don't agree with their actions or conclusions. DBT teaches six levels of validation, from basic presence to radical genuineness. These levels apply to both validating others and <Link href="/pages/emotional-regulation/self-validation" className="text-blue-600 hover:text-blue-800 underline">self-validation</Link>.
              </p>
              <p className="text-gray-700">
                <strong>Why it matters:</strong> Validation reduces emotional intensity, builds trust, and helps people feel understood. It's a core mechanism in DBT for improving relationships and emotional regulation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Level 1: Being Present and Attentive
              </h2>
              <p className="text-gray-700 mb-3">
                The most basic form of validation: simply being there, paying attention, and not dismissing or avoiding the person's experience.
              </p>
              <p className="text-gray-700 font-medium mb-2">What this looks like:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Putting down your phone when someone is talking</li>
                <li>Making eye contact (if comfortable)</li>
                <li>Nodding or using brief acknowledgments ("I see," "Mm-hmm")</li>
                <li>Not interrupting or changing the subject</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                <strong>Example:</strong> Your friend says "I'm really stressed about work" and you put down your phone, turn toward them, and say "I'm listening."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Level 2: Accurate Reflection
              </h2>
              <p className="text-gray-700 mb-3">
                Reflecting back what you heard, showing you understood the content of what they said.
              </p>
              <p className="text-gray-700 font-medium mb-2">What this looks like:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Paraphrasing what they said: "So you're feeling overwhelmed because of the deadline?"</li>
                <li>Reflecting emotions: "It sounds like you're frustrated."</li>
                <li>Asking clarifying questions: "Did I understand correctly that...?"</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                <strong>Example:</strong> "You're saying you feel hurt because I didn't call you back yesterday."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Level 3: Reading Minds / Articulating the Unspoken
              </h2>
              <p className="text-gray-700 mb-3">
                Noticing and naming what the person might be feeling or thinking but hasn't said directly. This shows you're paying close attention to their nonverbal cues and patterns.
              </p>
              <p className="text-gray-700 font-medium mb-2">What this looks like:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>"I'm wondering if you're also feeling scared about..."</li>
                <li>"It seems like maybe you're worried I'll be upset."</li>
                <li>"I'm guessing part of you feels relieved, but also guilty?"</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                <strong>Example:</strong> "You said you're fine, but I notice you're avoiding eye contact. I'm wondering if you're actually pretty upset about what happened."
              </p>
              <p className="text-gray-700 mt-3 text-sm">
                <strong>Important:</strong> This requires knowing the person well. Don't assume—use "I'm wondering if..." or "It seems like maybe..." rather than stating it as fact.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Level 4: Understanding in Terms of Past Learning and History
              </h2>
              <p className="text-gray-700 mb-3">
                Validating that their response makes sense given their past experiences, trauma history, or learned patterns—even if the response isn't ideal for the current situation.
              </p>
              <p className="text-gray-700 font-medium mb-2">What this looks like:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>"Given what you went through with your ex, it makes total sense you'd be suspicious."</li>
                <li>"After years of being criticized, of course you're defensive when I give feedback."</li>
                <li>"Your brain learned to protect you by shutting down when things get intense—that's a survival response."</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                <strong>Example:</strong> "Given that you were raised in a household where expressing anger wasn't safe, it makes sense that you freeze up when conflict starts."
              </p>
              <p className="text-gray-700 mt-3">
                <strong>Note:</strong> This doesn't mean the behavior is okay or shouldn't change—it means the response is understandable given the context.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Level 5: Acknowledging the Valid, Understandable, or Effective
              </h2>
              <p className="text-gray-700 mb-3">
                Recognizing that their feelings, thoughts, or actions are valid, understandable, or effective—even if you don't agree with them or would do something different.
              </p>
              <p className="text-gray-700 font-medium mb-2">What this looks like:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>"Your anger makes sense—they really did break a promise."</li>
                <li>"It's completely valid to feel hurt by that comment."</li>
                <li>"Your decision to set that boundary was effective—it protected your energy."</li>
                <li>"I can see why you'd think that, given what you observed."</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                <strong>Example:</strong> "You're right to be upset. They said they'd help and then didn't show up. That's frustrating and disappointing."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                Level 6: Radical Genuineness
              </h2>
              <p className="text-gray-700 mb-3">
                Treating the person as a capable equal, being genuine and authentic in your response, and not treating them as fragile or "sick." This means being real—including when you disagree or when you see things differently.
              </p>
              <p className="text-gray-700 font-medium mb-2">What this looks like:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Being honest about your own reactions: "I'm feeling defensive right now, and I want to understand what you need."</li>
                <li>Not talking down to them or using "therapy voice"</li>
                <li>Sharing your own similar experiences when relevant</li>
                <li>Being direct: "I think you're catastrophizing here, and I also get why you're scared."</li>
                <li>Treating them as capable of handling difficult truths</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                <strong>Example:</strong> "Look, I think you're being too hard on yourself, AND I also know you're going through a really rough time. Both can be true. What do you think?"
              </p>
              <p className="text-gray-700 mt-3">
                <strong>Key point:</strong> Radical genuineness means being real, not perfect. It's about authenticity and treating people as equals who can handle complexity.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg border border-green-200 p-6 mt-6">
              <h2 className="text-xl font-semibold mb-3 text-green-800">
                How to Use These Levels
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Start with Level 1:</strong> Always begin with presence and attention.</li>
                <li><strong>Match the level to the situation:</strong> Not every moment needs Level 6. Sometimes Level 2 (reflection) is enough.</li>
                <li><strong>Build up:</strong> You can use multiple levels in one conversation—start with reflection, then add understanding.</li>
                <li><strong>Self-validation:</strong> Apply these same levels to yourself. Notice when you're dismissing your own experience and practice validating it.</li>
                <li><strong>Validation ≠ Agreement:</strong> You can validate someone's feelings without agreeing with their actions or conclusions.</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mt-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Common Mistakes to Avoid
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Invalidating:</strong> "You shouldn't feel that way," "That's not a big deal," "Just get over it."</li>
                <li><strong>Fixing instead of validating:</strong> Jumping to solutions before acknowledging the emotion.</li>
                <li><strong>One-upping:</strong> "Oh, that's nothing—wait until you hear what happened to me!"</li>
                <li><strong>Minimizing:</strong> "At least it wasn't worse," "Everything happens for a reason."</li>
                <li><strong>Being fake:</strong> Using "therapy voice" or being overly gentle when radical genuineness would be more helpful.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <button
          onClick={() => router.push('/pages/emotional-regulation/self-validation')}
          className="px-4 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Learn About Self-Validation
        </button>
        <button
          onClick={handleReturnToLanding}
          className="px-4 md:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing
        </button>
      </div>
    </div>
  );
}
