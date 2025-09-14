'use client';

import { useState, useEffect } from 'react';
import PageErrorBoundary from '../../components/PageErrorBoundary';
import SafeComponent, { SafeComponentFallbacks } from '../../components/SafeComponent';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Projelerimiz() {
    const [isLoaded, setIsLoaded] = useState(false);
    // Fotoğraf slider için state'ler
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Scroll animasyonları için hook'lar
    const { elementRef: realProjectRef, isVisible: realProjectVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ delay: 0 });

    // Gerçek proje verisi
    const realProject = {
        title: "Kairos Valley Otel",
        description: "Otel çatısına kurulan 200 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/kairos-valley-ges.jpg",
            "/kairos-valley-ges2.jpg"
        ],
        details: {
            capacity: "200 kWp",
            panels: "500 adet",
            annualProduction: "300 MWh",
            completionYear: "2024",
            location: "Kairos Valley Otel"
        }
    };

    // Fotoğraf slider fonksiyonları
    const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextImage = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setSlideDirection('right');
        setCurrentImageIndex((prev) => (prev + 1) % realProject.images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevImage = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setSlideDirection('left');
        setCurrentImageIndex((prev) => (prev - 1 + realProject.images.length) % realProject.images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToImage = (index: number) => {
        if (isTransitioning || index === currentImageIndex) return;
        setIsTransitioning(true);
        if (index > currentImageIndex) {
            setSlideDirection('right');
        } else if (index < currentImageIndex) {
            setSlideDirection('left');
        }
        setCurrentImageIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };


    // Otomatik oynatma
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            nextImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PageErrorBoundary pageName="Projelerimiz">
            <div className="min-h-screen bg-[#f8f8ff] relative">
                <div className="container mx-auto px-4 py-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Page Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                                Projelerimiz
                            </h1>
                            <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
                        </div>

                        {/* Gerçek Proje Kartı */}
                        <div
                            ref={realProjectRef}
                            className={`mb-16 transition-all duration-500 ease-out scroll-mt-24 ${realProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-6">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative h-80 lg:h-96 bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {realProject.images.map((image, index) => {
                                                    const isActive = index === currentImageIndex;
                                                    const isNext = index === (currentImageIndex + 1) % realProject.images.length;
                                                    const isPrev = index === (currentImageIndex - 1 + realProject.images.length) % realProject.images.length;

                                                    let animationClass = '';
                                                    if (isActive) {
                                                        animationClass = 'opacity-100 translate-x-0';
                                                    } else if (slideDirection === 'right') {
                                                        if (isNext) {
                                                            animationClass = 'opacity-100 translate-x-full';
                                                        } else {
                                                            animationClass = 'opacity-0 -translate-x-full';
                                                        }
                                                    } else {
                                                        if (isPrev) {
                                                            animationClass = 'opacity-100 -translate-x-full';
                                                        } else {
                                                            animationClass = 'opacity-0 translate-x-full';
                                                        }
                                                    }

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-all duration-500 ease-in-out ${animationClass}`}
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={`${realProject.title} - Fotoğraf ${index + 1}`}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Slider Navigation Buttons */}
                                            <button
                                                onClick={prevImage}
                                                onMouseEnter={() => setIsAutoPlay(false)}
                                                onMouseLeave={() => setIsAutoPlay(true)}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                onMouseEnter={() => setIsAutoPlay(false)}
                                                onMouseLeave={() => setIsAutoPlay(true)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            {/* Slider Dots */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                {realProject.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => goToImage(index)}
                                                        onMouseEnter={() => setIsAutoPlay(false)}
                                                        onMouseLeave={() => setIsAutoPlay(true)}
                                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                            ? 'bg-white shadow-lg scale-125'
                                                            : 'bg-white/60 hover:bg-white/80'
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Play/Pause Button */}
                                            <button
                                                onClick={() => setIsAutoPlay(!isAutoPlay)}
                                                className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                            >
                                                {isAutoPlay ? (
                                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Sağ taraf - Proje Detayları */}
                                    <div className="flex flex-col justify-center lg:h-96">
                                        <div className="mb-6">
                                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {realProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">Datça / Muğla</span>
                                            </div>

                                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                                {realProject.description}
                                            </p>
                                        </div>

                                        {/* Proje Detayları Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-sm">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold">{realProject.details.capacity}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-sm">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold">{realProject.details.panels}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-sm">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold">{realProject.details.annualProduction}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-sm">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold">{realProject.details.completionYear}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Modern Corporate CTA Section */}
                        <div
                            ref={ctaRef}
                            className={`mb-32 transition-all duration-500 ease-out ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-6 lg:p-10 shadow-xl border border-slate-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                    <div className="flex flex-col lg:flex-row lg:items-start mb-6 lg:mb-0">
                                        <div className="relative mb-4 lg:mb-0 lg:mr-8">
                                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-lg mx-auto lg:mx-0">
                                                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                                                <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <div className="flex flex-col lg:flex-row lg:items-center mb-3">
                                                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 lg:mb-0 lg:mr-4">
                                                    Projelerinizde Güvenilir Çözüm Ortağınız
                                                </h3>
                                                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto lg:mx-0"></div>
                                            </div>
                                            <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-2xl mb-4">
                                                Deneyimli ekibimiz ve kaliteli hizmet anlayışımızla,
                                                enerji projelerinizde yanınızdayız. Sürdürülebilir enerji çözümleri
                                                ile geleceğinizi birlikte inşa edelim.
                                            </p>
                                            <div className="flex items-center justify-center lg:justify-start text-slate-500">
                                                <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <span className="text-sm lg:text-base font-medium">Fikirleriniz ve projeleriniz bizim için çok kıymetli</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center lg:items-end space-y-4">
                                        <a
                                            href="/iletisim"
                                            className="group relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl hover:from-blue-800 hover:to-indigo-800 hover:shadow-2xl transition-all duration-300 font-bold text-base lg:text-lg shadow-lg w-full lg:w-auto"
                                        >
                                            <div className="flex items-center justify-center">
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                İletişime Geçin
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </a>

                                        <div className="text-center lg:text-right">
                                            <div className="text-slate-400 text-xs lg:text-sm font-medium mb-1">Hızlı İletişim</div>
                                            <div className="text-slate-600 text-xs lg:text-sm">7/24 Destek</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageErrorBoundary>
    );
}
