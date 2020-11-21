import BlogCard from "../components/BlogCard";
import style from "./style/blog.module.scss";

const Blog = () => {
  const posts = [
    {
      title: "An attempt to dissect Higher-Order Functions",
      intro:
        "A half-hearted attempt to understand and explain higher-order functions. What they are and how they can be used to write effective code. Briefly going over first-class functions and functional programming as well. Examples are giving in the only language that matters, JavaScript",
      date: new Date(),
      size: 1,
      type: "Code",
      img:
        "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "An attempt to dissect Higher-Order Functions",
      intro:
        "A half-hearted attempt to understand and explain higher-order functions. What they are and how they can be used to write effective code. Briefly going over first-class functions and functional programming as well. Examples are giving in the only language that matters, JavaScript",
      date: new Date(),

      size: 1,
      type: "Code",

      img:
        "https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "An attempt to dissect Higher-Order Functions",
      intro:
        "A half-hearted attempt to understand and explain higher-order functions. What they are and how they can be used to write effective code. Briefly going over first-class functions and functional programming as well. Examples are giving in the only language that matters, JavaScript",
      date: new Date(),
      type: "Code",
      size: 1,
      img:
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
    },
    {
      title: "An attempt to dissect Higher-Order Functions",
      intro:
        "A half-hearted attempt to understand and explain higher-order functions. What they are and how they can be used to write effective code. Briefly going over first-class functions and functional programming as well. Examples are giving in the only language that matters, JavaScript",
      date: new Date(),
      size: 1,
      type: "Code",

      img:
        "https://images.unsplash.com/flagged/photo-1572465213253-31b7e7f634ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1318&q=80",
    },
  ];

  return (
    <div className={style.blog}>
      <div className={style.posts}>
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
      </div>
    </div>
  );
};

export default Blog;
