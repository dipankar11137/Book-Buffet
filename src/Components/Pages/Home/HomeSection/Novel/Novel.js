import React from "react";
import "../../../../CSS/NovelStyle.css";

const Novel = () => {
  return (
    <div
      style={{ height: "500px", width: "296px" }}
      class="container bg-white shadow-inner"
    >
      {/* <img src="img_avatar.png" alt="Avatar" class="image" style="width:100%"> */}
      <img
        className="image "
        src="https://benthambooks.com/ebook-images/sample-files-images/9789377871499/9789377871499-1.jpg"
        alt=""
      />
      <div className="text-center text-xl mt-5 testStyle">
        <h1 className="font-bold text-2xl">Noble</h1>
        <h2 className="font-semibold ">Writer Name</h2>
        <p>Price</p>
        <p>Condition : New</p>
        <p>Publication Date</p>
      </div>
      <div class="middle  ">
        <button className="w-full bg-green-400 p-3 rounded-lg  uppercase font-semibold hover:bg-green-800 hover:text-white ">
          {" "}
          Book
        </button>
        <button className="w-full bg-sky-600 p-3 rounded-lg text-white uppercase font-bold hover:bg-sky-500 mt-4">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Novel;
