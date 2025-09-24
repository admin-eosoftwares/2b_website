'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProjectDetails {
    capacity: string;
    panels: string;
    annualProduction: string;
    completionYear: string;
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
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlay, images.length]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div 
            className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="relative group">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <Image
                        src={images[currentImageIndex]}
                        alt={`${title} - Resim ${currentImageIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                                aria-label="Önceki resim"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                                aria-label="Sonraki resim"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

                    {/* Auto-play Toggle */}
                    {images.length > 1 && (
                        <button
                            onClick={() => setIsAutoPlay(!isAutoPlay)}
                            className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                            aria-label={isAutoPlay ? "Otomatik oynatmayı durdur" : "Otomatik oynatmayı başlat"}
                        >
                            {isAutoPlay ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            )}
                        </button>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    
                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <span className="font-semibold text-blue-800">Kapasite:</span>
                            <p className="text-blue-700">{details.capacity}</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                            <span className="font-semibold text-green-800">Panel Sayısı:</span>
                            <p className="text-green-700">{details.panels}</p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded-lg">
                            <span className="font-semibold text-amber-800">Yıllık Üretim:</span>
                            <p className="text-amber-700">{details.annualProduction}</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                            <span className="font-semibold text-purple-800">Tamamlanma:</span>
                            <p className="text-purple-700">{details.completionYear}</p>
                        </div>
                    </div>
                    
                    <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-800">Konum:</span>
                        <p className="text-gray-700">{details.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
