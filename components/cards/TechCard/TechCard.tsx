import React from "react";
import "./TechCard.css";
import { IconType } from "react-icons";

interface TechnologyCardProps {
  title: string;
  logo: IconType;
}

const renderIcon = (icon: IconType) => {
  const Icon = icon;
  return (
    <div>
      <Icon size={70} />
    </div>
  );
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ title, logo }) => {
  return (
    <div
      className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out 
    delay-150 hover:-translate-y-1 hover:scale-103
     hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100"
    >
      {renderIcon(logo)}
      <p className="font-bold">{title}</p>
    </div>
  );
};

export default TechnologyCard;
