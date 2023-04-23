import React from "react";

const Books = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [change, setChange] = useState(0);
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
              <h1 className="text-2xl font-bold text-center">
                {/* {appleProduct?.name} */}
              </h1>
              <label className="label">
                <span className="label-text font-bold text-lime-700 text-2xl">
                  {/* {bookServices?.name} */}
                </span>
              </label>
              {/* Quantity */}
              {/* <label className="label">
              <span className="label-text text-2xl font-semibold">
                Your Quantity
              </span>
            </label> */}
              <input
                style={{ width: "350px" }}
                onChange={(e) => setChange(e.target.quantity)}
                type="number"
                placeholder="Write Your Quantity"
                className="input input-bordered  bg-white w-full   hover:shadow-xl"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors?.quantity?.message}
                  </span>
                )}
              </label>
              {/* Price */}
              {/* <label className="label">
              <span className="label-text text-2xl font-semibold">
                Total Price
              </span>
            </label> */}
              <input
                type="number"
                placeholder="Total Price"
                className="input input-bordered  bg-white w-full   hover:shadow-xl"
                {...register("totalPrice", {
                  required: {
                    value: true,
                    message: "totalPrice is Required",
                  },
                })}
              />
              <label className="label">
                {errors.totalPrice?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors?.totalPrice?.message}
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
                  <span className="label-text-alt text-red-500 text-xl">
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
                  <span className="label-text-alt text-red-500 text-xl">
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
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors?.date?.message}
                  </span>
                )}
              </label>

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

export default Books;
