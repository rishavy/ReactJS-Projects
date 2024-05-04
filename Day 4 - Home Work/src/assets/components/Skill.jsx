import React from "react";
import { CiMemoPad } from "react-icons/ci";

function Skill() {
  return (
    <div className="w-[50%] m-auto flex pt-10 bg-white border-l-2 border-r-2">
      <div>
        <CiMemoPad className="text-[#46bbff] text-[5.5rem] mt-10 ml-5" />
        <h1 className="font-extrabold text-center text-xl mt-1 ml-4">
          Skills and Samples
        </h1>
      </div>
      <div className=" border-r-4 border-t-4 border-black border-b-4 px-6  py-6 flex flex-col gap-5">
      <div className="flex gap-10 px-6">
        <h1 className="font-bold  w-[60px]">React.js</h1>
          <p class="text-[#46bbff]">●●</p>
        </div>
        
        <div className="flex gap-10 px-6">
        <h1 className="font-bold w-[60px]">Javascript</h1>
          <p class="text-[#46bbff]">●●●</p>
        </div>

        <div className="flex gap-10 px-6">
          <h1 className="font-bold w-[60px]">Html</h1>
          <p class="text-[#46bbff]">●●●●●</p>
        </div>

        <div className="flex gap-10 px-6">
        <h1 className="font-bold w-[60px] ">Css</h1>
          <p class="text-[#46bbff]">●●●●●</p>
        </div>
      </div>
      <div className="border-b-4 border-t-4 border-black px-6">
        <div className="flex gap-10 px-6 pt-4">
          <h1 className="font-bold ">Zapier</h1>
          <p>
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="flex gap-10 px-6">
          <h1 className="font-bold ">spoke</h1>
          <p>
            Lorem ipsum dolor sit amet. 
          </p>
        </div>

        <div className="flex gap-10 px-6">
          <h1 className="font-bold ">nDash</h1>
          <p> Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;