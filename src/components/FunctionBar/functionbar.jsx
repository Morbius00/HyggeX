// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function functionbar() {
  return (
    <div>
      <div className="items-center justify-center flex space-x-[3vw] mt-6">
        <div className="text-[#3A3740] text-xl font-normal hover:text-[#040404] hover:font-semibold hover:border-b-4 hover:border-[#040404]">
          <Link to="/">Study</Link>
        </div>
        <div className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#0d0d0d]">
          <Link to="/">Quiz</Link>
        </div>
        <div className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#0d0d0d]">
          <Link to="/">Test</Link>
        </div>
        <div className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#0d0d0d]">
          <Link to="/">Game</Link>
        </div>
        <div className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#0d0d0d]">
          <Link to="/">Others</Link>
        </div>
      </div>
    </div>
  );
}
