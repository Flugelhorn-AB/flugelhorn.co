import BlogCard from "../components/BlogCard";
import BlogGallery from "../components/BlogGallery";
import Footer from "../components/Footer";
import Head from "../components/head";
import Navigation from "../components/Navigation";
import { url, fetcher } from "../utils/fetcher";
import style from "./style/blog.module.scss";

const Blog = ({ articles }) => {
  console.log(articles);

  return (
    <div className={style.blog}>
      <Head
        title="Blog | Flugelhorn Digital Web Agency"
        description="
        Read our latest articles about web, design and travel. Learn the latest within web development and graphic design."
        image="/flugel-fam.png"
      />
      <Navigation />
      <BlogGallery articles={articles} />
      {/* <div className={style.posts}>
        <div className={style.col}>
          {posts.map((post, i) => {
            return <BlogCard details={post} key={i} />;
          })}
        </div>
        <div className={style.col}>
          {posts.map((post, i) => {
            return <BlogCard details={post} key={i} />;
          })}
        </div>
      </div> */}
<Footer />
    </div>
  );
};
export const getStaticProps = async () => {
  const articles = await fetcher(`${url}/articles`);
  console.log(articles);
  return { props: { articles } };
};

export default Blog;
