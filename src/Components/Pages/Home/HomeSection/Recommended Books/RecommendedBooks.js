import React from "react";
import RecommendedBook from "./RecommendedBook";

const RecommendedBooks = () => {
  return (
    <div className="mt-20 mx-20">
      <h1 className="text-6xl py-6 bg-gradient-to-r from-purple-100 to-pink-100 text-red-600">
        Recommended Books
      </h1>
      <div className="">
        <RecommendedBook />
      </div>
    </div>
  );
};

export default RecommendedBooks;
