import React from "react";

export default function SideBar() {
  return (
    <div className="w-[170px]  h-[calc(100vh-120px)]  bg-white flex flex-col justify-between ">
      <div className="w-full h-36 flex flex-col text-center items-center bg-white shadow-md p-4">
        <img src="/profile.png" className="w-20 h-18" alt="" />
        <p className="font-bold">
          Ram Mohan{" "}
          <span>
            <i className="text-[12px] text-[#207cc5] fa-solid fa-chevron-right"></i>
          </span>
        </p>
        <p className="text-[14px]">rammohan2@gmail.com</p>
      </div>
      <div className="bg-[#f9fdff] w-full h-14 items-center flex justify-center">
        <button className="font-bold text-[#0f72c1] text-[20px]">
          Logout{" "}
          <span>
            <i class="fa-solid fa-power-off"></i>
          </span>
        </button>
      </div>
    </div>
  );
}
