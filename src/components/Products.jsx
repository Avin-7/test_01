import React, { useEffect, useState } from "react";
import CircularGallery from "./CircularGallery";

function Products() {
  const [dynamicBendValue, setDynamicBendValue] = useState(3);

  const screenWidth = window.screen.width;

  useEffect(() => {
    if (screenWidth < 1024) {
      console.log(`Screen Width: ${screenWidth}px`);
      setDynamicBendValue(0);
    }
  }, [screenWidth]);

  return (
    <div className=" bg-[#eeeeee] pt-60 pb-60">
      <h1 className="text-5xl font-kalnia font-semibold text-center text-[#892bc7]">
        Go Ahead, Pick Your Treat
      </h1>
      <div
        className=" pt-10 "
        style={{ height: "600px", position: "relative" }}
      >
        <CircularGallery
          bend={dynamicBendValue}
          textColor="#000"
          font="bold 300px Montserrat"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
}

export default Products;
