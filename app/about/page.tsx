import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import WhoWeAre from "../components/WhoWeAre";
import VisionMissionSection from "../components/VisionMisionSection";
import CoreValuesSection from "../components/CoreValues";
import TeamSection from "../components/TeamSection";

export const metadata: Metadata = {
  title: 'About - Zahavsoft',
};

export default function About () {
    const header = {
        title: "About Zahavsoft",
        subtitle: "We are designers, strategists & builders",
        img: "/images/about-header.png"
    }

    return(
        <>
            <Navbar />
            <HeaderSection title={header.title} subtitle={header.subtitle} img={header.img}/>
            <WhoWeAre />
            <VisionMissionSection />
            <CoreValuesSection />
            <TeamSection />
            <Footer />
            
        </>
    )
}