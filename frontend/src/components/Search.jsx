import React from "react";
import { IoSearch } from "react-icons/io5";
import Button from "./Button";

const Search = () => {
  return (
    <form className="max-w-xl mx-auto p-2 sm:w-72">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none">
          <IoSearch className="w-5 h-5" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm rounded-lg bg-glass focus:ring-blue-500 focus:border-blue-500 bg-gray-900 bg-opacity-75"
          placeholder="i.e. johndoe"
          required
        />
        <Button
          type="submit"
          text="Search"
          classes="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-900 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300"
        ></Button>
      </div>
    </form>
  );
};

export default Search;
