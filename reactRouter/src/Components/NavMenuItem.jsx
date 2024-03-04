/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";

export default function NavMenuItem(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  //used manual isActive boolean variable because of the wierd effect when using the isActive of <NavLink>. Now, only Github will change color
  //on /about/github not both <About /> and <Github />

  return (
    <li className="nav-elem">
      <NavLink
        to={props.to}
        className={`
          ${props.navItemClasses} ${
            (isActive)? "text-orange-700": "text-gray-700"
          }
        `}
      >
        {props.content}
      </NavLink>
    </li>
  );
}
