'use client';
import React, { useState } from 'react';
import {
    Camera,
    ChevronLeft,
    ChevronRight,
    X,
    ImageIcon,
    PlayCircle
} from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/constants';

export default function MediaGalleryPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [sliderIndex, setSliderIndex] = useState(0);

    const nextSlide = () =>
        setSliderIndex((p) => (p + 1) % GALLERY_IMAGES.length);
    const prevSlide = () =>
        setSliderIndex((p) =>
            (p - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        );

    return (
        <div className="min-h-screen bg-slate-50 mt-16 py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                <section className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 px-4 py-1.5 rounded-full mb-6">
                        <Camera size={18} /> আমাদের গ্যালারি
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        মাদরাসাতু আহমাদের মিডিয়া গ্যালারি
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        আধুনিক গ্রিড ও স্লাইডারের মাধ্যমে আমাদের শিক্ষা কার্যক্রম ও অনুষ্ঠান
                    </p>
                </section>

                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-6 relative rounded-xl overflow-hidden group">
                            <img
                                src={GALLERY_IMAGES[0].url}
                                alt={GALLERY_IMAGES[0].caption}
                                className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/25" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-semibold">{GALLERY_IMAGES[0].caption}</h3>
                            </div>
                        </div>

                        <div className="md:col-span-6 grid grid-rows-2 gap-4">
                            {[1, 2].map((i) => (
                                <div
                                    key={GALLERY_IMAGES[i].id}
                                    className="relative rounded-xl overflow-hidden group"
                                >
                                    <img
                                        src={GALLERY_IMAGES[i].url}
                                        alt={GALLERY_IMAGES[i].caption}
                                        className="w-full h-32 md:h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                    <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                                        {GALLERY_IMAGES[i].caption}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">
                        📸 ছবি গ্যালারি
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {GALLERY_IMAGES.map((img, index) => (
                            <div
                                key={img.id}
                                onClick={() => setSelectedImage(index)}
                                className="group relative rounded-lg overflow-hidden bg-slate-100 cursor-pointer"
                            >
                                <img
                                    src={img.url}
                                    alt={img.caption}
                                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
                                <div className="absolute bottom-0 w-full px-2 py-1 text-xs text-white bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
                                    {img.caption}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">🖼️ হাইলাইট স্লাইডার</h2>
                    <div className="relative rounded-2xl overflow-hidden">
                        <img
                            src={GALLERY_IMAGES[sliderIndex].url}
                            className="w-full h-[320px] object-cover"
                            alt="Slider Image"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute bottom-6 left-6 text-white text-xl">
                            {GALLERY_IMAGES[sliderIndex].caption}
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">🎥 ভিডিও গ্যালারি</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {['ক্যাম্পাস ট্যুর', 'শিক্ষা কার্যক্রম'].map((v) => (
                            <div
                                key={v}
                                className="relative aspect-video rounded-xl bg-slate-200 overflow-hidden"
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white">
                                        <PlayCircle fill="currentColor" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                                    {v}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white"
                    >
                        <X size={28} />
                    </button>
                    <img
                        src={GALLERY_IMAGES[selectedImage].url}
                        className="max-w-[90%] max-h-[90%] rounded-lg"
                        alt="Full Preview"
                    />
                </div>
            )}
        </div>
    );
}
