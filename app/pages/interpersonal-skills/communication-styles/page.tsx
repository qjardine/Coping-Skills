'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CommunicationStylesPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-32 md:pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            <Link href="/pages/interpersonal-skills/communication-styles" className="text-blue-600 hover:text-blue-800 underline">Communication Styles</Link>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Communication isn't just what you say—it's how you protect your needs, your relationships, and your self-respect while you say it. In DBT Interpersonal Effectiveness, noticing your default style helps you get more choice: Do I want to be more direct? more gentle? more firm?
              </p>
              <p className="text-gray-700 mb-2">This page helps you:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Identify your primary communication style</li>
                <li>Understand how it impacts your relationships</li>
                <li>Choose small, practical shifts toward <Link href="/pages/interpersonal-skills/assertiveness" className="text-blue-600 hover:text-blue-800 underline">assertive communication</Link> (the DBT "sweet spot")</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                When to use this page
              </h2>
              <p className="text-gray-700 mb-3">Use this when you notice:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>You leave conversations feeling resentful, guilty, or misunderstood</li>
                <li>You avoid asking for what you need (then stew later)</li>
                <li>You come in too hot and regret it</li>
                <li>You "agree" but feel pressured, then shut down or get sarcastic</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1: Take the <Link href="/pages/interpersonal-skills/communication-styles" className="text-blue-600 hover:text-blue-800 underline">communication styles</Link> quiz
              </h2>
              <p className="text-gray-700 mb-3">
                Read each statement and check the ones that feel most characteristic of you.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Assertive Style
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>I feel that I am allowed to express my thoughts and emotions to other people.</li>
                  <li>I pay attention to both my own needs and those of other people, and I am good at making compromises.</li>
                  <li>I always try to listen carefully to what other people are trying to tell me, and I make sure they know that.</li>
                  <li>If I have an argument with somebody, I can express myself (my thoughts and emotions) in a clear and honest way.</li>
                  <li>I treat myself and other people with respect while I'm communicating with them.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Passive Style
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>If I express my feelings, other people will get mad at me or they will reject me.</li>
                  <li>I am usually quiet because I don't want to upset people.</li>
                  <li>I try to ignore my feelings instead of communicating them to other people.</li>
                  <li>I don't state clearly when something matters to me or when I care about an issue.</li>
                  <li>I try to avoid having the spotlight on me by stating an opinion that's different.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Aggressive Style
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Some of my friends are intimidated by me.</li>
                  <li>I always put my own needs and goals first, regardless of the others around me.</li>
                  <li>My way is always the right way.</li>
                  <li>I often swear, yell and I am verbally aggressive with people.</li>
                  <li>I don't care if the needs of the people around me are met.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Passive-Aggressive Style
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>When I am angry with somebody I ignore them and I am silent with them.</li>
                  <li>Even if I want something else, I agree to do the things that people around me want to do.</li>
                  <li>When I am angry I tend to mock people in some way.</li>
                  <li>I don't express my emotions clearly, but I show people that I am angry in other ways.</li>
                  <li>I try to express my anger in a more toned down way because I don't want to feel rejected.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2: Score it (quick + useful)
              </h2>
              <p className="text-gray-700 mb-2">Count how many you checked in each category.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Highest score = your default style</li>
                <li>Second-highest = your backup style under stress</li>
                <li>If two tie: you may switch styles depending on the relationship (work vs partner vs family)</li>
              </ul>
              <p className="text-gray-700 font-semibold">
                Mini-check: Which style shows up when you're tired, hungry, triggered, or overwhelmed?
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3: Learn what each style is "trying to do"
              </h2>
              <p className="text-gray-700 mb-3">
                Every style is attempting to solve a problem.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Assertive Style
                </h3>
                <p className="text-gray-700 mb-2"><strong>Goal:</strong> meet needs while protecting relationship + self-respect</p>
                <p className="text-gray-700 mb-2"><strong>How it lands:</strong> clear, respectful, collaborative</p>
                <p className="text-gray-700">Common risk: can feel "too direct" to people used to you being passive</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Passive Style
                </h3>
                <p className="text-gray-700 mb-2"><strong>Goal:</strong> prevent <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link> / rejection</p>
                <p className="text-gray-700 mb-2"><strong>How it lands:</strong> unclear, quiet, self-erasing</p>
                <p className="text-gray-700">Cost: needs don't get met → resentment, burnout, feeling invisible</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Aggressive Style
                </h3>
                <p className="text-gray-700 mb-2"><strong>Goal:</strong> prevent vulnerability / gain control / <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">stop</Link> feeling powerless</p>
                <p className="text-gray-700 mb-2"><strong>How it lands:</strong> intimidating, forceful, "I win/you lose"</p>
                <p className="text-gray-700">Cost: relationship damage, escalation, regret, people withdraw</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Passive-Aggressive Style
                </h3>
                <p className="text-gray-700 mb-2"><strong>Goal:</strong> express anger safely without direct conflict</p>
                <p className="text-gray-700 mb-2"><strong>How it lands:</strong> confusing, indirect, punishing (silence/sarcasm)</p>
                <p className="text-gray-700">Cost: issues don't resolve, trust erodes, you feel stuck</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4: Map your pattern (2 minutes)
              </h2>
              <p className="text-gray-700 mb-2 font-medium">Fill in these prompts:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Predominant style:</li>
                <li>Who do you use it with most? (partner, parent, boss, roommate, friends)</li>
                <li>What triggers it? (criticism, feeling ignored, fear of rejection, feeling controlled)</li>
                <li>What do you get short-term? (peace, distance, control, no <Link href="/pages/interpersonal-skills/conflict" className="text-blue-600 hover:text-blue-800 underline">conflict</Link>)</li>
                <li>What does it cost long-term? (resentment, loneliness, fights, lost trust)</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 5: Choose a "one-step shift" toward assertive
              </h2>
              <p className="text-gray-700 mb-3">Pick ONE change for your next real conversation.</p>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">If you're Passive → try one clear sentence</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I'm not available for that."</li>
                  <li>"I need time to think—can I answer tomorrow?"</li>
                  <li>"This matters to me."</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">If you're Aggressive → try soften + state the need</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Lower volume, slower pace, fewer words</li>
                  <li>"I'm frustrated. What I need is ____."</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">If you're Passive-Aggressive → try name the feeling directly</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"I'm feeling hurt and I'm pulling away."</li>
                  <li>"I'm upset. Can we talk for 10 minutes tonight?"</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 font-semibold mb-2">If you're Assertive already → try intensity tuning</p>
                <p className="text-gray-700 ml-4">
                  Use your <Link href="/pages/interpersonal-skills/interpersonal-intensity" className="text-blue-600 hover:text-blue-800 underline">Interpersonal Intensity</Link> page: not every request needs "full volume."
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 6: Practice script (copy/paste)
              </h2>
              <p className="text-gray-700 mb-2">Use this structure when you don't know what to say:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Fact: "When ____ happened…"</li>
                <li>Feeling: "I felt ____."</li>
                <li>Need/Request: "I need / I'm asking for ____."</li>
                <li>Boundary (if needed): "If that can't happen, I'll ____."</li>
              </ol>
              <p className="text-gray-700 mb-2 font-medium">Example:</p>
              <p className="text-gray-700 ml-4 italic">
                "When plans change last minute, I feel stressed. I need a heads-up earlier. If it's last-minute, I might skip this time."
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Worksheets
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-2">A) Quiz results</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Assertive: __</li>
                    <li>Passive: __</li>
                    <li>Aggressive: __</li>
                    <li>Passive-Aggressive: __</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-2">B) Reflection</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Default style: __</li>
                    <li>Backup style under stress: __</li>
                    <li>Most common trigger: __</li>
                    <li>One-step shift I'll try next: __</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-20 right-4 md:bottom-6 md:right-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-[calc(100%-2rem)] md:w-auto"
      >
        Return to Landing
      </button>
    </div>
  );
}

