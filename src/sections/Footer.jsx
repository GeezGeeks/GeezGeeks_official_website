import React from "react";
import { Link } from "react-scroll";
import Instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";
import telegram from "../assets/img/telegram.png";
import tiktok from "../assets/img/tiktok.png";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="w-full bg-slate-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="upperFooter flex flex-col md:flex-row items-center justify-between py-5 gap-4">
          <address className="left-f float-start not-italic">
            <h3 className="text-center font-semibold mb-2">Contact Address</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:geezgeeks09@gmail.com"
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                geezgeeks09@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+251931460438"
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                +251-931460438
              </a>
            </p>
            <p>Location: Addis Ababa, Ethiopia</p>
          </address>
          <div className="right-f flex flex-col gap-8">
            <h3 className="text-center">Follow Us On</h3>
            <nav aria-label="Social media links">
              <div className="flex gap-8">
                <a
                  href="https://instagram.com/geezgeeks"
                  aria-label="Follow us on Instagram"
                >
                  <img src={Instagram} alt="Instagram" className="w-10 h-10" />
                </a>
                <a
                  href="https://t.me/geezgeeks"
                  aria-label="Follow us on Telegram"
                >
                  <img src={telegram} alt="Telegram" className="w-10 h-10" />
                </a>
                <a
                  href="https://www.tiktok.com/@geezgeekss"
                  aria-label="Follow us on TikTok"
                >
                  <img src={tiktok} alt="TikTok" className="w-10 h-10" />
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-4">
          <Link
            to="home"
            smooth={true}
            offset={-80}
            className="flex items-center gap-3 cursor-pointer"
            aria-label="Go to top of page"
          >
            <h1 className="text-lg font-extrabold text-white">Geez Geeks</h1>
          </Link>

          <p className="text-sm text-slate-300">
            © {getCurrentYear()} -{" "}
            <span className="text-cyan-400 font-semibold">Geez Geeks</span> All
            Rights Reserved
          </p>

          <Link
            to="home"
            smooth={true}
            offset={-80}
            className="text-cyan-400 hover:text-cyan-200 text-sm font-semibold cursor-pointer transition-colors duration-200"
            aria-label="Back to top"
          >
            Back to top
          </Link>
        </div>
      </div>

      {/* Schema.org structured data for footer */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Geez Geeks",
          url: "https://geezgeeks.netlify.app/",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+251-931460438",
            contactType: "customer service",
            email: "geezgeeks09@gmail.com",
            areaServed: "Ethiopia",
            availableLanguage: "English",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "Ethiopia",
            addressLocality: "Addis Ababa",
          },
          sameAs: [
            "https://instagram.com/geezgeeks",
            "https://t.me/geezgeeks",
            "https://www.tiktok.com/@geezgeekss",
          ],
        })}
      </script>
    </footer>
  );
}
