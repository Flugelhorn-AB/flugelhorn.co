import { fetcher, url } from '../utils/fetcher';

import { useEffect, useRef, useState } from 'react';
import Head from '../components/head';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import ProjectGallery from '../components/ProjectGallery';
import style from './style/index.module.scss';
import Footer from '../components/Footer';

const Index = (props) => {
     const index = useRef();
     return (
          <div ref={index} className={`${style.index} `}>
               <Head
                    title="Flugelhorn | Digital Web Agency 🐙"
                    description="
We design and develop mesmerizing digital products for companies and organizations. Always responsive, always search engine optimized, always stunning."
                    image="/flugel-fam.png"
               />
               <Navigation />
               <Hero indexRef={index} />
               <section id="work">
                    <ProjectGallery projects={props.projects} />
               </section>
               <Footer />
          </div>
     );
};

export const getStaticProps = async () => {
     const projects = await fetcher(`${url}/projects`);
     console.log(projects);
     return { props: { projects } };
};
export default Index;
