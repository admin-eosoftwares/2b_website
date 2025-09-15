'use client';

import React from 'react';
import Image from 'next/image';
import ErrorBoundary from './ErrorBoundary';

interface SafeComponentProps {
    children: React.ReactNode;
    componentName: string;
    fallback?: React.ReactNode;
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

const SafeComponent: React.FC<SafeComponentProps> = ({
    children,
    componentName,
    fallback,
    onError
}) => {
    const defaultFallback = (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 m-4">
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                        {componentName} Yüklenemedi
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                        <p>
                            Bu bileşende bir hata oluştu. Sayfa çalışmaya devam ediyor.
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="-mx-2 -my-1.5 flex">
                            <button
                                type="button"
                                onClick={() => window.location.reload()}
                                className="bg-red-50 px-2 py-1.5 rounded-md text-sm font-medium text-red-800 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600"
                            >
                                Sayfayı Yenile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <ErrorBoundary
            fallback={fallback || defaultFallback}
            onError={onError}
        >
            {children}
        </ErrorBoundary>
    );
};

// Özel fallback bileşenleri
export const SafeComponentFallbacks = {
    // Header için özel fallback
    Header: (
        <div className="bg-red-50 border-b border-red-200 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src="/2b_logo_sag.png"
                        alt="2B Global Enerji"
                        width={48}
                        height={48}
                        className="h-12 w-auto"
                    />
                </div>
                <div className="text-red-600 text-sm">
                    Navigasyon yüklenemedi
                </div>
            </div>
        </div>
    ),

    // Footer için özel fallback
    Footer: (
        <div className="bg-red-50 border-t border-red-200 p-8 text-center">
            <div className="max-w-6xl mx-auto">
                <p className="text-red-600 mb-4">
                    Footer yüklenemedi
                </p>
                <div className="text-sm text-red-500">
                    <a href="tel:+902423246077" className="hover:text-red-700">
                        0242 324 60 77
                    </a>
                    <span className="mx-2">•</span>
                    <a href="mailto:info@2bltd.com.tr" className="hover:text-red-700">
                        info@2bltd.com.tr
                    </a>
                </div>
            </div>
        </div>
    ),

    // Form için özel fallback
    ContactForm: (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
                İletişim Formu Yüklenemedi
            </h3>
            <p className="text-red-600 mb-4">
                Form geçici olarak kullanılamıyor. Lütfen telefon ile iletişime geçin.
            </p>
            <div className="space-y-2">
                <a
                    href="tel:+902423246077"
                    className="block bg-red-600 text-white px-4 py-2 rounded text-center hover:bg-red-700"
                >
                    0242 324 60 77
                </a>
                <a
                    href="mailto:info@2bltd.com.tr"
                    className="block bg-red-600 text-white px-4 py-2 rounded text-center hover:bg-red-700"
                >
                    E-posta Gönder
                </a>
            </div>
        </div>
    ),

    // Harita için özel fallback
    Map: (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
                Harita Yüklenemedi
            </h3>
            <p className="text-red-600 mb-4">
                Harita geçici olarak görüntülenemiyor.
            </p>
            <a
                href="https://maps.google.com/maps?q=Bahçeyaka+Mah.+Atatürk+Cad.+No+375/A+Döşemealtı+ANTALYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
                Google Maps&apos;te Aç
            </a>
        </div>
    ),

    // Proje kartları için özel fallback
    ProjectCard: (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-600 text-sm">
                Proje bilgileri yüklenemedi
            </p>
        </div>
    )
};

export default SafeComponent;
