import '../base/_normalize.scss';
import '../plugins/prismSolarLight.css';
import { motion, AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import NavContext from '../components/NavContext.js';
import { useState } from 'react';

function MyApp({ Component, pageProps, router }) {
     const [isRouteChanging, setIsRouteChanging] = useState(false);

     Router.events.on('routeChangeStart', () => setIsRouteChanging(true));
     Router.events.on('routeChangeComplete', () => setIsRouteChanging(false));
     //  Router.events.on('routeChangeError', () => setIsRouteChanging(false));

     return (
          <div>
               <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.div
                         style={{ zIndex: '0' }}
                         key={router.route}
                         transition={{ duration: 0.5 }}
                         exit={{ backgroundColor: 'white', opacity: 0 }}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                    >
                         <NavContext.Provider value={{ isRouteChanging }}>
                              <Component {...pageProps} />
                         </NavContext.Provider>
                    </motion.div>
               </AnimatePresence>
          </div>
     );
}

export default MyApp;
