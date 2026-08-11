import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectsSection";

export const metadata: Metadata = {
    title: 'Projects - Zahavsoft',
    description: 'Be the first to know when we launch any new project.'
};

export default function ProjectPage () {
    return (
        <>
            <Navbar />
            <ProjectSection />
            <Footer />
        </>
    )
}