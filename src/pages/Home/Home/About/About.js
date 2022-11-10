import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto py-10">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="relative w-1/2">
              <img
                src="https://i.ibb.co/bgJqS7c/media-outlets-59948e1ebbf6aca8c2819696886cff51f45b035488ca08f6267483f4df4a7f4b.jpg"
                className="w-full  h-full rounded-lg shadow-2xl mr-96"
                alt=""
              />
            </div>
            <div className="w-1/2 ml-5">
              <p className="text-3xl text-yellow-600 font-bold">About Us</p>
              <h1 className="my-4 text-5xl font-bold">
                Discover something new to read
                <br />
              </h1>
              <p>
                Book recommendations from real people, not robots. Uncover
                future bestsellers by voting for your favorites.
              </p>
              <button className="btn border-none bg-yellow-500 mt-3">
                Get More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
