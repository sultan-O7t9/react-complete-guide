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
    nameView: true,
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
  toggleNameHandler = () => {
    let invName = !this.state.nameView;
    this.setState({ nameView: invName });
    console.log(invName, this.state.nameView);
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

    let cars = null;

    if (this.state.nameView) {
      cars = (
        <div>
          {this.state.cars.map((car) => {
            return <Car brand={car.brand} model={car.model} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Props for the first time</h2>
        <button style={styles} onClick={this.toggleNameHandler}>
          Toggle Cars
        </button>
        {cars}
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
