/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useCurrencyInfo } from "../custom_hooks/useCurrencyInfo";

export default function InputBox(props) {
  const labelName = props.labelName;
  const inputName = props.inputName;
  const fromInputVal = props.objectProps.fromInputVal;
  const toInputVal = props.objectProps.toInputVal;
  const setFromInputVal = props.objectProps.setFromInputVal;
  const setToInputVal = props.objectProps.setToInputVal;
  const fromCurr = props.objectProps.fromCurr;
  const toCurr = props.objectProps.toCurr;
  const setFromCurr = props.objectProps.setFromCurr;
  const setToCurr = props.objectProps.setToCurr;
  const setConvertedAmount = props.objectProps.setConvertedAmount;

  const [outlineChange,setOutlineChange]=useState(false);
  const [currency, setCurrency] = useState("usd");
  let data = useCurrencyInfo(currency); //an object of currency containing other currencies and corresponding conversion values.
  let currencies = useCurrencyInfo("usd");
  currencies = Object.keys(currencies); //array of currency codes

  function handleChange(e) {
    const { value: inputVal } = e.target;
    if (labelName === "From") {
      console.log("From-Curr-Func");
      setCurrency(inputVal); //new currency value is updated
      // setTrigerredBy("from-input");
      setFromCurr(inputVal);
    } else {
      console.log("To-Curr-Func");
      // setTrigerredBy("to-input");
      setToCurr(inputVal);
    }
  }
  function handleInput(e) {
    const { value: inputVal } = e.target;

    if (inputName === "from-input") {
      console.log("From-input-Function");
      setCurrency(fromCurr); //when the currency was of to-field so update it to from-field
      setFromInputVal(inputVal);
      let ans = data[toCurr] * inputVal;
      setConvertedAmount(ans);
      // setToInputVal(ans);
    } else {
      setToInputVal(inputVal);
      setCurrency(toCurr); //for correct data value
      let ans = data[fromCurr] * inputVal;
      // setConvertedAmount(ans);
      setFromInputVal(ans);
      console.log(
        `To-input-Func. with toCurr=${toCurr}, data=${data}. fromCurr=${fromCurr}. inputVal=${inputVal}. ans=${ans}`
      );
    }
  }

  let count = 0;
  useEffect(() => {
    if (fromInputVal || toInputVal) {
      console.log(
        `Count=${++count}.useEffect func with fromCurr=${fromCurr}, toCurr=${toCurr},data[toCurr]=${
          data[toCurr]
        }`
      );
      setCurrency(fromCurr);
      let ans = data[toCurr] * fromInputVal;
      setConvertedAmount(ans);
      setToInputVal(ans);
    }
  }, [fromCurr, toCurr, data]);

  let input_select_style = { height: "2em", outline: "0" };
  return (
    <div className="input-box" style={{fontSize:"1.2em"}}>
      <label className="block" >{labelName}</label>
      <div
        id="input_select_box"
        style={{ border: "1px solid white" }}
        className={outlineChange ? "outlineClass" : "removeOutline"}
        onClick={()=>setOutlineChange(!outlineChange)}
      >
        <input
          type="number"
          className="py-1"
          value={labelName === "From" ? fromInputVal : toInputVal}
          name={props.inputName}
          onChange={handleInput}
          // onClick={(e)=>e.stopPropagation()}
          style={input_select_style}
        />
        <select
          className="py-1"
          onChange={handleChange}
          value={labelName === "From" ? fromCurr : toCurr}
          style={input_select_style}
          // onClick={(e)=>e.stopPropagation()}
        >
          {currencies.map((currency, idx) => {
            return <option key={idx}>{currency}</option>;
          })}
        </select>
      </div>
    </div>
  );
  //MAs
  // {labelName === "From" ? (
  //   <input
  //     type="number"
  //     className="py-1"
  //     value={fromInputVal}
  //     name={props.inputName}
  //     onChange={handleInput}
  //   />
  // ) : (
  //   <input
  //     type="number"
  //     className="py-1"
  //     value={toInputVal}
  //     name={props.inputName}
  //     onChange={handleInput}
  //   />
  // )}

  /* if (
    (labelName === "From" && currency === fromCurr) ||
    (labelName === "To" && currency === toCurr)
  )
    return (
      <option key={idx} selected>
        {currency}
      </option>
    );
  else  */
}
