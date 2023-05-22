import React from "react";
import Theme from "./Theme";
import { IoLogoVercel } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-black border-b-2 dark:border-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <IoLogoVercel className="text-3xl" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Vercel
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <Theme />
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li
                className={
                  "bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded duration-150 transition"
                }
              >
                Home
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
