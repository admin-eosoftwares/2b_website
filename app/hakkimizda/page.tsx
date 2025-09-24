'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PageErrorBoundary from '../../components/PageErrorBoundary';
import BrandsSlider from '../../components/BrandsSlider';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Hakkimizda() {
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll animasyonları için hook'lar
    const { elementRef: bizKimizRef, isVisible: bizKimizVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: bizKimizContentRef, isVisible: bizKimizContentVisible } = useScrollAnimation({ delay: 100 });
    const { elementRef: timelineRef, isVisible: timelineVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: timelineContentRef, isVisible: timelineContentVisible } = useScrollAnimation({ delay: 150 });
    const { elementRef: vizyonMisyonRef, isVisible: vizyonMisyonVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: vizyonMisyonContentRef, isVisible: vizyonMisyonContentVisible } = useScrollAnimation({ delay: 150 });
    const { elementRef: markalarRef, isVisible: markalarVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: markalarContentRef, isVisible: markalarContentVisible } = useScrollAnimation({ delay: 50 });

    // Timeline kartları için ayrı animasyon hook'ları
    const { elementRef: timeline2003Ref, isVisible: timeline2003Visible } = useScrollAnimation({ delay: 0 });
    const { elementRef: timeline2007Ref, isVisible: timeline2007Visible } = useScrollAnimation({ delay: 100 });
    const { elementRef: timeline2019Ref, isVisible: timeline2019Visible } = useScrollAnimation({ delay: 200 });
    const { elementRef: timeline2024Ref, isVisible: timeline2024Visible } = useScrollAnimation({ delay: 300 });
    const { elementRef: timelineGunumuzRef, isVisible: timelineGunumuzVisible } = useScrollAnimation({ delay: 400 });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    // Handle scroll animation when coming from other pages
    useEffect(() => {
        const scrollToId = sessionStorage.getItem('scrollToId');
        if (scrollToId && isLoaded) {
            // Ensure we start from the very top
            window.scrollTo(0, 0);

            // Wait a moment for the page to be fully rendered
            const timer = setTimeout(() => {
                const element = document.getElementById(scrollToId);
                const header = document.querySelector<HTMLElement>('[data-testid="main-header"]');

                if (element && header) {
                    const headerHeight = header.offsetHeight;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerHeight - 30;

                    // Scroll to target with smooth animation - user will see this
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                }
                // Clear the stored ID after scrolling
                sessionStorage.removeItem('scrollToId');
            }, 500); // Wait for page to be fully rendered

            return () => clearTimeout(timer);
        }
    }, [isLoaded]);


    return (
        <PageErrorBoundary pageName="Hakkımızda">
            <div className="min-h-screen bg-[#f8f8ff] relative">

                <div className="container mx-auto px-4 py-8 pb-32 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Biz Kimiz Section */}
                        <div
                            ref={bizKimizRef}
                            id="biz-kimiz"
                            className={`mb-20 transition-all duration-500 ease-out scroll-mt-24 ${bizKimizVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="text-center mb-16">
                                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                                    Biz Kimiz?
                                </h1>
                                <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
                            </div>

                            <div
                                ref={bizKimizContentRef}
                                className={`transition-all duration-500 ease-out ${bizKimizContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            >
                                {/* Main Company Card */}
                                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 border border-gray-100">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 mr-4">
                                            <Image
                                                src="/2b_logo2.png"
                                                alt="2B Global Enerji Logo"
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                                2B Global Enerji
                                            </h3>
                                            <div className="w-16 h-1 bg-blue-900 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            Yenilenebilir enerji ve elektrik-elektronik sektörlerinde 20 yılı aşkın deneyimimizle,
                                            müşterilerimize güvenilir ve sürdürülebilir çözümler sunan öncü bir şirketiz.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Timeline Section */}
                        <div
                            ref={timelineRef}
                            id="yolculugumuz"
                            className={`mb-32 transition-all duration-500 ease-out scroll-mt-24 ${timelineVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                                    Yolculuğumuz
                                </h2>
                                <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
                            </div>

                            <div
                                ref={timelineContentRef}
                                className={`relative transition-all duration-500 ease-out delay-200 ${timelineContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            >
                                {/* Progressive Timeline Line - Desktop */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 rounded-full">
                                    <div
                                        className={`w-full bg-slate-300 rounded-full transition-all duration-1000 ease-out ${timelineContentVisible ? 'h-full' : 'h-0'
                                            }`}
                                        style={{
                                            transitionDelay: timelineContentVisible ? '300ms' : '0ms'
                                        }}
                                    ></div>
                                </div>

                                {/* Progressive Timeline Line - Mobile */}
                                <div className="md:hidden absolute left-4 w-1 h-full bg-slate-200 rounded-full">
                                    <div
                                        className={`w-full bg-slate-300 rounded-full transition-all duration-1000 ease-out ${timelineContentVisible ? 'h-full' : 'h-0'
                                            }`}
                                        style={{
                                            transitionDelay: timelineContentVisible ? '300ms' : '0ms'
                                        }}
                                    ></div>
                                </div>

                                <div className="space-y-12">
                                    {/* 2003 */}
                                    <div
                                        ref={timeline2003Ref}
                                        className={`relative flex items-center transition-all duration-500 ease-out ${timeline2003Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                    >
                                        {/* Desktop Layout */}
                                        <div className="hidden md:flex flex-1 pr-8 text-right">
                                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-amber-100">
                                                <div className="flex items-center justify-end mb-4">
                                                    <h3 className="text-xl font-bold text-amber-800">2003</h3>
                                                </div>
                                                <h4 className="text-lg font-semibold text-amber-700 mb-3">Kuruluş</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    İstanbul merkezli olarak 2B İnşaat Mühendislik San. Tic. Ltd. Şti. unvanıyla kurulan şirketimiz,
                                                    inşaat malzemeleri toptan satışıyla faaliyetlerine başlamıştır.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Mobile Layout */}
                                        <div className="md:hidden w-full ml-12">
                                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-amber-100">
                                                <div className="flex items-center mb-4">
                                                    <h3 className="text-xl font-bold text-amber-800">2003</h3>
                                                </div>
                                                <h4 className="text-lg font-semibold text-amber-700 mb-3">Kuruluş</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    İstanbul merkezli olarak 2B İnşaat Mühendislik San. Tic. Ltd. Şti. unvanıyla kurulan şirketimiz,
                                                    inşaat malzemeleri toptan satışıyla faaliyetlerine başlamıştır.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Desktop Timeline Dot */}
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-amber-600 rounded-full border-4 border-white shadow-md"></div>
                                        {/* Mobile Timeline Dot */}
                                        <div className="md:hidden absolute left-2 w-5 h-5 bg-amber-600 rounded-full border-4 border-white shadow-md"></div>
                                        <div className="hidden md:flex flex-1 pl-8"></div>
                                    </div>

                                    {/* 2007 */}
                                    <div
                                        ref={timeline2007Ref}
                                        className={`relative flex items-center transition-all duration-500 ease-out ${timeline2007Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                    >
                                        {/* Desktop Layout */}
                                        <div className="hidden md:flex flex-1 pr-8"></div>
                                        {/* Desktop Timeline Dot */}
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                                        {/* Mobile Timeline Dot */}
                                        <div className="md:hidden absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                                        <div className="hidden md:flex flex-1 pl-8">
                                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-blue-100">
                                                <div className="flex items-center mb-4">
                                                    <h3 className="text-xl font-bold text-blue-800">2007</h3>
                                                </div>
                                                <h4 className="text-lg font-semibold text-blue-700 mb-3">Antalya&apos;ya Taşınma</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Şirket merkezi Antalya&apos;ya taşınmış ve Akdeniz Bölgesi&apos;nde pil, elektrik ve elektronik ürünlerinin
                                                    toptan satışına devam etmiştir.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Mobile Layout */}
                                        <div className="md:hidden w-full ml-12">
                                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-blue-100">
                                                <div className="flex items-center mb-4">
                                                    <h3 className="text-xl font-bold text-blue-800">2007</h3>
                                                </div>
                                                <h4 className="text-lg font-semibold text-blue-700 mb-3">Antalya&apos;ya Taşınma</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Şirket merkezi Antalya&apos;ya taşınmış ve Akdeniz Bölgesi&apos;nde pil, elektrik ve elektronik ürünlerinin
                                                    toptan satışına devam etmiştir.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2019 */}
                                    <div
                                        ref={timeline2019Ref}
                                        className={`relative flex items-center transition-all duration-500 ease-out ${timeline2019Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                    >
                                        {/* Desktop Layout */}
                                        <div className="hidden md:flex flex-1 pr-8 text-right">
                                            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-emerald-100">
                                                <div className="flex items-center justify-end mb-4">
                                                    <h3 className="text-xl font-bold text-emerald-800">2019</h3>
                                                </div>
                                                <h4 className="text-lg font-semibold text-emerald-700 mb-3">Enerji Sektörüne Giriş</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Mevcut faaliyetlerimize CW Enerji&apos;nin EPC uygulama ve satış noktası da dahil edilerek,
                                                    şirketimiz yenilenebilir enerji sektöründe faaliyet göstermeye başlamıştır.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Mobile Layout */}
                                        <div className="md:hidden w-full ml-12">
                                            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-emerald-100">
                                                <div className="flex items-center mb-4">
                                                    <h3 className="text-xl font-bold text-emerald-800">2019</h3>
                                                </div>
                                                <h4 className="text-lg font-semibold text-emerald-700 mb-3">Enerji Sektörüne Giriş</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Mevcut faaliyetlerimize CW Enerji&apos;nin EPC uygulama ve satış noktası da dahil edilerek,
                                                    şirketimiz yenilenebilir enerji sektöründe faaliyet göstermeye başlamıştır.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Desktop Timeline Dot */}
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white shadow-md"></div>
                                        {/* Mobile Timeline Dot */}
                                        <div className="md:hidden absolute left-2 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white shadow-md"></div>
                                        <div className="hidden md:flex flex-1 pl-8"></div>
                                    </div>

                                    {/* 2024 */}
                                    <div
                                        ref={timeline2024Ref}
                                        className={`relative flex items-center transition-all duration-500 ease-out ${timeline2024Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                    >
                                        {/* Desktop Layout */}
                                        <div className="hidden md:flex flex-1 pr-8"></div>
                                        {/* Desktop Timeline Dot */}
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-600 rounded-full border-4 border-white shadow-md"></div>
                                        {/* Mobile Timeline Dot */}
                                        <div className="md:hidden absolute left-2 w-5 h-5 bg-purple-600 rounded-full border-4 border-white shadow-md"></div>
                                        <div className="hidden md:flex flex-1 pl-8">
                                            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-purple-100">
                                                <div className="flex items-center mb-4">
                                                    <h3 className="text-xl font-bold text-purple-800">2024</h3>
                                                </div>
                                                <h4 className="text-lg font-semibold text-purple-700 mb-3">&quot;Global Enerji&quot; Dönüşümü</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Yenilenebilir enerji sektöründeki artan faaliyetlerimiz doğrultusunda şirket unvanımız
                                                    2B Global Enerji San. Tic. Ltd. Şti. olarak yenilenmiştir.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Mobile Layout */}
                                        <div className="md:hidden w-full ml-12">
                                            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-purple-100">
                                                <div className="flex items-center mb-4">
                                                    <h3 className="text-xl font-bold text-purple-800">2024</h3>
                                                </div>
                                                <h4 className="text-lg font-semibold text-purple-700 mb-3">&quot;Global Enerji&quot; Dönüşümü</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Yenilenebilir enerji sektöründeki artan faaliyetlerimiz doğrultusunda şirket unvanımız
                                                    2B Global Enerji San. Tic. Ltd. Şti. olarak yenilenmiştir.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Günümüz */}
                                    <div
                                        ref={timelineGunumuzRef}
                                        className={`relative flex items-center transition-all duration-500 ease-out ${timelineGunumuzVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                    >
                                        {/* Desktop Layout */}
                                        <div className="hidden md:flex flex-1 pr-8 text-right">
                                            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-rose-100">
                                                <div className="flex items-center justify-end mb-4">
                                                    <h3 className="text-xl font-bold text-rose-800">Günümüz</h3>
                                                </div>
                                                <h4 className="text-lg font-semibold text-rose-700 mb-3">Sürekli Gelişim</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Akdeniz Bölgesi&apos;nde pil, elektrik ve elektronik ürünlerinin toptan satışı ile birlikte
                                                    fotovoltaik modül, inverter ve batarya ürünlerinin satışı ve uygulaması alanlarında
                                                    faaliyetlerini sürdürmektedir.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Mobile Layout */}
                                        <div className="md:hidden w-full ml-12">
                                            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-rose-100">
                                                <div className="flex items-center mb-4">
                                                    <h3 className="text-xl font-bold text-rose-800">Günümüz</h3>
                                                </div>
                                                <h4 className="text-lg font-semibold text-rose-700 mb-3">Sürekli Gelişim</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Akdeniz Bölgesi&apos;nde pil, elektrik ve elektronik ürünlerinin toptan satışı ile birlikte
                                                    fotovoltaik modül, inverter ve batarya ürünlerinin satışı ve uygulaması alanlarında
                                                    faaliyetlerini sürdürmektedir.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Desktop Timeline Dot */}
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-rose-600 rounded-full border-4 border-white shadow-md"></div>
                                        {/* Mobile Timeline Dot */}
                                        <div className="md:hidden absolute left-2 w-5 h-5 bg-rose-600 rounded-full border-4 border-white shadow-md"></div>
                                        <div className="hidden md:flex flex-1 pl-8"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vizyon & Misyon Section */}
                        <div
                            ref={vizyonMisyonRef}
                            id="vizyon-misyon"
                            className={`mb-32 transition-all duration-500 ease-out scroll-mt-24 ${vizyonMisyonVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                                    Vizyon & Misyon
                                </h2>
                                <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
                            </div>

                            <div
                                ref={vizyonMisyonContentRef}
                                className={`grid lg:grid-cols-2 gap-8 transition-all duration-500 ease-out ${vizyonMisyonContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            >
                                {/* Vizyon Kartı */}
                                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 border border-gray-100">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                                Vizyonumuz
                                            </h3>
                                            <div className="w-16 h-1 bg-blue-900 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            Akdeniz Bölgesi başta olmak üzere Türkiye genelinde yenilenebilir enerji ve elektrik-elektronik sektörlerinde lider ve güvenilir bir çözüm ortağı olmak; sürdürülebilir enerji çözümleriyle geleceğin enerji ihtiyacını karşılayan, teknolojik yenilikleri takip eden ve çevreye duyarlı bir şirket olarak sektöründe öncü konuma gelmek.
                                        </p>
                                    </div>
                                </div>

                                {/* Misyon Kartı */}
                                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 border border-gray-100">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                                Misyonumuz
                                            </h3>
                                            <div className="w-16 h-1 bg-blue-900 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            Müşterilerimize yüksek kalite standartlarında ürünler sunmak; EPC uygulama süreçlerinde etkin, güvenilir ve yenilikçi hizmetler sağlamak. Sektör standartlarını yükselterek çalışanlarımız, müşterilerimiz ve iş ortaklarımız için uzun vadeli değer yaratmak.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Markalarımız Bölümü */}
                        <div
                            ref={markalarRef}
                            className={`mb-32 transition-all duration-500 ease-out ${markalarVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="text-center mb-12">
                                <h2 id="markalarimiz" className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 scroll-mt-24">
                                    Markalarımız
                                </h2>
                                <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
                            </div>

                            <div
                                ref={markalarContentRef}
                                className={`transition-all duration-500 ease-out delay-200 ${markalarContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            >
                                <BrandsSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageErrorBoundary>
    );
}