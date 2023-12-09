import React from 'react'
import { BsClock } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

export default function DescriptionWorkshop() {
  return (
    <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-1  place-items-center'>
            <div className='col-span-2'>
                <h1 className='text-left text-[57px] text-[#697B51] font-normal'>Pottery Workshop</h1>
                <div className='mt-8 flex flex-col items-left'>
                    <ul className='flex flex-row items-center gap-3'>
                        <li className=' text-yellow-300'><IoStar /></li>
                        <li>4</li>
                        <li>(20 Ratings)</li>
                    </ul>
                    <ul className='flex flex-row items-center gap-3'>
                        <li><BsClock /></li>
                        <li>Duration 2 hours</li>
                    </ul>
                    <ul className='flex flex-row items-center gap-3'>
                        <li><FiMessageSquare /></li>
                        <li>English or Indonesian</li>
                    </ul>
                </div>
                <div className='mt-12'>
                    <h2 className='text-left text-[28px] text-black font-[600]'>What you will learn</h2>
                    <p className='mt-2'>
                        You will learn all the basics of potter making both hand-building techniques and wheel throwing techniques. Our instructor will also show you how to decorate your pieces with traditional motifs from Bali. </p>
                </div>
                <div className='mt-12'>
                    <h2 className='text-left text-[28px] text-black font-[600]'>What will you get</h2>
                    <ul className='ml-5 mt-2 list-disc'>
                        <li>Clay (1kg)</li>
                        <li>Tools & Equipment</li>
                        <li>Supplies</li>
                        <li>Firing Services</li>
                    </ul>
                </div>
            </div>
            <div className='w-[295px] h-[542px] shadow-lg border rounded-md bg-[#D9D9D9] items-center'>
                <div className='flex flex-col item'>
                    <h2 className='mt-10 text-[28px] text-black font-[600] text-center'>Book Now</h2>
                    <form className="mx-5 mt-4">
                        <label htmlfor="number-input" className="block mb-2 text-[18px] font-medium text-black">Number of guests :</label>
                        <input type="number" min={0} id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " placeholder="0" required/>
                    </form>
                    <div className="mx-5 mt-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                        <label htmlFor="date" className="block mb-2 text-[18px] font-medium text-black">Date :</label>
                        <input datepicker datepicker-autohide type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5" placeholder="Select date"/>
                    </div>
                    <div className='mt-10 flex justify-center'>
                        <Link to={""}>
                            <button type='button' className='text-white bg-gradient-to-r bg-[#697B51] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500  shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>
                                Add to Cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </section>
  )
}
