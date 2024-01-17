import React from "react";
import { useNavigate } from 'react-router-dom';

const BookBook = ({ product, index, handleDelete }) => {
  const navigation = useNavigate();
  const handlePayment = id => {
    navigation(`/payment/${id}`);
  };
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
        <button
          onClick={() => handlePayment(product?._id)}
          className="py-2 rounded-lg"
        >
          Payment
        </button>
      </td>
      <td>
        {' '}
        <button
          onClick={() => handleDelete(product?._id, product)}
          className="btn-sm rounded-lg bg-red-800 text-white uppercase"
        >
          delivered
        </button>
      </td>
    </tr>
  );
};

export default BookBook;
