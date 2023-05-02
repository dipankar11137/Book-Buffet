import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import BuyBook from "./BuyBook";

const BuyBooks = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/buyBooks")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  console.log(products);
  const handleDelete = (id) => {
    //   const proceed = window.confirm("Are You Sure ?");
    //   if (proceed) {
    //     const url = `http://localhost:5000/bookingsBook/${id}`;
    //     fetch(url, {
    //       method: "DELETE",
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         const remaining = products.filter((product) => product._id !== id);
    //         setProducts(remaining);
    //         toast.success("Delete Successfully ");
    //       });
    //   }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Books Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <BuyBook
                key={product._id}
                product={product}
                index={index + 1}
                handleDelete={handleDelete}
              ></BuyBook>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyBooks;
