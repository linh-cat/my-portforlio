/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Basepage from "./layouts/Basepage";
import Image from "next/image";
import BgSectionAbout from "../styles/images/bg-about-section.jpg";

const SectionAbout = () => {
  return (
    <div className="section is-small about columns is-gapless">
      <div className="left-side column">
        <figure className="box">
          <Image
            src={BgSectionAbout}
            alt="images about section"
            width={600}
            height={450}
          />
        </figure>
      </div>
      <div className="right-side column">
        <h5 className="title is-5">My Story</h5>
        <p>
          💡 I am a Front-End developer with more than 2+ year of experience. I
          like to explore new technologies and develop software solutions and
          quick hacks. 🎓 I'm currently studying software engineer at the Sai
          Gon University of HCM. ✍️ In my free time, I love to relax myself by
          listening to music and watching my favorite films. I study all days,
          so after 10 PM is the only time that I can use for myself. I have a
          smartphone, so I can download a lot of songs from the Internet for
          free, and I usually listen to them with my headphones. If noone is at
          home, I will turn on the loudspeakers to have the best experience with
          music, but most of the time I only listen to music with headphones.
          Besides music, movies are my second biggest love. When I am not
          listening to the songs, I turn on my computer and watch some of the
          latest movies on the websites. Since most of the best films are from
          Europe and America, this is also a way for me to improve my English
          skills.
        </p>
      </div>
    </div>
  );
};

export default SectionAbout;
