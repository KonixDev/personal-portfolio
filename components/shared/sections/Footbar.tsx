import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footbar = () => {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold sm:text-3xl">
            Let's stay in touch!
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only"> Email </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 dark:text-black p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                value={"contacto@martincoll.dev"}
                placeholder="john@doe.com"
              />

              <Button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-fullpx-5 py-3 text-sm font-medium text-black dark:text-white transition me-2"
                variant={"outline"}
              >
                <a href="contacto@martincoll.dev">Send Email</a>
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-16 flex gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg"></p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.linkedin.com/in/martincoll/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Linkedin </span>
                <FaLinkedin size={70} />
              </Link>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://github.com/KonixDev"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Github </span>
                <FaGithub size={70} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © 2024. Profesional Portfolio by Martín Coll. All rights reserved.
            <br />
            Created with ❤️ in Next 14
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footbar;
