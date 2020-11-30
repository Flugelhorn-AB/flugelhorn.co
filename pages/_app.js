import '../base/_normalize.scss';
import '../plugins/prismSolarLight.css';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
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
                         <Component {...pageProps} />
                    </motion.div>
               </AnimatePresence>
          </div>
     );
}

export default MyApp;
