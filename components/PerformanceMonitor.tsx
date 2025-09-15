'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
    fcp: number; // First Contentful Paint
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay
    cls: number; // Cumulative Layout Shift
    ttfb: number; // Time to First Byte
}

export default function PerformanceMonitor() {
    useEffect(() => {
        // Only run in production
        if (process.env.NODE_ENV !== 'production') return;

        const sendToAnalytics = (metric: string, value: number) => {
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', metric, {
                    event_category: 'Performance',
                    value: Math.round(value),
                    non_interaction: true,
                });
            }
        };

        // Web Vitals measurement
        const measureWebVitals = () => {
            // First Contentful Paint
            if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.name === 'first-contentful-paint') {
                            sendToAnalytics('FCP', entry.startTime);
                        }
                    }
                });
                observer.observe({ entryTypes: ['paint'] });
            }

            // Largest Contentful Paint
            if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    sendToAnalytics('LCP', lastEntry.startTime);
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
            }

            // First Input Delay
            if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        const fidEntry = entry as any;
                        if (fidEntry.processingStart && fidEntry.startTime) {
                            sendToAnalytics('FID', fidEntry.processingStart - fidEntry.startTime);
                        }
                    }
                });
                observer.observe({ entryTypes: ['first-input'] });
            }

            // Cumulative Layout Shift
            if ('PerformanceObserver' in window) {
                let clsValue = 0;
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (!(entry as any).hadRecentInput) {
                            clsValue += (entry as any).value;
                        }
                    }
                    sendToAnalytics('CLS', clsValue);
                });
                observer.observe({ entryTypes: ['layout-shift'] });
            }
        };

        // Time to First Byte
        const measureTTFB = () => {
            if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.entryType === 'navigation') {
                            const navEntry = entry as any;
                            if (navEntry.responseStart && navEntry.requestStart) {
                                const ttfb = navEntry.responseStart - navEntry.requestStart;
                                sendToAnalytics('TTFB', ttfb);
                            }
                        }
                    }
                });
                observer.observe({ entryTypes: ['navigation'] });
            }
        };

        // Page load time
        const measurePageLoad = () => {
            window.addEventListener('load', () => {
                if (performance.timing) {
                    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                    sendToAnalytics('Page Load Time', loadTime);
                }
            });
        };

        // Run measurements
        measureWebVitals();
        measureTTFB();
        measurePageLoad();

        // Error tracking
        const trackErrors = () => {
            window.addEventListener('error', (event) => {
                sendToAnalytics('JavaScript Error', 1);
                console.error('Performance Monitor - Error:', event.error);
            });

            window.addEventListener('unhandledrejection', (event) => {
                sendToAnalytics('Unhandled Promise Rejection', 1);
                console.error('Performance Monitor - Unhandled Rejection:', event.reason);
            });
        };

        trackErrors();
    }, []);

    return null; // This component doesn't render anything
}
