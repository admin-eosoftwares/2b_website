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

export interface UseNavigationReturn extends NavigationState, NavigationActions {
    dropdownRef: React.RefObject<HTMLDivElement>;
}

export type NavigationProps = {
    pathname: string;
    className?: string;
};
