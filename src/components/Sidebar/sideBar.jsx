import React, { useState } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const handleMenuClick = (menu) => {
    setSelectedMenuItem(menu);
  };

  return (
    <div className="sidebar-container">
      <div className="profile">
        <img src="./profile.png" alt="profile-image" />
        <div className="profile-content">
          <div className="profile-name-icon">
            <span className="profile-name">Ram Mohan</span>
            <span
              style={{ color: "#408fce" }}
              className="material-symbols-outlined profile-icon"
            >
              chevron_right
            </span>
          </div>
          <span className="profile-mail">rammohan2@gmail.com</span>
        </div>
      </div>

      <div className="side-menu-container">
        <div
          className={`side-menu ${
            selectedMenuItem === "Dashboard" ? "selected" : ""
          }`}
          onClick={() => handleMenuClick("Dashboard")}
        >
          <span className="material-symbols-outlined menu-icons">
            dashboard
          </span>
          <span className="side-menu-title">Dashboard</span>
        </div>
        <div
          className={`side-menu ${
            selectedMenuItem === "Perks" ? "selected" : ""
          }`}
          onClick={() => handleMenuClick("Perks")}
        >
          <span className="material-symbols-outlined menu-icons">
            potted_plant
          </span>
          <span className="side-menu-title">Perks</span>
        </div>
        <div
          className={`side-menu ${
            selectedMenuItem === "Addons" ? "selected" : ""
          }`}
          onClick={() => handleMenuClick("Addons")}
        >
          <span className="material-symbols-outlined menu-icons">
            extension
          </span>
          <span className="side-menu-title">Addons</span>
        </div>
        <div
          className={`side-menu ${
            selectedMenuItem === "FAQ" ? "selected" : ""
          }`}
          onClick={() => handleMenuClick("FAQ")}
        >
          <span className="material-symbols-outlined menu-icons">quiz</span>
          <span className="side-menu-title">FAQ</span>
        </div>
        <div
          className={`side-menu ${
            selectedMenuItem === "Support" ? "selected" : ""
          }`}
          onClick={() => handleMenuClick("Support")}
        >
          <span className="material-symbols-outlined menu-icons">
            support_agent
          </span>
          <span className="side-menu-title">Support</span>
        </div>
      </div>

      <div className="logout">
        <span className="side-menu-title">Logout</span>
        <span className="material-symbols-outlined menu-icons">
          power_settings_new
        </span>
      </div>
    </div>
  );
};

export default SideBar;
