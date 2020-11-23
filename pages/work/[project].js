import Router from "next/router"
import { useEffect } from "react"
import { fetcher, url } from "../../utils/fetcher"
import style from "./project.module.scss" 

const Project = ({details}) => {
// const {project: {details}} = props
useEffect(()=> {
    Router.router.replace({pathname: details.name}, undefined,{ shallow: true})
    },[])
console.log(details)
  return (
    <div className={style.Project}>
        <h2>{details.name} 

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

        return {params: {project: project.id + ""}}
    })
console.log(paths)
    return {paths, fallback: false}
}


export async function getStaticProps({params}){
    console.log(params)
    const res = await fetcher(`${url}/projects/${params.project}`)

    return {props:{ details: res}}
}

export default Project