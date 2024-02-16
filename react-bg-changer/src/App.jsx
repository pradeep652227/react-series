import "../public/css/App.css";
import { useState } from "react";

//01 state variable = color value
//body - background-color: colorVal
//on click- change color val

function App() {
  const [colorVal, setColorVal] = useState("");

  function changeColor(event) {
    let colorName = event.target.innerHTML.toLowerCase();
    setColorVal(colorName);
  }

  let dummyElemStyle = {
    position: "absolute",
    left: "0",
    top: "0",
    zIndex: "-1",
    width: "100vw",
    height: "100vh",
    backgroundColor: colorVal
  };
  return (
    <>
      <div id="dummyElem" style={dummyElemStyle}></div>
      <h1 className="text-black text-center rounded-xl bg-green-500 p-4">
        Background Changer
      </h1>
      <button onClick={changeColor}>Red</button>
      <button onClick={changeColor}>Blue</button>
      <button onClick={changeColor}>Green</button>
      <button onClick={changeColor}>Yellow</button>
    </>
  );
}

export default App;
