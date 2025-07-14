import React from "react";
import ProjectBox from "../components/ProjectBox";
import FullButton from "../components/FullButton";
import ProjectImg1 from "../assets/img/projects/1.png";
import ProjectImg2 from "../assets/img/projects/2.png";
import ProjectImg3 from "../assets/img/projects/3.png";
import ProjectImg4 from "../assets/img/projects/4.png";
import ProjectImg5 from "../assets/img/projects/5.png";
import ProjectImg6 from "../assets/img/projects/6.png";
import AddImage2 from "../assets/img/add/add2.png";

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="whiteBg">
        <div className="container">
          <div className="text-left md:text-center mb-[30px]">
            <h1 className="font40 extraBold">Our Awesome Projects</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>

          <div className="row textCenter">
            {[ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg5, ProjectImg6].map((img, i) => (
              <div key={i} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox img={img} title="Awesome Project" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor." action={() => alert("clicked")} />
              </div>
            ))}
          </div>

          <div className="row flexCenter">
            <div className="my-[50px] w-[200px]">
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>

      <div className="lightBg">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center py-[100px] md:py-[60px] gap-[30px]">
            <div className="relative w-full md:w-1/2">
              <div className="absolute top-[-300px] left-0 w-full md:static md:top-0 md:order-1 px-[15%] md:px-0">
                <img className="radius8 w-full h-auto" src={AddImage2} alt="add" />
              </div>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}
