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
          handleScroll();
     }, []);

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
          '#1A1334',
          '#27294A',
          '#03545A',
          '#027350',
          '#07C283',
          '#ABD961',
          '#FCBF45',
          '#EF6B32',
          '#ED0445',
          '#A12A5E',
          '#710162',
          '#710162',
          '#022C7D',
     ];

     const quoteArray = [
          {
               emoji: '🛠',
               page: '/contact',
               text: 'Work with us ↗',
               subText: 'tellus based digital agency',
               background: '#63cfe1',
          },
          {
               emoji: '📚 ',
               page: '/blog',
               text: 'Have you seen our blog section? ↗',
               subText: 'tellus based digital agency',
               background: '#842726',
          },
          {
               emoji: '👾',
               page: '/#work',
               text: 'Take a look at previous projects ↗',
               subText: 'tellus based digital agency',
               background: '#2f2fa2',
          },
          {
               emoji: '👋',
               page: '/contact',
               text: "Don't be a stranger, say hi ↗",
               subText: 'tellus based digital agency',
               background: '#5cdb95',
          },
          {
               emoji: '📯',
               page: '/about',
               text: 'Flugelhorn Digital Agency ↗',
               subText: 'we create solutions for the new world',
               background: '#282828',
          },
     ];

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
