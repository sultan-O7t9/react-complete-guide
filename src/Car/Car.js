import React from "react";

const Car = () => {
  return (
    <p>
      I'm a Car, a model built in year {"19" + Math.floor(Math.random() * 30)}
    </p>
  );
};

export default Car;
