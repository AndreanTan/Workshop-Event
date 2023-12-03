import React, { Component } from "react";
import { rupiahCurrency } from "../../Utils/utils";

export function cartComponent() {
  const dummyData = {
    listItems: [
      {
        itemName: "Tiket Coldplay",
        price: "1.000.000",
        quantity: 50,
      },
      {
        itemName: "Tiket Pelatihan pembuatan anak monyet",
        price: "1.000.000",
        quantity: 50,
      },
      {
        itemName: "Tiket Pelatihan pembuatan anak anjing",
        price: "1.000.000",
        quantity: 50,
      },
      {
        itemName: "Tiket Pelatihan pembuatan anak bangsat",
        price: "1.000.000",
        quantity: 50,
      },
    ],
    totalPayment: 1000000,
  };
  return (
    <div className="bg-white flex justify-between h-fit items-center flex-col ml-48 mr-48 mt-48 mb-48 shadow-2xl pt-10">
      <div className="self-start pl-10">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="p-5 pl-12 pr-12 text-xl font-normal">
                <label className="pl-5 pr-5 pt-5 pb-5 border border-dashed border-indigo-500 rounded-md">
                  Product
                </label>
              </th>
              <th className="p-5 pl-12 pr-12 text-xl font-normal">
                <label className="pl-5 pr-5 pt-5 pb-5 border border-dashed border-indigo-500 rounded-md">
                  Price
                </label>
              </th>
              <th className="p-5 pl-12 pr-12 text-xl font-normal">
                <label className="pl-5 pr-5 pt-5 pb-5 border border-dashed border-indigo-500 rounded-md">
                  Quantity
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.listItems.map((item, key) => {
              return (
                <tr key={key}>
                  <td className="text-center pt-5 font-thin text-xl">
                    {item.itemName}
                  </td>
                  <td className="text-center pt-5 font-thin text-xl">
                    {item.price}
                  </td>
                  <td className="text-center pt-5 font-thin text-xl">
                    {item.quantity}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="bg-green-800 w-full h-28 mt-10 flex justify-end items-center pr-20">
        <label className="text-2xl text-white">Total</label>
        <label className="ml-16 text-xl bg-white pt-3 pb-3 pl-3 pr-3">
          {rupiahCurrency(dummyData.totalPayment)}
        </label>
      </div>
      <div className="w-full h-28 flex justify-end items-center pr-20">
        <button className="border p-5 w-64 hover:bg-green-800 hover:text-white text-xl rounded-lg">
          Continue Shipping
        </button>
        <button className="border p-5 w-64 hover:bg-green-800 hover:text-white text-xl rounded-lg ml-16">
          Checkout
        </button>
      </div>
    </div>
  );
}
