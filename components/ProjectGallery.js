import Project from "./Project";
import style from "./style/projectGallery.module.scss";

const ProjectGallery = ({ projects }) => {
  console.log(projects);
  return (
    <div className={style.projectGallery}>
      {projects.sort((a, b) => {return a.id - b.id}).map((project) => {
        return <Project details={project} key={project.id} />;
      })}
      {/* <Project />
      <Project /> */}
    </div>
  );
};

export default ProjectGallery;
