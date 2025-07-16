import React, { useRef, useState } from "react";
import ContactImg1 from "../assets/img/contact-1.png";
import ContactImg2 from "../assets/img/contact-2.png";
import ContactImg3 from "../assets/img/contact-3.png";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");
    setSent(false);
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSent(true);
        },
        (error) => {
          setError("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="w-full">
      <div className="lightBg dark:bg-[#18181b] transition-colors duration-300">
        <div className="container">
          <div className="pt-[70px] pb-[30px] max-[860px]:text-center">
            <h1 className="font40 extraBold text-[#18181b] dark:text-white transition-colors duration-300">
              Let's get in touch
            </h1>
            <p className="font13 text-[#333] dark:text-gray-300 transition-colors duration-300">
              We’re excited to hear about your project and explore how we can
              work together. Fill out the form or drop us an email, and
              <br />
              we’ll respond within one business day.
            </p>
          </div>
          <div className="row pb-[30px]">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex items-center justify-center">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-white dark:bg-[#23232a] shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto border border-[#e0e7ff] dark:border-[#333] transition-colors duration-300"
              >
                <div className="mb-6 relative">
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    required
                    className="peer h-12 w-full border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-[#7620ff] bg-transparent"
                    placeholder="First Name"
                  />
                  <label
                    htmlFor="fname"
                    className="absolute left-0 -top-4 text-gray-600 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[#7620ff] peer-focus:text-sm"
                  >
                    First Name
                  </label>
                </div>
                <div className="mb-6 relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#7620ff] bg-transparent"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-4 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[#7620ff] peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
                <div className="mb-6 relative">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#7620ff] bg-transparent"
                    placeholder="Subject"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-0 -top-4 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[#7620ff] peer-focus:text-sm"
                  >
                    Subject
                  </label>
                </div>
                <div className="mb-8 relative">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#7620ff] bg-transparent resize-none"
                    placeholder="Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-4 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[#7620ff] peer-focus:text-sm"
                  >
                    Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#7620ff] to-[#4b1fa7] text-white font-bold py-3 rounded-full shadow-lg hover:from-[#4b1fa7] hover:to-[#7620ff] transition-colors duration-200"
                >
                  Send Message
                </button>
                {sent && (
                  <div className="text-green-600 mt-4 text-center">
                    Message sent successfully!
                  </div>
                )}
                {error && (
                  <div className="text-red-600 mt-4 text-center">{error}</div>
                )}
              </form>
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
