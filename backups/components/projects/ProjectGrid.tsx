'use client';

import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import ProjectCard from './ProjectCard';

interface ProjectDetails {
    capacity: string;
    panels: string;
    annualProduction: string;
    completionYear: string;
    location: string;
}

interface Project {
    title: string;
    description: string;
    images: string[];
    details: ProjectDetails;
}

interface ProjectGridProps {
    projects: Project[];
    title: string;
    description?: string;
}

export default function ProjectGrid({ projects, title, description }: ProjectGridProps) {
    const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ delay: 0 });

    return (
        <div 
            ref={sectionRef}
            className={`mb-16 transition-all duration-500 ease-out ${
                sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                    {title}
                </h2>
                {description && (
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
                <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        images={project.images}
                        details={project.details}
                        isVisible={sectionVisible}
                        delay={index * 100}
                    />
                ))}
            </div>
        </div>
    );
}
