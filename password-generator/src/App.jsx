import { useState, useEffect, useRef, useCallback } from "react";
import "../public/css/App.css";

function App() {
  const [pwd, setPwd] = useState("");
  const [length, setLength] = useState(6);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const pwdRef = useRef(null);
  /*My Approach*/
  /*  useEffect(() => {
    pwdGenerator();
  }, [length, numbersAllowed, charsAllowed]);
    
    function pwdGenerator() {
    console.log("Pwd Function Called!!");
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numStr = "0123456789";
    let charStr = "~!@#$%^&*()_+=";

    let pwdString = str;
    if (numbersAllowed) pwdString += numStr;

    if (charsAllowed) pwdString += charStr;

    let pwdLen = pwdString.length;
    let randStr = "";
    let counter = 0;
    while (counter < length) {
      randStr += pwdString.charAt(Math.floor(Math.random() * pwdLen));
      counter++;
    }
    console.log(
      "String is- " + pwdString + " and random string generated is- " + randStr
    );
    setPwd(randStr);
  }
*/
  useEffect(()=>{
    pwdGenerator();
  },[length,charsAllowed,numbersAllowed]);

  const pwdGenerator = useCallback(() => {
    console.log("Pwd Function Called!!");
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numStr = "0123456789";
    let charStr = "~!@#$%^&*()_+=";

    let pwdString = str;
    if (numbersAllowed) pwdString += numStr;

    if (charsAllowed) pwdString += charStr;

    let pwdLen = pwdString.length;
    let randStr = "";
    let counter = 0;
    while (counter < length) {
      randStr += pwdString.charAt(Math.floor(Math.random() * pwdLen));
      counter++;
    }
    console.log(
      "String is- " + pwdString + " and random string generated is- " + randStr
    );
    setPwd(randStr);
  }, [length, numbersAllowed, charsAllowed]);

  function handleChange(e) {
    const inputName = e.target.name;

    if (inputName === "range") {
      const inputValue = e.target.value;
      setLength(inputValue);
    }
    if (inputName === "numbers") {
      setNumbersAllowed((prevValue) => !prevValue);
    }

    if (inputName === "chars") {
      setCharsAllowed((prevValue) => !prevValue);
    }
  }
  function copyPwdToClipboard() {
    pwdRef.current?.select();
    pwdRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(pwd);
    window.alert("Password Copied!!");
  }
  return (
    <div className="text-white p-4 bg-gray-800 rounded-xl">
      <h1 className="mb-2">Password Generator</h1>

      <div className="inputs">
        <div className="password-box">
          <input
            type="text"
            className="text-black w-80 inline-block mb-2 py-0.5 border-r-"
            name="password"
            value={pwd}
            placeholder="Enter Password"
            onChange={handleChange}
            onClick={pwdGenerator}
            ref={pwdRef}
          />
          <button
            className="copy-pwd w-20 bg-blue-700 outline-none px-3 py-0.5 rounded-none rounded-r-lg"
            onClick={copyPwdToClipboard}
          >
            Copy
          </button>
        </div>
        <input
          id="length"
          className="inline-block"
          type="range"
          min="0"
          max="32"
          defaultValue={length}
          name="range"
          onChange={handleChange}
        />
        <label htmlFor="length" className="ms-2 inline-block">
          Length ({length})
        </label>
        <input
          id="numbers"
          className="mx-2"
          type="checkbox"
          checked={numbersAllowed}
          name="numbers"
          onChange={handleChange}
        />
        <label htmlFor="numbers" className="inline-block">
          Numbers
        </label>
        <input
          id="chars"
          className="mx-2"
          type="checkbox"
          checked={charsAllowed}
          name="chars"
          onChange={handleChange}
        />
        <label htmlFor="chars" className="inline-block">
          Characters
        </label>
      </div>
    </div>
  );
}

export default App;
