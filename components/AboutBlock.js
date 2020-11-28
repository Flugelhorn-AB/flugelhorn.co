import { useEffect, useRef, useState } from "react";
import style from "./style/aboutBlock.module.scss";

const AboutBlock = ({ title, children }) => {


  return (
    <div className={style.aboutBlock}>
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.children}>{children}</div>
      </div>
    </div>
  );
};

export default AboutBlock;
