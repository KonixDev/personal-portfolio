"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  PiArrowUpRight,
  PiLinkedinLogoThin,
  PiBehanceLogoThin,
  PiArrowDownThin,
  PiGithubLogoThin,
} from "react-icons/pi";

import { IoIosMailUnread } from "react-icons/io";

import { TbBrandUpwork } from "react-icons/tb";

import { useTheme } from "next-themes";

import { Tooltip } from "@nextui-org/react";

import Link from "next/link";
import Image from "next/image";
import PopupWidget from "./components/popupWidget";
// let Icons = [
//   { name: <PiTwitterLogoThin />, href: "https://twitter.com/Joenaldo" },
//   { name: <PiInstagramLogoThin />, href: "https://instagram.com/Joscriptt " },
//   { name: <PiGithubLogoLight />, href: "https://github.com/Joscriptt" },
// ];

export default function Homepage() {
  const { theme } = useTheme();
  //Fetch Projects with Server Side Rendering
  const [projects, setProjects] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data.data.data);
    };

    const getJobs = async () => {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data.data.data);
    };

    getProjects();
    getJobs();
  }, []);

  return (
    <div className=" w-full  px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        <div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:h-40"
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Location</p>
              <p className="text-neutral-500 text-xs ">Argentina</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <motion.img
            whileHover={{ scale: 3 }}
            className="h-full w-full duration-300 transition-all ease-in-out object-cover"
            src={theme == "dark" ? "/lightm.bmp" : "/map.webp"}
            alt=""
          />
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative rounded-lg sm:h-40  ">
          <div className=" absolute w-full p-2">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Mode</p>
              <div>
                <span>
                  <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                    <span
                      className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-yellow-400`}
                    ></span>
                    <span
                      className={`relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 g-yellow-400`}
                    ></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            <div className="">
              <p className="text-xs font-semibold max-sm:mt-16 sm:mt-4  ">
                Available for freelance <br /> design projects. Hit me up <br />{" "}
                for a collab 🦾
              </p>

              <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60  mt-3 rounded-full p-1 px-2 dark:bg-neutral-700/40 sm:w-full">
                {/**mailto:contacto@martincoll.dev */}

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:contacto@martincoll.dev"
                >
                  Send me a email
                </a>

                <PiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
        <div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  z-20 cursor-pointer relative shadow-xl rounded-lg  col-span-2 "
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">About</p>
              <p className="text-neutral-500 text-xs ">Martin Coll</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 px-3 pb-3">
            <p className="text-xs font-semibold leading-5">
              I'm Martin Coll, a FullStack Developer living in Argentina.
              Looking for awesome projects to work on. I'm a self-taught
              developer and I'm always learning new things. I have experience
              working with React, NextJS, NodeJS, MongoDB, Firebase, TailwindCSS
              and more. Let's work together!
            </p>
          </div>
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Experience</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative mt-7">
            {/* Starts */}

            {jobs?.map((job) => (
              <div className="flex gap-x-3 m-4 px-2 py-4" key={job.attributes.Link}>
                <div>
                  <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                    {job.attributes.YearTo}
                  </p>
                  <div>
                    <p className="text-[11px] mt-2 text-neutral-500">
                      {job.attributes.Language}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold">
                    {job.attributes.company}
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    {job.attributes.Description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>

        {/* Projects Scroll */}
        <div className=" dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Projects</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className="overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative mt-7">
            {projects?.map((project) => (
              <a
                key={project.attributes.Title}
                href={project.attributes.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5F5F5] dark:bg-[#1B1B1B] rounded-md px-1 relative flex gap-x-3 mt-4"
              >
                <div className="bg-[#F5F5F5] dark:bg-[#1B1B1B] rounded-md px-1 relative flex gap-x-3 mt-4  ">
                  <div className="flex justify-between items-center p-2  gap-x-2 mt-4">
                    <Image
                      width={300}
                      height={300}
                      className="w-14 h-14 rounded-full object-cover"
                      src={project.attributes.Image}
                      alt=""
                    />

                    <div>
                      <p className="text-xs">{project.attributes.Title}</p>
                      <p className="text-xs">
                        {project.attributes.Description}
                      </p>
                    </div>

                    <ul className="menu">
                      <a href="#0"></a>
                    </ul>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>

        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2  relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Get in touch</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 mb-4">
            <div className="flex justify-center gap-x-2 px-2">
              <Tooltip showArrow={true} content="Upwork" color="#161616">
                <Link
                  href={
                    "https://www.upwork.com/freelancers/~01c67880a7f794eaa8"
                  }
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <TbBrandUpwork className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="GitHub" color="#161616">
                <Link
                  href={"https://github.com/KonixDev"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiGithubLogoThin className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="E-mail" color="#161616">
                <Link
                  href={"mailto:contacto@martincoll.dev"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <IoIosMailUnread className="text-xl" />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-3 md:row-span-2 ">
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Latest Work</p>
              <p className="text-neutral-500 text-xs ">Waitlist</p>
            </div>
            <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <Image
            width={900}
            height={300}
            className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
            src={"/jo8.jpeg"}
            alt=""
          />
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2  relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Side Projects</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div
          className="bg-[#F5F5F5] italic dark:bg-[#1B1B1B] py-2 text-xs rounded-md px-2 relative flex gap-x-3 top-7 "
          >Coming Soon</div>
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg z-20 h-44 relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Leave your contact</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-24 flex flex-col items-center w-full px-2 ">
            <input
              className=" w-full rounded-full text-sm p-1 placeholder:text-neutral-700 outline-none border dark:border-neutral-600 border-neutral-400/60 pl-6 bg-neutral-900"
              type="email"
              placeholder="name@email.com"
            />
            <button className="text-xs  w-full  border dark:border-neutral-600 border-neutral-400/60  mt-2 rounded-full p-1 px-2 dark:bg-neutral-700/40">
              <span>Send</span>
            </button>
          </div>
        </div>
        <div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2"
        >
          <div>
            <p className="text-[10px] mt-2">
              “Martin is a great developer, he has a lot of experience and he is
              always willing to help. He is a great person and a great
              professional.”
            </p>

            <div className="flex items-center gap-x-2 mt-7">
              <Image
                height={400}
                width={400}
                className="w-8 h-8 rounded-full object-cover"
                src="/jo2.jpeg"
                alt=""
              />

              <div className="">
                <p className="text-xs">Lucas</p>
                <p className="text-xs">Founder, Soluciones Digitales</p>
              </div>
            </div>
          </div>
        </div>
        <div className="  rounded-lg  grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
          <div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg  h-44 p-2 relative "
          >
            <div className=" absolute w-full p-2 z-20">
              <p className="text-xs">Years of Experience</p>
              <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className="mt-10  w-full flex justify-center items-center">
              <h1 className="text-8xl">4</h1>
            </div>
          </div>
          <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2 relative z-40">
            <div>
              <div className=" absolute w-full p-2 z-20">
                <p className="text-xs">CV</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
              </div>
            </div>
            <div className="mt-14 w-full">
              <button
                onClick={() =>
                  window.open("/Spanish-MartinColl-CV-www.martincoll.dev.pdf")
                }
                className="text-xs flex w-full mt-3 items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40"
              >
                <span>View in Spanish</span>
                <PiArrowDownThin />
              </button>
              <button
                onClick={() =>
                  window.open("/MartinColl-CV-www.martincoll.dev.pdf")
                }
                className="text-xs flex w-full mt-3 items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40"
              >
                <span>View in English</span>
                <PiArrowDownThin />
              </button>
            </div>
          </div>
        </div>
        <PopupWidget/>

      </div>
    </div>
  );
}
