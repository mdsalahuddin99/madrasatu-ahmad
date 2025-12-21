import React, { useState } from 'react';
import { CheckCircle2, Quote, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);

  return (
    <section id="about" className="py-10 relative overflow-hidden bg-white">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* Images with Glass Cards */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-8">
                 <div className="rounded-3xl shadow-lg w-full h-48 overflow-hidden bg-slate-100 relative">
                   {!err1 ? (
                     <img 
                      src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      className="w-full h-full object-cover" 
                      alt="Student reading" 
                      onError={() => setErr1(true)}
                    />
                   ) : (
                     <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400"><BookOpen size={32} /></div>
                   )}
                 </div>
                 <div className="glass p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-4xl font-bold text-primary-600 mb-1">১৫+</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">বছরের অভিজ্ঞতা</p>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="glass p-6 rounded-3xl text-right border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-4xl font-bold text-gold-500 mb-1">১০০%</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">পাসের হার</p>
                 </div>
                 <div className="rounded-3xl shadow-lg w-full h-64 overflow-hidden bg-slate-100 relative">
                    {!err2 ? (
                      <img 
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                        className="w-full h-full object-cover" 
                        alt="Classroom" 
                        onError={() => setErr2(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400"><BookOpen size={32} /></div>
                    )}
                 </div>
               </div>
            </div>
            
            {/* Center Float */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 md:w-40 md:h-40 bg-primary-900 rounded-full flex items-center justify-center border-[6px] border-white shadow-2xl">
               <Quote className="text-gold-400 w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 animate-fade-in-up delay-200">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-2xl border-b-2 border-primary-200 pb-1 mb-4 inline-block">আমাদের সম্পর্কে</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              নৈতিকতা ও আধুনিকতার  <span className="text-gradient">অপূর্ব সমন্বয়</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              মাদরাসাতু আহমাদ একটি আদর্শ শিক্ষা প্রতিষ্ঠান। আমরা শুধুমাত্র পুঁথিগত বিদ্যায় বিশ্বাসী নই, বরং আমরা বিশ্বাস করি একজন ছাত্রের সামগ্রিক মানসিক ও আত্মিক উন্নয়নে। আমাদের অভিজ্ঞ শিক্ষক মণ্ডলী প্রতিটি ছাত্রের প্রতি বিশেষ যত্নবান।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                'আন্তর্জাতিক মানের কারিকুলাম',
                'নিরাপদ ও মনোরম ক্যাম্পাস',
                'সার্বক্ষণিক নিবিড় পর্যবেক্ষণ',
                'কম্পিউটার ও ল্যাংগুয়েজ ল্যাব'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-primary-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              আরও জানুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;