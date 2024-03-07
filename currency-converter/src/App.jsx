import "./App.css";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import { useState, useRef } from "react";

export default function App() {
  const [fromCurr, setFromCurr] = useState("usd");
  const [toCurr, setToCurr] = useState("inr");
  const [toInputVal, setToInputVal] = useState(0);
  const [fromInputVal, setFromInputVal] = useState(0);
  const [triggeredBy, setTrigerredBy] = useState(null); //to check which component trigerred the currency change
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [swap, setSwap] = useState(true);
  const creditsRef = useRef(null);
  const creditsBtnRef = useRef(null);

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
    let btnName = e.target.name;
    if (btnName === "credits_btn") {
      e.target.classList.add("slide-right");
      e.target.classList.remove("rounded-bl-none");
      e.target.classList.remove("rounded-tl-none");
      setTimeout(() => {//execute this code after 0.5s
        e.target.classList.add("hidden");
        creditsRef.current?.classList.remove("hidden");
      }, 500);
    } else if (btnName === "collapse_btn") {
      creditsRef.current?.classList.add("hidden");
      creditsBtnRef.current?.classList.remove("hidden");

      setTimeout(() => {
        creditsBtnRef.current?.classList.remove("slide-right");
        creditsBtnRef.current?.classList.add("slide-left");
        setTimeout(() => {
          creditsBtnRef.current?.classList.remove("slide-left");
          creditsBtnRef.current?.classList.add("transi");
          creditsBtnRef.current?.classList.add("rounded-bl-none");
          creditsBtnRef.current?.classList.add("rounded-tl-none");
        }, 500);
      }, 500);
    }else{
      window.open("https://github.com/pradeep652227/react-series/tree/main/currency-converter");
    }
  }

  let credits_style = {
    maxWidth: "200px",
    height: "fit-content",
    position: "absolute",
    left: "0px",
  };
  let collapse_btn_style={
    position:"relative",
    left:"20%",
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
  let credits_btn_style = {
    opacity: "1",
    position: "absolute",
    left: "0px",
  };
  let link_btn_style = {
    position: "fixed",
    top: "0",
    right: "0",
  };

  return (
    <div
      className="relative main-body h-screen flex items-center justify-center"
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
      </div>
      <button
        style={credits_btn_style}
        className="absolute rounded-full rounded-tl-none rounded-bl-none bg-zinc-300 text-md px-2 self-center"
        name="credits_btn"
        onClick={handleBtnsClick}
        ref={creditsBtnRef}
      >
        Credits
      </button>
      {/* Credits Box- show/hide */}
      <div
        id="credits"
        ref={creditsRef}
        className="hidden box bg-gray-400 p-2 self-center"
        style={credits_style}
      >
        <a href="https://www.youtube.com/@chaiaurcode/featured" target="_blank" rel="noopener noreffer">
          <span className="text-md d-block">
            Chai Aur Code by Hitesh Choudhary Sir
          </span>
          <img
src="https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s176-c-k-c0x00ffffff-no-rj"            id="credits_img"
            className="rounded-xl shadow-2xl "
          />
        </a>
        <button
          id="collapse-credits"
          className="bg-gray-400 rounded-xl px-2 hover:bg-gray-50 duration-200"
          style={collapse_btn_style}
          name="collapse_btn"
          onClick={handleBtnsClick}
        >
          Collapse
        </button>
      </div>
      {/* Credits Box- hide/show */}
      <button
        style={link_btn_style}
        className="rounded-full rounded-tr-none rounded-br-none bg-zinc-300 text-md px-2"
        name="link_btn"
        onClick={handleBtnsClick}
      >
        Link To Code
      </button>
    </div>
  );
}
