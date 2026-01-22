'use client';
import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

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
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
              কোন প্রশ্ন আছে? <br />
              <span className="text-gradient-emerald">আমাদের জানান</span>
            </h2>

            <div className="space-y-6 mb-12">
              {[
                { icon: MapPin, title: 'ঠিকানা', desc: CONTACT_INFO.address },
                { icon: Phone, title: 'ফোন নম্বর', desc: CONTACT_INFO.phone },
                { icon: Mail, title: 'ইমেইল', desc: CONTACT_INFO.email }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-4 rounded-3xl hover:bg-white hover:shadow-premium border border-transparent transition-all duration-300 group cursor-default">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-500 border border-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-100 transition-colors duration-300 shrink-0 shadow-sm">
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

          {/* Right Form Card - Styled with Modern Islamic Aesthetics */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-premium-lg border border-emerald-50 relative overflow-hidden">

            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-[100%] z-0"></div>

            {submitted ? (
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-scale-in">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900">মেসেজ সফলভাবে পাঠানো হয়েছে!</h3>
                <p className="text-slate-600">আমাদের দক্ষ প্রতিনিধি অতি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  আবার মেসেজ পাঠান
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-8 relative z-10">মেসেজ পাঠান</h3>
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">নাম</label>
                      <input required type="text" className="input-premium" placeholder="আপনার নাম" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">ফোন</label>
                      <input required type="text" className="input-premium" placeholder="ফোন নম্বর" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">বার্তা</label>
                    <textarea required rows={4} className="input-premium resize-none" placeholder="কিভাবে আমরা সাহায্য করতে পারি?"></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary flex items-center justify-center gap-2 mt-4"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        বার্তা পাঠান <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;