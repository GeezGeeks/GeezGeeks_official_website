import React, { useState } from "react";

import FullButton from "../components/FullButton";
import AddImage2 from "../assets/img/add/add2.png";
import ProjectImg1 from "../assets/img/projects/1.png";
import ProjectImg2 from "../assets/img/projects/2.png";
import ProjectImg3 from "../assets/img/projects/3.png";
import ProjectImg4 from "../assets/img/projects/4.png";
import ProjectImg5 from "../assets/img/projects/5.png";
import ProjectImg6 from "../assets/img/projects/6.png";

const projectsData = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase work and skills.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    category: "Web development",
    image: ProjectImg1,
    link: "https://example.com/portfolio",
  },
  {
    name: "E-commerce UI",
    description: "Modern e-commerce UI/UX design for a fashion brand.",
    technologies: ["Figma", "Adobe XD"],
    category: "UI/UX Design",
    image: ProjectImg2,
    link: "https://example.com/ecommerce-ui",
  },
  {
    name: "Brand Logo",
    description: "Logo and branding for a startup.",
    technologies: ["Illustrator", "Photoshop"],
    category: "Graphics Design",
    image: ProjectImg3,
    link: "https://example.com/brand-logo",
  },
  {
    name: "Blog Platform",
    description: "A full-stack blog platform with authentication.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    category: "Web development",
    image: ProjectImg4,
    link: "https://example.com/blog-platform",
  },
  {
    name: "Mobile App UI",
    description: "UI/UX design for a productivity mobile app.",
    technologies: ["Figma"],
    category: "UI/UX Design",
    image: ProjectImg5,
    link: "https://example.com/mobile-app-ui",
  },
  {
    name: "Flyer Design",
    description: "Promotional flyer for an event.",
    technologies: ["Photoshop"],
    category: "Graphics Design",
    image: ProjectImg6,
    link: "https://example.com/flyer-design",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "ALL",
    "Web development",
    "UI/UX Design",
    "Graphics Design",
  ];
  const filteredProjects =
    filter === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="w-full">
      <div className="whiteBg">
        <div className="container">
          <div className="text-left md:text-center mb-[30px]">
            <h1 className="font40 extraBold">Our Projects</h1>
            <p className="font15">
              Explore a selection of our favorite projects and case studies,
              each demonstrating how we solve real-world challenges with
              creative digital solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full font-semibold border transition-all duration-200 ${
                  filter === cat
                    ? "bg-[#7620ff] text-white border-[#7620ff]"
                    : "bg-white border-[#7620ff] text-[#7620ff] hover:bg-[#f3f3f3]"
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#7620ff] relative"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <h3 className="font20 font-extrabold mb-2 text-center">
                  {project.name}
                </h3>
                <p className="font13 text-center mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[#f3f3f3] rounded text-xs font-semibold text-[#7620ff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="absolute top-4 right-4 px-3 py-1 bg-[#7620ff] text-white text-xs rounded-full">
                  {project.category}
                </span>
              </div>
            ))}
          </div>

          {/* Modal for project link */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999]">
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full relative">
                <button
                  className="absolute top-2 right-2 text-2xl font-bold text-[#7620ff]"
                  onClick={() => setSelectedProject(null)}
                >
                  &times;
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <h3 className="font20 font-extrabold mb-2 text-center">
                  {selectedProject.name}
                </h3>
                <p className="font13 text-center mb-2">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[#f3f3f3] rounded text-xs font-semibold text-[#7620ff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-[#7620ff] text-white rounded-lg font-semibold hover:bg-[#580cd2] transition-all duration-200"
                >
                  Visit Project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="lightBg">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center py-[100px] md:py-[60px] gap-[30px]">
            <div className="relative w-full md:w-1/2">
              <div className="absolute top-[-300px] left-0 w-full md:static md:top-0 md:order-1 px-[15%] md:px-0">
                <img
                  className="radius8 w-full h-auto"
                  src={AddImage2}
                  alt="add"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 text-left md:text-left">
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold my-[15px]">
                A Study of Creativity
              </h2>
              <p className="font12 max-w-[475px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <div className="flexNullCenter mt-[30px] gap-[15px] flex-wrap">
                <div className="w-[190px]">
                  <FullButton
                    title="Get Started"
                    action={() => alert("clicked")}
                  />
                </div>
                <div className="w-[190px]">
                  <FullButton
                    title="Contact Us"
                    action={() => alert("clicked")}
                    border
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
