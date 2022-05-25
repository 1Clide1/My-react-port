import React from "react";
import Typical from "react-typical";

class autoTyper extends React.Component {
  render() {
    return (
      <Typical
        steps={[
          "Welcome to my portfolio",
          2000,
          `Please, enjoy you're stay 😁`,
          2000,
          `Full Stack Developer`,
          2000,
          `Hard working nerd, ready to take action!`,
          2000,
          `Certified cool guy!`,
          2000,
          `I certified myself :p!`,
          500,
        ]}
        loop={Infinity}
      />
    );
  }
}

export default autoTyper;
