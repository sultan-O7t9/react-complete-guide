import React, { useState } from "react";
import "./App.css";
import Car from "./Car/Car";

// class App extends React.Component {
//   state = {
//     cars: [
//       { brand: "BMW", model: "M4" },
//       { brand: "Mclaren", model: "P1" },
//       { brand: "Ferrari", model: "LaFerrari" },
//     ],
//   };
//   switchNameHandler = () => {
//     console.log("Clicked");
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello</h1>
//         <h2>Props for the first time</h2>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Car
//           brand={this.state.cars[0].brand}
//           model={this.state.cars[0].model}
//         />
//         <Car brand={this.state.cars[1].brand} model={this.state.cars[1].model}>
//           Better One!
//         </Car>
//         <Car brand={this.state.cars[2].brand} model={this.state.cars[2].model}>
//           Best One!
//         </Car>
//       </div>
//     );
//   }
// }
const App = () => {
  const [currentCar, setCarState] = useState({
    cars: [
      { brand: "BMW", model: "M4" },
      { brand: "Mclaren", model: "P1" },
      { brand: "Ferrari", model: "LaFerrari" },
    ],
  });

  const switchNameHandler = () => {
    setCarState({
      cars: [
        { brand: "Lambo", model: "M4" },
        { brand: "Mclaren", model: "P1" },
        { brand: "Ferrari", model: "LaFerrari" },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Props for the first time</h2>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Car brand={currentCar.cars[0].brand} model={currentCar.cars[0].model} />
      <Car brand={currentCar.cars[1].brand} model={currentCar.cars[1].model}>
        Better One!
      </Car>
      <Car brand={currentCar.cars[2].brand} model={currentCar.cars[2].model}>
        Best One!
      </Car>
    </div>
  );
};

export default App;
