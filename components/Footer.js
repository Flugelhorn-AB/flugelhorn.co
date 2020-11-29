import Link from 'next/link';
import style from './style/footer.module.scss';

const Footer = () => {
     return (
          <div className={style.footer}>
               <div className={style.footerItems}>
                    <div className={style.flugelhorn}>
                         {/* Flugelhorn Digital Agency */}
                    </div>
                    <div className={style.details}>
                         <Link href="/about">
                              <a>About</a>
                         </Link>
                         <Link href="/blog">
                              <a>Blog</a>
                         </Link>
                         <Link href="/contact">
                              <a>Contact</a>
                         </Link>
                    </div>
                    <div className={style.socialMedia}>
                         <a
                              href="https://www.instagram.com/flugelhornagency/"
                              target="_blank"
                         >
                              Instagram ↗
                         </a>

                         <a
                              href="https://www.linkedin.com/company/flugelhorn-ab/"
                              target="_blank"
                         >
                              Linkedin ↗
                         </a>
                    </div>
                    <div className={style.divider}></div>
                    <div className={style.copyright}>© 2020 Flugelhorn</div>
               </div>
          </div>
     );
};

export default Footer;
