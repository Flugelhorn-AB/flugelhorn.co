import AboutBlock from '../components/AboutBlock';
import Head from '../components/head';
import Navigation from '../components/Navigation';
import ProjectHero from '../components/ProjectHero';
import style from './style/contact.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

const Contact = () => {
     return (
          <div className={style.contact}>
               <Head
                    title="Contact | Flugelhorn Digital Web Agency"
                    description="
        Information about how you can contact us and where you can visit us."
                    image="/mexico.jpeg"
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

                         <ProjectHero img="/mexico.JPG" />

                         <AboutBlock title="Contact us">
                              <a href="mailto:contact@flugelhorn.co">
                                   <p>contact@flugelhorn.co ↗</p>
                              </a>
                         </AboutBlock>
                         <AboutBlock title="Visit us">
                              <a
                                   target="_blank"
                                   href="https://goo.gl/maps/eCR9fjETvMLaEcfr6"
                              >
                                   <p>
                                        Calle Diego de Mazariegos 23
                                        <br />
                                        29240, San Cristóbal de las Casas,
                                        Chiapas
                                        <br />
                                        Mexico ↗
                                   </p>
                              </a>
                         </AboutBlock>
                         <AboutBlock title="Connect with us">
                              <p>
                                   <a
                                        target="_blank"
                                        href="https://www.linkedin.com/company/flugelhorn-ab"
                                   >
                                        LinkedIn ↗
                                   </a>
                              </p>
                              <p>
                                   <a
                                        target="_blank"
                                        href="https://www.instagram.com/flugelhorn.co/"
                                   >
                                        Instagram ↗
                                   </a>
                              </p>
                         </AboutBlock>
                         <Footer />
                    </motion.div>
               </AnimatePresence>
          </div>
     );
};

export default Contact;
