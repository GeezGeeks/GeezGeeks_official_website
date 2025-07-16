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
    <section
      id="projects"
      className="w-full py-16 bg-slate-50 dark:bg-[#0F172A] transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-left md:text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-2">
            Our Projects
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore a selection of our favorite projects and case studies, each
            demonstrating how we solve real-world challenges with creative
            digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full font-semibold border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0F172A] ${
                filter === cat
                  ? "bg-blue-600 dark:bg-cyan-400 text-white dark:text-slate-900 border-blue-600 dark:border-cyan-400 shadow"
                  : "bg-white dark:bg-[#18181b] border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-900"
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
              className="bg-white dark:bg-[#18181b] rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-blue-600 dark:hover:border-cyan-400 relative"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg w-full h-40 object-cover mb-4 shadow"
              />
              <h3 className="text-xl font-bold mb-2 text-center text-slate-800 dark:text-slate-100">
                {project.name}
              </h3>
              <p className="text-sm text-center mb-2 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-50 dark:bg-cyan-900 rounded text-xs font-semibold text-blue-600 dark:text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 bg-blue-600 dark:bg-cyan-400 text-white dark:text-slate-900 text-xs rounded-full">
                {project.category}
              </span>
            </div>
          ))}
        </div>

        {/* Modal for project link */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/70 dark:bg-black/80 transition-colors duration-300">
            <div className="bg-white dark:bg-[#18181b] p-8 rounded-2xl shadow-lg max-w-md w-full relative border border-slate-100 dark:border-slate-700">
              <button
                className="absolute top-2 right-2 text-2xl font-bold text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-200"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="rounded-lg w-full h-40 object-cover mb-4 shadow"
              />
              <h3 className="text-xl font-bold mb-2 text-center text-slate-800 dark:text-slate-100">
                {selectedProject.name}
              </h3>
              <p className="text-sm text-center mb-2 text-slate-600 dark:text-slate-300">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-50 dark:bg-cyan-900 rounded text-xs font-semibold text-blue-600 dark:text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-blue-600 dark:bg-cyan-400 text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-cyan-300 transition-all duration-200"
              >
                Visit Project
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
