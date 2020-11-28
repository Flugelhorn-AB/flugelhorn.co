import style from './style/hero.module.scss';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
     const [offset, setOffset] = useState(0);
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
                    transform: `translateY(-${offset * 0.6}px)`,
               }}
               className={style.hero}
               >

               <div className={style.text}></div>
               <div className={style.image}></div>
                    <div
                    style={{ opacity: offset * 0.001 }}
                    className={style.overlay}
               ></div>
          </div>
     );
};

export default Hero;
