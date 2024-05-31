import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import PeopleCard from "../components/PeopleCard";
import axios from "axios";

const People = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("There was an error fetching data", err);
      });
  }, []);

  return (
    <div className="m-4">
      <Search />
      <div className="h-full flex md:items-stretch flex-wrap gap-4 flex-col items-center md:flex-row md:justify-center">
        {data.map((item) => (
          <PeopleCard
            key={item._id}
            name={item.name}
            gender={item.gender}
            birthYear={item.birthYear}
          ></PeopleCard>
        ))}
      </div>
    </div>
  );
};

export default People;
