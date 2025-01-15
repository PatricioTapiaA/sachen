const React = window.React;
const { useState } = React;

// Obtenemos los iconos de Lucide
const { Users, Clock, Target, LineChart, Building, Rocket, ChevronLeft, ChevronRight } = window.lucide;
const PitchDeck = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
        // Slide 1: Portada
        {
            title: "Revolucionando el Recruiting Digital",
            subtitle: "Una propuesta de colaboración con Landbot",
            type: "cover"
        },
        // Slide 2: El Problema
        {
            title: "El Desafío Actual",
            points: [
                "Procesos de recruiting lentos y costosos",
                "Alta tasa de abandono en aplicaciones",
                "Experiencia del candidato deficiente",
                "Recursos limitados en RRHH"
            ],
            icon: Users({ className: "w-16 h-16 text-blue-600" }),
            type: "content"
        },
        // Slide 3: Nuestra Solución
        {
            title: "La Solución: LandBot + WeFindYourNewJob",
            points: [
                "Bots de Landbot personalizados para recruiting",
                "Integración con Facebook Ads & Google Ads",
                "Entrevistas preliminares automatizadas",
                "Proceso de postulación ágil y amigable"
            ],
            icon: Rocket({ className: "w-16 h-16 text-green-600" }),
            type: "content"
        },
        // Slide 4: Beneficios
        {
            title: "Beneficios Clave",
            points: [
                "Reducción del 90% en tiempo de contratación",
                "Incremento del 80% en candidatos cualificados",
                "Mejora del 85% en experiencia del candidato",
                "Reducción del 75% en costos de reclutamiento"
            ],
            icon: LineChart({ className: "w-16 h-16 text-purple-600" }),
            type: "content"
        },
        // Slide 5: Mercado Objetivo
        {
            title: "Mercado Objetivo",
            points: [
                "España: 3.4M empresas activas",
                "Alemania: 3.8M empresas activas",
                "Foco en empresas pequeñas, medianas y grandes",
                "Sectores: Tecnología, Retail, Manufactura, Logística, Gastronomía, Agencias de empleo, etc."
            ],
            icon: Target({ className: "w-16 h-16 text-red-600" }),
            type: "content"
        },
        // Slide 6: Plan de Implementación
        {
            title: "Plan de Implementación",
            points: [
                "Fase 1: Setup inicial: 24-48 horas",
                "Fase 2: Package completo: Chatbot + Templates de anuncios",
                "Fase 2.2: Portal Personalizado o Implementación en el Portal de la empresa",
                "Fase 3: Guía de implementación paso a paso",
                "Soporte continuo y optimización"
            ],
            icon: Building({ className: "w-16 h-16 text-orange-600" }),
            type: "content"
        },
        // Slide 7: Beneficios para Landbot
        {
            title: "Beneficios para Landbot",
            points: [
                "Ingresos recurrentes: Cada cliente = suscripción mensual garantizada",
                "Expansión de mercado: Entrada directa al sector RRHH en España y Alemania",
                "Volumen: Miles de bots activos para recruiting",
                "Caso de éxito: Modelo replicable en otros países"
            ],
            icon: LineChart({ className: "w-16 h-16 text-green-600" }),
            type: "content"
        },
        // Slide 8: Próximos Pasos
        {
            title: "Próximos Pasos",
            subtitle: "¿Listos para revolucionar el recruiting juntos?",
            type: "cta"
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

                {/* Navigation */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                        disabled={currentSlide === 0}
                    >
                        {ChevronLeft({ className: "w-6 h-6 text-blue-600" })}
                    </button>
                    <span className="text-gray-600">
                        {currentSlide + 1} / {slides.length}
                    </span>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                        disabled={currentSlide === slides.length - 1}
                    >
                        {ChevronRight({ className: "w-6 h-6 text-blue-600" })}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Necesitamos cambiar la forma de exportar para que funcione con el script tag
window.PitchDeck = PitchDeck;