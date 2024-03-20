"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ChatScape-Random-Chat-Application",
    description: "A product that enables people to interact with strangers in a similar way as Omegle.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhishekkumar5606/ChatScape---Random-Chat-Application",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "RESTAURANT-RESERVATION",
    description: "This project is a Restaurant Reservation System, designed to facilitate the booking of tables at a restaurant. It provides a user-friendly interface for customers to browse available reservation slots, select their preferred date and time, and make reservations online.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhishekkumar5606/RESTAURANT-RESERVATION",
    previewUrl: "https://restaurant-reservation-blue.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Site",
    description: "Weather live in a weather.",
    image: "/images/projects/4.png",
    tag: ["All", "Npm"],
    gitUrl: "https://github.com/abhishekkumar5606/weather-site",
    previewUrl: "https://spectacular-jelly-015b3e.netlify.app/",
  },
  {
    id: 4,
    title: "currency-xchange-ls {NPM}",
    description: "currency-exchange-ls is a lightweight npm package for converting currencies using the latest exchange rates provided by Free Currency API.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhishekkumar5606/currency-xchange-ls",
    previewUrl: "https://www.npmjs.com/package/currency-xchange-ls",
  },
 
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All Projects"
          isSelected={tag === "All Projects"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        /> */}
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Npm"
          isSelected={tag === "Npm"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
