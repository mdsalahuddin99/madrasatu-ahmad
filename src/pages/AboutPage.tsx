import React from 'react';
import { Star, PlayCircle, Globe, CheckCircle2, Award, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-10">
            <section className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
                Featured Course
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                সম্পূর্ণ কুরআন হিফজ ও ইসলামী শিক্ষা কোর্স
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl">
                ধীরে ধীরে, সঠিক তাজবীদ ও আদবের সাথে কুরআন হিফজের পাশাপাশি আকিদা, ফিকহ,
                সীরাহ ও নৈতিকতা শেখার জন্য সাজানো একটি পূর্ণাঙ্গ কোর্স। নবীন ও স্কুলগামী
                শিক্ষার্থীদের জন্য উপযোগী সিলেবাস।
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <div className="flex text-gold-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} className="text-gold-400" />
                  </div>
                  <span className="font-semibold text-slate-900 ml-1">4.9</span>
                  <span>(1,240 ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-slate-400" />
                  <span>5,600+ students enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-slate-400" />
                  <span>বাংলা · Updated December ২০২৫</span>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                এই কোর্সে যা যা শিখবেন
              </h2>
              <div className="grid md:grid-cols-2 gap-3 md:gap-4 text-sm md:text-base">
                {[
                  'সঠিক তাজবীদসহ কুরআন তিলাওয়াত ও হিফজ',
                  'নামাজ, রোজা ও বেসিক ফিকহ মাসআলা',
                  'বাছাইকৃত দোআ ও মাসনূন আমল',
                  'নবীজির জীবনী থেকে আদর্শ চরিত্র গঠন',
                  'আরবি হরফ ও বেসিক কুরআনি আরবি',
                  'দৈনন্দিন জীবনে সুন্নাহ অনুসরণের অভ্যাস',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-primary-600" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">কোর্স কাঠামো</h2>
              <div className="space-y-3 text-sm md:text-base">
                <div className="flex items-center justify-between rounded-xl bg-white border border-slate-100 px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-900">পর্ব ১: কুরআন নাজেরা ও তাজবীদ</p>
                    <p className="text-slate-500 text-sm">২০+ অধ্যায় · ৪০+ ঘন্টা ক্লাস</p>
                  </div>
                  <span className="text-sm font-semibold text-primary-700">চলমান</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white border border-slate-100 px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-900">পর্ব ২: হিফজ ও মুরাজআ</p>
                    <p className="text-slate-500 text-sm">৩০+ অধ্যায় · ধারাবাহিক মুরাজআ</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-500">দীর্ঘমেয়াদী</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white border border-slate-100 px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-900">পর্ব ৩: আকিদা, ফিকহ ও সীরাহ</p>
                    <p className="text-slate-500 text-sm">১৫+ অধ্যায় · প্রশ্নোত্তর ক্লাস</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-500">সাপ্তাহিক</span>
                </div>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">প্রয়োজনীয়তা</h2>
                <ul className="space-y-2 text-sm md:text-base text-slate-700">
                  <li>শিশুর নূন্যতম ৬+ বছর বয়স হওয়া উত্তম</li>
                  <li>মৌলিক হরফ চেনা থাকলে ভালো, না থাকলেও শিখিয়ে দেওয়া হবে</li>
                  <li>পরিবারের সহযোগিতা ও মনোযোগী পরিবেশ</li>
                  <li>নিয়মিত ক্লাসে উপস্থিত থাকা ও বাড়িতে অনুশীলনের সময়</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">কার জন্য উপযোগী</h2>
                <ul className="space-y-2 text-sm md:text-base text-slate-700">
                  <li>যারা কুরআন হিফজের পাশাপাশি সাধারণ শিক্ষাও চালিয়ে যেতে চায়</li>
                  <li>অভিভাবক যারা সন্তানকে সুন্নাহ ভিত্তিক জীবনে গড়ে তুলতে চান</li>
                  <li>যারা সুশৃঙ্খল, নিরাপদ ও আধুনিক পরিবেশে পড়াশোনা চায়</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-7 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">কোর্স সম্পর্কে বিস্তারিত</h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                মাদরাসাতু আহমাদ শুধুমাত্র হিফজ শেষ করার লক্ষ্যেই সীমাবদ্ধ নয়; বরং একটি
                ভারসাম্যপূর্ণ, সুন্নাহ ভিত্তিক জীবন গড়ার প্রাথমিক ভিত্তি গড়ে তোলাই আমাদের
                মূল লক্ষ্য। এজন্যই এই কোর্সে তাজবীদ, হিফজের পাশাপাশি আদব, আখলাক, আকিদা ও ফিকহ
                ধাপে ধাপে শেখানো হয়।
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                ক্লাসগুলো পরিচালনা করেন অভিজ্ঞ হাফিজ ও আলেম উস্তাদবৃন্দ, যারা শিশুদের মানসিকতা
                বুঝে ভালোবাসা ও মমতার মাধ্যমে পড়ান। নিয়মিত মুরাজআ, মাসিক প্রগ্রেস রিপোর্ট ও
                অভিভাবক কনসাল্টেশনের মাধ্যমে শিক্ষার্থীর অগ্রগতি নিশ্চিত করা হয়।
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-7">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">
                  MA
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">মুফতি আহমাদুল্লাহ</h2>
                  <p className="text-sm text-slate-500">
                    প্রধান মুদাররিস, মাদরাসাতু আহমাদ · ১০+ বছরের অভিজ্ঞতা
                  </p>
                </div>
              </div>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4">
                দীর্ঘ সময় ধরে কুরআন হিফজ, তাকমিল ও তাফসীরের খিদমতে যুক্ত। শিশুদের জন্য সহজ,
                ভালোবাসাপূর্ণ ও অনুপ্রেরণামূলক শিক্ষণ পদ্ধতির জন্য অভিভাবকদের নিকট সমাদৃত।
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-gold-500" />
                  <span>৫০০+ হিফজ সম্পন্ন শিক্ষার্থী</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-primary-600" />
                  <span>২,০০০+ সক্রিয় শিক্ষার্থী</span>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">শিক্ষার্থীদের অভিজ্ঞতা</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-100 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-gold-500 text-sm">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} className="text-gold-300" />
                  </div>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    আমার ছেলে মাত্র এক বছরে অনেক সুন্দরভাবে তিলাওয়াত শিখেছে এবং নামাজ, দোআ
                    মুখস্থ হয়েছে। উস্তাদদের আচরণ ও পরিবেশ খুবই সুন্দর।
                  </p>
                  <p className="text-xs text-slate-500">— অভিভাবক, ক্লাস ৪ শিক্ষার্থী</p>
                </div>
                <div className="bg-white rounded-2xl border border-slate-100 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-gold-500 text-sm">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} className="text-gold-300" />
                  </div>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    হিফজের সাথে সাথে আখলাক, আদব ও সাধারণ পড়াশোনার সমন্বয় থাকায় আমরা খুবই
                    সন্তুষ্ট। নিয়মিত রিপোর্ট ও যোগাযোগের ব্যবস্থা ভালো।
                  </p>
                  <p className="text-xs text-slate-500">— অভিভাবক, হিফজ বিভাগ</p>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="relative">
                <img
                  src="https://www.madrasatuahmad.com/assets/images/amder.png"
                  alt="Course preview"
                  className="w-full h-52 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 text-white px-4 py-2 text-sm font-medium">
                    <PlayCircle size={18} />
                    কোর্স পরিচিতি ভিডিও
                  </span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-slate-900">মাসিক ৩,৫০০৳</p>
                    <p className="text-sm text-slate-400 line-through">৪,০০০৳</p>
                  </div>
                  <p className="text-xs text-primary-700 font-semibold mt-1">
                    সীমিত সীট · ভর্তি চলছে
                  </p>
                </div>
                <div className="space-y-3">
                  <button className="w-full inline-flex items-center justify-center rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 text-sm md:text-base transition-colors">
                    এখনই ভর্তি করুন
                  </button>
                  <button className="w-full inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-800 font-semibold py-3 text-sm md:text-base hover:bg-slate-50 transition-colors">
                    কাউন্সেলিং এর জন্য যোগাযোগ করুন
                  </button>
                </div>
                <div className="border-t border-slate-100 pt-4 space-y-3 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">এই কোর্সে অন্তর্ভুক্ত</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <PlayCircle size={16} className="text-primary-600" />
                      <span>সপ্তাহে ৬ দিন ক্লাস · নির্ধারিত সময়</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary-600" />
                      <span>মাসিক প্রগ্রেস রিপোর্ট ও অভিভাবক মিটিং</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary-600" />
                      <span>সুরক্ষিত ও অনুপ্রেরণামূলক পরিবেশ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary-600" />
                      <span>প্রশিক্ষণপ্রাপ্ত অভিজ্ঞ উস্তাদমণ্ডলী</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
