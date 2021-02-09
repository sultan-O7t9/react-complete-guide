import React from "react";
import "./Car.css";

const Car = ({ brand, model, children, change, click }) => {
  return (
    <div className="Car" onClick={click}>
      <h4>
        I'm a Car built by {brand} and my model is {model}
      </h4>
      <p>{children}</p>
      <input type="text" placeholder="brand" value={brand} onChange={change} />
    </div>
  );
};

export default Car;
