import React, { useState } from "react";
import "./App.css";
import Car from "./Car/Car";

<<<<<<< Updated upstream
class App extends React.Component {
  state = {
    cars: [
      { id: "car1", brand: "BMW", model: "M4" },
      { id: "car2", brand: "Lorem ipsum", model: "P1" },
      { id: "car3", brand: "XYZ...", model: "AXS" },
    ],
    nameView: true,
  };
=======
// class App extends React.Component {
//   state = {
//     cars: [
//       { id: "car1", brand: "BMW", model: "M4" },
//       { id: "car2", brand: "Lorem ipsum", model: "P1" },
//       { id: "car3", brand: "XYZ...", model: "AXS" },
//     ],
//     nameView: true,
//   };
>>>>>>> Stashed changes

//   changeBrandHandler = (event, carID) => {
//     const carIndex = this.state.cars.findIndex((car) => {
//       return car.id === carID;
//     });
//     console.log(carIndex);
//     //These two lines are for accessing, copying the OBJECT on which event is triggered and modifying its brand property
//     const modifiedCar = { ...this.state.cars[carIndex] };
//     console.log(modifiedCar);
//     modifiedCar.brand = event.target.value;
//     console.log(modifiedCar.brand);
//     //Now modifiedCar is the object with updated brand, now we have to use setState to update this object in this.state.
//     //Also we dont want to update the state object directly, so for that, lets copy the part of the state that is needed to be updated in a new variable...
//     const modifiedCars = [...this.state.cars];
//     modifiedCars[carIndex] = modifiedCar;
//     console.log(modifiedCars);

//     this.setState({ cars: modifiedCars }); //keep the name same or u will be fkd up for several hours
//   };

//   toggleNameHandler = () => {
//     let invName = !this.state.nameView;
//     this.setState({ nameView: invName });
//     console.log(invName, this.state.nameView);
//   };
//   delCarHandler = (index) => {
//     //const cars = this.state.cars.slice();--->Deep copy using slice(), when no arguments given it deep copies the array and returns it
//     const cars = [...this.state.cars]; //Deep copy using spread operator
//     console.log(cars);
//     cars.splice(index, 1);
//     //splice removes an element from the given index and reassigns the new array to the caller array
//     console.log(cars);
//     this.setState({ cars: cars });
//   };
//   render() {
//     const styles = {
//       backgroundColor: "rgb(0, 231, 212)",
//       padding: "1rem 1.2rem",
//       borderRadius: "50px",
//       border: "2px solid rgb(100, 255, 251)",
//       fontSize: "1rem",
//       color: "rgb(212, 255, 251)",
//       outline: "none",
//       cursor: "pointer",
//       fontWeight: "bold",
//     };

//     let cars = null;

//     if (this.state.nameView) {
//       cars = (
//         <div>
//           {this.state.cars.map((car, indexInCars) => {
//             return (
//               <Car
//                 brand={car.brand}
//                 key={car.id}
//                 model={car.model}
//                 del={() => {
//                   this.delCarHandler(indexInCars);
//                 }}
//                 change={(event) => this.changeBrandHandler(event, car.id)}
//               />
//             );
//           })}
//         </div>
//       );
//       styles.backgroundColor = "rgb(255, 82, 82)";
//     }

//     return (
//       <div className="App">
//         <h1>Hello</h1>
//         <h2>Props for the first time</h2>
//         <button style={styles} onClick={this.toggleNameHandler}>
//           Toggle Cars
//         </button>
//         {cars}
//       </div>
//     );
//   }
// }

const App = () => {
  const cars = [
    { id: "car1", brand: "ABC", model: "abc" },
    { id: "car2", brand: "DEF", model: "def" },
    { id: "car3", brand: "GHI", model: "ghi" },
    { id: "car4", brand: "JKL", model: "jkl" },
  ];

<<<<<<< Updated upstream
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Props for the first time</h2>
        <button style={styles} onClick={this.toggleNameHandler}>
          Toggle Cars
        </button>
        {cars}
=======
  const [currentDisplayCarState, setDisplayCarState] = useState({
    displayCar: true,
  });

  const toggleCarHandler = () => {
    let toggleDisplay = !currentDisplayCarState;
    setDisplayCarState(toggleDisplay);
    console.log(toggleDisplay, currentDisplayCarState);
  };
  let carComps = null;
  if (currentDisplayCarState) {
    carComps = (
      <div>
        {cars.map((car) => {
          return <Car brand={car.brand} model={car.brand} key={car.id} />;
        })}
>>>>>>> Stashed changes
      </div>
    );
  }
<<<<<<< Updated upstream
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>React Hooks</h3>
      <button onClick={toggleCarHandler}>Toggle Cars</button>
      {carComps}
    </div>
  );
};

=======
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
//.
>>>>>>> Stashed changes
export default App;
