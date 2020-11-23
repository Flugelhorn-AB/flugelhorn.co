import { fetcher, url } from "../../utils/fetcher"
import style from "./project.module.scss" 

const Project = ({props}) => {

  return (
    <div className={style.Project}>
        <h2>
            Hello
        </h2>
    </div>
  )
}

export async function getStaticPaths(){
    const res = await fetcher(`${url}/projects`)
    const paths = res.map(project => {
        let name = project.name
        name = name.replace(" ", "%20")
        return {params: {project:name}}
    })
    return {paths, fallback: false}
}


export async function getStaticProps({params}){
    return {props: {project: params.project}}
}

export default Project