import React from "react";
import "../../../../CSS/ImageStyle.css";

const FirstSection = () => {
  return (
    <div className="mt-16 bg-slate-100">
      <div className="grid grid-cols-5 gap-x-6 mx-20 py-6">
        <div className="flex">
          <img
            className="h-32 w-32 pic-style cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wikipedia_logo_Book_of_Records.svg/1200px-Wikipedia_logo_Book_of_Records.svg.png"
            alt=""
          />
          <h1 className=" flex items-center text-xl pl-5 font-extrabold"></h1>
        </div>
        <div className="flex">
          <img
            className="h-32 w-32 pic-style cursor-pointer"
            src="https://seeklogo.com/images/E/education-book-logo-5C742A5133-seeklogo.com.png"
            alt=""
          />
          <h1 className=" flex items-center text-xl pl-5 font-extrabold"></h1>
        </div>
        <div className="flex">
          <img
            className="h-32 w-32 rounded-full pic-style cursor-pointer"
            src="https://img.freepik.com/premium-vector/cute-cat-reading-book-cartoon-icon-illustration-animal-education-icon-concept-isolated-flat-cartoon-style_138676-1747.jpg"
            alt=""
          />
          <h1 className=" flex items-center text-xl pl-5 font-extrabold"></h1>
        </div>
        <div className="flex">
          <img
            className="h-32 w-32 pic-style cursor-pointer"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/57/education-5396389_1280.png"
            alt=""
          />
          <h1 className=" flex items-center text-xl pl-5 font-extrabold"></h1>
        </div>

        <div className="flex">
          <img
            className="h-32 w-32 rounded-full pic-style cursor-pointer"
            src="https://previews.123rf.com/images/dualororua/dualororua1707/dualororua170700450/83226842-book-cartoon-on-pile-book.jpg"
            alt=""
          />
          <h1 className=" flex items-center text-xl pl-5 font-extrabold"></h1>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
