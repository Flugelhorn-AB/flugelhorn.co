import style from './style/navigation.module.scss';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
const Navigation = ({ setIsMenuOpen }) => {
     const nav = useRef();
     const [menuExpanded, setMenuExpanded] = useState(false);

     const openMenu = () => {
          if (menuExpanded) {
               document.body.style.top = `-${window.scrollY}px`;
               document.body.style.position = 'fixed';
          } else {
               const scrollY = document.body.style.top;
               document.body.style.position = '';
               document.body.style.top = scrollY;
               window.scrollTo(0, parseInt(scrollY || '0') * -1);
          }
     };

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

     const handleMenuExpanded = async () => {
          await setMenuExpanded(!menuExpanded);
          await openMenu();
     };

     return (
          <div
               className={`${style.navigation} 
               `}
               ref={nav}
          >
               {' '}
               <div className={style.logo}>
                    <Link href="#">
                         <a>Flugelhorn</a>
                    </Link>
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
                         <span />
                         <span />
                         <span />{' '}
                    </div>
               </a>
               <div
                    className={`${style.navigationContent} ${
                         menuExpanded ? style.expanded : style.compressed
                    }`}
               >
                    <Link href="#">
                         <a>Work</a>
                    </Link>
                    <Link href="#">
                         <a>Blog</a>
                    </Link>
                    <Link href="#">
                         <a>Contact</a>
                    </Link>
               </div>
          </div>
     );
};

export default Navigation;
