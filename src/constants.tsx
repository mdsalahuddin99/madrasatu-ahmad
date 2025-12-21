import { 
  Zap, 
  Video, 
  Gamepad2, 
  Building2, 
  Droplets, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  UserCheck, 
  Coffee 
} from 'lucide-react';
import { NavItem, Feature, Course, Stat, GalleryImage } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'হোম', href: '#home' },
  { label: 'আমাদের সম্পর্কে', href: '/about' },
  { label: 'বিভাগসমূহ', href: '#departments' },
  { label: 'হিফজ বিভাগ', href: '#hifz' },
  { label: 'গ্যালারি', href: '#gallery' },
];

export const FEATURES: Feature[] = [
  { id: 1, title: '২৪/৭ বিদ্যুৎ ও জেনারেটর', icon: Zap, description: 'নিরবচ্ছিন্ন বিদ্যুৎ ব্যবস্থা নিশ্চিত করা হয়।' },
  { id: 2, title: 'সিসি ক্যামেরা দ্বারা পর্যবেক্ষণ', icon: Video, description: 'সার্বক্ষণিক নিরাপত্তা ও নজরদারি।' },
  { id: 3, title: 'বিশাল খেলার মাঠ', icon: Gamepad2, description: 'শারীরিক ও মানসিক বিকাশে খেলাধুলা।' },
  { id: 4, title: 'আবাসিক হল', icon: Building2, description: 'মানসম্মত থাকা ও খাওয়ার ব্যবস্থা।' },
  { id: 5, title: 'বিশুদ্ধ পানি', icon: Droplets, description: 'গভীর নলকূপ ও ফিল্টার করা পানি।' },
  { id: 6, title: 'কঠোর নিরাপত্তা', icon: ShieldCheck, description: 'গার্ড ও গেটকিপার দ্বারা নিয়ন্ত্রিত।' },
];

export const COURSES: Course[] = [
  { 
    id: 1, 
    title: 'কিতাব বিভাগ', 
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop', // Open Book
    description: 'শরিয়াহ ভিত্তিক গভীর জ্ঞান অর্জনের জন্য বিশেষায়িত কোর্স।',
    cta: 'সিলেবাস দেখুন' 
  },
  { 
    id: 2, 
    title: 'হিফজুল কুরআন', 
    image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800&auto=format&fit=crop', // Quran on Stand
    description: 'আন্তর্জাতিক মানের হাফেজ গড়ার লক্ষ্যে নিবিড় তত্ত্বাবধান।',
    cta: 'ভর্তি তথ্য' 
  },
  { 
    id: 3, 
    title: 'নূরানী ও নাজেরা', 
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', // Education/Learning
    description: 'শিশুদের জন্য সহীহ শুদ্ধ কুরআন শিক্ষার বুনিয়াদ।',
    cta: 'বিস্তারিত' 
  },
];

export const STATS: Stat[] = [
  { id: 1, value: '১২০০+', label: 'শিক্ষার্থী', icon: Users },
  { id: 2, value: '৪৫+', label: 'নিবেদিত শিক্ষক', icon: UserCheck },
  { id: 3, value: '০৮', label: 'বিভাগ', icon: BookOpen },
  { id: 4, value: '২০০০', label: 'আসন সংখ্যা', icon: Building2 },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200&auto=format&fit=crop', // Boy praying
    caption: 'পবিত্র কুরআন পাঠরত ছাত্র'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop', // Group study
    caption: 'লাইব্রেরিতে অধ্যয়নরত শিক্ষার্থী'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop', // Child reading
    caption: 'মনোযোগী ছাত্র'
  },
  {
    id: 4,
    url: 'https://ahmadsit.com/uploads/1740550940_banner-img.jpg ', // Islamic architecture/Person
    caption: 'আধুনিক ক্যাম্পাস'
  },
  {
    id: 5,
    url: ' https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop', // Classroom vibe
    caption: 'আধুনিক শিক্ষা ব্যবস্থা'
  }
];

export const CONTACT_INFO = {
  phone: '+৮৮০ ১৭৭৭ ৭৭৭ ৭৭৭',
  address: 'ভাঙ্গার মোড়, সাইনবোর্ড, যাত্রাবাড়ী, ঢাকা-১৩৬২',
  email: 'info@madrasatuahmad.edu.bd'
};