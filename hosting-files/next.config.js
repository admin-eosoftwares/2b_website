/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    assetPrefix: '',
    basePath: '',
    images: {
        unoptimized: true, // Static export için gerekli
        formats: ['image/webp', 'image/avif'], // Modern formatları destekle
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Responsive boyutlar
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Küçük boyutlar
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    // Headers are handled by .htaccess file for static export
    // Note: Headers configuration is disabled for static export
    // Security headers are configured in .htaccess file instead

    // Environment variables validation
    env: {
        GOOGLE_VERIFICATION_CODE: process.env.GOOGLE_VERIFICATION_CODE,
        NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
        NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
        NEXT_PUBLIC_CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE,
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
        NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    },
};

module.exports = nextConfig;
