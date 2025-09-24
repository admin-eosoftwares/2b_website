'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavigation } from '../hooks/useNavigation';
import { useMobileMenu } from '../contexts/MobileMenuContext';
import DesktopNavigation from './DesktopNavigation';
import { CSS_CLASSES } from '../constants/styles';

const Header = React.memo(function Header() {
    const pathname = usePathname();
    const {
        isAboutDropdownOpen,
        isLoaded,
        setIsAboutDropdownOpen
    } = useNavigation();

    const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClasses = `
        ${CSS_CLASSES.header}
        ${isLoaded ? CSS_CLASSES.headerLoaded : CSS_CLASSES.headerLoading}
        ${isScrolled ? 'backdrop-blur-lg bg-white/60 shadow-lg' : 'backdrop-blur-sm bg-[#f8f8ff]/90'}
    `.trim();


    return (
        <header className={headerClasses} data-testid="main-header" role="banner">
            <nav id="navigation" className={CSS_CLASSES.container} role="navigation" aria-label="Ana navigasyon">
                <div className={CSS_CLASSES.headerContent}>
                    {/* Logo */}
                    <div className="flex-shrink-0 px-2 lg:px-0">
                        <Link href="/" className={CSS_CLASSES.focus} data-testid="logo-link">
                            <Image
                                src="/2b_logo_sag.png"
                                alt="2B Logo"
                                width={500}
                                height={500}
                                className="h-16 lg:h-20 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <DesktopNavigation
                        pathname={pathname}
                        isAboutDropdownOpen={isAboutDropdownOpen}
                        onAboutMouseEnter={() => setIsAboutDropdownOpen(true)}
                        onAboutMouseLeave={() => setIsAboutDropdownOpen(false)}
                    />

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className={`text-gray-700 hover:text-blue-700 p-2 ${CSS_CLASSES.focus}`}
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={toggleMobileMenu}
                            data-testid="mobile-menu-button"
                        >
                            <span className="sr-only">Menüyü aç</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
});

export default Header;
