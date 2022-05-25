/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import demo from "../styles/images/demo.jpg";
import Link from "next/link";

const PortforlioItem = ({ image, name, link }) => {
  return (
    <div className="box column portforlio-item">
      <figure className="image">
        <Image src={image} alt="demo image" className="image" layout="fill" />
      </figure>

      <div className="content">
        <h5 className="is-4 name">{name}</h5>
        <Link href={link} target="_blank">
          <button className="button is-black is-small">Project Link</button>
        </Link>
      </div>
    </div>
  );
};

export default PortforlioItem;
