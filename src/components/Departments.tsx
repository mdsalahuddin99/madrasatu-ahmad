import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Course } from '../types';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const [error, setError] = useState(false);

  return (
    <div className="group rounded-[2.5rem] p-4 bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">
      
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 transition-opacity group-hover:opacity-100"></div>

      {/* Image Container */}
      <div className="h-64 rounded-[2rem] overflow-hidden relative mb-6 shrink-0 shadow-sm z-10">
        {!error ? (
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
             <BookOpen size={48} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Icon Floating on Image */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-primary-600 shadow-lg">
           <BookOpen size={20} />
        </div>
      </div>

      <div className="px-4 pb-4 flex flex-col flex-grow z-10">
         <h3 className="text-2xl font-bold text-slate-900 mb-3">{course.title}</h3>
         <p className="text-slate-500 mb-6 line-clamp-3 leading-relaxed">
           {course.description}
         </p>
         
         <div className="mt-auto">
            <Link
              to={`/departments/${course.id}`}
              className="w-full py-4 rounded-2xl bg-white border border-primary-100 text-primary-700 font-bold hover:bg-primary-600 hover:text-white transition-all shadow-sm hover:shadow-lg flex items-center justify-center gap-2 group/btn"
            >
              {course.cta}
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
         </div>
      </div>
    </div>
  );
};

const Departments: React.FC = () => {
  return (
    <section id="departments" className="py-4 bg-white relative">
      <div className="container mx-auto px-5 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-bold uppercase tracking-wider mb-4">
              একাডেমিক কার্যক্রম
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">আমাদের বিভাগসমূহ</h2>
          <p className="text-slate-500 text-lg">প্রতিটি বিভাগের জন্য রয়েছে আলাদা যত্ন এবং বিশেষায়িত কারিকুলাম যা আপনার সন্তানকে দক্ষ করে তুলবে।</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
