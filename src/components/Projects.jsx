import React from "react";
import "../App.css";
import "../components/Projects.css";

/*Importation des images*/
import Adopt1Gueux from "../assets/Adopt1Gueux-min.JPG";
import HearthstoneFinder from "../assets/HearthstoneFinder-min.JPG";
import LesPapillesVoyageuses from "../assets/LesPapillesVoyageuses-min.JPG";
import MémoiresElephant from "../assets/MémoiresElephant-min.JPG";
// import MyMoodMarket from "../assets/MyMoodMarket-min.JPG";

export default class Projects extends React.Component {
  state = {
    projects: [],
  };

  render() {
    return (
      <main className="projects-container">
        <h1 id="projects-title">Mes réalisations</h1>

        <section className="all-projects-cards">
          <div className="projects-card">
            <a href="https://memoiresdelephant.tk/">
              <img
                className="projects-pic"
                alt="Imprim Ecran de l'appli Mémoires d'éléphant"
                src={MémoiresElephant}
              />
              <div className="overlay">
                <div className="content">
                  <h2>Mémoires d'éléphant</h2>Application permettant de
                  visualiser le statut des espèces menacées ainsi que de pouvoir
                  contribuer à la base de données, développée en partenariat
                  avec Open Knowledge France lors de mon dernier projet de
                  formation à la Wild Code School. Développé en React et NodeJS
                </div>
              </div>
            </a>
          </div>
          {/* <div className="projects-card">
            <a href="https://mymoodmarket.netlify.app">
              <img
                className="projects-pic"
                alt="Imprim Ecran de l'appli My Mood Market"
                src={MyMoodMarket}
              />
              <div className="overlay">
                <div className="content">
                  <h2>My Mood Market</h2>Site de e-commerce décalé permettant de
                  louer ou d'acheter des émotions, optimisé pour le
                  référencement naturel. Développé dans le cadre du Hackahton de
                  janvier 2021, organisé par la Wild Code School en partenariat
                  avec Search Foresight
                </div>
              </div>
            </a>
          </div> */}
          <div className="projects-card">
            <a href="http://hearthstone-finder.com/">
              <img
                className="projects-pic"
                alt="Imprim Ecran de l'appli Hearthstone Finder"
                src={HearthstoneFinder}
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
                  novembre 2020 organisé par la Wild Code School, développé en
                  React
                </div>
              </div>
            </a>
          </div>
          <div className="projects-card">
            <a href="https://papilles-voyageuses.netlify.app/index.html">
              <img
                className="projects-pic"
                alt="Imprim Ecran de l'appli Les Papilles Voyageuses"
                src={LesPapillesVoyageuses}
              />
              <div className="overlay">
                <div className="content">
                  <h2>Les papilles voyageuses</h2>Blog de recettes de cuisine du
                  monde statique, développé dans le cadre du premier projet de
                  ma formation. Développé en HTML/CSS et JS
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    );
  }
}
