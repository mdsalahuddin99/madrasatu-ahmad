'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, GraduationCap, Image as ImageIcon, Info, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'প্রচ্ছদ', href: '/', icon: BookOpen },
  { label: 'আমাদের সম্পর্কে', href: '/about', icon: Info },
  { label: 'বিভাগসমূহ', href: '/departments', icon: GraduationCap },
  { label: 'গ্যালারি', href: '/gallery', icon: ImageIcon },
  { label: 'যোগাযোগ', href: '/contact', icon: Phone },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Pages that start with a dark Hero section where we want transparent navbar
  const isTransparentPage = pathname === '/' || pathname === '/about' || pathname === '/departments' || pathname === '/contact';

  // Transparent only if on a transparent-compatible page AND at the top
  const isTransparent = isTransparentPage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${!isTransparent ? 'py-2' : 'py-4'}`}>
      <div className="container-custom">
        <nav className={`
          relative flex justify-between items-center rounded-3xl transition-all duration-500
          ${!isTransparent
            ? 'glass px-6 py-3 shadow-premium'
            : 'bg-transparent px-6 py-4 border-transparent shadow-none'}
        `}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-20">
            <div className={`relative transition-transform duration-300 ${isTransparent && 'scale-110'}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:shadow-xl group-hover:shadow-emerald-600/50 transition-all duration-300">
                <span className="text-white font-bold text-2xl font-heading">م</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className={`text-xl font-heading font-bold leading-none tracking-tight transition-colors ${!isTransparent ? 'text-slate-900 group-hover:text-emerald-700' : 'text-white'}`}>
                মাদরাসাতু আহমাদ
              </h1>
              <p className={`text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${!isTransparent ? 'text-emerald-700' : 'text-emerald-200'}`}>
                আধুনিক দ্বীনি শিক্ষা
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2 z-20">
            <div className={`flex items-center p-1.5 rounded-2xl border mr-4 transition-all duration-500 ${!isTransparent ? 'bg-slate-50/80 border-slate-200/50' : 'bg-white/10 border-white/10 backdrop-blur-sm'}`}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-md ${!isTransparent
                    ? 'text-slate-700 hover:text-emerald-700 hover:bg-white'
                    : 'text-white hover:bg-white/20 hover:text-white'
                    }`}
                >
                  <item.icon size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <Link href="/admission" className={`btn-primary text-sm px-6 py-3 ${isTransparent && 'shadow-none ring-1 ring-white/20'}`}>
              ভর্তি আবেদন
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-all z-20 ${!isTransparent ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-white/20 text-white hover:bg-white/30'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full px-6 lg:hidden transition-all duration-300 transform z-40 ${isOpen ? 'translate-y-2 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="bg-white rounded-3xl shadow-premium-lg border border-slate-100 p-6 overflow-hidden">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 px-5 py-4 rounded-2xl font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <Link href="/admission" className="btn-primary w-full py-4 text-base text-center block" onClick={() => setIsOpen(false)}>
              ভর্তি আবেদন
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;