import React from "react";
import { scroller } from "react-scroll";
import ClientsSlider from "../components/ClientsSlider";
import ServiceBox from "../components/ServiceBox";

export default function Services() {
  return (
    <section id="services" className="w-full">
      <div className="bg-slate-100 py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <ClientsSlider />
        </div>
      </div>

      <div className="whiteBg py-[60px]">
        <div className="container">
          <header className="text-left md:text-center mb-[30px]">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
              Our Digital Services
            </h2>
            <p className="text-base mb-8">
              We offer a comprehensive suite of digital services tailored to
              your unique business goals. Each service is backed by our
              dedicated team, proven methodologies, and a commitment to quality
              from kickoff to lifelong maintenance. From web development to
              digital marketing, we help businesses in Ethiopia and beyond
              establish a strong online presence.
            </p>
          </header>

          <div className="flex flex-wrap gap-[2rem] justify-center w-fit">
            {[
              {
                icon: "browser",
                title: "Software Development",
                subtitle:
                  "Our full-stack engineers leverage React, Node.js, PHP, and more to build fast, secure, and scalable websites and applications. We handle everything from CMS integration to custom APIs, ensuring your digital solutions are robust and future-proof.",
              },
              {
                icon: "monitor",
                title: "Web Design",
                subtitle:
                  "We create pixel-perfect layouts and intuitive interfaces that delight users and amplify your brand's personality. Every design is mobile-first and conversion-optimized, ensuring your website performs excellently across all devices.",
              },
              {
                icon: "roller",
                title: "Graphics Design & Branding",
                subtitle:
                  "From logo creation to comprehensive brand guidelines, we craft cohesive visual identities that resonate with your audience and set you apart in saturated markets. Our designs tell your story and build lasting brand recognition.",
              },
              {
                icon: "Speaker",
                title: "SEO & Digital Marketing",
                subtitle:
                  "We implement comprehensive on-page and off-page SEO strategies, conduct thorough keyword research, and develop content plans to improve search rankings, drive qualified traffic, and measure real ROI for your business growth.",
              },
              {
                icon: "maintainance",
                title: "Lifelong Maintenance After Deployment",
                subtitle:
                  "Our post-launch support includes regular updates, performance monitoring, security audits, and feature enhancements so your site never falls behind. We ensure your digital presence remains current and competitive.",
              },
            ].map((service, i) => (
              <article
                key={i}
                className="flex p-5 hover:scale-[1.05] duration-300 rounded-2xl hover:shadow-2xl transition-shadow shadow-sm"
              >
                <div className="z-10">
                  <ServiceBox {...service} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
