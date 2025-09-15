import type { Metadata } from 'next';
import { projectsMetadata } from '../metadata';

export const metadata: Metadata = projectsMetadata;

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
