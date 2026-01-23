'use client';
import React, { useState } from 'react';
import {
    Camera,
    ChevronLeft,
    ChevronRight,
    X,
    PlayCircle
} from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/constants';
import Image from 'next/image';

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
        <div className="min-h-screen bg-white">
            {/* Page Header / Hero */}
            <div className="relative h-[45vh] min-h-[350px] w-full bg-slate-900 overflow-hidden">
                <Image
                    src="https://ahmadsit.com/uploads/1740550940_banner-img.jpg"
                    alt="Gallery Banner"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end pb-12">
                    <div className="container-custom">
                        <div className="max-w-2xl animate-fade-in-up">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md border border-emerald-500/30">
                                আমাদের মিডিয়া
                            </span>
                            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
                                স্থিরচিত্র ও <span className="text-emerald-400">ভিডিও গ্যালারি</span>
                            </h1>
                            <p className="text-slate-300 text-lg leading-relaxed font-medium">
                                মাদরাসাতু আহমাদের মনোরম ক্যাম্পাস এবং বিভিন্ন কার্যক্রমের কিছু মুহূর্ত।
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-16 md:py-24">
                {/* 1. Highlight Grid */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-700">
                            <Camera size={20} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">হাইলাইট দৃশ্য</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-12 lg:col-span-8 relative aspect-[16/9] rounded-md overflow-hidden group shadow-lg">
                            <Image
                                src={GALLERY_IMAGES[0].url}
                                alt={GALLERY_IMAGES[0].caption}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                                <h3 className="text-white text-xl font-bold">{GALLERY_IMAGES[0].caption}</h3>
                            </div>
                        </div>

                        <div className="md:col-span-12 lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {[1, 2].map((i) => (
                                <div
                                    key={GALLERY_IMAGES[i].id}
                                    className="relative aspect-[4/3] rounded-md overflow-hidden group shadow-md"
                                >
                                    <Image
                                        src={GALLERY_IMAGES[i].url}
                                        alt={GALLERY_IMAGES[i].caption}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <h3 className="text-white font-bold text-sm">{GALLERY_IMAGES[i].caption}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Photo Grid */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center text-blue-700">
                            <Camera size={20} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">ছবি গ্যালারি</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        {GALLERY_IMAGES.map((img, index) => (
                            <div
                                key={img.id}
                                onClick={() => setSelectedImage(index)}
                                className="group relative aspect-square rounded-md overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <Image
                                    src={img.url}
                                    alt={img.caption}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-all duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <X size={24} className="text-white rotate-45" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Slider Highlights */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-md bg-amber-100 flex items-center justify-center text-amber-700">
                            <Camera size={20} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">হাইলাইট স্লাইডার</h2>
                    </div>

                    <div className="relative aspect-[21/9] rounded-md overflow-hidden shadow-2xl group">
                        <Image
                            src={GALLERY_IMAGES[sliderIndex].url}
                            fill
                            className="object-cover transition-all duration-700"
                            alt="Slider Image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        <div className="absolute bottom-8 left-8 text-white">
                            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2 block">ছবি {sliderIndex + 1} / {GALLERY_IMAGES.length}</span>
                            <h3 className="text-2xl md:text-3xl font-bold">{GALLERY_IMAGES[sliderIndex].caption}</h3>
                        </div>

                        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* 4. Video Gallery */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-md bg-red-100 flex items-center justify-center text-red-700">
                            <PlayCircle size={20} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">ভিডিও গ্যালারি</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'ক্যাম্পাস ট্যুর', desc: 'আমাদের শিক্ষা প্রতিষ্ঠানের এক ঝলক' },
                            { title: 'শিক্ষা কার্যক্রম', desc: 'শিক্ষার্থীদের ক্লাসরুম ও পড়াশোনা' }
                        ].map((v, i) => (
                            <div
                                key={i}
                                className="relative aspect-video rounded-md bg-slate-950 overflow-hidden group cursor-pointer shadow-lg"
                            >
                                <Image
                                    src={GALLERY_IMAGES[i + 1].url}
                                    alt={v.title}
                                    fill
                                    className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 hover:bg-emerald-600 transition-all duration-300">
                                        <PlayCircle size={32} fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                    <h4 className="text-white font-bold text-lg">{v.title}</h4>
                                    <p className="text-slate-300 text-sm">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Lightbox / Modal */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-slate-950/95 z-[100] flex items-center justify-center p-4">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white hover:text-emerald-400 p-2 transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video rounded-md overflow-hidden shadow-2xl">
                        <Image
                            src={GALLERY_IMAGES[selectedImage].url}
                            fill
                            className="object-contain"
                            alt="Full Preview"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/50 backdrop-blur-sm p-4 text-center">
                            <p className="text-white font-bold">{GALLERY_IMAGES[selectedImage].caption}</p>
                        </div>
                    </div>

                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(p => (p! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
                            }}
                            className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(p => (p! + 1) % GALLERY_IMAGES.length)
                            }}
                            className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
