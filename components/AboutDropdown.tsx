'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ABOUT_DROPDOWN_ITEMS } from '../constants/navigation';
import { CSS_CLASSES } from '../constants/styles';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface AboutDropdownProps {
    isOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    isActive: boolean;
}

const AboutDropdown = React.memo(function AboutDropdown({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    isActive
}: AboutDropdownProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const [mounted, setMounted] = useState(false);
    const { handleClick } = useSmoothScroll();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMouseEnter = useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        onMouseEnter();
    }, [onMouseEnter]);

    const handleMouseLeave = useCallback(() => {
        closeTimeoutRef.current = setTimeout(() => {
            onMouseLeave();
        }, 150); // 150ms gecikme
    }, [onMouseLeave]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + 8,
                left: rect.left + rect.width / 2
            });
        }
    }, [isOpen]);

    const linkClasses = `
    ${CSS_CLASSES.navLink}
    ${CSS_CLASSES.navLinkDesktop}
    ${isActive ? 'text-black hover:text-blue-900 scale-105' : 'text-black hover:text-blue-900'}
    ${CSS_CLASSES.focus}
  `.trim();

    const underlineClasses = `
    ${CSS_CLASSES.underlineBase}
    ${isActive ? 'w-full bg-black group-hover:bg-blue-900' : isOpen ? 'w-full bg-blue-900' : 'w-0 bg-blue-900 group-hover:w-full'}
  `.trim();

    const dropdownContentClasses = `
    ${CSS_CLASSES.dropdownContent}
    transition-all duration-200 ease-out
    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
  `.trim();

    const dropdownMenu = isOpen && mounted ? createPortal(
        <div
            className="fixed w-56 z-[999999]"
            style={{
                top: dropdownPosition.top,
                left: dropdownPosition.left,
                transform: 'translateX(-50%)'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={dropdownContentClasses}>
                {ABOUT_DROPDOWN_ITEMS.map((item, index) => (
                    <div key={item.key}>
                        <a
                            href={item.href}
                            className={`${CSS_CLASSES.dropdownItem} ${CSS_CLASSES.focus}`}
                            data-testid={`dropdown-item-${item.key}`}
                            onClick={(e) => handleClick(e, item.href)}
                        >
                            {item.label}
                        </a>
                        {index < ABOUT_DROPDOWN_ITEMS.length - 1 && (
                            <div className={CSS_CLASSES.dropdownDivider}></div>
                        )}
                    </div>
                ))}
            </div>
        </div>,
        document.body
    ) : null;

    return (
        <div
            className="relative group"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-testid="about-dropdown"
        >
            <a
                href="/hakkimizda"
                className={linkClasses}
            >
                Hakkımızda
            </a>
            <span className={underlineClasses}></span>
            {dropdownMenu}
        </div>
    );
});

export default AboutDropdown;
