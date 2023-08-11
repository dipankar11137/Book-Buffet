import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Buy = () => {
  const [users] = useAuthState(auth);
  console.log(users);
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then(res => res.json())
      .then(data => setBooks(data));
  }, [id]);

  const totalPrice = quantity * books?.price;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleOnChange = e => {
    setQuantity(e.target.value);
  };
  const onSubmit = data => {
    const updateData = {
      bookInfo: books,
      ...data,
      quantity,
      totalPrice,
      phone,
      date,
      email: users?.email,
      name: users?.displayName,
    };
    console.log(updateData);
    // const url = `http://localhost:5000/buyBooks`;
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(updateData),
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     toast.success('Successfully Buy This Book');
    //     reset();
    //   });
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://png.pngtree.com/background/20210714/original/pngtree-abstract-particles-background-with-geometric-connection-concept-vector-illustration-picture-image_1233144.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vp',
      }}
      className="flex justify-center h-screen bg-slate-700"
    >
      <div>
        <h1 className="text-5xl pt-5 font-extrabold ml-28">Buy Books</h1>
        <div className="flex justify-center gap-x-20">
          {/* Show Data */}
          <div className="mt-10 bg-white w-[600px] p-5 rounded-lg shadow-2xl">
            <div className="text-2xl ">
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Product Name</p>
                <span className="w-2/3">: {books?.name}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Name</p>
                <span className="w-2/3">: {users?.displayName}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Email</p>
                <span className="w-2/3">: {users?.email}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Phone</p>
                <span className="w-2/3">: {phone}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Date</p>
                <span className="w-2/3">: {date}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Quantity</p>
                <span className="w-2/3">: {quantity}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Price</p>
                <span className="w-2/3">: {books?.price}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Total Price</p>
                <span className="w-2/3">: {totalPrice}</span>
              </div>
              <hr />
            </div>
          </div>
          {/* Input data */}
          <div
            style={{
              backgroundImage: `url("https://youthincmag.com/wp-content/uploads/2019/05/Book-selling.jpg")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '500px',
              height: '100vp',
            }}
            className=" w-96 bg-slate-300 rounded-lg shadow-2xl p-10 mt-10"
          >
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-bold text-center bg-white rounded-lg p-1 mb-4">
                {books?.name}
              </h1>

              <input
                style={{ width: '420px' }}
                onChange={handleOnChange}
                type="number"
                placeholder="Write Your Quantity"
                className="input input-bordered  bg-white w-full   hover:shadow-xl"
              />
              <label className="label">
                {errors.quantity?.type === 'required' && (
                  <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
                    {errors?.quantity?.message}
                  </span>
                )}
              </label>

              <textarea
                type="text"
                placeholder="Your Address"
                className="input input-bordered text-xl pt-1 bg-white w-full  h-20 hover:shadow-xl"
                {...register('address', {
                  required: {
                    value: true,
                    message: 'Address is Required',
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === 'required' && (
                  <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
                    {errors?.address?.message}
                  </span>
                )}
              </label>

              {/* number */}

              <input
                onChange={e => setPhone(e.target.value)}
                type="number"
                placeholder="Phone Number"
                className="input input-bordered  bg-white w-full   hover:shadow-xl"
                // {...register('phone', {
                //   required: {
                //     value: true,
                //     message: 'Phone is Required',
                //   },
                // })}
              />
              <label className="label">
                {errors.phone?.type === 'required' && (
                  <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
                    {errors?.phone?.message}
                  </span>
                )}
              </label>
              {/* date */}

              <input
                onChange={e => setDate(e.target.value)}
                type="date"
                placeholder="Phone Number"
                className="input input-bordered  bg-white w-full   hover:shadow-xl"
                // {...register('date', {
                //   required: {
                //     value: true,
                //     message: 'Date is Required',
                //   },
                // })}
              />
              <label className="label">
                {errors.date?.type === 'required' && (
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

              {quantity && phone && date ? (
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

export default Buy;
