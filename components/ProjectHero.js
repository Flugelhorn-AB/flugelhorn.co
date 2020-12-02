import style from './style/projectHero.module.scss';
import { useEffect, useRef, useState } from 'react';

const ProjectHero = ({ img, isWork }) => {
     const [offset, setOffset] = useState();

     const handleScroll = () => {
          setOffset(window.pageYOffset);
     };

     //  useEffect(() => {
     //     if (window.pageYOffset > 700){
     //         hideOverlay()
     //     } else {showOverlay()}

     //  },[window.pageYOffset])

     useEffect(() => {
          document.addEventListener('scroll', handleScroll);
          return () => {
               document.removeEventListener('scroll', handleScroll);
          };
     }, []);

     return (
          <div
               style={{
                    transform: `translateY(-${offset * 0.6}px)`,
                    opacity: 1 - offset * 0.002,
               }}
               className={`${style.projectHero} ${
                    isWork ? style.workHero : style.aboutHero
               }`}
          >
               {img ? <img src={img} /> : ''}
          </div>
     );
};

export default ProjectHero;
