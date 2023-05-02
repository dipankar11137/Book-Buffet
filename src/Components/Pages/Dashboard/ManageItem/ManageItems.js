import React, { useEffect, useState } from "react";
import ManageItem from "./ManageItem";
import { toast } from "react-toastify";

const ManageItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `http://localhost:5000/books/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          toast.success("Delete Successfully ");
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Books Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageItem
                key={product._id}
                product={product}
                index={index + 1}
                handleDelete={handleDelete}
              ></ManageItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
