import React from "react";
import ContactImg1 from "../assets/img/contact-1.png";
import ContactImg2 from "../assets/img/contact-2.png";
import ContactImg3 from "../assets/img/contact-3.png";

export default function Contact() {
  return (
    <section id="contact" className="w-full">
      <div className="lightBg">
        <div className="container">
          <div className="pt-[70px] pb-[30px] max-[860px]:text-center">
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <div className="row pb-[30px]">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <form className="pt-[70px] pb-[30px] max-[860px]:py-[30px]">
                <label className="font13">First name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold w-full bg-transparent border-0 border-b border-[#707070] outline-none shadow-none h-[30px] mb-[30px]" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold w-full bg-transparent border-0 border-b border-[#707070] outline-none shadow-none h-[30px] mb-[30px]" />
                <label className="font13">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold w-full bg-transparent border-0 border-b border-[#707070] outline-none shadow-none h-[30px] mb-[30px]" />
                <textarea rows="4" cols="50" id="message" name="message" className="font20 extraBold w-full bg-transparent border-0 border-b border-[#707070] outline-none shadow-none min-h-[100px] mb-[30px]" />
              </form>
              <div className="flex max-[991px]:w-full max-[991px]:mb-[50px]">
                <input
                  type="submit"
                  value="Send Message"
                  className="pointer animate radius8 border border-[#7620ff] bg-[#7620ff] text-white px-[15px] py-[15px] w-full max-w-[220px] hover:bg-[#580cd2] hover:border-[#7620ff] hover:text-white outline-none"
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div className="flexNullCenter flexColumn w-1/2">
                <div className="max-w-[180px] self-end my-[10px] mr-[30px]">
                  <img src={ContactImg1} alt="office" className="radius6" />
                </div>
                <div className="max-w-[180px] self-end my-[10px] mr-[30px]">
                  <img src={ContactImg2} alt="office" className="radius6" />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mt-[100px]">
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
