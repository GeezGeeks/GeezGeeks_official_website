import React from "react";
import FullButton from "../../components/FullButton";
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

const AboutUs = () => {
  return (
    <div className="bg-white mt-8 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 text-left">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">
              About Us
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-4">
              A Study of Creativity
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-600 max-w-xl mb-6">
              At GeezGeeks, we blend passion, expertise, and a dash of geeky
              flair to transform ideas into digital realities. Founded in 2025
              by a group of developers and designers at ASTU (Adama Science and
              Technology), we’ve grown into a nimble team that values
              transparency, collaboration, and measurable results. Our approach
              is simple: we listen deeply, strategize holistically, and execute
              meticulously—always with your vision front and center.
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
  );
};

export default AboutUs;
