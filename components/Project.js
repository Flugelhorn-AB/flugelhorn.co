import Link from "next/link";
import { url } from "../utils/fetcher";

import style from "./style/project.module.scss";

const Project = ({ details }) => {
  console.log(details);
  return (
    <div className={`${style.project} ${style[details.projectSize]}`}>
      <div className={style.imageContainer}>
        <img src={`${url}${details.cardImage.url}`} alt="" />
      </div>
      <div
        className={`${style.info} ${
          details.isColorWhite === true ? style.textWhite : style.textDark
        }`}
      >
        <h2 className={style.name}>{details.name}</h2>
        <p className={style.tags}>{details.tags}</p>
        <p className={style.intro}>{details.intro}</p>
        <Link href={`/${details.name}`}>
          <a className={style.link}>Read more ↗</a>
        </Link>
      </div>
    </div>
  );
};

export default Project;