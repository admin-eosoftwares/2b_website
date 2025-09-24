export const scrollToWithOffset = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector<HTMLElement>('[data-testid="main-header"]');

    if (element && header) {
        const headerHeight = header.offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight - 30; // 30px padding

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    } else if (element) {
        // Fallback for safety
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
