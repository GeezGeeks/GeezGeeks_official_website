import React from "react";
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
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap">
            {[
              {
                icon: "roller",
                title: "Graphic Design",
                subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
              },
              {
                icon: "monitor",
                title: "Web Design",
                subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
              },
              {
                icon: "browser",
                title: "Development",
                subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
              },
              {
                icon: "printer",
                title: "Print",
                subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
              },
            ].map((service, i) => (
              <div key={i} className="w-full md:w-[20%] mr-[5%] md:last:mr-0 py-[80px] text-center">
                <ServiceBox {...service} />
              </div>
            ))}
          </div>
        </div>

        <div className="lightBg">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center py-[100px] md:py-[60px] gap-[30px]">
              <div className="w-full md:w-1/2 text-left md:text-left">
                <h4 className="font15 semiBold">A few words about company</h4>
                <h2 className="font40 extraBold my-[15px]">A Study of Creativity</h2>
                <p className="font12 max-w-[475px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <div className="flexNullCenter mt-[30px] gap-[15px] flex-wrap">
                  <div className="w-[190px]">
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div className="w-[190px]">
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 relative -top-[70px] md:static">
                <div className="w-full">
                  <div className="flex justify-center md:justify-start gap-[12%] mb-[10px]">
                    <div className="w-[48%]">
                      <img src={AddImage1} alt="office" className="rounded-[1rem] shadow-lg" />
                    </div>
                    <div className="w-[30%]">
                      <img src={AddImage2} alt="office" className="rounded-[1rem] shadow-lg" />
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start gap-[5%]">
                    <div className="w-[20%] ml-[40%]">
                      <img src={AddImage3} alt="office" className="rounded-[1rem] shadow-lg" />
                    </div>
                    <div className="w-[30%]">
                      <img src={AddImage4} alt="office" className="rounded-[1rem] shadow-lg" />
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
