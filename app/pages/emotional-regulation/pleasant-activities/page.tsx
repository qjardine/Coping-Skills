'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function PleasantActivitiesPage() {
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
            <Link href="/pages/emotional-regulation/pleasant-activities" className="text-blue-600 hover:text-blue-800 underline">Pleasant Activities</Link> Menu
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Level 1: Ultra-practical (0–5 min, low/no cost)
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Take three slow breaths and feel your feet on the floor</li>
                <li>Light a candle and watch the flame</li>
                <li>Listen to one song (or one minute of it)</li>
                <li>Step outside and notice the sky (sunrise/sunset if you can)</li>
                <li>Stretch your shoulders/neck or do a quick body shake-out</li>
                <li>Repeat a self-affirmation (one sentence)</li>
                <li>Doodle for 2 minutes</li>
                <li>Write one line in a journal ("Right now I notice…")</li>
                <li>Think of a past pleasant moment (vacation memory, kind text, a funny clip)</li>
                <li>Say "I love you" to someone safe (or to a pet)</li>
                <li>Take a quick shower or wash your face/hands slowly</li>
                <li>Sit on your stoop/porch/balcony for 2 minutes</li>
                <li>Look at photos you like (your own or nature pics)</li>
                <li>Pet an animal / watch animal videos</li>
                <li>Make a tiny to-do list (3 items max) to feel organized</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Level 2: Practical (5–30 min, minimal setup)
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Take a walk around town / short jog</li>
                <li>Make tea/coffee slowly and enjoy the smell/taste</li>
                <li>Read a magazine/newspaper or a few pages of a book</li>
                <li>Cook something simple / bake something easy</li>
                <li>Cuddle (partner, friend, pet, blanket nest)</li>
                <li>Listen to music while doing one small task (laundry, dishes)</li>
                <li>Do a crossword / puzzle / riddles</li>
                <li>Garden / care for plants</li>
                <li>Clean out your inbox for 10 minutes (small "completion" joy)</li>
                <li>Buy yourself flowers (or pick one outside if accessible)</li>
                <li>Visit a bakery (or make a small treat at home)</li>
                <li>Photography: take 5 photos of "interesting textures"</li>
                <li>Tie-dye / arts & crafts (quick version)</li>
                <li>Meditate (short, gentle—eyes open is fine)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Level 3: Medium practical (30–120 min, some planning)
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Soak in the bathtub / sauna / steam bath (if available)</li>
                <li>Go to a movie / play / concert</li>
                <li>Go to a museum / zoo / aquarium</li>
                <li>Go swimming / bike riding / skating</li>
                <li>Have lunch with a friend / spend an evening with good friends</li>
                <li>Go out to dinner / plan a date</li>
                <li>Do woodworking / sewing / knitting / needlepoint</li>
                <li>Refinish or repair something around the house</li>
                <li>Go hiking / picnic / beach day</li>
                <li>Decorate your home (one corner)</li>
                <li>Get a haircut / beauty parlor</li>
                <li>Take a class (in-person or online)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Level 4: Big practical (weekend-energy, more cost/coordination)
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Go on vacation / traveling / road trip</li>
                <li>Camping / mountains / national parks</li>
                <li>Plan a party / entertain</li>
                <li>Go sail boating / horseback riding</li>
                <li>Join community organizations / become active in the community</li>
                <li>Adopt a pet (big decision—only if truly ready)</li>
                <li>Career planning: plan a career change / school / retirement (structured session)</li>
                <li>Money goals: getting out of debt / saving money (small steps, but longer arc)</li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Make it neurodivergent-friendly (optional tweaks)
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>If choices overwhelm you: pick one "default pleasant activity" for low days (song + tea, porch + blanket).</li>
                <li>If transition is hard: use a timer (5 minutes only).</li>
                <li>If sensory stuff is intense: choose low-sensory activities (dim light, soft fabric, quiet music, nature view).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-16 md:bottom-20 right-0 md:right-6 flex flex-col gap-2 z-50 w-full md:w-auto">
        <a
          href="/assets/Worksheets/participating.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Trouble Participating?
        </a>
        <a
          href="/assets/Worksheets/pleasant-events-interact.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Interactive Worksheet
        </a>
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
