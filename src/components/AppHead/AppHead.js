import React from "react";

const AppHead = (props) => {
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
