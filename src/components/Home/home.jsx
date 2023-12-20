import React, { useState } from "react";
import "./home.css";

import Plans from "../Cards/PlanCard/Plans";
import StarterPlans from "../Cards/StarterPlan/StaterPlans";

const Home = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      plan: "Basic",
      price: 89.99,
      discountPrice: 9.99,
      users: 25,
      storage: 25,
      support: "Email Support",
      color: "#ffe7a9",
    },
    {
      plan: "Standard",
      price: 189.99,
      discountPrice: 99.99,
      users: 50,
      storage: 60,
      support: "Email+Chat Support",
      color: "#fe9394",
    },
    {
      plan: "Premium",
      price: 389.99,
      discountPrice: 199.99,
      users: 75,
      storage: 100,
      support: "Email+Chat+Whatsapp Support",
      color: "#e7a2ff",
    },
  ];

  const starterPlans = [
    {
      title: "Free Forever",
      planName: "Free Starter",
      detail:
        "The quickest and easiest way to try Protocols with basic functionalities",
      connect: "Get started",
      users: 8,
      storage: 3,
      support: "Email Support",
      features:
        "Basics Of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor. Director and Team Management included",
      color: "#c6ff8e",
    },
    {
      title: "Let's Connect",
      planName: "Enterprise Plan",
      detail:
        "Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success",
      connect: "Contact Us",
      users: 75,
      features: "Customization of all other features",
      color: "#8ab9ff",
    },
  ];

  const handleSwitchToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-heading">
        <h3 className="font-semibold text-[30px]">Choose a plan that's just right for you!</h3>
        <div className="switch-box" onClick={handleSwitchToggle}>
          <span className={`month ${isMonthly ? "active" : ""}`}>Monthly</span>
          <span className={`annual ${!isMonthly ? "active" : ""}`}>
            Annually<sup>-10%</sup>
          </span>
        </div>
      </div>
      
      <div className="plans-card ">
        {plans.map((plan, i) => (
        <Plans key={i} plan={plan}/>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {starterPlans.map((plan, i) => (
          <StarterPlans key={i} plan={plan} />
        ))}
      </div>
      <div className="unique-features">
        <span>
          *some unique features are provided as add-ons with individual plans
          for each feature
        </span>
      </div>
    </div>
  );
};

export default Home;
