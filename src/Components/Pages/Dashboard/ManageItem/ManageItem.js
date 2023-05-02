import React from "react";

const ManageItem = ({ product, index, handleDelete }) => {
  const { _id, name, img, booksCategory, price, status, date } = product;
  return (
    <tr>
      <th>{index}</th>
      <th>
        <img className="h-10 w-10 rounded-full" src={img} alt="" />
      </th>
      <td>{name}</td>
      <td>{booksCategory}</td>
      <td>{price}</td>
      <td>{status}</td>
      <td>{date}</td>
      <td>
        {" "}
        <button
          onClick={() => handleDelete(_id)}
          className="btn-sm rounded-lg bg-red-800 text-white uppercase"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageItem;
