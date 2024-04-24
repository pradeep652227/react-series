/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ authentication = true, children }) {
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  const navigateTo = useNavigate();

  useEffect(() => {
    // if(authStatus === true)
    // navigateTo("/");
    // else if(authStatus === false)
    // navigateTo("/login");
   if (authentication && authentication !== authStatus)
      //user is not logged-in
      navigateTo("/login");
    else if (!authentication && authentication !== authStatus)
      //case where the desired authentication status specified by the authentication prop does not match the actual authentication status of the user, and it redirects the user accordingly.
      navigateTo("/");
    //here-> user is logged-in
    setLoader("false");
  }, [authStatus, navigateTo,authentication]);

  return loader ? <h1 className="text-3xl">Loading...</h1> : { children };
}
