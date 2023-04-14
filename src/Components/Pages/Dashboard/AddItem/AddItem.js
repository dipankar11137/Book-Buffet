import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddItem = () => {
  // const [user] = useAuthState(auth);
  const [books, setBooks] = useState("");
  const [status, setStatus] = useState("New");
  console.log(status);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    //   const changeUrl = { ...data, service: service };
    //   console.log(changeUrl);
    //   const url = `http://localhost:5000/allServices`;
    //   fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(changeUrl),
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       toast.success("Successfully Add This Products");
    //       reset();
    //     });
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/108224668/photo/open-book-by-lamp-light.jpg?b=1&s=170667a&w=0&k=20&c=LswLXyD7KMPwO2gzKnnC2la52R4RIsHOJIJT0lWaP24=")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        // backgroundRepeat: "no-repeat",
        // width: "3000px",
      }}
      className=""
    >
      {/* <h2 className="mt-5 ml-10 font-bold text-4xl text-center text-orange-500 uppercase">
        Please Add A Technician
      </h2> */}
      <div className="flex justify-center  p-5 rounded-2xl w-11/12  ml-5 ">
        <form className=" " onSubmit={handleSubmit(onSubmit)}>
          <select
            onChange={(e) => setBooks(e.target.value)}
            className="select select-primary w-96 max-w-xs"
          >
            <option className="text-lg font-bold" disabled selected>
              Select Your Books
            </option>
            <option className="text-lg text-blue-900 font-bold">
              Novel Books
            </option>
            <option className="text-lg text-blue-900 font-bold">
              ISLAMIC BOOKS
            </option>
            <option className="text-lg text-blue-900 font-bold">
              Our Books
            </option>
            <option className="text-lg text-blue-900 font-bold">
              Recommended Books
            </option>
          </select>

          {/* name */}
          <label className="label">
            <span className="label-text text-white text-xl font-semibold">
              Book Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Book Name"
            className="input input-bordered bg-white lg:w-96 sm:w-full max-w-xs hover:shadow-xl shadow-inner"
            {...register("name", {
              required: {
                value: true,
                message: "Book Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors?.name?.message}
              </span>
            )}
          </label>
          {/* status */}
          <label className="label">
            <span className="label-text text-white text-xl font-semibold">
              Status
            </span>
          </label>
          <select
            onChange={(e) => setStatus(e.target.value)}
            className="select select-primary w-96 max-w-xs"
          >
            <option className="text-lg font-bold" disabled selected>
              New
            </option>
            <option className="text-lg text-blue-900 font-bold">New</option>
            <option className="text-lg text-blue-900 font-bold">Old</option>
          </select>
          {/* Image */}
          <label className="label  text-xl font-semibold">
            <span className="label-text text-white text-xl">Images</span>
          </label>
          <input
            type="text"
            placeholder="Images URL"
            className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
            {...register("img", {
              required: {
                value: true,
                message: "Images is Required",
              },
            })}
          />
          <label className="label">
            {errors.img?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors?.img?.message}
              </span>
            )}
          </label>
          {/* Img publication */}
          {status === "Old" ? (
            <>
              <label className="label">
                <span className="label-text text-white text-xl font-semibold">
                  Book Publication Images
                </span>
              </label>
              <input
                type="text"
                placeholder="Images URL"
                className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
                {...register("imgP", {
                  required: {
                    value: true,
                    message: "Images is Required",
                  },
                })}
              />

              <label className="label">
                {errors.imgP?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.imgP?.message}
                  </span>
                )}
              </label>
            </>
          ) : (
            <></>
          )}
          {/* Location */}
          <label className="label">
            <span className="label-text text-white text-xl font-semibold">
              Location
            </span>
          </label>
          <input
            type="text"
            placeholder="Services Location"
            className="input input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner"
            {...register("location", {
              required: {
                value: true,
                message: "Location is Required",
              },
            })}
          />
          <label className="label">
            {errors.location?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors?.location?.message}
              </span>
            )}
          </label>
          {/* Description */}
          <label className="label">
            <span className="label-text text-white text-xl font-semibold">
              Description
            </span>
          </label>
          <textarea
            type="text"
            placeholder="Description"
            className="input input-bordered bg-white w-full max-w-xs h-20 pt-1 hover:shadow-xl shadow-inner"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors?.description?.message}
              </span>
            )}
          </label>
          {/* Price */}
          <label className="label">
            <span className="label-text text-white text-xl font-semibold">
              Salary
            </span>
          </label>
          <input
            type="number"
            placeholder="Salary"
            className="input input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner"
            {...register("price", {
              required: {
                value: true,
                message: "Salary is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors?.price?.message}
              </span>
            )}
          </label>
          {books ? (
            <input
              className="btn button mt-5 w-full disable text-white"
              type="submit"
              value="ADD"
            />
          ) : (
            <input
              className="btn button mt-5 w-full text-white"
              disabled
              type="submit"
              value="ADD"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default AddItem;
