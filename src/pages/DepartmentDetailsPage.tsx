import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { CheckCircle2, PlayCircle, Star, Users } from 'lucide-react';

const DepartmentDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);
  const course = COURSES.find((item) => item.id === numericId) ?? COURSES[0];

  const details =
    numericId === 2
      ? {
          badge: 'হিফজুল কুরআন বিভাগ',
          subtitle: 'নিয়মিত মুরাজআ ও শুদ্ধ তাজবীদসহ হিফজ প্রোগ্রাম',
          learn: [
            'পুরো কুরআন শরীফ সাবলীলভাবে হিফজ',
            'তাজবীদ ও কিরাতের বুনিয়াদি শিক্ষা',
            'হিফজ ধরে রাখার জন্য নিয়মিত মুরাজআ প্ল্যান',
            'আদব, আখলাক ও ইসলামী চরিত্র গঠন',
          ],
          meta: [
            { label: 'কোর্স মেয়াদ', value: '৩-৪ বছর (ধারাবাহিক হিফজ পরিকল্পনা অনুযায়ী)' },
            { label: 'ক্লাস টাইম', value: 'ফুল-টাইম আবাসিক' },
            { label: 'সেশন টাইপ', value: 'ব্যক্তিগত তত্ত্বাবধান ও মুরাজআ' },
            { label: 'আসন সংখ্যা', value: 'সীমিত আসন · ব্যাচ ভিত্তিক' },
          ],
          highlights: [
            'যারা পুরো কুরআন হিফজ করতে চায়',
            'পরিপূর্ণ তত্ত্বাবধান ও শুদ্ধ তাজবীদ চান এমন পরিবার',
            'হিফজ পরবর্তী জীবনে আমলীভাবে কুরআনকে ধারণ করতে চায়',
          ],
        }
      : numericId === 3
      ? {
          badge: 'নূরানী ও নাজেরা বিভাগ',
          subtitle: 'শিশুদের জন্য সহীহ কুরআন পড়ার মজবুত ভিত্তি',
          learn: [
            'আরবি হরফ, মাখরাজ ও সঠিক উচ্চারণ',
            'নূরানী কায়দা ও কুরআন নাজেরা সম্পন্ন',
            'দৈনন্দিন দোআ, মাসনূন আমল ও নামাজ শিখন',
            'হালাল-হারাম ও আদব সম্পর্কে প্রাথমিক ধারণা',
          ],
          meta: [
            { label: 'কোর্স মেয়াদ', value: '২-৩ বছর (শিশুর মান অনুযায়ী)' },
            { label: 'ক্লাস টাইম', value: 'ডে কেয়ার/রেসিডেনশিয়াল' },
            { label: 'বয়স', value: '৪+ বছর থেকে উপরে' },
            { label: 'ফোকাস', value: 'শুদ্ধ উচ্চারণ ও আদব শেখানো' },
          ],
          highlights: [
            'যারা সন্তানকে ছোটবেলা থেকেই সহীহ কুরআন শিখাতে চান',
            'স্কুলগামী শিশুদের জন্য ভারসাম্যপূর্ণ দ্বীনি শিক্ষা',
            'বেসিক আকীদা ও ইসলামী আদব গড়ে তুলতে আগ্রহী পরিবার',
          ],
        }
      : {
          badge: 'কিতাব বিভাগ',
          subtitle: 'আলিমিয়্যাত ও দাওরায়ে হাদীসের প্রস্তুতিকেন্দ্রিক পড়াশোনা',
          learn: [
            'আরবি ব্যাকরণ, ফিকহ, আকিদা ও তাফসীরের ভিত্তি',
            'কিতাব বোঝার দক্ষতা ও তদরুস সংস্কৃতি',
            'দাওয়াহ, নেতৃত্ব ও দায়িত্ববোধের প্রশিক্ষণ',
            'সমসাময়িক বিষয়ের সাথে শরিয়াহর সমন্বয়',
          ],
          meta: [
            { label: 'কোর্স মেয়াদ', value: '৪-৬ বছর (স্তরভিত্তিক)' },
            { label: 'ক্লাস টাইম', value: 'ফুল-টাইম মাদ্রাসা ক্লাস' },
            { label: 'প্রয়োজনীয়তা', value: 'হিফজ/নাজেরা সম্পন্ন ও বেসিক জ্ঞান' },
            { label: 'পরবর্তী ধাপ', value: 'দাওরায়ে হাদীস ও উচ্চতর ইসলামিক স্টাডিজ' },
          ],
          highlights: [
            'যারা আলিমিয়্যাত পড়ে দ্বীনি খেদমতে যুক্ত হতে চায়',
            'আরবি ভাষা ও শরিয়াহতে গভীর জ্ঞান অর্জন করতে ইচ্ছুক',
            'দৃষ্টিভঙ্গি ও চরিত্র গঠনে ভারসাম্য খোঁজেন এমন শিক্ষার্থী',
          ],
        };

  return (
    <div className="min-h-screen bg-slate-50 py-10 mt-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            to="/#departments"
            className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-primary-700"
          >
            <span className="mr-2">←</span>
            সব বিভাগে ফিরে যান
          </Link>
          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 tracking-wide shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ভর্তি চলছে · সীমিত সীট</span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr,1fr] items-start">
          <div className="space-y-10">
            <section className="space-y-5 bg-white border border-slate-200 rounded-2xl px-6 py-6 md:px-8 md:py-7 shadow-sm">
              <p className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold tracking-wide text-primary-700">
                {details.badge}
              </p>
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {course.title}
                </h1>
                <p className="text-slate-600 text-base md:text-lg max-w-2xl">{details.subtitle}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mt-4">
                <div className="flex items-center gap-1">
                  <div className="flex text-gold-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} className="text-gold-300" />
                  </div>
                  <span className="font-semibold text-slate-900 ml-1">4.9</span>
                  <span>(শতাধিক সন্তুষ্ট অভিভাবক)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-slate-400" />
                  <span>অনেক শিক্ষার্থী অধ্যয়নরত</span>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {details.meta.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3"
                  >
                    <p className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900 leading-snug">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                এই বিভাগে যা যা শিখবে
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
                {details.learn.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 border border-slate-100"
                  >
                    <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">প্রয়োজনীয়তা</h2>
                <ul className="space-y-2 text-sm md:text-base text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                    <span>বয়স, পূর্বশিক্ষা ও মানসিক প্রস্তুতি অনুযায়ী ভর্তি গ্রহণ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                    <span>পরিবারের সহযোগিতা ও নিয়মিত উপস্থিতি</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                    <span>ব্যক্তিগত ইলেকট্রনিক ডিভাইস ব্যবহারে প্রয়োজনীয় বিধিনিষেধ</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900 text-slate-50 rounded-2xl shadow-sm border border-slate-800 p-6">
                <h2 className="text-lg font-semibold text-white mb-3">কার জন্য উপযোগী</h2>
                <ul className="space-y-2 text-sm md:text-base text-slate-100">
                  {details.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-7 space-y-6">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-900">বিভাগ সম্পর্কে সংক্ষেপে</h2>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {course.description}
                </p>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  ক্লাস পরিচালনা করেন অভিজ্ঞ উস্তাদমণ্ডলী, যারা শিক্ষার্থীদের মানসিকতা বুঝে
                  ভালোবাসা, শৃঙ্খলা ও অনুপ্রেরণার মাধ্যমে পাঠদান করেন। নিয়মিত মূল্যায়ন,
                  হিফজ বা পাঠ মুরাজআ, এবং অভিভাবক মিটিংয়ের মাধ্যমে প্রতিটি শিক্ষার্থীর অগ্রগতি
                  পর্যবেক্ষণ করা হয়।
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 text-sm md:text-base">
                <div className="space-y-2">
                  <p className="font-semibold text-slate-900">ক্লাস ও পরিবেশ</p>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>নিয়মিত ক্লাস, হোমওয়ার্ক ও মুরাজআ ভিত্তিক পড়াশোনা</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>শান্ত, নিরাপদ ও শিক্ষাবান্ধব আবাসিক পরিবেশ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>দৈনন্দিন আমল, জামাআতে সালাত ও আদবের চর্চা</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-slate-900">অভিভাবকের সাথে সংযোগ</p>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>নিয়মিত প্রগ্রেস রিপোর্ট ও ফলাফলের আপডেট প্রদান</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>অভিভাবক মিটিং ও ব্যক্তিগত পরামর্শ সেশন আয়োজন</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>প্রয়োজন অনুযায়ী শিক্ষক-অভিভাবক সরাসরি ফোনে যোগাযোগ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetailsPage;

