'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Loading() {
    const [isLoading, setIsLoading] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        let loadingTimer: NodeJS.Timeout;
        let hideTimer: NodeJS.Timeout;

        // Eğer sayfa hızlı yüklenirse loading'i gösterme
        const handleLoad = () => {
            clearTimeout(loadingTimer);
            if (showLoading) {
                // Loading gösteriliyorsa, kısa bir süre sonra gizle
                hideTimer = setTimeout(() => {
                    setIsLoading(false);
                }, 300);
            }
        };

        // 500ms sonra hala yüklenmemişse loading'i göster
        loadingTimer = setTimeout(() => {
            if (document.readyState !== 'complete') {
                setShowLoading(true);
                setIsLoading(true);
            }
        }, 500);

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            clearTimeout(loadingTimer);
            clearTimeout(hideTimer);
            window.removeEventListener('load', handleLoad);
        };
    }, [showLoading]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f8ff] backdrop-blur">
            <div className="flex flex-col items-center space-y-6">
                {/* Logo */}
                <div className="relative">
                    <Image
                        src="/2b_logo2.png"
                        alt="2B Logo"
                        width={120}
                        height={120}
                        className="animate-pulse"
                        priority
                    />
                    {/* Logo etrafında dönen çember */}
                    <div className="absolute inset-0 border-2 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
                </div>

                {/* Yükleme metni */}
                <div className="text-center space-y-2">
                    <h2 className="text-xl font-semibold text-blue-900 animate-pulse">
                        2B Global Enerji
                    </h2>
                    <p className="text-sm text-gray-600 animate-pulse">
                        Yükleniyor...
                    </p>
                </div>

                {/* Progress bar */}
                <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-900 to-blue-600 rounded-full animate-pulse"></div>
                </div>

                {/* Nokta animasyonu */}
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );
}
