'use client';

import React from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    [key: string]: string;
}

interface AccessibleFormProps {
    onSubmit: (data: FormData) => void;
    isSubmitting: boolean;
    submitStatus: 'idle' | 'success' | 'error';
    errors: { [key: string]: string };
    formData: FormData;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function AccessibleForm({
    onSubmit,
    isSubmitting,
    submitStatus,
    errors,
    formData,
    onInputChange
}: AccessibleFormProps) {
    // Removed unused focusedField state

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const getFieldId = (name: string) => `${name}-field`;
    const getErrorId = (name: string) => `${name}-error`;
    const getDescriptionId = (name: string) => `${name}-description`;

    const formFields = [
        {
            name: 'name',
            label: 'Ad Soyad',
            type: 'text',
            required: true,
            description: 'Lütfen adınızı ve soyadınızı giriniz'
        },
        {
            name: 'email',
            label: 'E-posta',
            type: 'email',
            required: true,
            description: 'Geçerli bir e-posta adresi giriniz'
        },
        {
            name: 'phone',
            label: 'Telefon',
            type: 'tel',
            required: true,
            description: 'Telefon numaranızı giriniz'
        },
        {
            name: 'subject',
            label: 'Konu',
            type: 'text',
            required: true,
            description: 'Mesajınızın konusunu belirtiniz'
        }
    ];

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-label="İletişim formu"
            noValidate
        >
            {/* Form Status Messages */}
            {submitStatus === 'success' && (
                <div
                    role="alert"
                    className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
                    aria-live="polite"
                >
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Mesajınız başarıyla gönderildi!
                    </div>
                </div>
            )}

            {submitStatus === 'error' && (
                <div
                    role="alert"
                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg"
                    aria-live="assertive"
                >
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                    </div>
                </div>
            )}

            {/* Form Fields */}
            {formFields.map((field) => (
                <div key={field.name} className="space-y-2">
                    <label
                        htmlFor={getFieldId(field.name)}
                        className="block text-sm font-medium text-gray-700"
                    >
                        {field.label}
                        {field.required && (
                            <span className="text-red-500 ml-1" aria-label="zorunlu alan">*</span>
                        )}
                    </label>

                    <input
                        id={getFieldId(field.name)}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name] || ''}
                        onChange={onInputChange}
                        onFocus={() => { }}
                        onBlur={() => { }}
                        required={field.required}
                        aria-required={field.required}
                        aria-describedby={`${getDescriptionId(field.name)} ${errors[field.name] ? getErrorId(field.name) : ''}`}
                        aria-invalid={!!errors[field.name]}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors[field.name]
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-300 bg-white'
                            }`}
                        placeholder={field.description}
                    />

                    {/* Field Description */}
                    <div
                        id={getDescriptionId(field.name)}
                        className="text-sm text-gray-500"
                    >
                        {field.description}
                    </div>

                    {/* Error Message */}
                    {errors[field.name] && (
                        <div
                            id={getErrorId(field.name)}
                            role="alert"
                            aria-live="polite"
                            className="text-sm text-red-600 flex items-center"
                        >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors[field.name]}
                        </div>
                    )}
                </div>
            ))}

            {/* Message Field */}
            <div className="space-y-2">
                <label
                    htmlFor="message-field"
                    className="block text-sm font-medium text-gray-700"
                >
                    Mesaj
                    <span className="text-red-500 ml-1" aria-label="zorunlu alan">*</span>
                </label>

                <textarea
                    id="message-field"
                    name="message"
                    value={formData.message || ''}
                    onChange={onInputChange}
                    onFocus={() => { }}
                    onBlur={() => { }}
                    required
                    aria-required
                    aria-describedby={`message-description ${errors.message ? 'message-error' : ''}`}
                    aria-invalid={!!errors.message}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical ${errors.message
                        ? 'border-red-300 bg-red-50'
                        : 'border-gray-300 bg-white'
                        }`}
                    placeholder="Mesajınızı buraya yazınız..."
                />

                <div
                    id="message-description"
                    className="text-sm text-gray-500"
                >
                    Detaylı mesajınızı yazınız
                </div>

                {errors.message && (
                    <div
                        id="message-error"
                        role="alert"
                        aria-live="polite"
                        className="text-sm text-red-600 flex items-center"
                    >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.message}
                    </div>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                aria-describedby="submit-description"
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'
                    } text-white focus:outline-none focus:ring-2`}
            >
                {isSubmitting ? (
                    <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Gönderiliyor...
                    </div>
                ) : (
                    'Mesaj Gönder'
                )}
            </button>

            <div
                id="submit-description"
                className="text-sm text-gray-500 text-center"
            >
                {isSubmitting
                    ? 'Mesajınız gönderiliyor, lütfen bekleyin...'
                    : 'Formu doldurduktan sonra mesajınızı gönderebilirsiniz'
                }
            </div>
        </form>
    );
}
