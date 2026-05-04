import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectsSection";

export const metadata: Metadata = {
  title: 'Projects - Zahavsoft',

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