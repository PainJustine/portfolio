import React from "react";
import "../App.css";
import CatAnim from "../assets/CatAnimBis.gif";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="homepage-container">
        <img
          className="cat-anim"
          src={CatAnim}
          alt="Animation de chat qui s'allonge"
        />
      </main>
    );
  }
}

export default Homepage;
