import { url } from "../utils/fetcher";

import style from "./style/project.module.scss";

const Project = ({ details }) => {
  const projectSize = "projectLarge";
  return (
    <div className={`${style.project} ${style[details.projectSize]}`}>
      <div className={style.imageContainer}>
        <img src={`${url}${details.cardImage.formats.large.url}`} alt="" />
      </div>
      <div
        className={`${style.info} ${
          details.isColorWhite ? style.textWhite : style.textDark
        }`}
      >
        <h2 className={style.name}>{details.name}</h2>
        <p className={style.tags}>{details.tags}</p>
        <p className={style.intro}>{details.intro}</p>
      </div>
    </div>
  );
};

export default Project;
