"use client";

import React, { useEffect, useState } from "react";
import "./Header.css";
import { Button } from "../../ui/button";
import { ModeToggle } from "../../buttons/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Llamar a handleScroll al montar el componente para verificar la posición inicial del scroll
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`bg-white dark:bg-black header ${
        isScrolled
          ? "bg-opacity-80 dark:bg-opacity-80 backdrop-blur dark:backdrop-blur"
          : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600 dark:text-teal-300" href="/">
          <span className="sr-only" />
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={96}
            height={96}
            className="rounded-full"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-300 dark:text-white/60 dark:hover:text-white/95"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Scroll
                  to="experience"
                  smooth={true}
                  duration={800}
                  className="text-gray-600 transition hover:text-gray-300
                dark:text-white/60 dark:hover:text-white/95"
                >
                  <span className="flex">Experience</span>
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="techstack"
                  smooth={true}
                  duration={800}
                  className="text-gray-600 transition hover:text-gray-300
                dark:text-white/60 dark:hover:text-white/95"
                >
                  <span className="flex">Skills</span>
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="aboutme"
                  smooth={true}
                  duration={800}
                  className="text-gray-600 transition hover:text-gray-300
                dark:text-white/60 dark:hover:text-white/95"
                >
                  <span className="flex">About Me</span>
                </Scroll>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 ">
            <div className="sm:flex sm:gap-4">
              <Button variant="default">Projects</Button>
              <ModeToggle />
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex bg-gray-600/25 h-[0.01rem]" />
    </header>
  );
};

export default Header;
