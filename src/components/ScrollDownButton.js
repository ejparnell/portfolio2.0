import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';
import "./scrollDownButton.css";

const ScrollDownButton = () => {
  return (
    <div className="scroll-down-button-container">
      <Link to="findMe" smooth={true} spy={true} className="scroll-down-button">
        <FontAwesomeIcon icon={faSortDown} size="3x" />
      </Link>
    </div>
  );
};

export default ScrollDownButton;
