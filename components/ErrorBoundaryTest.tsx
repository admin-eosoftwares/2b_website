'use client';

import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import SafeComponent from './SafeComponent';
import ErrorTestComponent from './ErrorTestComponent';

const ErrorBoundaryTest: React.FC = () => {
    const [testType, setTestType] = useState<'none' | 'page' | 'component' | 'safe'>('none');
    const [shouldThrow, setShouldThrow] = useState(false);

    const triggerError = () => {
        setShouldThrow(true);
    };

    const resetTest = () => {
        setShouldThrow(false);
        setTestType('none');
    };

    return (
        <div className="min-h-screen bg-[#f8f8ff] p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                    Error Boundary Test Sayfası
                </h1>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Test Kontrolleri
                    </h2>

                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setTestType('page')}
                                className={`px-4 py-2 rounded-lg ${testType === 'page'
                                        ? 'bg-blue-900 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Sayfa Error Boundary Test
                            </button>

                            <button
                                onClick={() => setTestType('component')}
                                className={`px-4 py-2 rounded-lg ${testType === 'component'
                                        ? 'bg-blue-900 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Bileşen Error Boundary Test
                            </button>

                            <button
                                onClick={() => setTestType('safe')}
                                className={`px-4 py-2 rounded-lg ${testType === 'safe'
                                        ? 'bg-blue-900 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Safe Component Test
                            </button>

                            <button
                                onClick={resetTest}
                                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                            >
                                Testleri Sıfırla
                            </button>
                        </div>

                        {testType !== 'none' && (
                            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <p className="text-yellow-800 mb-2">
                                    <strong>Test:</strong> {testType}
                                </p>
                                <button
                                    onClick={triggerError}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                >
                                    Hata Oluştur
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Test Sonuçları */}
                <div className="space-y-6">
                    {testType === 'page' && (
                        <ErrorBoundary>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Sayfa Error Boundary Test
                                </h3>
                                <ErrorTestComponent shouldThrow={shouldThrow} errorMessage="Sayfa seviyesinde hata oluştu" />
                            </div>
                        </ErrorBoundary>
                    )}

                    {testType === 'component' && (
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Bileşen Error Boundary Test
                            </h3>
                            <ErrorBoundary>
                                <ErrorTestComponent shouldThrow={shouldThrow} errorMessage="Bileşen seviyesinde hata oluştu" />
                            </ErrorBoundary>
                        </div>
                    )}

                    {testType === 'safe' && (
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Safe Component Test
                            </h3>
                            <SafeComponent
                                componentName="ErrorTestComponent"
                                fallback={
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <p className="text-red-600">SafeComponent fallback çalışıyor!</p>
                                    </div>
                                }
                            >
                                <ErrorTestComponent shouldThrow={shouldThrow} errorMessage="SafeComponent seviyesinde hata oluştu" />
                            </SafeComponent>
                        </div>
                    )}

                    {testType === 'none' && (
                        <div className="bg-gray-50 rounded-lg p-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-600 mb-4">
                                Test Seçin
                            </h3>
                            <p className="text-gray-500">
                                Yukarıdaki butonlardan birini seçerek Error Boundary testlerini başlatın.
                            </p>
                        </div>
                    )}
                </div>

                {/* Test Açıklamaları */}
                <div className="mt-8 bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">
                        Test Açıklamaları
                    </h3>
                    <div className="space-y-2 text-sm text-blue-800">
                        <p><strong>Sayfa Error Boundary:</strong> Tüm sayfa çöker, ana ErrorBoundary devreye girer</p>
                        <p><strong>Bileşen Error Boundary:</strong> Sadece o bileşen etkilenir, sayfa çalışmaya devam eder</p>
                        <p><strong>Safe Component:</strong> Özel fallback gösterir, diğer bileşenler etkilenmez</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorBoundaryTest;
