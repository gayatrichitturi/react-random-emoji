import React from "react";

class ColorBox extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.color || "red",
          width: "200px",
          height: "200px",
        }}
      >
        Dont know {this.props.emoji}
      </div>
    );
  }
}

export default ColorBox;
