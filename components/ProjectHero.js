import style from './style/projectHero.module.scss';
import { useEffect, useRef, useState } from 'react';

const ProjectHero = ({img}) => {
     const [offset, setOffset] = useState();
const overlay = useRef()


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
               }}
               className={style.projectHero}

          >

               {img ? <img src={img} /> : ''}
               <div
               ref={overlay}
                    style={{ opacity: offset * 0.0016 }}
                    className={style.overlay}
               ></div>
          </div>
     );
};

export default ProjectHero;
