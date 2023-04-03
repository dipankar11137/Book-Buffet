import React, { useEffect, useState } from "react";
import Novel from "./Novel";

const Novels = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mt-20 mx-20 shadow-xl p-3">
      <div className=" rounded-xl">
        <h1 className="text-4xl font-bold ">Novel Books</h1>
        <div className="py-4 grid grid-cols-5 gap-y-8">
          {products.map((product) => (
            <Novel key={product._id} product={product}></Novel>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Novels;
