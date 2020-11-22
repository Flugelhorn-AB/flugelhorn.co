import Project from "./Project";
import style from "./style/projectGallery.module.scss";

const ProjectGallery = ({ projects }) => {
  console.log(projects);
  return (
    <div className={style.projectGallery}>
      {projects.map((project) => {
        return <Project details={project} key={project.id} />;
      })}
      {/* <Project />
      <Project /> */}
    </div>
  );
};

export default ProjectGallery;
