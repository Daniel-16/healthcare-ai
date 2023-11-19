"use client";
import ShowPassword from "@/components/ShowPassword";
import Link from "next/link";
import {
  signInWithEmail,
  // signInWithGoogle,
  signInWithGoogleRedirect,
} from "../../firebaseUtils/auth";
import { useState, ChangeEvent, FormEvent } from "react";
import ErrorModal from "@/components/Error";
import ProviderButton from "@/components/ProviderButton";
import AuthButton from "@/components/AuthButton";

const Login = () => {
  const [loginData, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = loginData;
    console.log("Email:", email);
    console.log("Password:", password);
    setError(null);
    try {
      await signInWithEmail(email, password, setError);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <Link
              href="/"
              className="text-2xl font-medium text-gray-600 inline-flex items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 58 80"
                id="healthcare"
                className="w-12 h-12"
                fill="#4338CA"
              >
                <path d="M3 59H9a1 1 0 0 0 1-1V56H22.888l12.788 2.9a4.778 4.778 0 0 0 3.988-.962l20.51-16.387a4.182 4.182 0 0 0 1.208-5.658 3.907 3.907 0 0 0-2.5-1.8 3.791 3.791 0 0 0-2.937.557L45.214 41.79A7 7 0 0 0 39 38H31.735A11.361 11.361 0 0 0 25 36c-4.534 0-8.187 2.127-8.881 5H10V40a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8H4V41H8V57H4V50.016H2V58A1 1 0 0 0 3 59zM17 43a1 1 0 0 0 1-1c0-2.168 3.206-4 7-4a9.253 9.253 0 0 1 5.75 1.769 1 1 0 0 0 .639.231H39a5.008 5.008 0 0 1 4.9 4H31.936a1 1 0 0 0 0 2H45a1 1 0 0 0 1-1 6.971 6.971 0 0 0-.118-1.251l11.171-7.438a1.8 1.8 0 0 1 1.4-.269 1.921 1.921 0 0 1 1.227.895 2.2 2.2 0 0 1-.628 2.959 1.013 1.013 0 0 0-.085.061L38.416 56.374a2.784 2.784 0 0 1-2.313.57L23.221 54.025A.973.973 0 0 0 23 54H10V43zM38.2 5A9.413 9.413 0 0 0 32 7.337a9.472 9.472 0 0 0-13.162.7 10.731 10.731 0 0 0 0 14.53L28 32.254A5.472 5.472 0 0 0 32 34h0a5.468 5.468 0 0 0 4-1.746l9.155-9.689A10.5 10.5 0 0 0 48 15.307a10.526 10.526 0 0 0-2.837-7.275A9.514 9.514 0 0 0 38.215 5zm5.507 16.191L34.556 30.88a3.546 3.546 0 0 1-5.1 0L20.3 21.192A8.26 8.26 0 0 1 18.819 19H20a1 1 0 0 0 .929-.628L22 15.692l1.071 2.68A1 1 0 0 0 24 19h2v1a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21h2a1 1 0 0 0 1-1V19h2a1 1 0 0 0 .832-.445L42 16.8l1.168 1.752A1 1 0 0 0 44 19h1.187A8.245 8.245 0 0 1 43.711 21.191zM34 17h2v2H34a1 1 0 0 0-1 1v2H31V20a1 1 0 0 0-1-1H28V17h2a1 1 0 0 0 1-1V14h2v2A1 1 0 0 0 34 17zm12-1.693A8.956 8.956 0 0 1 45.838 17h-1.3l-1.7-2.555a1.039 1.039 0 0 0-1.664 0L39.465 17H38V16a1 1 0 0 0-1-1H35V13a1 1 0 0 0-1-1H30a1 1 0 0 0-1 1v2H27a1 1 0 0 0-1 1v1H24.677l-1.748-4.372a1 1 0 0 0-1.858 0L19.323 17H18.167A8.679 8.679 0 0 1 20.3 9.407a7.481 7.481 0 0 1 10.98 0 1.03 1.03 0 0 0 1.453 0A7.5 7.5 0 0 1 38.206 7a7.593 7.593 0 0 1 5.5 2.407A8.535 8.535 0 0 1 46 15.307z"></path>
              </svg>
              <h1 className="text-indigo-700">HealthCareAI</h1>
            </Link>
            <div className="mt-3 space-y-2">
              <h3 className="text-gray-700 text-2xl font-bold sm:text-3xl">
                Log in
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
            <ProviderButton
              buttonText="Log in with Google"
              onClickFunc={signInWithGoogleRedirect}
            />
            <div className="relative">
              <span className="block w-full h-px bg-gray-300"></span>
              <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                Or continue with
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              {error && <ErrorModal error={error} />}
              <AuthButton loading={loading} buttonText="Sign in" />
            </form>
            <div className="text-center">
              <Link
                href="/password-reset-email"
                className="hover:text-indigo-600"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
