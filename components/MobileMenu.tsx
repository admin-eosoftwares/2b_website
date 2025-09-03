'use client';

import React from 'react';
import { NAV_ITEMS, ABOUT_DROPDOWN_ITEMS, EXTERNAL_LINKS } from '../constants/navigation';
import { CSS_CLASSES } from '../constants/styles';

interface MobileMenuProps {
    isOpen: boolean;
    isMobileAboutOpen: boolean;
    onClose: () => void;
    onToggleAbout: () => void;
}

const MobileMenu = React.memo(function MobileMenu({
    isOpen,
    isMobileAboutOpen,
    onClose,
    onToggleAbout
}: MobileMenuProps) {
    const overlayClasses = `
    ${CSS_CLASSES.mobileOverlay}
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `.trim();

    const panelClasses = `
    ${CSS_CLASSES.mobilePanel}
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  `.trim();

    const aboutSubmenuClasses = `
    transition-all duration-300 ease-in-out overflow-hidden
    ${isMobileAboutOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
  `.trim();

    return (
        <div className={overlayClasses} data-testid="mobile-menu-overlay">
            {/* Backdrop */}
            <div
                className={CSS_CLASSES.mobileBackdrop}
                onClick={onClose}
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
                        onClick={onClose}
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
                                onClick={onClose}
                                data-testid={`mobile-nav-${item.key}`}
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Mobile About Section */}
                        <div data-testid="mobile-about-section">
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between ${CSS_CLASSES.mobileNavItem} ${CSS_CLASSES.focus}`}
                                onClick={onToggleAbout}
                                aria-expanded={isMobileAboutOpen}
                                data-testid="mobile-about-toggle"
                            >
                                Hakkımızda
                                <svg
                                    className={`h-5 w-5 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={aboutSubmenuClasses}>
                                <div className="bg-gray-50 border-b border-gray-100">
                                    {ABOUT_DROPDOWN_ITEMS.map((item) => (
                                        <a
                                            key={item.key}
                                            href={item.href}
                                            className={`${CSS_CLASSES.mobileSubItem} ${CSS_CLASSES.focus}`}
                                            onClick={onClose}
                                            data-testid={`mobile-about-${item.key}`}
                                        >
                                            {item.label}
                                        </a>
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
                                onClick={onClose}
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
});

export default MobileMenu;
