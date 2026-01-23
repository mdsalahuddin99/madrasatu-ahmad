import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Departments from '@/components/Departments';
import Stats from '@/components/Stats';
import HifzSection from '@/components/HifzSection';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <About />
            <Features />
            <Departments />
            <HifzSection />
            <Gallery />
        </>
    );
}
