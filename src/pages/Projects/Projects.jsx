

import { useRef, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import Heading from "../../components/Heading/Heading";

const Projects = () => {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add("active");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="project-main">
      <div className="projects-heading">
        <Heading heading={"Projects"} />
      </div>

      <div
        className="projects-cards"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <ProjectCard name="Project 1" />
        <ProjectCard name="Project 2" />
        <ProjectCard name="Project 3" />
        <ProjectCard name="Project 4" />
        <ProjectCard name="Project 5" />
      </div>
    </div>
  );
};

export default Projects;
