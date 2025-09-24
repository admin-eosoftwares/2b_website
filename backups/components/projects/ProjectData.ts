// Project data types and constants

export interface ProjectDetails {
    capacity: string;
    panels: string;
    annualProduction: string;
    completionYear: string;
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
    description: "Otel çatısına kurulan 150 kWp kapasiteli GES projesi",
    images: [
        "/kairos-valley-ges.jpg",
        "/kairos-valley-ges2.jpg"
    ],
    details: {
        capacity: "150 kWp",
        panels: "275 panel",
        annualProduction: "300 MWh",
        completionYear: "2024",
        location: "Datça / Muğla"
    }
};

// Sample projects data
export const sampleProjects: Project[] = [
    {
        title: "Villa 1 GES Sistemi",
        description: "Özel villa için kurulan 20 kWp kapasiteli güneş enerjisi sistemi",
        images: [
            "/villa1_ges1.jpg",
            "/villa1_ges2.jpg",
            "/villa1_ges3.jpg"
        ],
        details: {
            capacity: "20 kWp",
            panels: "50 panel",
            annualProduction: "35 MWh",
            completionYear: "2024",
            location: "Antalya / Türkiye"
        }
    },
    {
        title: "Villa 2 GES Sistemi",
        description: "Modern villa için optimize edilmiş 25 kWp güneş enerjisi sistemi",
        images: [
            "/villa2_ges1.webp",
            "/villa2_ges2.webp",
            "/villa2_ges3.webp"
        ],
        details: {
            capacity: "25 kWp",
            panels: "60 panel",
            annualProduction: "42 MWh",
            completionYear: "2024",
            location: "Antalya / Türkiye"
        }
    },
    {
        title: "Villa 3 GES Sistemi",
        description: "Lüks villa için tasarlanan 30 kWp kapasiteli sistem",
        images: [
            "/villa3_ges1.webp",
            "/villa3_ges2.webp",
            "/villa3_ges3.webp"
        ],
        details: {
            capacity: "30 kWp",
            panels: "70 panel",
            annualProduction: "50 MWh",
            completionYear: "2024",
            location: "Antalya / Türkiye"
        }
    }
];

// All projects combined
export const allProjects: Project[] = [realProject, ...sampleProjects];
