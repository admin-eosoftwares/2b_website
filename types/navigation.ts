// Navigation types
import React from 'react';

export interface NavItem {
    href: string;
    label: string;
    key: string;
}

export interface DropdownItem {
    href: string;
    label: string;
    key: string;
}

export interface NavigationState {
    isMobileMenuOpen: boolean;
    isAboutDropdownOpen: boolean;
    isMobileAboutOpen: boolean;
    isLoaded: boolean;
}

export interface NavigationActions {
    toggleMobileMenu: () => void;
    toggleMobileAbout: () => void;
    closeMobileMenu: () => void;
    closeDropdown: () => void;
    setIsLoaded: (loaded: boolean) => void;
    setIsAboutDropdownOpen: (open: boolean) => void;
}

export interface UseNavigationReturn {
    // State
    isAboutDropdownOpen: boolean;
    isLoaded: boolean;

    // Actions
    closeDropdown: () => void;
    setIsLoaded: (loaded: boolean) => void;
    setIsAboutDropdownOpen: (open: boolean) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;

    // Refs
    dropdownRef: React.RefObject<HTMLDivElement | null>;
}

export type NavigationProps = {
    pathname: string;
    className?: string;
};
