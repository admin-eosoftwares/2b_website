'use client';

import { useState, useEffect } from 'react';
import PageErrorBoundary from '../../components/PageErrorBoundary';
import BrandsSlider from '../../components/BrandsSlider';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Hakkimizda() {
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll animasyonları için hook'lar
    const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: bizKimizRef, isVisible: bizKimizVisible } = useScrollAnimation({ delay: 200 });
    const { elementRef: bizKimizContentRef, isVisible: bizKimizContentVisible } = useScrollAnimation({ delay: 400 });
    const { elementRef: vizyonMisyonRef, isVisible: vizyonMisyonVisible } = useScrollAnimation({ delay: 200 });
    const { elementRef: vizyonMisyonContentRef, isVisible: vizyonMisyonContentVisible } = useScrollAnimation({ delay: 400 });
    const { elementRef: markalarRef, isVisible: markalarVisible } = useScrollAnimation({ delay: 200 });

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
            <div className="min-h-screen bg-[#f8f8ff]">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-6xl mx-auto">
                        <h1
                            ref={titleRef}
                            className={`text-4xl font-bold text-blue-900 mb-12 text-center transition-all duration-700 ease-out ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            Hakkımızda
                        </h1>

                        <h2
                            ref={bizKimizRef}
                            id="biz-kimiz"
                            className={`text-2xl font-semibold text-blue-900 mb-6 text-left transition-all duration-500 ease-out scroll-mt-24 ${bizKimizVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        >
                            Biz kimiz?
                        </h2>

                        <div
                            ref={bizKimizContentRef}
                            className={`bg-white rounded-lg shadow-lg p-8 mb-16 transition-all duration-500 ease-out ${bizKimizContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        >
                            <h3 className="text-xl font-medium text-gray-800 mb-4">
                                2B Global Enerji
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                2003 yılında İstanbul merkezli olarak 2B İnşaat Mühendislik San. Tic. Ltd. Şti. unvanıyla kurulan şirketimiz, inşaat malzemeleri toptan satışıyla faaliyetlerine başlamıştır.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                2007 yılında şirket merkezi Antalya'ya taşınmış ve Akdeniz Bölgesi'nde pil, elektrik ve elektronik ürünlerinin toptan satışına devam etmiştir.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                2021 yılında mevcut faaliyetlerimize CW Enerji'nin EPC uygulama ve satış noktası da dahil edilerek, şirketimiz yenilenebilir enerji sektöründe faaliyet göstermeye başlamıştır.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                2024 yılında, yenilenebilir enerji sektöründeki artan faaliyetlerimiz doğrultusunda şirket unvanımız 2B Global Enerji San. Tic. Ltd. Şti. olarak yenilenmiştir.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Günümüzde işletmemiz, Akdeniz Bölgesi'nde pil, elektrik ve elektronik ürünlerinin toptan satışı ile birlikte fotovoltaik modül, inverter ve batarya ürünlerinin satışı ve uygulaması alanlarında faaliyetlerini sürdürmektedir.
                            </p>
                        </div>

                        <h2
                            ref={vizyonMisyonRef}
                            id="vizyon-misyon"
                            className={`text-2xl font-semibold text-blue-900 mb-6 text-left transition-all duration-500 ease-out scroll-mt-24 ${vizyonMisyonVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        >
                            Vizyon & Misyon
                        </h2>

                        <div
                            ref={vizyonMisyonContentRef}
                            className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-500 ease-out ${vizyonMisyonContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        >
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                                    Vizyonumuz
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Akdeniz Bölgesi başta olmak üzere Türkiye genelinde yenilenebilir enerji ve elektrik-elektronik sektörlerinde lider ve güvenilir bir çözüm ortağı olmak; sürdürülebilir enerji çözümleriyle geleceğin enerji ihtiyacını karşılayan, teknolojik yenilikleri takip eden ve çevreye duyarlı bir şirket olarak sektöründe öncü konuma gelmek.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                                    Misyonumuz
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Müşterilerimize yüksek kalite standartlarında ürünler sunmak; EPC uygulama süreçlerinde etkin, güvenilir ve yenilikçi hizmetler sağlamak. Sektör standartlarını yükselterek çalışanlarımız, müşterilerimiz ve iş ortaklarımız için uzun vadeli değer yaratmak.
                                </p>
                            </div>
                        </div>

                        {/* Markalarımız Bölümü */}
                        <div
                            ref={markalarRef}
                            className={`mb-16 transition-all duration-500 ease-out ${markalarVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        >
                            <h2 id="markalarimiz" className="text-2xl font-semibold text-blue-900 mb-6 text-left scroll-mt-24">
                                Markalarımız
                            </h2>
                            <BrandsSlider />
                        </div>
                    </div>
                </div>
            </div>
        </PageErrorBoundary>
    );
}
