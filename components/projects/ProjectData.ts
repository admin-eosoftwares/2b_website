// Project data types and constants

export interface ProjectDetails {
    capacity: string;
    panels: string;
    location: string;
}

export interface Project {
    title: string;
    description: string;
    images: string[];
    details: ProjectDetails;
}

// Real project data
export const realProject: Project = {
    title: "Otel GES Kurulumu",
    description: "Otel çatısına uygulanan GES projesi",
    images: [
        "/kairos-valley-ges.jpg",
        "/kairos-valley-ges2.jpg"
    ],
    details: {
        capacity: "150 kWp",
        panels: "274 panel",
        location: "Datça / Muğla"
    }
};

// Real projects data based on actual images in public folder
export const sampleProjects: Project[] = [
    {
        title: "Villa 1 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa1_ges1.jpg",
            "/villa1_ges2.jpg"
        ],
        details: {
            capacity: "10 kWp",
            panels: "16 panel",
            location: "Döşemealtı / Antalya"
        }
    },
    {
        title: "Villa 2 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa2_ges1.webp",
            "/villa2_ges2.webp",
            "/villa2_ges3.webp"
        ],
        details: {
            capacity: "20 kWp",
            panels: "36 panel",
            location: "Marmaris / Muğla"
        }
    },
    {
        title: "Villa 3 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa3_ges1.webp",
            "/villa3_ges2.webp",
            "/villa3_ges3.webp"
        ],
        details: {
            capacity: "25 kWp",
            panels: "60 panel",
            location: "Döşemealtı / Antalya"
        }
    },
    {
        title: "Villa 4 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa4_ges1.jpg",
            "/villa4_ges2.jpg",
            "/villa4_ges3.jpg"
        ],
        details: {
            capacity: "15 kWp",
            panels: "34 panel",
            location: "Döşemealtı / Antalya"
        }
    },
    {
        title: "Villa 5 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa5_ges1.jpg",
            "/villa5_ges2.jpg"
        ],
        details: {
            capacity: "10 kWp",
            panels: "21 panel",
            location: "Döşemealtı / Antalya"
        }
    },
    {
        title: "Villa 7 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa7_ges1.jpg"
        ],
        details: {
            capacity: "25 kWp",
            panels: "56 panel",
            location: "Döşemealtı / Antalya"
        }
    },
    {
        title: "Villa 8 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa8_ges1.jpg"
        ],
        details: {
            capacity: "10 kWp",
            panels: "20 panel",
            location: "Döşemealtı / Antalya"
        }
    },
    {
        title: "Villa 9 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa9_ges1.jpg"
        ],
        details: {
            capacity: "15 kWp",
            panels: "24 panel",
            location: "Döşemealtı / Antalya"
        }
    },
    {
        title: "Villa 10 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa10_ges1.jpg"
        ],
        details: {
            capacity: "15 kWp",
            panels: "24 panel",
            location: "Döşemealtı / Antalya"
        }
    },
    {
        title: "Villa 11 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa11ges_1.jpg"
        ],
        details: {
            capacity: "20 kWp",
            panels: "32 panel",
            location: "Döşemealtı / Antalya"
        }
    },
    {
        title: "Villa 12 GES Sistemi",
        description: "Özel konut çatısına uygulanan GES projesi",
        images: [
            "/villa12_ges1.jpg"
        ],
        details: {
            capacity: "15 kWp",
            panels: "28 panel",
            location: "Döşemealtı / Antalya"
        }
    },
    {
        title: "Otel 2 GES Sistemi",
        description: "Otel çatısına uygulanan GES projesi",
        images: [
            "/otel2_ges1.jpg",
            "/otel2_ges2.jpg"
        ],
        details: {
            capacity: "120 kWp",
            panels: "265 panel",
            location: "Kemer / Antalya"
        }
    },
    {
        title: "Petrol Ofisi GES Sistemi",
        description: "Petrol istasyonu çatısına uygulanan GES projesi",
        images: [
            "/petrolofisi_ges1.jpg",
            "/petrolofisi_ges2.jpg"
        ],
        details: {
            capacity: "50 kWp",
            panels: "64 panel",
            location: "Tavas / Denizli"
        }
    }
];

// Project categories
export const villaProjects: Project[] = sampleProjects.filter(p => p.title.includes('Villa'));
export const commercialProjects: Project[] = sampleProjects.filter(p =>
    p.title.includes('Otel') ||
    p.title.includes('Petrol Ofisi')
);

// All projects combined
export const allProjects: Project[] = [realProject, ...sampleProjects];

// Featured projects (first 6)
export const featuredProjects: Project[] = allProjects.slice(0, 6);