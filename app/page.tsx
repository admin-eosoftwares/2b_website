'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageErrorBoundary from '../components/PageErrorBoundary';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnalytics } from '../components/GoogleAnalytics';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Analytics hook
  const { trackEvent } = useAnalytics();

  // Mobil kart animasyon durumları
  const [mobileCard1Visible, setMobileCard1Visible] = useState(false);
  const [mobileCard2Visible, setMobileCard2Visible] = useState(false);
  const [mobileCard3Visible, setMobileCard3Visible] = useState(false);
  const [mobileCard4Visible, setMobileCard4Visible] = useState(false);
  const [mobileCard5Visible, setMobileCard5Visible] = useState(false);
  const [mobileCard6Visible, setMobileCard6Visible] = useState(false);

  // Web için scroll animasyonları (değişiklik yok)
  const { elementRef: card1Ref, isVisible: card1Visible } = useScrollAnimation({ delay: 0, threshold: 0.1 });
  const { elementRef: card2Ref, isVisible: card2Visible } = useScrollAnimation({ delay: 150, threshold: 0.1 });
  const { elementRef: card3Ref, isVisible: card3Visible } = useScrollAnimation({ delay: 300, threshold: 0.1 });
  const { elementRef: card4Ref, isVisible: card4Visible } = useScrollAnimation({ delay: 0, threshold: 0.1 });
  const { elementRef: card5Ref, isVisible: card5Visible } = useScrollAnimation({ delay: 150, threshold: 0.1 });
  const { elementRef: card6Ref, isVisible: card6Visible } = useScrollAnimation({ delay: 300, threshold: 0.1 });

  // Debug: Kartların görünürlük durumunu kontrol et (development only)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Card visibility states:', {
        card1: card1Visible,
        card2: card2Visible,
        card3: card3Visible,
        card4: card4Visible,
        card5: card5Visible,
        card6: card6Visible
      });
    }
  }, [card1Visible, card2Visible, card3Visible, card4Visible, card5Visible, card6Visible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Ekran boyutunu kontrol et
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        const mobile = window.innerWidth < 1024; // lg breakpoint (1024px)
        setIsMobile(mobile);
      }
    };

    // İlk yüklemede kontrol et
    checkScreenSize();

    // Ekran boyutu değişikliklerini dinle
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkScreenSize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkScreenSize);
      }
    };
  }, []);

  // Mobil kartlar için giriş animasyonu
  useEffect(() => {
    if (!isLoaded || !isMobile) return;

    const startMobileAnimations = () => {
      // İlk 3 kart
      setTimeout(() => setMobileCard1Visible(true), 300);
      setTimeout(() => setMobileCard2Visible(true), 500);
      setTimeout(() => setMobileCard3Visible(true), 700);

      // Son 3 kart (daha geç başlar)
      setTimeout(() => setMobileCard4Visible(true), 1200);
      setTimeout(() => setMobileCard5Visible(true), 1400);
      setTimeout(() => setMobileCard6Visible(true), 1600);
    };

    startMobileAnimations();
  }, [isLoaded, isMobile]);




  return (
    <PageErrorBoundary pageName="Ana Sayfa">
      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "2B Global Enerji",
            "alternateName": "2B Global Enerji San. Tic. Ltd. Şti.",
            "url": "https://2bltd.com.tr",
            "logo": "https://2bltd.com.tr/images/logos/2b_logo_sag.avif",
            "description": "Antalya merkezli yenilenebilir enerji ve elektrik-elektronik sektörlerinde 20+ yıllık deneyim.",
            "foundingDate": "2003",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bahçeyaka Mah. Atatürk Cad. No 375/A",
              "addressLocality": "Döşemealtı",
              "addressRegion": "Antalya",
              "addressCountry": "TR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-242-324-60-77",
              "contactType": "customer service",
              "email": "info@2bltd.com.tr",
              "availableLanguage": "Turkish"
            },
            "sameAs": [
              "https://www.instagram.com/2b_global_enerji",
              "https://wa.me/905454036676"
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 37.0062,
                "longitude": 30.5902
              },
              "geoRadius": "500000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Yenilenebilir Enerji Çözümleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Güneş Enerjisi Sistemleri",
                    "description": "Fotovoltaik modül, inverter ve batarya çözümleri"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "EPC Hizmetleri",
                    "description": "Mühendislik, tedarik ve inşaat hizmetleri"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="min-h-screen bg-[#f8f8ff]">

        {/* Video Bölümü */}
        <div className="w-full mb-8">
          <div className="relative w-full flex justify-center">
            <div className="relative">
              {!isMobile ? (
                <video
                  className="max-w-full h-auto object-contain"
                  src="/2b_website_gesvideo_optimized.mp4"
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
                  src="/2b_website_gesvideomobil_optimized.mp4"
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

        {/* Modern Kartlar - Web Tasarımı + Mobil Optimizasyon */}
        <div className="w-full py-8 sm:py-12 lg:py-16" style={{ paddingBottom: '4rem' }}>
          <div className="container mx-auto px-4">
            {/* Mobil ve tablet için ayrı tasarım */}
            <div className="block lg:hidden">
              <div className="max-w-none mx-auto space-y-6">
                {/* Mobil: Kaliteli Hizmet Kartı */}
                <div
                  className={`transition-all duration-700 ease-out transform ${mobileCard1Visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-102 active:scale-95 transition-all duration-300 touch-manipulation">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-gray-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          Kaliteli Hizmet
                        </h3>
                        <p className="text-sm text-gray-600">
                          En yüksek kalite standartlarında hizmet sunuyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        ISO 9001:2015 kalite yönetim sistemi ile çalışıyoruz. Tüm ürünlerimiz uluslararası standartlarda test edilir ve sertifikalandırılır.
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center bg-slate-50 rounded-lg p-3">
                          <svg className="w-5 h-5 text-slate-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">Uluslararası kalite sertifikaları</span>
                        </div>
                        <div className="flex items-center bg-slate-50 rounded-lg p-3">
                          <svg className="w-5 h-5 text-slate-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">7/24 teknik destek hizmeti</span>
                        </div>
                        <div className="flex items-center bg-slate-50 rounded-lg p-3">
                          <svg className="w-5 h-5 text-slate-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">Garanti ve bakım hizmetleri</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobil: Güvenilir Çözümler Kartı */}
                <div
                  className={`transition-all duration-700 ease-out transform ${mobileCard2Visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-102 active:scale-95 transition-all duration-300 touch-manipulation">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-green-900 mb-1">
                          Güvenilir Çözümler
                        </h3>
                        <p className="text-sm text-gray-600">
                          Müşterilerimize güvenilir enerji çözümleri sağlıyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Enerji sektöründe 20+ yıllık deneyimimizle, müşterilerimize en güvenilir çözümleri sunuyoruz.
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-green-800 text-sm">Proje Yönetimi</h5>
                          </div>
                          <p className="text-xs text-gray-600">Profesyonel proje yönetimi ile zamanında teslimat</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-green-800 text-sm">Kalite Kontrol</h5>
                          </div>
                          <p className="text-xs text-gray-600">Her aşamada kalite kontrol ve test süreçleri</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobil: Deneyimli Ekip Kartı */}
                <div
                  className={`transition-all duration-700 ease-out transform ${mobileCard3Visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-102 active:scale-95 transition-all duration-300 touch-manipulation">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-amber-900 mb-1">
                          Deneyimli Ekip
                        </h3>
                        <p className="text-sm text-gray-600">
                          Alanında uzman ekibimizle hizmet veriyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Elektrik-elektronik mühendisleri, enerji uzmanları ve proje yöneticilerinden oluşan deneyimli ekibimiz.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-amber-100 text-amber-800 px-3 py-2 rounded-full text-xs font-medium">Elektrik Mühendisleri</span>
                        <span className="bg-amber-100 text-amber-800 px-3 py-2 rounded-full text-xs font-medium">Enerji Uzmanları</span>
                        <span className="bg-amber-100 text-amber-800 px-3 py-2 rounded-full text-xs font-medium">Proje Yöneticileri</span>
                        <span className="bg-amber-100 text-amber-800 px-3 py-2 rounded-full text-xs font-medium">Teknik Ekip</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobil: İlk 3 kart ile son 3 kart arası büyük boşluk */}
                <div style={{ marginTop: '4rem', marginBottom: '2rem' }}></div>

                {/* Mobil: Aksiyon Kartları */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Mobil: Projelerimiz Kartı */}
                  <div
                    className={`transition-all duration-700 ease-out transform ${mobileCard4Visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
                  >
                    <div
                      onClick={() => {
                        trackEvent('click', 'Navigation', 'Projelerimiz');
                        router.push('/projelerimiz');
                      }}
                      className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-102 active:scale-95 transition-all duration-300 cursor-pointer border border-blue-200 h-[280px] flex flex-col justify-between overflow-hidden touch-manipulation"
                    >
                      <div className="relative z-10">
                        <div className="relative mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-400 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                          Projelerimiz
                        </h3>
                        <p className="text-blue-700 leading-relaxed mb-4 group-hover:text-blue-800 transition-colors duration-300 text-sm">
                          Başarılı enerji projelerimizi inceleyin ve deneyimimizi keşfedin.
                        </p>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl p-3 group-hover:bg-white/80 transition-all duration-300">
                          <span className="text-blue-800 font-semibold text-xs">
                            Projeleri İncele
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

                  {/* Mobil: Bizi Yakından Tanıyın Kartı */}
                  <div
                    className={`transition-all duration-700 ease-out transform ${mobileCard5Visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
                  >
                    <div
                      onClick={() => {
                        trackEvent('click', 'Navigation', 'Hakkımızda');
                        router.push('/hakkimizda');
                      }}
                      className="group relative bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-rose-500/20 hover:scale-102 active:scale-95 transition-all duration-300 cursor-pointer border border-rose-200 h-[280px] flex flex-col justify-between overflow-hidden touch-manipulation"
                    >
                      <div className="relative z-10">
                        <div className="relative mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-700 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-400 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-bold text-rose-900 mb-3 group-hover:text-rose-800 transition-colors duration-300">
                          Bizi Yakından Tanıyın
                        </h3>
                        <p className="text-rose-700 leading-relaxed mb-4 group-hover:text-rose-800 transition-colors duration-300 text-sm">
                          Şirketimiz ve ekibimiz hakkında detaylı bilgi edinin.
                        </p>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl p-3 group-hover:bg-white/80 transition-all duration-300">
                          <span className="text-rose-800 font-semibold text-xs">
                            Hakkımızda
                          </span>
                          <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center group-hover:bg-rose-600 transition-colors duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobil: Teklif Al Kartı */}
                  <div
                    className={`transition-all duration-700 ease-out transform ${mobileCard6Visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
                  >
                    <div
                      onClick={() => {
                        trackEvent('click', 'Navigation', 'İletişim');
                        router.push('/iletisim');
                      }}
                      className="group relative bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-102 active:scale-95 transition-all duration-300 cursor-pointer border border-purple-200 h-[280px] flex flex-col justify-between overflow-hidden touch-manipulation"
                    >
                      <div className="relative z-10">
                        <div className="relative mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-700 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-400 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-bold text-purple-900 mb-3 group-hover:text-purple-800 transition-colors duration-300">
                          Teklif Al
                        </h3>
                        <p className="text-purple-700 leading-relaxed mb-4 group-hover:text-purple-800 transition-colors duration-300 text-sm">
                          Projeleriniz için ücretsiz teklif alın ve çözümlerimizi keşfedin.
                        </p>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl p-3 group-hover:bg-white/80 transition-all duration-300">
                          <span className="text-purple-800 font-semibold text-xs">
                            Teklif Al
                          </span>
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web için orijinal tasarım */}
            <div className="hidden lg:block">
              <div className="max-w-none mx-auto space-y-2">
                {/* Kaliteli Hizmet Kartı - Web Tasarımı */}
                <div
                  ref={card1Ref}
                  className={`flex flex-col lg:flex-row items-center transition-all duration-300 ease-out ${card1Visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                >
                  <div className="w-full sm:w-80 lg:w-64 flex-shrink-0">
                    <div className="group relative bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-slate-100 shadow-xl h-full min-h-[120px] sm:min-h-[140px] lg:min-h-[320px] flex flex-col justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-gray-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        {/* Mobil: Yatay düzen, Desktop: Dikey düzen */}
                        <div className="flex items-center lg:flex-col lg:items-center lg:text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-slate-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 lg:mr-0 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 lg:flex-none">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-1 lg:mb-4 group-hover:text-gray-800 transition-colors duration-300">
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
                          <svg className="w-5 h-5 text-slate-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Uluslararası kalite sertifikaları
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-slate-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          7/24 teknik destek hizmeti
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-slate-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Garanti ve bakım hizmetleri
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Güvenilir Çözümler Kartı - Web Tasarımı */}
                <div
                  ref={card2Ref}
                  className={`flex flex-col lg:flex-row-reverse items-center transition-all duration-300 ease-out ${card2Visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                >
                  <div className="w-full sm:w-80 lg:w-64 flex-shrink-0">
                    <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-100 shadow-xl h-full min-h-[120px] sm:min-h-[140px] lg:min-h-[320px] flex flex-col justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        {/* Mobil: Yatay düzen, Desktop: Dikey düzen */}
                        <div className="flex items-center lg:flex-col lg:items-center lg:text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 lg:mr-0 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <div className="flex-1 lg:flex-none">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-900 mb-1 lg:mb-4 group-hover:text-emerald-800 transition-colors duration-300">
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
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-2">Proje Yönetimi</h5>
                          <p className="text-sm text-gray-600">Profesyonel proje yönetimi ile zamanında teslimat</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-2">Kalite Kontrol</h5>
                          <p className="text-sm text-gray-600">Her aşamada kalite kontrol ve test süreçleri</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deneyimli Ekip Kartı - Web Tasarımı */}
                <div
                  ref={card3Ref}
                  className={`flex flex-col lg:flex-row items-center transition-all duration-300 ease-out ${card3Visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                >
                  <div className="w-full sm:w-80 lg:w-64 flex-shrink-0">
                    <div className="group relative bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-amber-100 shadow-xl h-full min-h-[120px] sm:min-h-[140px] lg:min-h-[320px] flex flex-col justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-yellow-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        {/* Mobil: Yatay düzen, Desktop: Dikey düzen */}
                        <div className="flex items-center lg:flex-col lg:items-center lg:text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 lg:mr-0 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 lg:flex-none">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-900 mb-1 lg:mb-4 group-hover:text-yellow-800 transition-colors duration-300">
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
                        <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">Elektrik Mühendisleri</span>
                        <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">Enerji Uzmanları</span>
                        <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">Proje Yöneticileri</span>
                        <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">Teknik Ekip</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* İlk 3 kart ile son 3 kart arası büyük boşluk */}
                <div style={{ marginTop: '6rem', marginBottom: '3rem' }}></div>

                {/* Modern Aksiyon Kartları - Web Tasarımı */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Projelerimiz Kartı - Modern Card Style */}
                  <div
                    ref={card4Ref}
                    className={`transition-all duration-600 ease-out ${card4Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  >
                    <div
                      onClick={() => {
                        trackEvent('click', 'Navigation', 'Projelerimiz');
                        router.push('/projelerimiz');
                      }}
                      className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-400 cursor-pointer border border-blue-200 h-[380px] flex flex-col justify-between overflow-hidden"
                    >
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-300/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500"></div>

                      <div className="relative z-10">
                        {/* Modern Icon Design */}
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-400 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                          Projelerimiz
                        </h3>
                        <p className="text-blue-700 leading-relaxed mb-6 group-hover:text-blue-800 transition-colors duration-300">
                          Başarılı enerji projelerimizi inceleyin ve deneyimimizi keşfedin.
                        </p>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl p-4 group-hover:bg-white/80 transition-all duration-300">
                          <span className="text-blue-800 font-semibold text-sm">
                            Projeleri İncele
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

                  {/* Bizi Yakından Tanıyın Kartı - Modern Card Style */}
                  <div
                    ref={card5Ref}
                    className={`transition-all duration-600 ease-out delay-150 ${card5Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  >
                    <div
                      onClick={() => {
                        trackEvent('click', 'Navigation', 'Hakkımızda');
                        router.push('/hakkimizda');
                      }}
                      className="group relative bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-rose-500/20 hover:scale-105 transition-all duration-400 cursor-pointer border border-rose-200 h-[380px] flex flex-col justify-between overflow-hidden"
                    >
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-rose-200/30 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-rose-300/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500"></div>

                      <div className="relative z-10">
                        {/* Modern Icon Design */}
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-700 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-400 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <h3 className="text-2xl font-bold text-rose-900 mb-4 group-hover:text-rose-800 transition-colors duration-300">
                          Bizi Yakından Tanıyın
                        </h3>
                        <p className="text-rose-700 leading-relaxed mb-6 group-hover:text-rose-800 transition-colors duration-300">
                          Şirketimiz ve ekibimiz hakkında detaylı bilgi edinin.
                        </p>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl p-4 group-hover:bg-white/80 transition-all duration-300">
                          <span className="text-rose-800 font-semibold text-sm">
                            Hakkımızda
                          </span>
                          <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center group-hover:bg-rose-600 transition-colors duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Teklif Al Kartı - Modern Card Style */}
                  <div
                    ref={card6Ref}
                    className={`transition-all duration-600 ease-out delay-300 ${card6Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  >
                    <div
                      onClick={() => {
                        trackEvent('click', 'Navigation', 'İletişim');
                        router.push('/iletisim');
                      }}
                      className="group relative bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-400 cursor-pointer border border-purple-200 h-[380px] flex flex-col justify-between overflow-hidden"
                    >
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/30 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-300/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500"></div>

                      <div className="relative z-10">
                        {/* Modern Icon Design */}
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-700 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-400 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <h3 className="text-2xl font-bold text-purple-900 mb-4 group-hover:text-purple-800 transition-colors duration-300">
                          Teklif Al
                        </h3>
                        <p className="text-purple-700 leading-relaxed mb-6 group-hover:text-purple-800 transition-colors duration-300">
                          Projeleriniz için ücretsiz teklif alın ve çözümlerimizi keşfedin.
                        </p>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl p-4 group-hover:bg-white/80 transition-all duration-300">
                          <span className="text-purple-800 font-semibold text-sm">
                            Teklif Al
                          </span>
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
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
