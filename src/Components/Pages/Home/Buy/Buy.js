import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Buy = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [id]);

  const totalPrice = quantity * books?.price;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  };
  const onSubmit = (data) => {
    console.log(data);
    // const updateData = {
    //   ...data,
    //   img: img,
    //   name: name,
    //   service: service,
    //   price: price,
    //   customerName: customerName,
    //   email: email,
    // };
    // // console.log(updateData);
    // const url = `http://localhost:5000/bookService`;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(updateData),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     toast.success("Successfully Book This Person");
    //     reset();
    //   });
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://png.pngtree.com/background/20210714/original/pngtree-abstract-particles-background-with-geometric-connection-concept-vector-illustration-picture-image_1233144.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vp",
      }}
      className="flex justify-center h-screen bg-slate-700"
    >
      <div>
        {/* <h1>change {change}</h1> */}
        <h1 className="text-4xl pt-5 font-extrabold ml-20">Buy Books</h1>
        <div className="flex justify-center ">
          <div
            style={{
              backgroundImage: `url("https://youthincmag.com/wp-content/uploads/2019/05/Book-selling.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100vp",
            }}
            className=" w-96 bg-slate-300 rounded-lg shadow-2xl p-10 mt-10"
          >
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-bold text-center">{books?.name}</h1>
              <label className="label">
                <span className="label-text font-bold text-lime-700 text-2xl">
                  {/* {bookServices?.name} */}
                </span>
              </label>
              {/* Quantity */}

              <input
                style={{ width: "400px" }}
                onChange={handleOnChange}
                type="number"
                placeholder="Write Your Quantity"
                className="input input-bordered  bg-white w-full   hover:shadow-xl"
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
                    {errors?.quantity?.message}
                  </span>
                )}
              </label>

              <textarea
                type="text"
                placeholder="Your Address"
                className="input input-bordered text-xl pt-1 bg-white w-full  h-20 hover:shadow-xl"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is Required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
                    {errors?.address?.message}
                  </span>
                )}
              </label>

              {/* number */}
              {/* <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Phone Number
                </span>
              </label> */}
              <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered  bg-white w-full   hover:shadow-xl"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone is Required",
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
                    {errors?.phone?.message}
                  </span>
                )}
              </label>
              {/* date */}
              {/* <label className="label">
                <span className="label-text text-2xl font-semibold">Date</span>
              </label> */}
              <input
                type="date"
                placeholder="Phone Number"
                className="input input-bordered  bg-white w-full   hover:shadow-xl"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Date is Required",
                  },
                })}
              />
              <label className="label">
                {errors.date?.type === "required" && (
                  <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
                    {errors?.date?.message}
                  </span>
                )}
              </label>
              {/* Price */}

              <h1 className="text-center bg-white rounded-lg mb-2 p-1 font-bold text-2xl">
                Total Price
              </h1>

              <input
                type="number"
                value={totalPrice}
                className="input input-bordered text-center  bg-white w-full text-xl font-extrabold text-blue-700  hover:shadow-xl"
              />
              <input
                className="btn  w-full text-white mt-5"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
