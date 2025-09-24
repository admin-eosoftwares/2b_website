'use client';

import React from 'react';

const SkeletonCard: React.FC = () => {
    return (
        <div className="bg-gray-50 rounded-lg p-6 text-center animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
    );
};

export default SkeletonCard;
