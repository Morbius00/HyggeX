// eslint-disable-next-line no-unused-vars
import React from "react";
import Functionbar from "../components/FunctionBar/functionbar"

export default function landing() {
  return (
    <>
      <div className="text-4xl font-bold bg-gradient-to-b from-[#06286E] to-blue-500 text-transparent bg-clip-text mt-52  ">
        Relations and Functions ( Mathematics )
      </div>
      <div className="flex items-center justify-center">
        <Functionbar />
      </div>
    </>
  );
}
