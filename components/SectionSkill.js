import React from "react";
import BoxSkill from "./BoxSkill";
import ReactImage from "../styles/images/react.png";
import JsImage from "../styles/images/js-image.png";
import HTMLImage from "../styles/images/html.png";
import CSSImage from "../styles/images/css-3.png";
import TSImage from "../styles/images/ts-image.svg";
import MysqlImage from "../styles/images/mysql-image.png";
import PostgreSQLImage from "../styles/images/postgreSQL-image.png";
import MongoImage from "../styles/images/MongoDB_image.svg";
import NodeJSImage from "../styles/images/nodejs-image.svg";
import GitImage from "../styles/images/git-image.png";

const SectionSkill = () => {
  return (
    <div className="section skill" id="skill">
      <h3 className="title">Skill</h3>
      <div className="columns list-skill">
        <BoxSkill
          name="HTML"
          image={HTMLImage}
          description="HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!"
        />
        <BoxSkill
          name="CSS"
          image={CSSImage}
          description="CSS is the language we use to style an HTML document
          CSS describes how HTML elements should be displayed.
          This tutorial will teach you CSS from basic to advanced."
        />
        <BoxSkill
          name="Javascript"
          image={JsImage}
          description="JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
        />

        <BoxSkill
          name="ReactJS"
          image={ReactImage}
          description="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
        />
      </div>
      <div className="columns list-skill" style={{ marginTop: "20px" }}>
        <BoxSkill
          name="Typescript"
          image={TSImage}
          description="TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor."
        />
        <BoxSkill
          name="NodeJS"
          image={NodeJSImage}
          description="Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library."
        />
        <BoxSkill
          name="MySQL"
          image={MysqlImage}
          description="MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation)"
        />
        <BoxSkill
          name="PostgreSQL"
          image={PostgreSQLImage}
          description="PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance."
        />
      </div>
      <div className="columns list-skill" style={{ marginTop: "20px" }}>
        <BoxSkill
          name="Mongodb"
          image={MongoImage}
          description="Get your ideas to market faster with an application data platform built on the leading modern database. Support transactional, search, analytics, and mobile use cases while using a common query interface and the data model developers love."
        />

        <BoxSkill
          name="Git"
          image={GitImage}
          description="Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
        />
        <BoxSkill
          name="PostgreSQL"
          image={PostgreSQLImage}
          description="PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance."
        />
        <BoxSkill
          name="Mongodb"
          image={MongoImage}
          description="Get your ideas to market faster with an application data platform built on the leading modern database. Support transactional, search, analytics, and mobile use cases while using a common query interface and the data model developers love."
        />
      </div>
    </div>
  );
};

export default SectionSkill;
