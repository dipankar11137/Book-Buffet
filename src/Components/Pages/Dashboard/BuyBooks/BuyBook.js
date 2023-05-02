import React from "react";

const BuyBook = ({ product, index, handleDelete }) => {
  return (
    <tr>
      <th>{index}</th>
      <th>
        <img
          className="h-10 w-10 rounded-full"
          src={product?.bookInfo?.img}
          alt=""
        />
      </th>
      <td>{product?.bookInfo?.name}</td>
      <td>{product?.bookInfo?.booksCategory}</td>
      <td>{product?.quantity}</td>
      <td>{product?.bookInfo?.price}</td>
      <td>{product?.totalPrice}</td>
      <td>{product?.address}</td>
      <td>{product?.phone}</td>
      <td>{product?.date}</td>
      <td>
        {" "}
        <button
          onClick={() => handleDelete(product?._id)}
          className="btn-sm rounded-lg bg-red-800 text-white uppercase"
        >
          Delivered
        </button>
      </td>
    </tr>
  );
};

export default BuyBook;
