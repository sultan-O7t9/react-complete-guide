import React, { useState } from "react";
import "./App.css";
import Cars from "../../components/Cars/Cars";
import AppHead from "../../components/AppHead/AppHead";

class App extends React.Component {
  //Adding constructor
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        { id: "car1", brand: "ABC", model: "abc" },
        { id: "car2", brand: "DEF", model: "def" },
        { id: "car3", brand: "GHI", model: "ghi" },
        { id: "car4", brand: "JKL", model: "jkl" },
      ],
      nameView: true,
    };
    console.log("[App.js] constructor executing");
  }
  //Adding getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps executing");
    return state;
  }

  changeBrandHandler = (event, carID) => {
    const carIndex = this.state.cars.findIndex((car) => {
      return car.id === carID;
    });
    // console.log(carIndex);
    //These two lines are for accessing, copying the OBJECT on which event is triggered and modifying its brand property
    const modifiedCar = { ...this.state.cars[carIndex] };
    // console.log(modifiedCar);
    modifiedCar.brand = event.target.value;
    // console.log(modifiedCar.brand);
    //Now modifiedCar is the object with updated brand, now we have to use setState to update this object in this.state.
    //Also we dont want to update the state object directly, so for that, lets copy the part of the state that is needed to be updated in a new variable...
    const modifiedCars = [...this.state.cars];
    modifiedCars[carIndex] = modifiedCar;
    // console.log(modifiedCars);

    this.setState({ cars: modifiedCars }); //keep the name same or u will be fkd up for several hours
  };

  toggleNameHandler = () => {
    let invName = !this.state.nameView;
    this.setState({ nameView: invName });
    // console.log(invName, this.state.nameView);
  };
  delCarHandler = (index) => {
    //const cars = this.state.cars.slice();--->Deep copy using slice(), when no arguments given it deep copies the array and returns it
    const cars = [...this.state.cars]; //Deep copy using spread operator
    // console.log(cars);
    cars.splice(index, 1);
    //splice removes an element from the given index and reassigns the new array to the caller array
    // console.log(cars);
    this.setState({ cars: cars });
  };
  //Adding render()
  render() {
    let cars = null;
    console.log("[App.js] render executing");
    if (this.state.nameView) {
      cars = (
        <Cars
          cars={this.state.cars}
          change={this.changeBrandHandler}
          del={this.delCarHandler}
        />
      );
    }

    return (
      <div className="App">
        <AppHead
          changeColor={this.state.nameView}
          toggle={this.toggleNameHandler}
        />
        {cars}
      </div>
    );
  }
  //Adding componentDidMount
  componentDidMount() {
    console.log(
      "[App.js] componentDidMount executing and after it our Mounting lifecycle ends"
    );
  }
}

//-----------------------FUNCTIONAL----------------

// const App = () => {
//   const state = {
//     cars: [
//       { id: "car1", brand: "ABC", model: "abc" },
//       { id: "car2", brand: "DEF", model: "def" },
//       { id: "car3", brand: "GHI", model: "ghi" },
//       { id: "car4", brand: "JKL", model: "jkl" },
//     ]
//   };
//   const [currentCars, setCurrentCarState] = useState({ ...state });
//  const [ displayCar, setCurrentCarDisplay]=useState(true);
//   //DONT MODIFY CurrentCars
//   const toggleCarHandler = () => {
//     const tempCar = displayCar;
//     tempCar = !displayCar;
//     setCurrentCarDisplay(tempCar);
//   };
//   const delCarHandler = (carID) => {
//     const currentTempCars = { ...currentCars };
//     let index = currentTempCars.cars.findIndex((car) => car.id === carID);
//     console.log(currentCars);
//     currentTempCars.cars.splice(index, 1);
//     setCurrentCarState(currentTempCars);
//     console.log(currentTempCars);
//   };
//   const carBrandChangeHandler = (event, carID) => {
//     const currentTempCars = { ...currentCars };
//     let index = currentTempCars.cars.findIndex((car) => car.id === carID);
//     currentTempCars.cars[index].brand = event.target.value;
//     console.log(currentTempCars.cars);
//     setCurrentCarState(currentTempCars);
//   };
//   const styles = {
//     backgroundColor: "rgb(0, 231, 212)",
//     padding: "1rem 1.2rem",
//     borderRadius: "50px",
//     border: "2px solid rgb(100, 255, 251)",
//     fontSize: "1rem",
//     color: "rgb(212, 255, 251)",
//     outline: "none",
//     cursor: "pointer",
//     fontWeight: "bold",
//   };
//   let carComps = null;
//   if (currentCars.displayCar) {
//     styles.backgroundColor = "rgb(255, 82, 82)";
//     carComps = (
//       <div>
//         {currentCars.cars.map((car) => {
//           return (
//             <Car
//               brand={car.brand}
//               model={car.brand}
//               key={car.id}
//               del={() => delCarHandler(car.id)}
//               change={(event) => carBrandChangeHandler(event, car.id)}
//             />
//           );
//         })}
//       </div>
//     );
//   }

//   //-----------------------------------------------------------

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <h3>React Hooks</h3>
//       <button style={styles} onClick={toggleCarHandler}>
//         Toggle Cars
//       </button>
//       {carComps}
//     </div>
//   );
// };

export default App;
