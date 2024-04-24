import React from "react";
import authService from "../appwrite/auth";
import { Button, Input, Logo } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";

import { useForm } from "react-hook-form";

export default function SignUp() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const [register, handleSubmit] = useForm();
  const createAccount = async (data) => {
    setError("");
    try {
      const user = await authService.createAccount(data); //if everything is correct then user will be logged-in after account creation
      if (user) {
        authService
          .getCurrentUser()
          .then((userData) => {
            userData && dispatch(login(userData));
            navigateTo("/");
          })
          .catch((error) => {
            console.log("Error in GetUser (createAccount):-");
            console.log(error);
          });
      }
    } catch (error) {
      setError(error.message);
      console.log("Error in createAccount:-");
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        {/*Form-Start*/}

        <form onSubmit={handleSubmit(createAccount)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />
            <Input
              type="email"
              label="Email: "
              placeholder="Enter your email: "
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
              label="Password: "
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
