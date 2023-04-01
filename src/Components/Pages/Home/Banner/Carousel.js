import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../../../CSS/Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
  };
  return (
    <div className="">
      <div className="mx-6 p-1 rounded-2xl ">
        <Slider {...settings}>
          <div div className="relative ">
            <img
              className="object-fill sliderImg rounded-2xl h-96"
              src="https://images-cdn.reedsy.com/discovery/post/109/featured_image/medium_aa7b8fcc4ee3a86626aca3157bbd8d697c38429a.jpg"
              alt=""
            />
            {/* <div className="absolute1 flex flex-col  justify-start">
              <div>
                <p className="heroP text-lime-200 "></p>
              </div>
              <div>
                <h1 className="heroHead text-start text-white">Car Tools</h1>
              </div>
              <div>
                <p className="heroP text-white pb-4 ">
                  {" "}
                  This Car Product dolor amet consectetur <br />
                  adipisicing Nobis, excepturi.{" "}
                </p>
              </div>

              <div className=" flex justify-start">
                <Link
                  to="/showAllProducts"
                  className=" btn bg-orange-600 text-italic font-bold"
                >
                  Buy now
                </Link>
              </div>
            </div> */}
          </div>
          <div div className="relative  ">
            <img
              className="object-fill sliderImg rounded-2xl h-96"
              src="https://laduepublications.com/wp-content/uploads/2022/08/Best-Reviewed-Books.jpeg"
              alt=""
            />
            {/* <div className="absolute1 flex flex-col  justify-start mt-20">
              <div className="mt-36">
                <p className="heroP text-lime-500 "></p>
              </div>
              <div>
                <h1 className="heroHead text-start text-white">Camera Tools</h1>
              </div>
              <div>
                <p className="heroP text-white pb-4 ">
                  {" "}
                  Apple Product dolor amet consectetur <br />
                  adipisicing Nobis, excepturi.{" "}
                </p>
              </div>

              <div className=" flex justify-start">
                <Link
                  to="/showAllProducts"
                  className=" btn bg-orange-600 text-italic font-bold"
                >
                  Buy now
                </Link>
              </div>
            </div> */}
          </div>
          <div div className="relative ">
            <img
              className="object-fill sliderImg rounded-2xl h-96"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSx7xZCUqCoVHL6EVHc477XyKxKz-98SdZUA&usqp=CAU"
              alt=""
            />
            {/* <div className="absolute1 flex flex-col  justify-start">
              <div>
                <p className="heroP text-lime-500 "></p>
              </div>
              <div>
                <h1 className="heroHead text-start text-white">Laptop Tools</h1>
              </div>
              <div>
                <p className="heroP text-white pb-4 ">
                  {" "}
                  Laptop Product dolor amet consectetur <br />
                  adipisicing Nobis, excepturi.{" "}
                </p>
              </div>

              <div className=" flex justify-start">
                <Link
                  to="/showAllProducts"
                  className=" btn bg-orange-600 text-italic font-bold"
                >
                  Buy now
                </Link>
              </div>
            </div> */}
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
