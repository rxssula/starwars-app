import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Search from "../components/Search";
import Card from "../components/Card";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Results = () => {
  const query = useQuery().get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/search?query=${query}`
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="m-4">
      <Search />
      <div className="h-full flex md:items-stretch flex-wrap gap-4 flex-col items-center md:flex-row md:justify-center">
        {results.map((item) => (
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

export default Results;
