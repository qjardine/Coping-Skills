'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SleepBasicsPage() {
  const router = useRouter();
  const [sleepDiary, setSleepDiary] = useState({
    date: '',
    lightsOut: '',
    timeToSleep: '',
    awakenings: '',
    timeAwake: '',
    finalWake: '',
    outOfBed: '',
    totalSleep: '',
    quality: '',
    naps: '',
    caffeine: '',
    notes: '',
  });

  const handleBack = () => {
    router.back();
  };

  const updateField = ({ field, value }: { field: string; value: string }) => {
    setSleepDiary(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            CBT-I & Sleep
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Evidence-based treatment for insomnia
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Living with insomnia can be exhausting and scary. Cognitive Behavioral Therapy for Insomnia (CBT-I) is a short, structured, evidence-based treatment that targets the thoughts, feelings, and behaviors that keep insomnia going—so sleep can become easier and more reliable again.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border-2 border-blue-300">
                <p className="text-gray-700 font-semibold">
                  CBT-I is widely recommended as a first-line treatment for chronic insomnia in adults.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-teal-50 p-4 rounded border border-teal-200">
              <p className="text-gray-800 font-semibold mb-2">Quick Links:</p>
              <ol className="list-decimal list-inside space-y-1 text-teal-700 ml-4 text-sm">
                <li><a href="#what-it-is" className="hover:underline">What CBT-I is (and what it isn't)</a></li>
                <li><a href="#how-it-works" className="hover:underline">How CBT-I works (the insomnia cycle)</a></li>
                <li><a href="#core-skills" className="hover:underline">Core CBT-I skills (what you'll practice)</a></li>
                <li><a href="#stimulus-control" className="hover:underline">Stimulus control (make bed = sleep again)</a></li>
                <li><a href="#sleep-restriction" className="hover:underline">Sleep restriction & sleep compression</a></li>
                <li><a href="#cognitive-restructuring" className="hover:underline">Cognitive restructuring for sleep worry</a></li>
                <li><a href="#relaxation" className="hover:underline">Relaxation training</a></li>
                <li><a href="#sleep-hygiene" className="hover:underline">Sleep hygiene</a></li>
                <li><a href="#sleep-diary" className="hover:underline">Sleep diary starter</a></li>
                <li><a href="#providers" className="hover:underline">Who provides CBT-I + digital options</a></li>
                <li><a href="#safety" className="hover:underline">Safety notes</a></li>
                <li><a href="#next-pages" className="hover:underline">Next pages</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="what-it-is">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What CBT-I is (and what it isn't)
              </h2>
              
              <p className="text-gray-700 mb-4">
                CBT-I is CBT specifically adapted for insomnia. It helps you identify and change patterns that maintain sleep difficulty—especially:
              </p>

              <div className="p-4 bg-purple-50 rounded border border-purple-200 mb-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>spending lots of time in bed awake</li>
                  <li>associating the bed/bedroom with frustration and alertness</li>
                  <li>worrying and "trying to force sleep"</li>
                  <li>inconsistent schedules and habits that disrupt sleep rhythm</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <p className="text-gray-800 font-bold mb-2">CBT-I is NOT:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>just "sleep hygiene" tips</li>
                    <li>forcing positivity about sleep</li>
                    <li>lying in bed trying harder</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-800 font-bold mb-2">CBT-I IS:</p>
                  <p className="text-gray-700 text-sm">
                    A multi-skill program that retrains sleep using both behavioral and cognitive strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="how-it-works">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) How CBT-I works (the insomnia cycle)
              </h2>

              <p className="text-gray-700 mb-4">
                CBT-I focuses on the relationship between:
              </p>

              <div className="space-y-3 mb-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-700">
                    <strong>How we think about sleep:</strong> worry, rigid expectations, "If I don't sleep I'll fail tomorrow"
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-700">
                    <strong>What we do around sleep:</strong> going to bed early, naps, staying in bed awake, scrolling
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-700">
                    <strong>How the body learns:</strong> bed = wakefulness/frustration instead of sleep
                  </p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded border-2 border-yellow-300">
                <p className="text-gray-700">
                  Over time, insomnia can become a learned cycle: worry increases arousal, arousal makes sleep harder, and each rough night "proves" the worry—unless the cycle is interrupted.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="core-skills">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Core CBT-I skills (what you'll practice)
              </h2>

              <p className="text-gray-700 mb-4">
                Most CBT-I programs use a combination of:
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold">Stimulus control</p>
                </div>
                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold">Sleep restriction therapy</p>
                </div>
                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold">Cognitive restructuring</p>
                </div>
                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold">Relaxation training</p>
                </div>
                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold">Sleep hygiene</p>
                </div>
                <div className="p-3 bg-teal-50 rounded border border-teal-200">
                  <p className="text-teal-800 font-semibold">Psychoeducation</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4 italic">
                Many CBT-I protocols run about 6–8 sessions, with practice ("homework") in between.
              </p>
            </div>

            {/* Section 4 */}
            <div id="stimulus-control">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Stimulus control (make bed = sleep again)
              </h2>

              <p className="text-gray-700 mb-4">
                If you've spent lots of time awake in bed, the brain can start associating the bedroom with alertness and frustration. Stimulus control rebuilds the bed/bedroom as a cue for sleep.
              </p>

              <div className="p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                <p className="text-gray-800 font-bold mb-3">Common CBT-I stimulus control rules include:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span>Use the bed for sleep (and sex) only (not scrolling, TV, work, long worrying).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span>If you can't fall asleep or you're awake for a while, get out of bed and do something quiet and relaxing until sleepy, then return.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span>Wake up at a consistent time each morning.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span>Avoid naps (or keep them limited if advised by a clinician).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div id="sleep-restriction">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Sleep restriction & sleep compression
              </h2>

              <p className="text-gray-700 mb-4">
                People with insomnia often spend more time in bed than they spend sleeping, which weakens the "bed = sleep" link.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <p className="text-gray-800 font-bold mb-2">Sleep restriction therapy (SRT)</p>
                  <p className="text-gray-700 text-sm">
                    Temporarily limits time in bed to better match actual sleep time, increasing sleep drive and helping sleep become more consolidated.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <p className="text-gray-800 font-bold mb-2">Sleep compression</p>
                  <p className="text-gray-700 text-sm">
                    A gentler approach that gradually narrows time in bed (often used when a slower ramp is safer or more tolerable).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="cognitive-restructuring">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Cognitive restructuring for sleep worry
              </h2>

              <p className="text-gray-700 mb-4">
                Insomnia commonly includes thoughts like:
              </p>

              <div className="p-4 bg-red-50 rounded border border-red-200 mb-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>"If I don't sleep 8 hours, tomorrow will be ruined."</li>
                  <li>"I'll never sleep normally again."</li>
                  <li>"I have to fall asleep right now."</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded border border-green-200">
                <p className="text-gray-700">
                  CBT-I uses <Link href="/pages/cbt/cognitive-restructuring" className="text-teal-600 hover:text-teal-800 font-semibold">cognitive restructuring</Link> to identify these beliefs, check them, and replace them with more accurate and flexible thoughts—reducing arousal and breaking the nightly worry loop.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div id="relaxation">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Relaxation training (downshift your nervous system)
              </h2>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 mb-3">
                  CBT-I often includes relaxation methods to reduce physical arousal and racing thoughts at night:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Slow breathing</li>
                  <li>Progressive muscle relaxation (PMR)</li>
                  <li>Meditation</li>
                  <li>Imagery</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  Chosen to fit your routine
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div id="sleep-hygiene">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Sleep hygiene (supporting habits + environment)
              </h2>

              <p className="text-gray-700 mb-4">
                Sleep hygiene isn't usually enough by itself for insomnia, but it supports CBT-I:
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 text-sm">Consistent schedule (including weekends)</p>
                </div>
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 text-sm">Caffeine/alcohol timing awareness</p>
                </div>
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 text-sm">Winding down before bed</p>
                </div>
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 text-sm">Reducing stimulating screens</p>
                </div>
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 text-sm">Sleep-conducive environment</p>
                </div>
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-gray-700 text-sm">Light, noise, temperature control</p>
                </div>
              </div>
            </div>

            {/* Section 9 - Interactive Sleep Diary */}
            <div id="sleep-diary">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Sleep diary starter (copy/paste)
              </h2>

              <p className="text-gray-700 mb-4">
                A sleep diary helps you (and a provider) calculate patterns and choose the right CBT-I steps.
              </p>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border-2 border-indigo-400 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-800 font-bold mb-2 text-sm">
                      Date:
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={sleepDiary.date}
                      onChange={(e) => updateField({ field: 'date', value: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="lights-out" className="block text-gray-800 font-bold mb-2 text-sm">
                      Lights out / tried to sleep:
                    </label>
                    <input
                      id="lights-out"
                      type="time"
                      value={sleepDiary.lightsOut}
                      onChange={(e) => updateField({ field: 'lightsOut', value: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="time-to-sleep" className="block text-gray-800 font-bold mb-2 text-sm">
                      Estimated time to fall asleep (minutes):
                    </label>
                    <input
                      id="time-to-sleep"
                      type="number"
                      value={sleepDiary.timeToSleep}
                      onChange={(e) => updateField({ field: 'timeToSleep', value: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="minutes"
                    />
                  </div>

                  <div>
                    <label htmlFor="awakenings" className="block text-gray-800 font-bold mb-2 text-sm">
                      Number of awakenings:
                    </label>
                    <input
                      id="awakenings"
                      type="number"
                      value={sleepDiary.awakenings}
                      onChange={(e) => updateField({ field: 'awakenings', value: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="time-awake" className="block text-gray-800 font-bold mb-2 text-sm">
                      Total time awake during night (minutes):
                    </label>
                    <input
                      id="time-awake"
                      type="number"
                      value={sleepDiary.timeAwake}
                      onChange={(e) => updateField({ field: 'timeAwake', value: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="minutes"
                    />
                  </div>

                  <div>
                    <label htmlFor="final-wake" className="block text-gray-800 font-bold mb-2 text-sm">
                      Final wake time:
                    </label>
                    <input
                      id="final-wake"
                      type="time"
                      value={sleepDiary.finalWake}
                      onChange={(e) => updateField({ field: 'finalWake', value: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="out-of-bed" className="block text-gray-800 font-bold mb-2 text-sm">
                      Out of bed time:
                    </label>
                    <input
                      id="out-of-bed"
                      type="time"
                      value={sleepDiary.outOfBed}
                      onChange={(e) => updateField({ field: 'outOfBed', value: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="total-sleep" className="block text-gray-800 font-bold mb-2 text-sm">
                      Estimated total sleep time (hours):
                    </label>
                    <input
                      id="total-sleep"
                      type="number"
                      step="0.5"
                      value={sleepDiary.totalSleep}
                      onChange={(e) => updateField({ field: 'totalSleep', value: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="hours"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quality" className="block text-gray-800 font-bold mb-2 text-sm">
                    Sleep quality (0–10):
                  </label>
                  <input
                    id="quality"
                    type="number"
                    min="0"
                    max="10"
                    value={sleepDiary.quality}
                    onChange={(e) => updateField({ field: 'quality', value: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="0-10"
                  />
                </div>

                <div>
                  <label htmlFor="naps" className="block text-gray-800 font-bold mb-2 text-sm">
                    Naps (time + length):
                  </label>
                  <input
                    id="naps"
                    type="text"
                    value={sleepDiary.naps}
                    onChange={(e) => updateField({ field: 'naps', value: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., 2pm for 30 min"
                  />
                </div>

                <div>
                  <label htmlFor="caffeine" className="block text-gray-800 font-bold mb-2 text-sm">
                    Caffeine/alcohol (timing):
                  </label>
                  <input
                    id="caffeine"
                    type="text"
                    value={sleepDiary.caffeine}
                    onChange={(e) => updateField({ field: 'caffeine', value: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., coffee at 3pm, wine at 8pm"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-gray-800 font-bold mb-2 text-sm">
                    Notes (stress, pain, meds, etc.):
                  </label>
                  <textarea
                    id="notes"
                    value={sleepDiary.notes}
                    onChange={(e) => updateField({ field: 'notes', value: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    rows={3}
                    placeholder="Any relevant notes..."
                  />
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div id="providers">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                10) Who provides CBT-I + digital options
              </h2>

              <p className="text-gray-700 mb-4">
                CBT-I is typically delivered by clinicians trained in behavioral sleep medicine (or therapists trained in CBT-I). Because access can be limited, there are also digital/self-guided formats.
              </p>

              <div className="p-5 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
                <p className="text-gray-800 font-bold mb-3">Two VA-developed apps often used alongside CBT-I skills:</p>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border border-blue-300">
                    <p className="text-gray-800 font-semibold">CBT-i Coach</p>
                    <p className="text-gray-600 text-sm">Intended to support people engaged in CBT-I with a provider</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-blue-300">
                    <p className="text-gray-800 font-semibold">Insomnia Coach</p>
                    <p className="text-gray-600 text-sm">Can be used as a stand-alone education/self-care tool or alongside professional care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 11 */}
            <div id="safety">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                11) Safety notes (when to get clinician support)
              </h2>

              <div className="p-5 bg-red-50 rounded-lg border-2 border-red-300">
                <p className="text-gray-700 mb-4">
                  Some CBT-I elements (especially sleep restriction) may not be appropriate for everyone and should be guided by a clinician if you have complicating conditions. For example, some sources caution that sleep restriction may be unsuitable for certain medical/psychiatric conditions and needs professional oversight.
                </p>
                
                <div className="p-4 bg-white rounded border border-red-300">
                  <p className="text-gray-700 font-semibold">
                    If you suspect another sleep disorder (like sleep apnea), talk with a medical provider—CBT-I can still help insomnia, but untreated sleep disorders may need additional treatment.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 12 - Related Resources */}
            <div id="next-pages" className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Next Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/cbt/worrying" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">CBT Worrying</p>
                  <p className="text-gray-600 text-sm">When bedtime becomes a worry spiral</p>
                </Link>
                <Link href="/pages/cbt/decatastrophizing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Decatastrophizing</p>
                  <p className="text-gray-600 text-sm">Worst-case sleep fears</p>
                </Link>
                <Link href="/pages/cbt/cognitive-restructuring" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Cognitive Restructuring</p>
                  <p className="text-gray-600 text-sm">Update sleep beliefs</p>
                </Link>
                <Link href="/pages/cbt/thought-record" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-50 transition-colors">
                  <p className="text-purple-600 hover:text-purple-800 font-semibold">Thought Record</p>
                  <p className="text-gray-600 text-sm">Track triggers → thoughts → outcomes</p>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center pt-4">
              <Link
                href="/pages/cbt"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                ← Back to CBT Hub
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
