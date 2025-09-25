// Environment variables validation utility

interface RequiredEnvVars {
    GOOGLE_VERIFICATION_CODE: string;
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
    NEXT_PUBLIC_FORMSPREE_ENDPOINT: string;
    NEXT_PUBLIC_CONTACT_EMAIL: string;
    NEXT_PUBLIC_CONTACT_PHONE: string;
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_SITE_NAME: string;
}

interface OptionalEnvVars {
    SMTP_HOST?: string;
    SMTP_PORT?: string;
    SMTP_USER?: string;
    SMTP_PASS?: string;
    CONTACT_EMAIL?: string;
}

// Required environment variables
const requiredEnvVars: (keyof RequiredEnvVars)[] = [
    'GOOGLE_VERIFICATION_CODE',
    'NEXT_PUBLIC_GA_MEASUREMENT_ID',
    'NEXT_PUBLIC_FORMSPREE_ENDPOINT',
    'NEXT_PUBLIC_CONTACT_EMAIL',
    'NEXT_PUBLIC_CONTACT_PHONE',
    'NEXT_PUBLIC_SITE_URL',
    'NEXT_PUBLIC_SITE_NAME',
];

/**
 * Validates required environment variables
 * Throws error if any required variable is missing
 */
export function validateEnvVars(): void {
    const missing: string[] = [];

    requiredEnvVars.forEach((varName) => {
        if (!process.env[varName]) {
            missing.push(varName);
        }
    });

    if (missing.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missing.join(', ')}\n` +
            'Please check your .env.local file and ensure all required variables are set.'
        );
    }
}

/**
 * Gets environment variable with fallback
 */
export function getEnvVar(key: string, fallback?: string): string {
    const value = process.env[key];
    if (!value && fallback === undefined) {
        throw new Error(`Environment variable ${key} is required but not set`);
    }
    return value || fallback || '';
}

/**
 * Gets all validated environment variables
 */
export function getValidatedEnvVars(): RequiredEnvVars & OptionalEnvVars {
    validateEnvVars();

    return {
        GOOGLE_VERIFICATION_CODE: getEnvVar('GOOGLE_VERIFICATION_CODE'),
        NEXT_PUBLIC_GA_MEASUREMENT_ID: getEnvVar('NEXT_PUBLIC_GA_MEASUREMENT_ID'),
        NEXT_PUBLIC_FORMSPREE_ENDPOINT: getEnvVar('NEXT_PUBLIC_FORMSPREE_ENDPOINT'),
        NEXT_PUBLIC_CONTACT_EMAIL: getEnvVar('NEXT_PUBLIC_CONTACT_EMAIL'),
        NEXT_PUBLIC_CONTACT_PHONE: getEnvVar('NEXT_PUBLIC_CONTACT_PHONE'),
        NEXT_PUBLIC_SITE_URL: getEnvVar('NEXT_PUBLIC_SITE_URL'),
        NEXT_PUBLIC_SITE_NAME: getEnvVar('NEXT_PUBLIC_SITE_NAME'),
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASS: process.env.SMTP_PASS,
        CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    };
}
