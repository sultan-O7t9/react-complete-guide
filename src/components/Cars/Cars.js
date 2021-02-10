import React from "react";
import Car from "./Car/Car";

class Cars extends React.Component {
  //Adding getDerivedStateFromProps
  //It does execute but causes error so commenting it for now
  //   static getDerivedStateFromProps() {
  //     console.log("[Cars.js] getDerivedStateFromProps executing");
  //     return null;
  //   }
  //Adding shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("[Cars.js] shouldComponentUpdate executing");
    return true;
  }
  //Adding render
  render() {
    console.log("[Cars.js] render executing");
    return this.props.cars.map((car, indexInCars) => {
      return (
        <Car
          brand={car.brand}
          key={car.id}
          model={car.model}
          del={() => {
            this.props.del(indexInCars);
          }}
          change={(event) => this.props.change(event, car.id)}
        />
      );
    });
  }
  //Adding getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Cars.js] getSnapshotBeforeUpdate executing");

    return null;
  }
  //Adding componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshotFrom_getSnap) {
    console.log("[Cars.js] componentDidUpdate executing");
  }
}
export default Cars;
