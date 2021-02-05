import React from "react";
import axios from "axios";
import "../App.css";
import "../components/Projects.css";

export default class Projects extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/projets").then((res) => {
      const projects = res.data;
      this.setState({ projects });
    });
  }

  render() {
    const { projects } = this.state;
    return (
      <main className="projects-container">
        <h1 id="projects-title">Mes réalisations</h1>

        <section className="all-projects-cards">
          {projects.map((project, { id }) => (
            <div className="projects-card" key={project.id}>
              <a href="https://papilles-voyageuses.netlify.app/index.html">
                <img
                  className="projects-pic"
                  alt="Imprim Ecran de l'application"
                  src={project.picture}
                />
                <div className="overlay">
                  <div className="content">
                    <h2>{project.name}</h2>
                    <p>{project.technos}</p>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
          {/* <div className="projects-card">
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
          </div> */}
        </section>
      </main>
    );
  }
}
