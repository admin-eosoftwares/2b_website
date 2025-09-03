'use client';

import React, { useRef } from 'react';
import { ABOUT_DROPDOWN_ITEMS } from '../constants/navigation';
import { CSS_CLASSES } from '../constants/styles';

interface AboutDropdownProps {
    isOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    isActive: boolean;
    pathname: string;
}

const AboutDropdown = React.memo(function AboutDropdown({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    isActive,
    pathname
}: AboutDropdownProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    const dropdownContainerClasses = `
    ${CSS_CLASSES.dropdownContainer}
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `.trim();

    const dropdownContentClasses = `
    ${CSS_CLASSES.dropdownContent}
    ${isOpen ? 'max-h-96' : 'max-h-0'}
  `.trim();

    return (
        <div
            className="relative group"
            ref={dropdownRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            data-testid="about-dropdown"
        >
            <a
                href="/hakkimizda"
                className={linkClasses}
            >
                Hakkımızda
            </a>
            <span className={underlineClasses}></span>

            <div className={dropdownContainerClasses}>
                <div className={dropdownContentClasses}>
                    {ABOUT_DROPDOWN_ITEMS.map((item, index) => (
                        <div key={item.key}>
                            <a
                                href={item.href}
                                className={`${CSS_CLASSES.dropdownItem} ${CSS_CLASSES.focus}`}
                                data-testid={`dropdown-item-${item.key}`}
                            >
                                {item.label}
                            </a>
                            {index < ABOUT_DROPDOWN_ITEMS.length - 1 && (
                                <div className={CSS_CLASSES.dropdownDivider}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default AboutDropdown;
