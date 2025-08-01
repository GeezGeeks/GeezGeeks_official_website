import React from "react";
import { scroller } from "react-scroll";
import ClientsSlider from "../components/ClientsSlider";
import ServiceBox from "../components/ServiceBox";
import FullButton from "../components/FullButton";


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
          <div className="text-left md:text-center mb-[30px]">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              Our Services
            </h1>
            <p className="text-base mb-8">
              We offer a full suite of digital services tailored to your unique
              goals. Each service is backed by a dedicated team, proven
              methodologies, and a commitment to quality from kickoff to
              lifelong maintenance.
            </p>
          </div>

          <div className="flex flex-wrap gap-[2rem] justify-center w-fit">
            {[
              {
                icon: "browser",
                title: "Software-Development",
                subtitle:
                  "Our full-stack engineers leverage React, Node.js, PHP, and more to build fast, secure, and scalable websites and applications. We handle everything from CMS integration to custom APIs.",
              },
              {
                icon: "monitor",
                title: "Web Design",
                subtitle:
                  "We create pixel-perfect layouts and intuitive interfaces that delight users and amplify your brand’s personality. Every design is mobile-first and conversion-optimized.",
              },
              {
                icon: "roller",
                title: "Graphics Design & Branding",
                subtitle:
                  "From logo creation to brand guidelines, we craft cohesive visual identities that resonate with your audience and set you apart in saturated markets.",
              },
              {
                icon: "Speaker",
                title: "SEO & Digital Marketing",
                subtitle:
                  "We implement on-page and off-page SEO strategies, keyword research, and content plans to improve rankings, drive qualified traffic, and measure real ROI. ",
              },
              {
                icon: "maintainance",
                title: "Lifelong Maintenance After Deployment",
                subtitle:
                  "Our post-launch support includes regular updates, performance monitoring, security audits, and feature enhancements so your site never falls behind.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="flex p-5 hover:scale-[1.05] duration-300 rounded-2xl hover:shadow-2xl transition-shadow shadow-sm"
              >
                <div className="z-10">
                  <ServiceBox {...service} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
