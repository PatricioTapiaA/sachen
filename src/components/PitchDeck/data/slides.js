import { Users, Clock, Target, LineChart, Building, Rocket } from 'lucide-react';

export const slides = [
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
        icon: <Users className="w-16 h-16 text-blue-600" />,
        type: "content"
    },
    // Slide 3: Nuestra Solución
    {
        title: "La Solución:LandBot + WeFindYourNewJob",
        points: [
            "Bots de Landbot personalizados para recruiting",
            "Integración con Facebook Ads & Google Ads",
            "Entrevistas preliminares automatizadas",
            "Proceso de postulación ágil y amigable"
        ],
        icon: <Rocket className="w-16 h-16 text-green-600" />,
        type: "content"
    },
    // Los demás slides...
];