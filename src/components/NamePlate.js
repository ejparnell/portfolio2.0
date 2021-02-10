import React from "react";
import ScrollDownButton from "./ScrollDownButton";
import "./namePlate.css";

const NamePlate = ({ title, subtitle }) => {
  return (
    <div className="name-plate-container">
      <p className="name-plate-text-title">{title}</p>
      {subtitle && <p className="name-plate-text-subtitle">{subtitle}</p>}
      <ScrollDownButton />
    </div>
  );
};

export default NamePlate;
