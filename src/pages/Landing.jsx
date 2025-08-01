import React from "react";

import TopNavbar from "../components/TopNavbar";
import Header from "../sections/Header/Header.jsx";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Blog from "../sections/Blog";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import AboutUs from "../sections/About/aboutUs.jsx";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <AboutUs />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
