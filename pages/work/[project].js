import Router from "next/router";
import { useEffect } from "react";
import { fetcher, url } from "../../utils/fetcher";
import style from "./project.module.scss";

const Project = ({ details }) => {
  // const {project: {details}} = props

  console.log(details);
  return (
    <div className={style.Project}>
      <h2>{details.name}</h2>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetcher(`${url}/projects`);
  const paths = res.map((project) => {
    let name = project.name;
    name = name.replace(" ", "%20");
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
