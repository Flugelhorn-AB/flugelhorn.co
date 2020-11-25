import style from "./style/navigation.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Navigation = () => {
  const nav = useRef();
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const [isMobile, setIsMobile] = useState();

  if (typeof window !== "undefined") {
    useEffect(() => {
      window.addEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
      if (windowWidth >= 600) {
        setMenuExpanded(false);
        setIsMobile(false);
      }
      if (windowWidth < 600) {
        setIsMobile(true);
      }
    }, [windowWidth]);
  }

  useEffect(() => {
    let lastScrollTop = 0;

    window.addEventListener(
      "scroll",
      function () {
        var scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && nav.current && scrollTop > 100) {
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
  };

  return (
    <div
      className={`${style.navigation} 
               `}
      ref={nav}
    >
      <div className={style.navigationContainer}>
        <div className={`${style.logo} `}>
          <Link href="/">
            <a>Flugelhorn</a>
          </Link>
        </div>
        <div className={style.navigationContent}>
          <Link href="#">
            <a>Work</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="#">
            <a>Contact</a>
          </Link>
        </div>
      </div>
      <a
        className={`${style.menuButton} ${
          menuExpanded ? style.buttonExpanded : style.buttonCompressed
        }`}
        onClick={handleMenuExpanded}
      >
        <div className={style.span}>
          <span />
          <span />
        </div>
      </a>
      <div
        className={`${style.navigationContentMobile} ${
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
