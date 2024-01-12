import React from "react";
import Projects from "@/components/shared/sections/Projects";

const Page = ({}) => {
  return (
    <section>
      <div className="mt-10">
        <Projects showMoreBtn={false} slice={false} />
      </div>
    </section>
  );
};

export default Page;
