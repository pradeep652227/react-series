import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./Components/Layout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Github, { GithubLoader } from "./Components/Github.jsx";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="about/github" element={<Github />} loader={GithubLoader} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
