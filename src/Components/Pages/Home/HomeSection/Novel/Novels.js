import React from "react";
import Novel from "./Novel";

const Novels = () => {
  return (
    <div className="mt-20 mx-20 shadow-xl p-3">
      <div className=" rounded-xl">
        <h1 className="text-4xl font-bold ">Novel Books</h1>
        <div className="py-4">
          <Novel />
        </div>
      </div>
    </div>
  );
};

export default Novels;
