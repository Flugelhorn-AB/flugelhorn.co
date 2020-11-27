import AboutBlock from "../components/AboutBlock";
import Head from "../components/head";
import Navigation from "../components/Navigation";

import ProjectHero from "../components/ProjectHero";
import style from "./style/about.module.scss";

const About = () => {
  return (
    <div className={style.about}>
      <Head />
      <Navigation />
      <ProjectHero img="/flugel-fam.png" />
      <AboutBlock title="The Flugel Fam">
        <p>
          Flugelhorn is a digital web agency founded by the deadly duo, Ninja
          Labor and Wizard Erixon.
        </p>
        <p>
          The agency is schooled the{" "}
          <a target="_blank" href="https://hyperisland.com">
            Hyper Island
          </a>{" "}
          way.
          <p></p>
          <i>
            "We immerse future talents and industry professionals in
            transformative learning experiences to help them to adapt to rapidly
            changing times."
          </i>
        </p>

        <p>
          Our structure is unique. We are the only major design studio where the
          owners of the business are the creators of the work and serve as the
          primary contact for every client. This reflects our conviction that
          great design cannot happen without passion, intelligence and — above
          all — personal commitment, and is demonstrated by a portfolio that
          spans five decades, many industries, and clients of every size.
        </p>
      </AboutBlock>
      <AboutBlock title="What we do">
        <p>
          Pentagram is a multi-disciplinary, independently-owned design studio.
        </p>
        <p>
          Our work encompasses graphics and identity, products and packaging,
          exhibitions and installations, websites and digital experiences,
          advertising and communications, sound and motion. Our 24 partners are
          all practicing designers, and whether working collaboratively or
          independently, they do so in friendship.
        </p>
        <p>
          Our structure is unique. We are the only major design studio where the
          owners of the business are the creators of the work and serve as the
          primary contact for every client. This reflects our conviction that
          great design cannot happen without passion, intelligence and — above
          all — personal commitment, and is demonstrated by a portfolio that
          spans five decades, many industries, and clients of every size.
        </p>
      </AboutBlock>
      <AboutBlock title="Our Office">
        <p>
          One of the things that makes Flugelhorn unique is the fact that we
          don't have a traditional studio, but instead work from where we
          please. May it be the beaches of Indonesia or mountains of Mexico.
        </p>
        <p className={style.quote}>
          <i>
            “Maybe true travel is not the transportation of the body, but a
            change of perception, renewing the mind.” - Ben Okai{" "}
          </i>
        </p>
        <p>
          This philosophy is reflected in the work we do. We take inspiration
          from everything between the minimalistic interior design of Sweden to
          the the colorful fabrics woven by the Maya people of Guatemala. By
          utilizing the things we see and explore we're able to create creative
          and tailor-made solutions.
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
    </div>
  );
};

export default About;
