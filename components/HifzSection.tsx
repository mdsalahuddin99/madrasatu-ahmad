import React, { useState } from 'react';
import { Play, Sparkles, BookOpen } from 'lucide-react';

const HifzSection: React.FC = () => {
  const [error, setError] = useState(false);

  return (
    <section id="hifz" className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>হিফজুল কুরআন বিভাগ</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight font-serif text-slate-900">
              গড়ুন আপনার সন্তানকে <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-primary-600">কুরআনের হাফেজ</span>
            </h2>
            
            <p className="text-slate-600 mb-10 leading-relaxed text-lg font-light max-w-xl">
              আন্তর্জাতিক মানের হাফেজদের তত্ত্বাবধানে পরিচালিত আমাদের হিফজ বিভাগে রয়েছে আধুনিক ও বিজ্ঞানসম্মত পাঠদান পদ্ধতি। আমরা নিশ্চিত করি বিশুদ্ধ তিলাওয়াত এবং আমল আখলাক।
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                ভর্তি তথ্য দেখুন
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-2xl font-bold transition-all border border-slate-200 shadow-sm hover:-translate-y-1">
                সিলেবাস ডাউনলোড
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full animate-scale-in delay-200">
             {/* Card Style Image Container */}
             <div className="relative rounded-[3rem] p-4 bg-white border border-slate-100 shadow-2xl">
                 <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-slate-100">
                    {!error ? (
                      <img 
                        src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Quran Reading" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                        onError={() => setError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-primary-50 text-primary-300">
                         <BookOpen size={64} />
                         <p className="mt-4 font-serif text-lg">হিফজুল কুরআন</p>
                      </div>
                    )}
                    
                    {/* Floating Info */}
                    <div className="absolute bottom-6 left-6 right-6">
                       <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl flex items-center gap-4 border border-white shadow-lg">
                          <div className="w-12 h-12 bg-gold-50 border border-gold-100 rounded-full flex items-center justify-center text-gold-600 shrink-0">
                             <BookOpen size={24} />
                          </div>
                          <div>
                             <p className="text-slate-400 text-xs font-bold uppercase mb-0.5">বিশেষ বৈশিষ্ট্য</p>
                             <p className="text-slate-900 font-bold">আন্তর্জাতিক মানসম্পন্ন শিক্ষা</p>
                          </div>
                       </div>
                    </div>
                    
                    {/* Play Button */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <button className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:scale-110 transition-transform cursor-pointer shadow-2xl">
                         <Play size={32} fill="currentColor" />
                      </button>
                    </div>
                 </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-100 rounded-full blur-3xl pointer-events-none -z-10 opacity-60"></div>
             <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary-100 rounded-full blur-3xl pointer-events-none -z-10 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HifzSection;