import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import StarshipsCard from "../components/StarshipCard";
import axios from "axios";

const Starships = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/starships")
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
          <StarshipsCard
            key={item._id}
            name={item.name}
            consumables={item.consumables}
            passengers={item.passengers}
          ></StarshipsCard>
        ))}
      </div>
    </div>
  );
};

export default Starships;
