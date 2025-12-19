import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3'}`}>
      
      {/* Main Nav Container */}
      <div className="container mx-auto px-4">
        <div className={`
          relative flex justify-between items-center rounded-2xl transition-all duration-500
          ${scrolled 
            ? 'glass-nav px-6 py-3 mt-0 shadow-lg' 
            : 'bg-white/80 backdrop-blur-md px-6 py-4 mt-2 shadow-sm border border-white/40'}
        `}>
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer z-20">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl transform rotate-3 group-hover:rotate-0 transition-all duration-300 shadow-md"></div>
              <span className="relative z-10 text-white font-bold text-xl">M</span>
              <div className="absolute -top-1 -right-1 text-gold-500 animate-pulse-slow">★</div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-slate-800 leading-none tracking-tight group-hover:text-primary-700 transition-colors">মাদরাসাতু আহমাদ</h1>
              <p className="text-[10px] text-primary-600 font-semibold tracking-widest uppercase mt-0.5">আধুনিক শিক্ষা প্রতিষ্ঠান</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1 z-20">
            <div className="flex items-center bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 mr-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="px-5 py-2 rounded-full font-medium text-sm text-slate-600 hover:text-primary-700 hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-0.5 active:translate-y-0">
              ভর্তি তথ্য
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700 p-2 bg-slate-100 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-all z-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-0 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)}></div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full px-4 md:hidden transition-all duration-300 transform ${isOpen ? 'translate-y-2 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 overflow-hidden">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-slate-700 hover:text-primary-700 hover:bg-primary-50 px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-between group"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="w-1.5 h-1.5 rounded-full bg-primary-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <button className="bg-primary-600 text-white w-full py-3.5 rounded-xl font-bold shadow-lg shadow-primary-200 active:scale-[0.98] transition-transform">
              যোগাযোগ করুন
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;