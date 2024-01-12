import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className=" bg-[#f7f7f7] dark:bg-black/15 ">
        <div className="flex flex-col items-center">
          <h1 className=" mb-4 self-center mt-10 bg-clip-text dark:text-gradient-vercel dark:gradient-text text-gradient-vercel gradient-text">
            About Me
          </h1>
        </div>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-9 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <div className="absolute w-96 h-full left-0 top-0 rounded-tr-full bg-gradient-to-b from-blue-400 to-blue-600 opacity-75"></div>
                <Image
                  alt="Profile of Author"
                  fill
                  src="/full2-removebg.png"
                  sizes="(max-width: 500px) 100vw, 500px"
                  className="w-full h-72 md:h-auto lg:h-40 xl:h-80 object-cover object-top grayscale"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100 ">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

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
      </div>
    </section>
  );
};

export default AboutMe;
