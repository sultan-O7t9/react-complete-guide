import React from "react";
import "./Car.css";

class Car extends React.Component {
  render() {
    return (
      <div className="Car">
        <h4 onClick={this.props.del}>
          I'm a Car built by {this.props.brand} and my model is{" "}
          {this.props.model}
        </h4>
        <p>{this.props.children}</p>
        <input
          type="text"
          placeholder="brand"
          value={this.props.brand}
          onChange={this.props.change}
        />
      </div>
    );
  }
}

export default Car;
