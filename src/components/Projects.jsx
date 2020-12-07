import React from "react";
import "../App.css";
import "../components/Projects.css";
import HearthstonePic from "../assets/hearthstone-pic.JPG";
import PapillesPic from "../assets/papilles-pic.JPG";
import Adopt1Gueux from "../assets/adopt1gueux-pic.JPG";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }
  render() {
    return (
      <main className="projects-container">
        <h1 id="projects-title">Mes réalisations</h1>
        <section className="all-projects-cards">
          <div className="projects-card">
            <a href="https://papilles-voyageuses.netlify.app/index.html">
              <img
                className="projects-pic"
                alt="Imprim Ecran du site Les papilles voyageuses"
                src={PapillesPic}
              />
              <div className="overlay">
                <div className="content">
                  <h2 className="projects-title">Les papilles voyageuses</h2>
                  Blog de recettes de cuisine du monde développé en HTML/CSS et
                  JavaScript dans le cadre du premier projet de ma formation
                </div>
              </div>
            </a>
          </div>
          <div className="projects-card">
            <a href="https://adopte1gueux.netlify.app/">
              <img
                className="projects-pic"
                alt="Imprim Ecran de l'appli Adopt 1 gueux"
                src={Adopt1Gueux}
              />
              <div className="overlay">
                <div className="content">
                  <h2>Adopt Un Gueux</h2>Application de rencontre à l'époque du
                  Moyen-âge, développée en React dans le cadre du Hackathon de
                  novembre 2020 organisé par la Wild Code School
                </div>
              </div>
            </a>
          </div>

          <div className="projects-card">
            <a href="http://hearthstone-finder.com/">
              <img
                className="projects-pic"
                alt="Imprim Ecran de l'appli Hearthstone Finder"
                src={HearthstonePic}
              />
              <div className="overlay">
                <div className="content">
                  <h2>Hearthstone Finder</h2>Application permettant de filtrer
                  le catalogue de cartes Hearthstone grâce à des critères tels
                  que le coût en mana, la classe du personnage... Développée en
                  React dans le cadre de mon second projet de formation
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    );
  }
}

export default Projects;
