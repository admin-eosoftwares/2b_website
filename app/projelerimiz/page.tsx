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
                <div className="container mx-auto px-4 py-8 pb-40">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                                Projelerimiz
                            </h1>
                            <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full mt-6"></div>
                        </div>

                        {/* All Projects */}
                        <ProjectGrid
                            projects={allProjects}
                        />

                        {/* CTA Section */}
                        <div className="mt-8">
                            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-400 border border-blue-200 h-[280px] flex items-center overflow-hidden">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-300/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500"></div>

                                <div className="relative z-10 flex-1">
                                    {/* Modern Icon Design */}
                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-400 shadow-lg">
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                                        Projeniz İçin Teklif Alın
                                    </h3>
                                    <p className="text-blue-700 leading-relaxed group-hover:text-blue-800 transition-colors duration-300">
                                        Sizin için en uygun güneş enerjisi çözümünü bulalım. Uzman ekibimizle ücretsiz danışmanlık ve teklif alın.
                                    </p>
                                </div>

                                {/* Button on the right, vertically centered */}
                                <div className="relative z-10 flex-shrink-0 mr-8">
                                    <a
                                        href="/iletisim#bize-ulasin"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>İletişime Geç</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageErrorBoundary>
    );
}
