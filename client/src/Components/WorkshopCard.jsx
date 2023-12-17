import React from "react";
import { rupiahCurrency } from "../Utils/utils";

function WorkshopCard({ data }) {
  console.log(data.workshop_image);
  return (
    <div className="w-[343px] h-[428px] bg-[#697B51] border rounded-md shadow-lg">
      <img
        className="w-[343px] h-[318px] rounded-t-md"
        src={`http://localhost:4000/${data.workshop_image.substring(7)}`}
        alt=""
      />
      <div className="text-left pl-3">
        <h1 className="mt-[6px] text-[18px] font-bold  text-white">
          {data.workshop_name}
        </h1>
        {/* <h2 className="mt-[1px] text-[18px] font-normal text-white">{data.workshop_name}</h2> */}
      </div>
      <div className="mt-[10px] px-3 flex flex-row justify-between">
        <h2 className=" text-[18px] font-normal  text-white">
          {rupiahCurrency(data.price)}
        </h2>
        <h2 className=" text-[18px] font-normal text-white">{data.address}</h2>
      </div>
    </div>
  );
}

export default WorkshopCard;
