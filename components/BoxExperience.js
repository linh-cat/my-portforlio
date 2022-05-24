import React from "react";
import Image from "next/image";

const BoxExperience = ({
  image,
  timework,
  projectName,
  description,
  company,
  technology,
}) => {
  return (
    <div className="box columns gap">
      <div className="box-image columns">
        <Image src={image} alt="image" className="box-image" />
      </div>
      <div className="box-content column">
        <h4 className="title is-4">{company}</h4>
        <p className="box-time">Time work: {timework}</p>
        <p className="technology">Technology: {technology}</p>
        <p className="project-name">Project name: {projectName}</p>
        <p className="description">Description: {description}</p>
      </div>
    </div>
  );
};

export default BoxExperience;
