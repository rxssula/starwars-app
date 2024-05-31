import React from "react";

const PeopleCard = ({ name, gender, birthYear }) => {
  return (
    <div className="flex flex-col md:w-1/4 w-full p-6 border rounded-lg shadow bg-gray-900 border-gray-700 bg-opacity-75 m-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
        Gender: {gender}
      </p>
      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
        Birth Year: {birthYear}
      </p>
    </div>
  );
};

export default PeopleCard;
