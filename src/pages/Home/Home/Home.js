import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner";
import NewBooks from "../NewBooks/NewBooks";
import Services from "../Services/services/Services";
import About from "./About/About";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <NewBooks></NewBooks>
      <About></About>
    </div>
  );
};

export default Home;
