'use client';

import React, { useState } from 'react';

interface ErrorTestComponentProps {
    shouldThrow?: boolean;
    errorMessage?: string;
}

const ErrorTestComponent: React.FC<ErrorTestComponentProps> = ({
    shouldThrow = false,
    errorMessage = 'Test hatası'
}) => {
    const [count, setCount] = useState(0);

    if (shouldThrow) {
        throw new Error(errorMessage);
    }

    return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 m-4">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Error Test Component
            </h3>
            <p className="text-yellow-700 mb-4">
                Bu bileşen ErrorBoundary testleri için kullanılır.
            </p>
            <div className="space-y-2">
                <p className="text-sm text-yellow-600">
                    Sayaç: {count}
                </p>
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700"
                >
                    Artır
                </button>
            </div>
        </div>
    );
};

export default ErrorTestComponent;
