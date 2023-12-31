import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WorkshopCard from "./WorkshopCard";
import axios from "axios";

function WorkshopHome() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const getData = await axios.get(
        "http://localhost:4000/api/getNewWorkshop"
      );
      console.log(getData.data);
      setData(getData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="w-full h-[709px] max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[48px]">
          <h2 className="text-[57px] text-black font-[400px]">Workshop</h2>
        </div>
        <div className="mt-[59px] flex flex-nowrap gap-12">
          {/* <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard /> */}
          {data.map((item, index) => {
            return (
              <Link key={index} to={`/descworkshop/${item.id}`}>
                <WorkshopCard data={item} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link to={"/workshop"}>
          <button
            type="button"
            className="text-white bg-gradient-to-r bg-[#697B51] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500  shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Explore More
          </button>
        </Link>
      </div>
    </section>
  );
}

export default WorkshopHome;
