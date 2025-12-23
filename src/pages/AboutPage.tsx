import React from 'react';
import { Star, PlayCircle, Globe, CheckCircle2, Award, Users, ShieldCheck, BookOpen, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-10">
          <section className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl">
            <div className="relative h-48 md:h-64 lg:h-72">
              <img
                src="https://ahmadsit.com/uploads/1740550940_banner-img.jpg"
                alt="About feature"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-200 uppercase tracking-wide mb-1">
                    আমাদের সম্পর্কে
                  </p>
                  <p className="text-sm md:text-base font-semibold text-white">
                    মাদরাসাতু আহমাদ
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
              আমাদের সম্পর্কে
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              মাদরাসাতু আহমাদ — আধুনিক ও দ্বীনি শিক্ষার সমন্বিত প্রতিষ্ঠান
            </h1>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl">
              আমরা চাই চিন্তায়, চরিত্রে ও আমলে আদর্শ প্রজন্ম। তাই শিক্ষার্থীদের জন্য এমন পরিবেশ তৈরি করি
              যেখানে কুরআন ও সুন্নাহভিত্তিক দ্বীনি শিক্ষা, শুদ্ধ তাজবীদ, আদব-আখলাকের চর্চা এবং
              সমসাময়িক জ্ঞানের সাথে ভারসাম্য বজায় থাকে।
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <div className="flex text-gold-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} className="text-gold-300" />
                </div>
                <span className="font-semibold text-slate-900 ml-1">৪.৯</span>
                <span>(অভিভাবক সন্তুষ্টি)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-slate-400" />
                <span>অনেক শিক্ষার্থী অধ্যয়নরত</span>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="bg-gradient-to-br from-violet-50 to-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
                <PlayCircle size={14} />
                <span>পরিচিতি</span>
              </div>
              <h2 className="text-xl font-semibold text-slate-900">মাদরাসার সংক্ষিপ্ত পরিচিতি</h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                মাদরাসাতু আহমাদ-এ শিক্ষার্থীরা শুদ্ধ তাজবীদ, নূরানী বুনিয়াদ, হিফজ এবং কিতাব বিভাগে
                ধাপে ধাপে পড়ে। অভিজ্ঞ উস্তাদমণ্ডলীর তত্ত্বাবধানে নিয়মিত মূল্যায়ন ও রিপোর্টিং থাকে,
                যাতে প্রতিটি শিক্ষার্থীর অগ্রগতি স্পষ্টভাবে দেখা যায়।
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700">
                {[
                  'সহীহ আকীদা ও আমলী জীবনের প্রশিক্ষণ',
                  'ব্যক্তিগত তত্ত্বাবধান ও মুরাজআ পরিকল্পনা',
                  'অভিভাবকের সাথে নিয়মিত যোগাযোগ ও মিটিং',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-primary-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/ysz5g3c8Hk4"
                    title="Madrasa introduction video"
                    className="w-full h-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold text-slate-200 uppercase tracking-wide mb-0.5">
                      অফিসিয়াল পরিচিতি ভিডিও
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white">
                      এক নজরে মাদরাসাতু আহমাদ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-sm border border-primary-100 p-6 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold tracking-wide text-primary-700">
                <Globe size={14} />
                <span>মিশন</span>
              </div>
              <h2 className="text-xl font-semibold text-slate-900">জ্ঞান, আমল ও আখলাকে শুদ্ধতা</h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                কুরআন-সুন্নাহর ভিত্তিতে সহীহ শিক্ষার মাধ্যমে শিক্ষার্থীদের বিশ্বাস, চিন্তা ও চরিত্র গঠনে
                কাজ করা; এবং তাদেরকে সমাজের উপযোগী আদর্শ নাগরিক হিসেবে প্রস্তুত করা।
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700">
                {[
                  'শুদ্ধ তাজবীদ ও নূরানী-বুনিয়াদি দৃঢ় করা',
                  'আদব-আখলাক ও আমলী জীবনধারার প্রশিক্ষণ',
                  'সমসাময়িক জ্ঞানের সাথে ভারসাম্যপূর্ণ সমন্বয়',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-primary-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gold-50 to-white rounded-2xl shadow-sm border border-gold-100 p-6 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold tracking-wide text-gold-700">
                <Award size={14} />
                <span>ভিশন</span>
              </div>
              <h2 className="text-xl font-semibold text-slate-900">আদর্শ প্রজন্ম ও দ্বীনি খেদমত</h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                এমন শিক্ষার্থী তৈরি করা যারা আলিমিয়্যাত, হিফজ, নূরানী ভিত্তি থেকে শুরু করে
                সমাজে দ্বীনি খেদমতে যুক্ত হতে পারে; নেতৃত্ব, দায়িত্ববোধ ও দাওয়াহে দক্ষ হয়।
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700">
                {[
                  'সুন্নাহভিত্তিক জীবন গড়ার অনুপ্রেরণা',
                  'নেতৃত্ব, দায়িত্ববোধ ও দাওয়াহে প্রস্তুতি',
                  'শিক্ষাবান্ধব নিরাপদ ক্যাম্পাস সংস্কৃতি',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-primary-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'নিরাপত্তা ও শৃঙ্খলা', desc: '২৪/৭ নজরদারি, পরিষ্কার-পরিচ্ছন্ন ক্যাম্পাস ও শৃঙ্খলাবদ্ধ পরিবেশ।' },
              { icon: BookOpen, title: 'পরিকল্পিত কারিকুলাম', desc: 'বিভাগভিত্তিক সিলেবাস, নিয়মিত মূল্যায়ন ও রিপোর্টিং ব্যবস্থা।' },
              { icon: MapPin, title: 'সহজ লোকেশন', desc: 'যাত্রাবাড়ী সংলগ্ন ক্যাম্পাসে সহজে পৌঁছানো যায়।' },
            ].map((card, idx) => (
              <div
                key={card.title}
                className={`rounded-2xl shadow-sm border p-6 bg-gradient-to-br ${
                  idx === 0
                    ? 'from-emerald-50 border-emerald-100'
                    : idx === 1
                    ? 'from-violet-50 border-violet-100'
                    : 'from-sky-50 border-sky-100'
                } to-white`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 border border-primary-100 flex items-center justify-center mb-4">
                  <card.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed mt-1">{card.desc}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-6 md:grid-cols-[2fr,1fr]">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-7 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">কেন আমাদের নির্বাচন করবেন</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'অভিজ্ঞ উস্তাদমণ্ডলী ও ব্যক্তিগত তত্ত্বাবধান',
                  'হিফজ, নূরানী ও কিতাব বিভাগে পৃথক পরিকল্পনা',
                  'নিয়মিত অভিভাবক মিটিং ও প্রগ্রেস রিপোর্ট',
                  'সুন্নাহভিত্তিক আদব ও আমল চর্চার পরিবেশ',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                    <CheckCircle2 size={18} className="mt-0.5 text-primary-600" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
