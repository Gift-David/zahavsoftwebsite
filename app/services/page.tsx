import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: 'Services - Zahavsoft',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}