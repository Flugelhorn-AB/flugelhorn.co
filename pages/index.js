import { fetcher, url } from "../utils/fetcher";

import { useEffect, useRef, useState } from "react";
import Head from "../components/head";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import ProjectGallery from "../components/ProjectGallery";
import style from "./style/index.module.scss";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Index = (props) => {
  const index = useRef();
  return (
    <div ref={index} className={`${style.index} `}>
      <Head
        title="Flugelhorn | Digital Web Agency 🐙"
        description="
                    We design and develop mesmerizing digital products for companies and organizations. Always responsive, always search engine optimized, always stunning."
        image="/flugel-fam.png"
      />

      <AnimatePresence exitBeforeEnter>
        <motion.div
          style={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          exit={{ backgroundColor: "white", opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Navigation />
          <Hero indexRef={index} />
          <section id="work">
            <ProjectGallery projects={props.projects} />
          </section>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const getStaticProps = async () => {
  const projects = await fetcher(`${url}/projects`);

  return { props: { projects } };
};
export default Index;
