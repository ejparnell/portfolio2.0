import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';
import "./scrollDownButton.css";

const ScrollDownButton = () => {
  const [scrollButton, setScrollButton] = useState(false);

  const handleScrollButtonChange = () => {
    if (scrollButton === false) {
      setScrollButton(true);
    }
    if (scrollButton === true) {
      setScrollButton(false);
    }
  }

  return (
    <div className="scroll-down-button-container">
      <Link to={scrollButton ? "homepage" : "findMe"} smooth={true} spy={true} className="scroll-down-button" onClick={handleScrollButtonChange}>
        {scrollButton ? <FontAwesomeIcon icon={faSortUp} size="3x" /> : <FontAwesomeIcon icon={faSortDown} size="3x" />}
      </Link>
    </div>
  );
};

export default ScrollDownButton;
