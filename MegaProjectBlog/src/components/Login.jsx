import React, { useState } from "react";
import { Button, Input, Logo } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../features/authSlice";
import authService from "../appwrite/auth";

import { useForm } from "react-hook-form";

export default function Login() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  /*
  ->all the input values registered to 'register' will be updated/kept (state-handled) and used during handleSubmit event trigger.
  ->handleSubmit accepts a method of your own, to tell it how to use the form data
  ->All the validations are done in react-form
  ->Spread the register and give it a key (html-name attr), validators
  */
  const login = async (data) => {
    //login function will have different purpose than handleSubmit
    setError(""); //first clear all the errors
    try {
      const email = data.email;
      const password = data.password;
      const session = await authService.login({ email, password }); //it will return a session

      if (session) {
        //if user is logged in then get current user's details
        authService.getCurrentUser
          .then((userData) => {
            //dispatch the userData
            userData && dispatch(authLogin(userData));
            navigateTo("/");
          })
          .catch((err) => {
            console.log("Error in GetUser:-");
            console.log(err);
          });
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        {/*Form-Start*/}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid one",
                },
              })}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
