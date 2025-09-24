'use client';

import { useMobileMenu } from '@/contexts/MobileMenuContext';

export default function PageWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isMobileMenuOpen } = useMobileMenu();

    return (
        <div
            className={`transition-all duration-300 ${isMobileMenuOpen ? 'blur-sm brightness-75' : ''
                }`}
        >
            {children}
        </div>
    );
}
