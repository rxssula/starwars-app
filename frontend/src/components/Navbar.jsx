import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <aside
      className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
        overflow-y-auto border-r bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10
        hover:bg-gray-600/10 border-gray-800 text-white
    "
    >
      <nav className="h-full flex flex-col gap-3">
        <Link
          to="/"
          className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
        >
          <img className="h-8" src="/human.png" alt="People logo" />
        </Link>
        <Link
          to="/"
          className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
        >
          <img className="h-8" src="/species.png" alt="Species logo" />
        </Link>
        <Link
          to="/"
          className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
        >
          <img className="h-8" src="/starships.png" alt="Starships logo" />
        </Link>
      </nav>
    </aside>
  );
};

export default Navbar;
