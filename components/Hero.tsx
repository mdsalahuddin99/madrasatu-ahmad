import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, Star, ShieldCheck, Trophy, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX - window.innerWidth / 2) * 0.02, 
        y: (event.clientY - window.innerHeight / 2) * 0.02,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 lg:pt-12 lg:pb-10 overflow-hidden bg-white flex items-center">
      
      {/* Soft Background Gradients (Pure Water Theme) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
      </div>
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-primary-100 rounded-full text-sm font-bold text-primary-700 shadow-sm animate-float">
              <span className="flex gap-0.5 text-gold-500">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </span>
              <span className="tracking-wide">অভিভাবকদের প্রথম পছন্দ</span>
            </div>
            
            <h1 className="text-4xl sm:text-2xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              কুরআনের আলোয় <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">আলোকিত জীবন</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              সুন্নাহ ভিত্তিক জীবন যাপন ও আধুনিক শিক্ষার সমন্বয়ে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়তে আমরা অঙ্গীকারবদ্ধ।
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <button className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary-200 hover:bg-primary-700 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                ভর্তি তথ্য দেখুন <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold shadow-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <PlayCircle size={22} className="text-primary-600 group-hover:scale-110 transition-transform" />
                ভিডিও দেখুন
              </button>
            </div>
            
           
          </div>

          {/* Right Content - Image (Pure Water Style) */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative w-full animate-scale-in delay-200">
            <div 
              className="relative z-10"
              style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
            >
               {/* Main Image Container */}
               <div className="relative rounded-[3rem] p-4 bg-white border border-slate-100 shadow-2xl">
                   <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-100">
                      {!imageError ? (
                        <img 
                          src=" https://www.madrasatuahmad.com/assets/images/amder.png" 
                          alt="Madrasa Student Reading" 
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-full h-full bg-primary-50 flex flex-col items-center justify-center text-primary-300 p-8 text-center">
                          <BookOpen size={64} className="mb-4" />
                          <h3 className="text-xl font-bold">মাদরাসাতু আহমাদ</h3>
                        </div>
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                   </div>

                   {/* Floating Badge 1 */}
                   <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl border border-slate-100 animate-float hidden md:flex items-center gap-4">
                      <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600 border border-emerald-100">
                         <ShieldCheck size={28} />
                      </div>
                      <div>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">নিরাপত্তা</p>
                         <p className="text-slate-900 font-bold text-lg">সর্বোচ্চ নিরাপত্তা</p>
                      </div>
                   </div>
                   
                   {/* Floating Badge 2 */}
                   <div className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-xl border border-slate-100 animate-float delay-1000 hidden md:flex items-center gap-4">
                      <div className="bg-gold-50 p-3 rounded-2xl text-gold-600 border border-gold-100">
                         <Trophy size={28} />
                      </div>
                      <div>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">ফলাফল</p>
                         <p className="text-slate-900 font-bold text-lg">সেরা সাফল্য</p>
                      </div>
                   </div>
               </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-100/50 to-accent-100/50 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;