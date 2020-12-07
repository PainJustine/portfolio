import React from "react";
import "../App.css";
import iconSet from "../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }
  render() {
    console.log(iconList(iconSet));
    return (
      <footer>
        <a href="https://github.com/PainJustine">
          <IcomoonReact
            iconSet={iconSet}
            color="#FFF"
            size={50}
            icon="github"
            id="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/painjustine/">
          <IcomoonReact
            iconSet={iconSet}
            color="#FFF"
            size={50}
            icon="linkedin2"
            id="linkedin"
          />
        </a>
      </footer>
    );
  }
}

export default Footer;
