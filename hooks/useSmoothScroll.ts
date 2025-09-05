'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { scrollToWithOffset } from '../utils/scroll';

export function useSmoothScroll() {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const [path, id] = href.split('#');

        if (pathname === path) {
            // 1. Signal that a controlled scroll is starting.
            const startEvent = new CustomEvent('internal-scroll-start');
            window.dispatchEvent(startEvent);

            // 2. Wait a moment for the UI to react (e.g., for the TopContactBar to become visible).
            setTimeout(() => {
                // 3. Now that the UI is stable, perform the scroll.
                scrollToWithOffset(id);

                // 4. Dispatch the navigation event for the highlight animation.
                const navEvent = new CustomEvent('internal-nav', { detail: { id } });
                window.dispatchEvent(navEvent);
            }, 50); // A short delay is enough for the UI to update.

        } else {
            sessionStorage.setItem('scrollToId', id);
            router.push(href);
        }
    }, [pathname, router]);

    return { handleClick };
}
