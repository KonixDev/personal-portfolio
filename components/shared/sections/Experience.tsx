import React from "react";
import { Timeline } from "../../ui/timeline";
import items from "../../../mocks/Experience";
import UserCard from "../../cards/UserCard/UserCard";
import Image from "next/image";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 bg-gradient-to-t from-black/10 to-white dark:bg-gradient-to-t dark:from-black/15 dark:to-black"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contenedor para Título y Descripción */}
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Reelevant Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              <span
                className="font-bold bg-gradient-to-r text-2xl from-black to-blue-400 bg-clip-text text-transparent
                 dark:bg-gradient-to-r dark:from-white dark:to-blue-400 dark:text-transparent"
              >
                I'm a full-stack developer with +4 years of experience with a
                focus on the back end. I have worked with different
                technologies, from the most modern and popular to the most
                traditional and specific.
              </span>
            </p>
            <div className="mt-10">
              <UserCard />
            </div>
          </div>

          {/* Contenedor para el Timeline */}
          <div className="flex-1">
            <Timeline activeItem={1} items={items} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
