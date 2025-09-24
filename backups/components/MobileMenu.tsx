'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { NAV_ITEMS, ABOUT_DROPDOWN_ITEMS, EXTERNAL_LINKS } from '../constants/navigation';
import { CSS_CLASSES } from '../constants/styles';
import { useMobileMenu } from '../contexts/MobileMenuContext';

export default function MobileMenu() {
    const {
        isMobileMenuOpen,
        closeMobileMenu,
        isMobileAboutOpen,
        toggleMobileAbout,
    } = useMobileMenu();

    // Sayfa kaydırmasını engelle
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const overlayClasses = `
    ${CSS_CLASSES.mobileOverlay}
    ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `.trim();

    const panelClasses = `
    ${CSS_CLASSES.mobilePanel}
    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  `.trim();

    const aboutSubmenuClasses = `
    transition-all duration-500 ease-in-out overflow-hidden
    ${isMobileAboutOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
  `.trim();

    return (
        <div className={overlayClasses} data-testid="mobile-menu-overlay">
            {/* Backdrop */}
            <div
                className={CSS_CLASSES.mobileBackdrop}
                onClick={closeMobileMenu}
                data-testid="mobile-menu-backdrop"
            ></div>

            {/* Mobile Menu Panel */}
            <div
                className={panelClasses}
                id="mobile-menu"
                data-testid="mobile-menu-panel"
            >
                {/* Header with Logo and Close Button */}
                <div className="flex items-center justify-between h-20 px-6 py-4 bg-[#f8f8ff]/95 backdrop-blur-sm border-b border-blue-900/20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/2b_logo_sag.png"
                            alt="2B Logo"
                            width={120}
                            height={60}
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Close Button */}
                    <button
                        type="button"
                        className={`text-gray-600 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200 ${CSS_CLASSES.focus}`}
                        onClick={closeMobileMenu}
                        data-testid="mobile-menu-close"
                    >
                        <span className="sr-only">Menüyü kapat</span>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Menu Content */}
                <div className="flex flex-col h-full overflow-y-auto bg-gradient-to-b from-[#f8f8ff]/95 to-white/90">
                    <div className="flex-1 py-6 space-y-1 px-6">
                        {/* Navigation Items */}
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className={`${CSS_CLASSES.mobileNavItem} ${CSS_CLASSES.focus}`}
                                onClick={closeMobileMenu}
                                data-testid={`mobile-nav-${item.key}`}
                            >
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                                    </svg>
                                    <span className="font-medium">{item.label}</span>
                                </div>
                            </a>
                        ))}

                        {/* Mobile About Section */}
                        <div data-testid="mobile-about-section">
                            <div className="flex items-center py-4 text-lg font-medium text-gray-700 border-b border-blue-900/20 rounded-lg">
                                <a
                                    href="/hakkimizda"
                                    className={`flex items-center flex-1 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50/50 transition-all duration-200 rounded-lg ${CSS_CLASSES.focus}`}
                                    onClick={closeMobileMenu}
                                    data-testid="mobile-about-link"
                                >
                                    <svg className="w-5 h-5 mr-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                                    </svg>
                                    <span className="font-medium">Hakkımızda</span>
                                </a>
                                <button
                                    type="button"
                                    className={`p-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50/50 transition-all duration-200 rounded-lg ${CSS_CLASSES.focus}`}
                                    onClick={toggleMobileAbout}
                                    aria-expanded={isMobileAboutOpen}
                                    data-testid="mobile-about-toggle"
                                >
                                    <svg
                                        className={`h-5 w-5 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            <div className={aboutSubmenuClasses}>
                                <div className="bg-blue-50/30 rounded-lg overflow-hidden">
                                    {ABOUT_DROPDOWN_ITEMS.map((item, index) => (
                                        <div key={item.key}>
                                            <a
                                                href={item.href}
                                                className={`${CSS_CLASSES.mobileSubItem} ${CSS_CLASSES.focus}`}
                                                onClick={closeMobileMenu}
                                                data-testid={`mobile-about-${item.key}`}
                                            >
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
                                                    </svg>
                                                    <span className="font-medium">{item.label}</span>
                                                </div>
                                            </a>
                                            {index < ABOUT_DROPDOWN_ITEMS.length - 1 && (
                                                <div className="mx-6 border-b border-blue-200"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Online Shopping Button */}
                        <div className="px-6 py-6">
                            <a
                                href={EXTERNAL_LINKS.onlineStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${CSS_CLASSES.mobileButton} ${CSS_CLASSES.focus}`}
                                onClick={closeMobileMenu}
                                data-testid="mobile-online-store"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                Online Alışveriş
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
