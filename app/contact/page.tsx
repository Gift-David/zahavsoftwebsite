import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: 'Contact - Zahavsoft',
  description: 'Get in touch with us on any of our verified social media platforms or send us a message, we will respond before the next 12 hours.'
};

export default function ContactPage () {
    const header = {
        title: "Contact Zahavsoft",
        subtitle: "Great projects start with a conversation.",
        img: "/images/contact-header.png"
    }

    return (
        <>
            <Navbar />
            <HeaderSection title={header.title} subtitle={header.subtitle} img={header.img}/>
            <ContactSection />
            <Footer />
        </>
    )
}