import { Link } from "react-router-dom";
import { rupiahCurrency } from "../../Utils/utils";
import Footer from "../../Components/Footer";

export default function CartComponent() {
  const dummyData = {
    listItems: [
      {
        itemName: "Tiket Coldplay",
        price: 1000000,
        quantity: 50,
      },
      {
        itemName: "Tiket Pelatihan ",
        price: 1000000,
        quantity: 50,
      },
      {
        itemName: "Tiket Pelatihan",
        price: 1000000,
        quantity: 50,
      },
      {
        itemName: "Tiket Pelatihan",
        price: 1000000,
        quantity: 50,
      },
    ],
    totalPayment: 1000000,
  };
  return (
    <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="border rounded-lg shadow-lg">
        <div className="flex">
          <div className="w-3/4 px-10 py-10">
            <div className="flex justify-between border-b border-gray-400 pb-8">
              <h1 className="font-semibold text-2xl up">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">3 Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
            </div>
            {dummyData.listItems.map ((item, key) => {
              return (
                <div key={key} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5"> 
                    <div className="w-20">
                      <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt=""/>
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-md uppercase">{item.itemName}</span>
                      <span className="text-red-500 text-xs">Apple</span>
                      <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
                    <input className="mx-2 border text-center w-8" type="text" value="1"/>
                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                  </div>
                    <span className="text-center w-1/5 font-semibold text-sm">{rupiahCurrency(item.price)}</span>
                    <span className="text-center w-1/5 font-semibold text-sm">{rupiahCurrency(item.price)}</span>
                </div>
              );
            })}
          </div>

          <div id="summary" className="w-1/4 px-8 py-10 bg-green-200 rounded-r-lg">
            <h1 className="font-semibold text-2xl border-b border-gray-400 pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-md ">Total Cost (1 items)</span>
              <span className="font-semibold text-md">{rupiahCurrency(dummyData.totalPayment)}</span>
            </div>
            <div className="mt-8 border-t border-gray-400">
              <div className="flex font-semibold justify-between mt-3 mb-3 text-md uppercase">
                <span>Total cost</span>
                <span>{rupiahCurrency(dummyData.totalPayment)}</span>
              </div>
              <button className="bg-[#697B51] font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full rounded-md">Checkout</button>
            </div>
            <div className="mt-2 flex flex-row justify-center items-center text-center">
              <span className="font-normal text-md" >Or</span>
              <span className="font-semibold underline text-md hover:text-gray-500" >
                <Link to={"/workshop"} >
                  , Continue Shoping
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
