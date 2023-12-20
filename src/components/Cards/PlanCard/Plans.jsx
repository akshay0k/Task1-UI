
import React from "react";
import "./Plans.css";

const Plans = ({ plan }) => {
  return (
    <div className="plan-card">
      <h2 className="plan-title">{plan.plan}</h2>
      <span className="offer">$ {plan.price}/mo</span>
      <span className="price">$ {plan.discountPrice}/mo</span>
      <div style={{ backgroundColor: plan.color }} className="button-container">
        <span>Get started</span>
        <span className=" material-symbols-outlined">arrow_right_alt</span>
      </div>
      <hr className="horizontal-rule" />
      <span className="what-you-get">what you'll get:</span>
      <div className="detail-container">
        <div className="detail-row">
          <span className=" material-symbols-outlined icon">person</span>
          <span className="detail">Upto {plan.users} Users</span>
        </div>
        <div className="detail-row">
          <span className=" material-symbols-outlined icon">cloud_upload</span>
          <span className="detail">Upto {plan.storage}gb Storage</span>
        </div>
        <div className="detail-row">
          <span className=" material-symbols-outlined icon">mail</span>
          <span className="detail">{plan.support}</span>
        </div>
      </div>
      <div className="feature-container">
        <p className="explore-features">
          <u>EXPLORE FEATURES</u>
        </p>
        <span style={{ color: plan.color }} className=" material-symbols-outlined">arrow_right</span>
      </div>
    </div>
  );
};

export default Plans;
