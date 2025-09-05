'use client';

import React, { useEffect } from 'react';
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
                {/* Header with Close Button */}
                <div className={CSS_CLASSES.mobileHeader}>
                    <h2 className="text-lg font-semibold text-gray-800">Menü</h2>
                    <button
                        type="button"
                        className={`text-gray-500 hover:text-gray-700 p-2 ${CSS_CLASSES.focus}`}
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
                <div className="flex flex-col h-full overflow-y-auto">
                    <div className="flex-1 py-6 space-y-2">
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
                                    <svg className="w-4 h-4 mr-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                                    </svg>
                                    {item.label}
                                </div>
                            </a>
                        ))}

                        {/* Mobile About Section */}
                        <div data-testid="mobile-about-section">
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between px-6 py-4 text-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors mx-8 ${CSS_CLASSES.focus}`}
                                onClick={toggleMobileAbout}
                                aria-expanded={isMobileAboutOpen}
                                data-testid="mobile-about-toggle"
                            >
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                                    </svg>
                                    <span>Hakkımızda</span>
                                </div>
                                <svg
                                    className={`h-5 w-5 mr-8 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="mx-8 border-b border-blue-900"></div>

                            <div className={aboutSubmenuClasses}>
                                <div className="bg-gray-50 border-b border-gray-100">
                                    {ABOUT_DROPDOWN_ITEMS.map((item, index) => (
                                        <div key={item.key}>
                                            <a
                                                href={item.href}
                                                className={`${CSS_CLASSES.mobileSubItem} ${CSS_CLASSES.focus}`}
                                                onClick={closeMobileMenu}
                                                data-testid={`mobile-about-${item.key}`}
                                            >
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
                                                        <path d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 9H7a1 1 0 010-2h7.586L12.293 4.707a1 1 0 010-1.414z" />
                                                    </svg>
                                                    {item.label}
                                                </div>
                                            </a>
                                            <div className="ml-12 w-48 border-b border-blue-900"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Online Shopping Button */}
                        <div className="px-6 py-4 border-b border-gray-100">
                            <a
                                href={EXTERNAL_LINKS.onlineStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${CSS_CLASSES.mobileButton} ${CSS_CLASSES.focus}`}
                                onClick={closeMobileMenu}
                                data-testid="mobile-online-store"
                            >
                                Online Alışveriş
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
