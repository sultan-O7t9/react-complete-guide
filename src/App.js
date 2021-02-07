import React from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends React.Component {
  state = {
    cars: [
      { brand: "BMW", model: "M4" },
      { brand: "Mclaren", model: "P1" },
      { brand: "Ferrari", model: "LaFerrari" },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Props for the first time</h2>
        <Car
          brand={this.state.cars[0].brand}
          model={this.state.cars[0].model}
        />
        <Car brand={this.state.cars[1].brand} model={this.state.cars[1].model}>
          Better One!
        </Car>
        <Car brand={this.state.cars[2].brand} model={this.state.cars[2].model}>
          Best One!
        </Car>
      </div>
    );
  }
}
export default App;
