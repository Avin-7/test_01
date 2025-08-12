import React from "react";
import heroImage from "../assets/heroImage.png";
import dripEffectImage from "../assets/dripEffectImage.jpg";

function Hero() {
  return (
    <>
      <div className="z-99 grid grid-cols-8 place-content-center px-28 max-lg:px-0 pt-20 bg-[#892bc7]">
        <div className="col-span-4 max-lg:col-span-4 grid pt-14 max-lg:pl-18 max-md:pl-6">
          <div>
            <h1 className=" text-8xl max-lg:text-7xl max-sm:text-6xl my-6 font-kalnia text-semibold text-white tracking-wide font-semibold leading-28 max-lg:leading-18">
              Crimson Bites
            </h1>
            <p className=" text-[28px] max-lg:text-lg leading-10 max-lg:leading-7 my-6 w-4/5 tracking-wider text-amber-100 font-stretch-115% font-kalnia">
              The Love Bite, Tasty the Delcacy.
            </p>
            <button className="animated-button my-6">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Explore Stores</span>
              <span className="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-store-icon lucide-store arr-1"
              >
                <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
                <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
                <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
              </svg>
            </button>
          </div>
        </div>
        <div className=" grid col-span-4 max-lg:col-span-4 max-md:ml-8 max-md:pt-4 ">
          <img
            src={heroImage}
            alt="cake picture"
            className="h-[90%] w-full object-cover max-lg:object-left overflow-hidden"
          />
        </div>
      </div>
      <div>
        <img src={dripEffectImage} className=" w-full h-full -z-40" alt="" />
      </div>
    </>
  );
}

export default Hero;
