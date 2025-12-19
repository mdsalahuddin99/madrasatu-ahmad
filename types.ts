import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  icon: LucideIcon;
  description?: string;
}

export interface Course {
  id: number;
  title: string;
  image: string;
  description: string;
  cta: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
}