import { useState } from "react";
import "./App.css";

function App() {
  const [Switch, setSwitch] = useState("ON");
  const [Counter, setCounter] = useState(1);
  const [para, setPara] = useState("");

  function SwitchFunc() {
    if (Switch === "ON") {
      setSwitch("OFF");
    } else if (Switch === "OFF") {
      setSwitch("ON");
      setPara("");
    } else {
      setPara("Something Wrong");
    }
  }
  function counterFunc() {
    if (Switch === "OFF") {
      setPara("Counter Is OFF NOW");
    } else {
      setCounter(Counter + 1);
    }
  }

  return (
    <>
    <p>I am on Choti Today(Due to Some reason) kindly Accept my Assigment</p>
    <p style={{color:"green"}}>This is a counter Assigment when it is one it +1 if off it is not working </p>
      <button onClick={counterFunc}>{Counter}</button>
      <br />
      <hr />

      <button onClick={SwitchFunc}>{Switch}</button>
      <br />
      <p>{para}</p>
    </>
  );
}

export default App;
