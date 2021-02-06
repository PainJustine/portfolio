import React from "react";
import "../components/About.css";
import Typist from "react-typist";

class Typetext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: true,
    };
    this.done = this.done.bind(this);
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };

  render() {
    return (
      <div className="text-box">
        {this.state.typing && (
          <Typist onTypingDone={this.done} cursor={{ show: true, blink: true }}>
            <Typist.Backspace count={0} delay={800} />à la recherche d'une
            alternance pour avril 2021
            <Typist.Backspace count={47} delay={1000} />
            contactez-moi ! ☻
            <Typist.Backspace count={40} delay={1000} />
          </Typist>
        )}
      </div>
    );
  }
}

export default Typetext;
