import style from './style/loader.module.scss';

const Loader = () => {
     return (
          <div className={style.backdrop}>
               <div className={style.loaderContainer}>
                    <div className={style.loader}>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                    </div>
               </div>
          </div>
     );
};

export default Loader;
