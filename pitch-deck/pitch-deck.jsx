import React, { useState } from 'react';
import { Users, Clock, Target, LineChart, Building, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

const PitchDeck = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        // Slide 1: Portada
        {
            title: "Revolucionando el Recruiting Digital",
            subtitle: "Una propuesta de colaboración con Landbot",
            type: "cover"
        },
        // Slide 2: Problema
        {
            type: "content",
            title: "El Problema",
            icon: <Users className="w-12 h-12 text-blue-600" />,
            points: [
                "Procesos de reclutamiento lentos y costosos",
                "Alta tasa de abandono en aplicaciones",
                "Experiencia del candidato poco atractiva"
            ]
        },
        // Slide 3: Solución
        {
            type: "content",
            title: "Nuestra Solución",
            icon: <Rocket className="w-12 h-12 text-blue-600" />,
            points: [
                "Chatbots inteligentes para preselección",
                "Automatización de tareas repetitivas",
                "Experiencia personalizada 24/7"
            ]
        },
        // Slide 4: Call to Action
        {
            type: "cta",
            title: "¡Comencemos Juntos!",
            subtitle: "Transformemos el futuro del recruiting"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const renderSlide = (slide) => {
        switch (slide.type) {
            case "cover":
                return (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <h1 className="text-4xl font-bold text-blue-600 mb-4">{slide.title}</h1>
                        <p className="text-xl text-gray-600">{slide.subtitle}</p>
                    </div>
                );
            case "content":
                return (
                    <div className="flex flex-col items-center h-full">
                        <div className="mb-8">{slide.icon}</div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">{slide.title}</h2>
                        <ul className="space-y-4">
                            {slide.points.map((point, index) => (
                                <li key={index} className="flex items-center text-lg text-gray-700">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "cta":
                return (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">{slide.title}</h2>
                        <p className="text-xl text-gray-600">{slide.subtitle}</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-12 relative">
                <div className="h-96">
                    {renderSlide(slides[currentSlide])}
                </div>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                        disabled={currentSlide === 0}
                    >
                        <ChevronLeft className="w-6 h-6 text-blue-600" />
                    </button>
                    <span className="text-gray-600">
                        {currentSlide + 1} / {slides.length}
                    </span>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                        disabled={currentSlide === slides.length - 1}
                    >
                        <ChevronRight className="w-6 h-6 text-blue-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PitchDeck;