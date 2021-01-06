import { useEffect, useRef, useState } from "react";
import style from "./style/aboutBlock.module.scss";

const AboutBlock = ({ title, children, isPerson }) => {
  return (
    <div className={style.aboutBlock}>
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <div className={`${isPerson ? style.person : style.children}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
