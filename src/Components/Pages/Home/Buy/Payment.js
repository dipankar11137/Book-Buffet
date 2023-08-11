import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Payment = ({ setPayment, setCourierService, setService, totalPrice }) => {
  const { id } = useParams('');
  const [buyProduct, setBuyProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/buy/${id}`)
      .then(res => res.json())
      .then(data => setBuyProduct(data));
  }, [buyProduct, id]);
  const [numberButton, setNumberButton] = useState(true);
  const [password, setPassword] = useState(false);
  const [passwordButton, setPasswordButton] = useState(false);
  const [vCode, setVCode] = useState(false);

  const handleNumber = () => {
    setPassword(true);
    setPasswordButton(true);
    setNumberButton(false);
  };
  const handlePasswordButton = () => {
    setPasswordButton(false);
    setVCode(true);
  };
  const handleVCode = () => {
    setPayment('Paid');
    setService(false);
    setCourierService(false);
    toast.success('Payment Successfully');
  };
  const handleCancel = () => {
    toast.error('Payment Cancel');
  };
  return (
    <div className="flex justify-center ">
      <div>
        <div className="bg-pink-700 w-[500px] h-[650px] rounded-lg">
          <img
            className="pt-2"
            src="https://raw.githubusercontent.com/Shipu/bkash-example/master/bkash_payment_logo.png"
            alt=""
          />
          <div className="mx-[50px] w-[400] h-[150px] shadow-black shadow-md mt-5 text-white text-xl pt-8 pl-4">
            <h1>Merchant : BOOKBUFFET.COM</h1>
            <h1>Invoice No : Ac2354fr21A</h1>
            <h1>Amount : {totalPrice} BDT</h1>
          </div>
          <div className="text-center text-white mt-10 text-xl">
            <div>
              {' '}
              <h1>Enter Your bKash account number</h1>
              <input
                className="p-1 pl-2 mt-2 text-black w-[300px] rounded-lg"
                placeholder="e.g 01XXXXXXXXX"
                type="number"
              />
              {numberButton && (
                <div className="flex justify-between mx-[150px] mt-3">
                  {/* <button
                    onClick={handleNumber}
                    className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800 btn-xs"
                  >
                    Process
                  </button> */}

                  <div className="modal-action">
                    <label
                      onClick={handleNumber}
                      className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer"
                    >
                      Process
                    </label>
                  </div>
                  <div className="modal-action">
                    <label
                      onClick={handleCancel}
                      htmlFor="my_modal_8"
                      className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer"
                    >
                      Cancel
                    </label>
                  </div>

                  {/* <button
                    onClick={handleCancel}
                    className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800"
                  >
                    Cancel
                  </button> */}
                </div>
              )}
            </div>
            {/* password */}
            {password && (
              <div>
                <input
                  className="p-1 pl-2 mt-2 text-black w-[300px] rounded-lg"
                  placeholder="Enter Your Password"
                  type="password"
                />
                {passwordButton && (
                  <div className="flex justify-between mx-[150px] mt-3">
                    <div className="modal-action">
                      <label
                        onClick={handlePasswordButton}
                        className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer"
                      >
                        Process
                      </label>
                    </div>
                    <div className="modal-action">
                      <label
                        onClick={handleCancel}
                        htmlFor="my_modal_8"
                        className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer"
                      >
                        Cancel
                      </label>
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* v code */}
            {vCode && (
              <div>
                <div className="mt-5">
                  <h1>Enter Your Verification Code</h1>
                  <input
                    className="p-1 pl-2 mt-2 text-black w-[300px] rounded-lg"
                    placeholder="Enter 4 Digit Code"
                    type="number"
                  />
                </div>

                <div className="flex justify-between mx-[150px] mt-3 ">
                  <div className="modal-action">
                    {/* <button
                      onClick={handleVCode}
                      className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800 font-semibold"
                    >
                      Process
                    </button> */}
                    <label
                      onClick={handleVCode}
                      htmlFor="my_modal_8"
                      className="bg-lime-400 px-4 text-black font-bold py-2 rounded-lg hover:bg-lime-500 cursor-pointer"
                    >
                      Done
                    </label>
                  </div>
                  <div className="modal-action">
                    <label
                      onClick={handleCancel}
                      htmlFor="my_modal_8"
                      className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer"
                    >
                      Cancel
                    </label>
                  </div>
                  {/* <button
                    onClick={handleCancel}
                    className="bg-slate-700 px-3  rounded-lg hover:bg-slate-800 text-lg"
                  >
                    Cancel
                  </button> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
