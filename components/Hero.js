import style from './style/hero.module.scss';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import useMousePosition from '../hooks/useMousePosition.js';

const Hero = () => {
     const [offset, setOffset] = useState(0);
     const [randomColor, setRandomColor] = useState('');
     const [randomQuote, setRandomQuote] = useState({ page: '/' });
     const { x, y } = useMousePosition();

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
               subText: 'tellus based digital agency',
          },
          {
               emoji: '📚 ',
               page: '/blog',
               text: 'Have you seen our blog section? ↗',
               subText: 'tellus based digital agency',
          },
          {
               emoji: '👾',
               page: '/#work',
               text: 'Take a look at previous projects ↗',
               subText: 'tellus based digital agency',
          },
          {
               emoji: '👋',
               page: '/contact',
               text: "Don't be a stranger, say hi ↗",
               subText: 'tellus based digital agency',
          },
          {
               emoji: '📯',
               page: '/about',
               text: 'Flugelhorn Digital Agency ↗',
               subText: 'we create solutions for the new world',
          },
     ];

     useEffect(() => {
          document.addEventListener('mousemove', () => {});
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
                    className={style.text}
                    style={{
                         transform: `translate(-${x / 500}%, -${
                              y / 50
                         }%) perspective(${x / 100000}px)`,
                    }}
               >
                    <Link href={randomQuote.page}>
                         <a>
                              <h1>{randomQuote.text}</h1>
                         </a>
                    </Link>
                    <p>{randomQuote.subText}</p>
               </div>
          </div>
     );
};

export default Hero;
