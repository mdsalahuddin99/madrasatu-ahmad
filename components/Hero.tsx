'use client';
import React, { useState } from 'react';
import { ArrowRight, PlayCircle, Star, ShieldCheck, Trophy, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-cream-50 via-white to-emerald-50/30 flex items-center">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gold-200/20 to-transparent rounded-full blur-3xl"></div>

        {/* Floating Decorative Shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-emerald-400/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl animate-float delay-300"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-emerald-50 to-gold-50 border border-emerald-200/50 rounded-full shadow-md">
              <Sparkles size={18} className="text-gold-600" />
              <span className="text-sm font-semibold text-emerald-800 tracking-wide">অভিভাবকদের প্রথম পছন্দ</span>
              <div className="flex gap-0.5 text-gold-500">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight">
              আমরা সর্বদা আপনাদের শেখার জন্য
              <span className="text-gradient-emerald block mt-2">সর্বোত্তম শিক্ষা</span>
              নিশ্চিত করি
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              সুন্নাহ ভিত্তিক জীবন যাপন ও আধুনিক শিক্ষার সমন্বয়ে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়তে আমরা অঙ্গীকারবদ্ধ।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/admission" className="btn-primary group">
                <span>ভর্তি আবেদন করুন</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary group">
                <PlayCircle size={20} className="mr-2" />
                <span>পরিচিতি ভিডিও</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl mx-auto lg:mx-0">
              {[
                { value: '৫০০+', label: 'শিক্ষার্থী' },
                { value: '৩০+', label: 'শিক্ষক' },
                { value: '১০+', label: 'বছরের অভিজ্ঞতা' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-3xl font-heading font-bold text-emerald-700">{stat.value}</p>
                  <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative w-full">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative rounded-[3rem] p-4 bg-white border border-slate-200 shadow-premium-lg">
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-100">
                  {!imageError ? (
                    <img
                      src="/assets/images/campus.png"
                      alt="Madrasa Student Reading"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-emerald-50 flex flex-col items-center justify-center text-emerald-600 p-8 text-center">
                      <BookOpen size={64} className="mb-4" />
                      <h3 className="text-xl font-heading font-bold">মাদরাসাতু আহমাদ</h3>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Badge 1 - Security */}
                <div className="absolute -bottom-6 -left-6 card-premium hidden md:flex items-center gap-4 p-5 animate-float">
                  <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700 border border-emerald-200">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">নিরাপত্তা</p>
                    <p className="text-slate-900 font-heading font-bold text-lg">সর্বোচ্চ নিরাপত্তা</p>
                  </div>
                </div>

                {/* Floating Badge 2 - Achievement */}
                <div className="absolute -top-6 -right-6 card-premium hidden md:flex items-center gap-4 p-5 animate-float delay-300">
                  <div className="bg-gold-100 p-3 rounded-2xl text-gold-700 border border-gold-200">
                    <Trophy size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">ফলাফল</p>
                    <p className="text-slate-900 font-heading font-bold text-lg">সেরা সাফল্য</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-200/30 to-gold-200/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;