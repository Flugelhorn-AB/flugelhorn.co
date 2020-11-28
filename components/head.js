import NextHead from "next/head";

const Head = (props) => {
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
      <title>{props.title || "flugelhorn"}</title>

      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={props.title} />
      <meta
        name="og:description"
        property="og:description"
        content={props.description}
      />
      <meta property="og:site_name" content="Flugelhorn" />
      {/* <meta property="og:url" content={`${props.canonical}`} /> */}
      <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/images/favicon.ico" />

      {props.image ? (
        <meta property="og:image" content={`${props.image}`} />
      ) : (
        <meta property="og:image" content="/flugel-fam.png" />
      )}
      <link rel="apple-touch-icon" sizes="180x180" href="#" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/flugelhorn-mini-logo.png"
      />

      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    </NextHead>
  );
};

export default Head;
