import React from "react";

const BookBook = ({ product, index, handleDelete }) => {
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
      <td>{product?.bookingDay}</td>
      <td>{product?.bookInfo?.bPrice}</td>
      <td>{product?.totalPrice}</td>
      <td>{product?.address}</td>
      <td>{product?.phone}</td>
      <td>{product?.nid}</td>
      <td>{product?.date}</td>
      <td>
        {" "}
        <button
          onClick={() => handleDelete(product?._id)}
          className="btn-sm rounded-lg bg-red-800 text-white uppercase"
        >
          delivered
        </button>
      </td>
    </tr>
  );
};

export default BookBook;
