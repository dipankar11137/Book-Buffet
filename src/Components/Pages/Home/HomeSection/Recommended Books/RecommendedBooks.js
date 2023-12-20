import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import RecommendedBook from './RecommendedBook';

const RecommendedBooks = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/books/Recommended Books')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleBuy = id => {
    navigation(`/buy/${id}`);
  };
  const handleBook = id => {
    navigation(`/bucks/${id}`);
  };
  return (
    <div className="mt-20 mx-20 mb-10">
      <h1 className="pl-5 rounded-xl text-6xl py-6 bg-gradient-to-r from-purple-100 to-pink-100 text-red-600">
        Recommended Books
      </h1>
      <div className="mt-10 grid grid-cols-4 gap-y-6">
        {products.map(product => (
          <RecommendedBook
            key={product._id}
            product={product}
            handleBuy={handleBuy}
          ></RecommendedBook>
        ))}
      </div>
    </div>
  );
};

export default RecommendedBooks;
