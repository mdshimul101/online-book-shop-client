import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <h2>Home</h2>
      <Banner></Banner>
    </div>
  );
};

export default Home;
