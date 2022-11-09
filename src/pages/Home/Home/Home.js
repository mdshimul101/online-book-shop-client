import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner";
import NewBooks from "../NewBooks/NewBooks";
import Services from "../Services/services/Services";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <NewBooks></NewBooks>

      <div>
        <div className="text-left">
          <h1>Discover something new to read</h1>
          <h3>
            Book recommendations from real people, not robots. Uncover future
            bestsellers by voting for your favorites.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
