import style from "./style/blogCard.module.scss";

const BlogCard = ({ details }) => {
  return (
    <div className={style.blogCard}>
      <div className={style.imageContainer}>
        <img src={details.img} alt="" />
      </div>
      <div className={style.info}>
        <h1 className={style.title}>{details.title}</h1>
        <h3 className={style.details}>{`${
          details.type
        } — ${details.date.toDateString()}`}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
