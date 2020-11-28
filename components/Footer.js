
import Link from "next/link"
import style from "./style/footer.module.scss" 

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footerItems}>
        <div className={style.flugelhorn}>

            Flugelhorn Digital Agency
            

        </div>
        <div className={style.details}>
            <Link href="#">
                <a>Menu Item ↗</a>
            </Link>
            <Link href="#">
                <a>Terms here ↗</a>
            </Link>
       
        </div>
        <div className={style.socialMedia}>
    <Link href="#">
        <a>Instagram ↗</a>
    </Link>
    <Link href="#">
        <a>Linkedin ↗</a>
    </Link>
        </div>
    <div className={style.divider}></div>
        <div className={style.copyright}>
        © 2020 Flugelhorn
        </div>
        </div>
        
    </div>
  )
}

export default Footer