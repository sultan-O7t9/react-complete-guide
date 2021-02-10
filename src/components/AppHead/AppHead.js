import React, { useEffect } from "react";

const AppHead = (props) => {
  //Finally using useEffect, the second most important React Hook, an alternative for Lifecycle Hooks...
  useEffect(() => {
    console.log(
      "[AppHead.js] useEffect executing, it will execute each time there is re-rendering"
    );
  });
  useEffect(() => {
    console.log(
      "[AppHead.js] useEffect executing, it will execute for first time and every time we press the Toggle Button; when props.toggle will change"
    );
  }, [props.toggle]);
  useEffect(() => {
    console.log(
      "[AppHead.js] useEffect executing, it will execute for first time only, guess why? cuz the dependency list is empty"
    );
  }, []);

  const styles = {
    backgroundColor: "rgb(0, 231, 212)",
    padding: "1rem 1.2rem",
    borderRadius: "50px",
    border: "2px solid rgb(100, 255, 251)",
    fontSize: "1rem",
    color: "rgb(212, 255, 251)",
    outline: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };
  if (props.changeColor) styles.backgroundColor = "rgb(255, 82, 82)";
  return (
    <div>
      <h1>Hello</h1>
      <h2>Props for the first time</h2>
      <button style={styles} onClick={props.toggle}>
        Toggle Cars
      </button>
    </div>
  );
};

export default AppHead;
