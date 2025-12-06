import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import AmenitiesPage from './pages/AmenitiesPage';
import FaqsPage from './pages/FaqsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
