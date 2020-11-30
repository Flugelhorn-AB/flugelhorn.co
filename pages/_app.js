import '../base/_normalize.scss';
import '../plugins/prismSolarLight.css';

function MyApp({ Component, pageProps, router }) {
     return (
          <div>
               <Component {...pageProps} />
          </div>
     );
}

export default MyApp;
