import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BookBook from './BookBook';

const BookBooks = () => {
  const [products, setProducts] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Run effect once on mount

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    // timeZoneName: 'short',
  };
  const formattedDateTime = currentDateTime.toLocaleString(undefined, options);

  useEffect(() => {
    fetch('http://localhost:5000/bookingsBook')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);

  const handleDelivered = id => {
    const url = `http://localhost:5000/bookingsBook/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        const remaining = products.filter(product => product._id !== id);
        setProducts(remaining);
        toast.success('Delivered Successfully ');
      });
  };

  const handleDelete = (id, product) => {
    const changeData = { ...product, time: formattedDateTime, from: 'Borrow' };
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/delivered`;
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(changeData),
      })
        .then(res => res.json())
        .then(result => {
          handleDelivered(id);
        });
    }
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
              <th>Booking Day</th>
              <th>Price/day</th>
              <th>Total Price</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Nid</th>
              <th>Date</th>
              <th>delivered</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <BookBook
                key={product._id}
                product={product}
                index={index + 1}
                handleDelete={handleDelete}
              ></BookBook>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookBooks;
