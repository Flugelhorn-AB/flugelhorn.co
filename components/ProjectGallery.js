import Project from './Project';
import style from './style/projectGallery.module.scss';

const ProjectGallery = ({ projects }) => {
     return (
          <div className={style.projectGallery}>
               <div className={style.content}>
                    {projects
                         .sort((a, b) => {
                              return a.order - b.order;
                         })
                         .map((project) => {
                              return (
                                   <Project
                                        details={project}
                                        key={project.id}
                                   />
                              );
                         })}
                    {/* <Project />
      <Project /> */}
               </div>
          </div>
     );
};

export default ProjectGallery;
