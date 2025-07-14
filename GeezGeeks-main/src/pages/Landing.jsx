import React from "react";

import TopNavbar from "../components/TopNavbar";
import Header from "../sections/Header";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Blog from "../sections/Blog";
import Pricing from "../sections/Pricing";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
