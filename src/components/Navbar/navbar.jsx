/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contactus from "../../pages/contactus"
import Brandlogo from "./assets/Component 40.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="flex xl:flex-row lg:flex-row md:flex-row flex-col">
      <div className="flex flex-row lg:space-x-[25vw] xl:space-x-[38vw] justify-between md:space-x-[15vw] w-full bg-transparent">
        <div className="w-[191px] h-[39px]">
          <img src={Brandlogo} alt="Brandlogo" />
        </div>

        <div className="justify-between items-center md:justify-center flex flex-col lg:flex-row md:flex-row">
          <div>
            <div className="flex items-center">
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div
            className={`flex-1 justify-self-center backdrop-blur-xl  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center backdrop-blur-xl space-y-8 md:flex md:space-x-[3vw] md:space-y-0">
              <div className="text-[#3A3740] text-xl font-normal hover:text-[#040404] hover:font-semibold hover:border-b-4 hover:border-[#040404]">
                <Link to="/">Home</Link>
              </div>
              <div className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#040404]">
                <Link to="/">FlashCard</Link>
              </div>
              <div className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#040404]">
              <Link to="/contactus">ContactUs</Link>
              </div>

              <div className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#040404]">
                <Link to="/">FaQ</Link>
              </div>
              <div>
                <button
                  className="w-[128px] h-[48px] rounded-full bg-gradient-to-b from-[#06286E] to-blue-500 text-xl font-normal text-white text-center hover:from-blue-600 hover:to-[#06286E]"
                  onClick={() =>
                    window.open("https://linktr.ee/metahorizon", "_blank")
                  }
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
