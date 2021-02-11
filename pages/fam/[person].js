import Router from "next/router";
import { useEffect, useState, useRef } from "react";
import Navigation from "../../components/Navigation";
import { fetcher, url } from "../../utils/fetcher";
import style from "./person.module.scss";
import Head from "../../components/head";
import Prism from "prismjs";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/Footer";
import AboutBlock from "../../components/AboutBlock";
import BlogCard from "../../components/BlogCard";

var md = require("markdown-it")();

const Person = ({ person, cats }) => {
  //   const loadLanguages = require("prismjs/components/");
  //   loadLanguages(["bash"]);

  console.log(person, cats);

  return (
    <div className={style.person}>
      {/* <Head
        title={`${article.title} | Flugelhorn`}
        description={article.intro}
        image={article.cardPicture.url}
      /> */}

      <AnimatePresence exitBeforeEnter>
        <motion.div
          style={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          exit={{ backgroundColor: "white", opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Navigation showOnStart={true} />

          <AboutBlock title={person.name} isPerson={true}>
            <div className={style.intro}>
              <div className={style.dets}>{/* <h2>{person.type}</h2> */}</div>
              <div className={style.avatarContainer}>
                <img src={person.avatar.url} alt="" />
              </div>
              <p className={style.description}>{person.description}</p>
            </div>
          </AboutBlock>
          <AboutBlock title="Articles" isPerson={true}>
            {person.articles.map((article, i) => {
              // let category = "Code";
              const category = cats.filter(
                (cat) => cat.id === article.category
              );
              return (
                <BlogCard
                  details={{ ...article, category: { name: category[0].name } }}
                  key={i}
                  isPersonPage={true}
                />
              );
            })}
          </AboutBlock>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetcher(`${url}/article-authors`);
  const paths = res.map((member) => {
    let name = member.name;
    name = name.replace(new RegExp(" ", "g"), "%20");
    // name = name.replace(new RegExp("å", "g"), "a");
    return {
      params: { person: name.replace(new RegExp(" ", "g"), "%20") },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const res = await fetcher(`${url}/article-authors/?name=${params.person}`);
  const cat = await fetcher(`${url}/categories`);
  return { props: { person: res[0], cats: cat } };
}

export default Person;
