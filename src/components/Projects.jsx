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
              <a href={project.link}>
                <img
                  className="projects-pic"
                  alt="Imprim Ecran de l'application"
                  src={project.picture}
                />
                <div className="overlay">
                  <div className="content">
                    <h2>{project.name}</h2>
                    <p id="project-technos">{project.technos}</p>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </section>
      </main>
    );
  }
}
