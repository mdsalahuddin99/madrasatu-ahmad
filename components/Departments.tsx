'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, BookMarked, Library } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  cta: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: 'কিতাব বিভাগ',
    description: 'আলিমিয়্যাত ও দাওরায়ে হাদীসের প্রস্তুতিকেন্দ্রিক পড়াশোনা। আরবি ব্যাকরণ, ফিকহ, আকিদা ও তাফসীরের গভীর জ্ঞান অর্জন।',
    image: 'https://ahmadsit.com/uploads/1740550940_banner-img.jpg',
    cta: 'বিস্তারিত দেখুন',
  },
  {
    id: 2,
    title: 'হিফজুল কুরআন',
    description: 'নিয়মিত মুরাজআ ও শুদ্ধ তাজবীদসহ হিফজ প্রোগ্রাম। পুরো কুরআন শরীফ সাবলীলভাবে হিফজ করার সুযোগ।',
    image: 'https://ahmadsit.com/uploads/1740550940_banner-img.jpg',
    cta: 'বিস্তারিত দেখুন',
  },
  {
    id: 3,
    title: 'নূরানী ও নাজেরা',
    description: 'শিশুদের জন্য সহীহ কুরআন পড়ার মজবুত ভিত্তি। আরবি হরফ, মাখরাজ ও সঠিক উচ্চারণ শিক্ষা।',
    image: 'https://ahmadsit.com/uploads/1740550940_banner-img.jpg',
    cta: 'বিস্তারিত দেখুন',
  },
];

const ICONS = [GraduationCap, BookMarked, Library];

const CourseCard: React.FC<{ course: Course; index: number }> = ({ course, index }) => {
  const [error, setError] = useState(false);
  const Icon = ICONS[index % ICONS.length];

  return (
    <div className="group card-premium relative overflow-hidden h-full flex flex-col">

      {/* Decorative Background Gradient */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image Container */}
      <div className="h-56 rounded-2xl overflow-hidden relative mb-6 shrink-0 shadow-md">
        {!error ? (
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <BookOpen size={48} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        {/* Icon Badge on Image */}
        <div className="absolute top-4 left-4 w-14 h-14 glass rounded-2xl flex items-center justify-center text-emerald-700 shadow-lg">
          <Icon size={24} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow relative z-10">
        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">{course.title}</h3>
        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
          {course.description}
        </p>

        {/* CTA Button */}
        <Link
          href={`/departments/${course.id}`}
          className="group/btn w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/50 transition-all flex items-center justify-center gap-2"
        >
          <span>{course.cta}</span>
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const Departments: React.FC = () => {
  return (
    <section id="departments" className="section-padding bg-gradient-to-b from-white to-cream-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
            <BookOpen size={16} />
            <span>একাডেমিক কার্যক্রম</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            আমাদের বিভাগসমূহ
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            প্রতিটি বিভাগের জন্য রয়েছে আলাদা যত্ন এবং বিশেষায়িত কারিকুলাম যা আপনার সন্তানকে দক্ষ করে তুলবে।
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
