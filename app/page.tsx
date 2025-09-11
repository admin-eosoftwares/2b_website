'use client';

import { useState, useEffect, useRef } from 'react';
import PageErrorBoundary from '../components/PageErrorBoundary';
import BrandsSlider from '../components/BrandsSlider';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Scroll animasyonları için hook'lar
  const { elementRef: card1Ref, isVisible: card1Visible } = useScrollAnimation({ delay: 0 });
  const { elementRef: card2Ref, isVisible: card2Visible } = useScrollAnimation({ delay: 200 });
  const { elementRef: card3Ref, isVisible: card3Visible } = useScrollAnimation({ delay: 400 });
  const { elementRef: card4Ref, isVisible: card4Visible } = useScrollAnimation({ delay: 600 });
  const { elementRef: brandsRef, isVisible: brandsVisible } = useScrollAnimation({ delay: 800 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Ekran boyutunu kontrol et
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    // İlk yüklemede kontrol et
    checkScreenSize();

    // Ekran boyutu değişikliklerini dinle
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);



  return (
    <PageErrorBoundary pageName="Ana Sayfa">
      <div className="min-h-screen bg-[#f8f8ff]">

        {/* Video Bölümü */}
        <div className="w-full mb-8">
          <div className="relative w-full flex justify-center">
            <div className="relative">
              {!isMobile ? (
                <video
                  className="max-w-full h-auto object-contain"
                  src="/2b_website_gesvideo.mp4"
                  autoPlay
                  muted
                  playsInline
                  controls={false}
                  preload="auto"
                  style={{ minHeight: '200px', backgroundColor: '#f0f0f0' }}
                  suppressHydrationWarning={true}
                >
                  <p>Tarayıcınız video oynatmayı desteklemiyor.</p>
                </video>
              ) : (
                <video
                  className="max-w-full h-auto object-contain"
                  src="/2b_website_gesvideomobil.mp4"
                  autoPlay
                  muted
                  playsInline
                  controls={false}
                  preload="auto"
                  style={{ minHeight: '200px', backgroundColor: '#f0f0f0' }}
                  suppressHydrationWarning={true}
                >
                  <p>Tarayıcınız video oynatmayı desteklemiyor.</p>
                </video>
              )}
            </div>
          </div>
        </div>

        {/* Modern Kartlar - Alt alta düzen */}
        <div className="w-full py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-none mx-auto space-y-12 sm:space-y-16 lg:space-y-20">

              {/* Kaliteli Hizmet Kartı */}
              <div
                ref={card1Ref}
                className={`flex flex-col lg:flex-row items-center transition-all duration-500 ease-out ${card1Visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              >
                <div className="w-full sm:w-80 lg:w-64 flex-shrink-0">
                  <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100 shadow-xl h-full min-h-[120px] sm:min-h-[140px] lg:min-h-[320px] flex flex-col justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      {/* Mobil: Yatay düzen, Desktop: Dikey düzen */}
                      <div className="flex items-center lg:flex-col lg:items-center lg:text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 lg:mr-0 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1 lg:flex-none">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-900 mb-1 lg:mb-4 group-hover:text-indigo-800 transition-colors duration-300">
                            Kaliteli Hizmet
                          </h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 hidden lg:block">
                            En yüksek kalite standartlarında hizmet sunuyoruz.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[calc(100%-416px)]">
                  <div className="bg-white rounded-r-2xl lg:rounded-l-none rounded-2xl p-8 shadow-lg border border-gray-100 min-h-[200px] flex flex-col justify-center">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Kalite Standartlarımız</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      ISO 9001:2015 kalite yönetim sistemi ile çalışıyoruz. Tüm ürünlerimiz uluslararası standartlarda test edilir ve sertifikalandırılır. Müşteri memnuniyeti bizim önceliğimizdir.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Uluslararası kalite sertifikaları
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        7/24 teknik destek hizmeti
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Garanti ve bakım hizmetleri
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Güvenilir Çözümler Kartı */}
              <div
                ref={card2Ref}
                className={`flex flex-col lg:flex-row-reverse items-center transition-all duration-500 ease-out ${card2Visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              >
                <div className="w-full sm:w-80 lg:w-64 flex-shrink-0">
                  <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-emerald-100 shadow-xl h-full min-h-[120px] sm:min-h-[140px] lg:min-h-[320px] flex flex-col justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      {/* Mobil: Yatay düzen, Desktop: Dikey düzen */}
                      <div className="flex items-center lg:flex-col lg:items-center lg:text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 lg:mr-0 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <div className="flex-1 lg:flex-none">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-900 mb-1 lg:mb-4 group-hover:text-teal-800 transition-colors duration-300">
                            Güvenilir Çözümler
                          </h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 hidden lg:block">
                            Müşterilerimize güvenilir enerji çözümleri sağlıyoruz.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[calc(100%-416px)]">
                  <div className="bg-white rounded-l-2xl lg:rounded-r-none rounded-2xl p-8 shadow-lg border border-gray-100 min-h-[200px] flex flex-col justify-center">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Güvenilirlik Garantisi</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Enerji sektöründe 20+ yıllık deneyimimizle, müşterilerimize en güvenilir çözümleri sunuyoruz. Tüm projelerimiz detaylı analiz ve test süreçlerinden geçer.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-emerald-800 mb-2">Proje Yönetimi</h5>
                        <p className="text-sm text-gray-600">Profesyonel proje yönetimi ile zamanında teslimat</p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-emerald-800 mb-2">Kalite Kontrol</h5>
                        <p className="text-sm text-gray-600">Her aşamada kalite kontrol ve test süreçleri</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deneyimli Ekip Kartı */}
              <div
                ref={card3Ref}
                className={`flex flex-col lg:flex-row items-center transition-all duration-500 ease-out ${card3Visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              >
                <div className="w-full sm:w-80 lg:w-64 flex-shrink-0">
                  <div className="group relative bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-100 shadow-xl h-full min-h-[120px] sm:min-h-[140px] lg:min-h-[320px] flex flex-col justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      {/* Mobil: Yatay düzen, Desktop: Dikey düzen */}
                      <div className="flex items-center lg:flex-col lg:items-center lg:text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 lg:mr-0 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1 lg:flex-none">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-900 mb-1 lg:mb-4 group-hover:text-violet-800 transition-colors duration-300">
                            Deneyimli Ekip
                          </h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 hidden lg:block">
                            Alanında uzman ekibimizle hizmet veriyoruz.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[calc(100%-416px)]">
                  <div className="bg-white rounded-r-2xl lg:rounded-l-none rounded-2xl p-8 shadow-lg border border-gray-100 min-h-[250px] flex flex-col justify-center">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Uzman Kadromuz</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Elektrik-elektronik mühendisleri, enerji uzmanları ve proje yöneticilerinden oluşan deneyimli ekibimiz, sürekli eğitim ve gelişim programları ile kendilerini yenilemektedir.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Elektrik Mühendisleri</span>
                      <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Enerji Uzmanları</span>
                      <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Proje Yöneticileri</span>
                      <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Teknik Ekip</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teklif Al Kartı */}
              <div
                ref={card4Ref}
                className={`flex flex-col lg:flex-row-reverse items-center transition-all duration-500 ease-out ${card4Visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              >
                <div className="w-full sm:w-80 lg:w-64 flex-shrink-0">
                  <div
                    onClick={() => {
                      // Store the target ID for the contact page
                      sessionStorage.setItem('scrollToId', 'bize-ulasin');
                      // Navigate to contact page
                      window.location.href = '/iletisim#bize-ulasin';
                    }}
                    className="group relative bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-orange-100 cursor-pointer shadow-xl h-full min-h-[120px] sm:min-h-[140px] lg:min-h-[320px] flex flex-col justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      {/* Mobil: Yatay düzen, Desktop: Dikey düzen */}
                      <div className="flex items-center lg:flex-col lg:items-center lg:text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 lg:mr-0 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        </div>
                        <div className="flex-1 lg:flex-none">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-900 mb-1 lg:mb-4 group-hover:text-red-800 transition-colors duration-300">
                            Teklif Al
                          </h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 hidden lg:block">
                            Projeleriniz için ücretsiz teklif alın.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[calc(100%-416px)]">
                  <div className="bg-white rounded-l-2xl lg:rounded-r-none rounded-2xl p-8 shadow-lg border border-gray-100 min-h-[200px] flex flex-col justify-center">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Ücretsiz Teklif Süreci</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Projeniz için detaylı analiz yaparak size en uygun çözümü sunuyoruz. Teklif sürecimiz tamamen ücretsizdir.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Proje bilgileri analizi
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Teknik çözüm önerisi
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Detaylı fiyat teklifi
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Markalarımız Bölümü */}
            <div
              ref={brandsRef}
              className={`mb-8 transition-all duration-500 ease-out ${brandsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
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
