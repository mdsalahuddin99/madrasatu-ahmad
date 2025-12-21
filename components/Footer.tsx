import React from 'react';
import { Facebook, Youtube, Instagram, Twitter, Heart } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-primary-200 pt-20 pb-10 border-t border-primary-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl border border-primary-500">
                M
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">মাদরাসাতু আহমাদ</h2>
            </div>
            <p className="text-primary-300 leading-relaxed max-w-sm">
              আধুনিক শিক্ষা ও নৈতিকতার সমন্বয়ে আমরা গড়ছি আগামীর ভবিষ্যৎ। আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য আমাদের সাথে থাকুন।
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Youtube, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all transform hover:-translate-y-1 border border-primary-800">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-serif border-b border-primary-800 pb-2 inline-block">গুরুত্বপূর্ণ লিঙ্ক</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-gold-400 hover:translate-x-1 transition-all inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-serif border-b border-primary-800 pb-2 inline-block">সাপোর্ট</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gold-400 transition-colors">শর্তাবলী</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">গোপনীয়তা নীতি</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">সচরাচর জিজ্ঞাসা</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-400">
          <p>© ২০২৫ মাদরাসাতু আহমাদ। সর্বস্বত্ব সংরক্ষিত।</p>
           
          <a href="mdsalahuddin.pro" className="flex items-center gap-1">
            Design <Heart size={14} className="text-red-500 fill-red-500" /> by Md Salah Uddin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;