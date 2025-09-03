'use client';

import { useState, useEffect } from 'react';

export default function Projelerimiz() {
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
                <div className="max-w-6xl mx-auto">
                    <h1 className={`text-4xl font-bold text-blue-900 mb-8 text-center transition-all duration-600 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Projelerimiz
                    </h1>

                    <div className={`bg-white rounded-lg shadow-lg p-8 mb-8 transition-all duration-600 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Gerçekleştirdiğimiz Projeler
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Yılların deneyimi ve kaliteli hizmet anlayışımızla, birçok önemli enerji projesinde
                            başarıyla hizmet vermiş bulunmaktayız. Müşteri memnuniyetini ön planda tutarak
                            gerçekleştirdiğimiz projelerimiz:
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gray-50 rounded-lg p-6 text-center">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Güneş Enerjisi Projeleri
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Büyük ölçekli güneş enerjisi santralleri ve çatı kurulumları
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 text-center">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Rüzgar Enerjisi Sistemleri
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Rüzgar türbinleri ve hibrit enerji sistemleri
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 text-center">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Enerji Depolama Çözümleri
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Batarya sistemleri ve enerji yönetim çözümleri
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 text-center">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Endüstriyel Enerji Projeleri
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Fabrika ve üretim tesislerinde enerji verimliliği
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 text-center">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Konut Enerji Sistemleri
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Ev ve rezidans projelerinde yenilenebilir enerji
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 text-center">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Ticari Bina Projeleri
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Ofis ve ticari binalarda enerji yönetim sistemleri
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`bg-blue-50 rounded-lg p-8 text-center transition-all duration-600 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">
                            Projelerinizde Güvenilir Çözüm Ortağınız
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Deneyimli ekibimiz ve kaliteli hizmet anlayışımızla,
                            enerji projelerinizde yanınızdayız.
                        </p>
                        <a
                            href="/iletisim"
                            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                        >
                            İletişime Geçin
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
