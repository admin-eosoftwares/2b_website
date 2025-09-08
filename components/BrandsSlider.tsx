'use client';

import { useState, useEffect } from 'react';

export default function BrandsSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [previousSlide, setPreviousSlide] = useState(0);
    const [previousMobileSlide, setPreviousMobileSlide] = useState(0);

    const brands = [
        { name: 'Varta', logo: '/varta-logo.png' },
        { name: 'CW Enerji', logo: '/cw-enerji-logo.png' },
        { name: 'Tommatech', logo: '/tommatech-logo.png' },
        { name: 'Orbus', logo: '/orbus-logo.png' },
        { name: 'Panther', logo: '/panther-logo.png' },
        { name: 'Avec', logo: '/avec-logo.png' }
    ];

    const slides = [];
    for (let i = 0; i < brands.length; i += 3) {
        slides.push(brands.slice(i, i + 3));
    }

    // Mobil için 2'li gruplar
    const mobileSlides = [];
    for (let i = 0; i < brands.length; i += 2) {
        mobileSlides.push(brands.slice(i, i + 2));
    }

    // Otomatik slider - Desktop
    useEffect(() => {
        if (slides.length <= 1 || isHovered) return;

        const autoSlide = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3500);

        return () => clearInterval(autoSlide);
    }, [slides.length, isHovered]);

    // Otomatik slider - Mobile
    useEffect(() => {
        if (mobileSlides.length <= 1 || isHovered) return;

        const autoMobileSlide = setInterval(() => {
            setCurrentMobileSlide((prev) => (prev + 1) % mobileSlides.length);
        }, 3000);

        return () => clearInterval(autoMobileSlide);
    }, [mobileSlides.length, isHovered]);

    const nextSlide = () => {
        setPreviousSlide(currentSlide);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setPreviousSlide(currentSlide);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextMobileSlide = () => {
        setPreviousMobileSlide(currentMobileSlide);
        setCurrentMobileSlide((prev) => (prev + 1) % mobileSlides.length);
    };

    const prevMobileSlide = () => {
        setPreviousMobileSlide(currentMobileSlide);
        setCurrentMobileSlide((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <div
                className="flex items-center gap-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Sol Buton - Desktop */}
                {slides.length > 1 && (
                    <button
                        onClick={prevSlide}
                        className="flex-shrink-0 bg-transparent text-gray-300 p-1 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 hidden md:block"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {/* Sol Buton - Mobile */}
                {mobileSlides.length > 1 && (
                    <button
                        onClick={prevMobileSlide}
                        className="flex-shrink-0 bg-transparent text-gray-300 p-1 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 md:hidden"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {/* Desktop Slider Container */}
                <div className="flex-1 overflow-hidden hidden md:block">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                            transformOrigin: previousSlide < currentSlide ? 'left' : 'right'
                        }}
                    >
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                                <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
                                    {slide.map((brand, brandIndex) => (
                                        <div
                                            key={brandIndex}
                                            className="group flex items-center justify-center p-4 bg-transparent transition-all duration-300 w-full h-40 hover:scale-105"
                                        >
                                            <img
                                                src={brand.logo}
                                                alt={`${brand.name} Logo`}
                                                className={`w-auto object-contain transition-transform duration-300 group-hover:scale-110 ${brand.name === 'Orbus'
                                                    ? 'h-20 scale-110'
                                                    : 'h-16'
                                                    }`}
                                                style={{
                                                    imageRendering: 'crisp-edges',
                                                    filter: 'contrast(1.1) brightness(1.05)',
                                                    backfaceVisibility: 'hidden'
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Slider Container */}
                <div className="flex-1 overflow-hidden md:hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentMobileSlide * 100}%)`,
                            transformOrigin: previousMobileSlide < currentMobileSlide ? 'left' : 'right'
                        }}
                    >
                        {mobileSlides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                                <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
                                    {slide.map((brand, brandIndex) => (
                                        <div
                                            key={brandIndex}
                                            className="group flex items-center justify-center p-4 bg-transparent transition-all duration-300 w-full h-32 hover:scale-105"
                                        >
                                            <img
                                                src={brand.logo}
                                                alt={`${brand.name} Logo`}
                                                className="w-auto object-contain transition-transform duration-300 group-hover:scale-110 h-16"
                                                style={{
                                                    imageRendering: 'crisp-edges',
                                                    filter: 'contrast(1.1) brightness(1.05)',
                                                    backfaceVisibility: 'hidden'
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sağ Buton - Desktop */}
                {slides.length > 1 && (
                    <button
                        onClick={nextSlide}
                        className="flex-shrink-0 bg-transparent text-gray-300 p-1 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 hidden md:block"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {/* Sağ Buton - Mobile */}
                {mobileSlides.length > 1 && (
                    <button
                        onClick={nextMobileSlide}
                        className="flex-shrink-0 bg-transparent text-gray-300 p-1 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 md:hidden"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-2 space-x-2">
                {/* Desktop dots */}
                {slides.length > 1 && (
                    <div className="hidden md:flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-0.5 transition-all duration-300 ${index === currentSlide
                                    ? 'w-6 bg-blue-900'
                                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                )}

                {/* Mobile dots */}
                {mobileSlides.length > 1 && (
                    <div className="flex md:hidden space-x-2">
                        {mobileSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentMobileSlide(index)}
                                className={`h-0.5 transition-all duration-300 ${index === currentMobileSlide
                                    ? 'w-6 bg-blue-900'
                                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
