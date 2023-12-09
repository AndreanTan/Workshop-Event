import React from 'react'
import Img1  from "../assets/img/W1.jpeg"


function WorkshopCard() {
  return (
    <div className="w-[343px] h-[428px] bg-[#697B51] border rounded-md shadow-lg">
        <img className="w-[343px] h-[318px] rounded-t-md" src={Img1} alt="" />
        <div className="text-left pl-3">
            <h1 className="mt-[6px] text-[18px] font-bold  text-white">Pottery Workshop</h1>
            <h2 className="mt-[1px] text-[18px] font-normal text-white">Batik Workshop</h2>
        </div>
        <div className="mt-[10px] px-3 flex flex-row justify-between">
            <h2 className=" text-[18px] font-normal  text-white">Rp 200,000</h2>
            <h2 className=" text-[18px] font-normal text-white">Solo</h2>
        </div>
    </div>
  )
}

export default WorkshopCard