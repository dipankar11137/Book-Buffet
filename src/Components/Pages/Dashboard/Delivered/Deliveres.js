import React, { useEffect, useState } from 'react';
import Delivered from './Delivered';

const Deliveres = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/delivered')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name </th>
              <th>Books Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Phone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <Delivered
                key={product._id}
                product={product}
                index={index + 1}
              ></Delivered>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deliveres;
