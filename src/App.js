import { useState } from "react";
import FunctionButton from "./Componats/FunctionButton";
import FunctionClass from "./Componats/FunctionClass";
import "./App.css";

function Button(){
 const [flag, setFlag] =useState(false);
 const [flag1, setFlag1] = useState(false);

 function functionButton(){
  setFlag(!flag);
  // alert(flag);
 }
 function functionClass(){
  setFlag1(!flag1);
  // alert(flag);
 }

 return(
  <div>
    <div className="heading">Styling Using Class and Function Components</div>
    <div className="buttonContainer">
      <button onClick={functionButton}>To see Styling in the function component</button>
      <button onClick={functionClass}>To see Styling in the function component</button>
    </div>
    <div className="flex-container">
      {flag ? <FunctionButton/> : " "}
      {flag1 ? <FunctionClass/> : " " }
    </div>
  </div>
 );
}

export default Button;