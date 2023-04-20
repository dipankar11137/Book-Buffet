import React from "react";

const IslamicBook = ({ product }) => {
  const { name, img, location, description, status } = product;
  return (
    <div
      style={{ height: "470px", width: "296px" }}
      className=" bg-slate-100 rounded-xl shadow-2xl hover:bg-pink-100 hover:shadow-inner"
    >
      <div className="indicator">
        <span className="indicator-item badge badge-danger">old</span>
        <img
          className="h-72"
          src="https://png.pngtree.com/png-vector/20210309/ourmid/pngtree-holy-quran-vactor-design-png-image_3025118.jpg"
          alt=""
        />
      </div>
      <div className="p-3 mt-5 ">
        <h1>Islamic Book</h1>
        <p>Price</p>
        <p>Publish Date</p>
      </div>
      <button className="w-full  p-3 rounded-lg  uppercase font-bold">
        Book Now
      </button>
    </div>
  );
};

export default IslamicBook;
