import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CV_URL =
  "https://docs.google.com/document/d/1YyZ8Rcoh7tKN6yQHkH4rQR6hvA8-71nFVsXC1VYrbwU";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto px-4 py-52 lg:flex lg:items-center bg-white dark:bg-black">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-clip-text sm:text-5xl dark:text-gradient-vercel dark:gradient-text text-gradient-vercel gradient-text">
            FullStack Developer
            <span className="sm:block"> Martín Coll. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed dark:text-white/55 text-black ">
            Hi! I'm Martín, a FullStack Developer from Argentina. I'm a
            self-taught developer, I love to learn new technologies and I'm
            always looking for new challenges.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={"/projects"}>
              <Button variant={"outline"}>Projects</Button>
            </Link>
            <Link href={CV_URL} rel="noopener noreferrer" target="_blank">
              <Button variant={"default"}>Download CV</Button>
            </Link>
          </div>

          <div className="mx-auto mt-10 max-w-xl sm:text-xl/relaxed dark:text-white/55 text-black ">
            <div className="mt-6 flex justify-center gap-4 lg:justify-center">
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.linkedin.com/in/martincoll/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Linkedin </span>
                <FaLinkedin size={40} />
              </Link>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://github.com/KonixDev"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Github </span>
                <FaGithub size={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
