import Link from 'next/link';
import { url } from '../utils/fetcher';

import style from './style/project.module.scss';

const Project = ({ details }) => {
     return (
          <div className={`${style.project} ${style[details.projectSize]}`}>
               <div className={style.imageContainer}>
                    {details.cardPicture.map((pic) => {
                         return (
                              <img
                                   src={pic.image.url}
                                   className={style[pic.speed]}
                                   alt={pic.image.alternativeText}
                              />
                         );
                    })}
               </div>
               <div
                    className={`${style.info} ${
                         details.isColorWhite === true
                              ? style.textWhite
                              : style.textDark
                    }`}
               >
                    <h2 className={style.name}>{details.name}</h2>
                    <p className={style.tags}>{details.tags}</p>
                    {/* <p className={style.intro}>{details.intro}</p> */}
                    <Link href={`/work/${details.name}`}>
                         <a className={style.link}>Read more ↗</a>
                    </Link>
               </div>
          </div>
     );
};

export default Project;
