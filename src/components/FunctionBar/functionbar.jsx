// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

export default function Functionbar({ setComponent }) {
  return (
    <div>
      <div className="items-center justify-center flex space-x-[3vw] mt-6">
        <div
          className="text-[#3A3740] text-xl font-normal hover:text-[#040404] hover:font-semibold hover:border-b-4 hover:border-[#040404]"
          onClick={() => setComponent("Study")}
        >
          Study
        </div>
        <div
          className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#0d0d0d]"
          onClick={() => setComponent("Quiz")}
        >
          Quiz
        </div>
        <div
          className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#0d0d0d]"
          onClick={() => setComponent("Quiz")}
        >
          Test
        </div>
        <div
          className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#0d0d0d]"
          onClick={() => setComponent("Quiz")}
        >
          Game
        </div>
        <div
          className="text-[#3A3740] text-xl font-normal hover:text-[#0d0d0d] hover:font-semibold hover:border-b-4 hover:border-[#0d0d0d]"
          onClick={() => setComponent("Quiz")}
        >
          Others
        </div>
      </div>
    </div>
  );
}

Functionbar.propTypes = {
  setComponent: PropTypes.func.isRequired,
};
