import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import TopNavbar from "./components/Nav/TopNavbar.jsx";

// Lazy load the pages
const Landing = lazy(() => import("./pages/Home/Landing.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/Aboutus.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));
const PrivacyTerms = lazy(() => import("./pages/Privacy/Privacy.jsx"));
const WebsiteDesignPage = lazy(() => import("./pages/WebsiteDesigning.jsx/WebsiteDesigning.jsx"));
const MobileAppDesigning = lazy(() => import("./pages/MobileAppDesigning/MobileAppDesinging.jsx"));
const LogoDesignPage = lazy(() => import("./pages/LogoDesigning/LogoDesigning.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

export default function App() {
  return (
    <Router>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <TopNavbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyTerms />} />
          <Route path="/websitedevelopment" element={<WebsiteDesignPage />} />
          <Route path="/appdevelopment" element={<MobileAppDesigning />} />
          <Route path="/logodesigning" element={<LogoDesignPage />} />
          <Route path="*" element={<NotFound />} /> {/* Handle 404 */}
        </Routes>
      </Suspense>
    </Router>
  );
}
