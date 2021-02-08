import React from "react";

const Car = ({ brand, model, children, change }) => {
  return (
    <div>
      <h4>
        I'm a Car built by {brand} and my model is {model}
      </h4>
      <p>{children}</p>
      <input type="text" placeholder="brand" value={brand} onChange={change} />
    </div>
  );
};

export default Car;
