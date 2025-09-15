'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ErrorBoundary from './ErrorBoundary';

interface PageErrorBoundaryProps {
    children: React.ReactNode;
    pageName: string;
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

const PageErrorBoundary: React.FC<PageErrorBoundaryProps> = ({
    children,
    pageName,
    onError
}) => {
    const fallback = (
        <div className="min-h-screen bg-[#f8f8ff] flex items-center justify-center">
            <div className="max-w-lg mx-auto text-center p-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    {/* Logo */}
                    <div className="mb-6">
                        <Image
                            src="/2b_logo_sag.png"
                            alt="2B Global Enerji"
                            width={64}
                            height={64}
                            className="h-16 mx-auto mb-4"
                        />
                    </div>

                    {/* Sayfa Özel Hata Mesajı */}
                    <h2 className="text-2xl font-bold text-red-600 mb-4">
                        {pageName} Sayfasında Hata
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Bu sayfada bir sorun oluştu. Diğer sayfalar çalışmaya devam ediyor.
                        Lütfen sayfayı yenileyin veya ana sayfaya dönün.
                    </p>

                    {/* Aksiyon Butonları */}
                    <div className="space-y-3">
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                        >
                            Sayfayı Yenile
                        </button>

                        <Link
                            href="/"
                            className="block w-full bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium text-center"
                        >
                            Ana Sayfaya Dön
                        </Link>

                        {/* Sayfa Özel Navigasyon */}
                        {pageName !== 'Hakkımızda' && (
                            <a
                                href="/hakkimizda"
                                className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
                            >
                                Hakkımızda Sayfasına Git
                            </a>
                        )}

                        {pageName !== 'Projelerimiz' && (
                            <a
                                href="/projelerimiz"
                                className="block w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center"
                            >
                                Projelerimiz Sayfasına Git
                            </a>
                        )}

                        {pageName !== 'İletişim' && (
                            <a
                                href="/iletisim"
                                className="block w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium text-center"
                            >
                                İletişim Sayfasına Git
                            </a>
                        )}
                    </div>

                    {/* İletişim Bilgisi */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-2">
                            Sorun devam ederse bizimle iletişime geçin:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                            <a
                                href="tel:+902423246077"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                0242 324 60 77
                            </a>
                            <span className="hidden sm:inline text-gray-400">•</span>
                            <a
                                href="mailto:info@2bltd.com.tr"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                info@2bltd.com.tr
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <ErrorBoundary fallback={fallback} onError={onError}>
            {children}
        </ErrorBoundary>
    );
};

export default PageErrorBoundary;
