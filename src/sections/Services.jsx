import React from "react";
import { scroller } from "react-scroll";
import ClientsSlider from "../components/ClientsSlider";
import ServiceBox from "../components/ServiceBox";
import FullButton from "../components/FullButton";
import AddImage1 from "../assets/img/add/1.png";
import AddImage2 from "../assets/img/add/2.png";
import AddImage3 from "../assets/img/add/3.png";
import AddImage4 from "../assets/img/add/4.png";

export default function Services() {
  return (
    <section id="services" className="w-full">
      <div className="bg-white dark:bg-[#0F172A] py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <ClientsSlider />
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-[#18181b] py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-left md:text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-2">
              Our Services
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              We offer a full suite of digital services tailored to your unique
              goals. Each service is backed by a dedicated team, proven
              methodologies, and a commitment to quality from kickoff to
              lifelong maintenance.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
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
                className="w-full md:w-1/4 max-w-xs mx-auto mb-8 md:mb-0 group"
              >
                <div className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-lg p-8 h-full flex flex-col items-center transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-2xl border border-slate-100 dark:border-slate-700 group-hover:border-blue-600 dark:group-hover:border-cyan-400 hover:z-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-50/0 to-blue-200/40 dark:from-cyan-900/0 dark:via-cyan-900/0 dark:to-cyan-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                  <div className="z-10 w-full">
                    <ServiceBox {...service} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#0F172A] mt-8 py-16 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2 text-left">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-cyan-400 mb-2">
                  About Us
                </h4>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-4">
                  A Study of Creativity
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mb-6">
                  At GeezGeeks, we blend passion, expertise, and a dash of geeky
                  flair to transform ideas into digital realities. Founded in
                  2025 by a group of developers and designers at ASTU (Adama
                  Science and Technology), we’ve grown into a nimble team that
                  values transparency, collaboration, and measurable results.
                  Our approach is simple: we listen deeply, strategize
                  holistically, and execute meticulously—always with your vision
                  front and center.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <div className="w-[190px]">
                    <FullButton
                      title="Contact Us"
                      action={() =>
                        scroller.scrollTo("contact", {
                          smooth: true,
                          offset: -80,
                          duration: 500,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 relative">
                <div className="w-full">
                  <div className="flex justify-center md:justify-start gap-8 mb-4 mt-8">
                    <div className="w-[40%]">
                      <img
                        src={AddImage1}
                        alt="office"
                        className="rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className="w-[30%]">
                      <img
                        src={AddImage2}
                        alt="office"
                        className="rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start gap-4">
                    <div className="w-[20%] ml-[40%]">
                      <img
                        src={AddImage3}
                        alt="office"
                        className="rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className="w-[30%]">
                      <img
                        src={AddImage4}
                        alt="office"
                        className="rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
