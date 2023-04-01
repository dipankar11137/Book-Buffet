import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-10">
      <div className="card card-side shadow-2xl bg-cyan-200 hover:cursor-pointer hover:bg-pink-200 hover:shadow-xl">
        <div className="card-body ">
          <h2 className="card-title">Programming er Choddogusti</h2>
          <p>BY JHANKAR MAHBUB</p>
          <p>Published: 2018</p>
        </div>
        <figure>
          <img
            className="h-40 w-32 rounded-xl pr-1"
            src="https://bdebooks.com/wp-content/uploads/2023/01/Programming-er-Choddogusti-By-Jhonkar-Mahbub.jpg"
            alt="Book"
          />
        </figure>
      </div>
      <div className="card card-side shadow-2xl bg-pink-200 hover:cursor-pointer hover:bg-cyan-200 hover:shadow-xl">
        <figure>
          <img
            className="h-40 w-32 rounded-xl pl-1"
            src="https://10ms-cloudfront.s3.ap-southeast-1.amazonaws.com/images/store/sqr-img/%28Compressed%29%20%20Shobar%20Jonno%20Vocabulary%20-%20467x721px%20Ratio%20Cover-1.jpg"
            alt="Book"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Vocabulary</h2>
          <p>Munzereen Shahid</p>
          <p>Published: 2022</p>
        </div>
      </div>
      <div className="card card-side shadow-2xl bg-cyan-100 hover:cursor-pointer hover:bg-pink-100 hover:shadow-xl">
        <div className="card-body ">
          <h2 className="card-title">Nurani Quran Sharif</h2>
          <p>
            Bengali Translation And Transliteration, Mini Tafshir- Color (Large)
          </p>
        </div>
        <figure>
          <img
            className="h-40 w-56 rounded-2xl pr-1"
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91UOBCuPQWL.jpg"
            alt="Book"
          />
        </figure>
      </div>
      <div className="card card-side shadow-2xl bg-pink-100 hover:cursor-pointer hover:bg-cyan-100 hover:shadow-xl">
        <figure>
          <img
            className="h-40 w-40 rounded-xl pr-1"
            src="https://media.wiley.com/product_data/coverImage300/96/11198124/1119812496.jpg"
            alt="Book"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Cyber Security and Network Security</h2>
          <p>Sabyasachi Pramanik (Editor)</p>
          <p>Published: March 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
