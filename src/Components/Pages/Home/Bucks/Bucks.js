import React, { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaArrowDown } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';
import auth from '../../../../firebase.init';
import Payment from '../Buy/Payment';

const Bucks = () => {
  const [users] = useAuthState(auth);
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [bookingDay, setBookingDay] = useState('');
 const [nid, setNid] = useState('');
 const [dateOfBirth, setDateOfBirth] = useState('');
 const [NB, setNB] = useState('');
 const [quantity, setQuantity] = useState(1);
 const [phone, setPhone] = useState('');
 const [date, setDate] = useState('');
 const [address, setAddress] = useState('');
 const [service, setService] = useState('Office');
 const [serviceCharge, setServiceCharge] = useState(0);
 const [serviceProvider, setServiceProvider] = useState('');
 const [courierService, setCourierService] = useState('');
 const [payment, setPayment] = useState('Cash On');
 const handleCourier = () => {
   setService('Courier');
   setServiceCharge(140);
 };

 const totalPrice = bookingDay * books?.bPrice + serviceCharge;
 useEffect(() => {
   fetch(`http://localhost:5000/book/${id}`)
     .then(res => res.json())
     .then(data => setBooks(data));
 }, [id]);

 const {
   register,
   formState: { errors },
   handleSubmit,
   reset,
 } = useForm();

 const onSubmit = data => {
   const updateData = {
     ...data,
     bookInfo: books,
     totalPrice,
     bookingDay: bookingDay,
     nid,
     dateOfBirth,
   };
   console.log(updateData);
   // const url = `http://localhost:5000/bookingsBook`;
   // fetch(url, {
   //   method: 'POST',
   //   headers: {
   //     'content-type': 'application/json',
   //   },
   //   body: JSON.stringify(updateData),
   // })
   //   .then(res => res.json())
   //   .then(result => {
   //     toast.success('Successfully Booking This Book');
   //     reset();
   //   });
 };
 const handleOnChange = e => {
   setQuantity(e.target.value);
 };

 const cardRef = React.useRef();

 const pdfFilename = users?.displayName
   ? `${users?.displayName}.pdf`
   : 'document.pdf';

 return (
   <div
     style={{
       backgroundImage: `url("https://png.pngtree.com/background/20210714/original/pngtree-abstract-particles-background-with-geometric-connection-concept-vector-illustration-picture-image_1233144.jpg")`,
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       width: '100%',
       height: '1150px',
     }}
     className="flex justify-center h-screen bg-slate-700"
   >
     <div>
       <h1 className="text-5xl pt-5 font-extrabold  text-center">
         Borrow Books
       </h1>
       <h1 className="text-center mt-3 text-xl text-red-600 font-semibold ">
         Note: Borrowing secondhand books, <br /> your profile picture must
         match your NID card picture and name
       </h1>

       <div className="flex justify-center gap-x-20">
         {/* Show Data */}
         <div>
           <div
             ref={cardRef}
             className="mt-10 bg-white w-[600px] h-[650px] p-5 rounded-lg shadow-2xl text-end  "
           >
             <h1 className="text-center text-4xl font-extrabold">
               Book Buffet
             </h1>
             <h1 className="text-center">Dhaka , Bangladesh</h1>

             <hr className="my-2" />
             <div className="text-2xl ">
               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Product Name :</p>
                 <span className="w-2/3"> {books?.name}</span>
               </div>
               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Name : </p>
                 <span className="w-2/3 "> {users?.displayName}</span>
               </div>
               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Email : </p>
                 <span className="w-2/3"> {users?.email}</span>
               </div>
               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Phone : </p>
                 <span className="w-2/3"> {phone}</span>
               </div>
               {nid && (
                 <div className="flex items-baseline justify-between mt-1">
                   <p className="font-bold w-1/3">Nid : </p>
                   <span className="w-2/3"> {nid}</span>
                 </div>
               )}
               {dateOfBirth && (
                 <div className="flex items-baseline justify-between mt-1">
                   <p className="font-semibold w-1/3">Birth Certificate : </p>
                   <span className="w-2/3"> {dateOfBirth}</span>
                 </div>
               )}

               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Date :</p>
                 <span className="w-2/3"> {date}</span>
               </div>
               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Booking Days :</p>
                 <span className="w-2/3"> {bookingDay}</span>
               </div>
               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Price :</p>
                 <span className="w-2/3"> {books?.price}</span>
               </div>
               <hr className="my-1 ml-5" />

               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Service :</p>
                 <span className="w-2/3"> {serviceProvider || service}</span>
               </div>
               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Service Charge :</p>
                 <span className="w-2/3"> {serviceCharge}</span>
               </div>
               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Payment :</p>
                 <span className="w-2/3"> {payment}</span>
               </div>
               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Address :</p>
                 <span className="w-2/3"> {address}</span>
               </div>
               <hr className="my-1 ml-5" />
               <div className="flex items-baseline justify-between mt-1">
                 <p className="font-bold w-1/3">Total Price :</p>
                 <span className="w-2/3"> {totalPrice}</span>
               </div>
             </div>
           </div>
           <div className="mt-5 flex justify-center">
             <ReactToPdf targetRef={cardRef} filename={pdfFilename}>
               {({ toPdf }) => (
                 <button
                   onClick={toPdf}
                   className="btn  shadow-2xl shadow-black text-white text-xl"
                 >
                   Download Pdf <FaArrowDown className="ml-3 animate-bounce" />
                 </button>
               )}
             </ReactToPdf>
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

             <select
               style={{ width: '420px' }}
               onChange={e => setBookingDay(e.target.value)}
               className="select select-primary mb-3"
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

             <textarea
               onChange={e => setAddress(e.target.value)}
               type="text"
               placeholder="Your Address"
               className="input input-bordered text-xl pt-1 bg-white w-full  h-20 hover:shadow-xl"
               // {...register('address', {
               //   required: {
               //     value: true,
               //     message: 'Address is Required',
               //   },
               // })}
             />
             <label className="label">
               {errors.address?.type === 'required' && (
                 <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
                   {errors?.address?.message}
                 </span>
               )}
             </label>

             {/* nid or death of birth */}
             <div className="flex bg-white rounded-lg mb-2">
               <div className="form-control">
                 <label className="label cursor-pointer">
                   <input
                     onClick={() => setNB('nid')}
                     type="radio"
                     name="radio-10"
                     className="radio checked:bg-red-500 mr-6"
                   />
                   <span className="label-text text-xl font-bold">
                     Nid Card Number
                   </span>
                 </label>
               </div>
               <div className="form-control ml-9">
                 <label className="label cursor-pointer">
                   <input
                     onClick={() => setNB('birth')}
                     type="radio"
                     name="radio-10"
                     className="radio checked:bg-blue-500 mr-6"
                   />
                   <span className="label-text text-xl font-bold">
                     Birth Certificate Number
                   </span>
                 </label>
               </div>
             </div>

             {NB === 'nid' && (
               <input
                 onChange={e => setNid(e.target.value)}
                 type="number"
                 placeholder="Nid Card Number"
                 className="input input-bordered  bg-white w-full   hover:shadow-xl mb-3"
               />
             )}
             {NB === 'birth' && (
               <input
                 onChange={e => setDateOfBirth(e.target.value)}
                 type="number"
                 placeholder="Date Of Birth"
                 className="input input-bordered  bg-white w-full   hover:shadow-xl mb-3"
               />
             )}

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

             <div className="my-2 bg-white p-3 rounded-lg text-xl">
               <h1 className="text-xl font-extrabold pb-2">Delivery</h1>
               <div className="flex">
                 <div className="form-control">
                   <label className="label cursor-pointer">
                     <input
                       onClick={() => setService('Cash On')}
                       type="radio"
                       name="radio-10"
                       className="radio checked:bg-red-500 mr-6"
                     />
                     <span className="label-text text-xl font-bold">
                       Cash On
                     </span>
                   </label>
                 </div>
                 <div className="form-control ml-9">
                   <label className="label cursor-pointer">
                     <input
                       onClick={handleCourier}
                       type="radio"
                       name="radio-10"
                       className="radio checked:bg-blue-500 mr-6"
                     />
                     <span className="label-text text-xl font-bold">
                       Courier
                     </span>
                   </label>
                 </div>
               </div>

               {service === 'Courier' && (
                 <>
                   <div className="form-control">
                     <label className="label cursor-pointer">
                       <span className="label-text text-xl font-bold">
                         {' '}
                         Sundarban
                       </span>
                       <input
                         type="radio"
                         name="radio-7"
                         className="radio checked:bg-blue-500"
                         onClick={() => setServiceProvider('Sundarban')}
                       />
                     </label>
                   </div>
                   <div className="form-control">
                     <label className="label cursor-pointer">
                       <span className="label-text text-xl font-bold">
                         S.R Travels
                       </span>
                       <input
                         type="radio"
                         name="radio-7"
                         className="radio checked:bg-blue-500"
                         onClick={() => setServiceProvider('S.R Travels')}
                       />
                     </label>
                   </div>
                 </>
               )}
               {serviceProvider && (
                 <div className="p-4 bg-lime-200 rounded-lg mt-5">
                   <div className="form-control">
                     <label className="label cursor-pointer">
                       <span className="label-text text-xl font-bold">
                         {' '}
                         Cash On
                       </span>
                       <input
                         type="radio"
                         name="radio-8"
                         className="radio checked:bg-red-500"
                         onClick={() => setPayment('Cash On')}
                       />
                     </label>
                   </div>
                   <div className="form-control">
                     <label className="label cursor-pointer">
                       <span className="label-text text-xl font-bold">
                         BKash
                       </span>
                       <input
                         type="radio"
                         name="radio-8"
                         className="radio checked:bg-blue-500"
                         onClick={() => setCourierService('BKash')}
                       />
                     </label>
                   </div>
                 </div>
               )}

               {/* BKash */}
               {courierService === 'BKash' && (
                 <>
                   {' '}
                   <div className="flex justify-end mt-4">
                     <label
                       htmlFor="my_modal_8"
                       className="btn text-white btn-secondary text-xl"
                     >
                       Pay Now
                     </label>
                   </div>
                   {/* Put this part before </body> tag */}
                   <input
                     type="checkbox"
                     id="my_modal_8"
                     className="modal-toggle"
                   />
                   {/* <Payment /> */}
                   <div className="modal">
                     <div className="modal-box w-[700px]">
                       <Payment
                         setPayment={setPayment}
                         setCourierService={setCourierService}
                         setService={setService}
                         totalPrice={totalPrice}
                       />
                       {/* <div className="modal-action">
                          <label htmlFor="my_modal_8" className="btn">
                            Close!
                          </label>
                        </div> */}
                     </div>
                   </div>
                 </>
               )}
             </div>

             {quantity && phone && date && NB ? (
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
   // <div
   //   style={{
   //     backgroundImage: `url("https://png.pngtree.com/background/20210714/original/pngtree-abstract-particles-background-with-geometric-connection-concept-vector-illustration-picture-image_1233144.jpg")`,
   //     backgroundPosition: "center",
   //     backgroundSize: "cover",
   //     backgroundRepeat: "no-repeat",
   //     width: "100%",
   //     height: "100vp",
   //   }}
   //   className="flex justify-center h-screen bg-slate-700"
   // >
   //   <div>
   //     <h1 className="text-center mt-3 text-xl text-red-600 font-semibold ">
   //       Note: Borrowing secondhand books,
   //       <br /> your profile picture must match your NID card picture and name
   //     </h1>
   //     <h1 className="text-4xl pt-5 font-extrabold ml-40">Borrow Book</h1>
   //     <div className="flex justify-center ">
   //       <div
   //         style={{
   //           backgroundImage: `url("https://youthincmag.com/wp-content/uploads/2019/05/Book-selling.jpg")`,
   //           backgroundPosition: "center",
   //           backgroundSize: "cover",
   //           backgroundRepeat: "no-repeat",
   //           width: "100%",
   //           height: "100vp",
   //         }}
   //         className=" w-96 bg-slate-300 rounded-lg shadow-2xl p-10 mt-5"
   //       >
   //         <form className="" onSubmit={handleSubmit(onSubmit)}>
   //           <h1 className="text-2xl font-bold text-center bg-white rounded-lg p-1 mb-2">
   //             {books?.name}
   //           </h1>

   //           <select
   //             style={{ width: "500px" }}
   //             onChange={(e) => setBookingDay(e.target.value)}
   //             className="select select-primary "
   //           >
   //             <option className="text-lg font-bold " disabled selected>
   //               Select Your Bookings Days
   //             </option>
   //             <option className="text-lg text-blue-900 font-bold">1</option>
   //             <option className="text-lg text-blue-900 font-bold">2</option>
   //             <option className="text-lg text-blue-900 font-bold">3</option>
   //             <option className="text-lg text-blue-900 font-bold">4</option>
   //             <option className="text-lg text-blue-900 font-bold">5</option>
   //             <option className="text-lg text-blue-900 font-bold">6</option>
   //             <option className="text-lg text-blue-900 font-bold">7</option>
   //             <option className="text-lg text-blue-900 font-bold">8</option>
   //             <option className="text-lg text-blue-900 font-bold">9</option>
   //             <option className="text-lg text-blue-900 font-bold">10</option>
   //             <option className="text-lg text-blue-900 font-bold">11</option>
   //             <option className="text-lg text-blue-900 font-bold">12</option>
   //             <option className="text-lg text-blue-900 font-bold">13</option>
   //             <option className="text-lg text-blue-900 font-bold">14</option>
   //             <option className="text-lg text-blue-900 font-bold">15</option>
   //             <option className="text-lg text-blue-900 font-bold">16</option>
   //             <option className="text-lg text-blue-900 font-bold">17</option>
   //             <option className="text-lg text-blue-900 font-bold">18</option>
   //             <option className="text-lg text-blue-900 font-bold">19</option>
   //             <option className="text-lg text-blue-900 font-bold">20</option>
   //           </select>

   //           <label className="label">
   //             {errors.bookingQuantity?.type === "required" && (
   //               <span className="label-text-alt  text-xl text-white rounded-xl bg-red-700 p-1 w-full ">
   //                 {errors?.bookingQuantity?.message}
   //               </span>
   //             )}
   //           </label>

   //           <textarea
   //             type="text"
   //             placeholder="Your Address"
   //             className="input input-bordered text-xl pt-1 bg-white w-full  h-20 hover:shadow-xl"
   //             {...register("address", {
   //               required: {
   //                 value: true,
   //                 message: "Address is Required",
   //               },
   //             })}
   //           />
   //           <label className="label">
   //             {errors.address?.type === "required" && (
   //               <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
   //                 {errors?.address?.message}
   //               </span>
   //             )}
   //           </label>

   //           {/* NID Number */}

   //           <input
   //             type="number"
   //             placeholder="Your Nid Number"
   //             className="input input-bordered  bg-white w-full   hover:shadow-xl"
   //             {...register("nid", {
   //               required: {
   //                 value: true,
   //                 message: "Nid is Required",
   //               },
   //             })}
   //           />
   //           <label className="label">
   //             {errors.nid?.type === "required" && (
   //               <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
   //                 {errors?.nid?.message}
   //               </span>
   //             )}
   //           </label>
   //           {/* number */}

   //           <input
   //             type="number"
   //             placeholder="Phone Number"
   //             className="input input-bordered  bg-white w-full   hover:shadow-xl"
   //             {...register("phone", {
   //               required: {
   //                 value: true,
   //                 message: "Phone is Required",
   //               },
   //             })}
   //           />
   //           <label className="label">
   //             {errors.phone?.type === "required" && (
   //               <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
   //                 {errors?.phone?.message}
   //               </span>
   //             )}
   //           </label>
   //           {/* date */}

   //           <input
   //             type="date"
   //             placeholder="Phone Number"
   //             className="input input-bordered  bg-white w-full   hover:shadow-xl"
   //             {...register("date", {
   //               required: {
   //                 value: true,
   //                 message: "Date is Required",
   //               },
   //             })}
   //           />
   //           <label className="label">
   //             {errors.date?.type === "required" && (
   //               <span className="label-text-alt text-xl text-white rounded-xl bg-red-700 p-1 w-full">
   //                 {errors?.date?.message}
   //               </span>
   //             )}
   //           </label>
   //           {/* Total Price */}
   //           <h1 className="text-center bg-white mb-2 p-1 rounded-lg font-bold text-xl">
   //             Total Price
   //           </h1>

   //           <input
   //             type="number"
   //             value={totalPrice}
   //             className="input input-bordered mb-3  bg-white w-full   hover:shadow-xl text-xl font-bold text-center"
   //           />
   //           {/* SUbmit */}
   //           {bookingDay ? (
   //             <input
   //               className="btn  w-full text-white mt-5"
   //               type="submit"
   //               value="Submit"
   //             />
   //           ) : (
   //             <input
   //               disabled
   //               className="btn  w-full text-white mt-5"
   //               type="submit"
   //               value="Submit"
   //             />
   //           )}
   //         </form>
   //       </div>
   //     </div>
   //   </div>
   // </div>
 );
};

export default Bucks;
