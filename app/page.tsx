// File: app/page.tsx located in app/ directory
 
"use client"
 
import { useState } from "react";
 
export default function App() {
  const [state_variableX, set_variableX] = useState(0);
  const [state_stringVariable, set_stringVariable] = useState("initial values");
 
  //array type states
  const [state_array_color, set_array_color] = useState(["red", "yellow", "green"]);
 
  const changeValue = () => {
    console.log("Function is called...");
    set_variableX(500);
    set_stringVariable("New Value");
  };
 
  const updateArray = () =>{
    state_array_color.push("Magenta");
    set_array_color([...state_array_color]);
  }
  return (
    <div>
      <h1>
        <b>Value of state for variable: </b> {state_variableX}
      </h1>
      <h1>
        <b>String State Variable: </b> {state_stringVariable}
      </h1>
      <button
        onClick={changeValue}
        style={{backgroundColor: "black", color: "white", padding: "5px"}}
      >
        Change value
      </button>
 
      {/* Display in array */}
      <p>
        <b>Color Array Data: </b>
        {state_array_color}
      </p>
 
      {/* Using map() function to display array*/}
      <ul>
        {state_array_color.map((elem, index) => {
          return (
            <li key={index}>
              Index {index}: {elem}
            </li>
          );
        })}
      </ul>
 
      {/* Button to update Array */}
      <button style={{backgroundColor: "black", color: "white"}} onClick={updateArray}>Add Magenta in Array</button>
    </div>
  );
}