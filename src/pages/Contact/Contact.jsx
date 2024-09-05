import React, { useEffect } from "react";
import Footer from '../../components/Sections/Footer'
import ContactForm from "./ContactForm";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <ContactForm />
      <Footer />
    </div>

  );
}
