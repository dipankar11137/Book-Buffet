import React, { useEffect, useState } from "react";
import IslamicBook from "./IslamicBook";

const IslamicBooks = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mx-20 mt-16 bg-slate-100 p-4 rounded-xl">
      <h1 className="text-4xl uppercase font-bold py-6">Islamic Books</h1>
      <div className="grid grid-cols-5 gap-x-4 gap-y-10">
        {products.map((product) => (
          <IslamicBook key={product._id} product={product}></IslamicBook>
        ))}
      </div>
    </div>
  );
};

export default IslamicBooks;
