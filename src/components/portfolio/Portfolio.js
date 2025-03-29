import { React, useEffect } from "react";
import "../portfolio/Portfolio.scss";
import { TiArrowSortedUp } from "react-icons/ti";
import Aos from "aos";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const projects = [
    {
      id: 1,
      link: "https://metavote.0xagbero.pw",
      title: "MetaVote",
      onLinkClick: "View live dApp",
    },
    {
      id: 2,
      link: "https://github.com/AnozieChibuike/FlaskSQLAlchemyBaseModel",
      title: "A Flask ORM Base Model",
      onLinkClick: "View on github",
    },
    {
      id: 3,
      link: "https://agberodata.onrender.com/",
      title: "Agbero Data",
      onLinkClick: "View Design",
    },
    {
      id: 4,
      link: "https://webchatv1.onrender.com/",
      title: "Agbero Chat",
      onLinkClick: "View Web App",
    },
    {
      id: 5,
      link: "https://twitterclone-qaum.onrender.com/",
      title: "Twitter Clone",
      onLinkClick: "View Design",
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <h1>My Portfolio</h1>
        <h2>10+ projects in Design & Software Development</h2>
      </div>

      <div className="projects" data-aos="fade-up" data-aos-once="true">
        {projects.map((project) => {
          return (
            <a
              className="project"
              href={project.link}
              rel="noreferrer"
              target="_blank"
              key={project.id}
            >
              <h2>{project.id}</h2>

              <div className="project__link">
                <h2>{project.title}</h2>

                <div className="link__text">
                  <p>{project.onLinkClick}</p>

                  <div className="card__arrow" id="arrowTail">
                    <TiArrowSortedUp id="arrowHead" />
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
