"use client";
import ShowPassword from "@/components/ShowPassword";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";
import { signInWithEmail, signInWithGoogle } from "../../utils/auth";
import { useState, ChangeEvent, FormEvent } from "react";
import ErrorModal from "@/components/Error";

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
            <Link href="/">
              <h1 className="text-4xl font-bold text-gray-700">
                HealthCare AI
              </h1>
            </Link>
            <div className="mt-3 space-y-2">
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
              <button
                type="submit"
                disabled={loading && true}
                className={
                  loading
                    ? "w-full px-4 py-2 text-white font-medium bg-indigo-500 rounded-lg duration-150 cursor-not-allowed"
                    : "w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                }
              >
                {loading ? (
                  <>
                    <svg
                      aria-hidden="true"
                      className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-400 fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    Loading...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>
            <div className="text-center">
              <Link
                href="/passwordResetEmail"
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
