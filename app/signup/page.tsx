"use client";
import Link from "next/link";
import ShowPassword from "@/components/ShowPassword";
import { ChangeEvent, FormEvent, useState } from "react";
import { createUserWithEmail } from "@/utils/auth";
import ErrorModal from "@/components/Error";
import AuthButton from "@/components/AuthButton";

const Signup = () => {
  const [signUpData, setSignUp] = useState({ email: "", password: "" });
  const [users, setUsers] = useState({
    fullname: "",
    accountType: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Handle Input Change for create user with email function
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUp({
      ...signUpData,
      [name]: value,
    });
  };

  //Handle Input Change for creating user in database
  const handleSelectedInput = (e: any) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = signUpData;
    const { fullname, accountType } = users;
    console.log(users, email);
    setError(null);
    try {
      await createUserWithEmail(
        email,
        password,
        fullname,
        accountType,
        setError
      );
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <main className="w-full flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600 mt-10 md:mt-5">
          <div className="text-center">
            <Link
              href={"/"}
              className="text-gray-700 text-4xl font-bold hover:underline"
            >
              HealthCare AI
            </Link>
            <div className="mt-3 space-y-2">
              <h3 className="text-gray-700 text-2xl font-bold sm:text-3xl">
                Sign up
              </h3>
              <p className="">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="fullname"
                value={users.fullname}
                required
                onChange={handleSelectedInput}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={signUpData.email}
                onChange={handleInputChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                placeholder="johndoe@mail.com"
              />
            </div>
            <div>
              <label className="font-medium">Choose account type</label>
              <div className="mx-auto relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <select
                  onChange={handleSelectedInput}
                  defaultValue={users.accountType}
                  name="accountType"
                  className="w-full px-3 py-2 text-gray-500 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:border-indigo-700"
                >
                  <option value="Patient">Patient</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-medium">Password</label>
              {/* <input
                  type="password"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  placeholder="Must have at least 6 characters"
                /> */}
              <ShowPassword
                placeholder="Must have at least 6 characters"
                onChange={handleInputChange}
                value={signUpData.password}
              />
            </div>
            {error && <ErrorModal error={error} />}
            <AuthButton loading={loading} buttonText="Create account" />
          </form>
        </div>
      </main>
    </>
  );
};

export default Signup;
