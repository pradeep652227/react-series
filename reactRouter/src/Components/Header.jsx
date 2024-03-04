import { Link } from "react-router-dom";
import NavMenuItem from "./NavMenuItem.jsx";

export default function Header() {
  const menu_right_item_classes =
    "text-gray-800 hover:bg-gray-50 px-3 py-1 border-2 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-[1px] focus:outline-none";
  const navItemClasses =
    "px-2 py-1 duration-200 hover:border-b-2 hover:border-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:p-0";
  const imgLogoStyles = {
    width: "50px",
    height: "40px",
  };
  return (
    <header id="main-header" className="shadow sticky z-50 top-0">
      <nav className="top-nav border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
          <div id="logo-box" className="">
            <Link to="#" className="flex items-center">
              <img
                style={imgLogoStyles}
                className="rounded"
                src="../../public/images/chai-aur-code.png"
              />
            </Link>
          </div>

          <div
            id="menu-right"
            className="flex items-center lg:order-2 space-x-2"
          >
            <Link to="#" id="login" className={menu_right_item_classes}>
              Login
            </Link>
            <Link
              to="#"
              id="get-started"
              className={`${menu_right_item_classes} bg-orange-500 duration-300`}
            >
              Get Started
            </Link>
          </div>

          <div
            id="mobile-menu-2"
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          >
            <div id="menu-box" className="flex items-center justify-center md:">
              <ul className="nav-ui flex flex-col mt-4 font-medium text-lg lg:flex-row lg:space-x-8 lg:mt-0">
                <NavMenuItem
                  navItemClasses={navItemClasses + " ml-0"}
                  to="/"
                  content="Home"
                  isNestedRoute={false}
                />
                <NavMenuItem
                  navItemClasses={navItemClasses}
                  to="/about"
                  content="About"
                  isNestedRoute={false}
                />
                <NavMenuItem
                  navItemClasses={navItemClasses}
                  to="/contact-us"
                  content="Contact Us"
                  isNestedRoute={false}
                />
                <NavMenuItem
                  navItemClasses={navItemClasses}
                  to="/about/github"
                  content="Github"
                  specialRoute="/github"
                  isNestedRoute={true}
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
