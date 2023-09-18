"use client";
import AuthButton from "@/components/AuthButton";
import BackButton from "@/components/BackButton";
import ErrorModal from "@/components/Error";
import SuccessMessage from "@/components/SuccessMessage";
import { passwordReset } from "@/utils/auth";
import { ChangeEvent, useState } from "react";

const ResetEmail = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      {/* <BackButton /> */}
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center mb-4">
            <h2 className="text-3xl text-gray-800 font-semibold">
              Reset password
            </h2>
          </div>
          <form
            className="mt-3 space-y-3"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              console.log(email);
              setError(null);
              setSuccess(false);
              try {
                await passwordReset(email, setError, setSuccess);
                setLoading(false);
              } catch (error) {
                setSuccess(false);
                setLoading(false);
              }
            }}
          >
            <div>
              <label className="font-medium">Email Address</label>
              <div className="relative mt-2">
                <span className="text-gray-400 active:text-gray-600 cursor-pointer">
                  <svg
                    className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  value={email}
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  required
                  placeholder="johndoe@mail.com"
                />
              </div>
            </div>
            {success && (
              <SuccessMessage message="Password reset link sent! Check your email for instructions." />
            )}
            {error && <ErrorModal error={error} />}
            <AuthButton loading={loading} buttonText="Send reset link" />
          </form>
        </div>
      </main>
    </>
  );
};

export default ResetEmail;
