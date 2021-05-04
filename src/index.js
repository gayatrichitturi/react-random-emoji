import React from "react";
import ReactDOM from "react-dom";
var randomColorRGB = require("random-color-rgb");

class Emoji extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: "Color",
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.emoji}</h1>
        <input
          type="text"
          value={this.state.emoji}
          Place
          holder="Name"
          onClick={(e) => this.setState({ search: e.target.value })}
        ></input>
      </>
    );
  }
}

ReactDOM.render(<Emoji />, document.getElementById("root"));
