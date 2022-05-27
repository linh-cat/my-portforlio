import React from "react";
import PortforlioItem from "./PortforlioItem";

import netflix from "../styles/images/netflix.png";
import fashe from "../styles/images/fashe.png";
import hal from "../styles/images/hal.png";
import nft from "../styles/images/nft.png";
import Basepage from "./layouts/Basepage";
const SectionPortforlio = () => {
  return (
    <div className="section portforlio">
      <h3 className="title is-3">My Portforlio</h3>
      <div className="columns portforlio-list">
        <PortforlioItem
          name="Netflix"
          image={netflix}
          link={"https://netflix-clone-apps.herokuapp.com/"}
        />
        <PortforlioItem
          name="Fashe shop"
          image={fashe}
          link={"https://brandly-fashe.herokuapp.com/"}
        />
        <PortforlioItem
          name="Shopping store"
          image={hal}
          link={"https://halshopping.herokuapp.com/"}
        />

        <PortforlioItem
          name="NFT marketplace"
          image={nft}
          link={"https://master--hok-marketplace.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default SectionPortforlio;
