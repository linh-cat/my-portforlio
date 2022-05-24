import React from "react";
import Image from "next/image";
const BoxSkill = ({ image, name, description }) => {
  return (
    <div className="box-skill-main column">
      <Image src={image} alt="image" width={50} height={50} />
      <h4 className="box-skill-title">{name}</h4>
      <p className="description">{description}</p>
    </div>
  );
};

export default BoxSkill;
