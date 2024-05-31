import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/planets")
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
          <Card
            key={item._id}
            name={item.name}
            population={item.population}
            climate={item.climate}
            gravity={item.gravity}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
