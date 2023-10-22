import React from "react";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-white text-gray-700 w-64 min-h-screen p-4 shadow-xl border-t-2">
        <nav>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center justify-between p-2 hover:bg-indigo-700 hover:text-white duration-500 ease-in-out hover:cursor-pointer hover:rounded-md active:bg-indigo-400">
                <div className="flex items-center">
                  <span>Sidebar Content</span>
                </div>
              </div>
              <ul className="ml-4 hidden">
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    Sidebar Content
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    Sidebar Content
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="flex items-center justify-between p-2 hover:text-white hover:cursor-pointer hover:rounded-md duration-500 ease-in-out hover:bg-indigo-700 active:bg-indigo-400">
                <div className="flex items-center">
                  <span>Sidebar Content</span>
                </div>
              </div>
              <ul className="ml-4 hidden">
                <li>
                  <a
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    Sidebar Content
                  </a>
                </li>
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    Sidebar Content
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    Sidebar Content
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="flex items-center justify-between p-2 hover:text-white hover:cursor-pointer hover:rounded-md duration-500 ease-in-out hover:bg-indigo-700 active:bg-indigo-400">
                <div className="flex items-center">
                  <span>Sidebar Content</span>
                </div>
              </div>
              <ul className="ml-4 hidden">
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    Sidebar Content
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    Sidebar Content
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="flex items-center justify-between p-2 hover:text-white hover:cursor-pointer hover:rounded-md duration-500 ease-in-out hover:bg-indigo-700 active:bg-indigo-400">
                <div className="flex items-center">
                  <span>Sidebar Content</span>
                </div>
              </div>
              <ul className="ml-4 hidden">
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    Sidebar Content
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-700 flex items-center"
                  >
                    Sidebar Content
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
