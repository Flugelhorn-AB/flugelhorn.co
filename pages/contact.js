import AboutBlock from "../components/AboutBlock";
import Head from "../components/head";
import Navigation from "../components/Navigation";
import ProjectHero from "../components/ProjectHero";
import style from "./style/contact.module.scss";

const Contact = () => {
  return (
    <div className={style.contact}>
      <Head />
      <Navigation />
      <ProjectHero img="/mexico-1-.jpeg" />
      <AboutBlock title="Contact us">
        <a href="mailto:contact@flugelhorn.co">
          <p>contact@flugelhorn.co ↗</p>
        </a>
      </AboutBlock>
      <AboutBlock title="Visit us">
        <a target="_blank" href="https://goo.gl/maps/eCR9fjETvMLaEcfr6">
          <p>
            Calle Diego de Mazariegos 23
            <br />
            29240, San Cristóbal de las Casas, Chiapas
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
          <a target="_blank" href="https://www.instagram.com/flugelhorn.co/">
            Instagram ↗
          </a>
        </p>
        <p>
          <a target="_blank" href="https://www.instagram.com/flugelhorn.co/">
            Twitter ↗
          </a>
        </p>
        <p>
          <a target="_blank" href="https://www.instagram.com/flugelhorn.co/">
            Facebook ↗
          </a>
        </p>
      </AboutBlock>
    </div>
  );
};

export default Contact;
