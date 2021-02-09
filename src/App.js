import React, { useState } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends React.Component {
  state = {
    cars: [
      { brand: "BMW", model: "M4" },
      { brand: "Lorem ipsum", model: "P1" },
      { brand: "XYZ...", model: "AXS" },
    ],
  };
  switchNameHandler = () => {
    console.log("Clicked");
  };
  changeNameHandler = (event) => {
    this.setState({
      cars: [
        { brand: "BMW", model: "M4" },
        { brand: "Lorem ipsum", model: "P1" },
        { brand: event.target.value, model: "AXS" },
      ],
    });
  };

  render() {
    const styles = {
      backgroundColor: "rgb(0, 231, 212)",
      padding: "1rem 1.2rem",
      borderRadius: "50px",
      border: "2px solid rgb(100, 255, 251)",
      fontSize: "1rem",
      color: "rgb(212, 255, 251)",
      outline: "none",
      cursor: "pointer",
      fontWeight: "bold",
    };
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Props for the first time</h2>
        <button style={styles} onClick={this.switchNameHandler}>
          Switch Name
        </button>
        <Car
          brand={this.state.cars[0].brand}
          model={this.state.cars[0].model}
        />
        <Car brand={this.state.cars[1].brand} model={this.state.cars[1].model}>
          Better One!"(using props.children)"
        </Car>
        <Car
          brand={this.state.cars[2].brand}
          model={this.state.cars[2].model}
          change={this.changeNameHandler}
        >
          Best One!
        </Car>
      </div>
    );
  }
}

// const App = () => {
//   const oldState = {
//     cars: [
//       { brand: "BMW", model: "M4" },
//       { brand: "Mclaren", model: "P1" },
//       { brand: "Ferrari", model: "LaFerrari" },
//     ],
//     change: true,
//   };
//   const newState = {
//     cars: [
//       { ...oldState.cars[0] },
//       { ...oldState.cars[1] },
//       { ...oldState.cars[2] },
//     ],
//   };
//   newState.cars[0].brand = "Lamborghini";
//   newState.change = false;

//   const [currentCar, setCarState] = useState(oldState);
//   const switchNameHandler = () => {
//     if (currentCar.change) {
//       setCarState(newState);
//     } else {
//       setCarState(oldState);
//     }
//     console.log(currentCar.change);
//   };

//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <h2>Props for the first time</h2>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Car brand={currentCar.cars[0].brand} model={currentCar.cars[0].model} />
//       <Car brand={currentCar.cars[1].brand} model={currentCar.cars[1].model}>
//         Better One!
//       </Car>
//       <Car brand={currentCar.cars[2].brand} model={currentCar.cars[2].model}>
//         Best One!
//       </Car>
//     </div>
//   );
// };

export default App;
