import React, { useEffect, useState } from "react";
import C1 from "../../assets/img/C1.webp";
import Footer from "../../Components/Footer";
import { IoHome } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { rupiahCurrency } from "../../Utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getListItem } from "../../services/cartService";
import { createOrderService } from "../../services/orderService";
import order from "../../redux/feature/order";
import Swal from "sweetalert2";

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userId] = useState(localStorage.getItem("idAccess"));
  const [listItem, setListItem] = useState([]);
  const [totalPurchase, setTotalPurchase] = useState(0);

  const items = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.order);

  useEffect(() => {
    initApi();
  }, []);

  useEffect(() => {
    const { result } = items;

    if (result) {
      setListItem(result.data.items);
      setTotalPurchase(result.data.total);
    }

    if (orders.result?.message === "order succes") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${orders.result?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [items, orders]);

  const initApi = () => {
    dispatch(getListItem({ userId: userId }));
  };

  const handleRandNumber = () => {
    return "#".concat(
      (Math.random() + 1).toString(36).toUpperCase().substring(2)
    );
  };

  const handleGrandTotal = () => {
    const tax = (totalPurchase * 11) / 100;
    const grandTotal = totalPurchase + tax;
    return grandTotal;
  };

  const handlePayment = () => {
    dispatch(
      createOrderService({
        userId: userId,
      })
    );
  };

  const containerStyle = {
    backgroundImage: `url(${C1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div
        className="h-[392px] flex flex-col justify-center items-center text-black "
        style={containerStyle}
      >
        <h1 className="flex items-center text-[50px] text-center">CHECKOUT</h1>
      </div>
      <div className="flex mt-5 h-10">
        <ul className="flex items-center gap-1">
          <li className=" font-bold text-[24px] pr-1">
            <IoHome />
          </li>
          <li className=" font-semibold text-[24px]">Home</li>
          <li className=" font-semibold text-[24px]">
            <GrFormNext />
          </li>
          <li className=" font-thin text-[24px]">Checkout</li>
        </ul>
      </div>
      <div className="border rounded-md mt-5 p-4 shadow-md">
        <div className="">
          <ul className="font-semibold text-[24px] flex justify-between">
            <li>Order Detail</li>
            <li className="pr-6">{handleRandNumber()}</li>
          </ul>
        </div>
        <div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-md uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-md uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-md uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 ttext-md uppercase w-1/5 ">
              Total
            </h3>
          </div>
          {listItem.map((item, key) => {
            return (
              <div key={key} className="flex items-center -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-lg uppercase">
                      {item.workshop_name}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <span className="text-center w-1/5 font-semibold text-xl">
                    {item.quantity}
                  </span>
                </div>
                <span className="text-center w-1/5 font-semibold text-xl">
                  {rupiahCurrency(item.price)}
                </span>
                <span className="text-center w-1/5 font-semibold text-xl">
                  {rupiahCurrency(item.subTotal)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="border rounded-md mt-5 p-4 shadow-md">
        <h1 className="font-semibold text-[24px] text-center">
          Billing Address
        </h1>
        <div className="mt-8 grid place-items-center">
          <form className="w-5/6">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 f peer"
                  placeholder=" "
                  required
                />
                <label
                  for="first_name"
                  className="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required
                />
                <label
                  for="last_name"
                  className="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="email"
                className="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                id="address"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="address"
                className="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Street Address
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 f peer"
                  placeholder=" "
                  required
                />
                <label
                  for="state"
                  className="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  State/Province
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 f peer"
                  placeholder=" "
                  required
                />
                <label
                  for="city"
                  className="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  City
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 f peer"
                  placeholder=" "
                  required
                />
                <label
                  for="zip"
                  className="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Zip/Postal Code
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 f peer"
                  placeholder=" "
                  required
                />
                <label
                  for="phone"
                  className="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone
                </label>
              </div>
            </div>
          </form>
          <div className="flex items-center mt-2 ">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                required=""
              />
            </div>
            <div className="ml-3 text-lg">
              <label htmlFor="terms" className="font-light ">
                My billing and shipping address are the same
              </label>
            </div>
          </div>
        </div>
      </div> */}
      <div className="m-10">
        <div className="mt-10">
          <h1 className="text-2xl font-bold">Billing Summary</h1>
        </div>
        <div className="mt-8 text-xl flex items-start gap-44">
          <h3 className=" w-48">Subtotal</h3>
          <h3>{rupiahCurrency(totalPurchase)}</h3>
        </div>
        <div className="mt-2 text-xl flex items-start gap-44">
          <h3 className=" w-48">Tax (Ppn 11%)</h3>
          <h3 className="flex items-start">
            {rupiahCurrency((totalPurchase * 11) / 100)}
          </h3>
        </div>
      </div>
      <div className="border-b border-gray-300 mt-5"></div>
      <div className="m-10">
        <div className="mt-8 text-xl flex items-start gap-44">
          <h3 className="w-48 font-semibold">Grand Total</h3>
          <h3 className=" text-red-600 font-semibold">
            {rupiahCurrency(handleGrandTotal())}
          </h3>
        </div>
        <div className="mt-6">
          <label
            for="large-input"
            class="block mb-2 text-lg font-medium text-black pl-2"
          >
            Notes
          </label>
          <input
            type="text"
            id="large-input"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg  sm:text-md"
            placeholder="Types here..."
          />
        </div>
      </div>
      <div className="m-10">
        <label
          for="countries"
          className="block mb-2 text-lg font-medium text-gray-900 "
        >
          Pay With
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
        >
          <option selected>Choose payment</option>
          <option value="OVO">OVO</option>
          <option value="BRI">BRI</option>
          <option value="BNI">BNI</option>
          <option value="BCA">BCA</option>
        </select>
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-7 ">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
            required=""
          />
        </div>
        <div className="ml-3 text-lg">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            Please check to acknowledge our{" "}
            <Link className="font-medium text-red-500" to="#">
              Privacy & Terms Policy
            </Link>
          </label>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link to={""}>
          <button
            type="button"
            className="text-white bg-gradient-to-r bg-[#697B51] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500  shadow-lg font-medium rounded-lg text-xl px-20 py-2.5 text-center me-2 mb-2"
            onClick={() => handlePayment()}
          >
            Payment
          </button>
        </Link>
      </div>
      <Footer />
    </section>
  );
}
