import style from './style/hero.module.scss';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
     const [offset, setOffset] = useState(0);
     const [randomColor, setRandomColor] = useState('');
     const handleScroll = () => {
          setOffset(window.pageYOffset);
     };

     useEffect(() => {
          document.addEventListener('scroll', handleScroll);
          return () => {
               document.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const colorArray = [
          '#74b095',
          '#d970e1',
          '#6bd946',
          '#e97996',
          '#66e293',
          '#ef7a46',
          '#71dbd6',
          '#dcde3f',
          '#7ba8e0',
          '#9ec647',
          '#d1a0d2',
          '#71b36c',
          '#d7a07c',
          '#cdd68f',
          '#d1a63f',
     ];

     useEffect(() => {
          setRandomColor(
               colorArray[Math.floor(Math.random() * colorArray.length)]
          );
     }, []);

     return (
          <div
               style={{
                    transform: `translateY(-${offset * 0.6}px)`,
                    backgroundColor: randomColor,
               }}
               className={style.hero}
          >
               <div className={style.text}>
                    <h1>Work with us</h1>
                    <p>tellus based digital solutions provider</p>
               </div>
               <div
                    style={{ opacity: offset * 0.001 }}
                    className={style.overlay}
               ></div>
          </div>
     );
};

export default Hero;
