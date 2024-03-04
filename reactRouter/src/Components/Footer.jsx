import { Link } from "react-router-dom";
import { useEffect,useState, useRef } from "react";

export default function Footer() {
  
  const thirdChildRef=useRef(null);
  const [thirdChildWidth,setThirdChildWidth]=useState("1rem");

  useEffect(() => {
    if (thirdChildRef.current) {
      const thirdChildWidth = thirdChildRef.current?.offsetWidth;
      setThirdChildWidth(thirdChildWidth);
      // setFirstChildWidth(thirdChildWidth);
      // setSecChildWidth(thirdChildWidth);
      console.log(`thirdChildWidth=${thirdChildWidth}`);
      const firstChild = document.getElementById("footer-resources");
      const secondChild = document.getElementById("footer-follow-us");
      firstChild.style.width = `${thirdChildWidth}px`;
      secondChild.style.width = `${thirdChildWidth}px`;
    }
  }, [thirdChildWidth]);

  const imgLogoStyles = {
    width: "50px",
    height: "40px",
  };
  return (
    <footer id="main-footer" className="px-6 py-6 border-y-2">
      <div className="md:flex md:justify-between md:items-center max-w-screen-xl mx-auto ">
        <div id="logo-box" className="mb-6 md:mb-0">
          <Link to="#" className="">
            <img
              style={imgLogoStyles}
              className="rounded"
              src="../../public/images/chai-aur-code.png"
            />
          </Link>
        </div>
        <div
          id="footer-child-2"
          className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 justify-items-center sm:justify-items-start"
        >
          <div
            id="footer-resources"
            className="flex flex-col items-start"
            
          >
            <span className="font-bold block">Resources</span>
            <Link to="#">Home</Link>
            <Link to="#">About</Link>
          </div>
          <div
            id="footer-follow-us"
            className="flex flex-col items-start"
          >
            <span className="font-bold block">Follow Us</span>
            <Link to="#">Github</Link>
            <Link to="#">Discord</Link>
          </div>
          <div
            id="footer-legal"
            className="flex flex-col items-start"
            ref={thirdChildRef}
          >
            <span className="font-bold block">Legal</span>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
