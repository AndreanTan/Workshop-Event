import React, { useEffect, useState } from "react";
import { BsClock } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import Footer from "../../Components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { insertItemService } from "../../services/cartService";

export default function DescriptionWorkshop() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [userId] = useState(localStorage.getItem("idAccess"));
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  console.log(id);

  const getWorkshop = async () => {
    try {
      console.log(id);
      const getData = await axios.get(
        `http://localhost:4000/api/getWorkshopById?id=${id}`
      );
      console.log(`http://localhost:4000/api/getWorkshopById?id=${id}`);
      console.log(getData);
      setData(getData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorkshop();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleAddToCart = () => {
    dispatch(
      insertItemService({
        quantity: quantity,
        user_id: userId,
        workshop_id: id,
      })
    );
  };

  const handleAddQty = (event) => {
    setQuantity(event.target.value);
  }

  return (
    <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1  place-items-center">
        <div className="col-span-2">
          <h1 className="text-left text-[57px] text-[#697B51] font-normal">
            {data.workshop_name}
          </h1>
          <div className="mt-8 flex flex-col items-left">
            <ul className="flex flex-row items-center gap-3">
              <li className=" text-yellow-300">
                <IoStar />
              </li>
              <li>4</li>
              <li>(20 Ratings)</li>
            </ul>
            <ul className="flex flex-row items-center gap-3">
              <li>
                <BsClock />
              </li>
              <li>Duration {data.workshop_duration} hours</li>
            </ul>
            <ul className="flex flex-row items-center gap-3">
              <li>
                <FiMessageSquare />
              </li>
              <li>English or Indonesian</li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-left text-[28px] text-black font-[600]">
              What you will learn
            </h2>
            <p className="mt-2">{data.description_1}</p>
          </div>
          <div className="mt-12">
            <h2 className="text-left text-[28px] text-black font-[600]">
              What will you get
            </h2>
            <ul className="ml-5 mt-2 list-disc">{data.description_1}</ul>
          </div>
        </div>
        <div className="w-[295px] pb-8 shadow-lg border rounded-md bg-[#D9D9D9] items-center">
          <div className="flex flex-col item">
            <h2 className="mt-10 text-[28px] text-black font-[600] text-center">
              Book Now
            </h2>
            <form className="mx-5 mt-4">
              <label
                htmlfor="number-input"
                className="block mb-2 text-[18px] font-medium text-black"
              >
                Number of guests :
              </label>
              <input
                type="number"
                min={0}
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
                placeholder="0"
                required
                onChange={(event) => handleAddQty(event)}
              />
            </form>
            <div className="mt-10 flex justify-center">
              <Link to={"/cart"}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r bg-[#697B51] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500  shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                  onClick={() => handleAddToCart()}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
