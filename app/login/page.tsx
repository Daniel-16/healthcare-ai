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
              <h1 className="text-4xl font-bold text-gray-800">Healthcare</h1>
            </Link>
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
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
            {/* Twitter svg button */}
            {/* <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              {/* Facebook svg button *
              <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="#3b5998"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                </svg>
              </button> */}
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
