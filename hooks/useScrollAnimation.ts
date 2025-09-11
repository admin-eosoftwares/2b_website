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

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Delay ekleme
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, delay]);

    return { elementRef, isVisible };
}
