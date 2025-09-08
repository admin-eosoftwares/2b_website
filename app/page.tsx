'use client';

import { useState, useEffect } from 'react';
import PageErrorBoundary from '../components/PageErrorBoundary';
import BrandsSlider from '../components/BrandsSlider';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageErrorBoundary pageName="Ana Sayfa">
      <div className="min-h-screen bg-[#f8f8ff]">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className={`text-4xl font-bold text-blue-900 mb-8 text-center transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Hoş Geldiniz
            </h1>

            <div className={`bg-white rounded-lg shadow-lg p-8 mb-8 transition-all duration-500 ease-out delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2B Global Enerji
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Enerji sektöründe güvenilir ve kaliteli hizmet sunma misyonuyla yola çıktık.
                Müşteri memnuniyetini ön planda tutarak, sürdürülebilir enerji çözümleri sunmaktayız.
              </p>
            </div>

            <div className={`grid md:grid-cols-3 gap-8 mb-8 transition-all duration-500 ease-out delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Kaliteli Hizmet
                </h3>
                <p className="text-gray-600">
                  En yüksek kalite standartlarında hizmet sunuyoruz.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Güvenilir Çözümler
                </h3>
                <p className="text-gray-600">
                  Müşterilerimize güvenilir enerji çözümleri sağlıyoruz.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Deneyimli Ekip
                </h3>
                <p className="text-gray-600">
                  Alanında uzman ekibimizle hizmet veriyoruz.
                </p>
              </div>
            </div>

            {/* Markalarımız Bölümü */}
            <div className={`mb-8 transition-all duration-500 ease-out delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
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
