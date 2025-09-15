'use client';

import React from 'react';

export default function SkipLinks() {
    const skipLinks = [
        { href: '#main-content', text: 'Ana içeriğe geç' },
        { href: '#navigation', text: 'Navigasyona geç' },
        { href: '#contact-form', text: 'İletişim formuna geç' },
        { href: '#footer', text: 'Alt bilgiye geç' }
    ];

    return (
        <div className="skip-links">
            {skipLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-900 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href) as HTMLElement;
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                            if (element.focus) {
                                element.focus();
                            }
                        }
                    }}
                >
                    {link.text}
                </a>
            ))}
        </div>
    );
}
