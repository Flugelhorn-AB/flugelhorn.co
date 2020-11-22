import { fetcher, url } from "../utils/fetcher";

import { useEffect, useRef, useState } from "react";
import Head from "../components/head";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import ProjectGallery from "../components/ProjectGallery";
import style from "./style/index.module.scss";

const Index = (props) => {
  const index = useRef();
  return (
    <div ref={index} className={`${style.index} `}>
      <Head />
      <Navigation />
      <Hero indexRef={index} />
      <ProjectGallery projects={props.projects} />
    </div>
  );
};

export const getStaticProps = async () => {
  const projects = await fetcher(`http://localhost:1337/projects`);
  console.log(projects);
  return { props: { projects } };
};
export default Index;
