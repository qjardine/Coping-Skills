'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CarePlanPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Create Your Personal Care Plan
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                A care plan is a practical map for how you'll stay safe, fed, regulated, supported, and functioning—especially when you're overwhelmed, burned out, depressed, anxious, or in recovery.
              </p>
              <p className="text-gray-700 mb-4">
                For neurodivergent folks, care plans work best when they focus on accommodations, support systems, and reducing friction, not "trying harder."
              </p>
              <p className="text-gray-700 mb-3">
                This page walks you through building a plan for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>daily living</li>
                <li>eating/cooking</li>
                <li>finances</li>
                <li>sensory needs</li>
                <li>work/school</li>
                <li>sleep</li>
                <li>communication + relationships</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                And it strongly emphasizes reaching out—because care plans are most effective when they're shared with at least one other person (or team).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Your care plan has one job
              </h2>
              <p className="text-gray-700 mb-4">
                Your care plan exists to answer:
              </p>
              <p className="text-gray-700 mb-4 text-lg font-semibold text-center p-4 bg-blue-50 rounded">
                "What do I do when my capacity drops?"
              </p>
              <p className="text-gray-700 mb-4">
                Not once. Not perfectly. But reliably.
              </p>
              <p className="text-gray-700 mb-2">A good care plan:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>reduces decision fatigue</li>
                <li>makes support easy to request</li>
                <li>builds in accommodations before crisis</li>
                <li>assumes bad brain days will happen</li>
              </ul>
              <div className="p-4 bg-red-50 rounded border border-red-200">
                <p className="text-gray-700">
                  If you're in immediate danger or might act on urges in the next few minutes, start with your <Link href="/pages/crisis" className="text-red-600 hover:text-red-800 underline font-semibold">crisis steps</Link> first (and come back to this page later). The <Link href="/pages/crisis-help-now" className="text-red-600 hover:text-red-800 underline font-semibold">988 Suicide & Crisis Lifeline</Link> is available by call/text/chat.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) The care plan "layers"
              </h2>
              <p className="text-gray-700 mb-3">
                Think in layers, from easiest to biggest support:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Self supports</strong> (tiny actions that help right now)</li>
                <li><strong>Tools + environment</strong> (accommodations, automation, friction removal)</li>
                <li><strong>People supports</strong> (friends, chosen family, coworkers, community)</li>
                <li><strong>Professional supports</strong> (therapy, coaching, case management, OT)</li>
                <li><strong>Programs + services</strong> (benefits, waivers, vocational rehab, meal delivery)</li>
              </ol>
              <p className="text-gray-700 font-medium">
                You're not "failing" if you need layer 4–5. That's what they're for.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Pick your "capacity levels" (Green / Yellow / Red)
              </h2>
              <p className="text-gray-700 mb-3">
                Write a 1–2 sentence description for each:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong className="text-green-700">Green (steady):</strong> what you can usually do</li>
                <li><strong className="text-yellow-700">Yellow (wobble):</strong> early warning signs + what to reduce</li>
                <li><strong className="text-red-700">Red (overwhelm/shutdown):</strong> what must be simplified + what support is required</li>
              </ul>
              <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-gray-700 font-medium">
                  In Yellow/Red, the goal is safety + basics, not productivity.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) The Care Plan Template
              </h2>
              <p className="text-gray-700 mb-4">
                Copy/paste these headings into your notes app:
              </p>

              <div className="space-y-4 bg-gray-50 p-6 rounded border border-gray-200">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    A) My "non-negotiables" (basics)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Meds (if applicable)</li>
                    <li>Water</li>
                    <li>Food</li>
                    <li>Sleep/rest</li>
                    <li>Hygiene minimum</li>
                    <li>One connection (text/call/check-in)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    B) My early warning signs (Yellow)
                  </h3>
                  <p className="text-gray-700 mb-2">Examples:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>forgetting meals</li>
                    <li>sensory sensitivity spikes</li>
                    <li>doom-scrolling / avoidance</li>
                    <li>irritability, shutdown, dissociation</li>
                    <li>urges (self-harm, substances, spending, bingeing)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    C) My red flags (Red)
                  </h3>
                  <p className="text-gray-700 mb-2">Examples:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>can't eat / can't stop using</li>
                    <li>panic, self-harm urges, unsafe impulses</li>
                    <li>not sleeping 1–2 nights</li>
                    <li>can't do ADLs (shower, dishes, trash, meds)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    D) What helps me fast
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Body:</strong> <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP/cold water</Link>, <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">paced breathing</Link>, grounding</li>
                    <li><strong>Mind:</strong> <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">RAIN</Link>, <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">urge surfing</Link></li>
                    <li><strong>Environment:</strong> dark room, noise-canceling, comfort items</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    E) Who I contact and what I say
                  </h3>
                  <p className="text-gray-700 text-sm italic">(Use the scripts below.)</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    F) Accommodations I can request
                  </h3>
                  <p className="text-gray-700 text-sm italic">(Work/school/medical/community.)</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    G) Services/programs I can use
                  </h3>
                  <p className="text-gray-700 text-sm italic">(See section 13.)</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Reaching out: scripts that work
              </h2>
              <p className="text-gray-700 mb-4">
                When you're dysregulated, you want low-wording options.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    "I need a check-in"
                  </h3>
                  <p className="text-gray-700 italic">
                    "Hey—my capacity is low today. Can you check in with me tonight? A simple 'how are you doing' text helps."
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    "I need task support"
                  </h3>
                  <p className="text-gray-700 italic">
                    "Could you help me with one concrete thing—like ordering food, making a call, or sitting on the phone while I do dishes?"
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    "I need body doubling"
                  </h3>
                  <p className="text-gray-700 italic">
                    "Can we do 20 minutes of body-doubling? I'll do laundry/dishes while you do your thing."
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    "I need a safety plan moment"
                  </h3>
                  <p className="text-gray-700 italic">
                    "I'm having urges and I don't want to act on them. Can you stay with me while I ride it out for 10 minutes?"
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Daily living support (ADLs + "life admin")
              </h2>
              <p className="text-gray-700 mb-4">
                If daily tasks pile up, your plan should focus on reducing steps and outsourcing where possible.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Supports to consider
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Care tasks list with "minimum version" options:</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6 mt-1">
                    <li>Shower → wipe-down + deodorant</li>
                    <li>Full clean → one bag of trash</li>
                    <li>Laundry → "socks/underwear only"</li>
                  </ul>
                </li>
                <li><strong>Automation:</strong> auto-pay bills, recurring grocery order, pharmacy refill reminders</li>
                <li><strong>Body-doubling:</strong> friend, coworking call, Discord, community space</li>
                <li><strong>Professional help:</strong> occupational therapy (OT) for routines/sensory systems (if accessible)</li>
              </ul>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  When you need more than hacks
                </h3>
                <p className="text-gray-700">
                  Home- and community-based supports can cover help with everyday activities for eligible people. Medicaid's Home & Community Based Services (HCBS) are designed to support people in home/community rather than institutions.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Eating & cooking support (especially for low executive function)
              </h2>
              <p className="text-gray-700 mb-4 font-medium">
                Goal: get calories in with minimal barriers.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                The "Food Ladder" (pick the lowest-rung option that works)
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Drink something (smoothie/protein drink)</li>
                <li>No-prep (chips + cheese, yogurt, fruit, nuts)</li>
                <li>Heat-and-eat (microwave meals, instant rice, canned soup)</li>
                <li>Assemble (wrap/sandwich/boxed salad)</li>
                <li>Cook (only if you truly have capacity)</li>
              </ol>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Practical accommodations
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Keep "safe foods" always stocked</li>
                <li>Use single-pan / single-bowl recipes</li>
                <li>Set a meal alarm with a one-tap plan ("Eat: PB toast")</li>
                <li>Use delivery without shame when needed</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Programs that can help
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Food assistance programs like SNAP exist, and in NC benefits are delivered via EBT and used at stores that accept SNAP.</li>
                <li>If you're in Charlotte/Mecklenburg and qualify, the county has a home delivered meal service for eligible seniors (often a gateway to other supports).</li>
                <li>Nationally, Meals on Wheels America helps people find local meal delivery/support services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Finances support (when money stress spikes dysregulation)
              </h2>
              <p className="text-gray-700 mb-4">
                Money overwhelm is real neurodivergent tax. Your plan should reduce shame + reduce complexity.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Low-friction financial supports
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Separate accounts ("Bills" vs "Spending")</li>
                <li>Autopay for essentials</li>
                <li>Calendar reminders for known spike points (rent, utilities)</li>
                <li>"Bad brain budget" default (minimum spending rules)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Bigger supports
              </h3>
              <p className="text-gray-700 mb-4">
                If disability-related eligibility applies, ABLE accounts can let eligible people save for qualified disability expenses without endangering certain benefits, and SSI/Medicaid interactions have specific rules.
              </p>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Ask-for-help script
                </h3>
                <p className="text-gray-700 italic">
                  "Money admin melts my brain. Can you sit with me while I open the mail / make a plan / call the billing office?"
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Sensory support (neurodivergent-friendly design)
              </h2>
              <p className="text-gray-700 mb-4 font-medium">
                Treat sensory needs like accessibility needs, not preferences.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Create a "Sensory Profile"
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li><strong>What hurts:</strong> noise, light, crowds, scratchy fabrics, heat, smells</li>
                <li><strong>What helps:</strong> darkness, pressure, movement, cold, silence, repetition</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Build two sensory kits
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Home kit:</strong> ear protection, comfort clothes, weighted blanket, dim lighting, safe textures, stim tools</li>
                <li><strong>Travel kit:</strong> sunglasses, earbuds, snack, fidget, mask, "exit plan"</li>
              </ul>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Accommodation language that works
                </h3>
                <p className="text-gray-700 italic">
                  "I function best with reduced sensory load. I need a quieter space / lower lighting / predictable schedule to do my best work."
                </p>
              </div>

              <p className="text-gray-700 mt-4">
                See also: <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">Neurodivergent overload/shutdown</Link>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                10) Work or study support (accommodations + scaffolding)
              </h2>
              <p className="text-gray-700 mb-4">Two principles:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Ask for support that changes the environment, not your worth.</li>
                <li>"Reasonable accommodations" often exist even if you don't have perfect documentation.</li>
              </ol>
              <p className="text-gray-700 mb-4">
                A strong resource for accommodation ideas is Job Accommodation Network, which provides free guidance and examples for neurodiversity-related accommodations.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Common accommodations that help neurodivergent people
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>written instructions + checklists</li>
                <li>predictable deadlines / fewer last-minute changes</li>
                <li>flexible schedule, breaks, or remote days</li>
                <li>reduced interruptions (quiet workspace, headphones)</li>
                <li>chunking projects + regular check-ins</li>
                <li>assistive tech (timers, planners, speech-to-text)</li>
              </ul>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  NC-specific support
                </h3>
                <p className="text-gray-700">
                  North Carolina's Employment and Independence for People with Disabilities (EIPD) provides vocational rehabilitation services (planning, training, job coaching, assistive tech, and more depending on need/eligibility).
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                11) Sleep support (care plan edition)
              </h2>
              <p className="text-gray-700 mb-4">
                Sleep plans should be gentle and repeatable.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Your "minimum sleep routine" (10–20 minutes)
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>dim lights</li>
                <li>charge phone away from bed (or use focus mode)</li>
                <li>one calming activity (shower, audiobook, weighted blanket)</li>
                <li>set wake time target (even if bedtime varies)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Accommodation mindset
              </h3>
              <p className="text-gray-700 mb-2">
                If insomnia is frequent, treat it as a support need:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>ask for schedule flexibility where possible</li>
                <li>reduce early-morning obligations during Red periods</li>
                <li>set "rest days" into your week</li>
              </ul>

              <p className="text-gray-700">
                See also: <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">Sleep Hygiene</Link>, <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">RAIN</Link>, <Link href="/pages/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">Distress Tolerance Skills</Link>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                12) Communication & relationships support
              </h2>
              <p className="text-gray-700 mb-4">
                When capacity drops, communication gets harder. Your plan should pre-write what you need.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Create a "low-capacity communication menu"
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>"I'm in low capacity. I can do: ✅ text / ❌ phone / ✅ short hang / ❌ problem-solving."</li>
                <li>"I need: reassurance / help deciding / help doing / just company."</li>
                <li>"If I stop replying, it means: shutdown, not anger."</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Relationship accommodations
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>shorter conversations</li>
                <li>agenda-first conflict talks</li>
                <li>written follow-ups</li>
                <li>consent check: "Do you want empathy or solutions?"</li>
              </ul>

              <p className="text-gray-700">
                See also: <Link href="/pages/emotional-regulation/self-validation" className="text-blue-600 hover:text-blue-800 underline">Self-Validation</Link>, <Link href="/pages/interpersonal-skills/interpersonal-skills" className="text-blue-600 hover:text-blue-800 underline">Interpersonal Effectiveness</Link>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                13) Where to find real-world help (daily living, food, bills, care)
              </h2>
              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 mb-2">
                  If you don't know where to start, <strong>211</strong> is designed for exactly this. United Way 211 can connect people to local resources (food, bills, housing, health) and is confidential.
                </p>
                <p className="text-gray-700">
                  If you're in NC, NC 211 is statewide and available 24/7.
                </p>
              </div>
              <p className="text-gray-700">
                For longer-term daily living support, Medicaid HCBS programs can provide person-centered services in home/community for eligible people.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                15) Printable "Care Plan One-Pager" (copy/paste)
              </h2>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 font-mono text-sm space-y-3">
                <p className="font-bold text-base">My level right now: Green / Yellow / Red</p>
                <p className="font-bold">Today's only goal: safety + basics</p>
                
                <div>
                  <p className="font-semibold mb-1">Basics checklist (minimum):</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Water: ___</li>
                    <li>Food: ___</li>
                    <li>Meds: ___</li>
                    <li>Rest: ___</li>
                    <li>One connection: ___</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">When I'm Yellow, I will:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Reduce: ___</li>
                    <li>Ask for: ___</li>
                    <li>Use skills: ___</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">When I'm Red, I need:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Safety steps: ___</li>
                    <li>Who to contact: ___</li>
                    <li>What tasks must be offloaded: ___</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">My support scripts:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Check-in: ___</li>
                    <li>Task help: ___</li>
                    <li>Body doubling: ___</li>
                    <li>Safety support: ___</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">My accommodations:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Sensory: ___</li>
                    <li>Work/school: ___</li>
                    <li>Communication: ___</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">My services/resources:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>211 / NC 211: ___</li>
                    <li>Food: ___</li>
                    <li>HCBS/VR/other: ___</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">
                  RAIN Mindfulness Technique
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">
                  Urge Surfing
                </Link>
                <Link href="/pages/chain-analysis" className="text-blue-600 hover:text-blue-800 underline">
                  Chain Analysis
                </Link>
                <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Overload/Shutdown
                </Link>
                <Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">
                  Crisis Help Now
                </Link>
                <Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">
                  Crisis Skills
                </Link>
                <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">
                  TIPP
                </Link>
                <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">
                  Sleep Hygiene
                </Link>
                <Link href="/pages/self-harm/safety-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Self-Harm Safety Plan
                </Link>
                <Link href="/pages/addiction/sobriety-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Sobriety Plan
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
