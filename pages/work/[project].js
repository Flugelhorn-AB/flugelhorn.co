import { useEffect, useRef, useState } from 'react';
import Navigation from '../../components/Navigation';
import ProjectHero from '../../components/ProjectHero';
import Head from '../../components/head';
import { fetcher, url } from '../../utils/fetcher';
import style from './project.module.scss';
import AboutBlock from '../../components/AboutBlock.js';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Project = ({ details }) => {
     // const {project: {details}} = props
     let enlargeImage = false;
     const [imageEnlarged, setImageEnlarged] = useState(false);
     const [windowWidth, setWindowWidth] = useState();
     const [isMobile, setIsMobile] = useState();

     const setWidth = () => {
          setWindowWidth(window.innerWidth);
     };

     if (typeof window !== 'undefined') {
          useEffect(() => {
               window.addEventListener('resize', setWidth);
               if (windowWidth >= 735) {
                    setIsMobile(false);
               }
               if (windowWidth < 735) {
                    setIsMobile(true);
               }

               return () => {
                    window.addEventListener('resize', setWidth);
               };
          }, [windowWidth]);
     }

     useEffect(() => {
          setWindowWidth(window.innerWidth);
     }, []);

     const handleImageSize = async (e) => {
          enlargeImage = !enlargeImage;
          if (enlargeImage && isMobile === false) {
               e.currentTarget.style.transform = 'translateX(-50%)';
               e.currentTarget.style.width = '200%';
          } else {
               e.currentTarget.style.transform = 'translateX(0%)';
               e.currentTarget.style.width = '100%';
          }
     };

     const video = useRef();

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

                         <ProjectHero
                              img={details.cardPicture}
                              isWork={true}
                              gradient={details.gradientColor}
                         />

                         <AboutBlock title={details.name}>
                              <h2 className={style.tags}>{details.tags}</h2>
                              <p className={style.intro}>{details.intro}</p>
                              {details.introImage.ext === '.mp4' ? (
                                   <div
                                        onClick={handleImageSize}
                                        className={style.imageContainer}
                                   >
                                        <video
                                             ref={video}
                                             className={style.introVideo}
                                             muted
                                             loop
                                             // preload
                                             playsInline
                                             poster={details.cardImage.url}
                                        >
                                             <source
                                                  src={details.introImage.url}
                                             />
                                        </video>
                                   </div>
                              ) : (
                                   <div
                                        className={style.imageContainer}
                                        onClick={handleImageSize}
                                   >
                                        <Image
                                             width={details.introImage.width}
                                             height={details.introImage.height}
                                             layout={'responsive'}
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
                                   return (
                                        <div
                                             key={step.id}
                                             className={style.step}
                                        >
                                             <div
                                                  dangerouslySetInnerHTML={{
                                                       __html: step.text,
                                                  }}
                                             />
                                             {step.image[0] ? (
                                                  <div
                                                       className={
                                                            style.imageContainer
                                                       }
                                                       onClick={handleImageSize}
                                                  >
                                                       <Image
                                                            width={
                                                                 step.image[0]
                                                                      .width
                                                            }
                                                            height={
                                                                 step.image[0]
                                                                      .height
                                                            }
                                                            layout={
                                                                 'responsive'
                                                            }
                                                            src={
                                                                 step.image[0]
                                                                      .url
                                                            }
                                                       />
                                                  </div>
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
                                             <div
                                                  dangerouslySetInnerHTML={{
                                                       __html: step.text,
                                                  }}
                                             />
                                             {step.image ? (
                                                  <div
                                                       className={
                                                            style.imageContainer
                                                       }
                                                       onClick={handleImageSize}
                                                  >
                                                       {' '}
                                                       <Image
                                                            layout={
                                                                 'responsive'
                                                            }
                                                            height={
                                                                 step.image
                                                                      .height
                                                            }
                                                            width={
                                                                 step.image
                                                                      .width
                                                            }
                                                            src={step.image.url}
                                                       />
                                                  </div>
                                             ) : (
                                                  ' '
                                             )}
                                        </div>
                                   );
                              })}
                         </AboutBlock>
                         <Footer menuVisible={true} />
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
