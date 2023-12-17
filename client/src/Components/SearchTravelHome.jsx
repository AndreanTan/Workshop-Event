import React from "react";
import S1 from "../assets/img/S1.webp";

function SearchTravelHome() {
  const containerStyle = {
    backgroundImage: `url(${S1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="w-full h-[500px] max-w-screen-xl mx-auto p-4 md:py-8"
      style={containerStyle}
    >
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="mt-[80px] text-[58px] text-center">
          Where are you traveling to?
        </h1>
      </div>
    </section>
  );
}

export default SearchTravelHome;
