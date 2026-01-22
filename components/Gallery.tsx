'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/constants';

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  // Auto-play functionality (pauses when lightbox is open)
  useEffect(() => {
    if (isLightboxOpen) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isLightboxOpen]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, currentIndex]);

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? GALLERY_IMAGES.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const isLastSlide = currentIndex === GALLERY_IMAGES.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleImageError = (index: number) => {
    setFailedImages(prev => ({ ...prev, [index]: true }));
  };

  const currentImageFailed = failedImages[currentIndex];

  return (
    <section id="gallery" className="pt-36 bg-white overflow-hidden">
      <div className="container mx-auto px-6">


        {/* Cinematic Display */}
        <div
          className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer bg-slate-100"
          onClick={() => !currentImageFailed && setIsLightboxOpen(true)}
        >
          {!currentImageFailed ? (
            <>
              <div
                style={{ backgroundImage: `url(${GALLERY_IMAGES[currentIndex].url})` }}
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out transform group-hover:scale-105"
              ></div>
              {/* Hidden img to catch errors for background image */}
              <img
                src={GALLERY_IMAGES[currentIndex].url}
                className="hidden"
                onError={() => handleImageError(currentIndex)}
                alt="hidden check"
              />
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-200 text-slate-400">
              <ImageIcon size={64} />
              <p className="mt-4 font-medium">ইমেজ লোড করা যায়নি</p>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

          {/* Maximize Icon Overlay */}
          {!currentImageFailed && (
            <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-slate-900 z-30">
              <Maximize2 size={24} />
            </div>
          )}

          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-100 pointer-events-none">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4  rounded-3xl max-w-xl">
              <h3 className="text-xl  font-bold text-white">{GALLERY_IMAGES[currentIndex].caption}</h3>

            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-4 mt-16 overflow-x-auto pb-4 no-scrollbar">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => goToSlide(idx)}
              className={`relative min-w-[100px] md:min-w-[120px] h-20 md:h-24 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 bg-slate-200 ${currentIndex === idx ? 'ring-4 ring-primary-500 ring-offset-2' : 'opacity-60 hover:opacity-100'
                }`}
            >
              {!failedImages[idx] ? (
                <img
                  src={img.url}
                  alt="thumb"
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(idx)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <ImageIcon size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && !currentImageFailed && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in zoom-in-95">
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
          >
            <X size={28} />
          </button>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-50 hover:scale-110"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-50 hover:scale-110"
          >
            <ChevronRight size={32} />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[currentIndex].url}
              alt={GALLERY_IMAGES[currentIndex].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in-90 duration-300"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white/90 text-xl md:text-2xl font-bold font-sans">
                {GALLERY_IMAGES[currentIndex].caption}
              </h3>
              <p className="text-white/50 text-sm mt-2">
                {currentIndex + 1} / {GALLERY_IMAGES.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;