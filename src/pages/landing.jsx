// eslint-disable-next-line no-unused-vars
import React from "react";
import ProblemScreen from "../components/ProblemScreen/problemscreen";
import { Brandlogo, Addon } from "./assets";

export default function landing() {
  return (
    <>
      <div className="text-4xl font-bold bg-gradient-to-b from-[#06286E] to-blue-500 text-transparent bg-clip-text mt-52  ">
        Relations and Functions ( Mathematics )
      </div>
      <div className="flex flex-col items-center justify-center">
        <ProblemScreen />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div>
          <img src={Brandlogo} alt="" />
        </div>
        <div >
          <button className="flex flex-row items-center justify-center text-center font-semibold m-5 text-xl bg-gradient-to-b from-[#06286E] to-blue-500 text-transparent bg-clip-text ">
            <img src={Addon} alt="" />
            Create Flashcard
          </button>
        </div>
        
      </div>
    </>
  );
}
