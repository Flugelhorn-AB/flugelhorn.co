import style from "./style/projectHero.module.scss";
import { useEffect, useRef, useState } from "react";

const ProjectHero = ({ img, isWork, gradient }) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translateY(-${offset * 0.6}px)`,
        opacity: 1 - offset * 0.002,
        background: `linear-gradient(${gradient} 0%, #fff 60%, #fff)`,
      }}
      className={`${style.projectHero} ${
        isWork ? style.workHero : style.aboutHero
      }`}
    >
      {isWork ? (
        img.map((img, i) => {
          return <img src={img.image.url} key={i} />;
        })
      ) : img ? (
        <img src={img} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectHero;
