'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error Boundary caught an error:', error, errorInfo);

        // Custom error handler
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }

        // Burada hata raporlama servisine gönderebilirsiniz
        // Sentry, LogRocket, vs.
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || <DefaultErrorFallback error={this.state.error} />;
        }

        return this.props.children;
    }
}

// Varsayılan hata fallback bileşeni
const DefaultErrorFallback: React.FC<{ error?: Error }> = ({ error }) => {
    const handleReload = () => {
        window.location.reload();
    };

    const handleGoHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f8ff]">
            <div className="max-w-md mx-auto text-center p-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    {/* Logo */}
                    <div className="mb-6">
                        <img
                            src="/2b_logo_sag.png"
                            alt="2B Global Enerji"
                            className="h-16 mx-auto mb-4"
                        />
                    </div>

                    {/* Hata Mesajı */}
                    <h2 className="text-2xl font-bold text-red-600 mb-4">
                        Bir Hata Oluştu
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
                    </p>

                    {/* Hata Detayları (Development için) */}
                    {process.env.NODE_ENV === 'development' && error && (
                        <details className="mb-6 text-left bg-gray-100 p-4 rounded-lg">
                            <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                                Hata Detayları (Geliştirici)
                            </summary>
                            <pre className="text-xs text-red-600 overflow-auto">
                                {error.message}
                                {error.stack && `\n\n${error.stack}`}
                            </pre>
                        </details>
                    )}

                    {/* Aksiyon Butonları */}
                    <div className="space-y-3">
                        <button
                            onClick={handleReload}
                            className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                        >
                            Sayfayı Yenile
                        </button>

                        <button
                            onClick={handleGoHome}
                            className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
                        >
                            Ana Sayfaya Dön
                        </button>
                    </div>

                    {/* İletişim Bilgisi */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-2">
                            Sorun devam ederse bizimle iletişime geçin:
                        </p>
                        <a
                            href="tel:+902423246077"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            0242 324 60 77
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorBoundary;
