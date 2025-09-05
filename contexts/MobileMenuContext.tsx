'use client';

import React, { createContext, useContext, useState } from 'react';

interface MobileMenuContextType {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;
    isMobileAboutOpen: boolean;
    toggleMobileAbout: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleMobileAbout = () => {
        setIsMobileAboutOpen(prev => !prev);
    };

    return (
        <MobileMenuContext.Provider value={{
            isMobileMenuOpen,
            toggleMobileMenu,
            closeMobileMenu,
            isMobileAboutOpen,
            toggleMobileAbout
        }}>
            {children}
        </MobileMenuContext.Provider>
    );
}

export function useMobileMenu() {
    const context = useContext(MobileMenuContext);
    if (context === undefined) {
        throw new Error('useMobileMenu must be used within a MobileMenuProvider');
    }
    return context;
}
