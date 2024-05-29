import React from "react";
import Button from "./Button";

const Card = ({ name, population, climate, gravity }) => {
  return (
    <div class="flex flex-col md:w-1/4 w-full p-6 border rounded-lg shadow bg-gray-900 border-gray-700 bg-opacity-75 m-2">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
        Population: {population}
      </p>
      <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
        Climate: {climate}
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Gravity: {gravity}
      </p>
      <Button
        text="Read More"
        classes="mt-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-900 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300"
      ></Button>
    </div>
  );
};

export default Card;
