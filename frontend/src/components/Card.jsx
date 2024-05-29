import React from "react";
import Button from "./Button";

const Card = () => {
  return (
    <div class="relative max-w-sm p-6 border rounded-lg shadow bg-gray-900 border-gray-700 bg-opacity-75 m-2">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <Button
        text="Read More"
        classes="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-900 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300"
      ></Button>
    </div>
  );
};

export default Card;
