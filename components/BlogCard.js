import Link from "next/link";
import { url } from "../utils/fetcher";
import style from "./style/blogCard.module.scss";

const BlogCard = ({ details }) => {
  let dateString = new Date(details.date).toDateString();
  dateString = `${dateString.substr(3, 7)}, ${dateString.substr(10, 12)}`;

  return (
    <Link href={`/blog/${details.title.replace(new RegExp(" ", "g"), "%20")}`}>
      <a className={style.link}>
        <div className={style.blogCard}>
          <div className={style.imageContainer}>
            <img src={`${details.cardPicture.url}`} alt="" />
          </div>
          <div className={style.info}>
            <h1 className={style.title}>{details.title} ↗</h1>
            <h3
              className={style.details}
            >{`${details.category.name} — ${dateString}`}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
