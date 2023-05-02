import React from "react";
import OurBook from "./OurBook";
import Carousel from "react-multi-carousel";
import { useEffect } from "react";
import { useState } from "react";
// import "react-multi-carousel/lib/styles.css";

const OurBooks = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books/Novel Books")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };
  return (
    <div className="mt-20 mx-40 pb-10">
      <h1 className="ml-10 text-4xl font-bold py-5 ">Our Books</h1>
      <OurBook />

      <div className=" ">
        <div className=" pl-6 rounded-lg ">
          <Carousel className="rounded-lg pl-6" responsive={responsive}>
            {products.map((product) => (
              <OurBook></OurBook>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurBooks;
