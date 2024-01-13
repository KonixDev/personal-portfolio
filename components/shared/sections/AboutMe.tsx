import Image from "next/image";
import React from "react";
import MotionDiv from "../MotionDiv";

const AboutMe = () => {
  return (
    <MotionDiv>
      <section id="aboutme" className="bg-[#f7f7f7] dark:bg-black/15">
        <div className="flex flex-col items-center px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <h1 className="mt-10 mb-4 self-center bg-clip-text text-gradient-vercel dark:text-gradient-vercel dark:gradient-text gradient-text">
            About Me
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:h-screen">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 opacity-75 rounded-tr-full"></div>
              <Image
                alt="Profile of Author"
                layout="fill"
                src="/full2-removebg.webp"
                sizes="(max-width: 500px) 100vw, 500px"
                className="object-cover object-top grayscale"
              />
            </div>
            <div className="flex items-center bg-gray-100">
              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-black">
                  👋 My name is{" "}
                  <span className="text-blue-600">Martín Coll</span>
                </h2>
                <p className="mt-4 text-gray-600">
                  I'm a full-stack developer with +4 years of experience. I'm
                  from Argentina Buenos Aires, I'm 23 years old. I have worked
                  with different technologies, from the most modern and popular
                  to the most traditional and specific.
                </p>
                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
};

export default AboutMe;
