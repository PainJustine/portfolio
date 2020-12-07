import React from "react";
import "../components/About.css";
import ProfilePic from "../assets/PhotoCV.jpg";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="profile-container">
        <img className="profile-pic" src={ProfilePic} alt="Profil Justine" />
        <section id="presentation">
          <div></div>
          <h2>Hello !</h2>
          <p>
            Je m'appelle Justine et j'habite à Colomiers, dans la périphérie
            Toulousaine. Je suis actuellement en formation à la Wild Code School
            afin de devenir développeuse web. Je souhaite par la suite
            approfondir mes connaissances et gagner en expérience en intégrant
            une formation complémentaire en alternance.
          </p>
          <p id="presentation-right">
            Curieuse et créative, je suis tout particulièrement soucieuse de
            l'esthétisme et du design d'une application. J'apprécie également la
            retouche photo et vidéo. Lors de ma formation, j'ai appris à
            développer une application web en React, ce portfolio est d'ailleurs
            mon premier projet solo.
          </p>
          <h2 id="competences">Mes compétences :</h2>
          <p>
            Compétences en développement : HTML/CSS | JavaScript | React |
            Node.Js | MySQL
          </p>
          <p id="competences-right">Conception graphique : Photoshop</p>
          <p>
            Gestion de projet : Méthode agile SCRUM | Git/Github | Figma |
            Travail en remote
          </p>
          <h2 id="contacts">N'hésitez pas à me contacter !</h2>
        </section>
      </main>
    );
  }
}

export default About;
