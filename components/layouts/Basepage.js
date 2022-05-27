import Head from "next/head";
import React from "react";

const Basepage = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" key="description" content={description} />
      <meta name="author" content="Linh" />
      <meta httpEquiv="refresh" content="30" />
      <meta name="keywords" content="porfotlio for linh"></meta>
      <meta name="title" key="title" content={title} />
      <meta property="og:url" content="my-portforlio-chi.vercel.app" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Portforlio Mr Linh" />
      <meta
        property="og:description"
        content="I am a Front-End developer with more than 2+ year of experience. I like to explore new technologies and develop software solutions and quick hacks."
      />
      <meta
        property="og:image"
        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
      />
      <link rel="image/x-icon" href="/favicon.ico" />
    </Head>
    <div className="">{children}</div>;
  </>
);

export default Basepage;
