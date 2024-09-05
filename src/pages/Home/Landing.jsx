import React from "react";
// Sections
import TopNavbar from "../../components/Nav/TopNavbar";
import Services from "../../components/Sections/Services";
import Projects from "../../components/projects/Projects";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Sections/Footer";
import About from "../../components/Sections/About"
import TestimonialSlider from "../../components/Elements/TestimonialSlider";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Banner />
      <Services />
      <About />
      <Projects />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </>
  );
}


