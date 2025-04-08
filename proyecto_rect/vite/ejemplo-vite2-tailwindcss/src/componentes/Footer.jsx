import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <Link
            to="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src="./images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
            Landwind
          </Link>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2021-2022 Landwind™. All Rights Reserved. Built with{" "}
            <Link
              to="https://flowbite.com"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </Link>{" "}
            and{" "}
            <Link
              to="https://tailwindcss.com"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </Link>
            . Distributed by{" "}
            <Link
              to="https://themewagon.com/"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              ThemeWagon
            </Link>
          </span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
