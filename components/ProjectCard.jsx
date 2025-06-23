import React from "react";

const ProjectCard = ({ title, description, image, technologies = [] }) => {
  return (
    <div className="bg-tertiary mt-5 white rounded-lg overflow-hidden max-w-xs">
      <div className="w-full h-60 overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover border border-black"
        />
      </div>
      <div className="h-80 md:h-90 flex flex-col p-6 justify-between">
        <h3 className="">{title}</h3>
        <p className="text-white text-left">{description}</p>
        <div className="flex flex-wrap items-center justify-around">
          {technologies.map((Icon, index) => (
            <span key={index} className="text-xl m-1">
              {Icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
