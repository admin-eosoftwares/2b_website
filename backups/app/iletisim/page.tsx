'use client';

import { useState, useEffect } from 'react';
import PageErrorBoundary from '../../components/PageErrorBoundary';
import SafeComponent, { SafeComponentFallbacks } from '../../components/SafeComponent';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useAnalytics } from '../../components/GoogleAnalytics';

export default function Iletisim() {
    // Analytics hook
    const { trackEvent } = useAnalytics();

    // Scroll animasyonları için hook'lar
    const { elementRef: iletisimRef, isVisible: iletisimVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: iletisimContentRef, isVisible: iletisimContentVisible } = useScrollAnimation({ delay: 100 });
    const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation({ delay: 150 });

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});



    // Form validation
    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Ad Soyad gereklidir';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'E-posta gereklidir';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Geçerli bir e-posta adresi giriniz';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Telefon numarası gereklidir';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Konu gereklidir';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Mesaj gereklidir';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Form input handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Form submit handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Track form submission attempt
        trackEvent('form_submit_attempt', 'Contact Form', 'İletişim Formu');

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Track successful form submission
                trackEvent('form_submit_success', 'Contact Form', 'İletişim Formu');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
                // Track form submission error
                trackEvent('form_submit_error', 'Contact Form', 'İletişim Formu');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        // For navigation from other pages, based on URL hash
        const hash = window.location.hash;
        if (hash === '#bize-ulasin') {
            // Scroll to contact form
        }

        // For same-page navigation, based on custom event
        const handleInternalNav = (event: CustomEvent) => {
            if (event.detail.id === 'bize-ulasin') {
                // Scroll to contact form
            }
        };

        window.addEventListener('internal-nav', handleInternalNav as EventListener);

        return () => {
            window.removeEventListener('internal-nav', handleInternalNav as EventListener);
        };
    }, []);

    return (
        <PageErrorBoundary pageName="İletişim">
            <div className="min-h-screen bg-[#f8f8ff] relative">
                <div className="container mx-auto px-4 py-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* İletişim Section */}
                        <div
                            ref={iletisimRef}
                            className={`mb-32 transition-all duration-500 ease-out scroll-mt-24 ${iletisimVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="text-center mb-12">
                                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                                    İletişim
                                </h1>
                                <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
                            </div>

                            <div
                                ref={iletisimContentRef}
                                className={`grid lg:grid-cols-2 gap-12 transition-all duration-500 ease-out ${iletisimContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            >
                                {/* İletişim Bilgileri */}
                                <div className="space-y-8">
                                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                                    İletişim Bilgileri
                                                </h3>
                                                <div className="w-16 h-1 bg-blue-900 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <a href="mailto:info@2bltd.com.tr" className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer block">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">E-posta</h3>
                                                        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">info@2bltd.com.tr</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="tel:+902423246077" className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-green-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer block">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">Telefon</h3>
                                                        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">0242 324 60 77</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="https://maps.app.goo.gl/133QGFZSyNxvmUNC9" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer block">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Adres</h3>
                                                        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                                            Bahçeyaka, Atatürk Blv. No:375<br />
                                                            07190 Döşemealtı/Antalya
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                            {/* Harita */}
                                            <div className="mt-6">
                                                <SafeComponent
                                                    componentName="Map"
                                                    fallback={SafeComponentFallbacks.Map}
                                                >
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12744.60863893867!2d30.590168186860343!3d37.00616620007739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38bd08c401b53%3A0x7e1474bd4cbfbc78!2zMkIgR0xPQkFMIEVORVJKxLAgU0FOLiBUxLBDLiBMVEQuIMWeVMSwLg!5e0!3m2!1str!2str!4v1756815338561!5m2!1str!2str"
                                                        width="100%"
                                                        height="200"
                                                        style={{ border: 0 }}
                                                        allowFullScreen
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                        className="rounded-lg shadow-md"
                                                        title="2B Global Enerji Konumu"
                                                    ></iframe>
                                                </SafeComponent>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sosyal Medya */}
                                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8m-8 0H5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1h-2M9 9h6M9 13h6M9 17h4" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                                    Sosyal Medya
                                                </h3>
                                                <div className="w-16 h-1 bg-blue-900 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <a href="https://www.instagram.com/2b_global_enerji?igsh=MTNyeDhuMjVlNGphMg==" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl p-4 border border-gray-200 hover:border-pink-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300" style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}>
                                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-pink-700 transition-colors duration-300">Instagram</h3>
                                                        <p className="text-sm text-gray-600 group-hover:text-pink-600 transition-colors duration-300">@2b_global_enerji</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="https://www.linkedin.com/in/hakan-ispir-049399384/" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300" style={{ backgroundColor: '#0077B5' }}>
                                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">LinkedIn</h3>
                                                        <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">2B Global Enerji</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="https://wa.me/905454036676" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl p-4 border border-gray-200 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300" style={{ backgroundColor: '#25D366' }}>
                                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">WhatsApp</h3>
                                                        <p className="text-sm text-gray-600 group-hover:text-green-600 transition-colors duration-300">Sohbete başla</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* İletişim Formu */}
                                <SafeComponent
                                    componentName="ContactForm"
                                    fallback={SafeComponentFallbacks.ContactForm}
                                >
                                    <div
                                        ref={formRef}
                                        id="bize-ulasin"
                                        className={`bg-white rounded-xl shadow-sm p-8 border border-gray-100 ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                    >
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                                    Bize Ulaşın
                                                </h3>
                                                <div className="w-16 h-1 bg-blue-900 rounded-full"></div>
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="hover:scale-[1.02] transition-all duration-300">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Ad Soyad
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-md transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="Adınız ve soyadınız"
                                                />
                                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                            </div>

                                            <div className="hover:scale-[1.02] transition-all duration-300">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                    E-posta
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-md transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="E-posta adresiniz"
                                                />
                                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                            </div>

                                            <div className="hover:scale-[1.02] transition-all duration-300">
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Telefon
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-md transition-all duration-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="Telefon numaranız"
                                                />
                                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                            </div>

                                            <div className="hover:scale-[1.02] transition-all duration-300">
                                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Konu
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-md transition-all duration-300 ${errors.subject ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="Mesaj konusu"
                                                />
                                                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                            </div>

                                            <div className="hover:scale-[1.02] transition-all duration-300">
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Mesaj
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-md transition-all duration-300 ${errors.message ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="Mesajınızı yazın..."
                                                ></textarea>
                                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${isSubmitting
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : 'bg-blue-900 hover:bg-blue-800 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]'
                                                    } text-white`}
                                            >
                                                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                                            </button>
                                        </form>

                                        {/* Status Messages */}
                                        {submitStatus === 'success' && (
                                            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                                <p className="font-medium">Mesajınız başarıyla gönderildi!</p>
                                                <p className="text-sm">En kısa sürede size dönüş yapacağız.</p>
                                            </div>
                                        )}

                                        {submitStatus === 'error' && (
                                            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                                <p className="font-medium">Mesaj gönderilirken bir hata oluştu.</p>
                                                <p className="text-sm">Lütfen tekrar deneyin veya telefon ile iletişime geçin.</p>
                                            </div>
                                        )}

                                        {/* Teşekkür Mesajı */}
                                        <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                                            <div className="flex items-center mb-4">
                                                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-lg font-semibold text-blue-900">Teşekkürler</h4>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed text-base">
                                                Fikirleriniz ve geri dönüşleriniz bizler için çok kıymetli.
                                                Bizimle iletişime geçtiğiniz için teşekkür ederiz.
                                            </p>
                                        </div>
                                    </div>
                                </SafeComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageErrorBoundary>
    );
}
