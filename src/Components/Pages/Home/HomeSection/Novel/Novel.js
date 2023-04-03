import React from "react";
import "../../../../CSS/NovelStyle.css";

const Novel = () => {
  return (
    <div style={{ height: "450px", width: "296px" }} class="container bg-white">
      {/* <img src="img_avatar.png" alt="Avatar" class="image" style="width:100%"> */}
      <img
        className="image "
        src="https://benthambooks.com/ebook-images/sample-files-images/9789377871499/9789377871499-1.jpg"
        alt=""
      />
      <div>
        <h1>hello ki</h1>
      </div>
      <div class="middle">
        {/* <div class="text">John Doe</div> */}
        <button className="btn">Buy</button>
      </div>
    </div>
  );
};

export default Novel;
