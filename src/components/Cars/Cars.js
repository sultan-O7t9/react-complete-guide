import React from "react";
import Car from "./Car/Car";

const Persons = (props) => {
  return props.cars.map((car, indexInCars) => {
    return (
      <Car
        brand={car.brand}
        key={car.id}
        model={car.model}
        del={() => {
          props.del(indexInCars);
        }}
        change={(event) => props.change(event, car.id)}
      />
    );
  });
};

export default Persons;
