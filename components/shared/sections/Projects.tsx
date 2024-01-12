import React from "react";
// import ProjectsList from "../../../mocks/Projects";
import ProjectsList from "../../../data/Projects";

import ProjectCard from "../../cards/ProjectCard/ProjectCard";
import { Button } from "../../ui/button";
import "./Projects.css";
import Link from "next/link";

interface ProjectsProps {
  showMoreBtn?: boolean;
  slice?: boolean;
}

const Projects = ({ showMoreBtn = true, slice = true }: ProjectsProps) => {
  let projects = [...ProjectsList];

  if (slice) {
    projects = ProjectsList.slice(0, 3);
  }

  return (
    <section id="projects">
      <div className="flex flex-col items-center  bg-[#f7f7f7] dark:bg-black/15 pb-10">
        <h1 className="mb-4 mt-10 bg-clip-text dark:text-gradient-vercel dark:gradient-text text-gradient-vercel gradient-text">
          My Projects
        </h1>
        {/** Grid 3 columns */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center ms-10 me-10">
          {projects &&
            projects.map((project) => (
              <ProjectCard
                title={project.name}
                description={project.description}
                image={project.image}
                href={project.href}
              />
            ))}
        </div>

        {showMoreBtn && (
          <div className="mt-10 ">
            <Link href={"/projects"}>
              <Button variant={"default"}>View All Projects</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
