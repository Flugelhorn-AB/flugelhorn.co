import Router from "next/router";
import { useEffect, useState, useRef } from "react";
import Navigation from "../../components/Navigation";
import { fetcher, url } from "../../utils/fetcher";
import style from "./article.module.scss";
import Head from "../../components/head";
import Prism from "prismjs";

var md = require("markdown-it")();

const Article = ({ article }) => {
  //   const loadLanguages = require("prismjs/components/");
  //   loadLanguages(["bash"]);

  const [date, setDate] = useState("");
  const [post, setPost] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const content = useRef();

  useEffect(() => {
    let dateString = new Date(article.date).toDateString();
    dateString = `${dateString.substr(3, 7)}, ${dateString.substr(10, 12)}`;
    setDate(dateString);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      //   setPost();
      Prism.highlightAll();
    }
  }, []);
  useEffect(() => {
    setShareUrl(article.title.replace(new RegExp(" ", "g"), "%20"));
  }, []);

  return (
    <div className={style.article}>
      <Head />
      <Navigation />
      <main className={style.main}>
        <div className={style.intro}>
          <h2 className={style.title}>{article.title}</h2>
          <p className={style.date}>{date}</p>
          <div className={style.shareIcons}>
            <a
              target="_blank"
              //   href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.css-tricks.com%2F"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.flugelhorn.co%2F${shareUrl}&title=${shareUrl}&source=Flugelhorn?`}
            >
              <svg className={style.icon} viewBox="0 0 25 25" fill="none">
                <path d="M4 5.22C4 4.55 4.56 4 5.26 4h14.48c.7 0 1.26.55 1.26 1.22v14.56c0 .67-.56 1.22-1.26 1.22H5.26C4.56 21 4 20.45 4 19.78V5.22z"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.15 18.23v-7.68H6.6v7.68h2.56zM7.87 9.51c.9 0 1.45-.6 1.45-1.33-.01-.75-.56-1.33-1.43-1.33-.88 0-1.46.58-1.46 1.33 0 .74.56 1.33 1.42 1.33h.02zM10.57 18.23h2.57v-4.29c0-.23.02-.45.09-.62.18-.46.6-.93 1.31-.93.93 0 1.3.7 1.3 1.73v4.11h2.57v-4.4c0-2.36-1.26-3.46-2.95-3.46-1.39 0-2 .77-2.34 1.3h.02v-1.12h-2.57c.04.72 0 7.68 0 7.68z"
                  fill="#fff"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.flugelhorn.co%2F${shareUrl}&hashtags=flugelhorn`}
            >
              <svg className={style.icon} viewBox="0 0 25 25">
                <path d="M22.3 4.3c-.82.51-1.72.88-2.67 1.08a4.25 4.25 0 0 0-6.18-.12 4.3 4.3 0 0 0-1.26 3.03c0 .34.04.67.08 1a12.2 12.2 0 0 1-8.81-4.52 4.8 4.8 0 0 0-.62 2.14 4.44 4.44 0 0 0 1.92 3.6 4.13 4.13 0 0 1-1.91-.55v.07c0 2.06 1.47 3.8 3.44 4.21-.37.08-.74.13-1.15.15l-.76-.07a4.32 4.32 0 0 0 3.98 2.99A9.03 9.03 0 0 1 3 19.14l-1-.06A12.26 12.26 0 0 0 8.6 21c7.88 0 12.2-6.55 12.17-12.18.02-.23.02-.41 0-.62a8.06 8.06 0 0 0 2.15-2.23c-.77.37-1.6.6-2.45.7a4.1 4.1 0 0 0 1.84-2.38"></path>
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.flugelhorn.co%2F${shareUrl}`}
            >
              <svg className={style.icon} viewBox="0 0 25 25">
                <path
                  d="M20.3 4H4.7a.7.7 0 0 0-.7.7v15.6c0 .38.32.7.7.7h8.33v-6.38h-2.12v-2.65h2.12V9.84c0-2.2 1.4-3.27 3.35-3.27.94 0 1.75.07 1.98.1v2.3H17c-1.06 0-1.31.5-1.31 1.24v1.76h2.65l-.53 2.65H15.7l.04 6.38h4.56a.7.7 0 0 0 .71-.7V4.7a.7.7 0 0 0-.7-.7"
                  //   fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className={style.imageContainer}>
            <img src={`${url}${article.cardPicture.url}`} alt="" />
          </div>
        </div>
        <div
          className={style.content}
          dangerouslySetInnerHTML={{
            __html: md.render(article.content),
          }}
          ref={content}
        ></div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetcher(`${url}/articles`);
  const paths = res.map((article) => {
    let name = article.title;

    return { params: { article: name.replace(new RegExp(" ", "g"), "%20") } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetcher(`${url}/articles/?title=${params.article}`);

  return { props: { article: res[0] } };
}

export default Article;
