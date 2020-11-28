import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import ProjectHero from "../../components/ProjectHero";
import Head from "../../components/head";
import { fetcher, url } from "../../utils/fetcher";
import style from "./project.module.scss";
import AboutBlock from "../../components/AboutBlock.js";

const Project = ({ details }) => {
  // const {project: {details}} = props

  console.log(details);
  const coverImg = details.cardImage.url;

  return (
    <div className={style.projectContainer}>
      <Head
        title={`${details.name} | Flugelhorn Digital Web Agency`}
        description={details.intro}
        image={details.introImage.url}
      />

      <Navigation />

      <ProjectHero img={coverImg} />

      <AboutBlock title={details.name}>
        <p className={style.tags}>{details.tags}</p>
        <p className={style.intro}>{details.intro}</p>
        <Link href={details.link}>
          <a>Visit ↗</a>
        </Link>
        <div className={style.stack}>
          {details.stack.map((technology) => {
            return <p key={technology.technology}>{technology.technology}</p>;
          })}
        </div>
      </AboutBlock>

      <AboutBlock title="How we worked">
        {details.howWeWorked.map((step) => {
          const paragraphs = step.text.split("<br/>");
          console.log(paragraphs);
          return (
            <div key={step.id} className={style.step}>
              {paragraphs.map((p, i) => {
                return <p key={i}>{p}</p>;
              })}
              {step.image[0] ? <img src={step.image[0].url} /> : " "}
            </div>
          );
        })}
      </AboutBlock>

      <AboutBlock title="What we did">
        {details.whatWeDid.map((step) => {
          return (
            <div key={step.id} className={style.step}>
              <p>{step.text}</p>
            </div>
          );
        })}
      </AboutBlock>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetcher(`${url}/projects`);
  const paths = res.map((project) => {
    let name = project.name;
    name = name.replace(" ", "%20");
    name = name.replace("ä", "%C3%A4");
    return { params: { project: name } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const res = await fetcher(`${url}/projects/?name=${params.project}`);

  return { props: { details: res[0] } };
}

export default Project;
