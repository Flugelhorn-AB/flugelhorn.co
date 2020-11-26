import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import ProjectHero from "../../components/ProjectHero";
import { fetcher, url } from "../../utils/fetcher";
import style from "./project.module.scss";

const Project = ({ details }) => {
  // const {project: {details}} = props

  console.log(details);
const coverImg = details.cardImage.url;

  return (


    <div className={style.projectContainer}>
        
        <Navigation />
        
        <ProjectHero img={coverImg} />

        <div className={style.project}>
        <div className={style.details}>
            <h2 className={style.name}>{details.name}</h2>
            <h2 className={style.tags}>{details.tags}</h2>
            <h2 className={style.intro}>{details.intro}</h2>


            {details.introImage.url ? 
            <Link href={details.link}>
                <a>
                    <img className={style.introImage} src={details.introImage.url} />
                </a>
            </Link>

: ''}
      <Link href={details.link}>
      <a  className={style.link}>View ↗</a>
      </Link>


      <div className={style.stack}>
      {details.stack.map(technology => {
          return <p>{technology.technology}</p>
      })}
</div>
      </div>


      
<div className={style.descriptionContainer}>
        <div className={style.description}>
            <h1>About</h1>
      <p>{details.description}</p>
      </div></div>



 

      <div className={style.processContainer}> 
          <h1>Project Overview</h1>
      <div className={style.process}>
      {details.stepProcess.map(step => {
          return <div key={step.id} className={style.step}><p>{step.id}. {step.step}</p></div>
      })}
      </div></div>




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
