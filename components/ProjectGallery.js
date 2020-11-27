import Project from "./Project";
import style from "./style/projectGallery.module.scss";

const ProjectGallery = ({ projects }) => {

  return (
    <div className={style.projectGallery}>
      {projects.sort((a, b) => {return a.id - b.id}).map((project) => {
        return <Project details={project} key={project.id} />;
      })}
      
    </div>
  );
};

export default ProjectGallery;
