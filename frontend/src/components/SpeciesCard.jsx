import React from "react";

const SpeciesCard = ({ name, classification, averageLifespan, language }) => {
  return (
    <div class="flex flex-col md:w-1/4 w-full p-6 border rounded-lg shadow bg-gray-900 border-gray-700 bg-opacity-75 m-2">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
        Classification: {classification}
      </p>
      <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
        Average Lifespan: {averageLifespan}
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Language: {language}
      </p>
    </div>
  );
};

export default SpeciesCard;
