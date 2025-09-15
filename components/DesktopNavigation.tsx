'use client';

import React from 'react';
import NavLink from './NavLink';
import dynamic from 'next/dynamic';
import { NAV_ITEMS, EXTERNAL_LINKS } from '../constants/navigation';
import { CSS_CLASSES } from '../constants/styles';

interface DesktopNavigationProps {
    pathname: string;
    isAboutDropdownOpen: boolean;
    onAboutMouseEnter: () => void;
    onAboutMouseLeave: () => void;
}

const DynamicAboutDropdown = dynamic(() => import('./AboutDropdown'), { ssr: false });

const DesktopNavigation = React.memo(function DesktopNavigation({
    pathname,
    isAboutDropdownOpen,
    onAboutMouseEnter,
    onAboutMouseLeave
}: DesktopNavigationProps) {
    return (
        <div className="hidden lg:flex lg:items-center xl:space-x-8 lg:space-x-4" data-testid="desktop-navigation">
            {/* Navigation Items */}
            {NAV_ITEMS.map((item) => (
                <NavLink
                    key={item.key}
                    item={item}
                    isActive={pathname === item.href}
                />
            ))}

            {/* About Dropdown */}
            <DynamicAboutDropdown
                isOpen={isAboutDropdownOpen}
                onMouseEnter={onAboutMouseEnter}
                onMouseLeave={onAboutMouseLeave}
                isActive={pathname.startsWith('/hakkimizda')}
            />

            {/* Online Shopping Button */}
            <div className="hidden lg:block">
                <a
                    href={EXTERNAL_LINKS.onlineStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${CSS_CLASSES.primaryButton} xl:px-4 lg:px-3 xl:text-sm lg:text-xs ${CSS_CLASSES.focus}`}
                    data-testid="desktop-online-store"
                >
                    Online Alışveriş
                </a>
            </div>
        </div>
    );
});

export default DesktopNavigation;
