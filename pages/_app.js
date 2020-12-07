import '../base/_normalize.scss';
import '../plugins/prismSolarLight.css';
import { motion, AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import NavContext from '../components/NavContext.js';
import { useState } from 'react';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps, router }) {
     const [isRouteChanging, setIsRouteChanging] = useState(false);

     Router.events.on('routeChangeStart', () => setIsRouteChanging(true));
     Router.events.on('routeChangeComplete', () => setIsRouteChanging(false));
     //  Router.events.on('routeChangeError', () => setIsRouteChanging(false));

     return (
          <div>
               <NavContext.Provider value={{ isRouteChanging }}>
                    {isRouteChanging ? <Loader /> : ''}
                    <Component {...pageProps} />
               </NavContext.Provider>
          </div>
     );
}

export default MyApp;
