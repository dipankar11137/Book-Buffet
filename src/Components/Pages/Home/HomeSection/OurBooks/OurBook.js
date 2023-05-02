import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const OurBook = () => {
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
    <div className=" pl-6 rounded-lg ">
      <Carousel className="rounded-lg pl-6 py-4" responsive={responsive}>
        <Link to="/">
          <div className="card w-56 bg-base-100 text-black mt-2 shadow-2xl  hover:shadow-lg">
            <figure>
              <img
                className="w-full pic-style"
                src="https://e7.pngegg.com/pngimages/291/893/png-clipart-book-cartoon-drawing-book-comic-book-rectangle.png"
                alt="ac"
                style={{ height: "100px", width: "100px" }}
              />
            </figure>
            <div className="pb-2 px-2">
              <h2 className="text-center text-xl font-semibold">Novels</h2>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="card w-56 bg-base-100 text-black  mt-2  shadow-2xl  hover:shadow-lg">
            <figure>
              <img
                className="w-full  pic-style"
                src="https://i.pinimg.com/736x/0f/65/4e/0f654e2844666d2436cf4ccecca2d550.jpg"
                alt="ac"
                style={{ height: "100px", width: "100px" }}
              />
            </figure>
            <div className="pb-2 px-2">
              <h2 className="text-center text-xl font-semibold">
                Islamic Books
              </h2>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="card w-56 bg-base-100 text-black mt-2 shadow-2xl  hover:shadow-lg">
            <figure>
              <img
                className="w-full pic-style"
                src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360"
                alt="ac"
                style={{ height: "100px", width: "100px" }}
              />
            </figure>
            <div className="pb-2 px-2">
              <h2 className="text-center text-xl font-semibold">
                Programming Books
              </h2>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="card w-56 bg-base-100 text-black mt-2 shadow-2xl  hover:shadow-lg">
            <figure>
              <img
                className="w-full  pic-style"
                src="https://driftingpages.files.wordpress.com/2014/10/bloody-book-and-cd.jpg"
                alt="ac"
                style={{ height: "100px", width: "100px" }}
              />
            </figure>
            <div className="pb-2 px-2">
              <h2 className="text-center text-xl font-semibold">Story Books</h2>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="card w-56 bg-base-100 text-black mt-2  shadow-2xl  hover:shadow-lg">
            <figure>
              <img
                className="w-full  pic-style"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiH7WkQKXYlu14hOTrNf5sJfqM3h1QrGiEJQ&usqp=CAU"
                alt="ac"
                style={{ height: "100px", width: "100px" }}
              />
            </figure>
            <div className="pb-2 px-2">
              <h2 className="text-center text-xl font-semibold">
                Poerty Books
              </h2>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="card w-56 bg-base-100 text-black mt-2  shadow-2xl  hover:shadow-lg">
            <figure>
              <img
                className="w-full  pic-style rounded-full"
                src="https://thumbs.dreamstime.com/b/boy-reading-horror-book-midnight-illustration-boy-reading-horror-story-book-ghosts-images-behind-him-boy-reading-horror-162489409.jpg"
                alt="ac"
                style={{ height: "100px", width: "100px" }}
              />
            </figure>
            <div className="pb-2 px-2">
              <h2 className="text-center text-xl font-semibold">
                Horror Books
              </h2>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="card w-56 bg-base-100 text-black mt-2  shadow-2xl  hover:shadow-lg">
            <figure>
              <img
                className="w-full  pic-style"
                src="https://i.pinimg.com/originals/f9/45/25/f94525ee8d4f56f0a7344cbde512ccd9.jpg"
                alt="ac"
                style={{ height: "100px", width: "100px" }}
              />
            </figure>
            <div className="pb-2 px-2">
              <h2 className="text-center text-xl font-semibold">Pet Books</h2>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="card w-56 bg-base-100 text-black mt-2 border-blue-900  shadow-2xl  hover:shadow-lg">
            <figure>
              <img
                className="w-full pic-style"
                src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/all-services.svg"
                alt="ac"
                style={{ height: "100px", width: "100px" }}
              />
            </figure>
            <div className="pb-2 px-2">
              <h2 className="text-center text-xl font-semibold">Books</h2>
            </div>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default OurBook;
