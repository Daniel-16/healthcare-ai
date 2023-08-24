"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [state, setState] = useState(false);
  return (
    <nav className="bg-white w-full border-b md:border-0 md:static shadow-sm md:shadow-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="#" className="text-2xl font-medium text-gray-600">
            Healthcare
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-gray-600 hover:text-indigo-600">
              <Link href="#">All Doctors</Link>
            </li>
            <li className="text-gray-600 hover:text-indigo-600">
              <Link href="#">Find Doctor</Link>
            </li>
            <li className="text-gray-600 hover:text-indigo-600">
              <Link href="#">About</Link>
            </li>
            <li className="text-gray-600 hover:text-indigo-600">
              <Link href="#">Contact us</Link>
            </li>
            <li className="md:hidden">
              <Link
                href="/login"
                className="text-gray-600 hover:text-indigo-700"
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <Link
            href="/login"
            className="py-3 px-8 font-medium text-white bg-indigo-700 hover:bg-indigo-700 rounded-md shadow"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
