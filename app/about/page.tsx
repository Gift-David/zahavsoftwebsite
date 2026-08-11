import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import WhoWeAre from "../components/WhoWeAre";
import VisionMissionSection from "../components/VisionMisionSection";
import CoreValuesSection from "../components/CoreValues";
import TeamSection from "../components/TeamSection";

export const metadata: Metadata = {
  title: 'About us - Zahavsoft',
  description: "ZAHAVSOFT is a premium digital design agency built to help forward-thinking businesses stand out, connect deeply, and grow with intention. We were founded on a simple belief: great design is never decoration — it's infrastructure. We are strategists, designers, and builders who work best at the intersection of beauty and function. We care about the details because details are what people actually feel when they use your product."
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