import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Typetext from "./Typetext";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }
  render() {
    return (
      <header>
        <section id="name-job-title">
          <h1 id="name-title">
            <Link to="/">Justine PAIN</Link>
          </h1>
          <h2 id="job-title">
            Développeuse web et web mobile
            <Typetext />
          </h2>
        </section>
        <ul id="nav-bar-menu">
          <li className="nav-item">
            <Link to="/about">À propos</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Mes réalisations</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Navbar;
