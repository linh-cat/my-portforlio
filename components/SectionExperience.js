import React from "react";
import BoxExperience from "./BoxExperience";
import FptImage from "../styles/images/fptsoftware.jpg";
import Basepage from "./layouts/Basepage";

const SectionExperience = () => {
  return (
    <div className="section experience" id="experience">
      <h3 className="title is-3">Experience</h3>

      <div className="experience-box">
        <BoxExperience
          image={FptImage}
          timework="February 2022 - present"
          projectName="Airforce One"
          company="FPT Software"
          description="Work closely with customers on the requirement
          clarification Collaborate with BA and analyze customer requirements to
          design new features Resolve and support technical solutions. Prepare
          unit test. Support my team to fix bugs. Define solution and tool
          support overhead process to optimize cost for the project. Training
          and supporting members so that they can work to their full potential.
          Train the framework for the development team and support them in the
          development phase. Development and maintenance of the core framework
          for the system including customized UI Controls, the base framework,
          and the utility functions such as Authorization, Authentication,
          Licensing management, Menu setting, Reporting module, free layout
          report, and file storage."
          technology="ReactJS, Typescript, Java, Ant Design, Redux-saga "
        />

        <BoxExperience
          image={FptImage}
          timework="February 2021 - February 2022"
          projectName="Meetz Web App - PRESIDENT’S VOLUNTEERISM & PHILANTHROPY AWARDS 2021"
          company="WONDER HUMAN RESOURCES CO. LTD"
          description="Rebuild the architecture of the web app.
          Understand about real-time socket io.
          It restructured the application to use a folder-by-feature style and separate the code into multiple layers. This made the application more scalable, discoverable, and readable.
          Develop function live stream and chat in the meet, poll vote, resolution vote, and Q&A.
          Develop the zoom meeting function similar to google meet.
          Responsive web app to suit users.
          Develop new functions according to user requirements. 
          Continuous improvement gives users the latest experience.
          "
          technology="ReactJS, NodeJS, Redux, Tailwindcss "
        />
        <BoxExperience
          image={FptImage}
          timework="February 2021 - February 2022"
          projectName="PWAs Web App - THE NATIONAL GALLERY OF SINGAPORE PWA."
          company="WONDER HUMAN RESOURCES CO. LTD"
          description="Build UI and functions according to user requirements.
          Code optimization so that more people can read and understand the code.
          Learn a lot about making mobile websites, optimizing the code, layout CSS, and user experience.          
          "
          technology="ReactJS, NodeJS, Redux, Tailwindcss"
        />
        <BoxExperience
          image={FptImage}
          timework="February 2021 - February 2022"
          projectName="E-Service App"
          company="WONDER HUMAN RESOURCES CO. LTD"
          description="Build UI and function according to user requirements.
          Build dashboard admin web page to manage apps natively.
          Code optimization so that more people can read and understand the code.
          Deloy dashboard website on cloud Heroku.
          Learn a lot about the native app, optimizing the code, mobile layout, and user experience."
          technology="ReactJS, NodeJS, Redux, MUI "
        />
      </div>
    </div>
  );
};

export default SectionExperience;
