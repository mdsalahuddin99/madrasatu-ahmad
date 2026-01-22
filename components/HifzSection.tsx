import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const HifzSection: React.FC = () => {
  return (
    <section id="hifz" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold tracking-wider">
              <Sparkles size={14} />
              <span>এক নজরে আমাদের অর্জন</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-slate-900">
                এক নজরে মাদরাসাতু আহমাদ
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
                এই ভিডিওতে সংক্ষেপে মাদরাসাতু আহমাদের পরিবেশ, বিভাগসমূহ, শিক্ষাব্যবস্থা ও
                আমাদের বিশেষ বৈশিষ্ট্যগুলো তুলে ধরা হয়েছে। আপনার সন্তানের জন্য সিদ্ধান্ত নেওয়ার
                আগে একবার দেখে নিতে পারেন।
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full animate-scale-in delay-200">
            <div className="relative rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl border border-slate-800">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-slate-200 uppercase tracking-wide mb-1">
                    অফিশিয়াল প্রোমো ভিডিও
                  </p>
                  <p className="text-sm md:text-base font-semibold text-white">
                    এক নজরে মাদরাসাতু আহমাদ
                  </p>
                </div>
                <div className="hidden sm:flex">
                  <div className="h-12 w-12 rounded-full bg-white/15 border border-white/40 flex items-center justify-center text-white">
                    <Play size={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HifzSection;
