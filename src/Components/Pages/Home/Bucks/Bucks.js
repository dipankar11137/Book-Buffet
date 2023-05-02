import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Bucks = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [bookingDay, setBookingDay] = useState("");
  const totalPrice = bookingDay * books?.bPrice;
  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const updateData = {
      ...data,
      bookInfo: books,
      totalPrice,
      bookingDay: bookingDay,
    };
    console.log(updateData);
    const url = `http://localhost:5000/bookingsBook`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Booking This Book");
        reset();
      });
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
        <h1 className="text-4xl pt-5 font-extrabold ml-20">Book Booking</h1>
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
            className=" w-96 bg-slate-300 rounded-lg shadow-2xl p-10 mt-5"
          >
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-bold text-center bg-white rounded-lg p-1 mb-2">
                {books?.name}
              </h1>

              <select
                onChange={(e) => setBookingDay(e.target.value)}
                className="select select-primary w-96 "
              >
                <option className="text-lg font-bold " disabled selected>
                  Select Your Bookings Days
                </option>
                <option className="text-lg text-blue-900 font-bold">1</option>
                <option className="text-lg text-blue-900 font-bold">2</option>
                <option className="text-lg text-blue-900 font-bold">3</option>
                <option className="text-lg text-blue-900 font-bold">4</option>
                <option className="text-lg text-blue-900 font-bold">5</option>
                <option className="text-lg text-blue-900 font-bold">6</option>
                <option className="text-lg text-blue-900 font-bold">7</option>
                <option className="text-lg text-blue-900 font-bold">8</option>
                <option className="text-lg text-blue-900 font-bold">9</option>
                <option className="text-lg text-blue-900 font-bold">10</option>
                <option className="text-lg text-blue-900 font-bold">11</option>
                <option className="text-lg text-blue-900 font-bold">12</option>
                <option className="text-lg text-blue-900 font-bold">13</option>
                <option className="text-lg text-blue-900 font-bold">14</option>
                <option className="text-lg text-blue-900 font-bold">15</option>
                <option className="text-lg text-blue-900 font-bold">16</option>
                <option className="text-lg text-blue-900 font-bold">17</option>
                <option className="text-lg text-blue-900 font-bold">18</option>
                <option className="text-lg text-blue-900 font-bold">19</option>
                <option className="text-lg text-blue-900 font-bold">20</option>
              </select>

              <label className="label">
                {errors.bookingQuantity?.type === "required" && (
                  <span className="label-text-alt  text-xl text-white rounded-xl bg-red-700 p-1 w-full ">
                    {errors?.bookingQuantity?.message}
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

              {/* NID Number */}

              <input
                type="number"
                placeholder="Your Nid Number"
                className="input input-bordered  bg-white w-full   hover:shadow-xl"
                {...register("nid", {
                  required: {
                    value: true,
                    message: "Nid is Required",
                  },
                })}
              />
              <label className="label">
                {errors.nid?.type === "required" && (
                  <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
                    {errors?.nid?.message}
                  </span>
                )}
              </label>
              {/* number */}

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
              {/* Total Price */}
              <h1 className="text-center bg-white mb-2 p-1 rounded-lg font-bold text-xl">
                Total Price
              </h1>

              <input
                type="number"
                value={totalPrice}
                className="input input-bordered mb-3  bg-white w-full   hover:shadow-xl text-xl font-bold text-center"
              />
              {/* SUbmit */}
              {bookingDay ? (
                <input
                  className="btn  w-full text-white mt-5"
                  type="submit"
                  value="Submit"
                />
              ) : (
                <input
                  disabled
                  className="btn  w-full text-white mt-5"
                  type="submit"
                  value="Submit"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bucks;
