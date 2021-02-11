import style from "./style/navigation.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { useContext } from "react";
import NavContext from "./NavContext.js";
import Router from "next/router";

const Navigation = ({ showOnStart }) => {
  const nav = useRef();
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const [isMobile, setIsMobile] = useState();
  const [offset, setOffset] = useState(0);
  const [menuUnderlay, setMenuUnderlay] = useState(false);
  const [logoBlack, setLogoBlack] = useState(false);
  const { isRouteChanging } = useContext(NavContext);

  const setWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  if (typeof window !== "undefined") {
    useEffect(() => {
      window.addEventListener("resize", setWidth);
      if (windowWidth >= 735) {
        setMenuExpanded(false);
        setIsMobile(false);
      }
      if (windowWidth < 735) {
        setIsMobile(true);
      }

      return () => {
        window.addEventListener("resize", setWidth);
      };
    }, [windowWidth]);
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    navHandler();
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let lastScrollTop = 0;
  const navHandler = async (mobileNav) => {
    if (nav.current) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      let isExpanded = false;
      await setMenuExpanded((prev) => {
        isExpanded = prev;
        return prev;
      });

      if (showOnStart || (scrollTop >= 100 && !isExpanded)) {
        nav.current.classList.add(style.navNotOnTop);
        setLogoBlack(true);
      } else {
        nav.current.classList.remove(style.navNotOnTop);
        setLogoBlack(false);
      }

      if (scrollTop > 100) {
        setMenuUnderlay(true);
        nav.current.classList.add(style.scrollNav);
      } else {
        setMenuUnderlay(false);
        nav.current.classList.remove(style.scrollNav);
      }
      if (
        scrollTop > lastScrollTop &&
        nav.current &&
        scrollTop > 0 &&
        mobileNav
      ) {
        nav.current.classList.remove(style.showNav);
        nav.current.classList.add(style.hideNav);
      } else if (nav.current) {
        nav.current.classList.remove(style.hideNav);
        nav.current.classList.add(style.showNav);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navHandler, false);
    return () => {
      window.removeEventListener("scroll", navHandler, false);
    };
  }, []);

  const handleScroll = async () => {
    await setOffset(window.pageYOffset / 100);
  };

  const handleMenuExpanded = async () => {
    //     Router.router.push({ pathname: "/#work" });
    setLogoBlack(true);
    setMenuExpanded((prev) => {
      return !prev;
    });

    navHandler(false);
    //     Router.router.push({ pathname: "/#work" });
  };

  const menuExpandedFalse = (e) => {
    e.preventDefault();
    Router.router.push({ pathname: "/#work" }, "/#work");
    setMenuExpanded(false);
  };

  let colorOffset = 255 - offset * 1000;

  const rgbOffset = `rgb(${colorOffset}, ${colorOffset}, ${colorOffset})`;

  return (
    <div
      className={`${style.navigation}  
                ${menuExpanded ? style.mobileMenuExpanded : ""}`}
      ref={nav}
      style={{
        backgroundColor: `rgba(255,255,255, ${offset} / 10)`,
      }}
    >
      <div className={style.navigationContainer}>
        <div className={`${style.logo} `}>
          <Link href="/">
            <a style={{ color: menuExpanded ? "black" : "" }}>
              <img
                className={style.imageLogo}
                src={
                  logoBlack ? "/logo/logo-black.svg" : "/logo/logo-white.svg"
                }
              />
              Flugelhorn
            </a>
          </Link>
        </div>
        <div className={style.navigationContent}>
          <Link href="/#work">
            <a>Work</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
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
          menuExpanded
            ? style.expanded
            : isRouteChanging && menuExpanded
            ? style.expanded
            : style.compressed
        }`}
      >
        <a className={style.mobileNavLogo}>
          <img src="/logo/logo-black.svg" />
          Flugelhorn
        </a>
        <a onClick={menuExpandedFalse} className={style.mobileItem}>
          Work
        </a>
        <Link href="/blog">
          <a
            onClick={() => {
              setMenuExpanded(false);
            }}
            className={style.mobileItem}
          >
            Blog
          </a>
        </Link>
        <Link href="/about">
          <a
            onClick={() => {
              setMenuExpanded(false);
            }}
            className={style.mobileItem}
          >
            About
          </a>
        </Link>
        <Link href="/contact">
          <a
            onClick={() => {
              setMenuExpanded(false);
            }}
            className={style.mobileItem}
          >
            Contact
          </a>
        </Link>
        <Footer menuVisible={false} />
      </div>
    </div>
  );
};

export default Navigation;
