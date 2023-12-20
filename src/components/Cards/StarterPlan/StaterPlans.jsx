import React from "react";
import "./StarterPlan.css";

const StarterPlans = ({ plan }) => {
  return (
    <div className="starter-plans-container">
      <div className="starter-plan-card">
        <h6
          style={{ backgroundColor: plan.color }}
          className="starter-plan-title"
        >
          {plan.title}
        </h6>
        <h2>{plan.planName}</h2>
        <p className="starter-plan-description">{plan.detail} </p>
        <div
          style={{ backgroundColor: plan.color }}
          className="starter-plan-button"
        >
          <span>{plan.connect}</span>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </div>
      </div>

      <div className="starter-plan-features">
        <span>What you'll get :</span>
        <div className="features">
          <span className="feature-icon material-symbols-outlined">person</span>
          <span className="feature-details">{`Upto ${plan.users} Users`}</span>
        </div>
        {plan.storage && (
          <div className="features">
            <span className="feature-icon material-symbols-outlined">
              cloud_upload
            </span>
            <span className="feature-details">
              {`Upto ${plan.storage}gb Storage`}
            </span>
          </div>
        )}
        {plan.support && (
          <div className="features">
            <span className="feature-icon material-symbols-outlined">mail</span>
            <span className="feature-details">{plan.support}</span>
          </div>
        )}
        <div className="features">
          <span className="feature-icon material-symbols-outlined">
            done_all
          </span>
          <span className="feature-details">{plan.features}</span>
        </div>
      </div>
    </div>
  );
};

export default StarterPlans;
