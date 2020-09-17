import style from './styles/index.module.scss';
import { useEffect } from 'react';

const Index = () => {
     useEffect(() => {
          const body = document.querySelector('body');
          body.style.padding = '0px';
          body.style.margin = '0px';
     }, []);
     return (
          <div className={style.index}>
               <h1>Flugelhorn</h1>
               <h2>Sorry, we are busy.</h2>
               <h2>Will fix page later. Probably.</h2>
               <a href="mailto:hi@flugelhorn.co">hi@flugelhorn.co</a>
          </div>
     );
};

export default Index;
