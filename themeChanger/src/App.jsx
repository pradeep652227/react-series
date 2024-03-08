import "./App.css";
import { useEffect, useState } from "react";
import ThemeButton from "./Components/ThemeButton";
import Card from "./Components/Card";
import { ThemeContextProvider } from "./contexts/theme";

function App() {
  // const [theme,setTheme]=useState("light");
  // useEffect(()=>{
  //   let bodyElem=document.querySelector("body");
  //   let bgClass,textClass;
  //   bgClass=((theme==="light")?"bg-slate-50":"bg-black");
  //   textClass=((theme==="light")?"text-black":"text-white");
  //   bodyElem.classList.remove("bg-slate-50","bg-black","text-black","text-white");
  //   bodyElem.classList.add(bgClass,textClass);
  //   console.log("BgClass="+bgClass);
  // },[theme]);

  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log("Submit Btn");
  //   (theme==="light")?setTheme("black"):setTheme("light");
  // }
  
  const [theme, setTheme] = useState("light");
  //defined the value props of context object
  useEffect(() => {
    
    let htmlElem=document.querySelector('html');
    htmlElem.classList.remove("light","dark");
    htmlElem.classList.add(theme);
    console.log("theme="+theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevValue) => (prevValue === "light" ? "dark" : "light"));
  };
  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <ThemeContextProvider value={{ theme, toggleTheme }}>
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {" "}
            {/*ThemeBtn */}
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/*Card */}
            <Card />
          </div>
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
