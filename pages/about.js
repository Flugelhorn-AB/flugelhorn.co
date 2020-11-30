import AboutBlock from '../components/AboutBlock';
import Footer from '../components/Footer';
import Head from '../components/head';
import Navigation from '../components/Navigation';
import ProjectHero from '../components/ProjectHero';
import style from './style/about.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
     return (
          <div className={style.about}>
               <Head
                    title="About | Flugelhorn Digital Web Agency"
                    description="
        Information about Flugelhorn. Who we are and what we do."
                    image="/flugel-fam.png"
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
                         <ProjectHero img="/flugel-fam.png" />
                         <AboutBlock title="The Flugel Fam">
                              <p>
                                   Flugelhorn{' '}
                                   <span className={style.pronounce}>
                                        /ˈflo͞oɡəlˌhôrn/
                                   </span>{' '}
                                   is a design oriented digital web agency
                                   founded by the deadly duo, Ninja Labor and
                                   Wizard Erixon.
                              </p>
                              <p>
                                   The founders are schooled through the guiding
                                   principles of{' '}
                                   <a
                                        target="_blank"
                                        href="https://hyperisland.com"
                                        className={style.hyperHover}
                                   >
                                        Hyper Island ↗
                                   </a>
                                   . <p></p>
                                   <i>
                                        "We immerse future talents and industry
                                        professionals in transformative learning
                                        experiences to help them to adapt to
                                        rapidly changing times."
                                   </i>
                              </p>

                              <p>
                                   The schools indoctrinated maxim "Lead the
                                   Change" is present in everything we do. We
                                   analyze the current world situation and
                                   trends to build things that facilitates the
                                   lives of others.
                              </p>
                         </AboutBlock>
                         <AboutBlock title="What we do">
                              <p>
                                   We design and develop mesmerizing digital
                                   products for companies and organizations.
                                   Always responsive, always search engine
                                   optimized, always stunning.
                              </p>
                              <p>
                                   We have the capacity to create everything
                                   between business websites to complex full
                                   blown web apps. Whether you need a website
                                   for your restaurant with a changeable menu or
                                   an online event with login and live chat, we
                                   can do it.
                              </p>
                              <p>Our current tech stack:</p>
                              <ul>
                                   <li>React</li>
                                   <li>Next.js</li>
                                   <li>Firebase</li>
                                   <li>Strapi</li>
                                   <li>Gatsby</li>
                                   <li>Express</li>
                                   <li>Wordpress</li>
                                   <li>Electron</li>
                              </ul>
                              <p>To be continued.</p>
                         </AboutBlock>
                         <AboutBlock title="Our Office">
                              <p>
                                   One of the things that makes Flugelhorn
                                   unique is the fact that we don't have a
                                   traditional studio, but instead work from
                                   where we please. May it be the beaches of
                                   Indonesia or mountains of Mexico.
                              </p>
                              <p className={style.quote}>
                                   <i>
                                        “Maybe true travel is not the
                                        transportation of the body, but a change
                                        of perception, renewing the mind.” - Ben
                                        Okai{' '}
                                   </i>
                              </p>
                              <p>
                                   This philosophy is reflected in the work we
                                   do. We take inspiration from everything
                                   between the minimalistic interior design of
                                   Sweden to the the colorful fabrics woven by
                                   the Maya people of Guatemala. By utilizing
                                   the things we see and explore we're able to
                                   create creative and tailor-made solutions.
                              </p>
                              <br />
                              <br />
                              <div>
                                   <img
                                        src="/about/san-cristobal-street.jpg"
                                        alt="San Cristóbal street"
                                   />
                              </div>
                         </AboutBlock>
                         <Footer />
                    </motion.div>
               </AnimatePresence>
          </div>
     );
};

export default About;
