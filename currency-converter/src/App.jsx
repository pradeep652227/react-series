import "./App.css";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import { useState } from "react";

export default function App() {
  const [fromCurr, setFromCurr] = useState("usd");
  const [toCurr, setToCurr] = useState("inr");
  const [toInputVal, setToInputVal] = useState(0);
  const [fromInputVal, setFromInputVal] = useState(0);
  const [triggeredBy, setTrigerredBy] = useState(null); //to check which component trigerred the currency change
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [swap, setSwap] = useState(true);

  const objectProps = {
    setFromCurr: setFromCurr,
    setToCurr: setToCurr,
    fromCurr: fromCurr,
    toCurr: toCurr,
    fromInputVal: fromInputVal,
    toInputVal: toInputVal,
    setFromInputVal: setFromInputVal,
    setToInputVal: setToInputVal,
    triggeredBy: triggeredBy,
    setTrigerredBy: setTrigerredBy,
    setConvertedAmount: setConvertedAmount,
    swap: swap,
  };

  function handleBtnsClick(e) {
    window.open(
      e.target.name === "credits_btn"
        ? "https://www.youtube.com/@chaiaurcode/featured"
        : "https://github.com/pradeep652227/react-series/tree/main/currency-converter"
    );
  }
  // let background_img_add="https://c0.wallpaperflare.com/path/370/489/251/india-udaipur-lake-pichola-rajasthan-9e4224ba704c7565d0623a0abdb94a83.jpg";
  let background_img_add =
    "https://r4.wallpaperflare.com/wallpaper/206/498/365/the-sky-sunset-lights-river-home-hd-wallpaper-e815da12f7b8eca6f6ef5b7688004129.jpg";
  // let background_img_add="https://r4.wallpaperflare.com/wallpaper/841/28/969/5bd13cfb2b212-wallpaper-628132e04dd60e0b6a5882054098b9d2.jpg";
  let body_div_style = {
    backgroundImage: `url(${background_img_add})`,
    backgroundSize: "cover",
  };
  let logo_img_style = {
    width: "60px",
    height: "50px",
    position: "fixed",
    top: "0",
    left: "0",
  };
  let credits_style = {
    position: "fixed",
    bottom: "0",
    left: "0",
    fontSize: "0.8em",
  };
  let link_btn_style = {
    position: "fixed",
    bottom: "0",
    right: "0",
    fontSize: "0.8em",
  };
  return (
    <div
      className="main-body h-screen flex items-center justify-center"
      style={body_div_style}
    >
      <img
        className="logo-img"
        src="../public/images/chai-aur-code.png"
        style={logo_img_style}
      />
      <div className="currency-changer-box bg-gray-400 rounded py-8 px-12 flex flex-col items-center justify-center">
        <InputBox
          labelName={swap ? "From" : "To"}
          inputName={swap ? "from-input" : "to-input"}
          objectProps={objectProps}
        />
        <Button
          classes="bg-lime-300 px-5 py-1 my-1 rounded"
          handleClick={() => {
            setSwap(!swap);
          }}
          type="swap"
        >
          Swap
        </Button>
        <InputBox
          labelName={swap ? "To" : "From"}
          inputName={swap ? "to-input" : "from-input"}
          objectProps={objectProps}
        />
        <Button
          classes="mt-10 bg-emerald-700 py-2 px-5 rounded"
          handleClick={() => setToInputVal(convertedAmount)}
          type="convert"
          swap={swap}
          fromCurr={fromCurr}
          toCurr={toCurr}
        />
        <button
          style={credits_style}
          className="rounded-full bg-zinc-300 text-00 px-2"
          name="credits_btn"
          onClick={handleBtnsClick}
        >
          Credits- Chai Aur Code by Hitesh Choudhary Sir
        </button>
        <button
          style={link_btn_style}
          className="rounded-full bg-zinc-300 text-00 px-2"
          name="link_btn"
          onClick={handleBtnsClick}
        >
          Link To Code
        </button>
      </div>
    </div>
  );
}
