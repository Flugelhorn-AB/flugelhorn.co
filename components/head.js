import NextHead from 'next/head';

const Head = ({ title, description }) => {
     return (
          <NextHead>
               <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-152603515-6"
               ></script>

               <script
                    dangerouslySetInnerHTML={{
                         __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-181810819-1');`,
                    }}
               />

               <meta charSet="UTF-8" />
               <title>{title || 'flugelhorn'}</title>
               <link rel="apple-touch-icon" sizes="180x180" href="#" />
               <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/flugelhorn-mini-logo.png"
               />
               <meta name="description" content={description || 'flugelhorn'} />
               <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
               ></meta>
          </NextHead>
     );
};

export default Head;
