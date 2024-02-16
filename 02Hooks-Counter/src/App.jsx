import { useState } from "react";

export default function App() {
  let [value, setValue] = useState(0); //state variable and setter function are returned from useState() as array[]

  function increaseValue() {
    if (value < 20) setValue(value + 1);
    else window.alert("You are not allowed to increase further!!");
  }
  function decreaseValue() {
    if (value > 0) setValue(--value);
    else window.alert("You are not allowed to reduce further!!");
  }

  function updateValue(event){
    event.preventDefault();
    console.log(event.target[0].value);
    setValue(event.target[0].value);
  }

  function favColor(event){
    event.preventDefault();
    console.log(event.target[0].value);
  }
 
  return (
    <div class="container-1">
      <h1>Chai aur react</h1>
      <h2>Counter Value: {value}</h2>

      <h2>Set Value: </h2>
      <form onSubmit={updateValue}>
      <input type="number"></input>
      <button type="submit">Enter</button>
      </form>

      <br />
      <button onClick={increaseValue}>Increase Value (+)</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value (-)</button>
      <br />
      <select id="color-select" name="fav-color" onChange={favColor}>
        <option value="colorRed">Red</option>
        <option value="colorGreen">Green</option>
        <option value="colorBlue">Blue</option>
      </select>

      <select>
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  );
}
