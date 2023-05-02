import React from "react";

const RecommendedBook = ({ product, handleBuy }) => {
  const { _id, name, description, img } = product;
  return (
    <div className="card w-96 glass shadow-inner hover:shadow-2xl bg-lime-100 hover:bg-white">
      <figure>
        <img
          style={{ height: "400px" }}
          className="w-full rounded-lg"
          src={img}
          alt="mal!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleBuy(_id)}
            className="w-full  p-3 rounded-lg  uppercase font-bold"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedBook;
