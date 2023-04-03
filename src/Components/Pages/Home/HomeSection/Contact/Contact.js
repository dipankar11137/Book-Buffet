import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../../../../CSS/BackgroundStyle.css";

const Contact = () => {
  return (
    <div className="bg-slate-100 mt-40 shadow-lg">
      <div className=" mx-20 grid grid-cols-3 ">
        <div className="p-4 col-span-2">
          <h1 className="py-4 text-4xl font-bold">
            Can’t find your desired service? Let us know 24/7 in 16516.
          </h1>
          <div className="flex">
            <button className="buttonStyle py-4 px-8 hover:bg-pink-600 hover:text-white text-3xl rounded-xl border-4 border-pink-600 ml-72 mt-5">
              Request To Contact
            </button>
            <button className="flex py-4 px-8 hover:bg-pink-600 hover:text-white text-3xl rounded-xl border-4 border-pink-600 ml-14 mt-5">
              <FaPhoneAlt className="mt-1" />
              <span className="ml-3">16216</span>
            </button>
          </div>
        </div>
        <div className="">
          <img
            style={{ marginTop: "-120px" }}
            className="h-96"
            src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/jpg/service-request.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
