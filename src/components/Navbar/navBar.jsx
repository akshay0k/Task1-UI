import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <header className="w-full flex justify-between  h-[120px] bg-[#e3f1fe]">
      <div className="flex flex-row h-full w-72 gap-10  bg-white items-center">
        <img src="/logo.png" className="w-20 h-20  ml-10"  />
        <div className="triangle-container bg-[#e3f1fe] " />
      </div>

      <div className=" bg-[#e3f1fe] w-96 h-full gap-5 flex justify-center text-center items-center">
        <div className="bg-white flex gap-2 w-60 h-12 items-center justify-center rounded-md hover:bg-[#b1e7ff] ">
          <img src="/icon1.png" className="w-10 h-10"  />
          <p className="font-bold text-[14px]">XYZ Enterprises PVt.Ltd</p>
        </div>
        <div className="w-12 h-12 bg-white justify-center items-center flex rounded-md hover:bg-[#b1e7ff]">
          <i className="fa-solid fa-angle-down text-[20px]"></i>
        </div>
      </div>
    </header>
  );
}
