import BlogCard from "./BlogCard";
import style from "./style/blogGallery.module.scss";

const BlogGallery = ({ articles }) => {
  return (
    <div className={style.blogGallery}>
      <div className={style.intro}>
        <h1 className={style.title}>Latest blog posts</h1>
      </div>
      <div className={style.posts}>
        {articles.map((article) => {
          return <BlogCard details={article} key={article.Title} />;
        })}
      </div>
    </div>
  );
};

export default BlogGallery;
