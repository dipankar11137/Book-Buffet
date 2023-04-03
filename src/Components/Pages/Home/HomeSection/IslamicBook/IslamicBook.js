import React from "react";

const IslamicBook = () => {
  return (
    <div
      style={{ height: "450px", width: "296px" }}
      className=" bg-slate-100 rounded-xl shadow-2xl hover:bg-pink-100 hover:shadow-inner"
    >
      <div className="indicator">
        <span className="indicator-item badge badge-danger">new</span>
        <img
          className="h-72"
          src="https://thumbs.dreamstime.com/b/holy-islamic-books-15877301.jpg"
          alt=""
        />
      </div>
      <div className="p-3 mt-5 ">
        <h1>Islamic Book</h1>
        <p>Price</p>
        <p>Publish Date</p>
      </div>
      <button className="w-full bg-sky-600 p-3 rounded-lg text-white uppercase font-bold hover:bg-sky-500">
        Book
      </button>
    </div>
  );
};

export default IslamicBook;
