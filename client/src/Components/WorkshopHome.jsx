import React from 'react'
import Img1  from "../assets/img/W1.jpeg"
import { Link } from 'react-router-dom'

function WorkshopHome() {
  return (
    <section className="w-full h-[709px] max-w-screen-xl mx-auto p-4 md:py-8">
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-[48px]'>
                <h2 className='text-[57px] text-black font-[400px]'>Workshop</h2>
            </div>
            <div className="mt-[59px] grid grid-cols-3 gap-[105px]">
                <div className="w-[343px] h-[428px] bg-[#D9D9D9] border border-gray-200 rounded-md shadow">
                    <img className="w-[343px] h-[318px] rounded-t-md" src={Img1} alt="" />
                    <div className="text-center">
                        <h5 className="mt-[6px] text-[18px] font-bold tracking-tight text-black">Pride in Tradition</h5>
                        <p className="mt-[6px] mx-[36px] text-[13px] font-normal text-gray-700 text-center">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            </div> 
        </div>
        <div className='mt-16 flex justify-center'>
            <Link to={"/workshop"}>
                <button type='button' className='text-white bg-gradient-to-r bg-[#697B51] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500  shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>
                    Learn More
                </button>
            </Link>
        </div>
    </section>
  )
}

export default WorkshopHome