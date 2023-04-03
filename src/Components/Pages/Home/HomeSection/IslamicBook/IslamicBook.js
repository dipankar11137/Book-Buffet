import React from "react";

const IslamicBook = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {" "}
      <div
        style={{ height: "450px", width: "296px" }}
        className=" bg-slate-100 rounded-xl shadow-2xl"
      >
        <div className="indicator">
          <span className="indicator-item badge badge-danger">new</span>
          <img
            className="h-72"
            src="https://thumbs.dreamstime.com/b/holy-islamic-books-15877301.jpg"
            alt=""
          />
        </div>
        <div className="p-3 mt-5">
          <h1>Islamic Book</h1>
          <p>Price</p>
          <p>Publish Date</p>
        </div>
      </div>
      <div
        style={{ height: "450px", width: "296px" }}
        className=" bg-slate-100 rounded-xl shadow-2xl"
      >
        <div className="indicator">
          <span className="indicator-item badge badge-danger">old</span>
          <img
            className="h-72"
            src="https://thumbs.dreamstime.com/b/holy-islamic-books-15877301.jpg"
            alt=""
          />
        </div>
        <div className="p-3 mt-5">
          <h1>Islamic Book</h1>
          <p>Price</p>
          <p>Publish Date</p>
        </div>
      </div>
      <div
        style={{ height: "450px", width: "296px" }}
        className=" bg-slate-100 rounded-xl shadow-2xl"
      >
        <div className="indicator">
          <span className="indicator-item badge badge-danger">new</span>
          <img
            className="h-72"
            src="https://thumbs.dreamstime.com/b/holy-islamic-books-15877301.jpg"
            alt=""
          />
        </div>
        <div className="p-3 mt-5">
          <h1>Islamic Book</h1>
          <p>Price</p>
          <p>Publish Date</p>
        </div>
      </div>
    </div>
  );
};

export default IslamicBook;
