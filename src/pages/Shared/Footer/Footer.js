import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer items-center flex justify-around flex-col  p-10 bg-neutral text-neutral-content">
      <div className="text-xl">
        <h3 className="text-amber-500 font-semibold">Book Shop</h3>
      </div>
      <div className="grid grid-flow-col gap-4">
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <p className="">Copyright © 2022 - All Book Shop</p>
      </div>
    </footer>
  );
};

export default Footer;
