'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, Star, ChevronLeft, ChevronRight, BookOpen, Users, Trophy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    id: 1,
    image: '/assets/images/campus.png',
    badge: 'অভিভাবকদের প্রথম পছন্দ',
    title: 'সুন্নাহ ভিত্তিক জীবন ও আধুনিক শিক্ষার সমন্বয়',
    subtitle: 'আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ ক গড়তে আমরা অঙ্গীকারবদ্ধ। এখানে দ্বীনি ও জাগতিক শিক্ষার এক অপূর্ব মেলবন্ধন ঘটে।',
    cta: 'ভর্তি আবেদন করুন'
  },
  {
    id: 2,
    image: '/assets/images/hifz.png',
    badge: 'আন্তর্জাতিক মান',
    title: 'হিফজুল কুরআন বিভাগে বিশেষ যত্ন',
    subtitle: 'আন্তর্জাতিক মানের হাফেজ গড়ার লক্ষ্যে আমাদের রয়েছে নিবিড় পর্যবেক্ষণ ও বিশেষ ক্লাস পদ্ধতি।',
    cta: 'হিফজ বিভাগ দেখুন'
  },
  {
    id: 3,
    image: '/assets/images/classroom.png',
    badge: 'উন্নত পরিবেশ',
    title: 'আধুনিক ক্লাসরুম ও ডিজিটাল সুবিধা',
    subtitle: 'শিক্ষার্থীদের জন্য রয়েছে আরামদায়ক ও প্রযুক্তিু নির্ভর ক্লাসরুম, যা পড়াশোনার মনোনিবেশ বাড়ায়।',
    cta: 'আমাদের ক্যাম্পাস'
  },
  {
    id: 4,
    image: '/assets/images/library.png',
    badge: 'জ্ঞান চর্চা',
    title: 'সমৃদ্ধ লাইব্রেরি ও গবেষণা কেন্দ্র',
    subtitle: 'ছাত্রদের মেধা বিকাশে আমাদের রয়েছে বিশাল কিতাব ও বইয়ের ভাণ্ডার এবং পড়াশোনার শান্ত পরিবেশ।',
    cta: 'সুবিধাসমূহ'
  },
  {
    id: 5,
    image: '/assets/images/prayer_hall.png',
    badge: 'আধ্যাত্মিকতা',
    title: 'নামাজ ও আমলের নিয়মিত প্রশিক্ষণ',
    subtitle: 'শুধু পড়াশোনা নয়, আমরা গুরুত্ব দেই আমল ও আখলাকের ওপর, যাতে তারা প্রকৃত মানুষ হয়ে গড়ে ওঠে।',
    cta: 'যোগাযোগ করুন'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="home" className="relative h-screen min-h-[600px] lg:min-h-[800px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'linear' }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={SLIDES[current].image}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-slate-950/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content Content Container */}
      <div className="container-custom relative z-10 w-full pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-5xl space-y-8">
            {/* Animated Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md">
                  <Star size={14} className="text-emerald-400" fill="currentColor" />
                  <span className="text-xs md:text-sm font-bold text-emerald-100 tracking-wider uppercase">
                    {SLIDES[current].badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                  {SLIDES[current].title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                  {SLIDES[current].subtitle}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/admission" className="btn-primary">
                    <span>{SLIDES[current].cta}</span>
                    <ArrowRight size={18} />
                  </Link>
                  <button className="btn-secondary !bg-white/10 !text-white !border-white/20 hover:!bg-white/20">
                    <PlayCircle size={18} />
                    <span>ভিডিও দেখুন</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Controls (Right Side Empty for Visuals, but we can put controls here) */}
          <div className="hidden lg:flex flex-col items-end justify-end h-full gap-8">
            {/* We leave this somewhat empty to let the image shine, controls are absolute */}
          </div>
        </div>
      </div>

      {/* Slider Controls (Absolute) */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${current === idx ? 'w-10 bg-emerald-500' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/10 bg-black/20 text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all backdrop-blur-sm group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/10 bg-black/20 text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all backdrop-blur-sm group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>



    </section>
  );
};

export default Hero;