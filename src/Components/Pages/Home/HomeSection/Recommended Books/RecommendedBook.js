import React from "react";

const RecommendedBook = () => {
  return (
    // <div className="card w-96 bg-base-100 shadow-xl image-full">
    //   <figure>
    //     <img
    //       src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/jpg/service-request.png"
    //       alt="Shoes"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">Shoes!</h2>
    //     <p>If a dog chews shoes whose shoes does he choose?</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
    <div className="card w-96 glass">
      <figure>
        <img
          className="w-full"
          src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/jpg/service-request.png"
          alt="mal!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedBook;
