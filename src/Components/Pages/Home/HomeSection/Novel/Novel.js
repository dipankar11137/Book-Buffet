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
        <button className="w-full bg-slate-100  p-3 rounded-lg  uppercase font-semibold   ">
          {" "}
          Book
        </button>
        <button className="w-full bg-slate-200 p-3 rounded-lg  uppercase font-bold mt-4">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Novel;
