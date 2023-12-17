import React from "react";
import Hero1 from "../assets/img/H1.webp";

function FirstHeroHome() {
  const containerStyle = {
    backgroundImage: `url(${Hero1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="w-full h-[620px] max-w-screen-xl mx-auto p-4 md:py-8"
      style={containerStyle}
    >
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="mt-[80px] text-[58px] text-center">
          Experience Indonesia for a Cause
        </h1>
        <div className="w-[668px] ">
          <p className="mt-[67px] text-[20px] text-center">
            Here in Jelajah, we offer you a selection of crafting and cooking
            courses all across Indonesia. All our workshop classes are native to
            the region you will be travelling to and learn at. Our aim is that
            you get to explore Indonesia’s beauty while getting a hends on
            experience on the culture.
          </p>
          <p className="mt-5 text-[20px] text-center">
            Through this workshop you not only support locals but also charities
            as a percentage of your purchase directly goes to selected charities
            in Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FirstHeroHome;
