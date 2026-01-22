'use client';
import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle2, User, Phone, MapPin, Calendar, BookOpen, Users } from 'lucide-react';
import Link from 'next/link';

const AdmissionPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-cream-50 flex items-center justify-center p-6">
                <div className="card-premium max-w-lg w-full text-center space-y-6 animate-scale-in">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 size={40} />
                    </div>
                    <h1 className="text-3xl font-heading font-bold text-slate-900">আবেদন সফল হয়েছে!</h1>
                    <p className="text-slate-600">
                        আপনার আবেদনটি আমাদের কাছে পৌঁছেছে। আমরা শীঘ্রই আপনার দেওয়া ফোন নম্বরে যোগাযোগ করব ইনশাআল্লাহ।
                    </p>
                    <Link href="/" className="btn-primary inline-flex items-center gap-2">
                        <ArrowLeft size={18} />
                        <span>মূল পাতায় ফিরে যান</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream-50 pt-32 pb-20">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <Link href="/" className="inline-flex items-center gap-2 text-emerald-700 font-semibold mb-6 hover:translate-x-1 transition-transform">
                            <ArrowLeft size={18} />
                            <span>ফিরে যান</span>
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">ভর্তি আবেদন ফরম</h1>
                        <p className="text-slate-600">আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য প্রয়োজনীয় তথ্য দিয়ে ফর্মটি পূরণ করুন।</p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-[3rem] shadow-premium-lg border border-emerald-50 overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-8 text-white relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold font-heading">শিক্ষার্থীর তথ্য</h2>
                                    <p className="text-emerald-100 text-sm opacity-80">সঠিকভাবে তথ্য প্রদান করুন</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Student Name */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <User size={16} className="text-emerald-600" />
                                        <span>শিক্ষার্থীর নাম</span>
                                    </label>
                                    <input required type="text" className="input-premium" placeholder="পুরো নাম লিখুন" />
                                </div>

                                {/* Father's Name */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <Users size={16} className="text-emerald-600" />
                                        <span>পিতার নাম</span>
                                    </label>
                                    <input required type="text" className="input-premium" placeholder="পিতার পুরো নাম লিখুন" />
                                </div>

                                {/* Date of Birth */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <Calendar size={16} className="text-emerald-600" />
                                        <span>জন্ম তারিখ</span>
                                    </label>
                                    <input required type="date" className="input-premium" />
                                </div>

                                {/* Phone Number */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <Phone size={16} className="text-emerald-600" />
                                        <span>ফোন নম্বর</span>
                                    </label>
                                    <input required type="tel" className="input-premium" placeholder="সচল ফোন নম্বর" />
                                </div>

                                {/* Select Department */}
                                <div className="space-y-2 md:col-span-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <BookOpen size={16} className="text-emerald-600" />
                                        <span>কাঙ্ক্ষিত বিভাগ</span>
                                    </label>
                                    <select required className="input-premium appearance-none bg-white">
                                        <option value="">বিভাগ নির্বাচন করুন</option>
                                        <option value="কিতাব">কিতাব বিভাগ</option>
                                        <option value="হিফজুল কুরআন">হিফজুল কুরআন বিভাগ</option>
                                        <option value="নূরানী ও নাজেরা">নূরানী ও নাজেরা বিভাগ</option>
                                    </select>
                                </div>

                                {/* Present Address */}
                                <div className="space-y-2 md:col-span-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <MapPin size={16} className="text-emerald-600" />
                                        <span>বর্তমান ঠিকানা</span>
                                    </label>
                                    <textarea required rows={3} className="input-premium resize-none" placeholder="বাসার নম্বর, পাড়া, এলাকা..."></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary flex items-center justify-center gap-3 py-5 text-lg group"
                            >
                                {loading ? (
                                    <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>আবেদন জমা দিন</span>
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionPage;
