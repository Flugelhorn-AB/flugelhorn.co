import Project from './Project';
import style from './style/projectGallery.module.scss';

const ProjectGallery = () => {
     return (
          <div className={style.projectGallery}>
               <Project />
               <Project />
          </div>
     );
};

export default ProjectGallery;
