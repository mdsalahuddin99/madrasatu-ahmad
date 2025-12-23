import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DepartmentDetailsPage from './pages/DepartmentDetailsPage';
import MediaGalleryPage from './pages/MediaGalleryPage';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/departments/:id" element={<DepartmentDetailsPage />} />
          <Route path="/gallery" element={<MediaGalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
