import React from "react";

const IslamicBook = ({ product, handleBuy, handleBook }) => {
  const { _id, name, img, price, description, date, status } = product;
  return (
    <div
      style={{ height: '500px', width: '350px' }}
      className=" bg-slate-100 rounded-xl shadow-2xl hover:bg-pink-100 hover:shadow-inner"
    >
      <div className="indicator">
        {status === 'New' ? (
          <span className="indicator-item badge  bg-red-600 text-xl text-white">
            {status}
          </span>
        ) : (
          <span className="indicator-item badge bg-green-800 border-green-800 text-xl  text-white">
            {status}
          </span>
        )}

        <img
          style={{ width: '350px' }}
          className="h-72  rounded-lg"
          src={img}
          alt=""
        />
      </div>
      <div className="p-3 mt-3 ">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-xl font-semibold">Price : ৳{price}</p>
        <p>Production date: {date}</p>
        <p>{description}</p>
      </div>

      {status === 'Old' ? (
        <div className="flex justify-between">
          <button
            onClick={() => handleBook(_id)}
            className=" w-2/4 mr-1 p-3 rounded-lg  uppercase font-bold"
          >
            Borrow
          </button>
          <button
            onClick={() => handleBuy(_id)}
            className="w-2/4  p-3 rounded-lg  uppercase font-bold"
          >
            Buy
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleBuy(_id)}
          className="w-full  p-3 rounded-lg  uppercase font-bold"
        >
          Buy
        </button>
      )}
    </div>
  );
};

export default IslamicBook;
