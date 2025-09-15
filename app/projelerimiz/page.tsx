'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import PageErrorBoundary from '../../components/PageErrorBoundary';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Projelerimiz() {
    // Fotoğraf slider için state'ler
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // İkinci proje için state'ler
    const [secondProjectImageIndex, setSecondProjectImageIndex] = useState(0);
    const [isSecondProjectAutoPlay, setIsSecondProjectAutoPlay] = useState(true);

    // Üçüncü proje için state'ler
    const [thirdProjectImageIndex, setThirdProjectImageIndex] = useState(0);
    const [isThirdProjectAutoPlay, setIsThirdProjectAutoPlay] = useState(true);

    // Dördüncü proje için state'ler
    const [fourthProjectImageIndex, setFourthProjectImageIndex] = useState(0);
    const [isFourthProjectAutoPlay, setIsFourthProjectAutoPlay] = useState(true);

    // Beşinci proje için state'ler
    const [fifthProjectImageIndex, setFifthProjectImageIndex] = useState(0);
    const [isFifthProjectAutoPlay, setIsFifthProjectAutoPlay] = useState(true);

    // Scroll animasyonları için hook'lar
    const { elementRef: realProjectRef, isVisible: realProjectVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: secondProjectRef, isVisible: secondProjectVisible } = useScrollAnimation({ delay: 200 });
    const { elementRef: thirdProjectRef, isVisible: thirdProjectVisible } = useScrollAnimation({ delay: 400 });
    const { elementRef: fourthProjectRef, isVisible: fourthProjectVisible } = useScrollAnimation({ delay: 600 });
    const { elementRef: fifthProjectRef, isVisible: fifthProjectVisible } = useScrollAnimation({ delay: 800 });
    const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ delay: 0 });

    // Gerçek proje verisi
    const realProject = {
        title: "Otel GES Kurulumu",
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

    // İkinci proje verisi
    const secondProject = {
        title: "Petrol İstasyonu GES Kurulumu",
        description: "Endüstriyel tesis çatısına kurulan 150 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/petrolofisi_ges1.jpg",
            "/petrolofisi_ges2.jpg"
        ],
        details: {
            capacity: "150 kWp",
            panels: "64 adet",
            annualProduction: "225 MWh",
            completionYear: "2024",
            location: "Tavas / Denizli"
        }
    };

    // Üçüncü proje verisi
    const thirdProject = {
        title: "Otel GES Projesi 2",
        description: "Modern otel çatısına kurulan 180 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/otel2_ges1.jpg",
            "/otel2_ges2.jpg"
        ],
        details: {
            capacity: "180 kWp",
            panels: "450 adet",
            annualProduction: "270 MWh",
            completionYear: "2024",
            location: "Kemer / Antalya"
        }
    };

    // Dördüncü proje verisi
    const fourthProject = {
        title: "Villa GES Kurulumu 1",
        description: "Lüks villa çatısına kurulan 25 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa1_ges1.jpg",
            "/villa1_ges2.jpg"
        ],
        details: {
            capacity: "25 kWp",
            panels: "62 adet",
            annualProduction: "37.5 MWh",
            completionYear: "2024",
            location: "Döşemealtı / Antalya"
        }
    };

    // Beşinci proje verisi
    const fifthProject = {
        title: "Villa GES Kurulumu 2",
        description: "Modern villa çatısına kurulan 30 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa2_ges1.jpg",
            "/villa2_ges2.jpg",
            "/villa2_ges3.jpg"
        ],
        details: {
            capacity: "30 kWp",
            panels: "75 adet",
            annualProduction: "45 MWh",
            completionYear: "2024",
            location: "Döşemealtı / Antalya"
        }
    };

    // Fotoğraf slider fonksiyonları
    const [, setSlideDirection] = useState<'left' | 'right'>('right');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextImage = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setSlideDirection('right');
        setCurrentImageIndex((prev) => (prev + 1) % realProject.images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning, realProject.images.length]);

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

    // İkinci proje için fonksiyonlar
    const [, setSecondSlideDirection] = useState<'left' | 'right'>('right');
    const [isSecondTransitioning, setIsSecondTransitioning] = useState(false);

    const nextSecondImage = useCallback(() => {
        if (isSecondTransitioning) return;
        setIsSecondTransitioning(true);
        setSecondSlideDirection('right');
        setSecondProjectImageIndex((prev) => (prev + 1) % secondProject.images.length);
        setTimeout(() => setIsSecondTransitioning(false), 500);
    }, [isSecondTransitioning, secondProject.images.length]);

    const prevSecondImage = () => {
        if (isSecondTransitioning) return;
        setIsSecondTransitioning(true);
        setSecondSlideDirection('left');
        setSecondProjectImageIndex((prev) => (prev - 1 + secondProject.images.length) % secondProject.images.length);
        setTimeout(() => setIsSecondTransitioning(false), 500);
    };

    const goToSecondImage = (index: number) => {
        if (isSecondTransitioning || index === secondProjectImageIndex) return;
        setIsSecondTransitioning(true);
        if (index > secondProjectImageIndex) {
            setSecondSlideDirection('right');
        } else if (index < secondProjectImageIndex) {
            setSecondSlideDirection('left');
        }
        setSecondProjectImageIndex(index);
        setTimeout(() => setIsSecondTransitioning(false), 500);
    };

    // Üçüncü proje için fonksiyonlar
    const [, setThirdSlideDirection] = useState<'left' | 'right'>('right');
    const [isThirdTransitioning, setIsThirdTransitioning] = useState(false);

    const nextThirdImage = useCallback(() => {
        if (isThirdTransitioning) return;
        setIsThirdTransitioning(true);
        setThirdSlideDirection('right');
        setThirdProjectImageIndex((prev) => (prev + 1) % thirdProject.images.length);
        setTimeout(() => setIsThirdTransitioning(false), 500);
    }, [isThirdTransitioning, thirdProject.images.length]);

    const prevThirdImage = () => {
        if (isThirdTransitioning) return;
        setIsThirdTransitioning(true);
        setThirdSlideDirection('left');
        setThirdProjectImageIndex((prev) => (prev - 1 + thirdProject.images.length) % thirdProject.images.length);
        setTimeout(() => setIsThirdTransitioning(false), 500);
    };

    const goToThirdImage = (index: number) => {
        if (isThirdTransitioning || index === thirdProjectImageIndex) return;
        setIsThirdTransitioning(true);
        if (index > thirdProjectImageIndex) {
            setThirdSlideDirection('right');
        } else if (index < thirdProjectImageIndex) {
            setThirdSlideDirection('left');
        }
        setThirdProjectImageIndex(index);
        setTimeout(() => setIsThirdTransitioning(false), 500);
    };

    // Dördüncü proje için fonksiyonlar
    const [, setFourthSlideDirection] = useState<'left' | 'right'>('right');
    const [isFourthTransitioning, setIsFourthTransitioning] = useState(false);

    const nextFourthImage = useCallback(() => {
        if (isFourthTransitioning) return;
        setIsFourthTransitioning(true);
        setFourthSlideDirection('right');
        setFourthProjectImageIndex((prev) => (prev + 1) % fourthProject.images.length);
        setTimeout(() => setIsFourthTransitioning(false), 500);
    }, [isFourthTransitioning, fourthProject.images.length]);

    const prevFourthImage = () => {
        if (isFourthTransitioning) return;
        setIsFourthTransitioning(true);
        setFourthSlideDirection('left');
        setFourthProjectImageIndex((prev) => (prev - 1 + fourthProject.images.length) % fourthProject.images.length);
        setTimeout(() => setIsFourthTransitioning(false), 500);
    };

    const goToFourthImage = (index: number) => {
        if (isFourthTransitioning || index === fourthProjectImageIndex) return;
        setIsFourthTransitioning(true);
        if (index > fourthProjectImageIndex) {
            setFourthSlideDirection('right');
        } else if (index < fourthProjectImageIndex) {
            setFourthSlideDirection('left');
        }
        setFourthProjectImageIndex(index);
        setTimeout(() => setIsFourthTransitioning(false), 500);
    };

    // Beşinci proje için fonksiyonlar
    const [, setFifthSlideDirection] = useState<'left' | 'right'>('right');
    const [isFifthTransitioning, setIsFifthTransitioning] = useState(false);

    const nextFifthImage = useCallback(() => {
        if (isFifthTransitioning) return;
        setIsFifthTransitioning(true);
        setFifthSlideDirection('right');
        setFifthProjectImageIndex((prev) => (prev + 1) % fifthProject.images.length);
        setTimeout(() => setIsFifthTransitioning(false), 500);
    }, [isFifthTransitioning, fifthProject.images.length]);

    const prevFifthImage = () => {
        if (isFifthTransitioning) return;
        setIsFifthTransitioning(true);
        setFifthSlideDirection('left');
        setFifthProjectImageIndex((prev) => (prev - 1 + fifthProject.images.length) % fifthProject.images.length);
        setTimeout(() => setIsFifthTransitioning(false), 500);
    };

    const goToFifthImage = (index: number) => {
        if (isFifthTransitioning || index === fifthProjectImageIndex) return;
        setIsFifthTransitioning(true);
        if (index > fifthProjectImageIndex) {
            setFifthSlideDirection('right');
        } else if (index < fifthProjectImageIndex) {
            setFifthSlideDirection('left');
        }
        setFifthProjectImageIndex(index);
        setTimeout(() => setIsFifthTransitioning(false), 500);
    };


    // Otomatik oynatma
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            nextImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay, nextImage]);

    // İkinci proje için otomatik oynatma
    useEffect(() => {
        if (!isSecondProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextSecondImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isSecondProjectAutoPlay, nextSecondImage]);

    // Üçüncü proje için otomatik oynatma
    useEffect(() => {
        if (!isThirdProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextThirdImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isThirdProjectAutoPlay, nextThirdImage]);

    // Dördüncü proje için otomatik oynatma
    useEffect(() => {
        if (!isFourthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextFourthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isFourthProjectAutoPlay, nextFourthImage]);

    // Beşinci proje için otomatik oynatma
    useEffect(() => {
        if (!isFifthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextFifthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isFifthProjectAutoPlay, nextFifthImage]);


    return (
        <PageErrorBoundary pageName="Projelerimiz">
            {/* Structured Data - JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "2B Global Enerji Projeleri",
                        "description": "2B Global Enerji tarafından gerçekleştirilen başarılı güneş enerjisi projeleri",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "item": {
                                    "@type": "Project",
                                    "name": "Kairos Valley Otel Güneş Enerjisi Sistemi",
                                    "description": "Otel çatısına kurulan 200 kWp kapasiteli güneş enerjisi sistemi",
                                    "url": "https://2bltd.com.tr/projelerimiz",
                                    "image": [
                                        "https://2bltd.com.tr/kairos-valley-ges.jpg",
                                        "https://2bltd.com.tr/kairos-valley-ges2.jpg"
                                    ],
                                    "location": {
                                        "@type": "Place",
                                        "name": "Kairos Valley Otel",
                                        "address": {
                                            "@type": "PostalAddress",
                                            "addressLocality": "Datça",
                                            "addressRegion": "Muğla",
                                            "addressCountry": "TR"
                                        }
                                    },
                                    "provider": {
                                        "@type": "Organization",
                                        "name": "2B Global Enerji",
                                        "url": "https://2bltd.com.tr"
                                    },
                                    "dateCompleted": "2024",
                                    "additionalProperty": [
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Kapasite",
                                            "value": "200 kWp"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Panel Sayısı",
                                            "value": "500 adet"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Yıllık Üretim",
                                            "value": "300 MWh"
                                        }
                                    ]
                                }
                            }
                        ]
                    })
                }}
            />

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
                            className={`mb-8 transition-all duration-500 ease-out scroll-mt-24 ${realProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
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

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${realProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
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
                                    <div className="flex flex-col justify-start lg:h-96">
                                        <div className="mb-6 min-h-[140px]">
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
                                                <span className="text-blue-700 font-medium">{realProject.details.location}</span>
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

                        {/* İkinci Proje Kartı */}
                        <div
                            ref={secondProjectRef}
                            className={`mb-8 transition-all duration-500 ease-out scroll-mt-24 ${secondProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-6">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative h-80 lg:h-96 bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {secondProject.images.map((image, index) => {
                                                    const isActive = index === secondProjectImageIndex;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${secondProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
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
                                                onClick={prevSecondImage}
                                                onMouseEnter={() => setIsSecondProjectAutoPlay(false)}
                                                onMouseLeave={() => setIsSecondProjectAutoPlay(true)}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextSecondImage}
                                                onMouseEnter={() => setIsSecondProjectAutoPlay(false)}
                                                onMouseLeave={() => setIsSecondProjectAutoPlay(true)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            {/* Slider Dots */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                {secondProject.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => goToSecondImage(index)}
                                                        onMouseEnter={() => setIsSecondProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsSecondProjectAutoPlay(true)}
                                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === secondProjectImageIndex
                                                            ? 'bg-white shadow-lg scale-125'
                                                            : 'bg-white/60 hover:bg-white/80'
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Play/Pause Button */}
                                            <button
                                                onClick={() => setIsSecondProjectAutoPlay(!isSecondProjectAutoPlay)}
                                                className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                            >
                                                {isSecondProjectAutoPlay ? (
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
                                    <div className="flex flex-col justify-start lg:h-96">
                                        <div className="mb-6 min-h-[140px]">
                                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {secondProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{secondProject.details.location}</span>
                                            </div>

                                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                                {secondProject.description}
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
                                                <p className="text-blue-700 font-bold">{secondProject.details.capacity}</p>
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
                                                <p className="text-green-700 font-bold">{secondProject.details.panels}</p>
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
                                                <p className="text-purple-700 font-bold">{secondProject.details.annualProduction}</p>
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
                                                <p className="text-orange-700 font-bold">{secondProject.details.completionYear}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Üçüncü Proje Kartı */}
                        <div
                            ref={thirdProjectRef}
                            className={`mb-8 transition-all duration-500 ease-out scroll-mt-24 ${thirdProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-6">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative h-80 lg:h-96 bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {thirdProject.images.map((image, index) => {
                                                    const isActive = index === thirdProjectImageIndex;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${thirdProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
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
                                                onClick={prevThirdImage}
                                                onMouseEnter={() => setIsThirdProjectAutoPlay(false)}
                                                onMouseLeave={() => setIsThirdProjectAutoPlay(true)}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextThirdImage}
                                                onMouseEnter={() => setIsThirdProjectAutoPlay(false)}
                                                onMouseLeave={() => setIsThirdProjectAutoPlay(true)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            {/* Slider Dots */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                {thirdProject.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => goToThirdImage(index)}
                                                        onMouseEnter={() => setIsThirdProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsThirdProjectAutoPlay(true)}
                                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === thirdProjectImageIndex
                                                            ? 'bg-white shadow-lg scale-125'
                                                            : 'bg-white/60 hover:bg-white/80'
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Play/Pause Button */}
                                            <button
                                                onClick={() => setIsThirdProjectAutoPlay(!isThirdProjectAutoPlay)}
                                                className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                            >
                                                {isThirdProjectAutoPlay ? (
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
                                    <div className="flex flex-col justify-start lg:h-96">
                                        <div className="mb-6 min-h-[140px]">
                                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {thirdProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{thirdProject.details.location}</span>
                                            </div>

                                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                                {thirdProject.description}
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
                                                <p className="text-blue-700 font-bold">{thirdProject.details.capacity}</p>
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
                                                <p className="text-green-700 font-bold">{thirdProject.details.panels}</p>
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
                                                <p className="text-purple-700 font-bold">{thirdProject.details.annualProduction}</p>
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
                                                <p className="text-orange-700 font-bold">{thirdProject.details.completionYear}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dördüncü Proje Kartı */}
                        <div
                            ref={fourthProjectRef}
                            className={`mb-8 transition-all duration-500 ease-out scroll-mt-24 ${fourthProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-6">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative h-80 lg:h-96 bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {fourthProject.images.map((image, index) => {
                                                    const isActive = index === fourthProjectImageIndex;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${fourthProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
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
                                                onClick={prevFourthImage}
                                                onMouseEnter={() => setIsFourthProjectAutoPlay(false)}
                                                onMouseLeave={() => setIsFourthProjectAutoPlay(true)}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextFourthImage}
                                                onMouseEnter={() => setIsFourthProjectAutoPlay(false)}
                                                onMouseLeave={() => setIsFourthProjectAutoPlay(true)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            {/* Slider Dots */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                {fourthProject.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => goToFourthImage(index)}
                                                        onMouseEnter={() => setIsFourthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsFourthProjectAutoPlay(true)}
                                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === fourthProjectImageIndex
                                                            ? 'bg-white shadow-lg scale-125'
                                                            : 'bg-white/60 hover:bg-white/80'
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Play/Pause Button */}
                                            <button
                                                onClick={() => setIsFourthProjectAutoPlay(!isFourthProjectAutoPlay)}
                                                className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                            >
                                                {isFourthProjectAutoPlay ? (
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
                                    <div className="flex flex-col justify-start lg:h-96">
                                        <div className="mb-6 min-h-[140px]">
                                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {fourthProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{fourthProject.details.location}</span>
                                            </div>

                                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                                {fourthProject.description}
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
                                                <p className="text-blue-700 font-bold">{fourthProject.details.capacity}</p>
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
                                                <p className="text-green-700 font-bold">{fourthProject.details.panels}</p>
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
                                                <p className="text-purple-700 font-bold">{fourthProject.details.annualProduction}</p>
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
                                                <p className="text-orange-700 font-bold">{fourthProject.details.completionYear}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Beşinci Proje Kartı */}
                        <div
                            ref={fifthProjectRef}
                            className={`mb-8 transition-all duration-500 ease-out scroll-mt-24 ${fifthProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-6">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative h-80 lg:h-96 bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {fifthProject.images.map((image, index) => {
                                                    const isActive = index === fifthProjectImageIndex;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${fifthProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
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
                                                onClick={prevFifthImage}
                                                onMouseEnter={() => setIsFifthProjectAutoPlay(false)}
                                                onMouseLeave={() => setIsFifthProjectAutoPlay(true)}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextFifthImage}
                                                onMouseEnter={() => setIsFifthProjectAutoPlay(false)}
                                                onMouseLeave={() => setIsFifthProjectAutoPlay(true)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            {/* Slider Dots */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                {fifthProject.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => goToFifthImage(index)}
                                                        onMouseEnter={() => setIsFifthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsFifthProjectAutoPlay(true)}
                                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === fifthProjectImageIndex
                                                            ? 'bg-white shadow-lg scale-125'
                                                            : 'bg-white/60 hover:bg-white/80'
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Play/Pause Button */}
                                            <button
                                                onClick={() => setIsFifthProjectAutoPlay(!isFifthProjectAutoPlay)}
                                                className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                            >
                                                {isFifthProjectAutoPlay ? (
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
                                    <div className="flex flex-col justify-start lg:h-96">
                                        <div className="mb-6 min-h-[140px]">
                                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {fifthProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{fifthProject.details.location}</span>
                                            </div>

                                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                                {fifthProject.description}
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
                                                <p className="text-blue-700 font-bold">{fifthProject.details.capacity}</p>
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
                                                <p className="text-green-700 font-bold">{fifthProject.details.panels}</p>
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
                                                <p className="text-purple-700 font-bold">{fifthProject.details.annualProduction}</p>
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
                                                <p className="text-orange-700 font-bold">{fifthProject.details.completionYear}</p>
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
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center lg:items-end space-y-4">
                                        <a
                                            href="/iletisim"
                                            className="group relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl hover:from-blue-800 hover:to-indigo-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-base lg:text-lg shadow-lg w-full lg:w-auto"
                                        >
                                            <div className="flex items-center justify-center">
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                İletişime Geçin
                                            </div>
                                        </a>

                                        <div className="text-center lg:text-right">
                                            <div className="text-slate-400 text-xs lg:text-sm font-medium mb-1">Hızlı İletişim</div>
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
