import React from "react";
import "../../../../CSS/NovelStyle.css";

const Novel = ({ product, handleBuy }) => {
  console.log(product);
  const { _id, name, img, price, status, date } = product;
  return (
    <div
      style={{ height: "500px", width: "296px" }}
      class="container bg-white shadow-inner"
    >
      {/* <img src="img_avatar.png" alt="Avatar" class="image" style="width:100%"> */}
      <img className="image " src={img} alt="" />
      <div className="text-center text-xl mt-5 testStyle">
        <h1 className="font-bold text-2xl">{name}</h1>
        {/* <h2 className="font-semibold ">Writer Name</h2> */}
        <p>Price : {price}</p>
        <p>Condition : {status}</p>
        <p>{date}</p>
      </div>
      <div class="middle  ">
        <button className="w-full bg-slate-100  p-3 rounded-lg  uppercase font-semibold   ">
          {" "}
          Book
        </button>
        <button
          onClick={() => handleBuy(_id)}
          className="w-full bg-slate-200 p-3 rounded-lg  uppercase font-bold mt-4"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Novel;
