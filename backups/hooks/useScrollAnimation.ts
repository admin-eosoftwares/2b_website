'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
    const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', delay = 0 } = options;
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Mobil cihazlar için daha hassas ayarlar
        const isMobile = window.innerWidth <= 768;
        const mobileThreshold = isMobile ? 0.05 : threshold;
        const mobileRootMargin = isMobile ? '0px 0px -20px 0px' : rootMargin;

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('IntersectionObserver triggered:', {
                    isIntersecting: entry.isIntersecting,
                    delay,
                    isMobile,
                    element: element.tagName
                });

                if (entry.isIntersecting) {
                    if (delay > 0) {
                        setTimeout(() => {
                            console.log('Setting visible to true after delay:', delay);
                            setIsVisible(true);
                        }, delay);
                    } else {
                        console.log('Setting visible to true immediately');
                        setIsVisible(true);
                    }
                }
            },
            {
                threshold: mobileThreshold,
                rootMargin: mobileRootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, delay]);

    return { elementRef, isVisible };
}
