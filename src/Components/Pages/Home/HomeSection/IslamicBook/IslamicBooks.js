import React, { useEffect, useState } from "react";
import IslamicBook from "./IslamicBook";
import { useNavigate } from "react-router-dom";

const IslamicBooks = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/books/ISLAMIC BOOKS")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  const handleBuy = (id) => {
    navigation(`/buy/${id}`);
  };
  const handleBook = (id) => {
    navigation(`/bucks/${id}`);
  };
  return (
    <div className="mx-20 mt-16 bg-slate-100 p-4 rounded-xl">
      <h1 className="text-4xl uppercase font-bold py-6">Islamic Books</h1>
      <div className="grid grid-cols-5 gap-x-4 gap-y-10">
        {products.map((product) => (
          <IslamicBook
            key={product._id}
            product={product}
            handleBuy={handleBuy}
            handleBook={handleBook}
          ></IslamicBook>
        ))}
      </div>
    </div>
  );
};

export default IslamicBooks;
