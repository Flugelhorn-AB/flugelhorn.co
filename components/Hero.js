import style from './style/hero.module.scss';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import useMousePosition from '../hooks/useMousePosition.js';

const Hero = () => {
     const [offset, setOffset] = useState(0);
     const [randomColor, setRandomColor] = useState('');
     const [randomQuote, setRandomQuote] = useState({ page: '/' });
     const { x, y } = useMousePosition();

     const heroText = useRef();

     const handleScroll = () => {
          setOffset(window.pageYOffset);
     };

     const handleMouseMove = () => {};

     useEffect(() => {
          document.addEventListener('mousemove', handleMouseMove);

          return () => {
               document.removeEventListener('mousemove', handleMouseMove);
          };
     }, []);

     useEffect(() => {
          document.addEventListener('scroll', handleScroll);
          return () => {
               document.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const colorArray = [
          '#d4d83e',
          '#e89cd8',
          '#7de055',
          '#86baf1',
          '#eea663',
          '#53dce3',
          '#d5ca72',
          '#73ddc0',
          '#aad987',
          '#5be09f',
     ];

     const quoteArray = [
          {
               emoji: '🛠',
               page: '/contact',
               text: 'Work with us ↗',
          },
          {
               emoji: '📚 ',
               page: '/blog',
               text: 'Check out our blog section ↗',
          },
          {
               emoji: '👾',
               page: '/work',
               text: 'Check out our previous projects ↗',
          },
          {
               emoji: '👋',
               page: '/contact',
               text: "Don't be a stranger, say hi ↗",
          },
          {
               emoji: '📯',
               page: '/about',
               text: 'Flugelhorn Digital Agency ↗',
          },
          {
               emoji: '🌍',
               page: '/about',
               text: 'Location independent digital agency ↗',
          },
     ];

     useEffect(() => {
          document.addEventListener('mousemove', () => {
               console.log();
          });
     }, []);

     useEffect(() => {
          setRandomColor(
               colorArray[Math.floor(Math.random() * colorArray.length)]
          );
          setRandomQuote(
               quoteArray[Math.floor(Math.random() * quoteArray.length)]
          );
     }, []);

     return (
          <div
               style={{
                    transform: `translateY(-${offset * 0.6}px)`,
                    backgroundColor: randomColor,
                    opacity: 1 - offset * 0.001,
               }}
               className={style.hero}
          >
               <div
                    ref={heroText}
                    className={style.text}
                    style={{
                         transform: `translate(-${x / 500}%, -${y / 50}%) `,
                    }}
               >
                    {/* <h2>{randomQuote.emoji}</h2> */}
                    <Link href={randomQuote.page}>
                         <a>
                              <h1>{randomQuote.text}</h1>
                         </a>
                    </Link>
                    <p>tellus based digital agency</p>
               </div>
          </div>
     );
};

export default Hero;
