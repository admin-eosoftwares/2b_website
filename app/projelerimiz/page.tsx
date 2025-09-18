'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import PageErrorBoundary from '../../components/PageErrorBoundary';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Projelerimiz() {
    // Fotoğraf slider için state'ler
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // İkinci proje için state'ler
    const [secondProjectImageIndex, setSecondProjectImageIndex] = useState(0);
    const [isSecondProjectAutoPlay, setIsSecondProjectAutoPlay] = useState(true);

    // Üçüncü proje için state'ler
    const [thirdProjectImageIndex, setThirdProjectImageIndex] = useState(0);
    const [isThirdProjectAutoPlay, setIsThirdProjectAutoPlay] = useState(true);

    // Dördüncü proje için state'ler
    const [fourthProjectImageIndex, setFourthProjectImageIndex] = useState(0);
    const [isFourthProjectAutoPlay, setIsFourthProjectAutoPlay] = useState(true);

    // Beşinci proje için state'ler (eski üçüncü proje)
    const [fifthProjectImageIndex, setFifthProjectImageIndex] = useState(0);
    const [isFifthProjectAutoPlay, setIsFifthProjectAutoPlay] = useState(true);

    // Altıncı proje için state'ler
    const [sixthProjectImageIndex, setSixthProjectImageIndex] = useState(0);
    const [isSixthProjectAutoPlay, setIsSixthProjectAutoPlay] = useState(true);

    // Yedinci proje için state'ler
    const [seventhProjectImageIndex, setSeventhProjectImageIndex] = useState(0);
    const [isSeventhProjectAutoPlay, setIsSeventhProjectAutoPlay] = useState(true);

    // Sekizinci proje için state'ler
    const [eighthProjectImageIndex, setEighthProjectImageIndex] = useState(0);
    const [isEighthProjectAutoPlay, setIsEighthProjectAutoPlay] = useState(true);

    // Dokuzuncu proje için state'ler
    const [ninthProjectImageIndex, setNinthProjectImageIndex] = useState(0);
    const [isNinthProjectAutoPlay, setIsNinthProjectAutoPlay] = useState(true);

    // Onuncu proje için state'ler
    const [tenthProjectImageIndex, setTenthProjectImageIndex] = useState(0);
    const [isTenthProjectAutoPlay, setIsTenthProjectAutoPlay] = useState(true);

    // On birinci proje için state'ler
    const [eleventhProjectImageIndex, setEleventhProjectImageIndex] = useState(0);
    const [isEleventhProjectAutoPlay, setIsEleventhProjectAutoPlay] = useState(true);

    // On ikinci proje için state'ler
    const [twelfthProjectImageIndex, setTwelfthProjectImageIndex] = useState(0);
    const [isTwelfthProjectAutoPlay, setIsTwelfthProjectAutoPlay] = useState(true);

    // On üçüncü proje için state'ler
    const [thirteenthProjectImageIndex, setThirteenthProjectImageIndex] = useState(0);
    const [isThirteenthProjectAutoPlay, setIsThirteenthProjectAutoPlay] = useState(true);

    // On dördüncü proje için state'ler
    const [fourteenthProjectImageIndex, setFourteenthProjectImageIndex] = useState(0);
    const [isFourteenthProjectAutoPlay, setIsFourteenthProjectAutoPlay] = useState(true);

    // On beşinci proje için state'ler
    const [fifteenthProjectImageIndex, setFifteenthProjectImageIndex] = useState(0);
    const [isFifteenthProjectAutoPlay, setIsFifteenthProjectAutoPlay] = useState(true);

    // Scroll animasyonları için hook'lar
    const { elementRef: realProjectRef, isVisible: realProjectVisible } = useScrollAnimation({ delay: 0 });
    const { elementRef: secondProjectRef, isVisible: secondProjectVisible } = useScrollAnimation({ delay: 10 });
    const { elementRef: thirdProjectRef, isVisible: thirdProjectVisible } = useScrollAnimation({ delay: 20 });
    const { elementRef: fourthProjectRef, isVisible: fourthProjectVisible } = useScrollAnimation({ delay: 30 });
    const { elementRef: fifthProjectRef, isVisible: fifthProjectVisible } = useScrollAnimation({ delay: 40 });
    const { elementRef: sixthProjectRef, isVisible: sixthProjectVisible } = useScrollAnimation({ delay: 50 });
    const { elementRef: seventhProjectRef, isVisible: seventhProjectVisible } = useScrollAnimation({ delay: 60 });
    const { elementRef: eighthProjectRef, isVisible: eighthProjectVisible } = useScrollAnimation({ delay: 70 });
    const { elementRef: ninthProjectRef, isVisible: ninthProjectVisible } = useScrollAnimation({ delay: 80 });
    const { elementRef: tenthProjectRef, isVisible: tenthProjectVisible } = useScrollAnimation({ delay: 90 });
    const { elementRef: eleventhProjectRef, isVisible: eleventhProjectVisible } = useScrollAnimation({ delay: 100 });
    const { elementRef: twelfthProjectRef, isVisible: twelfthProjectVisible } = useScrollAnimation({ delay: 110 });
    const { elementRef: thirteenthProjectRef, isVisible: thirteenthProjectVisible } = useScrollAnimation({ delay: 120 });
    const { elementRef: fourteenthProjectRef, isVisible: fourteenthProjectVisible } = useScrollAnimation({ delay: 130 });
    const { elementRef: fifteenthProjectRef, isVisible: fifteenthProjectVisible } = useScrollAnimation({ delay: 140 });
    const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ delay: 0 });

    // Gerçek proje verisi
    const realProject = {
        title: "Otel GES Kurulumu",
        description: "Otel çatısına kurulan 200 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/kairos-valley-ges.jpg",
            "/kairos-valley-ges2.jpg"
        ],
        details: {
            capacity: "200 kWp",
            panels: "500 adet",
            annualProduction: "300 MWh",
            completionYear: "2024",
            location: "Datça / Muğla"
        }
    };

    // İkinci proje verisi
    const secondProject = {
        title: "Petrol İstasyonu GES Kurulumu",
        description: "Endüstriyel tesis çatısına kurulan 150 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/petrolofisi_ges1.jpg",
            "/petrolofisi_ges2.jpg"
        ],
        details: {
            capacity: "150 kWp",
            panels: "64 adet",
            annualProduction: "225 MWh",
            completionYear: "2024",
            location: "Tavas / Denizli"
        }
    };

    // Üçüncü proje verisi (eski dördüncü)
    const thirdProject = {
        title: "Villa GES Kurulumu",
        description: "Lüks villa çatısına kurulan 25 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa1_ges1.jpg",
            "/villa1_ges2.jpg"
        ],
        details: {
            capacity: "25 kWp",
            panels: "62 adet",
            annualProduction: "37.5 MWh",
            completionYear: "2024",
            location: "Döşemealtı / Antalya"
        }
    };

    // Dördüncü proje verisi image.png
    const fourthProject = {
        title: "Villa GES Kurulumu",
        description: "Modern villa çatısına kurulan 30 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa2_ges1.jpg",
            "/villa2_ges2.jpg",
            "/villa2_ges3.jpg"
        ],
        details: {
            capacity: "30 kWp",
            panels: "75 adet",
            annualProduction: "45 MWh",
            completionYear: "2024",
            location: "Döşemealtı / Antalya"
        }
    };

    // Beşinci proje verisi (eski üçüncü)
    const fifthProject = {
        title: "Otel GES Kurulumu",
        description: "Modern otel çatısına kurulan 180 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/otel2_ges1.jpg",
            "/otel2_ges2.jpg"
        ],
        details: {
            capacity: "180 kWp",
            panels: "450 adet",
            annualProduction: "270 MWh",
            completionYear: "2024",
            location: "Kemer / Antalya"
        }
    };

    // Altıncı proje verisi
    const sixthProject = {
        title: "Villa GES Kurulumu",
        description: "Modern villa çatısına kurulan 20 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa3_ges1.jpg",
            "/villa3_ges2.jpg",
            "/villa3_ges3.jpg"
        ],
        details: {
            capacity: "20 kWp",
            panels: "50 adet",
            annualProduction: "30 MWh",
            completionYear: "2024",
            location: "Antalya"
        }
    };

    // Yedinci proje verisi
    const seventhProject = {
        title: "Villa GES Kurulumu",
        description: "Lüks villa çatısına kurulan 22 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa4_ges1.jpg",
            "/villa4_ges2.jpg",
            "/villa4_ges3.jpg"
        ],
        details: {
            capacity: "22 kWp",
            panels: "55 adet",
            annualProduction: "33 MWh",
            completionYear: "2024",
            location: "Antalya"
        }
    };

    // Sekizinci proje verisi
    const eighthProject = {
        title: "Villa GES Kurulumu",
        description: "Modern villa çatısına kurulan 18 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa5_ges1.jpg",
            "/villa5_ges2.jpg"
        ],
        details: {
            capacity: "18 kWp",
            panels: "45 adet",
            annualProduction: "27 MWh",
            completionYear: "2024",
            location: "Antalya"
        }
    };

    // Dokuzuncu proje verisi
    const ninthProject = {
        title: "Villa GES Kurulumu",
        description: "Villa çatısına kurulan 15 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa6_ges1.jpg"
        ],
        details: {
            capacity: "15 kWp",
            panels: "37 adet",
            annualProduction: "22.5 MWh",
            completionYear: "2024",
            location: "Antalya"
        }
    };

    // Onuncu proje verisi
    const tenthProject = {
        title: "Villa GES Kurulumu",
        description: "Modern villa çatısına kurulan 16 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa7_ges1.jpg"
        ],
        details: {
            capacity: "16 kWp",
            panels: "40 adet",
            annualProduction: "24 MWh",
            completionYear: "2024",
            location: "Antalya"
        }
    };

    // On birinci proje verisi
    const eleventhProject = {
        title: "Villa GES Kurulumu",
        description: "Villa çatısına kurulan 14 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa8_ges1.jpg"
        ],
        details: {
            capacity: "14 kWp",
            panels: "35 adet",
            annualProduction: "21 MWh",
            completionYear: "2024",
            location: "Antalya"
        }
    };

    // On ikinci proje verisi
    const twelfthProject = {
        title: "Villa GES Kurulumu",
        description: "Modern villa çatısına kurulan 17 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa9_ges1.jpg"
        ],
        details: {
            capacity: "17 kWp",
            panels: "42 adet",
            annualProduction: "25.5 MWh",
            completionYear: "2024",
            location: "Antalya"
        }
    };

    // On üçüncü proje verisi
    const thirteenthProject = {
        title: "Villa GES Kurulumu",
        description: "Villa çatısına kurulan 19 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa10_ges1.jpg"
        ],
        details: {
            capacity: "19 kWp",
            panels: "47 adet",
            annualProduction: "28.5 MWh",
            completionYear: "2024",
            location: "Antalya"
        }
    };

    // On dördüncü proje verisi
    const fourteenthProject = {
        title: "Villa GES Kurulumu",
        description: "Modern villa çatısına kurulan 21 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa11ges_1.jpg"
        ],
        details: {
            capacity: "21 kWp",
            panels: "52 adet",
            annualProduction: "31.5 MWh",
            completionYear: "2024",
            location: "Antalya"
        }
    };

    // On beşinci proje verisi
    const fifteenthProject = {
        title: "Villa GES Kurulumu",
        description: "Villa çatısına kurulan 23 kWp kapasiteli güneş enerjisi sistemi.",
        images: [
            "/villa12_ges1.jpg"
        ],
        details: {
            capacity: "23 kWp",
            panels: "57 adet",
            annualProduction: "34.5 MWh",
            completionYear: "2024",
            location: "Antalya"
        }
    };

    // Fotoğraf slider fonksiyonları
    const [, setSlideDirection] = useState<'left' | 'right'>('right');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextImage = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setSlideDirection('right');
        setCurrentImageIndex((prev) => (prev + 1) % realProject.images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning, realProject.images.length]);

    const prevImage = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setSlideDirection('left');
        setCurrentImageIndex((prev) => (prev - 1 + realProject.images.length) % realProject.images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToImage = (index: number) => {
        if (isTransitioning || index === currentImageIndex) return;
        setIsTransitioning(true);
        if (index > currentImageIndex) {
            setSlideDirection('right');
        } else if (index < currentImageIndex) {
            setSlideDirection('left');
        }
        setCurrentImageIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    // İkinci proje için fonksiyonlar
    const [, setSecondSlideDirection] = useState<'left' | 'right'>('right');
    const [isSecondTransitioning, setIsSecondTransitioning] = useState(false);

    const nextSecondImage = useCallback(() => {
        if (isSecondTransitioning) return;
        setIsSecondTransitioning(true);
        setSecondSlideDirection('right');
        setSecondProjectImageIndex((prev) => (prev + 1) % secondProject.images.length);
        setTimeout(() => setIsSecondTransitioning(false), 500);
    }, [isSecondTransitioning, secondProject.images.length]);

    const prevSecondImage = () => {
        if (isSecondTransitioning) return;
        setIsSecondTransitioning(true);
        setSecondSlideDirection('left');
        setSecondProjectImageIndex((prev) => (prev - 1 + secondProject.images.length) % secondProject.images.length);
        setTimeout(() => setIsSecondTransitioning(false), 500);
    };

    const goToSecondImage = (index: number) => {
        if (isSecondTransitioning || index === secondProjectImageIndex) return;
        setIsSecondTransitioning(true);
        if (index > secondProjectImageIndex) {
            setSecondSlideDirection('right');
        } else if (index < secondProjectImageIndex) {
            setSecondSlideDirection('left');
        }
        setSecondProjectImageIndex(index);
        setTimeout(() => setIsSecondTransitioning(false), 500);
    };

    // Üçüncü proje için fonksiyonlar (villa)
    const [, setThirdSlideDirection] = useState<'left' | 'right'>('right');
    const [isThirdTransitioning, setIsThirdTransitioning] = useState(false);

    const nextThirdImage = useCallback(() => {
        if (isThirdTransitioning) return;
        setIsThirdTransitioning(true);
        setThirdSlideDirection('right');
        setThirdProjectImageIndex((prev) => (prev + 1) % thirdProject.images.length);
        setTimeout(() => setIsThirdTransitioning(false), 500);
    }, [isThirdTransitioning, thirdProject.images.length]);

    const prevThirdImage = () => {
        if (isThirdTransitioning) return;
        setIsThirdTransitioning(true);
        setThirdSlideDirection('left');
        setThirdProjectImageIndex((prev) => (prev - 1 + thirdProject.images.length) % thirdProject.images.length);
        setTimeout(() => setIsThirdTransitioning(false), 500);
    };

    const goToThirdImage = (index: number) => {
        if (isThirdTransitioning || index === thirdProjectImageIndex) return;
        setIsThirdTransitioning(true);
        if (index > thirdProjectImageIndex) {
            setThirdSlideDirection('right');
        } else if (index < thirdProjectImageIndex) {
            setThirdSlideDirection('left');
        }
        setThirdProjectImageIndex(index);
        setTimeout(() => setIsThirdTransitioning(false), 500);
    };

    // Dördüncü proje için fonksiyonlar
    const [, setFourthSlideDirection] = useState<'left' | 'right'>('right');
    const [isFourthTransitioning, setIsFourthTransitioning] = useState(false);

    const nextFourthImage = useCallback(() => {
        if (isFourthTransitioning) return;
        setIsFourthTransitioning(true);
        setFourthSlideDirection('right');
        setFourthProjectImageIndex((prev) => (prev + 1) % fourthProject.images.length);
        setTimeout(() => setIsFourthTransitioning(false), 500);
    }, [isFourthTransitioning, fourthProject.images.length]);

    const prevFourthImage = () => {
        if (isFourthTransitioning) return;
        setIsFourthTransitioning(true);
        setFourthSlideDirection('left');
        setFourthProjectImageIndex((prev) => (prev - 1 + fourthProject.images.length) % fourthProject.images.length);
        setTimeout(() => setIsFourthTransitioning(false), 500);
    };

    const goToFourthImage = (index: number) => {
        if (isFourthTransitioning || index === fourthProjectImageIndex) return;
        setIsFourthTransitioning(true);
        if (index > fourthProjectImageIndex) {
            setFourthSlideDirection('right');
        } else if (index < fourthProjectImageIndex) {
            setFourthSlideDirection('left');
        }
        setFourthProjectImageIndex(index);
        setTimeout(() => setIsFourthTransitioning(false), 500);
    };

    // Beşinci proje için fonksiyonlar (otel)
    const [, setFifthSlideDirection] = useState<'left' | 'right'>('right');
    const [isFifthTransitioning, setIsFifthTransitioning] = useState(false);

    const nextFifthImage = useCallback(() => {
        if (isFifthTransitioning) return;
        setIsFifthTransitioning(true);
        setFifthSlideDirection('right');
        setFifthProjectImageIndex((prev) => (prev + 1) % fifthProject.images.length);
        setTimeout(() => setIsFifthTransitioning(false), 500);
    }, [isFifthTransitioning, fifthProject.images.length]);

    const prevFifthImage = () => {
        if (isFifthTransitioning) return;
        setIsFifthTransitioning(true);
        setFifthSlideDirection('left');
        setFifthProjectImageIndex((prev) => (prev - 1 + fifthProject.images.length) % fifthProject.images.length);
        setTimeout(() => setIsFifthTransitioning(false), 500);
    };

    const goToFifthImage = (index: number) => {
        if (isFifthTransitioning || index === fifthProjectImageIndex) return;
        setIsFifthTransitioning(true);
        if (index > fifthProjectImageIndex) {
            setFifthSlideDirection('right');
        } else if (index < fifthProjectImageIndex) {
            setFifthSlideDirection('left');
        }
        setFifthProjectImageIndex(index);
        setTimeout(() => setIsFifthTransitioning(false), 500);
    };

    // Altıncı proje için fonksiyonlar
    const [, setSixthSlideDirection] = useState<'left' | 'right'>('right');
    const [isSixthTransitioning, setIsSixthTransitioning] = useState(false);

    const nextSixthImage = useCallback(() => {
        if (isSixthTransitioning) return;
        setIsSixthTransitioning(true);
        setSixthSlideDirection('right');
        setSixthProjectImageIndex((prev) => (prev + 1) % sixthProject.images.length);
        setTimeout(() => setIsSixthTransitioning(false), 500);
    }, [isSixthTransitioning, sixthProject.images.length]);

    const prevSixthImage = () => {
        if (isSixthTransitioning) return;
        setIsSixthTransitioning(true);
        setSixthSlideDirection('left');
        setSixthProjectImageIndex((prev) => (prev - 1 + sixthProject.images.length) % sixthProject.images.length);
        setTimeout(() => setIsSixthTransitioning(false), 500);
    };

    const goToSixthImage = (index: number) => {
        if (isSixthTransitioning || index === sixthProjectImageIndex) return;
        setIsSixthTransitioning(true);
        if (index > sixthProjectImageIndex) {
            setSixthSlideDirection('right');
        } else if (index < sixthProjectImageIndex) {
            setSixthSlideDirection('left');
        }
        setSixthProjectImageIndex(index);
        setTimeout(() => setIsSixthTransitioning(false), 500);
    };

    // Yedinci proje için fonksiyonlar
    const [, setSeventhSlideDirection] = useState<'left' | 'right'>('right');
    const [isSeventhTransitioning, setIsSeventhTransitioning] = useState(false);

    const nextSeventhImage = useCallback(() => {
        if (isSeventhTransitioning) return;
        setIsSeventhTransitioning(true);
        setSeventhSlideDirection('right');
        setSeventhProjectImageIndex((prev) => (prev + 1) % seventhProject.images.length);
        setTimeout(() => setIsSeventhTransitioning(false), 500);
    }, [isSeventhTransitioning, seventhProject.images.length]);

    const prevSeventhImage = () => {
        if (isSeventhTransitioning) return;
        setIsSeventhTransitioning(true);
        setSeventhSlideDirection('left');
        setSeventhProjectImageIndex((prev) => (prev - 1 + seventhProject.images.length) % seventhProject.images.length);
        setTimeout(() => setIsSeventhTransitioning(false), 500);
    };

    const goToSeventhImage = (index: number) => {
        if (isSeventhTransitioning || index === seventhProjectImageIndex) return;
        setIsSeventhTransitioning(true);
        if (index > seventhProjectImageIndex) {
            setSeventhSlideDirection('right');
        } else if (index < seventhProjectImageIndex) {
            setSeventhSlideDirection('left');
        }
        setSeventhProjectImageIndex(index);
        setTimeout(() => setIsSeventhTransitioning(false), 500);
    };

    // Sekizinci proje için fonksiyonlar
    const [, setEighthSlideDirection] = useState<'left' | 'right'>('right');
    const [isEighthTransitioning, setIsEighthTransitioning] = useState(false);

    const nextEighthImage = useCallback(() => {
        if (isEighthTransitioning) return;
        setIsEighthTransitioning(true);
        setEighthSlideDirection('right');
        setEighthProjectImageIndex((prev) => (prev + 1) % eighthProject.images.length);
        setTimeout(() => setIsEighthTransitioning(false), 500);
    }, [isEighthTransitioning, eighthProject.images.length]);

    const prevEighthImage = () => {
        if (isEighthTransitioning) return;
        setIsEighthTransitioning(true);
        setEighthSlideDirection('left');
        setEighthProjectImageIndex((prev) => (prev - 1 + eighthProject.images.length) % eighthProject.images.length);
        setTimeout(() => setIsEighthTransitioning(false), 500);
    };

    const goToEighthImage = (index: number) => {
        if (isEighthTransitioning || index === eighthProjectImageIndex) return;
        setIsEighthTransitioning(true);
        if (index > eighthProjectImageIndex) {
            setEighthSlideDirection('right');
        } else if (index < eighthProjectImageIndex) {
            setEighthSlideDirection('left');
        }
        setEighthProjectImageIndex(index);
        setTimeout(() => setIsEighthTransitioning(false), 500);
    };

    // Dokuzuncu proje için fonksiyonlar
    const [, setNinthSlideDirection] = useState<'left' | 'right'>('right');
    const [isNinthTransitioning, setIsNinthTransitioning] = useState(false);

    const nextNinthImage = useCallback(() => {
        if (isNinthTransitioning) return;
        setIsNinthTransitioning(true);
        setNinthSlideDirection('right');
        setNinthProjectImageIndex((prev) => (prev + 1) % ninthProject.images.length);
        setTimeout(() => setIsNinthTransitioning(false), 500);
    }, [isNinthTransitioning, ninthProject.images.length]);

    const prevNinthImage = () => {
        if (isNinthTransitioning) return;
        setIsNinthTransitioning(true);
        setNinthSlideDirection('left');
        setNinthProjectImageIndex((prev) => (prev - 1 + ninthProject.images.length) % ninthProject.images.length);
        setTimeout(() => setIsNinthTransitioning(false), 500);
    };

    const goToNinthImage = (index: number) => {
        if (isNinthTransitioning || index === ninthProjectImageIndex) return;
        setIsNinthTransitioning(true);
        if (index > ninthProjectImageIndex) {
            setNinthSlideDirection('right');
        } else if (index < ninthProjectImageIndex) {
            setNinthSlideDirection('left');
        }
        setNinthProjectImageIndex(index);
        setTimeout(() => setIsNinthTransitioning(false), 500);
    };

    // Onuncu proje için fonksiyonlar
    const [, setTenthSlideDirection] = useState<'left' | 'right'>('right');
    const [isTenthTransitioning, setIsTenthTransitioning] = useState(false);

    const nextTenthImage = useCallback(() => {
        if (isTenthTransitioning) return;
        setIsTenthTransitioning(true);
        setTenthSlideDirection('right');
        setTenthProjectImageIndex((prev) => (prev + 1) % tenthProject.images.length);
        setTimeout(() => setIsTenthTransitioning(false), 500);
    }, [isTenthTransitioning, tenthProject.images.length]);

    const prevTenthImage = () => {
        if (isTenthTransitioning) return;
        setIsTenthTransitioning(true);
        setTenthSlideDirection('left');
        setTenthProjectImageIndex((prev) => (prev - 1 + tenthProject.images.length) % tenthProject.images.length);
        setTimeout(() => setIsTenthTransitioning(false), 500);
    };

    const goToTenthImage = (index: number) => {
        if (isTenthTransitioning || index === tenthProjectImageIndex) return;
        setIsTenthTransitioning(true);
        if (index > tenthProjectImageIndex) {
            setTenthSlideDirection('right');
        } else if (index < tenthProjectImageIndex) {
            setTenthSlideDirection('left');
        }
        setTenthProjectImageIndex(index);
        setTimeout(() => setIsTenthTransitioning(false), 500);
    };

    // On birinci proje için fonksiyonlar
    const [, setEleventhSlideDirection] = useState<'left' | 'right'>('right');
    const [isEleventhTransitioning, setIsEleventhTransitioning] = useState(false);

    const nextEleventhImage = useCallback(() => {
        if (isEleventhTransitioning) return;
        setIsEleventhTransitioning(true);
        setEleventhSlideDirection('right');
        setEleventhProjectImageIndex((prev) => (prev + 1) % eleventhProject.images.length);
        setTimeout(() => setIsEleventhTransitioning(false), 500);
    }, [isEleventhTransitioning, eleventhProject.images.length]);

    const prevEleventhImage = () => {
        if (isEleventhTransitioning) return;
        setIsEleventhTransitioning(true);
        setEleventhSlideDirection('left');
        setEleventhProjectImageIndex((prev) => (prev - 1 + eleventhProject.images.length) % eleventhProject.images.length);
        setTimeout(() => setIsEleventhTransitioning(false), 500);
    };

    const goToEleventhImage = (index: number) => {
        if (isEleventhTransitioning || index === eleventhProjectImageIndex) return;
        setIsEleventhTransitioning(true);
        if (index > eleventhProjectImageIndex) {
            setEleventhSlideDirection('right');
        } else if (index < eleventhProjectImageIndex) {
            setEleventhSlideDirection('left');
        }
        setEleventhProjectImageIndex(index);
        setTimeout(() => setIsEleventhTransitioning(false), 500);
    };

    // On ikinci proje için fonksiyonlar
    const [, setTwelfthSlideDirection] = useState<'left' | 'right'>('right');
    const [isTwelfthTransitioning, setIsTwelfthTransitioning] = useState(false);

    const nextTwelfthImage = useCallback(() => {
        if (isTwelfthTransitioning) return;
        setIsTwelfthTransitioning(true);
        setTwelfthSlideDirection('right');
        setTwelfthProjectImageIndex((prev) => (prev + 1) % twelfthProject.images.length);
        setTimeout(() => setIsTwelfthTransitioning(false), 500);
    }, [isTwelfthTransitioning, twelfthProject.images.length]);

    const prevTwelfthImage = () => {
        if (isTwelfthTransitioning) return;
        setIsTwelfthTransitioning(true);
        setTwelfthSlideDirection('left');
        setTwelfthProjectImageIndex((prev) => (prev - 1 + twelfthProject.images.length) % twelfthProject.images.length);
        setTimeout(() => setIsTwelfthTransitioning(false), 500);
    };

    const goToTwelfthImage = (index: number) => {
        if (isTwelfthTransitioning || index === twelfthProjectImageIndex) return;
        setIsTwelfthTransitioning(true);
        if (index > twelfthProjectImageIndex) {
            setTwelfthSlideDirection('right');
        } else if (index < twelfthProjectImageIndex) {
            setTwelfthSlideDirection('left');
        }
        setTwelfthProjectImageIndex(index);
        setTimeout(() => setIsTwelfthTransitioning(false), 500);
    };

    // On üçüncü proje için fonksiyonlar
    const [, setThirteenthSlideDirection] = useState<'left' | 'right'>('right');
    const [isThirteenthTransitioning, setIsThirteenthTransitioning] = useState(false);

    const nextThirteenthImage = useCallback(() => {
        if (isThirteenthTransitioning) return;
        setIsThirteenthTransitioning(true);
        setThirteenthSlideDirection('right');
        setThirteenthProjectImageIndex((prev) => (prev + 1) % thirteenthProject.images.length);
        setTimeout(() => setIsThirteenthTransitioning(false), 500);
    }, [isThirteenthTransitioning, thirteenthProject.images.length]);

    const prevThirteenthImage = () => {
        if (isThirteenthTransitioning) return;
        setIsThirteenthTransitioning(true);
        setThirteenthSlideDirection('left');
        setThirteenthProjectImageIndex((prev) => (prev - 1 + thirteenthProject.images.length) % thirteenthProject.images.length);
        setTimeout(() => setIsThirteenthTransitioning(false), 500);
    };

    const goToThirteenthImage = (index: number) => {
        if (isThirteenthTransitioning || index === thirteenthProjectImageIndex) return;
        setIsThirteenthTransitioning(true);
        if (index > thirteenthProjectImageIndex) {
            setThirteenthSlideDirection('right');
        } else if (index < thirteenthProjectImageIndex) {
            setThirteenthSlideDirection('left');
        }
        setThirteenthProjectImageIndex(index);
        setTimeout(() => setIsThirteenthTransitioning(false), 500);
    };

    // On dördüncü proje için fonksiyonlar
    const [, setFourteenthSlideDirection] = useState<'left' | 'right'>('right');
    const [isFourteenthTransitioning, setIsFourteenthTransitioning] = useState(false);

    const nextFourteenthImage = useCallback(() => {
        if (isFourteenthTransitioning) return;
        setIsFourteenthTransitioning(true);
        setFourteenthSlideDirection('right');
        setFourteenthProjectImageIndex((prev) => (prev + 1) % fourteenthProject.images.length);
        setTimeout(() => setIsFourteenthTransitioning(false), 500);
    }, [isFourteenthTransitioning, fourteenthProject.images.length]);

    const prevFourteenthImage = () => {
        if (isFourteenthTransitioning) return;
        setIsFourteenthTransitioning(true);
        setFourteenthSlideDirection('left');
        setFourteenthProjectImageIndex((prev) => (prev - 1 + fourteenthProject.images.length) % fourteenthProject.images.length);
        setTimeout(() => setIsFourteenthTransitioning(false), 500);
    };

    const goToFourteenthImage = (index: number) => {
        if (isFourteenthTransitioning || index === fourteenthProjectImageIndex) return;
        setIsFourteenthTransitioning(true);
        if (index > fourteenthProjectImageIndex) {
            setFourteenthSlideDirection('right');
        } else if (index < fourteenthProjectImageIndex) {
            setFourteenthSlideDirection('left');
        }
        setFourteenthProjectImageIndex(index);
        setTimeout(() => setIsFourteenthTransitioning(false), 500);
    };

    // On beşinci proje için fonksiyonlar
    const [, setFifteenthSlideDirection] = useState<'left' | 'right'>('right');
    const [isFifteenthTransitioning, setIsFifteenthTransitioning] = useState(false);

    const nextFifteenthImage = useCallback(() => {
        if (isFifteenthTransitioning) return;
        setIsFifteenthTransitioning(true);
        setFifteenthSlideDirection('right');
        setFifteenthProjectImageIndex((prev) => (prev + 1) % fifteenthProject.images.length);
        setTimeout(() => setIsFifteenthTransitioning(false), 500);
    }, [isFifteenthTransitioning, fifteenthProject.images.length]);

    const prevFifteenthImage = () => {
        if (isFifteenthTransitioning) return;
        setIsFifteenthTransitioning(true);
        setFifteenthSlideDirection('left');
        setFifteenthProjectImageIndex((prev) => (prev - 1 + fifteenthProject.images.length) % fifteenthProject.images.length);
        setTimeout(() => setIsFifteenthTransitioning(false), 500);
    };

    const goToFifteenthImage = (index: number) => {
        if (isFifteenthTransitioning || index === fifteenthProjectImageIndex) return;
        setIsFifteenthTransitioning(true);
        if (index > fifteenthProjectImageIndex) {
            setFifteenthSlideDirection('right');
        } else if (index < fifteenthProjectImageIndex) {
            setFifteenthSlideDirection('left');
        }
        setFifteenthProjectImageIndex(index);
        setTimeout(() => setIsFifteenthTransitioning(false), 500);
    };


    // Otomatik oynatma
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            nextImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay, nextImage]);

    // İkinci proje için otomatik oynatma
    useEffect(() => {
        if (!isSecondProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextSecondImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isSecondProjectAutoPlay, nextSecondImage]);

    // Üçüncü proje için otomatik oynatma
    useEffect(() => {
        if (!isThirdProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextThirdImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isThirdProjectAutoPlay, nextThirdImage]);

    // Dördüncü proje için otomatik oynatma
    useEffect(() => {
        if (!isFourthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextFourthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isFourthProjectAutoPlay, nextFourthImage]);

    // Beşinci proje için otomatik oynatma
    useEffect(() => {
        if (!isFifthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextFifthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isFifthProjectAutoPlay, nextFifthImage]);

    // Altıncı proje için otomatik oynatma
    useEffect(() => {
        if (!isSixthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextSixthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isSixthProjectAutoPlay, nextSixthImage]);

    // Yedinci proje için otomatik oynatma
    useEffect(() => {
        if (!isSeventhProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextSeventhImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isSeventhProjectAutoPlay, nextSeventhImage]);

    // Sekizinci proje için otomatik oynatma
    useEffect(() => {
        if (!isEighthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextEighthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isEighthProjectAutoPlay, nextEighthImage]);

    // Dokuzuncu proje için otomatik oynatma
    useEffect(() => {
        if (!isNinthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextNinthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isNinthProjectAutoPlay, nextNinthImage]);

    // Onuncu proje için otomatik oynatma
    useEffect(() => {
        if (!isTenthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextTenthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isTenthProjectAutoPlay, nextTenthImage]);

    // On birinci proje için otomatik oynatma
    useEffect(() => {
        if (!isEleventhProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextEleventhImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isEleventhProjectAutoPlay, nextEleventhImage]);

    // On ikinci proje için otomatik oynatma
    useEffect(() => {
        if (!isTwelfthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextTwelfthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isTwelfthProjectAutoPlay, nextTwelfthImage]);

    // On üçüncü proje için otomatik oynatma
    useEffect(() => {
        if (!isThirteenthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextThirteenthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isThirteenthProjectAutoPlay, nextThirteenthImage]);

    // On dördüncü proje için otomatik oynatma
    useEffect(() => {
        if (!isFourteenthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextFourteenthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isFourteenthProjectAutoPlay, nextFourteenthImage]);

    // On beşinci proje için otomatik oynatma
    useEffect(() => {
        if (!isFifteenthProjectAutoPlay) return;

        const interval = setInterval(() => {
            nextFifteenthImage();
        }, 4000);

        return () => clearInterval(interval);
    }, [isFifteenthProjectAutoPlay, nextFifteenthImage]);


    return (
        <PageErrorBoundary pageName="Projelerimiz">
            {/* Structured Data - JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "2B Global Enerji Projeleri",
                        "description": "2B Global Enerji tarafından gerçekleştirilen başarılı güneş enerjisi projeleri",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "item": {
                                    "@type": "Project",
                                    "name": "Kairos Valley Otel Güneş Enerjisi Sistemi",
                                    "description": "Otel çatısına kurulan 200 kWp kapasiteli güneş enerjisi sistemi",
                                    "url": "https://2bltd.com.tr/projelerimiz",
                                    "image": [
                                        "https://2bltd.com.tr/kairos-valley-ges.jpg",
                                        "https://2bltd.com.tr/kairos-valley-ges2.jpg"
                                    ],
                                    "location": {
                                        "@type": "Place",
                                        "name": "Datça / Muğla",
                                        "address": {
                                            "@type": "PostalAddress",
                                            "addressLocality": "Datça",
                                            "addressRegion": "Muğla",
                                            "addressCountry": "TR"
                                        }
                                    },
                                    "provider": {
                                        "@type": "Organization",
                                        "name": "2B Global Enerji",
                                        "url": "https://2bltd.com.tr"
                                    },
                                    "dateCompleted": "2024",
                                    "additionalProperty": [
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Kapasite",
                                            "value": "200 kWp"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Panel Sayısı",
                                            "value": "500 adet"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Yıllık Üretim",
                                            "value": "300 MWh"
                                        }
                                    ]
                                }
                            }
                        ]
                    })
                }}
            />

            <div className="min-h-screen bg-[#f8f8ff] relative">
                <div className="container mx-auto px-4 py-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Page Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                                Projelerimiz
                            </h1>
                            <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
                        </div>

                        {/* Gerçek Proje Kartı */}
                        <div
                            ref={realProjectRef}
                            className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${realProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {realProject.images.map((image, index) => {
                                                    const isActive = index === currentImageIndex;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${realProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                            {realProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevImage}
                                                        onMouseEnter={() => setIsAutoPlay(false)}
                                                        onMouseLeave={() => setIsAutoPlay(true)}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={nextImage}
                                                        onMouseEnter={() => setIsAutoPlay(false)}
                                                        onMouseLeave={() => setIsAutoPlay(true)}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}

                                            {/* Slider Dots - Only show if more than 1 image */}
                                            {realProject.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                    {realProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToImage(index)}
                                                            onMouseEnter={() => setIsAutoPlay(false)}
                                                            onMouseLeave={() => setIsAutoPlay(true)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/60 hover:bg-white/80'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Play/Pause Button - Only show if more than 1 image */}
                                            {realProject.images.length > 1 && (
                                                <button
                                                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    {isAutoPlay ? (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Sağ taraf - Proje Detayları */}
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {realProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{realProject.details.location}</span>
                                            </div>

                                            <p className="text-gray-600 leading-normal mb-4 text-base">
                                                {realProject.description}
                                            </p>
                                        </div>

                                        {/* Proje Detayları Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold text-sm">{realProject.details.capacity}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold text-sm">{realProject.details.panels}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold text-sm">{realProject.details.annualProduction}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold text-sm">{realProject.details.completionYear}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* İkinci Proje Kartı */}
                        <div
                            ref={secondProjectRef}
                            className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${secondProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {secondProject.images.map((image, index) => {
                                                    const isActive = index === secondProjectImageIndex;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${secondProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                            {secondProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevSecondImage}
                                                        onMouseEnter={() => setIsSecondProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsSecondProjectAutoPlay(true)}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={nextSecondImage}
                                                        onMouseEnter={() => setIsSecondProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsSecondProjectAutoPlay(true)}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}

                                            {/* Slider Dots - Only show if more than 1 image */}
                                            {secondProject.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                    {secondProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToSecondImage(index)}
                                                            onMouseEnter={() => setIsSecondProjectAutoPlay(false)}
                                                            onMouseLeave={() => setIsSecondProjectAutoPlay(true)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === secondProjectImageIndex
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/60 hover:bg-white/80'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Play/Pause Button - Only show if more than 1 image */}
                                            {secondProject.images.length > 1 && (
                                                <button
                                                    onClick={() => setIsSecondProjectAutoPlay(!isSecondProjectAutoPlay)}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    {isSecondProjectAutoPlay ? (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Sağ taraf - Proje Detayları */}
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {secondProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{secondProject.details.location}</span>
                                            </div>

                                            <p className="text-gray-600 leading-normal mb-4 text-base">
                                                {secondProject.description}
                                            </p>
                                        </div>

                                        {/* Proje Detayları Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold">{secondProject.details.capacity}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold">{secondProject.details.panels}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold">{secondProject.details.annualProduction}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold">{secondProject.details.completionYear}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Üçüncü Proje Kartı */}
                        <div
                            ref={thirdProjectRef}
                            className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${thirdProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {thirdProject.images.map((image, index) => {
                                                    const isActive = index === thirdProjectImageIndex;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${thirdProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                            {thirdProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevThirdImage}
                                                        onMouseEnter={() => setIsThirdProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsThirdProjectAutoPlay(true)}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={nextThirdImage}
                                                        onMouseEnter={() => setIsThirdProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsThirdProjectAutoPlay(true)}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}

                                            {/* Slider Dots - Only show if more than 1 image */}
                                            {thirdProject.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                    {thirdProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToThirdImage(index)}
                                                            onMouseEnter={() => setIsThirdProjectAutoPlay(false)}
                                                            onMouseLeave={() => setIsThirdProjectAutoPlay(true)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === thirdProjectImageIndex
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/60 hover:bg-white/80'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Play/Pause Button - Only show if more than 1 image */}
                                            {thirdProject.images.length > 1 && (
                                                <button
                                                    onClick={() => setIsThirdProjectAutoPlay(!isThirdProjectAutoPlay)}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    {isThirdProjectAutoPlay ? (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Sağ taraf - Proje Detayları */}
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                                {thirdProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{thirdProject.details.location}</span>
                                            </div>

                                            <p className="text-gray-600 leading-normal mb-4 text-base">
                                                {thirdProject.description}
                                            </p>
                                        </div>

                                        {/* Proje Detayları Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold">{thirdProject.details.capacity}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold">{thirdProject.details.panels}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold">{thirdProject.details.annualProduction}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold">{thirdProject.details.completionYear}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dördüncü Proje Kartı */}
                        <div
                            ref={fourthProjectRef}
                            className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${fourthProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {fourthProject.images.map((image, index) => {
                                                    const isActive = index === fourthProjectImageIndex;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${fourthProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                            {fourthProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevFourthImage}
                                                        onMouseEnter={() => setIsFourthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsFourthProjectAutoPlay(true)}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={nextFourthImage}
                                                        onMouseEnter={() => setIsFourthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsFourthProjectAutoPlay(true)}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}

                                            {/* Slider Dots - Only show if more than 1 image */}
                                            {fourthProject.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                    {fourthProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToFourthImage(index)}
                                                            onMouseEnter={() => setIsFourthProjectAutoPlay(false)}
                                                            onMouseLeave={() => setIsFourthProjectAutoPlay(true)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === fourthProjectImageIndex
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/60 hover:bg-white/80'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Play/Pause Button - Only show if more than 1 image */}
                                            {fourthProject.images.length > 1 && (
                                                <button
                                                    onClick={() => setIsFourthProjectAutoPlay(!isFourthProjectAutoPlay)}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    {isFourthProjectAutoPlay ? (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Sağ taraf - Proje Detayları */}
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                                {fourthProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{fourthProject.details.location}</span>
                                            </div>

                                            <p className="text-gray-600 leading-normal mb-4 text-base">
                                                {fourthProject.description}
                                            </p>
                                        </div>

                                        {/* Proje Detayları Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold">{fourthProject.details.capacity}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold">{fourthProject.details.panels}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold">{fourthProject.details.annualProduction}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold">{fourthProject.details.completionYear}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Beşinci Proje Kartı */}
                        <div
                            ref={fifthProjectRef}
                            className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${fifthProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {fifthProject.images.map((image, index) => {
                                                    const isActive = index === fifthProjectImageIndex;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${fifthProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                            {fifthProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevFifthImage}
                                                        onMouseEnter={() => setIsFifthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsFifthProjectAutoPlay(true)}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={nextFifthImage}
                                                        onMouseEnter={() => setIsFifthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsFifthProjectAutoPlay(true)}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}

                                            {/* Slider Dots - Only show if more than 1 image */}
                                            {fifthProject.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                    {fifthProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToFifthImage(index)}
                                                            onMouseEnter={() => setIsFifthProjectAutoPlay(false)}
                                                            onMouseLeave={() => setIsFifthProjectAutoPlay(true)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === fifthProjectImageIndex
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/60 hover:bg-white/80'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Play/Pause Button - Only show if more than 1 image */}
                                            {fifthProject.images.length > 1 && (
                                                <button
                                                    onClick={() => setIsFifthProjectAutoPlay(!isFifthProjectAutoPlay)}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    {isFifthProjectAutoPlay ? (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Sağ taraf - Proje Detayları */}
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {fifthProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{fifthProject.details.location}</span>
                                            </div>

                                            <p className="text-gray-600 leading-normal mb-4 text-base">
                                                {fifthProject.description}
                                            </p>
                                        </div>

                                        {/* Proje Detayları Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold">{fifthProject.details.capacity}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold">{fifthProject.details.panels}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold">{fifthProject.details.annualProduction}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold">{fifthProject.details.completionYear}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Altıncı Proje Kartı */}
                        <div
                            ref={sixthProjectRef}
                            className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${sixthProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                    {/* Sol taraf - Fotoğraf Slider */}
                                    <div className="relative">
                                        <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                            {/* Fotoğraf Slider */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                {sixthProject.images.map((image, index) => {
                                                    const isActive = index === sixthProjectImageIndex;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${sixthProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                            {sixthProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevSixthImage}
                                                        onMouseEnter={() => setIsSixthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsSixthProjectAutoPlay(true)}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={nextSixthImage}
                                                        onMouseEnter={() => setIsSixthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsSixthProjectAutoPlay(true)}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}

                                            {/* Slider Dots - Only show if more than 1 image */}
                                            {sixthProject.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                    {sixthProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToSixthImage(index)}
                                                            onMouseEnter={() => setIsSixthProjectAutoPlay(false)}
                                                            onMouseLeave={() => setIsSixthProjectAutoPlay(true)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === sixthProjectImageIndex
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/60 hover:bg-white/80'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Play/Pause Button - Only show if more than 1 image */}
                                            {sixthProject.images.length > 1 && (
                                                <button
                                                    onClick={() => setIsSixthProjectAutoPlay(!isSixthProjectAutoPlay)}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    {isSixthProjectAutoPlay ? (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Sağ taraf - Proje Detayları */}
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                                {sixthProject.title}
                                            </h2>

                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{sixthProject.details.location}</span>
                                            </div>

                                            <p className="text-gray-600 leading-normal mb-4 text-base">
                                                {sixthProject.description}
                                            </p>
                                        </div>

                                        {/* Proje Detayları Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold">{sixthProject.details.capacity}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold">{sixthProject.details.panels}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold">{sixthProject.details.annualProduction}</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold">{sixthProject.details.completionYear}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yedinci Proje Kartı */}
                        <div
                            ref={seventhProjectRef}
                            className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${seventhProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                    <div className="relative">
                                        <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                            <div className="relative w-full h-full overflow-hidden">
                                                {seventhProject.images.map((image, index) => {
                                                    const isActive = index === seventhProjectImageIndex;
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${seventhProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                            {seventhProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevSeventhImage}
                                                        onMouseEnter={() => setIsSeventhProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsSeventhProjectAutoPlay(true)}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={nextSeventhImage}
                                                        onMouseEnter={() => setIsSeventhProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsSeventhProjectAutoPlay(true)}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}

                                            {/* Slider Dots - Only show if more than 1 image */}
                                            {seventhProject.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                    {seventhProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToSeventhImage(index)}
                                                            onMouseEnter={() => setIsSeventhProjectAutoPlay(false)}
                                                            onMouseLeave={() => setIsSeventhProjectAutoPlay(true)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === seventhProjectImageIndex
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/60 hover:bg-white/80'}`}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                            {/* Play/Pause Button - Only show if more than 1 image */}
                                            {seventhProject.images.length > 1 && (
                                                <button
                                                    onClick={() => setIsSeventhProjectAutoPlay(!isSeventhProjectAutoPlay)}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    {isSeventhProjectAutoPlay ? (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                                {seventhProject.title}
                                            </h2>
                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{seventhProject.details.location}</span>
                                            </div>
                                            <p className="text-gray-600 leading-normal mb-4 text-base">
                                                {seventhProject.description}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold">{seventhProject.details.capacity}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold">{seventhProject.details.panels}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold">{seventhProject.details.annualProduction}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold">{seventhProject.details.completionYear}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sekizinci Proje Kartı */}
                        <div
                            ref={eighthProjectRef}
                            className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${eighthProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                    <div className="relative">
                                        <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                            <div className="relative w-full h-full overflow-hidden">
                                                {eighthProject.images.map((image, index) => {
                                                    const isActive = index === eighthProjectImageIndex;
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${eighthProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                            {eighthProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevEighthImage}
                                                        onMouseEnter={() => setIsEighthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsEighthProjectAutoPlay(true)}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={nextEighthImage}
                                                        onMouseEnter={() => setIsEighthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsEighthProjectAutoPlay(true)}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}

                                            {/* Slider Dots - Only show if more than 1 image */}
                                            {eighthProject.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                    {eighthProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToEighthImage(index)}
                                                            onMouseEnter={() => setIsEighthProjectAutoPlay(false)}
                                                            onMouseLeave={() => setIsEighthProjectAutoPlay(true)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === eighthProjectImageIndex
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/60 hover:bg-white/80'}`}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                            {/* Play/Pause Button - Only show if more than 1 image */}
                                            {eighthProject.images.length > 1 && (
                                                <button
                                                    onClick={() => setIsEighthProjectAutoPlay(!isEighthProjectAutoPlay)}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    {isEighthProjectAutoPlay ? (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                                {eighthProject.title}
                                            </h2>
                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{eighthProject.details.location}</span>
                                            </div>
                                            <p className="text-gray-600 leading-normal mb-4 text-base">
                                                {eighthProject.description}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold">{eighthProject.details.capacity}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold">{eighthProject.details.panels}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold">{eighthProject.details.annualProduction}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold">{eighthProject.details.completionYear}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dokuzuncu Proje Kartı */}
                        <div
                            ref={ninthProjectRef}
                            className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${ninthProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                    <div className="relative">
                                        <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                            <div className="relative w-full h-full overflow-hidden">
                                                {ninthProject.images.map((image, index) => {
                                                    const isActive = index === ninthProjectImageIndex;
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${ninthProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                            {ninthProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevNinthImage}
                                                        onMouseEnter={() => setIsNinthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsNinthProjectAutoPlay(true)}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={nextNinthImage}
                                                        onMouseEnter={() => setIsNinthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsNinthProjectAutoPlay(true)}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}

                                            {/* Slider Dots - Only show if more than 1 image */}
                                            {ninthProject.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                    {ninthProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToNinthImage(index)}
                                                            onMouseEnter={() => setIsNinthProjectAutoPlay(false)}
                                                            onMouseLeave={() => setIsNinthProjectAutoPlay(true)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === ninthProjectImageIndex
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/60 hover:bg-white/80'}`}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                            {/* Play/Pause Button - Only show if more than 1 image */}
                                            {ninthProject.images.length > 1 && (
                                                <button
                                                    onClick={() => setIsNinthProjectAutoPlay(!isNinthProjectAutoPlay)}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    {isNinthProjectAutoPlay ? (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                                {ninthProject.title}
                                            </h2>
                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{ninthProject.details.location}</span>
                                            </div>
                                            <p className="text-gray-600 leading-normal mb-4 text-base">
                                                {ninthProject.description}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold">{ninthProject.details.capacity}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold">{ninthProject.details.panels}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold">{ninthProject.details.annualProduction}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold">{ninthProject.details.completionYear}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Onuncu Proje Kartı */}
                        <div
                            ref={tenthProjectRef}
                            className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${tenthProjectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                    <div className="relative">
                                        <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                            <div className="relative w-full h-full overflow-hidden">
                                                {tenthProject.images.map((image, index) => {
                                                    const isActive = index === tenthProjectImageIndex;
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${tenthProject.title} - Fotoğraf ${index + 1}`}
                                                                width={800}
                                                                height={600}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.src = `https://picsum.photos/600/400?random=${index}`;
                                                                }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                            {tenthProject.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevTenthImage}
                                                        onMouseEnter={() => setIsTenthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsTenthProjectAutoPlay(true)}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={nextTenthImage}
                                                        onMouseEnter={() => setIsTenthProjectAutoPlay(false)}
                                                        onMouseLeave={() => setIsTenthProjectAutoPlay(true)}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}

                                            {/* Slider Dots - Only show if more than 1 image */}
                                            {tenthProject.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                    {tenthProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToTenthImage(index)}
                                                            onMouseEnter={() => setIsTenthProjectAutoPlay(false)}
                                                            onMouseLeave={() => setIsTenthProjectAutoPlay(true)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === tenthProjectImageIndex
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/60 hover:bg-white/80'}`}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                            {/* Play/Pause Button - Only show if more than 1 image */}
                                            {tenthProject.images.length > 1 && (
                                                <button
                                                    onClick={() => setIsTenthProjectAutoPlay(!isTenthProjectAutoPlay)}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    {isTenthProjectAutoPlay ? (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                                {tenthProject.title}
                                            </h2>
                                            <div className="flex items-center mb-4">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-blue-700 font-medium">{tenthProject.details.location}</span>
                                            </div>
                                            <p className="text-gray-600 leading-normal mb-4 text-base">
                                                {tenthProject.description}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                </div>
                                                <p className="text-blue-700 font-bold">{tenthProject.details.capacity}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                </div>
                                                <p className="text-green-700 font-bold">{tenthProject.details.panels}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                </div>
                                                <p className="text-purple-700 font-bold">{tenthProject.details.annualProduction}</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                </div>
                                                <p className="text-orange-700 font-bold">{tenthProject.details.completionYear}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* On birinci - On beşinci Proje Kartları */}
                        {[eleventhProject, twelfthProject, thirteenthProject, fourteenthProject, fifteenthProject].map((project, index) => {
                            const projectNumber = index + 11;
                            const projectRefs = [eleventhProjectRef, twelfthProjectRef, thirteenthProjectRef, fourteenthProjectRef, fifteenthProjectRef];
                            const projectVisibles = [eleventhProjectVisible, twelfthProjectVisible, thirteenthProjectVisible, fourteenthProjectVisible, fifteenthProjectVisible];
                            const projectImageIndexes = [eleventhProjectImageIndex, twelfthProjectImageIndex, thirteenthProjectImageIndex, fourteenthProjectImageIndex, fifteenthProjectImageIndex];
                            const projectAutoPlays = [isEleventhProjectAutoPlay, isTwelfthProjectAutoPlay, isThirteenthProjectAutoPlay, isFourteenthProjectAutoPlay, isFifteenthProjectAutoPlay];
                            const projectSetAutoPlays = [setIsEleventhProjectAutoPlay, setIsTwelfthProjectAutoPlay, setIsThirteenthProjectAutoPlay, setIsFourteenthProjectAutoPlay, setIsFifteenthProjectAutoPlay];
                            const projectPrevFunctions = [prevEleventhImage, prevTwelfthImage, prevThirteenthImage, prevFourteenthImage, prevFifteenthImage];
                            const projectNextFunctions = [nextEleventhImage, nextTwelfthImage, nextThirteenthImage, nextFourteenthImage, nextFifteenthImage];
                            const projectGoToFunctions = [goToEleventhImage, goToTwelfthImage, goToThirteenthImage, goToFourteenthImage, goToFifteenthImage];

                            return (
                                <div
                                    key={projectNumber}
                                    ref={projectRefs[index]}
                                    className={`mb-8 transition-all duration-200 ease-out scroll-mt-24 ${projectVisibles[index] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                >
                                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
                                            <div className="relative">
                                                <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                                    <div className="relative w-full h-full overflow-hidden">
                                                        {project.images.map((image, imgIndex) => {
                                                            const isActive = imgIndex === projectImageIndexes[index];
                                                            return (
                                                                <div
                                                                    key={imgIndex}
                                                                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                                                >
                                                                    <Image
                                                                        src={image}
                                                                        alt={`${project.title} - Fotoğraf ${imgIndex + 1}`}
                                                                        width={800}
                                                                        height={600}
                                                                        className="w-full h-full object-cover"
                                                                        onError={(e) => {
                                                                            const target = e.target as HTMLImageElement;
                                                                            target.src = `https://picsum.photos/600/400?random=${imgIndex}`;
                                                                        }}
                                                                    />
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    {/* Slider Navigation Buttons - Only show if more than 1 image */}
                                                    {project.images.length > 1 && (
                                                        <>
                                                            <button
                                                                onClick={projectPrevFunctions[index]}
                                                                onMouseEnter={() => projectSetAutoPlays[index](false)}
                                                                onMouseLeave={() => projectSetAutoPlays[index](true)}
                                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                            >
                                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                onClick={projectNextFunctions[index]}
                                                                onMouseEnter={() => projectSetAutoPlays[index](false)}
                                                                onMouseLeave={() => projectSetAutoPlays[index](true)}
                                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                                                            >
                                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </button>
                                                        </>
                                                    )}

                                                    {/* Slider Dots - Only show if more than 1 image */}
                                                    {project.images.length > 1 && (
                                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                            {project.images.map((_, imgIndex) => (
                                                                <button
                                                                    key={imgIndex}
                                                                    onClick={() => projectGoToFunctions[index](imgIndex)}
                                                                    onMouseEnter={() => projectSetAutoPlays[index](false)}
                                                                    onMouseLeave={() => projectSetAutoPlays[index](true)}
                                                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${imgIndex === projectImageIndexes[index]
                                                                        ? 'bg-white shadow-lg scale-125'
                                                                        : 'bg-white/60 hover:bg-white/80'}`}
                                                                />
                                                            ))}
                                                        </div>
                                                    )}
                                                    {/* Play/Pause Button - Only show if more than 1 image */}
                                                    {project.images.length > 1 && (
                                                        <button
                                                            onClick={() => projectSetAutoPlays[index](!projectAutoPlays[index])}
                                                            className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                                        >
                                                            {projectAutoPlays[index] ? (
                                                                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                                </svg>
                                                            )}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <div className="mb-4">
                                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight flex items-center">
                                                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                        </svg>
                                                        {project.title}
                                                    </h2>
                                                    <div className="flex items-center mb-4">
                                                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        <span className="text-blue-700 font-medium">{project.details.location}</span>
                                                    </div>
                                                    <p className="text-gray-600 leading-normal mb-4 text-base">
                                                        {project.description}
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                                        <div className="flex items-center mb-2">
                                                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                                </svg>
                                                            </div>
                                                            <h4 className="font-semibold text-blue-800 text-xs">Kapasite</h4>
                                                        </div>
                                                        <p className="text-blue-700 font-bold">{project.details.capacity}</p>
                                                    </div>
                                                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                                        <div className="flex items-center mb-2">
                                                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                                </svg>
                                                            </div>
                                                            <h4 className="font-semibold text-green-800 text-xs">Panel Sayısı</h4>
                                                        </div>
                                                        <p className="text-green-700 font-bold">{project.details.panels}</p>
                                                    </div>
                                                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3">
                                                        <div className="flex items-center mb-2">
                                                            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                                </svg>
                                                            </div>
                                                            <h4 className="font-semibold text-purple-800 text-xs">Yıllık Üretim</h4>
                                                        </div>
                                                        <p className="text-purple-700 font-bold">{project.details.annualProduction}</p>
                                                    </div>
                                                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3">
                                                        <div className="flex items-center mb-2">
                                                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                            </div>
                                                            <h4 className="font-semibold text-orange-800 text-xs">Tamamlanma</h4>
                                                        </div>
                                                        <p className="text-orange-700 font-bold">{project.details.completionYear}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Modern Corporate CTA Section */}
                        <div
                            ref={ctaRef}
                            className={`mb-32 transition-all duration-500 ease-out ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-6 lg:p-10 shadow-xl border border-slate-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                    <div className="flex flex-col lg:flex-row lg:items-start mb-6 lg:mb-0">
                                        <div className="relative mb-4 lg:mb-0 lg:mr-8">
                                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-lg mx-auto lg:mx-0">
                                                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                                                <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <div className="flex flex-col lg:flex-row lg:items-center mb-3">
                                                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 lg:mb-0 lg:mr-4">
                                                    Projelerinizde Güvenilir Çözüm Ortağınız
                                                </h3>
                                                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto lg:mx-0"></div>
                                            </div>
                                            <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-2xl mb-4">
                                                Deneyimli ekibimiz ve kaliteli hizmet anlayışımızla,
                                                enerji projelerinizde yanınızdayız. Sürdürülebilir enerji çözümleri
                                                ile geleceğinizi birlikte inşa edelim.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center lg:items-end space-y-4">
                                        <a
                                            href="/iletisim"
                                            className="group relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl hover:from-blue-800 hover:to-indigo-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-base lg:text-lg shadow-lg w-full lg:w-auto"
                                        >
                                            <div className="flex items-center justify-center">
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                İletişime Geçin
                                            </div>
                                        </a>

                                        <div className="text-center lg:text-right">
                                            <div className="text-slate-400 text-xs lg:text-sm font-medium mb-1">Hızlı İletişim</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageErrorBoundary>
    );
}
