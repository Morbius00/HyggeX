// eslint-disable-next-line no-unused-vars
import React from "react";
import ProblemScreen from "../components/ProblemScreen/problemscreen";
import { Brandlogo, Addon, Home } from "./assets";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import FAQ from "../components/FAQ/faq";

export default function landing() {
  // Define the breadcrumb paths
  const paths = [
    {
      title: (
        <div>
          <img src={Home} alt="Home crumb" />
        </div>
      ),
      url: "/",
    },
    { title: " > ", url: "/mathematics" },
    { title: "Mathematics >", url: "/mathematics" },
    {
      title: "Relations and Functions",
      url: "/mathematics/relation-and-function",
    },
  ];

  return (
    <>
      <div className="flex mt-20">
        <Breadcrumb paths={paths} />
      </div>
      <div className="text-4xl font-bold bg-gradient-to-b from-[#06286E] to-blue-500 text-transparent bg-clip-text mt-14 lg:mt-36 ">
        Relations and Functions ( Mathematics )
      </div>
      <div className="flex flex-col items-center justify-center">
        <ProblemScreen />
      </div>
      <div className="flex flex-row items-center justify-between mt-1">
        <div>
          <img src={Brandlogo} alt="" />
        </div>
        <div>
          <button className="flex flex-row items-center justify-center text-center font-semibold m-5 text-xl bg-gradient-to-b from-[#06286E] to-blue-500 text-transparent bg-clip-text ">
            <img src={Addon} alt="" />
            Create Flashcard
          </button>
        </div>
      </div>
      <div>
        <FAQ />
      </div>
    </>
  );
}
