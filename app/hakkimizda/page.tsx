'use client';

import { useState, useEffect } from 'react';

export default function Hakkimizda() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#f8f8ff]">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className={`text-4xl font-bold text-blue-900 mb-8 text-center transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Hakkımızda
                    </h1>

                    <div className={`bg-white rounded-lg shadow-lg p-8 mb-8 transition-all duration-500 ease-out delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            2B Global Enerji
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            2B Global Enerji olarak, enerji sektöründe güvenilir ve kaliteli hizmet sunma misyonuyla yola çıktık.
                            Müşteri memnuniyetini ön planda tutarak, sürdürülebilir enerji çözümleri sunmaktayız.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Deneyimli ekibimiz ve geniş ürün yelpazemizle, enerji ihtiyaçlarınızı en uygun şekilde karşılamak için buradayız.
                        </p>
                    </div>

                    <div className={`grid md:grid-cols-2 gap-8 transition-all duration-500 ease-out delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">
                                Vizyonumuz
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Enerji sektöründe öncü olmak ve müşterilerimize en kaliteli hizmeti sunarak
                                sektörde lider konumda yer almak.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">
                                Misyonumuz
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Müşteri memnuniyetini ön planda tutarak, güvenilir ve sürdürülebilir
                                enerji çözümleri sunmak.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
