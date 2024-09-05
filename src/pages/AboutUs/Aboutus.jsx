import React, { useEffect } from "react";
import HeroSection from './HeroSection'
import AboutUsContent from "./AboutUsContent";
import Footer from '../../components/Sections/Footer'
import Contact from "../../components/Contact/Contact";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div style={{ position: "relative" }}>
      <HeroSection />
      <AboutUsContent />
      <Contact />
      <Footer />
    </div>
  );
}
