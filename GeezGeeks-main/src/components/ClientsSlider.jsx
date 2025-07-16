import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientLogo01 from "../assets/img/clients/logo01.svg";
import ClientLogo02 from "../assets/img/clients/logo02.svg";
import ClientLogo03 from "../assets/img/clients/logo03.svg";
import ClientLogo04 from "../assets/img/clients/logo04.svg";
import ClientLogo05 from "../assets/img/clients/logo05.svg";
import ClientLogo06 from "../assets/img/clients/logo06.svg";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  const logos = [
    ClientLogo01,
    ClientLogo02,
    ClientLogo03,
    ClientLogo04,
    ClientLogo05,
    ClientLogo06,
    ClientLogo03,
    ClientLogo04,
    ClientLogo01,
    ClientLogo02,
  ];

  return (
    <div className="w-full bg-white dark:bg-[#0F172A] rounded-2xl p-4 md:p-8 shadow transition-colors duration-300">
      <Slider {...settings}>
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center h-[80px] md:h-[100px] cursor-pointer outline-none border-none"
          >
            <img
              src={logo}
              alt="client logo"
              className="h-full w-auto max-w-[120px] p-2 md:p-4 grayscale hover:grayscale-0 transition-all duration-200"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
