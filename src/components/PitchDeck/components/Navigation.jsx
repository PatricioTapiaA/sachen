import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Navigation = ({ currentSlide, totalSlides, onNext, onPrev }) => (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4">
        <button
            onClick={onPrev}
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
            disabled={currentSlide === 0}
        >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>
        <span className="text-gray-600">
            {currentSlide + 1} / {totalSlides}
        </span>
        <button
            onClick={onNext}
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
            disabled={currentSlide === totalSlides - 1}
        >
            <ChevronRight className="w-6 h-6 text-blue-600" />
        </button>
    </div>
);