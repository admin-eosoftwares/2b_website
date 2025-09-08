// Navigation constants
export const NAV_ITEMS = [
    { href: '/', label: 'Anasayfa', key: 'home' },
    { href: '/projelerimiz', label: 'Projelerimiz', key: 'projects' },
    { href: '/iletisim', label: 'İletişim', key: 'contact' }
] as const;

export const ABOUT_DROPDOWN_ITEMS = [
    { href: '/hakkimizda#biz-kimiz', label: 'Biz kimiz?', key: 'about' },
    { href: '/hakkimizda#vizyon-misyon', label: 'Vizyon & Misyon', key: 'vision' },
    { href: '/hakkimizda#markalarimiz', label: 'Markalarımız', key: 'brands' }
] as const;

export const EXTERNAL_LINKS = {
    onlineStore: 'https://www.gunes-sepeti.com'
} as const;

// Animation constants
export const ANIMATION_DURATIONS = {
    headerLoad: 400,
    dropdown: 300,
    mobileMenu: 300,
    hover: 300
} as const;
