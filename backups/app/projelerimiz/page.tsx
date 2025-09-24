'use client';

import { useState, useEffect } from 'react';
import PageErrorBoundary from '../../components/PageErrorBoundary';
import ProjectGrid from '../../components/projects/ProjectGrid';
import { allProjects } from '../../components/projects/ProjectData';

export default function Projelerimiz() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PageErrorBoundary pageName="Projelerimiz">
            <div className="min-h-screen bg-[#f8f8ff]">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                                Projelerimiz
                            </h1>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Yenilenebilir enerji alanında gerçekleştirdiğimiz başarılı projelerimizi keşfedin.
                                Her proje, kalite ve güvenilirliğimizin bir kanıtıdır.
                            </p>
                            <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full mt-6"></div>
                        </div>

                        {/* Projects Grid */}
                        <ProjectGrid
                            projects={allProjects}
                            title="Başarılı Projelerimiz"
                            description="Farklı kapasitelerde ve çeşitli lokasyonlarda gerçekleştirdiğimiz güneş enerjisi projelerimiz"
                        />

                        {/* CTA Section */}
                        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">
                                Projeniz İçin Teklif Alın
                            </h2>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Sizin için en uygun güneş enerjisi çözümünü bulalım.
                                Uzman ekibimizle ücretsiz danışmanlık ve teklif alın.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/iletisim#bize-ulasin"
                                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-300"
                                >
                                    Ücretsiz Teklif Al
                                </a>
                                <a
                                    href="tel:+902423246077"
                                    className="inline-flex items-center justify-center px-8 py-3 border border-blue-900 text-base font-medium rounded-lg text-blue-900 bg-white hover:bg-blue-50 transition-colors duration-300"
                                >
                                    Hemen Ara
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageErrorBoundary>
    );
}
