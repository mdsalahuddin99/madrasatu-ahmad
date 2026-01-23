'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/constants';

const Gallery: React.FC = () => {
  // Extract images for the marquee (using a larger set by duplicating for seamless loop)
  const marqueeImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Camera size={16} />
            <span>আমাদের গ্যালারি</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            মাদরাসার <span className="text-emerald-700">মনোরম দৃশ্য</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            আমাদের শিক্ষা কার্যক্রম এবং ক্যাম্পাসের কিছু স্থিরচিত্র।
          </p>
        </div>

        {/* 1. Gallery Grid Style (Top Section) */}
        <div className="space-y-6 mb-20 px-4 md:px-0">
          {/* First Row: 3 Images (Responsive: 2 columns on mobile, 3 on lg) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.slice(0, 3).map((img, idx) => (
              <motion.div
                key={`row1-${idx}`}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-[4/3] rounded-md overflow-hidden shadow-md group cursor-pointer"
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-sm">{img.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row: 2 Images (Responsive: 1 column on mobile or keep 2?) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GALLERY_IMAGES.slice(3, 5).map((img, idx) => (
              <motion.div
                key={`row2-${idx}`}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[16/7] rounded-md overflow-hidden shadow-md group cursor-pointer"
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white text-lg font-bold">
                    <p>{img.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Image Marquee Section (Bottom Section) */}
      <div className="relative py-12 bg-slate-50 border-y border-slate-100 mt-10">
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex whitespace-nowrap gap-6"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ display: "flex", width: "fit-content" }}
          >
            {/* Double the images for seamless loop */}
            {[...marqueeImages, ...marqueeImages].map((img, idx) => (
              <div
                key={`marquee-${idx}`}
                className="relative w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden shadow-md flex-shrink-0 border-2 border-white transform transition-transform hover:scale-105 duration-300"
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        #gallery .group:hover .motion-div, 
        #gallery .group:hover > div {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Gallery;