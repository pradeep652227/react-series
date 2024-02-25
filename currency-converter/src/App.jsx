import "./App.css";
import InputBox from "./Components/InputBox";
import { useState } from "react";

export default function App() {
  const [fromCurr, setFromCurr] = useState("usd");
  const [toCurr, setToCurr] = useState("inr");
  const [toInputVal, setToInputVal] = useState(0);
  const [fromInputVal, setFromInputVal] = useState(0);
  const [triggeredBy, setTrigerredBy] = useState(null); //to check which component trigerred the currency change
  const [convertedAmount, setConvertedAmount] = useState(0);
  // const toInputRef=useRef(null);
  const [swap, setSwap] = useState(true);

  const objectProps = {
    setFromCurr:setFromCurr,
    setToCurr:setToCurr,
    fromCurr:fromCurr,
    toCurr:toCurr,
    fromInputVal:fromInputVal,
    toInputVal:toInputVal,
    setFromInputVal:setFromInputVal,
    setToInputVal:setToInputVal,
    triggeredBy:triggeredBy,
    setTrigerredBy:setTrigerredBy,
    setConvertedAmount:setConvertedAmount,
    swap:swap
  };
  return (
    <div className="main-body h-screen flex items-center justify-center">
      <div className="currency-changer-box bg-gray-400 rounded py-8 px-12 flex flex-col items-center justify-center">
        <InputBox
          labelName={swap ? "From" : "To"}
          inputName={swap ? "from-input" : "to-input"}
          objectProps={objectProps}
        />
        <button
          className="bg-lime-300 px-5 py-1 my-1 rounded"
          onClick={() => {
            setSwap(!swap);
          }}
        >
          Swap
        </button>
        <InputBox
          labelName={swap ? "To" : "From"}
          inputName={swap ? "to-input" : "from-input"}
          objectProps={objectProps}
        />
        <button
          className="mt-4 bg-emerald-700 py-2 px-5 rounded  "
          onClick={() => setToInputVal(convertedAmount)}
        >
          Convert {swap ? fromCurr.toUpperCase() : toCurr.toUpperCase()} to{" "}
          {swap ? toCurr.toUpperCase() : fromCurr.toUpperCase()}
        </button>
      </div>
    </div>
  );
}
