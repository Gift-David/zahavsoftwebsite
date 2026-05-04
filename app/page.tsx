import CtaSection from "./components/CtaSection";
import FaqSection from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import Offers from "./components/Offers";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import WhyChooseUsSection from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero/>
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <Offers />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}
