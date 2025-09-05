'use client';

import { useState, useEffect } from 'react';
import SkeletonCard from '../../components/SkeletonCard'; // Add this import

export default function Projelerimiz() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState<any[]>([]); // Add this state for projects

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
            // Simulate fetching data
            setProjects([
                { id: 1, title: 'Güneş Enerjisi Projeleri', description: 'Büyük ölçekli güneş enerjisi santralleri ve çatı kurulumları' },
                { id: 2, title: 'Rüzgar Enerjisi Sistemleri', description: 'Rüzgar türbinleri ve hibrit enerji sistemleri' },
                { id: 3, title: 'Enerji Depolama Çözümleri', description: 'Batarya sistemleri ve enerji yönetim çözümleri' },
                { id: 4, title: 'Endüstriyel Enerji Projeleri', description: 'Fabrika ve üretim tesislerinde enerji verimliliği' },
                { id: 5, title: 'Konut Enerji Sistemleri', description: 'Ev ve rezidans projelerinde yenilenebilir enerji' },
                { id: 6, title: 'Ticari Bina Projeleri', description: 'Ofis ve ticari binalarda enerji yönetim sistemleri' },
            ]);
        }, 1000); // Simulate a longer loading time

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
                            {!isLoaded ? (
                                Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
                            ) : (
                                projects.map((project) => (
                                    <div key={project.id} className="bg-gray-50 rounded-lg p-6 text-center">
                                        <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {project.description}
                                        </p>
                                    </div>
                                ))
                            )}
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
