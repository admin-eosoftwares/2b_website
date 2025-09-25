'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProjectDetails {
    capacity: string;
    panels: string;
    location: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    images: string[];
    details: ProjectDetails;
    isVisible: boolean;
    delay?: number;
}

export default function ProjectCard({
    title,
    description,
    images,
    details,
    isVisible,
    delay = 0
}: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div
            className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform flex flex-col ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="relative group flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden rounded-t-xl flex-shrink-0">
                    <div className="relative w-full h-full">
                        {images.map((image, index) => (
                            <Image
                                key={image}
                                src={image}
                                alt={`${title} - Resim ${index + 1}`}
                                fill
                                className={`absolute inset-0 object-cover transition-all duration-500 group-hover:scale-105 ${index === currentImageIndex
                                    ? 'opacity-100 z-10'
                                    : 'opacity-0 z-0'
                                    }`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent group-hover:bg-white text-white group-hover:text-gray-800 p-1.5 rounded-full transition-all duration-300 shadow-lg group-hover:shadow-xl z-20"
                                aria-label="Önceki resim"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent group-hover:bg-white text-white group-hover:text-gray-800 p-1.5 rounded-full transition-all duration-300 shadow-lg group-hover:shadow-xl z-20"
                                aria-label="Sonraki resim"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                            {currentImageIndex + 1} / {images.length}
                        </div>
                    )}

                </div>

                {/* Content */}
                <div className="p-3 sm:p-6 flex flex-col flex-grow">
                    {/* Project Description */}
                    <p className="text-gray-700 text-sm mb-4 sm:mb-6 leading-relaxed">
                        {description}
                    </p>

                    {/* Project Info Footer */}
                    <div className="flex justify-between items-center text-sm mt-2 sm:mt-auto">
                        {/* Location */}
                        <div className="flex items-center text-blue-600 flex-1 min-w-0">
                            <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-xs sm:text-sm break-words truncate">{details.location}</span>
                        </div>

                        {/* Power and Panel Info */}
                        <div className="font-medium flex items-center flex-shrink-0 ml-3">
                            <span className="text-green-600 text-xs sm:text-sm">{details.capacity}</span>
                            <span className="text-gray-400 mx-1 sm:mx-2">•</span>
                            <span className="text-orange-600 text-xs sm:text-sm">{details.panels}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
