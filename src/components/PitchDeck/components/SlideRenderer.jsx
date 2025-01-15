import React from 'react';

export const SlideRenderer = ({ slide }) => {
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