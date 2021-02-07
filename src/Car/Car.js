import React from "react";

const Car = ({ brand, model, children }) => {
  return (
    <div>
      <h4>
        I'm a Car built by {brand} and my model is {model}
      </h4>
      <p>{children}</p>
    </div>
  );
};

export default Car;
