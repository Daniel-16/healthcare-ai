"use client";
import ShowPassword from "@/components/ShowPassword";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";
import { signInWithEmail, signInWithGoogle } from "../../utils/auth";
import { useState, ChangeEvent, FormEvent } from "react";

const Login = () => {
  const [loginData, setLogin] = useState({ email: "", password: "" });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginData;
    console.log("Email:", email);
    console.log("Password:", password);
    signInWithEmail(email, password);
  };
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <Link href="/">
              <h1 className="text-4xl font-bold text-gray-700">
                HealthCare AI
              </h1>
            </Link>
            <div className="space-y-2">
              <h3 className="text-gray-700 text-2xl font-bold sm:text-3xl">
                Log in to your account
              </h3>
              <p className="">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
            {/* Google svg button */}
            <AuthButton
              buttonText="Log in with Google"
              onClickFunc={signInWithGoogle}
            />
            <div className="relative">
              <span className="block w-full h-px bg-gray-300"></span>
              <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                Or continue with
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  onChange={handleInputChange}
                  name="email"
                  value={loginData.email}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  placeholder="johndoe@mail.com"
                />
              </div>
              <div>
                <label className="font-medium">Password</label>
                {/* <input
                  type="password"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  placeholder="Password"
                /> */}
                <div className="w-full">
                  <ShowPassword
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={loginData.password}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                Sign in
              </button>
            </form>
          </div>
          <div className="text-center">
            <Link href="/forgotPassword" className="hover:text-indigo-600">
              Forgot password?
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
