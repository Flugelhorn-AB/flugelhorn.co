import style from './style/hero.module.scss';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
const Hero = () => {
     const [offset, setOffset] = useState(0);
     const [randomColor, setRandomColor] = useState('');
     const [randomQuote, setRandomQuote] = useState({ page: '/' });
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
               <div className={style.text}>
                    <h2>{randomQuote.emoji}</h2>
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
