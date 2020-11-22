import style from './style/project.module.scss';

const Project = () => {
     const projectSize = 'projectLarge';
     return <div className={`${style.project} ${style[projectSize]}`}></div>;
};

export default Project;
