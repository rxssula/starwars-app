import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="m-4">
      <Search />
      <div className="flex flex-col md:flex-row">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default HomePage;
