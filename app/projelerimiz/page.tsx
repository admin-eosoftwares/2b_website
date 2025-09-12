'use client';

import { useState, useEffect } from 'react';
import PageErrorBoundary from '../../components/PageErrorBoundary';
import SafeComponent, { SafeComponentFallbacks } from '../../components/SafeComponent';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Projelerimiz() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState<any[]>([]);

    // Fotoğraf slider için state'ler
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Scroll animasyonları için hook'lar
    const { elementRef: projelerimizRef, isVisible: projelerimizVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: projelerimizContentRef, isVisible: projelerimizContentVisible } = useScrollAnimation({ delay: 100 });
    const { elementRef: realProjectRef, isVisible: realProjectVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: projelerRef, isVisible: projelerVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: projelerContentRef, isVisible: projelerContentVisible } = useScrollAnimation({ delay: 150 });
    const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ delay: 0 });

    // Proje kartları için ayrı animasyon hook'ları
    const { elementRef: proje1Ref, isVisible: proje1Visible } = useScrollAnimation({ delay: 0 });
    const { elementRef: proje2Ref, isVisible: proje2Visible } = useScrollAnimation({ delay: 100 });
    const { elementRef: proje3Ref, isVisible: proje3Visible } = useScrollAnimation({ delay: 200 });
    const { elementRef: proje4Ref, isVisible: proje4Visible } = useScrollAnimation({ delay: 300 });
    const { elementRef: proje5Ref, isVisible: proje5Visible } = useScrollAnimation({ delay: 400 });

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
    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % realProject.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + realProject.images.length) % realProject.images.length);
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
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
            // Simulate fetching data - wind energy section removed
            setProjects([
                {
                    id: 1,
                    title: 'Güneş Enerjisi Projeleri',
                    description: 'Büyük ölçekli güneş enerjisi santralleri ve çatı kurulumları',
                    icon: '☀️',
                    color: 'from-yellow-50 to-orange-50',
                    borderColor: 'border-yellow-200',
                    iconBg: 'from-yellow-500 to-orange-600'
                },
                {
                    id: 2,
                    title: 'Enerji Depolama Çözümleri',
                    description: 'Batarya sistemleri ve enerji yönetim çözümleri',
                    icon: '🔋',
                    color: 'from-green-50 to-emerald-50',
                    borderColor: 'border-green-200',
                    iconBg: 'from-green-500 to-emerald-600'
                },
                {
                    id: 3,
                    title: 'Endüstriyel Enerji Projeleri',
                    description: 'Fabrika ve üretim tesislerinde enerji verimliliği',
                    icon: '🏭',
                    color: 'from-blue-50 to-cyan-50',
                    borderColor: 'border-blue-200',
                    iconBg: 'from-blue-500 to-cyan-600'
                },
                {
                    id: 4,
                    title: 'Konut Enerji Sistemleri',
                    description: 'Ev ve rezidans projelerinde yenilenebilir enerji',
                    icon: '🏠',
                    color: 'from-purple-50 to-violet-50',
                    borderColor: 'border-purple-200',
                    iconBg: 'from-purple-500 to-violet-600'
                },
                {
                    id: 5,
                    title: 'Ticari Bina Projeleri',
                    description: 'Ofis ve ticari binalarda enerji yönetim sistemleri',
                    icon: '🏢',
                    color: 'from-rose-50 to-pink-50',
                    borderColor: 'border-rose-200',
                    iconBg: 'from-rose-500 to-pink-600'
                },
            ]);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PageErrorBoundary pageName="Projelerimiz">
            <div className="min-h-screen bg-[#f8f8ff] relative">
                <div className="container mx-auto px-4 py-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Projelerimiz Section */}
                        <div
                            ref={projelerimizRef}
                            className={`mb-20 transition-all duration-500 ease-out scroll-mt-24 ${projelerimizVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="text-center mb-12">
                                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                                    Projelerimiz
                                </h1>
                                <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
                            </div>

                            <div
                                ref={projelerimizContentRef}
                                className={`transition-all duration-500 ease-out ${projelerimizContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            >
                                {/* Main Company Card */}
                                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 border border-gray-100 mb-12">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-blue-900 mb-2">
                                                Gerçekleştirdiğimiz Projeler
                                            </h2>
                                            <div className="w-16 h-1 bg-blue-900 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            Yılların deneyimi ve kaliteli hizmet anlayışımızla, birçok önemli enerji projesinde
                                            başarıyla hizmet vermiş bulunmaktayız. Müşteri memnuniyetini ön planda tutarak
                                            gerçekleştirdiğimiz projelerimiz:
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gerçek Proje Kartı */}
                        <div
                            ref={realProjectRef}
                            className={`mb-20 transition-all duration-500 ease-out scroll-mt-24 ${realProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-6">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative h-80 lg:h-96 bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full">
                                                {realProject.images.map((image, index) => (
                                                    <div
                                                        key={index}
                                                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentImageIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                                                            }`}
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
                                                ))}
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

                        {/* Projeler Grid Section */}
                        <div
                            ref={projelerRef}
                            className={`mb-32 transition-all duration-500 ease-out scroll-mt-24 ${projelerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <SafeComponent
                                componentName="ProjectsList"
                                fallback={SafeComponentFallbacks.ProjectCard}
                            >
                                <div
                                    ref={projelerContentRef}
                                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-out ${projelerContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                >
                                    {projects.map((project, index) => {
                                        const refs = [proje1Ref, proje2Ref, proje3Ref, proje4Ref, proje5Ref];
                                        const visibility = [proje1Visible, proje2Visible, proje3Visible, proje4Visible, proje5Visible];

                                        return (
                                            <div
                                                key={project.id}
                                                ref={refs[index]}
                                                className={`transition-all duration-500 ease-out ${visibility[index] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                            >
                                                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-400 cursor-pointer border border-gray-100 h-[320px] flex flex-col justify-between overflow-hidden">
                                                    {/* Decorative Elements */}
                                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.iconBg} opacity-10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500`}></div>
                                                    <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br ${project.iconBg} opacity-5 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500`}></div>

                                                    <div className="relative z-10">
                                                        {/* Modern Icon Design */}
                                                        <div className="relative mb-6">
                                                            <div className={`w-20 h-20 bg-gradient-to-br ${project.iconBg} rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-400 shadow-lg`}>
                                                                <span className="text-3xl">{project.icon}</span>
                                                            </div>
                                                            <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${project.iconBg} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                                        </div>

                                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    <div className="relative z-10">
                                                        <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl p-4 group-hover:bg-white/80 transition-all duration-300">
                                                            <span className="text-gray-800 font-semibold text-sm">
                                                                Detayları İncele
                                                            </span>
                                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </SafeComponent>
                        </div>

                        {/* CTA Section */}
                        <div
                            ref={ctaRef}
                            className={`transition-all duration-500 ease-out ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center shadow-sm border border-blue-100 hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                            Projelerinizde Güvenilir Çözüm Ortağınız
                                        </h3>
                                        <div className="w-16 h-1 bg-blue-900 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-6 mb-6">
                                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                        Deneyimli ekibimiz ve kaliteli hizmet anlayışımızla,
                                        enerji projelerinizde yanınızdayız.
                                    </p>
                                    <a
                                        href="/iletisim"
                                        className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
                                    >
                                        İletişime Geçin
                                    </a>
                                </div>
                                <div className="flex items-center justify-center text-blue-700">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span className="text-sm font-medium">Fikirleriniz ve projeleriniz bizler için çok kıymetli</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageErrorBoundary>
    );
}
