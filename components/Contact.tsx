import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white z-0 hidden lg:block"></div>
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/50 border border-slate-300/50 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
              যোগাযোগ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              কোন প্রশ্ন আছে? <br />
              <span className="text-primary-600">আমাদের জানান</span>
            </h2>

            <div className="space-y-6 mb-12">
               {[
                 { icon: MapPin, title: 'ঠিকানা', desc: CONTACT_INFO.address },
                 { icon: Phone, title: 'ফোন নম্বর', desc: CONTACT_INFO.phone },
                 { icon: Mail, title: 'ইমেইল', desc: CONTACT_INFO.email }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-6 p-4 rounded-3xl hover:bg-white hover:shadow-lg hover:border-slate-100 border border-transparent transition-all duration-300 group cursor-default">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-500 border border-slate-100 group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:border-primary-100 transition-colors duration-300 shrink-0 shadow-sm">
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed max-w-xs">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Form Card - Styled to match "Pure Water" aesthetic */}
          <div className="bg-gradient-to-br from-white to-primary-50/30 rounded-[3rem] p-8 md:p-12 shadow-xl border border-white relative overflow-hidden">
             
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary-50 to-transparent rounded-bl-[100%] z-0"></div>
             
             <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">মেসেজ পাঠান</h3>
             <form className="space-y-5 relative z-10">
               <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">নাম</label>
                    <input type="text" className="w-full px-5 py-4 bg-white rounded-2xl border border-slate-200 focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-300 shadow-sm" placeholder="আপনার নাম" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">ফোন</label>
                    <input type="text" className="w-full px-5 py-4 bg-white rounded-2xl border border-slate-200 focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-300 shadow-sm" placeholder="ফোন নম্বর" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">বার্তা</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-white rounded-2xl border border-slate-200 focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-300 shadow-sm resize-none" placeholder="কিভাবে আমরা সাহায্য করতে পারি?"></textarea>
               </div>
               <button className="w-full bg-primary-900 text-white py-4 rounded-2xl font-bold hover:bg-primary-800 transition-all flex items-center justify-center gap-2 group mt-4 shadow-lg hover:shadow-primary-900/20 hover:-translate-y-1">
                  বার্তা পাঠান <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;