import style from './style/navigation.module.scss';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
const Navigation = () => {
     const nav = useRef();
     const [menuExpanded, setMenuExpanded] = useState(false);
     const [windowWidth, setWindowWidth] = useState();
     const [isMobile, setIsMobile] = useState();
     const [offset, setOffset] = useState(0);

     if (typeof window !== 'undefined') {
          useEffect(() => {
               window.addEventListener('resize', () =>
                    setWindowWidth(window.innerWidth)
               );
               if (windowWidth >= 735) {
                    setMenuExpanded(false);
                    setIsMobile(false);
               }
               if (windowWidth < 735) {
                    setIsMobile(true);
               }
          }, [windowWidth]);
     }

     useEffect(() => {
          document.addEventListener('scroll', handleScroll);
          return () => {
               document.removeEventListener('scroll', handleScroll);
          };
     }, []);

     useEffect(() => {
          let lastScrollTop = 0;

          window.addEventListener(
               'scroll',
               function () {
                    var scrollTop =
                         window.pageYOffset ||
                         document.documentElement.scrollTop;

                    if (
                         scrollTop > lastScrollTop &&
                         nav.current &&
                         scrollTop > 100
                    ) {
                         nav.current.classList.remove(style.showNav);
                         nav.current.classList.add(style.hideNav);
                    } else if (nav.current) {
                         nav.current.classList.remove(style.hideNav);
                         nav.current.classList.add(style.showNav);
                    }

                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
               },
               false
          );
     }, []);

     const handleScroll = async () => {
          await setOffset(window.pageYOffset / 100);
     };

     const handleMenuExpanded = async () => {
          await setMenuExpanded(!menuExpanded);
     };

     let colorOffset = 255 - offset * 1000;

     const rgbOffset = `rgb(${colorOffset}, ${colorOffset}, ${colorOffset})`;

     return (
          <div
               className={`${style.navigation}  
                ${menuExpanded ? style.mobileMenuExpanded : ''}`}
               style={{
                    backgroundColor: `rgba(255,255,255, ${
                         offset < 0.75 ? offset : 0.75
                    })`,
               }}
               ref={nav}
          >
               <div className={style.navigationContainer}>
                    <div className={`${style.logo} `}>
                         <Link href="/">
                              <a
                                   style={{
                                        color: rgbOffset,
                                   }}
                              >
                                   Flugelhorn
                              </a>
                         </Link>
                    </div>
                    <div className={style.navigationContent}>
                         <Link href="/#work">
                              <a style={{ color: rgbOffset }}>Work</a>
                         </Link>
                         <Link href="/blog">
                              <a style={{ color: rgbOffset }}>Blog</a>
                         </Link>
                         <Link href="/about">
                              <a style={{ color: rgbOffset }}>About</a>
                         </Link>
                         <Link href="/contact">
                              <a style={{ color: rgbOffset }}>Contact</a>
                         </Link>
                    </div>
               </div>
               <a
                    className={`${style.menuButton} ${
                         menuExpanded
                              ? style.buttonExpanded
                              : style.buttonCompressed
                    }`}
                    onClick={handleMenuExpanded}
               >
                    <div className={style.span}>
                         <span style={{ backgroundColor: rgbOffset }} />
                         <span style={{ backgroundColor: rgbOffset }} />
                    </div>
               </a>
               <div
                    className={`${style.navigationContentMobile} ${
                         menuExpanded ? style.expanded : style.compressed
                    }`}
               >
                    <Link href="/#work">
                         <a className={style.mobileItem}>Work</a>
                    </Link>
                    <Link href="/blog">
                         <a className={style.mobileItem}>Blog</a>
                    </Link>
                    <Link href="/about">
                         <a className={style.mobileItem}>About</a>
                    </Link>
                    <Link href="/contact">
                         <a className={style.mobileItem}>Contact</a>
                    </Link>
                    <Footer />
               </div>
          </div>
     );
};

export default Navigation;
