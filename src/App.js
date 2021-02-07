import React from "react";
import "./App.css";
import Car from "./Car/Car";

function App() {
  return (
    <div className="App">
      <h1>Hello Motherfuckers</h1>
      <h2>Props for the first time</h2>
      <Car brand="BMW" model="M4" />
      <Car brand="McLaren" model="P1">
        Better One!
      </Car>
      <Car brand="Ferrari" model="La Ferrari">
        Best One!
      </Car>
    </div>
  );
}

export default App;
