import React from "react";

export default function RightSidebar() {
  return (
    <div className="w-[60px]  flex justify-between flex-col">
      <div className="flex items-center justify-end ">
        <span className="menu-icons  bg-white w-8 h-7  rounded-md items-center ">
          <i className="fa-solid fa-bell w-6 h-5 ml-2"></i>
        </span>
      </div>
      <div className="flex flex-col justify-end items-end gap-5">
        <div className="bg-white w-10 h-28 mt-64 rounded-md"></div>
        <button className="w-8 h-8 text-[#a52fc3] font-bold text-[20px] bg-[#d3e9ff] rounded-full">+</button>
      </div>
    </div>
  );
}
