'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useNavigation } from '../hooks/useNavigation';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';
import { CSS_CLASSES } from '../constants/styles';

const Header = React.memo(function Header() {
    const pathname = usePathname();
    const {
        isMobileMenuOpen,
        isAboutDropdownOpen,
        isMobileAboutOpen,
        isLoaded,
        toggleMobileMenu,
        toggleMobileAbout,
        closeMobileMenu,
        setIsAboutDropdownOpen
    } = useNavigation();

    const headerClasses = `
        ${CSS_CLASSES.header}
        ${isLoaded ? CSS_CLASSES.headerLoaded : CSS_CLASSES.headerLoading}
    `.trim();

    return (
        <header className={headerClasses} data-testid="main-header">
            <nav className={CSS_CLASSES.container} role="navigation" aria-label="Ana navigasyon">
                <div className={CSS_CLASSES.headerContent}>
                    {/* Logo */}
                    <div className="flex-shrink-0 px-2 lg:px-0">
                        <a href="/" className={CSS_CLASSES.focus} data-testid="logo-link">
                            <Image
                                src="/2b_logo_sag.png"
                                alt="2B Logo"
                                width={500}
                                height={500}
                                className="h-16 lg:h-20 w-auto"
                                priority
                            />
                        </a>
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

                {/* Mobile Menu */}
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    isMobileAboutOpen={isMobileAboutOpen}
                    onClose={closeMobileMenu}
                    onToggleAbout={toggleMobileAbout}
                />
            </nav>
        </header>
    );
});

export default Header;
