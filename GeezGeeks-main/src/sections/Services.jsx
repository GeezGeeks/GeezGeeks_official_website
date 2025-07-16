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
      <div className="lightBg py-[50px]">
        <div className="container">
          <ClientsSlider />
        </div>
      </div>

      <div className="whiteBg py-[60px]">
        <div className="container">
          <div className="text-left md:text-center mb-[30px]">
            <h1 className="font40 extraBold">Our Services</h1>
            <p className="font15 text-center mb-5">
              We offer a full suite of digital services tailored to your unique
              goals. Each service is backed by a dedicated team, proven
              methodologies,
              <br />
              and a commitment to quality from kickoff to lifelong maintenance.
            </p>
          </div>

          <div className="flex flex-wrap  gap-5 justify-center">
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
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col items-center transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-2xl border border-transparent group-hover:border-indigo-500 hover:z-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/0 via-indigo-50/0 to-indigo-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                  <div className="z-10 w-full">
                    <ServiceBox {...service} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lightBg mt-3">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center py-[100px] md:py-[60px] gap-[30px]">
              <div className="w-full md:w-1/2 text-left md:text-left">
                <h4 className="font18 semiBold">About Us</h4>
                <h2 className="font40 extraBold my-[15px]">
                  A Study of Creativity
                </h2>
                <p className="font15 max-w-[475px]">
                  At GeezGeeks, we blend passion, expertise, and a dash of geeky
                  flair to transform ideas into digital realities. Founded in
                  2025 by a group of developers and designers at ASTU(Adama
                  Science and Technology), we’ve grown into a nimble team that
                  values transparency, collaboration, and measurable results.
                  Our approach is simple: we listen deeply, strategize
                  holistically, and execute meticulously—always with your vision
                  front and center-.
                </p>
                <div className="flexNullCenter mt-[30px] gap-[15px] flex-wrap">
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

              <div className="w-full md:w-1/2 relative -top-[70px] md:static">
                <div className="w-full">
                  <div className="flex justify-center md:justify-start gap-[12%] mb-[10px] mt-[50px]">
                    <div className="w-[40%]">
                      <img
                        src={AddImage1}
                        alt="office"
                        className="rounded-[1rem] shadow-lg"
                      />
                    </div>
                    <div className="w-[30%]">
                      <img
                        src={AddImage2}
                        alt="office"
                        className="rounded-[1rem] shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start gap-[5%]">
                    <div className="w-[20%] ml-[40%]">
                      <img
                        src={AddImage3}
                        alt="office"
                        className="rounded-[1rem] shadow-lg"
                      />
                    </div>
                    <div className="w-[30%]">
                      <img
                        src={AddImage4}
                        alt="office"
                        className="rounded-[1rem] shadow-lg"
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
