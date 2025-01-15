import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Clock, Target, LineChart, Building, Rocket } from 'lucide-react';
import { slides } from './data/slides';
import { Navigation } from './components/Navigation';
import { SlideRenderer } from './components/SlideRenderer';

const PitchDeck = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-12 relative">
                <div className="h-96">
                    <SlideRenderer slide={slides[currentSlide]} />
                </div>
                <Navigation 
                    currentSlide={currentSlide} 
                    totalSlides={slides.length}
                    onNext={nextSlide}
                    onPrev={prevSlide}
                />
            </div>
        </div>
    );
};

export default PitchDeck;