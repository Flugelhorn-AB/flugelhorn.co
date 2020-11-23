import { fetcher, url } from "../../utils/fetcher"
import style from "./project.module.scss" 

const Project = ({props}) => {

  return (
    <div className={style.Project}>
        <h2>Hello

        </h2>
    </div>
  )
}

export async function getStaticPaths(){
    const res = await fetcher(`${url}/projects`)

    // const projects = await res.json();
    const paths = res.map(project => {
        let name = project.name
        name = name.replace(" ", "%20")
        console.log(name)

        return {params: {project:name}}
    })
// console.log(paths)
    return {paths, fallback: false}
}


export async function getStaticProps({params}){
    console.log(params)
    return {props: {project: params.project}}
}

export default Project