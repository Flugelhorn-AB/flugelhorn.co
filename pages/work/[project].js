import Router from "next/router";
import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import ProjectHero from "../../components/ProjectHero";
import { fetcher, url } from "../../utils/fetcher";
import style from "./project.module.scss";

const Project = ({ details }) => {
  // const {project: {details}} = props

  console.log(details);
const coverImg = `http://localhost:1337${details.cardImage.url}`;
  return (
    <div className={style.projectContainer}>
<Navigation />
        <ProjectHero img={coverImg} />
<div className={style.project}>

        <div className={style.details}>
      <h2 className={style.name}>{details.name}</h2>
      <h2 className={style.tags}>{details.tags}</h2>
      <h2 className={style.intro}>{details.intro}</h2>
      </div>

<div className={style.leftImage}>
{/* <img src={`http://localhost:1337${details.imageRow[0].leftImg.url}`} /> */}
        </div>
        <div className={style.rightImage}>
        {/* <img src={`http://localhost:1337${details.imageRow[0].rightImg.url}`} /> */} */}
        </div>

        <div className={style.fullWidthImage}>
        {/* <img src={`http://localhost:1337${details.fullWidthImage.url}`} /> */}
        </div>

        <div className={style.description}>
      {/* <h2>{details.description}</h2> */}
      </div>

      <div className={style.process}>
      {details.stepProcess.map(step => {
          return <div className={style.step}>{step.id}{step.step}</div>
      })}
      </div>

<div className={style.techStack}>
      {details.techStack.map(technology => {
          return <h2>{technology.technology}</h2>
      })}
</div>
    </div>
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
