// CSS class constants for Header component
export const CSS_CLASSES = {
    // Focus styles
    focus: "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",

    // Navigation link styles
    navLink: "font-semibold transition-all duration-300 transform hover:scale-105 relative group",
    navLinkDesktop: "xl:text-base lg:text-sm xl:px-3 lg:px-2",
    navLinkActive: "text-black hover:text-blue-900",
    navLinkInactive: "text-black hover:text-blue-900",

    // Underline animation
    underlineBase: "absolute -bottom-1 left-1/2 h-0.5 transition-all duration-300 transform -translate-x-1/2",
    underlineActive: "w-full bg-black group-hover:bg-blue-900",
    underlineInactive: "w-0 bg-blue-900 group-hover:w-full",

    // Dropdown styles
    dropdownContainer: "absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-56 transition-all duration-300 ease-in-out",
    dropdownContent: "rounded-xl bg-[#f8f8ff]/97 backdrop-blur shadow-lg p-2 overflow-hidden transition-all duration-300 ease-in-out",
    dropdownItem: "block px-4 py-3 text-sm font-medium text-gray-800 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-200",
    dropdownDivider: "border-t border-gray-200 my-1",

    // Mobile menu styles
    mobileOverlay: "lg:hidden fixed inset-0 z-[9999] transition-opacity duration-300 ease-in-out",
    mobileBackdrop: "absolute inset-0",
    mobilePanel: "absolute right-0 top-0 h-screen w-[62.5vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out",
    mobileHeader: "flex items-center justify-between h-24 px-6 py-0 border-b-2 border-blue-900 bg-[#f8f8ff]",
    mobileNavItem: "block px-6 py-4 text-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors border-b border-blue-900 mx-8",
    mobileSubItem: "block px-8 py-3 text-base text-gray-600 hover:text-blue-700 hover:bg-white transition-colors mx-8",

    // Button styles
    primaryButton: "inline-flex items-center rounded-lg bg-blue-900 px-4 py-2 text-white font-medium hover:bg-blue-800 transition-all duration-300 transform hover:scale-105",
    mobileButton: "inline-flex items-center justify-center w-full rounded-lg bg-blue-900 px-6 py-4 text-white text-lg font-medium hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg",

    // Header styles
    header: "sticky top-0 z-50 bg-[#f8f8ff]/90 transition-all duration-300 ease-out",
    headerLoaded: "translate-y-0 opacity-100",
    headerLoading: "translate-y-4 opacity-0",

    // Container styles
    container: "container mx-auto px-4 sm:px-6 lg:px-12",
    headerContent: "flex items-center justify-between h-20 py-12"
} as const;
