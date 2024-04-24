import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/authSlice";

export default function Layout() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        dispatch(userData ? login(userData) : logout());
      })
      .finally(()=>setLoader(false));
  }, []);

  return !loader ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null

}
