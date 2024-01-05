import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src='/logo.png' alt="logo" />
        <div className="triangle" />
      </div>
      <div className="header-content">
        <div className="logo-companyname">
          <img src='/icon1.png' alt="xyz-logo" />
          <h6 className="font-semi-bold text-[14px]">XYZ Enterprises Pvt.Ltd</h6>
        </div>
        <div className="arrow-btn">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
