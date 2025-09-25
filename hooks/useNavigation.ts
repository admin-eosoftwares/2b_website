'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { UseNavigationReturn } from '../types/navigation';
import { ANIMATION_DURATIONS } from '../constants/navigation';

export const useNavigation = (): UseNavigationReturn => {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Initialize header animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, ANIMATION_DURATIONS.headerLoad);

        return () => clearTimeout(timer);
    }, []);

    // Handle outside clicks and escape key
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsAboutDropdownOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsAboutDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    // Actions
    const closeDropdown = useCallback(() => {
        setIsAboutDropdownOpen(false);
    }, []);

    const handleMouseEnter = useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setIsAboutDropdownOpen(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        closeTimeoutRef.current = setTimeout(() => {
            setIsAboutDropdownOpen(false);
        }, 150); // 150ms gecikme
    }, []);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    return {
        // State
        isAboutDropdownOpen,
        isLoaded,

        // Actions
        closeDropdown,
        setIsLoaded,
        setIsAboutDropdownOpen,
        handleMouseEnter,
        handleMouseLeave,

        // Refs
        dropdownRef
    };
};
