import style from './style/hero.module.scss';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
     const [offset, setOffset] = useState(0);
     const handleScroll = () => {
          if (window.pageYOffset > 0) {
               setOffset(window.pageYOffset);
          }
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
               className={style.hero}
          >
               <h1>Hero</h1>

               <div
                    style={{ opacity: offset * 0.001 }}
                    className={style.overlay}
               ></div>
          </div>
     );
};

export default Hero;
