import React, { useEffect, useState } from "react";
import NewBooksCard from "./NewBooksCard";

const NewBooks = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://online-book-shop-server.vercel.app/newBooks")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center my-14 bg-sky-200 p-6 rounded-md shadow-md">
        <p className="text-2xl font-bold text-orange-600 ">New Books</p>
        <span className="text-sky-700">All this boos are new....</span>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {services.map((book) => (
          <NewBooksCard key={book._id} book={book}></NewBooksCard>
        ))}
      </div>
    </div>
  );
};

export default NewBooks;
