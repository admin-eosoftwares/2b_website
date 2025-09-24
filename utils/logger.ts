// Error logging and monitoring system

export enum LogLevel {
    ERROR = 'error',
    WARN = 'warn',
    INFO = 'info',
    DEBUG = 'debug'
}

export interface LogEntry {
    timestamp: string;
    level: LogLevel;
    message: string;
    context?: Record<string, any>;
    stack?: string;
    userId?: string;
    sessionId?: string;
    requestId?: string;
}

class Logger {
    private isDevelopment = process.env.NODE_ENV === 'development';
    private isProduction = process.env.NODE_ENV === 'production';

    private formatLog(entry: LogEntry): string {
        const { timestamp, level, message, context, stack } = entry;
        let logString = `[${timestamp}] ${level.toUpperCase()}: ${message}`;

        if (context && Object.keys(context).length > 0) {
            logString += `\nContext: ${JSON.stringify(context, null, 2)}`;
        }

        if (stack) {
            logString += `\nStack: ${stack}`;
        }

        return logString;
    }

    private log(level: LogLevel, message: string, context?: Record<string, any>, error?: Error) {
        const entry: LogEntry = {
            timestamp: new Date().toISOString(),
            level,
            message,
            context,
            stack: error?.stack,
            requestId: context?.requestId,
            userId: context?.userId,
            sessionId: context?.sessionId
        };

        // Console logging for development
        if (this.isDevelopment) {
            const formattedLog = this.formatLog(entry);
            switch (level) {
                case LogLevel.ERROR:
                    console.error(formattedLog);
                    break;
                case LogLevel.WARN:
                    console.warn(formattedLog);
                    break;
                case LogLevel.INFO:
                    console.info(formattedLog);
                    break;
                case LogLevel.DEBUG:
                    console.debug(formattedLog);
                    break;
            }
        }

        // Production logging (you can integrate with external services here)
        if (this.isProduction) {
            this.sendToExternalService(entry);
        }
    }

    private async sendToExternalService(entry: LogEntry) {
        try {
            // Here you can integrate with services like:
            // - Sentry
            // - LogRocket
            // - DataDog
            // - Custom logging endpoint

            // For now, we'll just log to console in production
            // In a real implementation, you'd send to your logging service
            console.log(JSON.stringify(entry));

            // Example Sentry integration:
            // if (entry.level === LogLevel.ERROR) {
            //     Sentry.captureException(new Error(entry.message), {
            //         extra: entry.context,
            //         tags: {
            //             level: entry.level,
            //             requestId: entry.requestId
            //         }
            //     });
            // }
        } catch (error) {
            console.error('Failed to send log to external service:', error);
        }
    }

    error(message: string, context?: Record<string, any>, error?: Error) {
        this.log(LogLevel.ERROR, message, context, error);
    }

    warn(message: string, context?: Record<string, any>) {
        this.log(LogLevel.WARN, message, context);
    }

    info(message: string, context?: Record<string, any>) {
        this.log(LogLevel.INFO, message, context);
    }

    debug(message: string, context?: Record<string, any>) {
        this.log(LogLevel.DEBUG, message, context);
    }

    // API specific logging
    logApiRequest(method: string, url: string, statusCode: number, duration: number, context?: Record<string, any>) {
        this.info(`API Request: ${method} ${url}`, {
            ...context,
            method,
            url,
            statusCode,
            duration: `${duration}ms`
        });
    }

    logApiError(method: string, url: string, error: Error, context?: Record<string, any>) {
        this.error(`API Error: ${method} ${url}`, {
            ...context,
            method,
            url
        }, error);
    }

    // Form specific logging
    logFormSubmission(formName: string, success: boolean, context?: Record<string, any>) {
        if (success) {
            this.info(`Form submission successful: ${formName}`, context);
        } else {
            this.error(`Form submission failed: ${formName}`, context);
        }
    }

    // Performance logging
    logPerformance(operation: string, duration: number, context?: Record<string, any>) {
        this.info(`Performance: ${operation}`, {
            ...context,
            operation,
            duration: `${duration}ms`
        });
    }
}

// Export singleton instance
export const logger = new Logger();

// Utility functions for common logging patterns
export const logError = (message: string, error?: Error, context?: Record<string, any>) => {
    logger.error(message, context, error);
};

export const logApiRequest = (method: string, url: string, statusCode: number, duration: number, context?: Record<string, any>) => {
    logger.logApiRequest(method, url, statusCode, duration, context);
};

export const logApiError = (method: string, url: string, error: Error, context?: Record<string, any>) => {
    logger.logApiError(method, url, error, context);
};

export const logFormSubmission = (formName: string, success: boolean, context?: Record<string, any>) => {
    logger.logFormSubmission(formName, success, context);
};
