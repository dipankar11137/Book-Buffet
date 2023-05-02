import React from "react";
import "../../../../CSS/NovelStyle.css";

const Novel = ({ product, handleBuy, handleBook }) => {
  const { _id, name, img, price, status, date, writerName } = product;
  return (
    <div
      style={{ height: "500px", width: "296px" }}
      class="container bg-white shadow-inner"
    >
      <img className="image " src={img} alt="" />
      <div className="text-center text-xl mt-5 testStyle">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h2 className="font-semibold ">{writerName}</h2>
        <p>Price : {price}</p>
        <p>Condition : {status}</p>
        <p>{date}</p>
      </div>
      <div class="middle  ">
        {status === "Old" ? (
          <button
            onClick={() => handleBook(_id)}
            className="w-full bg-slate-100  p-3 rounded-lg  uppercase font-semibold   "
          >
            {" "}
            Book
          </button>
        ) : (
          <></>
        )}
        <button
          onClick={() => handleBuy(_id)}
          className="w-full bg-slate-200 p-3 rounded-lg  uppercase font-bold mt-4"
        >
          Buy Book
        </button>
      </div>
    </div>
  );
};

export default Novel;
