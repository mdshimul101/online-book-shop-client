import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner";
import Services from "../Services/services/Services";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;