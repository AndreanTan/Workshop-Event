//import React from 'react'
import Img1 from "../assets/img/W1.webp";
import Img2 from "../assets/img/W2.webp";
import Img3 from "../assets/img/W3.webp";

function WhyUsHome() {
  return (
    <section className="w-full h-[709px] max-w-screen-xl mx-auto p-4 md:py-8">
      <hr class=" border-gray-200 sm:mx-auto lg:my-8" />
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[48px]">
          <h2 className="text-[57px] text-black font-[400px]">Why Us</h2>
        </div>
        <div className="mt-[59px] grid grid-cols-3 gap-[105px]">
          <div className="w-[343px] h-[428px] bg-[#D9D9D9] border border-gray-200 rounded-md shadow">
            <img
              className="w-[343px] h-[318px] rounded-t-md"
              src={Img1}
              alt=""
            />
            <div className="text-center">
              <h5 className="mt-[6px] text-[18px] font-bold tracking-tight text-black">
                Pride in Tradition
              </h5>
              <p className="mt-[6px] mx-[36px] text-[13px] font-normal text-gray-700 text-center">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
          <div className="w-[343px] h-[428px] bg-[#D9D9D9] border border-gray-200 rounded-md shadow">
            <img
              className="w-[343px] h-[318px] rounded-t-md"
              src={Img2}
              alt=""
            />
            <div className="text-center">
              <h5 className="mt-[6px] text-[18px] font-bold tracking-tight text-black">
                For a Cause
              </h5>
              <p className="mt-[6px] mx-[36px] text-[13px] font-normal text-gray-700 text-center">
                Kids across Indonesia are experiencing the benefit from your
                workshop class purchase{" "}
              </p>
            </div>
          </div>
          <div className="w-[343px] h-[428px] bg-[#D9D9D9] border border-gray-200 rounded-md shadow">
            <img
              className="w-[343px] h-[318px] rounded-t-md"
              src={Img3}
              alt=""
            />
            <div className="text-center">
              <h5 className="mt-[6px] text-[18px] font-bold tracking-tight text-black">
                Back to Nature
              </h5>
              <p className="mt-[6px] mx-[36px] text-[13px] font-normal text-gray-700 text-center">
                Our workshops are done in places that are close to nature and we
                try to make our workshops as sustainable as possible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsHome;
