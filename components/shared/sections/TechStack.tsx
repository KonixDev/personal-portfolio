import React from "react";
import TechStackList from "../../../mocks/TechStack";
import TechnologyCard from "../../cards/TechCard/TechCard";
import Link from "next/link";

const TechStack = () => {
  return (
    <section id="techstack">
      <div className="flex flex-col items-center bg-white dark:bg-black pb-16">
        <h1 className="mb-4 self-center mt-10 bg-clip-text dark:text-gradient-vercel dark:gradient-text text-gradient-vercel gradient-text">
          My Tech Stack
        </h1>
        {/** Grid 3 columns */}
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
          {TechStackList &&
            TechStackList.map((tech) => (
              <Link rel="noopener noreferrer" target="_blank" href={tech.link}>
                <TechnologyCard title={tech.name} logo={tech.icon} />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
