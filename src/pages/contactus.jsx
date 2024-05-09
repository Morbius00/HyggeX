/* eslint-disable no-unused-vars */
import React from "react";
import { Profilepic } from "./assets";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-72 mt-48 space-y-10">
        <div className="w-64 h-64 rounded-full overflow-hidden">
  <img className="w-full h-full object-cover" src={Profilepic} alt="" />
</div>
      <div className="text-4xl font-bold bg-gradient-to-b from-[#06286E] to-blue-500 text-transparent bg-clip-text ">
        Contact Me
      </div>

      <div className="text-xl font-bold bg-gradient-to-b from-[#06286E] to-blue-500 text-transparent bg-clip-text  ">
        Email: rajsaha20026@gmail.com
      </div>
      <div className="text-2xl font-bold bg-gradient-to-b from-[#06286E] to-blue-500 text-transparent bg-clip-text  ">
        Phone : 9123755164
      </div>
      <div className=" flex items center justify-center w-[148px] h-[48px] rounded-full bg-gradient-to-b from-[#06286E] to-blue-500 text-xl font-normal text-white text-center hover:from-blue-600 hover:to-[#06286E]">
        <button>
          <a
            href="https://linktr.ee/raj_saha?utm_source=qr_code"
            target="_blank"
            rel="noreferrer"
          >
            Connect Me
          </a>
        </button>
      </div>
      <div className="text-3xl font-bold bg-gradient-to-b from-[#06286E] to-blue-500 text-transparent bg-clip-text ">
        Check out my Resume
       
      </div>
      <div className=" flex items center justify-center w-[148px] h-[48px] rounded-full bg-gradient-to-b from-[#06286E] to-blue-500 text-xl font-normal text-white text-center hover:from-blue-600 hover:to-[#06286E]">
        <button>
          <a
            href="https://drive.google.com/file/d/1W0n9uZ0crsRdgR7ZkrBd5fCTmP04oAaw/view"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
