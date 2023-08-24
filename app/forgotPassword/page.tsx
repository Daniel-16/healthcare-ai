"use client";
import ShowPassword from "@/components/ShowPassword";

const ForgotPassword = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center mb-4">
          <h2 className="text-3xl text-gray-800 font-semibold">
            Forgot password
          </h2>
        </div>
        <form className="mt-3 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="font-medium">New password</label>
            <ShowPassword placeholder="New Password" />
          </div>
          <div>
            <label className="font-medium">Confirm password</label>
            <input
              type="password"
              className="w-full py-2 px-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              required
              placeholder="Confirm password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Reset Password
          </button>
        </form>
      </div>
    </main>
  );
};

export default ForgotPassword;
