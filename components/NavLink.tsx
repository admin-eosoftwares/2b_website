'use client';

import React from 'react';
import { NavItem } from '../types/navigation';
import { CSS_CLASSES } from '../constants/styles';

interface NavLinkProps {
    item: NavItem;
    isActive: boolean;
    className?: string;
    onClick?: () => void;
}

const NavLink = React.memo(function NavLink({ item, isActive, className = '', onClick }: NavLinkProps) {
    const linkClasses = `
    ${CSS_CLASSES.navLink}
    ${CSS_CLASSES.navLinkDesktop}
    ${isActive ? CSS_CLASSES.navLinkActive : CSS_CLASSES.navLinkInactive}
    ${CSS_CLASSES.focus}
    ${className}
  `.trim();

    const underlineClasses = `
    ${CSS_CLASSES.underlineBase}
    ${isActive ? CSS_CLASSES.underlineActive : CSS_CLASSES.underlineInactive}
  `.trim();


    return (
        <a
            href={item.href}
            className={linkClasses}
            onClick={onClick}
            data-testid={`nav-link-${item.key}`}
        >
            {item.label}
            <span className={underlineClasses}></span>
        </a>
    );
});

export default NavLink;
