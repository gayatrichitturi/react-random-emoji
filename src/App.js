import React from "react";
import randomColorRGB from "random-color-rgb";
import getEmoji from "get-random-emoji";
import ColorBox from "./ColorBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      emoji: "click the button",
      showEmoji: false,
    };
  }
  render() {
    return (
      <>
        <h1>Test {this.state.showEmoji ? this.state.emoji : ""}</h1>
        Show emoji :
        <input
          type="checkbox"
          //   onChange={(e) => this.setState({ showEmoji : !this.state.showEmoji })}
          onChange={this.setState((state) => {
            return {
              showEmoji: !state.showEmoji,
            };
          })}
        />
        <input
          type="submit"
          value="Play"
          onClick={(e) =>
            this.setState({ color: randomColorRGB(), emoji: getEmoji() })
          }
        />
        <ColorBox emoji={this.state.emoji} color={this.state.color} />
      </>
    );
  }
}

export default App;
