import React from "react";

const AddService = () => {
  const handlePlaceOrder = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const img = form.image.value;
    const description = form.description.value;
    const writer = form.writer.value;
    const ratings = +form.ratings.value;
    const reviews = form.reviews.value;
    const price = form.price.value;
    const discount = form.discount.value;

    const d = new Date();
    var time = d.getTime();

    const order = {
      name,
      img,
      description,
      writer,
      ratings,
      reviews,
      price,
      discount,
      time,
    };
    console.log(
      name,
      img,
      description,
      writer,
      ratings,
      reviews,
      price,
      discount,
      time
    );

    fetch("http://localhost:5000/allBooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          alert("Add review successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="w-10/12 mx-auto">
      <div className="my-14 border p-2">
        <h2 className="text-2xl py-6 text-yellow-500 font-semibold">
          Add Service information
        </h2>
        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Service name"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="image"
              type="text"
              placeholder="Service image"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="writer"
              type="text"
              placeholder="Writer name"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="ratings"
              type="text"
              placeholder="Service rating"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="reviews"
              type="text"
              placeholder="Service reviews"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="price"
              type="text"
              placeholder="Service price"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="discount"
              type="text"
              placeholder="Service discount"
              className="input input-ghost w-full  input-bordered"
              required
            />
          </div>
          <textarea
            name="description"
            className="textarea textarea-bordered h-24 w-full my-3"
            placeholder="Service description"
            required
          ></textarea>

          <input
            className="btn border-none text-black bg-yellow-500"
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
