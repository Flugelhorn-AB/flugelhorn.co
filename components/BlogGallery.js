import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import style from "./style/blogGallery.module.scss";

const BlogGallery = ({ articles }) => {
  const [blogCards, setBlogCards] = useState([]);

  useEffect(() => {
    setBlogCards(
      articles.sort((a, b) => {
        return b.id - a.id;
      })
    );
  }, []);

  console.log(articles);
  return (
    <div className={style.blogGallery}>
      <div className={style.intro}>
        <h1 className={style.title}>Latest blog posts</h1>
      </div>
      <div className={style.posts}>
        {blogCards.map((article) => {
          return <BlogCard details={article} key={article.id} />;
        })}
      </div>
    </div>
  );
};

export default BlogGallery;
