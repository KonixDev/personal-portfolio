import Divider from "@/components/dividers/Divider";
import AboutMe from "@/components/shared/sections/AboutMe";
import Experience from "@/components/shared/sections/Experience";
import Footbar from "@/components/shared/sections/Footbar";
import Hero from "@/components/shared/sections/Hero";
import Projects from "@/components/shared/sections/Projects";
import TechStack from "@/components/shared/sections/TechStack";
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <TechStack />
      <Divider />
      <AboutMe />
      <Divider />
      <Footbar />
    </>
  );
};

export default Page;
