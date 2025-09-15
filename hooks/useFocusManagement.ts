'use client';

import { useEffect, useRef } from 'react';

export function useFocusManagement() {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    const trapFocus = (element: HTMLElement) => {
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        };

        element.addEventListener('keydown', handleTabKey);
        firstFocusableElement?.focus();

        return () => {
            element.removeEventListener('keydown', handleTabKey);
        };
    };

    const restoreFocus = (previousElement: HTMLElement | null) => {
        if (previousElement) {
            previousElement.focus();
        }
    };

    const getFocusableElements = (container: HTMLElement) => {
        return Array.from(container.querySelectorAll(focusableElements)) as HTMLElement[];
    };

    const setFocusOrder = (elements: HTMLElement[]) => {
        elements.forEach((element, index) => {
            element.setAttribute('tabindex', (index + 1).toString());
        });
    };

    return {
        trapFocus,
        restoreFocus,
        getFocusableElements,
        setFocusOrder
    };
}
