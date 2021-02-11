import AboutBlock from "../components/AboutBlock";
import Head from "../components/head";
import Navigation from "../components/Navigation";
import ProjectHero from "../components/ProjectHero";
import style from "./style/family.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { url, fetcher } from "../utils/fetcher";

import Footer from "../components/Footer";
import { useState } from "react";
import Link from "next/link";

const Family = ({ authors }) => {
  const [partners, setPartners] = useState(
    authors.filter((author) => {
      return author.type === "partner";
    })
  );
  const [crew, setCrew] = useState(
    authors.filter((author) => {
      return author.type === "crew";
    })
  );
  const [writers, setWriters] = useState(
    authors.filter((author) => {
      return author.type === "writer";
    })
  );

  return (
    <div className={style.family}>
      <Head
        title="Fam | We at the agency"
        description="
        All about us who work and/or write for Flugelhorn."
        image="/mexico.jpeg"
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
          <ProjectHero img="/bricks.JPG" />

          <AboutBlock title="Partners">
            <div className={style.partners}>
              {partners.map((partner) => {
                return (
                  <div key={partner.name} className={style.partner}>
                    <div className={style.avatarContainer}>
                      <img src={partner.avatar.url} alt="" />
                    </div>

                    <Link href={`/fam/${partner.name}`}>
                      <a>
                        <span className={style.name}>{partner.name}</span>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </AboutBlock>
          <AboutBlock title="Crew">
            <div className={style.crew}>
              {crew.map((partner) => {
                return (
                  <div key={partner.name} className={style.crewMember}>
                    <div className={style.avatarContainer}>
                      <img src={partner.avatar.url} alt="" />
                    </div>

                    <Link href={`/fam/${partner.name}`}>
                      <a>
                        <span className={style.name}>{partner.name}</span>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </AboutBlock>

          <AboutBlock title="Writers">
            <div className={style.writers}>
              {writers.map((partner) => {
                return (
                  <div key={partner.name} className={style.writer}>
                    <div className={style.avatarContainer}>
                      <img src={partner.avatar.url} alt="" />
                    </div>

                    <Link href={`/fam/${partner.name}`}>
                      <a>
                        <span className={style.name}>{partner.name}</span>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </AboutBlock>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const getStaticProps = async () => {
  const authors = await fetcher(`${url}/article-authors`);
  const cats = await fetcher(`${url}/categories`);

  return { props: { authors } };
};

export default Family;
