// Rate limiting utility for API routes

interface RateLimitConfig {
    windowMs: number; // Time window in milliseconds
    maxRequests: number; // Maximum requests per window
    message: string; // Error message
}

interface RateLimitStore {
    [key: string]: {
        count: number;
        resetTime: number;
    };
}

// In-memory store (in production, use Redis or similar)
const store: RateLimitStore = {};

// Clean up expired entries every 5 minutes
setInterval(() => {
    const now = Date.now();
    Object.keys(store).forEach(key => {
        if (store[key].resetTime < now) {
            delete store[key];
        }
    });
}, 5 * 60 * 1000);

export function createRateLimiter(config: RateLimitConfig) {
    return (identifier: string): { allowed: boolean; remaining: number; resetTime: number } => {
        const now = Date.now();
        const key = identifier;

        // Get or create entry
        let entry = store[key];
        if (!entry || entry.resetTime < now) {
            entry = {
                count: 0,
                resetTime: now + config.windowMs
            };
            store[key] = entry;
        }

        // Check if limit exceeded
        if (entry.count >= config.maxRequests) {
            return {
                allowed: false,
                remaining: 0,
                resetTime: entry.resetTime
            };
        }

        // Increment counter
        entry.count++;

        return {
            allowed: true,
            remaining: config.maxRequests - entry.count,
            resetTime: entry.resetTime
        };
    };
}

// Predefined rate limiters
export const contactFormRateLimit = createRateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5, // 5 requests per 15 minutes
    message: 'Çok fazla istek gönderdiniz. Lütfen 15 dakika sonra tekrar deneyin.'
});

export const generalApiRateLimit = createRateLimiter({
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 60, // 60 requests per minute
    message: 'Çok fazla istek gönderdiniz. Lütfen bir dakika sonra tekrar deneyin.'
});

// Get client IP from request
export function getClientIP(request: Request): string {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');

    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }

    if (realIP) {
        return realIP;
    }

    // Fallback to a default identifier
    return 'unknown';
}
