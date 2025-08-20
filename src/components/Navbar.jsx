import React, { useState } from "react";
import crimsonBitesLogo from "../assets/crimsonBitesLogo.png";
import { Menu } from "lucide-react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false); //state which handles the small screen navbar
  return (
    <div>
      <div className="fixed w-full grid grid-cols-2 p-4 bg-[#892bc7] z-[999]">
        <div className=" place-self-center">
          <div className=" flex gap-4 justify-center items-center">
            <img
              src={crimsonBitesLogo}
              className=" size-9 object-cover"
              alt="crimson-bites-logo"
            />
            <a
              href="#home"
              className=" text-white font-kalnia text-xl max-md:text-lg max-sm:text-sm font-medium"
            >
              Crimson bites
            </a>
          </div>
        </div>
        <div className=" place-self-center max-lg:hidden">
          <div className=" flex gap-20">
            <a
              href="#products"
              className=" text-gray-50 text-[16px] font-jost tracking-wider font-normal hover:text-yellow-100"
            >
              Products
            </a>
            <a
              href="#stores"
              className=" text-gray-50 text-[16px] font-jost tracking-wider font-normal hover:text-yellow-100"
            >
              Stores
            </a>
            <a
              href="#contact-us"
              className=" text-gray-50 text-[16px] font-jost tracking-wider font-normal hover:text-yellow-100"
            >
              Contact
            </a>
          </div>
        </div>
        <div
          className="place-self-center
          ml-20
           hidden max-lg:block"
        >
          <button
            className=" text-white"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <Menu />
          </button>
        </div>
      </div>
      {showNavbar && (
        <div className=" hidden max-lg:block ">
          <div className="w-full bg-transparent fixed top-16 z-[999]">
            <div className="bg-yellow-50 rounded-b-xl flex flex-col justify-center items-center gap-10 p-5">
              <a
                href="#products"
                className=" text-black text-[16px] font-jost tracking-wider font-normal hover:text-yellow-100"
              >
                products
              </a>
              <a
                href="#stores"
                className=" text-black text-[16px] font-jost tracking-wider font-normal hover:text-yellow-100"
              >
                stores
              </a>
              <a
                href="#contact-us"
                className="text-black text-[16px] font-jost tracking-wider font-normal hover:text-yellow-100"
              >
                contact
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
