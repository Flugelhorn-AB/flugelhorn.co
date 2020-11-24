import style from './style/projectHero.module.scss';
import { useEffect, useRef, useState } from 'react';

const ProjectHero = ({img}) => {
     const [offset, setOffset] = useState();
     const handleScroll = () => {
          setOffset(window.pageYOffset);
     };

     useEffect(() => {
          document.addEventListener('scroll', handleScroll);
          return () => {
               document.removeEventListener('scroll', handleScroll);
          };
     }, []);

     return (
          <div
               style={{
                    top: `${offset * 0.6}px`,
               }}
               className={style.projectHero}
          >

               {img ? <img src={img} /> : ''}
               <div
                    style={{ opacity: offset * 0.001 }}
                    className={style.overlay}
               ></div>
          </div>
     );
};

export default ProjectHero;
