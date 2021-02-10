import React from "react";
import "./Car.css";

const Car = ({ brand, model, children, change, del }) => {
  return (
    <div className="Car">
      <h4 onClick={del}>
        I'm a Car built by {brand} and my model is {model}
      </h4>
      <p>{children}</p>
      <input type="text" placeholder="brand" value={brand} onChange={change} />
    </div>
  );
};

export default Car;
