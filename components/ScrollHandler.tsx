'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { scrollToWithOffset } from '../utils/scroll';

const ScrollHandler = () => {
    const pathname = usePathname();

    useEffect(() => {
        const scrollToId = sessionStorage.getItem('scrollToId');
        if (!scrollToId) return;

        sessionStorage.removeItem('scrollToId');

        let attempts = 0;
        let lastHeaderHeight = 0;
        let stableCount = 0;

        const intervalId = setInterval(() => {
            const element = document.getElementById(scrollToId);
            const header = document.querySelector<HTMLElement>('[data-testid="main-header"]');

            if (element && header) {
                const currentHeaderHeight = header.offsetHeight;
                if (currentHeaderHeight > 0 && currentHeaderHeight === lastHeaderHeight) {
                    stableCount++;
                } else {
                    stableCount = 0;
                }
                lastHeaderHeight = currentHeaderHeight;

                if (stableCount >= 3) { // Wait for 3 stable checks (300ms)
                    clearInterval(intervalId);
                    scrollToWithOffset(scrollToId);
                }
            }

            attempts++;
            if (attempts > 30) { // Stop trying after 3 seconds
                clearInterval(intervalId);
                if (element) {
                    scrollToWithOffset(scrollToId); // Fallback
                }
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [pathname]);

    return null;
};

export default ScrollHandler;
