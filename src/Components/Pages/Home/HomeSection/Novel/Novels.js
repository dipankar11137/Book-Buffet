import React from "react";
import Novel from "./Novel";

const Novels = () => {
  return (
    <div className="mt-20 mx-20">
      <div className="bg-slate-200 rounded-xl">
        <h1>Novel Books</h1>
        <div className="p-4">
          <Novel />
        </div>
      </div>
    </div>
  );
};

export default Novels;
