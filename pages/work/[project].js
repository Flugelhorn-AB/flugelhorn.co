import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useRef } from 'react';
import Navigation from '../../components/Navigation';
import ProjectHero from '../../components/ProjectHero';
import Head from '../../components/head';
import { fetcher, url } from '../../utils/fetcher';
import style from './project.module.scss';
import AboutBlock from '../../components/AboutBlock.js';
import { motion, AnimatePresence } from 'framer-motion';

const Project = ({ details }) => {
     // const {project: {details}} = props

     const video = useRef();

     const coverImg = details.cardImage.url;

     useEffect(() => {
          setTimeout(() => {
               document.addEventListener('scroll', handleScroll);
               return () => {
                    document.removeEventListener('scroll', handleScroll);
               };
          }, 300);
     }, []);

     const handleScroll = () => {
          if (video.current && window.pageYOffset > 200) {
               video.current.play();
          }
     };

     return (
          <div className={style.projectContainer}>
               <Head
                    title={`${details.name} | Flugelhorn Digital Web Agency`}
                    description={details.intro}
                    image={details.introImage.url}
               />

               <AnimatePresence exitBeforeEnter>
                    <motion.div
                         style={{ width: '100%' }}
                         transition={{ duration: 0.5 }}
                         exit={{ backgroundColor: 'white', opacity: 0 }}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                    >
                         <Navigation />

                         <ProjectHero img={coverImg} isWork={true} />

                         <AboutBlock title={details.name}>
                              <h2 className={style.tags}>{details.tags}</h2>
                              <p className={style.intro}>{details.intro}</p>
                              {details.introImage.ext === '.mp4' ? (
                                   <div>
                                        <video
                                             ref={video}
                                             className={style.introVideo}
                                             muted
                                             loop
                                        >
                                             <source
                                                  src={details.introImage.url}
                                             />
                                        </video>
                                   </div>
                              ) : (
                                   <div>
                                        <img
                                             src={details.introImage.url}
                                             alt=""
                                        />
                                   </div>
                              )}

                              <a target="_blank" href={details.link}>
                                   <h2>Visit ↗</h2>
                              </a>

                              <div className={style.stack}>
                                   <p> Stack:</p>
                                   <div className={style.technologies}>
                                        {details.stack.map((technology) => {
                                             return (
                                                  <p
                                                       key={
                                                            technology.technology
                                                       }
                                                  >
                                                       {technology.technology}
                                                  </p>
                                             );
                                        })}
                                   </div>
                              </div>
                         </AboutBlock>

                         <AboutBlock title="How we worked">
                              {details.howWeWorked.map((step) => {
                                   const paragraphs = step.text.split('<br/>');
                                   return (
                                        <div
                                             key={step.id}
                                             className={style.step}
                                        >
                                             {paragraphs.map((p, i) => {
                                                  return <p key={i}>{p}</p>;
                                             })}
                                             {step.image[0] ? (
                                                  <img
                                                       src={step.image[0].url}
                                                  />
                                             ) : (
                                                  ' '
                                             )}
                                        </div>
                                   );
                              })}
                         </AboutBlock>

                         <AboutBlock title="What we did">
                              {details.whatWeDid.map((step) => {
                                   return (
                                        <div
                                             key={step.id}
                                             className={style.step}
                                        >
                                             <p>{step.text}</p>
                                        </div>
                                   );
                              })}
                         </AboutBlock>
                    </motion.div>
               </AnimatePresence>
          </div>
     );
};

export async function getStaticPaths() {
     const res = await fetcher(`${url}/projects`);
     const paths = res.map((project) => {
          let name = project.name;
          name = name.replace(' ', '%20');
          name = name.replace('ä', '%C3%A4');
          return { params: { project: name } };
     });
     return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
     const res = await fetcher(`${url}/projects/?name=${params.project}`);

     return { props: { details: res[0] } };
}

export default Project;
