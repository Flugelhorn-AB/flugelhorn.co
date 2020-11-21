import style from "./style/index.module.scss";
import Head from "next/head";

const Index = () => {
  return (
    <div className={style.index}>
      <Head>
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
        gtag('config', 'UA-152603515-6');`,
          }}
        />
        <title>Flugelhorn | Web agency</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          href="/flugelhorn-mini-logo.png"
        ></link>
      </Head>
      <h1>Flugelhorn</h1>
      <h2>Sorry, we are busy.</h2>
      <h2>Will fix page later. Probably.</h2>
      <a href="mailto:hi@flugelhorn.co">hi@flugelhorn.co</a>
    </div>
  );
};

export default Index;
