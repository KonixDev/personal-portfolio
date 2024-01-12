import React from "react";
import "./ProjectCard.css";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description?: string;
  image: string;
  href: string;
}

const ProjectCard = ({ title, description, image, href }: ProjectCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img alt="Office" src={image} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <Link href={href} rel="noopener noreferrer" target="_blank">
          <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
