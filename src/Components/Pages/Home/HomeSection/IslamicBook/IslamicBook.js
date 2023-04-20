import React from "react";

const IslamicBook = ({ product }) => {
  const { name, img, price, location, description, date, status } = product;
  return (
    <div
      style={{ height: "500px", width: "289px" }}
      className=" bg-slate-100 rounded-xl shadow-2xl hover:bg-pink-100 hover:shadow-inner"
    >
      <div className="indicator">
        <span className="indicator-item badge badge-danger">{status}</span>
        <img className="h-72 w-72" src={img} alt="" />
      </div>
      <div className="p-3 mt-5 ">
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{date}</p>
        <p>{description}</p>
      </div>

      <button className="w-full  p-3 rounded-lg  uppercase font-bold">
        Book Now
      </button>
    </div>
  );
};

export default IslamicBook;
