'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const [isLoaded, setIsLoaded] = useState(false);
    const { handleClick } = useSmoothScroll();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <footer id="footer" role="contentinfo" className={`bg-[#5F67A1FF]/80 backdrop-blur border-t border-gray-200 transition-all duration-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
                <div className="flex flex-row gap-4 lg:gap-8 items-stretch px-8 lg:px-8">
                    {/* Logo + Social Media */}
                    <div className={`flex-1 space-y-4 transition-all duration-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: isLoaded ? '100ms' : '0ms' }}>
                        <div className="flex items-center">
                            <Image
                                src="/images/logos/2b_logo_sag.avif"
                                alt="2B Logo"
                                width={120}
                                height={60}
                                className="h-12 w-auto"
                            />
                        </div>

                        {/* Social Media */}
                        <div className="space-y-3">
                            <h4 className="font-medium text-white text-sm">Sosyal Medya</h4>
                            <div className="flex flex-col space-y-2">
                                <a
                                    href="https://www.instagram.com/2b_global_enerji?igsh=MTNyeDhuMjVlNGphMg=="
                                    className="flex items-center space-x-2 text-white/80 hover:text-pink-400 transition-colors group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <span className="text-sm">@2b_global_enerji</span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/hakan-ispir-049399384/"
                                    className="flex items-center space-x-2 text-white/80 hover:text-blue-500 transition-colors group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span className="text-sm">2B Global Enerji</span>
                                </a>

                                <a
                                    href="https://wa.me/905454036676"
                                    className="flex items-center space-x-2 text-white/80 hover:text-green-500 transition-colors group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                    <span className="text-sm">Sohbete başla</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className={`hidden lg:block self-stretch w-0.5 bg-white/60 transition-all duration-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: isLoaded ? '200ms' : '0ms' }}></div>

                    {/* Menu Links */}
                    <div className={`flex-1 space-y-4 hidden lg:block transition-all duration-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: isLoaded ? '300ms' : '0ms' }}>
                        <h3 className="font-medium text-white">Menü</h3>
                        <nav aria-label="Footer navigation">
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/80 hover:text-white transition-colors"
                                    >
                                        Anasayfa
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="/hakkimizda"
                                        className="text-sm text-white/80 hover:text-white transition-colors"
                                    >
                                        <span className="relative">
                                            Hakkımızda
                                            <span className="absolute -bottom-1 left-1/2 h-0.5 w-full bg-brand-700"></span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/projelerimiz"
                                        className="text-sm text-white/80 hover:text-white transition-colors"
                                    >
                                        Projelerimiz
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/iletisim"
                                        className="text-sm text-white/80 hover:text-white transition-colors"
                                    >
                                        İletişim
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Divider */}
                    <div className={`self-stretch w-0.5 bg-white/60 transition-all duration-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: isLoaded ? '400ms' : '0ms' }}></div>

                    {/* Contact Information */}
                    <div className={`flex-1 space-y-4 transition-all duration-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: isLoaded ? '500ms' : '0ms' }}>
                        <h3 className="font-medium text-white">İletişim</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a
                                    href="/iletisim#bize-ulasin"
                                    onClick={(e) => handleClick(e, '/iletisim#bize-ulasin')}
                                    className="text-sm text-white/80 hover:text-white transition-colors hover:underline"
                                >
                                    info@2bltd.com.tr
                                </a>
                            </div>
                            <a href="tel:+902423246077" className="flex items-center space-x-2 hover:text-white transition-colors group">
                                <svg className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="text-sm text-white/80 group-hover:text-white transition-colors">0242 324 60 77</span>
                            </a>
                            <a
                                href="https://maps.app.goo.gl/133QGFZSyNxvmUNC9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start space-x-2 hover:text-white transition-colors group"
                            >
                                <svg className="w-4 h-4 text-white/80 group-hover:text-white transition-colors mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                                <span className="text-sm text-white/80 group-hover:text-white transition-colors">Bahçeyaka Mah. Atatürk Cad. No 375/A<br />
                                    Döşemealtı / ANTALYA</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className={`mx-4 md:mx-32 lg:mx-48 border-t-2 border-white/60 py-1 md:py-2 text-center text-xs text-white transition-all duration-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: isLoaded ? '600ms' : '0ms' }}>
                © {currentYear} 2B Global Enerji - Tüm hakları saklıdır. | Geliştirici: <a href="https://www.linkedin.com/in/oktay-ispir-656458367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 underline hover:scale-110 hover:font-bold">Oktay İspir</a>
            </div>
        </footer>
    );
};

export default Footer;
