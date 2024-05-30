import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import SpeciesCard from "../components/SpeciesCard";
import axios from "axios";

const Species = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/species")
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
          <SpeciesCard
            name={item.name}
            classification={item.classification}
            averageLifespan={item.averageLifespan}
            language={item.language}
          ></SpeciesCard>
        ))}
      </div>
    </div>
  );
};

export default Species;
